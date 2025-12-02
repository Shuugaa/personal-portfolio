import React from 'react';

const MentionsLegales: React.FC = () => (
  <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded shadow max-w-2xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Mentions légales</h2>
    <h3 className="text-lg font-semibold mt-4 mb-2">Éditeur du site</h3>
    <p>
      Samy MAISSE<br />
      Portfolio personnel<br />
      Contact :
      <a
        href={"mailto:" + "cmp2cfw8n" + "&#64;" + "mozmail.com"}
        className="text-blue-600 hover:underline"
      >
      &nbsp; cmp2cfw8n&#64;mozmail.com
      </a>
    </p>
    <h3 className="text-lg font-semibold mt-4 mb-2">Hébergeur</h3>
    <p>
      Vercel Inc.<br />
      440 N Barranca Ave #4133, Covina, CA 91723, USA
    </p>
    <h3 className="text-lg font-semibold mt-4 mb-2">Propriété intellectuelle</h3>
    <p>
      L’ensemble des contenus (textes, images, code) présents sur ce site sont la propriété exclusive de l’éditeur, sauf mention contraire. Toute reproduction, représentation, modification ou adaptation, totale ou partielle, est interdite sans l’accord préalable de l’éditeur.
    </p>
    <h3 className="text-lg font-semibold mt-4 mb-2">Données personnelles</h3>
    <p>
      Ce site ne collecte aucune donnée personnelle.
    </p>
    <h3 className="text-lg font-semibold mt-4 mb-2">Crédits</h3>
    <p>
      Icônes, images et polices utilisées sont libres de droits ou appartiennent à l’éditeur.
    </p>
  </div>
);

export default MentionsLegales;
