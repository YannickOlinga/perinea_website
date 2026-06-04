import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './LegalPage.css'

const CONTENT = {
  '/mentions-legales': {
    title: 'Mentions légales',
    updated: '1er janvier 2025',
    sections: [
      {
        heading: 'Éditeur du site',
        body: `Le site perinea.fr est édité par la société Perinea SAS, société par actions simplifiée au capital de 10 000 €, immatriculée au Registre du Commerce et des Sociétés sous le numéro 123 456 789 RCS Paris.\n\nSiège social : 75 rue de la Santé, 75014 Paris, France.\nEmail : contact@perinea.fr`,
      },
      {
        heading: 'Directeur de la publication',
        body: 'Le directeur de la publication est le représentant légal de Perinea SAS.',
      },
      {
        heading: 'Hébergement',
        body: 'Le site est hébergé par Vercel Inc., 340 Pine Street, Suite 700, San Francisco, CA 94104, États-Unis.',
      },
      {
        heading: 'Propriété intellectuelle',
        body: 'L\'ensemble des contenus présents sur le site perinea.fr (textes, images, vidéos, graphismes, logotypes, etc.) est la propriété exclusive de Perinea SAS ou fait l\'objet d\'une autorisation d\'utilisation. Toute reproduction, représentation, modification, publication, transmission ou dénaturation, totale ou partielle, du site ou de son contenu, par quelque procédé que ce soit, sans l\'autorisation écrite préalable de Perinea SAS, est interdite.',
      },
      {
        heading: 'Limitation de responsabilité',
        body: 'Les informations contenues sur ce site sont aussi précises que possible. Perinea SAS ne peut toutefois être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour. Les informations médicales fournies sur ce site sont données à titre indicatif et ne se substituent pas à un avis médical professionnel.',
      },
      {
        heading: 'Données personnelles',
        body: 'Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d\'un droit d\'accès, de rectification, de portabilité et d\'effacement de vos données. Pour exercer ces droits, contactez-nous à : privacy@perinea.fr.',
      },
      {
        heading: 'Cookies',
        body: 'Le site utilise des cookies techniques nécessaires à son fonctionnement et des cookies analytiques anonymisés. Vous pouvez paramétrer l\'utilisation des cookies via les paramètres de votre navigateur.',
      },
      {
        heading: 'Droit applicable',
        body: 'Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.',
      },
    ],
  },

  '/confidentialite': {
    title: 'Politique de confidentialité',
    updated: '27 mars 2025',
    sections: [
      {
        heading: '1. Introduction',
        body: 'Perinea SAS ("nous", "notre") s\'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre site web et nos services.',
      },
      {
        heading: '2. Données collectées',
        body: 'Nous collectons les données suivantes :\n\n— Données que vous nous fournissez directement : nom, prénom, adresse email, adresse postale lors d\'une commande, informations de paiement (traitées de manière sécurisée par nos prestataires).\n\n— Données collectées automatiquement : adresse IP, type de navigateur, pages visitées, durée de visite, via des cookies techniques et analytiques.\n\n— Données de santé (via l\'application) : données biométriques issues du biofeedback périnéal, uniquement stockées localement sur votre appareil, jamais transmises à des tiers sans votre consentement explicite.',
      },
      {
        heading: '3. Utilisation des données',
        body: 'Vos données sont utilisées pour : traiter et suivre vos commandes, vous fournir le service applicatif Perinea, améliorer nos produits et services, vous envoyer des communications commerciales (avec votre accord), prévenir la fraude et assurer la sécurité.',
      },
      {
        heading: '4. Partage des données',
        body: 'Nous ne vendons jamais vos données personnelles. Nous pouvons partager des informations avec des prestataires techniques (hébergement, paiement, livraison) dans le strict cadre de l\'exécution de nos services, et uniquement dans le respect du RGPD.',
      },
      {
        heading: '5. Cookies',
        body: 'Nous utilisons des cookies techniques indispensables au fonctionnement du site et des cookies analytiques anonymisés (Plausible Analytics). Aucun cookie publicitaire tiers n\'est déposé sans votre consentement.',
      },
      {
        heading: '6. Vos droits',
        body: 'Conformément au RGPD, vous disposez des droits suivants : accès à vos données, rectification, effacement ("droit à l\'oubli"), portabilité, limitation du traitement, opposition. Pour exercer ces droits : privacy@perinea.fr. Vous disposez également du droit d\'introduire une réclamation auprès de la CNIL (www.cnil.fr).',
      },
      {
        heading: '7. Conservation des données',
        body: 'Vos données sont conservées pendant la durée nécessaire à l\'exécution du contrat et au respect de nos obligations légales (3 ans pour les données clients après la fin de la relation commerciale, 10 ans pour les données comptables).',
      },
      {
        heading: '8. Sécurité',
        body: 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, toute modification, divulgation ou destruction.',
      },
      {
        heading: '9. Contact',
        body: 'Pour toute question relative à vos données personnelles : privacy@perinea.fr\nPerinea SAS — 75 rue de la Santé, 75014 Paris.',
      },
    ],
  },

  '/garantie': {
    title: 'Politique de garantie',
    updated: '29 mars 2025',
    sections: [
      {
        heading: '1. Couverture de la garantie',
        body: 'Perinea garantit le dispositif Perinea One contre tout défaut de matériaux et de fabrication dans des conditions normales d\'utilisation pour une durée de deux (2) ans à compter de la date d\'achat, pour l\'acheteur initial.',
      },
      {
        heading: '2. Services de garantie',
        body: 'En cas de défaut couvert par la garantie, Perinea pourra, à sa discrétion : réparer le produit défectueux, remplacer le produit par un produit identique ou équivalent, rembourser le prix d\'achat. Les produits de remplacement sont garantis pour la durée restante de la garantie initiale.',
      },
      {
        heading: '3. Obligations de l\'acheteur',
        body: 'Pour bénéficier de la garantie, vous devez : conserver votre preuve d\'achat, notifier Perinea du défaut dans les meilleurs délais, suivre les instructions de retour fournies par notre service client.',
      },
      {
        heading: '4. Exclusions de garantie',
        body: 'La garantie ne couvre pas : les dommages causés par une mauvaise utilisation ou une utilisation contraire aux instructions, les accidents ou chutes, l\'usure normale, l\'exposition à des produits chimiques incompatibles, les modifications non autorisées du produit, les dommages esthétiques n\'affectant pas le fonctionnement.',
      },
      {
        heading: '5. Procédure de réclamation',
        body: 'Pour faire valoir votre garantie, contactez notre service client à support@perinea.fr en indiquant votre numéro de commande et une description détaillée du problème. Notre équipe vous guidera dans la procédure de retour.',
      },
      {
        heading: '6. Limitation de responsabilité',
        body: 'Dans les limites autorisées par la loi applicable, la responsabilité de Perinea au titre de la garantie est limitée au prix d\'achat du produit. Perinea ne pourra être tenu responsable des dommages indirects, consécutifs ou spéciaux.',
      },
      {
        heading: '7. Garantie légale de conformité',
        body: 'Indépendamment de la présente garantie commerciale, vous bénéficiez de la garantie légale de conformité (articles L. 217-4 et suivants du Code de la consommation) et de la garantie contre les vices cachés (articles 1641 et suivants du Code civil).',
      },
    ],
  },

  '/retours': {
    title: 'Retours et échanges',
    updated: '1er janvier 2025',
    sections: [
      {
        heading: 'Droit de rétractation',
        body: 'Conformément à l\'article L. 221-18 du Code de la consommation, vous disposez d\'un délai de quatorze (14) jours calendaires à compter de la réception de votre commande pour exercer votre droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.',
      },
      {
        heading: 'Conditions de retour',
        body: 'Pour être éligible au retour, le produit doit être : retourné dans son emballage d\'origine, avec tous ses accessoires et documents, dans un état permettant sa remise en vente. Pour des raisons d\'hygiène, les produits déballés et utilisés ne peuvent pas être retournés, conformément à l\'article L. 221-28 du Code de la consommation.',
      },
      {
        heading: 'Procédure de retour',
        body: 'Pour initier un retour :\n\n1. Contactez notre service client à support@perinea.fr avec votre numéro de commande.\n2. Nous vous enverrons une étiquette de retour prépayée sous 48h.\n3. Déposez le colis dans le point relais indiqué sous 5 jours ouvrés.\n4. Votre remboursement sera traité dans un délai de 14 jours suivant la réception du retour.',
      },
      {
        heading: 'Remboursements',
        body: 'Les remboursements sont effectués sur le moyen de paiement d\'origine dans un délai de 14 jours suivant la réception du produit retourné. Le montant remboursé comprend le prix du produit et les frais de livraison standard. Les frais de livraison express ne sont pas remboursés.',
      },
      {
        heading: 'Échanges',
        body: 'Pour un échange (taille, couleur, formule), contactez notre service client à support@perinea.fr. Les échanges sont traités sous 5 jours ouvrés après réception du produit retourné.',
      },
      {
        heading: 'Annulation de précommande',
        body: 'Les précommandes peuvent être annulées gratuitement et sans justification jusqu\'à l\'expédition du produit. Pour annuler, contactez-nous à support@perinea.fr en mentionnant votre numéro de commande.',
      },
      {
        heading: 'Contact service client',
        body: 'Pour toute question relative à vos retours et échanges :\nEmail : support@perinea.fr\nHoraires : Lundi – Vendredi, 9h – 18h (heure de Paris)',
      },
    ],
  },
}

function LegalPage() {
  const page = CONTENT[window.location.pathname]

  if (!page) return null

  return (
    <div className="lp">
      <Header />

      <section className="lp-hero">
        <div className="lp-hero__inner">
          <span className="lp-eyebrow">PERINEA</span>
          <h1 className="lp-hero__title">{page.title}</h1>
          <p className="lp-hero__updated">Dernière mise à jour : {page.updated}</p>
        </div>
      </section>

      <section className="lp-content">
        <div className="lp-content__inner">
          {page.sections.map((s, i) => (
            <div key={i} className="lp-section">
              <h2 className="lp-section__heading">{s.heading}</h2>
              <div className="lp-section__body">
                {s.body.split('\n\n').map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LegalPage
