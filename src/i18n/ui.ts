import type { Locale } from './config';

/**
 * Dizionario UI + contenuti. La struttura di `it` è la fonte di verità:
 * le altre lingue sono verificate in compilazione (satisfies Ui).
 */
const it = {
  meta: {
    siteName: 'Camping Lido Valderice',
    home: {
      title: 'Camping Lido Valderice — Campeggio sul mare a Valderice, Trapani',
      description:
        'Campeggio sul mare a Valderice, Trapani: piazzole ombreggiate, case mobili, minimarket e ristorazione, a pochi passi dal mare in Sicilia.',
    },
    pages: {
      piazzole: 'Piazzole camper e tende',
      casette: 'Case mobili',
      ristorazione: 'Mini market e ristorazione',
      territorio: 'Scopri il territorio',
      prezzi: 'Tariffe e offerte',
      contatti: 'Contatti',
    },
    descriptions: {
      piazzole:
        'Piazzole camper e tende ampie e ombreggiate lungo il viale principale, con energia elettrica e attacchi CEE. Sosta tranquilla a pochi passi dal mare.',
      casette:
        'Case mobili con 4-5 posti letto, veranda attrezzata, angolo cottura e climatizzatore: la soluzione comoda per famiglie e gruppi di amici.',
      ristorazione:
        'Minimarket con cornetti appena sfornati e servizio di ristorazione con i piatti tipici siciliani: busiate, pesce fresco e specialità locali.',
      territorio:
        'Erice, Macari, le saline di Trapani, Monte Cofano, Mozia, Segesta, Scopello e le isole Egadi: cosa visitare intorno al campeggio.',
      prezzi:
        "Tariffe del Camping Lido Valderice: promozioni di giugno, luglio e settembre, prezzi invernali e listino dell'alta stagione di agosto.",
      contatti:
        'Via della Conchiglia 20, 91019 Valderice (TP). Telefoni, email e mappa per raggiungere il Camping Lido Valderice in Sicilia.',
    },
    heroAlt: {
      home: 'Vista del campeggio e del mare di Valderice',
      piazzole: 'Piazzole ombreggiate per camper e tende',
      casette: 'Casa mobile con veranda',
      ristorazione: 'Il minimarket del campeggio',
      territorio: 'Veduta della riserva di Monte Cofano e del golfo di Macari',
      prezzi: 'Panorama notturno su Trapani e le saline visto da Erice',
      contatti: 'Cala rocciosa con vista sul mare vicino al campeggio',
    },
  },
  nav: {
    label: 'Menu principale',
    home: 'Home',
    piazzole: 'Piazzole',
    casette: 'Casette',
    ristorazione: 'Ristorazione e market',
    territorio: 'Scopri il territorio',
    prezzi: 'Tariffe e offerte',
    contatti: 'Contatti',
    openMenu: 'Apri il menu',
    closeMenu: 'Chiudi il menu',
  },
  langSwitcher: 'Lingua',
  skipToContent: 'Vai al contenuto',
  footer: {
    address: 'Indirizzo',
    street: 'Via della Conchiglia 20',
    city: 'CAP 91019 Valderice (TP)',
    mail: 'campinglidovalderice@libero.it',
    social: 'Seguici sui social',
    facebookAlt: 'Pagina Facebook del campeggio',
    instagramAlt: 'Profilo Instagram del campeggio',
    rights: 'Tutti i diritti riservati.',
    vat: 'Part. IVA 01467360812',
  },
  common: {
    infoBooking: 'Per info e prenotazioni',
    contactUs: 'contattaci!',
    explore: 'Scopri',
    bookNow: 'Richiedi disponibilità',
    callNow: 'Chiama ora',
    mapOpen: 'Apri in Google Maps',
    morePhotos: 'Mostra altre foto',
  },
  home: {
    heroTitle: 'Camping Lido Valderice',
    heroTagline: 'Tra mare, natura e relax: una vacanza in libertà, circondati dal verde e a pochi passi dal mare di Valderice.',
    heroChip: 'Valderice · Trapani · Sicilia',
    intro:
      'Scegli tra piazzole ombreggiate, servizi curati e un ambiente tranquillo ideale per famiglie, coppie e viaggiatori.',
    newsTitle: 'Estate senza zanzare!',
    newsAlt: 'Illustrazione di una zanzara',
    newsText:
      'Più comfort, meno zanzare. Il nostro campeggio è ora protetto da un avanzato sistema di nebulizzazione ecologica contro le zanzare, per farti godere le tue vacanze in totale relax. Un ambiente più sereno, per vacanze senza punture!',
    cardsTitle: 'Soluzioni e servizi',
    cards: {
      piazzole: { label: 'Piazzole camper e tende', alt: 'Piazzole ombreggiate per camper e tende' },
      casette: { label: 'Casette', alt: 'Casa mobile con veranda' },
      ristorazione: { label: 'Mini market e ristorazione', alt: 'Il minimarket del campeggio' },
    },
    territoryKicker: 'Cosa visitare?',
    territoryTitle: 'Trapani: città tra due mari!',
    territoryText: [
      'La posizione strategica del campeggio ti permette di esplorare facilmente i tesori che il territorio circostante ha da offrire.',
      "Se sei un amante della natura, sarai felice di sapere che il campeggio si trova vicino alle grandi riserve naturali, dove potrai passeggiare tra boschi e fiumi incontaminati, ammirando flora e fauna uniche al mondo. Se sei interessato alla storia e alla cultura, le zone archeologiche e le città d'arte nelle vicinanze ti lasceranno a bocca aperta: antichi templi greci, teatri romani e musei di arte contemporanea.",
      "E se ami semplicemente goderti panorami incantevoli, non perdere l'opportunità di ammirare le viste mozzafiato dalle colline circostanti e dalle spiagge vicine.",
    ],
  },
  piazzole: {
    intro: {
      camperTitle: 'Hai un camper o una roulotte?',
      camperText:
        'Le nostre piazzole dedicate si trovano lungo il viale principale: ampie, ombreggiate e dotate di energia elettrica con attacchi CEE. Perfette per una sosta rilassante, con tutto il comfort a portata di mano.',
      tendaTitle: 'Viaggi con la tenda?',
      tendaText:
        'Abbiamo pensato anche a te! Le piazzole tenda sono in una zona più riservata e tranquilla, circondata dal verde, con ombreggiatura naturale e artificiale e collegamenti elettrici disponibili.',
      closing:
        'Camping Lido Valderice ti aspetta per una vacanza tra natura, relax e libertà, a pochi passi dal mare.',
    },
    newsTitle: 'Goditi il campeggio… senza zanzare!',
    newsText:
      "Quest'anno al Camping Lido Valderice abbiamo installato il sistema di nebulizzazione antizanzare Geyser Pro di Stocker Garden. Grazie a questo impianto potrai rilassarti in piazzola o in area comune senza preoccupazioni, anche nelle ore serali.",
    newsList: ['Nessuna fastidiosa puntura', 'Massimo comfort', 'Sicuro ed ecologico'],
    newsOutro:
      'Vieni a provare il campeggio “zanzara-free” di cui tutti parlano… al Camping Lido Valderice ti aspetta un’estate all’insegna del puro relax!',
    galleryAlt: [
      'Zona piazzole ombreggiate',
      'Il lungomare davanti al campeggio',
      'Camper in piazzola tra il verde',
      'Viale principale del campeggio',
      'Piazzole con energia elettrica',
      'Zona tende all’ombra',
      'Camper parcheggiati sul lungomare',
      'Vista aerea delle piazzole',
      'Piazzola con vista mare',
      'Area verde delle piazzole',
    ],
    tendeGalleryAlt: [
      'Tende montate sulle piazzole',
      'Zona tende circondata dal verde',
      'Dettaglio di una piazzola tenda',
      'Ombreggiatura naturale della zona tende',
      'Tenda in piazzola con collegamento elettrico',
    ],
  },
  casette: {
    text: [
      'Il Camping Lido Valderice offre anche comode casette mobili per chi preferisce una soluzione di alloggio più confortevole.',
      'Le nostre casette sono perfette per famiglie o gruppi di amici, con una capacità di 4-5 posti letto.',
      "Ogni casetta dispone di una veranda esterna attrezzata con tavolo e sedie, ideale per rilassarsi all'aperto e godersi il panorama circostante.",
      "L'interno della casetta è composto da un soggiorno pranzo con angolo cottura e divanetto, una cameretta con 2-3 posti letto, una camera matrimoniale, un bagno con lavandino e doccia, e un bagno con solo WC.",
      'Le nostre casette mobili sono dotate di climatizzatore per il massimo comfort.',
    ],
    galleryAlt: [
      'Bagno con doccia della casetta',
      'Veranda attrezzata della casetta',
      'Soggiorno con angolo cottura',
      'Cucina e zona pranzo della casetta',
      'Corridoio e bagno con solo WC',
      'Cameretta con posti letto',
      'Vista panoramica dalla veranda',
      'Camera matrimoniale della casetta',
      'Interno arredato della casetta',
      'Angolo cottura della casetta',
    ],
  },
  ristorazione: {
    text: [
      "Il minimarket del Camping Lido Valderice è un'ottima risorsa per i nostri ospiti, che possono trovare il necessario per il proprio soggiorno.",
      'Inoltre, ogni mattina sono disponibili deliziosi cornetti appena sfornati per una colazione ancora più golosa. Potrai scegliere tra una vasta selezione di prodotti da forno e dolci.',
      'Il servizio di ristorazione offre ai clienti la possibilità di assaggiare i migliori piatti tipici della zona senza dover andare troppo lontano.',
    ],
    galleryAlt: [
      'Piatti tipici della ristorazione',
      'Il minimarket del campeggio',
      'Busiate con pesce',
      'Busiate allo scoglio',
      'Frutta fresca',
      'Insalata di mare',
      'Sarde alla siciliana',
      'Il bancone del minimarket',
    ],
  },
  territorio: {
    places: [
      {
        name: 'Erice',
        text: "Erice è un antico borgo medievale che offre una vista mozzafiato sulla costa occidentale della Sicilia. Erice conserva ancora intatta la sua struttura originaria con le mura di cinta, le torri difensive, le stradine lastricate e le suggestive piazzette. Visitando Erice avrete la sensazione di essere catapultati indietro nel tempo, grazie alle numerose leggende e tradizioni che permeano l'atmosfera del borgo. Inoltre, Erice è famosa per la produzione di dolci tipici, come le genovesi e le cassate, che potrete gustare nei numerosi bar e pasticcerie del centro storico.",
      },
      {
        name: 'Macari',
        text: 'Macari è una località costiera della Sicilia che offre uno scenario naturale incredibile e una spiaggia di rara bellezza. La zona offre anche numerose calette nascoste, ideali per fare snorkeling e scoprire la fauna marina locale.',
      },
      {
        name: 'Saline di Trapani',
        text: 'Le saline di Trapani sono un vero e proprio tesoro della Sicilia. Qui, in una zona unica al mondo, tra il mare e la costa, si possono ammirare i grandi bacini di sale. I mulini a vento e le torri costiere completano questo spettacolo unico che vi lascerà senza parole.',
      },
      {
        name: 'Monte Cofano',
        text: "La Riserva di Monte Cofano è caratterizzata da una costa frastagliata e spettacolare, che offre una vista mozzafiato sul mare cristallino. La riserva è ricca di flora e fauna autoctone, tra cui spiccano le palme nane e la disa. Il paesaggio è dominato dal monte Cofano, che offre splendide vedute panoramiche sulla costa e sulle isole Egadi. La riserva è un luogo ideale per escursioni a piedi o in bicicletta, ma anche per attività come il birdwatching.",
      },
      {
        name: 'Isola di Mozia',
        text: "L'isola di Mozia è un'antica colonia fenicia. Questo sito archeologico è considerato uno dei più importanti al mondo, poiché conserva le tracce della civiltà fenicia, che ha dominato questa parte del Mediterraneo tra l'VIII e il III secolo a.C. Il sito archeologico conserva importanti testimonianze dell'antica città, tra cui il tempio di Astarte, le case patrizie, le fortificazioni e le necropoli.",
      },
      {
        name: 'Parco Archeologico di Segesta',
        text: "Il Parco Archeologico di Segesta è un sito di grande importanza storica e culturale. Il parco comprende il tempio di Segesta e un teatro greco di notevole importanza storica e architettonica. Oltre a questi monumenti principali, nel parco archeologico si trovano anche resti di fortificazioni e di altre costruzioni, tra cui un'acropoli e un'area di necropoli.",
      },
      {
        name: 'Scopello',
        text: "Il suo paesaggio è caratterizzato da una rupe di colore rosso che si affaccia sul golfo, il cui mare azzurro trasparente è solcato da due alti faraglioni che dominano la vista. L'antica tonnara, che testimonia la forte relazione tra questo borgo e il mare, si trova ancora qui.",
      },
      {
        name: 'Isole Egadi',
        text: "Favignana è l'isola più grande e conosciuta, con le sue spiagge di sabbia bianca e le acque trasparenti che si tingono di blu intenso, verde e turchese. Levanzo è un'isola selvaggia e poco abitata, famosa per le sue grotte marine, mentre Marettimo è l'isola più lontana e montuosa, con piccole baie e spiagge nascoste, perfette per chi cerca la tranquillità.",
      },
    ],
  },
  prezzi: {
    cards: [
      {
        title: 'Promozione Luglio',
        subtitle: '2 persone, 1 piazzola, energia elettrica',
        price: '€24,00',
      },
      {
        title: 'Promozione Giugno e Settembre',
        subtitle: '2 persone, 1 piazzola, energia elettrica',
        price: '€22,00',
      },
      {
        title: 'Prezzi invernali: da ottobre a maggio',
        subtitle: '2 persone, 1 piazzola, energia elettrica',
        price: '€20,00',
      },
    ],
    highSeason: {
      title: 'Alta stagione: agosto*',
      service: 'Servizio',
      price: 'Prezzo',
      stayGroup: 'Soggiorno',
      vehiclesGroup: 'Veicoli',
      stay: [
        ['Persona', '€7,90'],
        ['Piazzola', '€13,90'],
        ['Tenda', '€7,90'],
        ['AirCamping', '€11,90'],
      ],
      vehicles: [
        ['Auto', '€4,00'],
        ['Moto', '€3,00'],
      ],
    },
    note: '* i bambini sotto i 3 anni non pagano',
  },
  contatti: {
    heading: 'Camping Lido Valderice',
    street: 'Via della Conchiglia n. 20',
    city: '91019 Valderice (TP)',
    email: 'campinglidovalderice@libero.it',
    phoneSeason: { label: '0923 573477', note: 'da giugno a settembre', tel: '+390923573477' },
    contacts: [
      { name: 'Concetta', phone: '338 1121216', tel: '+393381121216' },
      { name: 'Giusy', phone: '349 6767200', tel: '+393496767200' },
      { name: 'Vito', phone: '349 8542190', tel: '+393498542190' },
    ],
    mapTitle: 'Mappa: Campeggio Lido Valderice su Google Maps',
  },
  notFound: {
    title: 'Pagina non trovata',
    text: 'Sembra che tu ti sia allontanato dal sentiero battuto! Ma non preoccuparti, anche i migliori campeggiatori a volte si perdono. Ti riportiamo al falò.',
    cta: 'Torna alla home',
    alt: 'Uno scenario di mare tranquillo',
  },
} as const;

export type Ui = typeof it;

const en: Ui = {
  meta: {
    siteName: 'Camping Lido Valderice',
    home: {
      title: 'Camping Lido Valderice — Seaside camping in Valderice, Trapani',
      description:
        'Seaside camping in Valderice, Trapani: shaded pitches, mobile homes, mini market and restaurant, a few steps from the sea in Sicily.',
    },
    pages: {
      piazzole: 'Camper and tent pitches',
      casette: 'Mobile homes',
      ristorazione: 'Mini market and restaurant',
      territorio: 'Discover the area',
      prezzi: 'Rates and offers',
      contatti: 'Contacts',
    },
    descriptions: {
      piazzole:
        'Spacious, shaded camper and tent pitches along the main avenue, with electricity and CEE hook-ups. A quiet stop just a few steps from the sea.',
      casette:
        'Mobile homes sleeping 4-5 people with an equipped veranda, kitchenette and air conditioning: the comfortable choice for families and friends.',
      ristorazione:
        'Mini market with freshly baked croissants and a restaurant service serving Sicilian specialities: busiate, fresh fish and local dishes.',
      territorio:
        'Erice, Macari, the Trapani salt pans, Monte Cofano, Mozia, Segesta, Scopello and the Egadi Islands: what to visit around the campsite.',
      prezzi:
        'Camping Lido Valderice rates: June, July and September offers, winter prices and the August high-season price list.',
      contatti:
        'Via della Conchiglia 20, 91019 Valderice (TP), Sicily. Phone numbers, email and map to reach Camping Lido Valderice.',
    },
    heroAlt: {
      home: 'View of the campsite and the sea of Valderice',
      piazzole: 'Shaded pitches for campers and tents',
      casette: 'Mobile home with veranda',
      ristorazione: 'The campsite mini market',
      territorio: 'View of the Monte Cofano nature reserve and the gulf of Macari',
      prezzi: 'Night view over Trapani and the salt pans seen from Erice',
      contatti: 'Rocky cove with a view of the sea near the campsite',
    },
  },
  nav: {
    label: 'Main menu',
    home: 'Home',
    piazzole: 'Pitches',
    casette: 'Cabins',
    ristorazione: 'Food and market',
    territorio: 'Discover the area',
    prezzi: 'Rates and offers',
    contatti: 'Contacts',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  langSwitcher: 'Language',
  skipToContent: 'Skip to content',
  footer: {
    address: 'Address',
    street: 'Via della Conchiglia 20',
    city: '91019 Valderice (TP), Italy',
    mail: 'campinglidovalderice@libero.it',
    social: 'Follow us on social media',
    facebookAlt: 'The campsite’s Facebook page',
    instagramAlt: 'The campsite’s Instagram profile',
    rights: 'All rights reserved.',
    vat: 'VAT 01467360812',
  },
  common: {
    infoBooking: 'For information and bookings',
    contactUs: 'contact us!',
    explore: 'Explore',
    bookNow: 'Check availability',
    callNow: 'Call now',
    mapOpen: 'Open in Google Maps',
    morePhotos: 'Show more photos',
  },
  home: {
    heroTitle: 'Camping Lido Valderice',
    heroTagline: 'Sea, nature and relaxation: a holiday in freedom, surrounded by greenery and just a few steps from the sea of Valderice.',
    heroChip: 'Valderice · Trapani · Sicily',
    intro:
      'Choose from shaded pitches, well-kept facilities and a peaceful setting, ideal for families, couples and travellers.',
    newsTitle: 'A mosquito-free summer!',
    newsAlt: 'Illustration of a mosquito',
    newsText:
      'More comfort, fewer mosquitoes. Our campsite is now protected by an advanced eco-friendly mosquito misting system, so you can enjoy your holiday in complete relaxation. A more peaceful environment, for itch-free holidays!',
    cardsTitle: 'Stays and services',
    cards: {
      piazzole: { label: 'Camper and tent pitches', alt: 'Shaded pitches for campers and tents' },
      casette: { label: 'Cabins', alt: 'Mobile home with veranda' },
      ristorazione: { label: 'Mini market and restaurant', alt: 'The campsite mini market' },
    },
    territoryKicker: 'What to visit?',
    territoryTitle: 'Trapani: a city between two seas!',
    territoryText: [
      'The campsite’s strategic position makes it easy to explore the treasures the surrounding area has to offer.',
      'If you love nature, you will be glad to know that the campsite is close to the great nature reserves, where you can stroll through unspoilt woods and rivers, admiring flora and fauna unique in the world. If you are interested in history and culture, the nearby archaeological sites and art cities will take your breath away: ancient Greek temples, Roman theatres and contemporary art museums.',
      'And if you simply love taking in enchanting views, don’t miss the chance to admire the breathtaking vistas from the surrounding hills and nearby beaches.',
    ],
  },
  piazzole: {
    intro: {
      camperTitle: 'Do you have a camper or a caravan?',
      camperText:
        'Our dedicated pitches are located along the main avenue: spacious, shaded and equipped with electricity via CEE hook-ups. Perfect for a relaxing stop, with all the comforts at hand.',
      tendaTitle: 'Travelling with a tent?',
      tendaText:
        'We’ve thought of you too! The tent pitches are in a quieter, more secluded area surrounded by greenery, with natural and artificial shade and electric hook-ups available.',
      closing:
        'Camping Lido Valderice awaits you for a holiday of nature, relaxation and freedom, just a few steps from the sea.',
    },
    newsTitle: 'Enjoy the campsite… mosquito-free!',
    newsText:
      'This year at Camping Lido Valderice we installed the Stocker Garden Geyser Pro anti-mosquito misting system. Thanks to this system you can relax on your pitch or in the common areas worry-free, even in the evening hours.',
    newsList: ['No annoying bites', 'Maximum comfort', 'Safe and eco-friendly'],
    newsOutro:
      'Come and try the “mosquito-free” campsite everyone is talking about… at Camping Lido Valderice a summer of pure relaxation awaits you!',
    galleryAlt: [
      'Shaded pitch area',
      'The seafront in front of the campsite',
      'Camper on a pitch among the trees',
      'Main avenue of the campsite',
      'Pitches with electric hook-ups',
      'Tent area in the shade',
      'Campers parked along the seafront',
      'Aerial view of the pitches',
      'Pitch with a sea view',
      'Green area of the pitches',
    ],
    tendeGalleryAlt: [
      'Tents set up on the pitches',
      'Tent area surrounded by greenery',
      'Detail of a tent pitch',
      'Natural shade in the tent area',
      'Tent on a pitch with electric hook-up',
    ],
  },
  casette: {
    text: [
      'Camping Lido Valderice also offers comfortable mobile homes for those who prefer a more comfortable accommodation solution.',
      'Our cabins are perfect for families or groups of friends, sleeping 4–5 people.',
      'Each cabin has an outdoor veranda equipped with table and chairs, ideal for relaxing outdoors and enjoying the surrounding scenery.',
      'The interior consists of a living/dining area with kitchenette and small sofa, a small bedroom with 2–3 beds, a double bedroom, a bathroom with sink and shower, and a WC-only bathroom.',
      'Our mobile homes are equipped with air conditioning for maximum comfort.',
    ],
    galleryAlt: [
      'Cabin bathroom with shower',
      'Equipped veranda of the cabin',
      'Living area with kitchenette',
      'Kitchen and dining area of the cabin',
      'Hallway and toilet-only bathroom',
      'Small bedroom with beds',
      'Panoramic view from the veranda',
      'Double bedroom of the cabin',
      'Furnished interior of the cabin',
      'Kitchenette of the cabin',
    ],
  },
  ristorazione: {
    text: [
      'The Camping Lido Valderice mini market is a great resource for our guests, who can find everything they need for their stay.',
      'What’s more, every morning delicious freshly baked croissants are available for an even more indulgent breakfast. You can choose from a wide selection of baked goods and sweets.',
      'Our restaurant service lets guests taste the best local specialities without having to travel far.',
    ],
    galleryAlt: [
      'Typical dishes from our kitchen',
      'The campsite mini market',
      'Busiate with fish',
      'Busiate allo scoglio pasta',
      'Fresh fruit',
      'Seafood salad',
      'Sicilian-style sardines',
      'The mini market counter',
    ],
  },
  territorio: {
    places: [
      {
        name: 'Erice',
        text: 'Erice is an ancient medieval village offering breathtaking views over the western coast of Sicily. Erice still preserves its original structure with its city walls, defensive towers, cobbled streets and charming little squares. Visiting Erice feels like being catapulted back in time, thanks to the many legends and traditions that pervade the village atmosphere. Erice is also famous for its typical pastries, such as genovesi and cassate, which you can enjoy in the many cafés and pastry shops of the historic centre.',
      },
      {
        name: 'Macari',
        text: 'Macari is a coastal locality in Sicily offering an incredible natural setting and a beach of rare beauty. The area also has numerous hidden coves, ideal for snorkelling and discovering the local marine life.',
      },
      {
        name: 'Saline di Trapani',
        text: 'The Trapani salt pans are a true treasure of Sicily. Here, in an area unique in the world, between the sea and the coast, you can admire the great salt basins. Windmills and coastal towers complete this unique spectacle that will leave you speechless.',
      },
      {
        name: 'Monte Cofano',
        text: 'The Monte Cofano Nature Reserve is characterised by a spectacular rugged coastline offering breathtaking views of the crystal-clear sea. The reserve is rich in native flora and fauna, notably dwarf palms and the disa. The landscape is dominated by Mount Cofano, which offers splendid panoramic views of the coast and the Egadi Islands. The reserve is ideal for hiking or cycling, as well as activities such as birdwatching.',
      },
      {
        name: 'Island of Mozia',
        text: 'The island of Mozia is an ancient Phoenician colony. This archaeological site is considered one of the most important in the world, as it preserves the traces of the Phoenician civilisation, which dominated this part of the Mediterranean between the 8th and 3rd centuries BC. The site preserves important evidence of the ancient city, including the temple of Astarte, the patrician houses, the fortifications and the necropolises.',
      },
      {
        name: 'Segesta Archaeological Park',
        text: 'The Segesta Archaeological Park is a site of great historical and cultural importance. The park includes the temple of Segesta and a Greek theatre of remarkable historical and architectural value. Besides these main monuments, the park also contains remains of fortifications and other structures, including an acropolis and a necropolis area.',
      },
      {
        name: 'Scopello',
        text: 'Its landscape is characterised by a red rock face overlooking the gulf, where the clear blue sea is marked by two tall faraglioni sea stacks that dominate the view. The ancient tuna fishery, which testifies to the strong bond between this village and the sea, is still here.',
      },
      {
        name: 'Egadi Islands',
        text: "Favignana is the largest and best-known island, with its white sand beaches and clear waters tinged with deep blue, green and turquoise. Levanzo is a wild, sparsely inhabited island, famous for its sea caves, while Marettimo is the most remote and mountainous island, with small bays and hidden beaches, perfect for those seeking tranquillity.",
      },
    ],
  },
  prezzi: {
    cards: [
      {
        title: 'July offer',
        subtitle: '2 people, 1 pitch, electricity',
        price: '€24.00',
      },
      {
        title: 'June and September offer',
        subtitle: '2 people, 1 pitch, electricity',
        price: '€22.00',
      },
      {
        title: 'Winter rates: from October to May',
        subtitle: '2 people, 1 pitch, electricity',
        price: '€20.00',
      },
    ],
    highSeason: {
      title: 'High season: August*',
      service: 'Service',
      price: 'Price',
      stayGroup: 'Accommodation',
      vehiclesGroup: 'Vehicles',
      stay: [
        ['Person', '€7.90'],
        ['Pitch', '€13.90'],
        ['Tent', '€7.90'],
        ['AirCamping', '€11.90'],
      ],
      vehicles: [
        ['Car', '€4.00'],
        ['Motorbike', '€3.00'],
      ],
    },
    note: '* children under 3 stay for free',
  },
  contatti: {
    heading: 'Camping Lido Valderice',
    street: 'Via della Conchiglia 20',
    city: '91019 Valderice (TP), Italy',
    email: 'campinglidovalderice@libero.it',
    phoneSeason: { label: '+39 0923 573477', note: 'June to September', tel: '+390923573477' },
    contacts: [
      { name: 'Concetta', phone: '+39 338 1121216', tel: '+393381121216' },
      { name: 'Giusy', phone: '+39 349 6767200', tel: '+393496767200' },
      { name: 'Vito', phone: '+39 349 8542190', tel: '+393498542190' },
    ],
    mapTitle: 'Map: Campeggio Lido Valderice on Google Maps',
  },
  notFound: {
    title: 'Page not found',
    text: 'It looks like you strayed off the beaten track! But don’t worry — even the best campers get lost sometimes. We’ll bring you back to the campfire.',
    cta: 'Back to home',
    alt: 'A peaceful sea scene',
  },
};

const de: Ui = {
  meta: {
    siteName: 'Camping Lido Valderice',
    home: {
      title: 'Camping Lido Valderice — Camping am Meer in Valderice, Trapani',
      description:
        'Camping am Meer in Valderice bei Trapani: schattige Stellplätze, Mobilheime, Minimarkt und Gastronomie, nur wenige Schritte vom Meer entfernt.',
    },
    pages: {
      piazzole: 'Wohnmobil- und Zeltplätze',
      casette: 'Mobilheime',
      ristorazione: 'Minimarkt und Gastronomie',
      territorio: 'Die Umgebung entdecken',
      prezzi: 'Preise und Angebote',
      contatti: 'Kontakt',
    },
    descriptions: {
      piazzole:
        'Großzügige, schattige Stellplätze für Wohnmobile und Zelte an der Hauptallee, mit Strom und CEE-Anschlüssen. Ruhiger Aufenthalt nahe am Meer.',
      casette:
        'Mobilheime für 4-5 Personen mit möblierter Veranda, Kochnische und Klimaanlage: die komfortable Lösung für Familien und Freundesgruppen.',
      ristorazione:
        'Minimarkt mit frisch gebackenen Cornetti und Gastronomie mit sizilianischen Spezialitäten: Busiate, frischer Fisch und lokale Gerichte.',
      territorio:
        'Erice, Macari, die Salinen von Trapani, Monte Cofano, Mozia, Segesta, Scopello und die Ägadischen Inseln: Ausflugsziele rund um den Campingplatz.',
      prezzi:
        'Preise im Camping Lido Valderice: Angebote für Juni, Juli und September, Winterpreise und die Preisliste der Hochsaison im August.',
      contatti:
        'Via della Conchiglia 20, 91019 Valderice (TP), Sizilien. Telefonnummern, E-Mail und Karte, um den Campingplatz zu erreichen.',
    },
    heroAlt: {
      home: 'Blick auf den Campingplatz und das Meer von Valderice',
      piazzole: 'Schattige Stellplätze für Wohnmobile und Zelte',
      casette: 'Mobilheim mit Veranda',
      ristorazione: 'Der Minimarkt des Campingplatzes',
      territorio: 'Blick auf das Naturschutzgebiet Monte Cofano und den Golf von Macari',
      prezzi: 'Nachtblick über Trapani und die Salinen von Erice aus gesehen',
      contatti: 'Felsbucht mit Meerblick in der Nähe des Campingplatzes',
    },
  },
  nav: {
    label: 'Hauptmenü',
    home: 'Start',
    piazzole: 'Stellplätze',
    casette: 'Hütten',
    ristorazione: 'Essen und Markt',
    territorio: 'Die Umgebung entdecken',
    prezzi: 'Preise und Angebote',
    contatti: 'Kontakt',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
  },
  langSwitcher: 'Sprache',
  skipToContent: 'Zum Inhalt springen',
  footer: {
    address: 'Adresse',
    street: 'Via della Conchiglia 20',
    city: '91019 Valderice (TP), Italien',
    mail: 'campinglidovalderice@libero.it',
    social: 'Folgen Sie uns in den sozialen Medien',
    facebookAlt: 'Facebook-Seite des Campingplatzes',
    instagramAlt: 'Instagram-Profil des Campingplatzes',
    rights: 'Alle Rechte vorbehalten.',
    vat: 'MwSt.-Nr. 01467360812',
  },
  common: {
    infoBooking: 'Für Infos und Reservierungen',
    contactUs: 'kontaktieren Sie uns!',
    explore: 'Entdecken',
    bookNow: 'Verfügbarkeit anfragen',
    callNow: 'Jetzt anrufen',
    mapOpen: 'In Google Maps öffnen',
    morePhotos: 'Weitere Fotos anzeigen',
  },
  home: {
    heroTitle: 'Camping Lido Valderice',
    heroTagline: 'Meer, Natur und Erholung: ein Urlaub in Freiheit, umgeben von Grün und nur wenige Schritte vom Meer von Valderice entfernt.',
    heroChip: 'Valderice · Trapani · Sizilien',
    intro:
      'Wählen Sie zwischen schattigen Stellplätzen, gepflegten Einrichtungen und einer ruhigen Umgebung – ideal für Familien, Paare und Reisende.',
    newsTitle: 'Ein Sommer ohne Mücken!',
    newsAlt: 'Abbildung einer Mücke',
    newsText:
      'Mehr Komfort, weniger Mücken. Unser Campingplatz ist jetzt mit einem modernen, umweltfreundlichen Mücken-Nebelssystem geschützt, damit Sie Ihren Urlaub in voller Ruhe genießen können. Eine entspanntere Umgebung – für einen Urlaub ohne Stiche!',
    cardsTitle: 'Aufenthalte und Leistungen',
    cards: {
      piazzole: { label: 'Wohnmobil- und Zeltplätze', alt: 'Schattige Stellplätze für Wohnmobile und Zelte' },
      casette: { label: 'Hütten', alt: 'Mobilheim mit Veranda' },
      ristorazione: { label: 'Minimarkt und Gastronomie', alt: 'Der Minimarkt des Campingplatzes' },
    },
    territoryKicker: 'Was gibt es zu besuchen?',
    territoryTitle: 'Trapani: eine Stadt zwischen zwei Meeren!',
    territoryText: [
      'Die strategische Lage des Campingplatzes ermöglicht es Ihnen, die Schätze der Umgebung mühelos zu erkunden.',
      'Wenn Sie die Natur lieben, freut Sie zu hören, dass der Campingplatz nahe den großen Naturschutzgebieten liegt, wo Sie durch unberührte Wälder und an Flüssen spazieren und eine einzigartige Flora und Fauna bewundern können. Wenn Sie sich für Geschichte und Kultur interessieren, werden die archäologischen Stätten und Kunststädte in der Nähe Sie staunen lassen: alte griechische Tempel, römische Theater und Museen für zeitgenössische Kunst.',
      'Und wenn Sie es einfach lieben, herrliche Panoramen zu genießen, verpassen Sie nicht die Gelegenheit, die atemberaubenden Ausblicke von den umliegenden Hügeln und den nahegelegenen Stränden zu bewundern.',
    ],
  },
  piazzole: {
    intro: {
      camperTitle: 'Haben Sie ein Wohnmobil oder einen Wohnwagen?',
      camperText:
        'Unsere eigenen Stellplätze liegen an der Hauptallee: großzügig, schattig und mit Strom über CEE-Anschlüsse ausgestattet. Perfekt für einen entspannten Aufenthalt mit allem Komfort in Reichweite.',
      tendaTitle: 'Sie reisen mit dem Zelt?',
      tendaText:
        'Auch an Sie haben wir gedacht! Die Zeltplätze liegen in einer ruhigeren, abgelegeneren Zone, umgeben von Grün, mit natürlichem und künstlichem Schatten sowie verfügbaren Stromanschlüssen.',
      closing:
        'Das Camping Lido Valderice erwartet Sie mit einem Urlaub voller Natur, Entspannung und Freiheit, nur wenige Schritte vom Meer entfernt.',
    },
    newsTitle: 'Genießen Sie den Campingplatz… ohne Mücken!',
    newsText:
      'In diesem Jahr haben wir im Camping Lido Valderice das Mücken-Nebelssystem Geyser Pro von Stocker Garden installiert. Dank dieser Anlage können Sie sich auf dem Stellplatz oder in den Gemeinschaftsbereichen sorgenfrei entspannen – auch am Abend.',
    newsList: ['Keine lästigen Stiche', 'Maximaler Komfort', 'Sicher und umweltfreundlich'],
    newsOutro:
      'Kommen Sie und probieren Sie den „mückenfreien“ Campingplatz, über den alle sprechen… im Camping Lido Valderice erwartet Sie ein Sommer voller Erholung!',
    galleryAlt: [
      'Schattiger Stellplatzbereich',
      'Die Uferpromenade vor dem Campingplatz',
      'Wohnmobil auf einem Stellplatz im Grünen',
      'Hauptallee des Campingplatzes',
      'Stellplätze mit Stromanschluss',
      'Zeltzone im Schatten',
      'Wohnmobile an der Uferpromenade',
      'Luftaufnahme der Stellplätze',
      'Stellplatz mit Meerblick',
      'Grünfläche der Stellplätze',
    ],
    tendeGalleryAlt: [
      'Zelte auf den Stellplätzen',
      'Zeltzone, umgeben von Grün',
      'Detail eines Zeltplatzes',
      'Natürlicher Schatten in der Zeltzone',
      'Zelt auf einem Stellplatz mit Stromanschluss',
    ],
  },
  casette: {
    text: [
      'Das Camping Lido Valderice bietet auch gemütliche Mobilheime für alle, die eine komfortablere Unterkunft bevorzugen.',
      'Unsere Hütten sind perfekt für Familien oder Freundesgruppen und bieten Platz für 4–5 Personen.',
      'Jede Hütte verfügt über eine möblierte Außeneveranda mit Tisch und Stühlen – ideal, um sich im Freien zu entspannen und die Umgebung zu genießen.',
      'Der Innenraum besteht aus einem Wohn-/Essbereich mit Kochnische und kleiner Sofa, einem Kinderzimmer mit 2–3 Schlafplätzen, einem Doppelzimmer, einem Bad mit Waschbecken und Dusche sowie einem WC.',
      'Unsere Mobilheime sind für maximalen Komfort mit einer Klimaanlage ausgestattet.',
    ],
    galleryAlt: [
      'Bad mit Dusche der Hütte',
      'Möblierte Veranda der Hütte',
      'Wohnbereich mit Kochnische',
      'Küche und Essbereich der Hütte',
      'Flur und separates WC der Hütte',
      'Kinderzimmer mit Schlafplätzen',
      'Panoramablick von der Veranda',
      'Doppelzimmer der Hütte',
      'Eingerichteter Innenraum der Hütte',
      'Kochnische der Hütte',
    ],
  },
  ristorazione: {
    text: [
      'Der Minimarkt des Camping Lido Valderice ist eine tolle Anlaufstelle für unsere Gäste: Hier finden Sie alles, was Sie für Ihren Aufenthalt brauchen.',
      'Außerdem gibt es jeden Morgen köstliche, frisch gebackene Cornetti für ein noch genüsslicheres Frühstück. Wählen Sie aus einer großen Auswahl an Backwaren und Süßspeisen.',
      'Unser Gastronomieangebot ermöglicht es den Gästen, die besten typischen Gerichte der Region zu probieren, ohne weit fahren zu müssen.',
    ],
    galleryAlt: [
      'Typische Gerichte unserer Küche',
      'Der Minimarkt des Campingplatzes',
      'Busiate mit Fisch',
      'Busiate allo scoglio',
      'Frisches Obst',
      'Meeressalat',
      'Sardinen auf sizilianische Art',
      'Die Theke des Minimarkts',
    ],
  },
  territorio: {
    places: [
      {
        name: 'Erice',
        text: 'Erice ist ein altes mittelalterliches Städtchen mit einem atemberaubenden Blick auf die Westküste Siziliens. Erice bewahrt seine ursprüngliche Struktur mit Stadtmauern, Wehrtürmen, gepflasterten Gassen und malerischen kleinen Plätzen. Beim Besuch von Erice hat man das Gefühl, in der Zeit zurückversetzt zu werden – dank der zahlreichen Legenden und Traditionen, die die Atmosphäre des Ortes durchdringen. Erice ist auch für seine typischen Süßspeisen bekannt, wie die Genovesi und Cassate, die Sie in den vielen Bars und Konditoreien der Altstadt genießen können.',
      },
      {
        name: 'Macari',
        text: 'Macari ist ein Küstenort Siziliens mit einer unglaublichen Naturlandschaft und einem Strand von seltener Schönheit. Die Gegend bietet auch zahlreiche versteckte Buchten, ideal zum Schnorcheln und zur Entdeckung der lokalen Meeresfauna.',
      },
      {
        name: 'Salinen von Trapani',
        text: 'Die Salinen von Trapani sind ein wahrer Schatz Siziliens. Hier, in einer einmaligen Zone zwischen Meer und Küste, kann man die großen Salzbecken bewundern. Windmühlen und Küstentürme vervollständigen dieses einzigartige Schauspiel, das Sie sprachlos machen wird.',
      },
      {
        name: 'Monte Cofano',
        text: 'Das Naturschutzgebiet Monte Cofano ist geprägt von einer spektakulären, zerklüfteten Küste mit atemberaubendem Blick auf das kristallklare Meer. Das Reservat ist reich an einheimischer Flora und Fauna, darunter die Zwergpalmen und die Disa. Die Landschaft wird vom Monte Cofano beherrscht, der herrliche Panoramablicke auf die Küste und die Ägadischen Inseln bietet. Das Reservat ist ideal für Wanderungen oder Radtouren, aber auch für Aktivitäten wie Vogelbeobachtung.',
      },
      {
        name: 'Insel Mozia',
        text: 'Die Insel Mozia ist eine alte phönizische Kolonie. Diese archäologische Stätte gilt als eine der wichtigsten der Welt, da sie die Spuren der phönizischen Zivilisation bewahrt, die zwischen dem 8. und 3. Jahrhundert v. Chr. diesen Teil des Mittelmeers beherrschte. Die Ausgrabungsstätte bewahrt wichtige Zeugnisse der antiken Stadt, darunter der Tempel der Astarte, die Patrizierhäuser, die Befestigungsanlagen und die Nekropolen.',
      },
      {
        name: 'Archäologischer Park von Segesta',
        text: 'Der Archäologische Park von Segesta ist eine Stätte von großer historischer und kultureller Bedeutung. Der Park umfasst den Tempel von Segesta und ein griechisches Theater von bemerkenswerter historischer und architektonischer Bedeutung. Neben diesen Hauptmonumenten findet man im Park auch Überreste von Befestigungsanlagen und weiteren Bauwerken, darunter eine Akropolis und ein Nekropolenbereich.',
      },
      {
        name: 'Scopello',
        text: 'Die Landschaft ist geprägt von einem roten Felsen, der auf den Golf blickt, dessen klares blaues Meer von zwei hohen Faraglioni-Felsnadeln durchzogen wird, die den Blick beherrschen. Die alte Thunfischfanganlage, die Zeugnis der engen Verbindung zwischen diesem Dorf und dem Meer ist, befindet sich noch heute hier.',
      },
      {
        name: 'Ägadische Inseln',
        text: 'Favignana ist die größte und bekannteste Insel, mit ihren weißen Sandstränden und den klaren Gewässern, die sich in Tiefblau, Grün und Türkis schimmern. Levanzo ist eine wilde, dünn besiedelte Insel, berühmt für ihre Meereshöhlen, während Marettimo die am weitesten entfernte und gebirgigste Insel ist, mit kleinen Buchten und versteckten Stränden – perfekt für alle, die Ruhe suchen.',
      },
    ],
  },
  prezzi: {
    cards: [
      {
        title: 'Juli-Angebot',
        subtitle: '2 Personen, 1 Stellplatz, Strom',
        price: '24,00 €',
      },
      {
        title: 'Angebot Juni und September',
        subtitle: '2 Personen, 1 Stellplatz, Strom',
        price: '22,00 €',
      },
      {
        title: 'Winterpreise: von Oktober bis Mai',
        subtitle: '2 Personen, 1 Stellplatz, Strom',
        price: '20,00 €',
      },
    ],
    highSeason: {
      title: 'Hochsaison: August*',
      service: 'Leistung',
      price: 'Preis',
      stayGroup: 'Aufenthalt',
      vehiclesGroup: 'Fahrzeuge',
      stay: [
        ['Person', '7,90 €'],
        ['Stellplatz', '13,90 €'],
        ['Zelt', '7,90 €'],
        ['AirCamping', '11,90 €'],
      ],
      vehicles: [
        ['Auto', '4,00 €'],
        ['Motorrad', '3,00 €'],
      ],
    },
    note: '* Kinder unter 3 Jahren zahlen nichts',
  },
  contatti: {
    heading: 'Camping Lido Valderice',
    street: 'Via della Conchiglia 20',
    city: '91019 Valderice (TP), Italien',
    email: 'campinglidovalderice@libero.it',
    phoneSeason: { label: '+39 0923 573477', note: 'Juni bis September', tel: '+390923573477' },
    contacts: [
      { name: 'Concetta', phone: '+39 338 1121216', tel: '+393381121216' },
      { name: 'Giusy', phone: '+39 349 6767200', tel: '+393496767200' },
      { name: 'Vito', phone: '+39 349 8542190', tel: '+393498542190' },
    ],
    mapTitle: 'Karte: Campeggio Lido Valderice auf Google Maps',
  },
  notFound: {
    title: 'Seite nicht gefunden',
    text: 'Es scheint, als wären Sie vom ausgetretenen Pfad abgekommen! Aber keine Sorge – auch die besten Camper verirren sich manchmal. Wir bringen Sie zurück zum Lagerfeuer.',
    cta: 'Zurück zur Startseite',
    alt: 'Eine ruhige Meerslandschaft',
  },
};

const fr: Ui = {
  meta: {
    siteName: 'Camping Lido Valderice',
    home: {
      title: 'Camping Lido Valderice — Camping au bord de la mer à Valderice, Trapani',
      description:
        'Camping au bord de la mer à Valderice, Trapani : emplacements ombragés, mobile-homes, mini-market et restauration, à quelques pas de la mer.',
    },
    pages: {
      piazzole: 'Emplacements camping-cars et tentes',
      casette: 'Mobile-homes',
      ristorazione: 'Mini-market et restauration',
      territorio: 'Découvrir la région',
      prezzi: 'Tarifs et offres',
      contatti: 'Contacts',
    },
    descriptions: {
      piazzole:
        'Emplacements camping-cars et tentes spacieux et ombragés le long de l’allée principale, avec électricité et prises CEE. Une halte paisible près de la mer.',
      casette:
        'Mobile-homes de 4 à 5 couchages avec véranda équipée, coin cuisine et climatisation : la solution confortable pour familles et groupes d’amis.',
      ristorazione:
        'Mini-market avec cornettis tout juste sortis du four et restauration de spécialités siciliennes : busiate, poisson frais et plats locaux.',
      territorio:
        'Erice, Macari, les salines de Trapani, le Monte Cofano, Mozia, Ségeste, Scopello et les îles Égades : que visiter autour du camping.',
      prezzi:
        'Tarifs du Camping Lido Valderice : offres de juin, juillet et septembre, tarifs d’hiver et liste de la haute saison en août.',
      contatti:
        'Via della Conchiglia 20, 91019 Valderice (TP), Sicile. Téléphones, e-mail et carte pour rejoindre le Camping Lido Valderice.',
    },
    heroAlt: {
      home: 'Vue du camping et de la mer de Valderice',
      piazzole: 'Emplacements ombragés pour camping-cars et tentes',
      casette: 'Mobile-home avec véranda',
      ristorazione: 'Le mini-market du camping',
      territorio: 'Vue sur la réserve du Monte Cofano et le golfe de Macari',
      prezzi: 'Vue nocturne sur Trapani et les salines depuis Erice',
      contatti: 'Crique rocheuse avec vue sur la mer près du camping',
    },
  },
  nav: {
    label: 'Menu principal',
    home: 'Accueil',
    piazzole: 'Emplacements',
    casette: 'Bungalows',
    ristorazione: 'Restauration et market',
    territorio: 'Découvrir la région',
    prezzi: 'Tarifs et offres',
    contatti: 'Contacts',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },
  langSwitcher: 'Langue',
  skipToContent: 'Aller au contenu',
  footer: {
    address: 'Adresse',
    street: 'Via della Conchiglia 20',
    city: '91019 Valderice (TP), Italie',
    mail: 'campinglidovalderice@libero.it',
    social: 'Suivez-nous sur les réseaux sociaux',
    facebookAlt: 'Page Facebook du camping',
    instagramAlt: 'Profil Instagram du camping',
    rights: 'Tous droits réservés.',
    vat: 'TVA 01467360812',
  },
  common: {
    infoBooking: 'Pour infos et réservations',
    contactUs: 'contactez-nous !',
    explore: 'Découvrir',
    bookNow: 'Demander la disponibilité',
    callNow: 'Appeler maintenant',
    mapOpen: 'Ouvrir dans Google Maps',
    morePhotos: 'Afficher plus de photos',
  },
  home: {
    heroTitle: 'Camping Lido Valderice',
    heroTagline: 'Mer, nature et détente : des vacances en toute liberté, entourées de verdure, à quelques pas de la mer de Valderice.',
    heroChip: 'Valderice · Trapani · Sicile',
    intro:
      'Choisissez parmi des emplacements ombragés, des services soignés et un cadre paisible, idéal pour les familles, les couples et les voyageurs.',
    newsTitle: 'Un été sans moustiques !',
    newsAlt: 'Illustration d’un moustique',
    newsText:
      'Plus de confort, moins de moustiques. Notre camping est désormais protégé par un système de nébulisation écologique avancé contre les moustiques, pour que vous profitiez de vos vacances en toute sérénité. Un environnement plus paisible, pour des vacances sans piqûres !',
    cardsTitle: 'Séjours et services',
    cards: {
      piazzole: { label: 'Emplacements camping-cars et tentes', alt: 'Emplacements ombragés pour camping-cars et tentes' },
      casette: { label: 'Bungalows', alt: 'Mobile-home avec véranda' },
      ristorazione: { label: 'Mini-market et restauration', alt: 'Le mini-market du camping' },
    },
    territoryKicker: 'Que visiter ?',
    territoryTitle: 'Trapani : une ville entre deux mers !',
    territoryText: [
      'La position stratégique du camping vous permet d’explorer facilement les trésors que la région environnante a à offrir.',
      'Si vous aimez la nature, vous serez heureux de savoir que le camping se trouve à proximité des grandes réserves naturelles, où vous pourrez flâner entre bois et rivières intactes en admirant une faune et une flore uniques au monde. Si vous vous intéressez à l’histoire et à la culture, les sites archéologiques et les villes d’art des environs vous émerveilleront : temples grecs antiques, théâtres romains et musées d’art contemporain.',
      'Et si vous aimez simplement profiter de panoramas enchanteurs, ne manquez pas l’occasion d’admirer les vues à couper le souffle depuis les collines environnantes et les plages voisines.',
    ],
  },
  piazzole: {
    intro: {
      camperTitle: 'Vous avez un camping-car ou une caravane ?',
      camperText:
        'Nos emplacements dédiés se trouvent le long de l’allée principale : spacieux, ombragés et équipés d’électricité avec prises CEE. Parfaits pour une halte relaxante, avec tout le confort à portée de main.',
      tendaTitle: 'Vous voyagez sous la tente ?',
      tendaText:
        'Nous avons pensé à vous aussi ! Les emplacements tente se trouvent dans une zone plus retirée et paisible, entourée de verdure, avec une ombre naturelle et artificielle et des branchements électriques disponibles.',
      closing:
        'Le Camping Lido Valderice vous attend pour des vacances de nature, de détente et de liberté, à quelques pas de la mer.',
    },
    newsTitle: 'Profitez du camping… sans moustiques !',
    newsText:
      'Cette année, au Camping Lido Valderice, nous avons installé le système de nébulisation anti-moustiques Geyser Pro de Stocker Garden. Grâce à cette installation, vous pourrez vous détendre sur votre emplacement ou dans les espaces communs sans souci, même en soirée.',
    newsList: ['Aucune piqûre gênante', 'Confort maximal', 'Sûr et écologique'],
    newsOutro:
      'Venez découvrir le camping « sans moustiques » dont tout le monde parle… au Camping Lido Valderice, un été de pure détente vous attend !',
    galleryAlt: [
      'Zone d’emplacements ombragés',
      'Le front de mer devant le camping',
      'Camping-car sur un emplacement dans la verdure',
      'Allée principale du camping',
      'Emplacements avec électricité',
      'Zone de tentes à l’ombre',
      'Camping-cars garés le long du front de mer',
      'Vue aérienne des emplacements',
      'Emplacement avec vue sur la mer',
      'Espace vert des emplacements',
    ],
    tendeGalleryAlt: [
      'Tentes montées sur les emplacements',
      'Zone de tentes entourée de verdure',
      'Détail d’un emplacement tente',
      'Ombre naturelle de la zone de tentes',
      'Tente sur un emplacement avec branchement électrique',
    ],
  },
  casette: {
    text: [
      'Le Camping Lido Valderice propose également des mobile-homes confortables pour ceux qui préfèrent une solution d’hébergement plus confortable.',
      'Nos bungalows sont parfaits pour les familles ou les groupes d’amis, avec une capacité de 4 à 5 couchages.',
      'Chaque bungalow dispose d’une véranda extérieure équipée d’une table et de chaises, idéale pour se détendre en plein air et profiter du panorama environnant.',
      'L’intérieur se compose d’un séjour avec coin cuisine et petit canapé, d’une petite chambre avec 2 à 3 couchages, d’une chambre double, d’une salle de bain avec lavabo et douche, et d’un WC séparé.',
      'Nos mobile-homes sont équipés de la climatisation pour un confort maximal.',
    ],
    galleryAlt: [
      'Salle de bain avec douche du bungalow',
      'Véranda équipée du bungalow',
      'Séjour avec coin cuisine',
      'Cuisine et coin repas du bungalow',
      'Couloir et toilettes séparées du bungalow',
      'Petite chambre avec couchages',
      'Vue panoramique depuis la véranda',
      'Chambre double du bungalow',
      'Intérieur meublé du bungalow',
      'Coin cuisine du bungalow',
    ],
  },
  ristorazione: {
    text: [
      'Le mini-market du Camping Lido Valderice est une excellente ressource pour nos hôtes, qui y trouvent le nécessaire pour leur séjour.',
      'De plus, chaque matin, de délicieux cornettis tout justes sortis du four sont disponibles pour un petit-déjeuner encore plus gourmand. Vous pourrez choisir parmi une vaste sélection de produits de boulangerie et de douceurs.',
      'Le service de restauration permet aux clients de goûter les meilleurs plats typiques de la région sans avoir à aller loin.',
    ],
    galleryAlt: [
      'Plats typiques de la restauration',
      'Le mini-market du camping',
      'Busiate au poisson',
      'Busiate allo scoglio',
      'Fruits frais',
      'Salade de fruits de mer',
      'Sardines à la sicilienne',
      'Le comptoir du mini-market',
    ],
  },
  territorio: {
    places: [
      {
        name: 'Erice',
        text: 'Erice est un ancien bourg médiéval offrant une vue à couper le souffle sur la côte occidentale de la Sicile. Erice conserve encore intacte sa structure d’origine avec ses remparts, ses tours défensives, ses ruelles pavées et ses petites places charmantes. En visitant Erice, on a l’impression d’être projeté dans le temps, grâce aux nombreuses légendes et traditions qui imprègnent l’atmosphère du bourg. Erice est également réputée pour ses pâtisseries typiques, comme les genovesi et les cassate, à déguster dans les nombreux bars et pâtisseries du centre historique.',
      },
      {
        name: 'Macari',
        text: 'Macari est un site côtier de Sicile qui offre un décor naturel incroyable et une plage d’une rare beauté. La zone abrite aussi de nombreuses criques cachées, idéales pour faire du snorkeling et découvrir la faune marine locale.',
      },
      {
        name: 'Salines de Trapani',
        text: 'Les salines de Trapani sont un véritable trésor de la Sicile. Ici, dans une zone unique au monde, entre la mer et la côte, on peut admirer les grands bassins de sel. Les moulins à vent et les tours côtières complètent ce spectacle unique qui vous laissera sans voix.',
      },
      {
        name: 'Monte Cofano',
        text: 'La réserve du Monte Cofano se caractérise par une côte découpée et spectaculaire, offrant une vue imprenable sur la mer cristalline. La réserve est riche en flore et faune indigènes, notamment les palmiers nains et la disa. Le paysage est dominé par le mont Cofano, qui offre de superbes vues panoramiques sur la côte et les îles Égades. La réserve est un lieu idéal pour des excursions à pied ou à vélo, mais aussi pour des activités comme l’observation des oiseaux.',
      },
      {
        name: 'Île de Mozia',
        text: 'L’île de Mozia est une ancienne colonie phénicienne. Ce site archéologique est considéré comme l’un des plus importants au monde, car il conserve les traces de la civilisation phénicienne, qui a dominé cette partie de la Méditerranée entre le VIIIᵉ et le IIIᵉ siècle av. J.-C. Le site conserve des témoignages importants de la cité antique, dont le temple d’Astarté, les maisons patriciennes, les fortifications et les nécropoles.',
      },
      {
        name: 'Parc archéologique de Ségeste',
        text: 'Le parc archéologique de Ségeste est un site d’une grande importance historique et culturelle. Le parc comprend le temple de Ségeste et un théâtre grec d’une remarquable valeur historique et architecturale. Outre ces monuments principaux, le parc abrite aussi des restes de fortifications et d’autres constructions, dont une acropole et une zone de nécropole.',
      },
      {
        name: 'Scopello',
        text: 'Son paysage est caractérisé par une falaise rouge qui surplombe le golfe, dont la mer bleue et transparente est sillonnée par deux hauts faraglioni qui dominent la vue. L’ancienne tonnara, témoin du lien fort entre ce bourg et la mer, se trouve encore ici.',
      },
      {
        name: 'Îles Égades',
        text: 'Favignana est la plus grande et la plus connue des îles, avec ses plages de sable blanc et ses eaux transparentes qui se teintent de bleu profond, de vert et de turquoise. Levanzo est une île sauvage et peu habitée, célèbre pour ses grottes marines, tandis que Marettimo est l’île la plus lointaine et la plus montagneuse, avec de petites baies et des plages cachées, parfaites pour qui cherche la tranquillité.',
      },
    ],
  },
  prezzi: {
    cards: [
      {
        title: 'Offre de juillet',
        subtitle: '2 personnes, 1 emplacement, électricité',
        price: '24,00 €',
      },
      {
        title: 'Offre juin et septembre',
        subtitle: '2 personnes, 1 emplacement, électricité',
        price: '22,00 €',
      },
      {
        title: 'Tarifs hiver : d’octobre à mai',
        subtitle: '2 personnes, 1 emplacement, électricité',
        price: '20,00 €',
      },
    ],
    highSeason: {
      title: 'Haute saison : août*',
      service: 'Prestation',
      price: 'Tarif',
      stayGroup: 'Séjour',
      vehiclesGroup: 'Véhicules',
      stay: [
        ['Personne', '7,90 €'],
        ['Emplacement', '13,90 €'],
        ['Tente', '7,90 €'],
        ['AirCamping', '11,90 €'],
      ],
      vehicles: [
        ['Voiture', '4,00 €'],
        ['Moto', '3,00 €'],
      ],
    },
    note: '* les enfants de moins de 3 ans ne paient pas',
  },
  contatti: {
    heading: 'Camping Lido Valderice',
    street: 'Via della Conchiglia 20',
    city: '91019 Valderice (TP), Italie',
    email: 'campinglidovalderice@libero.it',
    phoneSeason: { label: '+39 0923 573477', note: 'de juin à septembre', tel: '+390923573477' },
    contacts: [
      { name: 'Concetta', phone: '+39 338 1121216', tel: '+393381121216' },
      { name: 'Giusy', phone: '+39 349 6767200', tel: '+393496767200' },
      { name: 'Vito', phone: '+39 349 8542190', tel: '+393498542190' },
    ],
    mapTitle: 'Carte : Campeggio Lido Valderice sur Google Maps',
  },
  notFound: {
    title: 'Page introuvable',
    text: 'On dirait que vous vous êtes éloigné du sentier battu ! Mais pas d’inquiétude — même les meilleurs campeurs se perdent parfois. Nous vous ramenons au feu de camp.',
    cta: 'Retour à l’accueil',
    alt: 'Une scène de mer paisible',
  },
};

export const ui: Record<Locale, Ui> = { it, en, de, fr };
