import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_hyTpu7hV_4otXJBxMe1YQ68a8x8ZHqNwR');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nom, prenom, adresse, email, telephone, formation, prix, details } = body;

    // Validation des données
    if (!nom || !prenom || !adresse || !email || !telephone || !formation) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Template HTML pour l'email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Nouvelle demande de formation</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
            .formation-details { background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 15px 0; }
            .contact-info { background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 15px 0; }
            .price { font-size: 24px; font-weight: bold; color: #ff6b35; }
            .label { font-weight: bold; color: #555; }
            .value { color: #333; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎓 Nouvelle demande de formation</h1>
              <p>Un client souhaite s'inscrire à une formation</p>
            </div>
            
            <div class="content">
              <div class="formation-details">
                <h2>📚 Formation demandée</h2>
                <p><span class="label">Formation:</span> <span class="value">${formation}</span></p>
                <p><span class="label">Prix:</span> <span class="value price">${prix}</span></p>
                <h3>Détails de la formation:</h3>
                <ul>
                  ${details.map((detail: string) => `<li>${detail}</li>`).join('')}
                </ul>
              </div>
              
              <div class="contact-info">
                <h2>👤 Coordonnées du client</h2>
                <p><span class="label">Nom:</span> <span class="value">${nom}</span></p>
                <p><span class="label">Prénom:</span> <span class="value">${prenom}</span></p>
                <p><span class="label">Adresse:</span> <span class="value">${adresse}</span></p>
                <p><span class="label">Email:</span> <span class="value">${email}</span></p>
                <p><span class="label">Téléphone:</span> <span class="value">${telephone}</span></p>
              </div>
              
              <p style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 8px; border-left: 4px solid #4caf50;">
                <strong>Action requise:</strong> Veuillez contacter ce client pour confirmer son inscription et organiser les modalités de paiement.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Envoi de l'email avec un domaine par défaut de Resend
    const { data, error } = await resend.emails.send({
      from: 'inscription@mbproduction.com',
      to: ['samuelkouame429@gmail.com'],
      subject: `🎓 Nouvelle demande: ${formation} - ${nom} ${prenom}`,
      html: htmlContent,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email envoyé avec succès', data },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur API:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 