import { NextRequest, NextResponse } from 'next/server';

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

    // Simulation d'envoi d'email (pour test)
    console.log('📧 Email simulé envoyé à Samuelkouame429@gmail.com');
    console.log('📋 Données reçues:', {
      nom,
      prenom,
      adresse,
      email,
      telephone,
      formation,
      prix,
      details
    });

    // Attendre 1 seconde pour simuler l'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: 'Email envoyé avec succès (simulation)' },
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