# Configuration Email - MB Production

## 🚀 Configuration Resend

Pour que le système d'envoi d'emails fonctionne, suivez ces étapes :

### 1. Créer un compte Resend
- Allez sur [https://resend.com](https://resend.com)
- Créez un compte gratuit
- Vous obtenez 3000 emails/mois gratuitement

### 2. Obtenir votre clé API
- Dans votre dashboard Resend
- Allez dans "API Keys"
- Créez une nouvelle clé API
- Copiez la clé

### 3. Configurer les variables d'environnement
Créez un fichier `.env.local` à la racine du projet :

```env
RESEND_API_KEY=re_votre_cle_api_ici
```

### 4. Vérifier votre domaine (Optionnel)
Pour un email professionnel, vous pouvez :
- Ajouter votre domaine dans Resend
- Changer l'expéditeur dans `app/api/contact-formation/route.ts`

## 📧 Fonctionnalités

### Modal de Formation
- ✅ Clic sur une formation → Ouvre un modal
- ✅ Formulaire avec validation
- ✅ Envoi automatique vers `Samuelkouame429@gmail.com`
- ✅ Email HTML professionnel avec détails

### Champs du formulaire
- Nom et Prénom
- Adresse complète
- Email
- Téléphone

### Email reçu
L'email contient :
- 📚 Détails de la formation demandée
- 💰 Prix affiché
- 👤 Coordonnées complètes du client
- 🎯 Action requise

## 🔧 Test

1. Lancez le serveur : `npm run dev`
2. Cliquez sur une formation
3. Remplissez le formulaire
4. Vérifiez votre email `Samuelkouame429@gmail.com`

## 🎨 Personnalisation

Vous pouvez modifier :
- Le template email dans `app/api/contact-formation/route.ts`
- Les couleurs et styles du modal dans `app/components/FormationModal.tsx`
- L'adresse email de destination

## 📱 Responsive
Le modal s'adapte parfaitement sur mobile et desktop ! 