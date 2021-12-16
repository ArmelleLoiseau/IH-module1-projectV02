const textNodes = [
  {
    id: `isPissed`,
    text: `Ca sera quoi cette fois-ci ? La manucure du hamster ? Fichez-moi le camp !`,
    options: [{ text: `Vous vous attendiez à quoi ?` }],
  },
  {
    id: `isConvinced`,
    text: `Vous revoilà vous ? Et alors cette coalition, on est où ? Ca avance drolement lentement on dirait.`,
    options: [{ text: `Faites profil bas` }],
  },
  {
    id: `isContacted`,
    text: `Encore vous ?? Vous commencez à devenir insistant... Non, c'est non, comment il faut vous le dire ? `,
    options: [{ text: `La prochaine fois, passez votre chemin` }],
  },
  {
    id: `josiane`,
    text: `75 ans et plus toutes ses dents, Josiane est une historique. Ne lui dites pas, ça va la vexer. N'empêche que si vous voulez en savoir plus sur le quartier, ça vaut le coup de papoter avec elle.`,
    options: [
      {
        text: `Entammer la conversation`,
        changeState: [{ target: "josiane", value: { isContacted: true } }],
        nextText: `1`,
      },
      { text: `Battre en retraite quand il est encore temps` },
    ],
  },
  {
    id: `1`,
    text: `Alors comme ça vous voulez rassembler les habitants du quartier ? Je le connais bien moi le quartier vous savez, j'y habite depuis 40 ans...`,
    options: [{ text: `Mmm...`, nextText: `2` }],
  },
  {
    id: `2`,
    text: `Mon père était un grand ami de l'ancien maire. Un type super vous savez. Ils allaient à la pêche ensemble. Alors quand je me suis mariée, il nous a gentiment proposé un appartement ici.`,
    options: [{ text: `C'est super!`, nextText: `3` }],
  },
  {
    id: `3`,
    text: `Vous savez, beaucoup de choses ont changé, mais dans le fond le quartier est resté le même. C'est un quartier populaire, où les gens se parlent, où il se passe toujours beaucoup de choses.`,
    options: [{ text: `Mmm...`, nextText: "4" }],
  },
  {
    id: `4`,
    text: `Tenez, pas plus tard qu'hier, ma voisine Samira est venue me voir avant d'aller faire ses courses, pour savoir si j'avais besoin de quelques choses. Je lui ai demandé de me prendre des petits gateaux, qu'on a mangé ensemble, avec un thé ! Ses enfants sont un peu agités mais si mignons... Je les garde de temps en temps après l'école, quand elle n'est pas encore rentrée du travail...`,
    options: [
      {
        text: `Elle a l'air sympa votre voisine, j'aimerai beaucoup la rencontrer !`,
        nextText: "5.a",
      },
      {
        text: `Il y a quand même beaucoup de problèmes dans le quartier, vous trouvez pas ?`,
        nextText: "5.b",
      },
    ],
  },
  {
    id: `5.a`,
    text: `Elle serait ravie ! Elle est toujours bien occupée, entre ses enfants, son travail, et l'association de locataire... Mais je pense qu'elle sera intéressée, je vais lui en parler ce soir.`,
    options: [
      {
        text: `Merci, ça va vraiment m'aider!`,
        nextText: `6`,
        changeState: [{ target: "samira", value: { isIntroduced: true } }],
      },
    ],
  },
  {
    id: `5.b`,
    text: `Il y a des problèmes partout, que voulez-vous! Ca n'existe pas un quartier sans problèmes. Il faut voir le bon côté des choses aussi... Moi je trouve que j'ai de la chance de vivre ici.`,
    options: [
      {
        text: `Vous avez raison, mais on peut quand même essayer d'améliorer certaines choses...`,
        nextText: `6`,
      },
    ],
  },
  {
    id: `6`,
    text: `Bon, je vais être honnête avec vous. C'est vrai que c'est un quartier extraordinaire, et c'est aussi vrai qu'il y a plein de problèmes ici. On se sent parfois abandonnés...`,
    options: [{ text: `A quel sujet ?`, nextText: `7` }],
  },
  {
    id: `7`,
    text: `Vous le savez comme moi ! Les logements sont en sale état... Il y a des endroits du quartier où on ne va plus, à cause de l'insécurité et du trafic de drogue... Il y a des gamins qui n'ont rien d'autre faire qu'aller causer des ennuis...`,
    options: [
      {
        text: `Bon alors vous êtes d'accord, ça vaut le coup de se mettre ensemble ?`,
        nextText: `8`,
      },
    ],
  },
  {
    id: `8`,
    text: `Votre projet de coalition, là ? Ca me rappelle quand dans les années 80, on avait fait une manifestation avec les copains pour empêcher l'installation d'un centre de traitements des déchèts, juste à côté... Vous vous rendez compte, avec toute la merde qu'on respire déjà...`,
    options: [
      {
        text: `Voilà, c'est la même chose, se rassembler pour se faire entendre ! Alors, vous en êtes ?`,
        nextText: `9.a`,
      },
      {
        text: `Je ne connaissais pas cette histoire, racontez-moi !`,
        nextText: `9.b`,
      },
    ],
  },
  {
    id: `9.a`,
    text: `J'en suis ! J'ai du temps, vous savez... Et puis ce maire là, il me plaît pas... Si je peux passer mes vieux jours à lui mettre des batons dans les roues...`,
    options: [
      {
        text: `Super, alors on se tient au courant, à très bientôt !`,
        changeState: [{ target: "josiane", value: { isConvinced: true } }],
        nextText: `9.a.1`,
      },
    ],
  },
  {
    id: `9.a.1`,
    text: `A bientôt !`,
    options: [
      {
        text: `Revenir à la page d'accueil`,
      },
    ],
  },
  {
    id: `9.b`,
    text: `Ah mon enfant... C'est que ma mémoire commence à s'estomper... Et mes souvenirs sont aussi frais que le poulet que Christian sur le marché... C'était en en 82, je crois. Non, attends... 83 ? Il faudrait que je me replonge dans les cartons de photos... Passez à la maison un jour, on regardera ça ensemble !`,
    options: [
      {
        text: `Pourquoi pas ! Bon du coup, vous êtes partante pour recommencer ça, donner de la voix ?`,
        nextText: `10`,
      },
    ],
  },
  {
    id: `10`,
    text: `J'en suis ! J'ai du temps, vous savez... Et puis ce maire là, il me plaît pas... Si je peux passer mes vieux jours à lui mettre des batons dans les roues...`,
    options: [
      {
        text: `Super, alors on se tient au courant, à très bientôt !`,
        changeState: [{ target: "josiane", value: { isConvinced: true } }],
        nextText: `10.a`,
      },
    ],
  },
  {
    id: `10.a`,
    text: `A bientôt !`,
    options: [
      {
        text: `Revenir à la page d'accueil`,
      },
    ],
  },
  {
    id: `samira`,
    text: `Elle en a gros, Samira. Le bailleur social qui fait semblant de ne pas voir que l'immeuble tombe en ruines, les seringues des camés dans son hall d'escalier, et puis tout le reste. Elle est fatiguée aussi, Samira, fatiguée de batailler...`,
    options: [
      {
        text: `Entammer la conversation`,
        nextText: `101`,
        changeState: [{ target: "samira", value: { isContacted: true } }],
      },
      { text: `Battre en retraite quand il est encore temps` },
    ],
  },
  {
    id: `101`,
    text: `Ah bonjour. Je vous préviens, si c'est pour parler spiritualité ou un abonnement téléphonique, je n'ai pas le temps, je ne suis pas intéressée, vous pouvez allez voir ailleurs.`,
    options: [
      {
        text: `Pas de tout, j'habite le quartier comme vous ! Vous avez entendu parler du projet de coalition citoyenne ?`,
        nextText: `102`,
      },
    ],
  },
  {
    id: `102`,
    text: `Mmmm... Vaguement. Mais le but, c'est juste d'emmerder la mairie, ou de faire du concret ?`,
    options: [
      {
        text: `Oh, c'est surtout par rapport à la mairie...`,
        nextText: `103.a`,
      },
      {
        text: `Non non, l'idée c'est de former une alliance avec un maximum d'habitants et d'associations du quartier, pour lancer des campagnes sur les sujets qui nous rassemblent et forcer les autorités à nous prendre en compte...`,
        nextText: `103.b`,
      },
    ],
  },
  {
    id: `103.a`,
    text: `Excusez moi mais les petits malins qui veulent juste casser les pieds de tout le monde, je n'ai pas le temps pour ça... Bonne fin de journée!`,
    options: [{ text: `Au revoir madame.` }],
  },
  {
    id: `103.b`,
    text: `Alors ça m'intéresse... Mais vous savez, j'ai pas beaucoup de temps... Et il y a tellement d'urgences à gérer dans le quartier, je ne sais pas si j'aurai le courage de me lancer dans un nouveau projet...`,
    options: [
      {
        text: `Justement, on est tous pris par les urgences du quotidien... On ne pense jamais à régler les problèmes de fond...`,
        nextText: `104.b`,
      },
    ],
  },
  {
    id: `104.b`,
    text: `Vous avez peut-être raison... C'est juste que là, ça devient n'importe quoi...`,
    options: [{ text: `Mmm...`, nextText: `105.b` }],
  },
  {
    id: `105.b`,
    text: `Les logements en mauvais état... Les seringues des drogués au milieu du parc pour les enfants... Il faudrait en faire plus aider les enfants qui ont du mal à l'école et éviter qu'ils finissent par rejoindre des bandes de voyou... J'ai tellement peur pour mes enfants, vous savez.`,
    options: [
      {
        text: `Je crois bien que c'est l'un des sujets qui rassemble tout le monde, améliorer le quartier pour nos enfants!`,
        nextText: `106.b`,
      },
    ],
  },
  {
    id: `106.b`,
    text: `Et bien vous pouvez compter sur moi ! J'ai déjà monté un collectif d'habitants pour dialoguer... enfin disons pour batailler avec notre bailleur social... Ils seront ravis aussi de porter ce combat à une échelle plus large!`,
    options: [
      {
        text: `Super, on a hâte de se mettre au travail ! A très bientôt !`,
        changeState: [{ target: "samira", value: { isConvinced: true } }],
        nextText: `106.b.1`,
      },
    ],
  },
  {
    id: `106.b.1`,
    text: `A bientôt !`,
    options: [
      {
        text: `Revenir à la page d'accueil`,
      },
    ],
  },
  {
    id: `samira.isIntroduced`,
    text: `Bonjour ! Alors c'est vous, le projet de coalition citoyenne... Josiane m'en a un peu parlé...`,
    options: [
      {
        text: `Oui, et il faut qu'on soit vraiment nombreux si on veut que ça marche !`,
        nextText: `152`,
        changeState: [{ target: "samira", value: { isContacted: true } }],
      },
    ],
  },
  {
    id: `152`,
    text: `Mais vous voulez changer quoi au juste ?`,
    options: [
      {
        text: `En fait, ça va dépendre de nous ! On veut d'abord se mettre ensemble, et ensuite, décider du sujet qui nous rassemble pour en faire notre première campagne`,
        nextText: `153.a`,
      },
      {
        text: `La sécurité, c'est vraiment le gros problème dans le quartier...`,
        nextText: `153.b`,
      },
    ],
  },
  {
    id: `153.a`,
    text: `Il y a tellement à faire... Tellement d'urgence...`,
    options: [{ text: `Mmm...`, nextText: `154.a` }],
  },
  {
    id: `154.a`,
    text: `Les logements en mauvais état... Les seringues des drogués au milieu du parc pour les enfants... Il faudrait en faire plus aider les enfants qui ont du mal à l'école et éviter qu'ils finissent par rejoindre des bandes de voyou... J'ai tellement peur pour mes enfants, vous savez.`,
    options: [
      {
        text: `Je crois bien que c'est l'un des sujets qui rassemble tout le monde, améliorer le quartier pour nos enfants!`,
        nextText: `155.a`,
      },
    ],
  },
  {
    id: `155.a`,
    text: `Et bien vous pouvez compter sur moi ! J'ai déjà monté un collectif d'habitants pour dialoguer... enfin disons pour batailler avec notre bailleur social... Ils seront ravis aussi de porter ce combat à une échelle plus large!`,
    options: [
      {
        text: `Super, on a hâte de se mettre au travail ! A très bientôt !`,
        changeState: [{ target: "samira", value: { isConvinced: true } }],
        // changeState: [{ target: "samira", value: { bringsFriends: true } }],
        nextText: `155.a.1`,
      },
    ],
  },
  {
    id: `155.a.1`,
    text: `A bientôt !`,
    options: [
      {
        text: `Revenir à la page d'accueil`,
      },
    ],
  },
  {
    id: `153.b`,
    text: `Attendez attendez... Quand vous dites "sécurité", vous pensez à quoi`,
    options: [
      {
        text: `Et bien vous savez, les drogués, l'incivilité, les bandes de jeunes...`,
        nextText: `154.b`,
      },
    ],
  },
  {
    id: `154.b`,
    text: `Oui enfin vous dites ça comme si c'était un problème de personnes. Le problème, c'est pas les jeunes ou les drogués...`,
    options: [
      { text: `C'est à dire ?`, nextText: `155.b.1` },
      {
        text: `Comme même un peu ! Le gamin qui s'est fait agressé hier à la sortie du collège, c'est bien d'autres jeunes qui l'ont tapé...`,
        nextText: `155.b.2`,
      },
    ],
  },
  {
    id: `155.b.1`,
    text: `Et bien demandez aux personnes comme Josiane qui sont là depuis longtemps... La drogue c'est un problème depuis 30 ans. Ca continue parce que l'état ne fait rien... Par contre, dès que deux jeunes trainent dans un hall d'immeuble, la police débarque en 10 minutes... Vous ne trouvez pas ça bizzare vous ?`,
    options: [{ text: `Mmm...`, nextText: `156.b.1` }],
  },
  {
    id: `156.b.1`,
    text: `Tout ça, c'est une question de volonté politique. Vous avez entendu parler des salles de shoot ? Il paraît que ça marche bien... Ici, on en parle depuis des années, mais en attendant, la salle de shoot, c'est le tobogan du parc d'à coté... Les bandes de jeunes, c'est pareil, on en parle mais qu'est ce qui est fait, concrètement ? Les associations, les éducateurs de rue ont de moins en moins de moyen. Le collège tombe en ruine. Tenez, la semaine dernière, il n'y avait plus d'eau potable à la cantine, vous vous rendez compte !!`,
    options: [{ text: `...`, nextText: `157.b.1` }],
  },
  {
    id: `157.b.1`,
    text: `Excusez-moi, je m'emballe, je sors tout en vrac... C'est qu'il y a de quoi être colère parfois ! Bon vous avez raison, il faut qu'on se mette tous ensemble si on veut avancer sur ces questions. Vous pouvez compter sur moi!`,
    options: [
      {
        text: `Super nouvelle, on se revoit très bientôt alors !`,
        changeState: [{ target: "samira", value: { isConvinced: true } }],
        nextText: `157.b.2`,
      },
    ],
  },
  {
    id: `157.b.2`,
    text: `A bientôt !`,
    options: [
      {
        text: `Revenir à la page d'accueil`,
      },
    ],
  },
  {
    id: `155.b.2`,
    text: `Oui mais vous voyez bien que c'est un problème structurel, c'est que rien n'est fait pour eux ! Les écoles n'ont aucun moyen, ils sont à 35 par classe, ils décrochent, ils n'ont aucune opportunité de travail, ils finissent par traîner dans la rue... Si c'était eux le problème, il suffirait de tous les mettre en prison!`,
    options: [{ text: `...`, nextText: `156.b.2` }],
  },
  {
    id: `156.b.2`,
    text: `Vous ne devez pas avoir d'enfants vous ! Moi les miens je n'ai qu'une trouille, c'est qu'ils partent sur ce chemin-là. Alors je fais hyper attention. Mais on ne sait jamais ce qui peut arriver. S'ils se mettent à faire des conneries, je veux qu'on leur donne une deuxième chance, qu'il y ait des personnes pour les aider à revenir sur le droit chemin, pas qu'on les envoie en prison !!`,
    options: [{ text: `Oui mais...`, nextText: `157.b.2` }],
  },
  {
    id: `157.b.2`,
    text: `Ecoutez, il n'y a pas de mais... Si c'est cette direction là que vous prenez, je préfère rester dans mon coin... Désolée, mais votre coalition, ça sera sans moi! Je ne veux pas risquer de me retrouver avec des fachos !`,
    options: [
      {
        text: `Mais attendez, mais ce n'est pas ça du tout!`,
        nextText: `158.b.2`,
      },
    ],
  },
  {
    id: `108.b.2`,
    text: `Je n'attends pas, je n'ai plus le temps d'attendre. Au revoir !`,
    options: [
      {
        text: `Bon et bien... Au revoir...`,
      },
    ],
  },
  {
    id: `william`,
    text: `Baskets en cuir éthique, barbe taillée par un professionel, montre connectée. William ressemble à tous ces habitants venus depuis quelques années profiter des faibles loyers du quartier. N'empêche que c'est un habitant du quartier, lui aussi... Vous l'interrompez dans son footing ?`,
    options: [
      {
        text: `Entammer la conversation`,
        nextText: `200`,
        changeState: [{ target: "william", value: { isContacted: true } }],
      },
      { text: `Battre en retraite quand il est encore temps` },
    ],
  },
  {
    id: `200`,
    text: `Si c'est la pétition contre les décorations de noël ou pour le compost dans les écoles, j'ai déjà signé, merci! Je file, je voudrais finir mon run avant l'heure du brunch.`,
    options: [
      {
        text: `Euh, bonjour Monsieur ! Et ce n'est pas ça du tout, mais je vois que vous êtes une personne très engagée...`,
        nextText: `201`,
      },
      { text: `Tant pis pour moi alors... Courrez-bien!` },
    ],
  },
  {
    id: `201`,
    text: `Vous savez, en tant que consom'acteurs, nous avons tous le devoir de faire de petits gestes. Je me considère un peu comme un colibri, en quelque sorte... J'essaie de faire ma part...`,
    options: [{ text: `C'est très louable, mais...`, nextText: `202` }],
  },
  {
    id: `202`,
    text: `Ah, je vous vois venir. Vous êtes du genre à trouver les petits gestes inutiles, vous, non ? A vouloir tout renverser ?`,
    options: [
      {
        text: `Mais pas du tout ! Simplement, des fois, signer les pétitions, ça ne marche pas...`,
        nextText: `203.a`,
      },
      {
        text: `Mais oui, c'est le sytème qu'il faut changer !`,
        nextText: `203.b`,
      },
    ],
  },
  {
    id: `203.a`,
    text: `C'est vrai, remarquez. La pétition pour le bio dans les cantines, je me demande bien à quoi elle a servit. Alors que ça, c'était un vrai sujet de fond.`,
    options: [
      {
        text: `Tout à fait ! Et du coup, avec d'autres habitants et associations du quartier, on voudrait former une alliance. Représenter une masse critique pour forcer les autorités à nous écouter.`,
        nextText: `204.a`,
      },
      {
        text: `Oui, le bio dans les cantines... Et puis il y a beaucoup d'autres sujets, les toxicomanes, l'état des écoles publiques, les logements sociaux qui tombent en ruine...`,
        nextText: `204.b`,
      },
    ],
  },
  {
    id: `204.a`,
    text: `Super ! Si on met le bio au menu, je suis avec vous ! Bon je travaille toute la semaine et je passe mes week-ends dans le Perche, mais si je peux vous aider je le ferai ! Bonne journée !`,
    options: [
      {
        text: `Je... Bon bah merci, et... Ah bah il est déjà reparti...`,
        changeState: [{ target: "william", value: { isConvinced: true } }],
        nextText: `205.a.1`,
      },
    ],
  },
  {
    id: `205.a.1`,
    text: `Bruits de pas qui s'éloignent rapidement...`,
    options: [
      {
        text: `Revenir à la page d'accueil`,
      },
    ],
  },
  {
    id: `204.b`,
    text: `Ah bon ? Je ne sais pas pour les écoles, mes enfants sont dans le privé. Et mon logement est en très état. Ecoutez, si tout ça c'est pour se retrouver avec une salle de shoot à côté de l'école de mes enfants, non merci... C'est malheureux pour eux, mais franchement, s'ils veulent vraiment s'en sortir, ils n'ont qu'à trouver un boulot...`,
    options: [
      {
        text: `Mais le but c'est d'améliorer le quartier pour tout le monde, pas juste la cantine de l'école privée de vos enfants...`,
        nextText: `205.b`,
      },
    ],
  },
  {
    id: `205.b`,
    text: `Vous exagérez, il n'est pas si mal ce quartier. Les gens sont toujours en train de se plaindre. Allez donc voir à côté, vous vourrez qu'on est pas si mal... A part les cantines, franchement ça va... Sur ce, ravi de vous avoir rencontré, mais je file, je voudrais finir mes 25km de course avant d'aller bruncher. Bonne journée!`,
    options: [
      { text: `Bonne journée... (Il s'éloigne) Et bon brunch bio gnagnagna..` },
    ],
  },
  {
    id: `203.b`,
    text: `Le système, vous êtes marrants vous ! Le système il ne fonctionne pas si mal... Et puis c'est quoi l'alternative ? L'anarchie... Tout n'est pas parfait, ok, mais enfin il ne faut quand même pas abuser... Bon de toute façon, j'ai pas le temps de débattre de ça, j'ai pas fini mon run et ma chérie m'attend pour aller bruncher. Bonnee journée !`,
    options: [
      { text: `Bonne journée... (Il s'éloigne) Et bon brunch bio gnagnagna..` },
    ],
  },
  {
    id: `bernard`,
    text: `Depuis l'extérieur du Balto, vous le voyez accoudé au comptoir, Paris-Turf sous le bras. Il vous semble l'avoir déjà vu foutre le bordel à un conseil de quartier.. C'est pas lui qui avait traité la conseillère écologiste d'islamo-gauchiasse déjà ? Bon, vous entrez ou pas ?`,
    options: [
      {
        text: `Entammer la conversation`,
        changeState: [{ target: "bernard", value: { isContacted: true } }],
        nextText: `300`,
      },
      { text: `Battre en retraite quand il est encore temps` },
    ],
  },
  {
    id: `300`,
    text: `Non merci!`,
    options: [{ text: `Mais enfin, je...`, nextText: `301` }],
  },
  {
    id: `301`,
    text: `Je les connais, les gens comme vous ! Et bien je vous le dis de suite, CA. NE. M'INTERESSE. PAS.`,
    options: [
      { text: `Pardon, mais de quoi parlez-vous ?`, nextText: `302` },
      { text: `Bon bah ça va plus vite comme ça, au revoir Monsieur...` },
    ],
  },
  {
    id: `302`,
    text: `Vous allez vouloir me faire signer un truc non ? Encore un machin inutile de geignard qui veut sauver le monde en mangeant du quinoa ? Et pendant ce temps-là, on est envahis d'étrangers et on ose même plus sortir de chez soi...`,
    options: [{ text: `Mmm...`, nextText: `303` }],
  },
  {
    id: `303`,
    text: `Je vais vous le dire, moi, ce pour quoi je veux bien signer... Qu'on me foute tous ces drogués qui dorment dehors en tôle, au moins ils auront un toit sur la tête et ils arrêteront de nous faire chier... Et les étrangers, qu'on les renvoie chez eux, ça nous fera de la place... Parce que là, je sais pas si vous avez remarqué dans le quartier, mais quand on parle français on commence à avoir du mal à se faire comprendre...`,
    options: [
      {
        text: `Mais enfin vous racontez n'importe quoi ! D'abord on ne met pas les gens en prison comme ça... Et puis où est le problème si tout le monde ne parle pas français ?`,
        nextText: `304`,
      },
    ],
  },
  {
    id: `304`,
    text: `Moi, je raconte n'importe quoi ? MOI ?? L'idéologie islamo-gauchiste est vraiment partout, ma parole. Il est où le problème si les gens ne parlent pas français ? Mais enfin on est en France, pas à Bamako ? Je veux parler français chez moi. Pas vous ? Les gens qui viennent juste pour toucher les aides, on les connaît. Et c'est qui qui les paie, leurs aides ? Hein ? Vous et moi, et oui ? L'argent qu'on se tue à gagner en travaillant, c'est à ça qu'il sert... Ca ne vous gène pas ??`,
    options: [
      {
        text: `Bon, donc je suppose que ça ne vous intéresse pas de rejoindre une coalition d'habitants qui veulent améliorer la vie dans le quartier ?`,
        nextText: `305`,
      },
    ],
  },
  {
    id: `305`,
    text: `Attendez, attendez... Une coalition pour faire quoi ?`,
    options: [
      {
        text: `Se faire entendre, imposer nos idées et nos propositions dans le débat public, et forcer les autorités à nous prendre en compte.`,
        nextText: `307`,
      },
      { text: `Non rien, laissez tomber... Au revoir monsieur !` },
    ],
  },
  {
    id: `307`,
    text: `Ah parce que si on peut aller faire chier le maire et foutre le bordel dans les conseils municipaux, j'ai pas dit que j'étais contre, attention !`,
    options: [
      {
        text: `Alors déjà, c'est un tout peu plus subtil que ça. Et puis dans la coalition, il y a déjà des étrangers, des associations qui viennent en aide aux usagers et usagères de drogue...`,
        nextText: `308`,
      },
      {
        text: `C'est noté, je vous compte parmis nous ! Bonne journée monsieur!`,
        changeState: [{ target: "bernard", value: { isConvinced: true } }],
        nextText: `307.a`,
      },
    ],
  },
  {
    id: `307.a`,
    text: `A bientôt !`,
    options: [
      {
        text: `Revenir à la page d'accueil`,
      },
    ],
  },
  {
    id: `308`,
    text: `Merci hein, mais je vais continuer de faire chier le maire tout seul... J'ai déjà prévu d'appeler son secrétarat toutes les demie-heures pour leur dire ce que je pense de leur projet de maison de quartier. Et vous devriez voir les courriers que je leur envoie, ils sont... salés. Pas besoin des bien-pensants pour faire entendre ma voix, moi ! Bonne journée...`,
    options: [
      {
        text: `Vos journées ont l'air chargées, je ne vous retiens pas. Au revoir monsieur.`,
      },
    ],
  },
  {
    id: `jeanpierre`,
    text: `Vous avez rendez-vous dans les bureaux de "couleurs solidaires", l'une des grosses assos du quartier. Son directeur, Jean-Pierre, est à toutes les réunions, tous les évènements, tous les pots. Vous l'avez vu 100 fois, mais vous n'avez jamais pu échanger plus de deux mots avec lui. Du coup, allez savoir quel genre de type c'est...`,
    options: [
      {
        text: `Entammer la conversation`,
        nextText: `400`,
        changeState: [{ target: "jeanpierre", value: { isContacted: true } }],
      },
      { text: `Battre en retraite quand il est encore temps` },
    ],
  },
  {
    id: `400`,
    text: `Assez-vous, je vous en prie. Merci d'être venu jusqu'ici. Mon temps est limité mais je vous écoute !`,
    options: [
      {
        text: `Je comprends, quand on dirige une association aussi importe que la votre...`,
        nextText: `401.a`,
      },
      {
        text: `Alors je vais droit au but, vous avez entendu parler de notre projet de coalition, non? On aimerait beaucoup que vous nous rejoignez...`,
        nextText: `401.b`,
      },
    ],
  },
  {
    id: `401.a`,
    text: `Oh, vous savez... On fait ce qu'on peut. On essaie d'aider les gens, et il y a de quoi faire dans le quartier...`,
    options: [{ text: `Mmm...`, nextText: `402.a` }],
  },
  {
    id: `402.a`,
    text: `C'est vrai que parfois, je me demande comment les gens feraient sans nous... Entre les cours de français, l'aide aux devoirs, les colonies... Vous savez, les gens attendent beaucoup de nous...`,
    options: [{ text: `Mmm...`, nextText: `403.a` }],
  },
  {
    id: `403.a`,
    text: `Et comme je le dis toujours, avec de grands pouvoirs, viennent de grandes responsabilités !`,
    options: [
      { text: `Mmm...`, nextText: `404.a` },
      {
        text: `Oui enfin c'est surtout l'oncle de Spider-man qui le dit, mais je vois où vous voulez en venir. Enfin je crois.`,
        nextText: `404.a`,
      },
    ],
  },
  {
    id: `404.a`,
    text: `Hmm. Bon. Je vous disais donc, notre influence dans le quartier est considérable, si vous voyez où je veux en venir.`,
    options: [{ text: `Pas vraiment, non...`, nextText: `405.a` }],
  },
  {
    id: `405.a`,
    text: `Et bien, évidemment, je me tiens informé de tout ce qu'il se passe dans le quartier. Je suis très proche des habitants, et de leurs préoccupations... Nous prenons notre rôle très au sérieux, vous savez...`,
    options: [{ text: `Mmm...`, nextText: `406.a` }],
  },
  {
    id: `406.a`,
    text: `Et donc, hmm, ce projet de coalition nous intéresse beaucoup. Nous suivons vos progrès avec intéret. C'est vraiment très louable, ce que vous faites. D'ailleurs, comment ça se passe, concrètement ? Qui la dirige, vraiment ?`,
    options: [
      { text: `Oh, on en est qu'au début, vous savez...`, nextText: `407.a` },
    ],
  },
  {
    id: `407.a`,
    text: `Ah oui, je vois. Mais enfin, vous le savez comme moi... Ces projets-là, s'il n'y a pas quelqu'un derrière, ça ne fonctionne jamais vraiment. Les gens ont envie qu'on les prenne par la main, pas de devoir faire tout le sale boulot eux-mêmes, si vous voyez où je veux en venir...`,
    options: [{ text: `Pas vraiment...`, nextText: `408.a` }],
  },
  {
    id: `408.a`,
    text: `Vous verrez, c'est immanquable. On part bardés de beaux idéaux, mais au bout d'un moment, sans direction claire, le bateau prend l'eau. Quand il faut s'assoir à la table des négociations, on vient à un ou deux, pas à 300... Les gens n'aiment pas l'admettre, mais il faut savoir déléguer. Et certains sont meilleurs que d'autres pour ça.`,
    options: [{ text: `...`, nextText: `409.a` }],
  },
  {
    id: `409.a`,
    text: `Ecoutez, je vais être franc avec vous. Votre petit projet, il est bien joli, mais ça ne marchera jamais. Le maire, il a de l'argent. Vous voyez ces locaux ? Payé par les subventions de la mairie. Pareil pour les chaises sur lesquelles s'assoient les gamins de l'aide aux devoirs. Alors si vous croyez qu'une alliance de citoyens peut faire quelque chose face à ça...`,
    options: [
      {
        text: `Ecoutez, sans vous, on ne s'en sortira jamais. Vous êtes la plus grosse association du quartier, vous avez un poids considérable. Réfléchissez-y, d'accord ?`,
        nextText: `410.a.1`,
      },
      {
        text: `D'accord, donc les préoccupations des habitants, tout ça, c'est du pipeau...`,
        nextText: `410.a.2`,
      },
    ],
  },
  {
    id: `410.a.1`,
    text: `Ecoutez, vous faites preuve de naïveté mais vous m'avez l'air sympathique, alors je vais vous prévenir. Je dejeunais hier avec monsieur le maire, et je peux vous dire qu'il ne voit pas votre petit projet d'un très bon oeil... Il fera tout pour le faire capoter. Et comme je vous le disais, il en a les moyens. Alors ne vous faites pas trop d'illusions...`,
    options: [{ text: `C'est réjouissant. Bonne fin de journée, monsieur.` }],
  },
  {
    id: `410.a.2`,
    text: `Bon, assez perdu mon temps comme ça. Allez, bon courage avec votre petit projet.`,
    options: [
      {
        text: `Et bien merci pour vos encouragements. Et bonne fin de journée.`,
      },
    ],
  },
  {
    id: `401.b`,
    text: `Dites-donc, ce projet, il sera pas un peu téléguidé par l'opposition ? Je vous sens de bonne volonté, bien sûr... Mais je pense qu'on vous manipule...`,
    options: [
      {
        text: `Absolument pas ! Qu'est ce qui vous fait dire ça ?`,
        nextText: `409.a`,
      },
    ],
  },
  {
    id: `alimatou`,
    text: `Ca fait cinq minutes que vous observez la scène de l'exterieur, et vous hésitez toujours à pousser la porte. On vous a parlé d'Alimatou et de son association de familles hébergées en foyer. Mais c'est-à-dire que là, elle court avec des cartons dans les bras. C'est vraiment le bon moment ?`,
    options: [
      {
        text: `Entammer la conversation`,
        nextText: `500`,
        changeState: [{ target: "alimatou", value: { isContacted: true } }],
      },
      { text: `Battre en retraite quand il est encore temps` },
    ],
  },
  {
    id: `500`,
    text: `Bonjour ! Tenez, portez ça et suivez-moi, on va discuter en marchant. J'ai encore 15 cartons comme ça à transporter...`,
    options: [
      {
        text: `D'accord. Et euh. Bonjour ! On va où comme ça ?`,
        nextText: `501`,
      },
    ],
  },
  {
    id: `501`,
    text: `Pardon, c'est vrai que c'est un peu abrupte mais c'est la course en ce moment... On va dans la salle d'activités au fond du couloir, il faut la préparer pour la fête de fin d'année.`,
    options: [{ text: `Mmm...`, nextText: `502` }],
  },
  {
    id: `502`,
    text: `Donc, cette coalition... Vous savez un peu qui on est, non ? Ici, les familles sont très précaires. Elles ont du mal à joindre les deux bouts. Et quand les institutions doivent prendre des décisions qui nous concernent, on reçoit la visite d'un gentil monsieur en chemisette qui nous écoute en prenant des notes, et puis après, plus rien... Alors si c'est pour avoir la visite de plus de monsieurs en chemisette, c'est sympa de penser à nous, mais on ne voit pas trop l'intérêt.`,
    options: [
      {
        text: `J'aurai pas du mettre une chemisette aujourd'hui...`,
        nextText: `503.a`,
      },
      {
        text: `Non, au contraire, on veut se rassembler, être tous ensemble!`,
        nextText: `503.b`,
      },
    ],
  },
  {
    id: `503.a`,
    text: `Ahah, je n'ai pas de problème avec les chemisettes. Mais si vous commencez à prendre des notes en hochant la tête et en faisant des "Mmmm je vois", je vais commencer à me méfier!`,
    options: [
      {
        text: `Alors je ne prends pas de notes, c'est promis!`,
        nextText: `504.a`,
      },
    ],
  },
  {
    id: `504.a`,
    text: `Je sais que j'ai l'air d'être une emmerdeuse, mais on a eu beaucoup de mauvaises expériences... Il y a des gens dont je me méfie, vous voyez... Des gens qui tiennent des beaux discours, mais qui ne sont pas là quand vous avez vraiment besoin d'eux...`,
    options: [
      { text: `Vous pensez à qui ?`, nextText: `505.a.1` },
      {
        text: `On ne trie pas les gens, tout le monde est bienvenu. Mais ça veut dire que s'il y a quelqu'un que vous n'aimez pas dans la coalition, il faudra faire avec..`,
        nextText: `505.a.2`,
      },
    ],
  },
  {
    id: `505.a.1`,
    text: `Vous savez, celui qui dirige la grosse asso, là... Lui, c'est clair : s'il fait partie de la coalition, ça sera sans nous... Je me méfie de lui comme de la peste.`,
    options:
      // => si on est déjà passé par JP avant :
      // [
      //     {text: 'Ah oui, lui... Aucun risque, je vous rassure...',
      //     nextText: 7,
      //     }
      //     {text: 'J'ai eu le plaisir de discuter avec lui. On se passera bien volontiers de lui!',
      //     nextText: 7}
      // ]
      // => si on est pas pass par JP avant:
      [
        {
          text: `Et bien, ça a l'air sérieux. Je garde ça en tête quand j'irai le rencontrer...`,
          nextText: `506`,
        },
        {
          text: `Etrange, on m'a dit du bien de lui, il fait beaucoup pour le quartier apparement...`,
          nextText: `506`,
        },
      ],
  },
  {
    id: `505.a.2`,
    text: `Vous savez, vous parlez presque un peu comme lui. Je crois qu'on ne va pas s'entendre. Merci pour le coup de main pour les cartons, quand même!`,
    options: [
      {
        text: `Je vous aurai au moins rendu un petit service... Bon courage pour les 14 autrs qu'il vous reste`,
      },
    ],
  },
  {
    id: `503.b`,
    text: `Ca me parle, ce que vous dites. Mais il faudra nous écouter vraiment, hein. Il y a des gens qui ne parlent pas bien français ici, qui n'ont pas trop l'habitude de tout ça... Alors quand ça gueule dans tous les sens, c'est pas facile de se faire entendre...`,
    options: [{ text: `Mmm...`, nextText: `506` }],
  },
  {
    id: `506`,
    text: `Ce qui nous intéresse, nous, c'est la question du logement, évidemment, mais surtout celle des enfants. Vous savez, quand on ne parle pas bien français, c'est pas facile d'aider ses enfants pour les devoirs. Alors dès qu'ils prennent un peu de retard à l'école, ça s'aggrave très vite, parce qu'on ne s'en rend pas compte, ou alors on ne peut juste rien faire pour les aider. C'est terrible, ça, pour les parents...`,
    options: [
      {
        text: `Vous savez, la question de l'école et des devoirs, c'est un des sujets qui préoccupe le plus les habitants. Quand on sera assez nombreux pour décider ensemble de notre première campagne d'action, je ne serai pas surpris que ça tombe là-dessus...`,
        nextText: `507.a`,
      },
      {
        text: `Ca, le logement, les toxicos, l'emploi... Il y en a des problèmes à régler...`,
        nextTex: `507.b`,
      },
    ],
  },
  {
    id: `507.a`,
    text: `Ca serait vraiment bien. Au fond, on a tous besoin des mêmes choses. Il suffirait qu'on se parle pour s'en rendre compte... Mais ça, c'est pas à la mode... Tout le monde est devant son écran, et plus personne ne se parle en vrai...`,
    options: [{ text: `Mmm...`, nextText: `508.a` }],
  },
  {
    id: `507.b`,
    text: `Ah oui, les toxicos... Moi je ne comprends même pas que ça puisse arriver, des dizaines de personnes comme ça, à l'abandon, qui errent dans le quartier à la recherche d'un caillou... Me dites pas qu'on ne peut vraiment rien faire pour les aider ?`,
    options: [
      {
        text: `Disons que politiquement, l'ambiance serait plutôt à déplacer le problème qu'à essayer de le régler humainement`,
        nextText: `508.a`,
      },
      {
        text: `Il y aurait bien les salles de shoot, mais c'est un sujet sensible... Ca divise beaucoup les gens, vous savez...`,
        nextText: `508.b`,
      },
    ],
  },
  {
    id: `508.a`,
    text: `C'est une bonne idée, votre histoire de coalition. Si vous me dites qu'on sera écoutés comme les autres, on en est!`,
    options: [
      {
        text: `C'est garanti ! Alors on compte sur vous ! A bientôt!`,
        changeState: [{ target: "alimatou", value: { isConvinced: true } }],
        nextText: `508.a.1`,
      },
    ],
  },
  {
    id: `508.a.1`,
    text: `A bientôt !`,
    options: [
      {
        text: `Revenir à la page d'accueil`,
      },
    ],
  },
  {
    id: `508.b`,
    text: `Mais au moins, il faut qu'on en discute tous ensemble, qu'on ne laisse pas les monsieurs en chemisettes prendre les décisions dans leur coin. Dites, ça va vous ?`,
    options: [
      {
        text: `Euh bof... C'est mon dos... C'est-à-dire qu'ils sont lourds vos cartons.`,
        nextText: `509`,
      },
      {
        text: `Oui oui, c'est juste que je regrette de plus en plus d'avoir mis une chemisette ce matin.`,
        nextText: `509`,
      },
    ],
  },
  {
    id: `509`,
    text: `Allez, je vous ai assez embêté pour aujourd'hui. Merci de votre aide, et comptez sur nous pour votre projet, on sera là!`,
    options: [
      {
        text: `De rien, ça m'a fait du bien ce petit effort physique! A très vite!`,
        changeState: [{ target: "alimatou", value: { isConvinced: true } }],
        nextText: `509.a`,
      },
      {
        text: `Pas de soucis. Et c'est noté pour la chemisette. A bientôt !`,
        changeState: [{ target: "alimatou", value: { isConvinced: true } }],
        nextText: `509.a`,
      },
    ],
  },
  {
    id: `509.a`,
    text: `A bientôt !`,
    options: [
      {
        text: `Revenir à la page d'accueil`,
      },
    ],
  },
  {
    id: `karim`,
    text: `Barbe de cinq jours et bonnet vissé sur le crane, c'est le gars que tout le monde connaît. Normal, il est éduc de rue Karim. Si vous le connaissez pas, lui vous connaît. Il connaît tout le monde.`,
    options: [
      {
        text: `Entammer la conversation`,
        nextText: `600`,
        changeState: [{ target: "karim", value: { isContacted: true } }],
      },
      { text: `Battre en retraite quand il est encore temps` },
    ],
  },
  {
    id: `600`,
    text: `Salut ! Ah merde, attends... J'ai un gamin qui veut me parler, je reviens dans deux minutes...`,
    options: [
      {
        text: `...`,
        // => setTimeOut 5000 + musique d'ascenceur
        nextText: `601`,
      },
    ],
  },
  {
    id: `601`,
    text: `Désolée, mais c'est un jeune difficile, lui... Pour une fois que c'est lui qui vient nous parler, je voulais pas le laisser tomber... Donc, ton truc de coalition là... Ecoute, on m'en a déjà un peu parlé, je trouve que ça a l'air très cool.`,
    options: [
      {
        text: `Ah bah super, tu me facilites la tâche !`,
        nextText: `601.a`,
      },
      {
        text: `Et dis moi, tu dois connaître un peu tout le quartier, toi, non ?`,
        nextText: `601.b`,
      },
    ],
  },
  {
    id: `601.a`,
    text: `Moi je trouve que c'est ce qu'il lui manque, à ce quartier. Il y a plein d'assos et de gens motivés, mais chacun fait son truc dans son coin. Je le vois, dans mon métier. Quand tu as un problème avec un gamin, il y a mille structures différentes vers qui se tourner... Le résultat, c'est que c'est impossible de savoir qui contacter. On manque de coordination. Du coup, cette sorte de grosse association d'associations, ça me parle, vous pourrez compter sur moi...`,
    options: [
      {
        text: `Parfait, je te laisse retourner à tes gamins alors, et à très vite.`,
        changeState: [{ target: "karim", value: { isConvinced: true } }],
        nextText: `601.a.1`,
      },
    ],
  },
  {
    id: `601.a.1`,
    text: `A bientôt !`,
    options: [
      {
        text: `Revenir à la page d'accueil`,
      },
    ],
  },
  {
    id: `601.b`,
    text: `Ah bah c'est sur que quand tu bosses dans la rue, tu finis par connaître un peu tout le monde... Tu veux savoir qui contacter, pour ta coalition ?`,
    options: [
      { text: `Je serai pas contre, effectivement...`, nextText: `602` },
    ],
  },
  {
    id: `602`,
    text: `Déjà, si tu peux l'éviter, oublie Jean-Pierre... C'est un pote du maire, et sans les subventions de la mairie, son asso n'existe pas... Epargne-toi ses tirades condescendantes, il ne rejoindra jamais la coalition. Par contre, Alimatou, celle qui a l'asso de familles hébergées en foyer. Elle est gnéiale, elle sera à fond, c'est sûr !`,
    options: [
      {
        text: `Merci pour les conseils... Et à bientôt !`,
        changeState: [{ target: "karim", value: { isConvinced: true } }],
        nextText: `602.a`,
      },
    ],
  },
  {
    id: `602.a`,
    text: `A bientôt !`,
    options: [
      {
        text: `Revenir à la page d'accueil`,
      },
    ],
  },
];

export { textNodes };
