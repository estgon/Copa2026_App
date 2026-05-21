// ============================================================================
// Copa 2026 - Controle de Figurinhas
// Arquivo: app.js
// ============================================================================

// ============================================================================
// DATA STRUCTURES
// ============================================================================

const countries = {
  'A': [['México', 'MEX'], ['África do Sul', 'ZAF'], ['Coreia do Sul', 'KOR'], ['Rep. Tcheca', 'CZE']],
  'B': [['Canadá', 'CAN'], ['Bósnia', 'BIH'], ['Catar', 'QAT'], ['Suíça', 'CHE']],
  'C': [['Brasil', 'BRA'], ['Marrocos', 'MAR'], ['Haiti', 'HTI'], ['Escócia', 'GBR']],
  'D': [['Estados Unidos', 'USA'], ['Paraguai', 'PRY'], ['Austrália', 'AUS'], ['Turquia', 'TUR']],
  'E': [['Alemanha', 'DEU'], ['Curaçau', 'CUW'], ['Costa do Marfim', 'CIV'], ['Equador', 'ECU']],
  'F': [['Holanda', 'NLD'], ['Japão', 'JPN'], ['Suécia', 'SWE'], ['Tunísia', 'TUN']],
  'G': [['Bélgica', 'BEL'], ['Egito', 'EGY'], ['Irã', 'IRN'], ['Nova Zelândia', 'NZL']],
  'H': [['Espanha', 'ESP'], ['Cabo Verde', 'CPV'], ['Arábia Saudita', 'SAU'], ['Uruguai', 'URY']],
  'I': [['França', 'FRA'], ['Senegal', 'SEN'], ['Iraque', 'IRQ'], ['Noruega', 'NOR']],
  'J': [['Argentina', 'ARG'], ['Argélia', 'DZA'], ['Áustria', 'AUT'], ['Jordânia', 'JOR']],
  'K': [['Portugal', 'PRT'], ['Congo', 'COD'], ['Uzbequistão', 'UZB'], ['Colômbia', 'COL']],
  'L': [['Inglaterra', 'GB-ENG'], ['Croácia', 'HRV'], ['Gana', 'GHA'], ['Panamá', 'PAN']]
};

const countryColors = {
  'BRA': '#FFD700', 'ARG': '#87CEEB', 'URY': '#87CEEB', 'COL': '#FFD700', 'ECU': '#FFD700', 'PRY': '#E74C3C',
  'DEU': '#DC241F', 'GB-ENG': '#E71930', 'FRA': '#003DA5', 'ESP': '#E74C3C', 'PRT': '#E74C3C', 'NLD': '#FF8C00',
  'BEL': '#8B0000', 'HRV': '#DC143C', 'SWE': '#FFD700', 'GBR': '#003DA5', 'AUT': '#E74C3C',
  'CZE': '#E74C3C', 'TUR': '#E60000', 'NOR': '#E74C3C', 'BIH': '#0055CC',
  'USA': '#B22234', 'MEX': '#006C42', 'CAN': '#FF0000', 'PAN': '#FF0000', 'HTI': '#0055CC', 'CUW': '#0055CC',
  'MAR': '#E74C3C', 'SEN': '#CE1126', 'CIV': '#FF8C00', 'EGY': '#E74C3C', 'GHA': '#CE1126', 'DZA': '#CE1126',
  'TUN': '#E74C3C', 'ZAF': '#FFD700', 'COD': '#87CEEB', 'CPV': '#0055CC',
  'JPN': '#BC002D', 'KOR': '#FF0000', 'AUS': '#FFB800', 'SAU': '#006C4E', 'IRN': '#CE1126', 'QAT': '#800020',
  'IRQ': '#228B22', 'UZB': '#1E90FF', 'JOR': '#000000', 'NZL': '#002B7F', 'CHE': '#E74C3C'
};

const flagEmojis = {
  'MEX': '🇲🇽', 'ZAF': '🇿🇦', 'KOR': '🇰🇷', 'CZE': '🇨🇿', 'CAN': '🇨🇦', 'BIH': '🇧🇦', 'QAT': '🇶🇦', 'CHE': '🇨🇭',
  'BRA': '🇧🇷', 'MAR': '🇲🇦', 'HTI': '🇭🇹', 'GBR': '🇬🇧', 'GB-ENG': '🏴', 'USA': '🇺🇸', 'PRY': '🇵🇾', 'AUS': '🇦🇺',
  'TUR': '🇹🇷', 'DEU': '🇩🇪', 'CUW': '🇨🇼', 'CIV': '🇨🇮', 'ECU': '🇪🇨', 'NLD': '🇳🇱', 'JPN': '🇯🇵', 'SWE': '🇸🇪',
  'TUN': '🇹🇳', 'BEL': '🇧🇪', 'EGY': '🇪🇬', 'IRN': '🇮🇷', 'NZL': '🇳🇿', 'ESP': '🇪🇸', 'CPV': '🇨🇻', 'SAU': '🇸🇦',
  'URY': '🇺🇾', 'FRA': '🇫🇷', 'SEN': '🇸🇳', 'IRQ': '🇮🇶', 'NOR': '🇳🇴', 'ARG': '🇦🇷', 'DZA': '🇩🇿', 'AUT': '🇦🇹',
  'JOR': '🇯🇴', 'PRT': '🇵🇹', 'COD': '🇨🇩', 'UZB': '🇺🇿', 'COL': '🇨🇴', 'HRV': '🇭🇷', 'GHA': '🇬🇭', 'PAN': '🇵🇦'
};

const iso3ToIso2 = {
  MEX: 'mx', ZAF: 'za', KOR: 'kr', CZE: 'cz', CAN: 'ca', BIH: 'ba', QAT: 'qa', CHE: 'ch',
  BRA: 'br', MAR: 'ma', HTI: 'ht', GBR: 'gb', 'GB-ENG': 'gb-eng', USA: 'us', PRY: 'py', AUS: 'au',
  TUR: 'tr', DEU: 'de', CUW: 'cw', CIV: 'ci', ECU: 'ec', NLD: 'nl', JPN: 'jp', SWE: 'se',
  TUN: 'tn', BEL: 'be', EGY: 'eg', IRN: 'ir', NZL: 'nz', ESP: 'es', CPV: 'cv', SAU: 'sa',
  URY: 'uy', FRA: 'fr', SEN: 'sn', IRQ: 'iq', NOR: 'no', ARG: 'ar', DZA: 'dz', AUT: 'at',
  JOR: 'jo', PRT: 'pt', COD: 'cd', UZB: 'uz', COL: 'co', HRV: 'hr', GHA: 'gh', PAN: 'pa'
};
const refriPlayers = [
  null,
  { name: 'Lamine Yamal',      code: 'ESP'    }, // CC 01
  { name: 'Federico Valverde', code: 'URY'    }, // CC 02
  { name: 'Lautaro Martínez',  code: 'ARG'    }, // CC 03
  { name: 'Gabriel Magalhães', code: 'BRA'    }, // CC 04
  { name: 'Harry Kane',        code: 'GB-ENG' }, // CC 05
  { name: 'Joško Gvardiol',    code: 'HRV'    }, // CC 06
  { name: 'Alphonso Davies',   code: 'CAN'    }, // CC 07
  { name: 'Joshua Kimmich',    code: 'DEU'    }, // CC 08
  { name: 'Santiago Giménez',  code: 'MEX'    }, // CC 09
  { name: 'Virgil van Dijk',   code: 'NLD'    }, // CC 10
  { name: 'Emiliano Martínez', code: 'ARG'    }, // CC 11
  { name: 'Jefferson Lerma',   code: 'COL'    }, // CC 12
  { name: 'Raúl Jiménez',      code: 'MEX'    }, // CC 13
  { name: 'Enner Valencia',    code: 'ECU'    }, // CC 14
];

// playerData[ISO3][número] = nome do jogador (1=badge país, 2-20 jogadores, sem #13)
const playerData = {
  MEX:{1:'México',2:'Luis Malagón',3:'Johan Vásquez',4:'Jorge Sánchez',5:'César Montes',6:'Jesús Gallardo',7:'Israel Reyes',8:'Diego Lainez',9:'Carlos Rodríguez',10:'Edson Álvarez',11:'Orbelín Pineda',12:'Marcel Ruiz',14:'Érick Sánchez',15:'Hirving Lozano',16:'Santiago Giménez',17:'Raúl Jiménez',18:'Alexis Vega',19:'Roberto Alvarado',20:'César Huerta'},
  ZAF:{1:'África do Sul',2:'Ronwen Williams',3:'Sipho Chaine',4:'Aubrey Modiba',5:'Samukele Kabini',6:'Mbekezeli Mbokazi',7:'Khulumani Ndamane',8:'Siyabonga Ngezana',9:'Khuliso Mudau',10:'Nkosinathi Sibisi',11:'Teboho Mokoena',12:'Thalente Mbatha',14:'Bathuisi Aubaas',15:'Yaya Sithole',16:'Sipho Mbule',17:'Lyle Foster',18:'Ioraam Rayners',19:'Mohau Nkota',20:'Oswin Appolis'},
  KOR:{1:'Coreia do Sul',2:'Hyeon-woo Jo',3:'Seung-Gyu Kim',4:'Min-jae Kim',5:'Yu-min Cho',6:'Young-woo Seol',7:'Han-beom Lee',8:'Tae-seok Lee',9:'Myung-jae Lee',10:'Jae-sung Lee',11:'In-beom Hwang',12:'Kang-in Lee',14:'Seung-ho Paik',15:'Jens Castrop',16:'Dong-gyeong Lee',17:'Gue-sung Cho',18:'Heung-min Son',19:'Hee-chan Hwang',20:'Hyeon-Gyu Oh'},
  CZE:{1:'República Tcheca',2:'Matěj Kovář',3:'Jindřich Staněk',4:'Ladislav Krejčí',5:'Vladimír Coufal',6:'Jaroslav Zelený',7:'Tomáš Holeš',8:'David Zima',9:'Michal Sadílek',10:'Lukáš Provod',11:'Lukáš Červ',12:'Tomáš Souček',14:'Pavel Šulc',15:'Matěj Vydra',16:'Vasil Kušej',17:'Tomáš Chorý',18:'Václav Černý',19:'Adam Hložek',20:'Patrik Schick'},
  CAN:{1:'Canadá',2:'Dayne St. Clair',3:'Alphonso Davies',4:'Alistair Johnston',5:'Samuel Adekugbe',6:'Richie Laryea',7:'Derek Cornelius',8:'Moïse Bombito',9:'Kamal Miller',10:'Stephen Eustáquio',11:'Ismaël Koné',12:'Jonathan Osorio',14:'Jacob Shaffelburg',15:'Mathieu Choinière',16:'Niko Sigur',17:'Tajon Buchanan',18:'Liam Millar',19:'Cyle Larin',20:'Jonathan David'},
  BIH:{1:'Bósnia e Herzegovina',2:'Nikola Vasilj',3:'Amar Dedić',4:'Sead Kolašinac',5:'Tarik Muharemović',6:'Nihad Mujakić',7:'Nikola Katić',8:'Amir Hadžiahmetović',9:'Benjamin Tahirović',10:'Armin Gigović',11:'Ivan Šunjić',12:'Ivan Bašić',14:'Dženis Burnić',15:'Esmir Bajraktarević',16:'Amar Memić',17:'Ermedin Demirović',18:'Edin Džeko',19:'Samed Baždar',20:'Haris Tabaković'},
  QAT:{1:'Catar',2:'Meshaal Barsham',3:'Sultan Albrake',4:'Lucas Mendes',5:'Homam Ahmed',6:'Boualem Khoukhi',7:'Pedro Miguel',8:'Tarek Salman',9:'Mohamed Al-Mannai',10:'Karim Boudiaf',11:'Assim Madibo',12:'Ahmed Fatehi',14:'Mohammed Waad',15:'Abdulaziz Hatem',16:'Hassan Al-Haydos',17:'Edmilson Junior',18:'Akram Hassan Afif',19:'Ahmed Al Ganehi',20:'Almoez Ali'},
  CHE:{1:'Suíça',2:'Gregor Kobel',3:'Yvon Mvogo',4:'Manuel Akanji',5:'Ricardo Rodriguez',6:'Nico Elvedi',7:'Aurèle Amenda',8:'Silvan Widmer',9:'Granit Xhaka',10:'Denis Zakaria',11:'Remo Freuler',12:'Fabian Rieder',14:'Ardon Jashari',15:'Johan Manzambi',16:'Michel Aebischer',17:'Breel Embolo',18:'Ruben Vargas',19:'Dan Ndoye',20:'Zeki Amdouni'},
  BRA:{1:'Brasil',2:'Alisson',3:'Bento',4:'Marquinhos',5:'Éder Militão',6:'Gabriel Magalhães',7:'Danilo',8:'Wesley',9:'Lucas Paquetá',10:'Casemiro',11:'Bruno Guimarães',12:'Luiz Henrique',14:'Vinícius Júnior',15:'Rodrygo',16:'João Pedro',17:'Matheus Cunha',18:'Gabriel Martinelli',19:'Raphinha',20:'Estêvão'},
  MAR:{1:'Marrocos',2:'Yassine Bounou',3:'Munir El Kajoui',4:'Achraf Hakimi',5:'Noussair Mazraoui',6:'Nayef Aguerd',7:'Romain Saïss',8:'Jawad El Yamiq',9:'Adam Masina',10:'Sofyan Amrabat',11:'Azzedine Ounahi',12:'Eliesse Ben Seghir',14:'Bilal El Khannouss',15:'Ismael Saibari',16:'Youssef En-Nesyri',17:'Abde Ezzalzouli',18:'Soufiane Rahimi',19:'Brahim Díaz',20:'Ayoub El Kaabi'},
  HTI:{1:'Haiti',2:'Johny Placide',3:'Carlens Arcus',4:'Martin Expérience',5:'Jean-Kevin Duverne',6:'Ricardo Adé',7:'Duke Lacroix',8:'Garven Metusala',9:'Hannes Delcroix',10:'Leverton Pierre',11:'Danley Jean Jacques',12:'Jean-Ricner Bellegarde',14:'Christopher Attys',15:'Derrick Etienne Jr.',16:'Josué Casimir',17:'Ruben Providence',18:'Duckens Nazon',19:'Louicius Deedson',20:'Frantzdy Pierrot'},
  GBR:{1:'Escócia',2:'Angus Gunn',3:'Jack Hendry',4:'Kieran Tierney',5:'Aaron Hickey',6:'Andrew Robertson',7:'Scott McKenna',8:'John Souttar',9:'Anthony Ralston',10:'Grant Hanley',11:'Scott McTominay',12:'Billy Gilmour',14:'Lewis Ferguson',15:'Ryan Christie',16:'Kenny McLean',17:'John McGinn',18:'Lyndon Dykes',19:'Che Adams',20:'Ben Doak'},
  USA:{1:'Estados Unidos',2:'Matt Freese',3:'Chris Richards',4:'Tim Ream',5:'Mark McKenzie',6:'Alex Freeman',7:'Antonee Robinson',8:'Tyler Adams',9:'Tanner Tessmann',10:'Weston McKennie',11:'Christian Roldan',12:'Timothy Weah',14:'Diego Luna',15:'Malik Tillman',16:'Christian Pulisic',17:'Brenden Aaronson',18:'Ricardo Pepi',19:'Haji Wright',20:'Folarin Balogun'},
  PRY:{1:'Paraguai',2:'Roberto Fernández',3:'Orlando Gill',4:'Gustavo Gómez',5:'Fabián Balbuena',6:'Juan José Cáceres',7:'Omar Alderete',8:'Junior Alonso',9:'Mathías Villasanti',10:'Diego Gómez',11:'Damián Bobadilla',12:'Andrés Cubas',14:'Matías Galarza Fonda',15:'Julio Enciso'},
  AUS:{1:'Austrália',2:'Mathew Ryan',3:'Joe Gauci',4:'Harry Souttar',5:'Alessandro Circati',6:'Jordan Bos',7:'Aziz Behich',8:'Cameron Burgess',9:'Lewis Miller',10:'Milos Degenek',11:'Jackson Irvine',12:'Riley McGree',14:"Aiden O'Neill",15:'Connor Metcalfe',16:'Patrick Yazbek',17:'Craig Goodwin',18:'Kusini Yengi',19:'Nestory Irankunda',20:'Mohamed Touré'},
  TUR:{1:'Turquia',2:'Ugurcan Cakir',3:'Mert Muldur',4:'Zeki Celik',5:'Abdulkerim Bardakci',6:'Caglar Soyuncu',7:'Merih Demiral',8:'Ferdi Kadioglu',9:'Kaan Ayhan',10:'Ismail Yuksek',11:'Hakan Calhanoglu',12:'Orkun Kokcu',14:'Arda Güler',15:'Irfan Can Kahveci',16:'Yunus Akgun',17:'Can Uzun',18:'Baris Alper Yilmaz',19:'Kerem Akturkoglu',20:'Kenan Yildiz'},
  DEU:{1:'Alemanha',2:'Marc-André ter Stegen',3:'Jonathan Tah',4:'David Raum',5:'Nico Schlotterbeck',6:'Antonio Rüdiger',7:'Waldemar Anton',8:'Ridle Baku',9:'Maximilian Mittelstädt',10:'Joshua Kimmich',11:'Florian Wirtz',12:'Felix Nmecha',14:'Leon Goretzka',15:'Jamal Musiala',16:'Serge Gnabry',17:'Kai Havertz',18:'Leroy Sané',19:'Karim Adeyemi',20:'Nick Woltemade'},
  CUW:{1:'Curaçau',2:'Eloy Room',3:'Armando Obispo',4:'Sherel Floranus',5:'Jurien Gaari',6:'Joshua Brenet',7:'Roshon Van Eijma',8:'Shurandy Sambo',9:'Livano Comenencia',10:'Godfried Roemeratoe',11:'Juninho Bacuna',12:'Leandro Bacuna',14:'Tahith Chong',15:'Kenji Gorré',16:'Jearl Margaritha',17:'Jurgen Locadia',18:'Jeremy Antonisse',19:'Gervane Kastaneer',20:'Sontje Hansen'},
  CIV:{1:'Costa do Marfim',2:'Yahia Fofana',3:'Ghislain Konan',4:'Wilfried Singo',5:'Odilon Kossounou',6:'Evan Ndicka',7:'Willy Boly',8:'Emmanuel Agbadou',9:'Ousmane Diomande',10:'Franck Kessié',11:'Seko Fofana',12:'Ibrahim Sangaré',14:'Jean-Philippe Gbamin',15:'Amad Diallo',16:'Sébastien Haller',17:'Simon Adingra',18:'Yan Diomande',19:'Evann Guessand',20:'Oumar Diakité'},
  ECU:{1:'Equador',2:'Hernán Galíndez',3:'Gonzalo Valle',4:'Piero Hincapié',5:'Pervis Estupiñán',6:'Willian Pacho',7:'Ángelo Preciado',8:'Joel Ordóñez',9:'Moisés Caicedo',10:'Alan Franco',11:'Kendry Páez',12:'Pedro Vite',14:'John Yeboah',15:'Leonardo Campana',16:'Gonzalo Plata',17:'Nilson Angulo',18:'Alan Minda',19:'Kevin Rodríguez',20:'Enner Valencia'},
  NLD:{1:'Holanda',2:'Bart Verbruggen',3:'Virgil van Dijk',4:'Micky van de Ven',5:'Jurriën Timber',6:'Denzel Dumfries',7:'Nathan Aké',8:'Jeremie Frimpong',9:'Jan Paul van Hecke',10:'Tijjani Reijnders',11:'Ryan Gravenberch',12:'Teun Koopmeiners',14:'Frenkie de Jong',15:'Xavi Simons',16:'Justin Kluivert',17:'Memphis Depay',18:'Donyell Malen',19:'Wout Weghorst',20:'Cody Gakpo'},
  JPN:{1:'Japão',2:'Zion Suzuki',3:'Henry Heroki Mochizuki',4:'Ayumu Seko',5:'Junnosuke Suzuki',6:'Shogo Taniguchi',7:'Tsuyoshi Watanabe',8:'Kaishu Sano',9:'Yuki Soma',10:'Ao Tanaka',11:'Daichi Kamada',12:'Takefusa Kubo',14:'Ritsu Doan',15:'Keito Nakamura',16:'Takumi Minamino',17:'Shuto Machino',18:'Junya Ito',19:'Koki Ogawa',20:'Ayase Ueda'},
  SWE:{1:'Suécia',2:'Victor Johansson',3:'Isak Hien',4:'Gabriel Gudmundsson',5:'Emil Holm',6:'Victor Nilsson Lindelöf',7:'Gustaf Lagerbielke',8:'Lucas Bergvall',9:'Hugo Larsson',10:'Jesper Karlström',11:'Yasin Ayari',12:'Mattias Svanberg',14:'Daniel Svensson',15:'Ken Sema',16:'Roony Bardghji',17:'Dejan Kulusevski',18:'Anthony Elanga',19:'Alexander Isak',20:'Viktor Gyökeres'},
  TUN:{1:'Tunísia',2:'Bechir Ben Said',3:'Aymen Dahmen',4:'Van Valery',5:'Montassar Talbi',6:'Yassine Meriah',7:'Ali Abdi',8:'Dylan Bronn',9:'Ellyes Skhiri',10:'Aissa Laidouni',11:'Ferjani Sassi',12:'Mohamed Ali Ben Romdhane',14:'Hannibal Mejbri',15:'Elias Achouri',16:'Elias Saad',17:'Hazem Mastouri',18:'Ismael Gharbi',19:'Sayfallah Ltaief',20:'Naim Sliti'},
  BEL:{1:'Bélgica',2:'Thibaut Courtois',3:'Arthur Theate',4:'Timothy Castagne',5:'Zeno Debast',6:'Brandon Mechele',7:'Maxim De Cuyper',8:'Thomas Meunier',9:'Youri Tielemans',10:'Amadou Onana',11:'Nicolas Raskin',12:'Alexis Saelemaekers',14:'Hans Vanaken',15:'Kevin De Bruyne',16:'Jérémy Doku',17:'Charles De Ketelaere',18:'Leandro Trossard',19:'Loïs Openda',20:'Romelu Lukaku'},
  EGY:{1:'Egito',2:'Mohamed El Shenawy',3:'Mohamed Hany',4:'Mohamed Hamdy',5:'Yasser Ibrahim',6:'Khaled Sobhi',7:'Ramy Rabia',8:'Hossam Abdelmaguid',9:'Ahmed Fatouh',10:'Marwan Attia',11:'Zizo',12:'Hamdy Fathy',14:'Mohamed Lasheen',15:'Emam Ashour',16:'Osama Faisal',17:'Mohamed Salah',18:'Mostafa Mohamed',19:'Trezeguet',20:'Omar Marmoush'},
  IRN:{1:'Irã',2:'Alireza Beiranvand',3:'Morteza Pouraliganji',4:'Ehsan Hajsafi',5:'Milad Mohammadi',6:'Shoja Khalilzadeh',7:'Ramin Rezaeian',8:'Hossein Kanaani',9:'Sadegh Moharrami',10:'Saleh Hardani',11:'Saeed Ezatolahi',12:'Saman Ghoddos',14:'Omid Noorafkan',15:'Roozbeh Cheshmi',16:'Mohammad Mohebi',17:'Sardar Azmoun',18:'Mehdi Taremi',19:'Alireza Jahanbakhsh',20:'Ali Gholizadeh'},
  NZL:{1:'Nova Zelândia',2:'Max Crocombe-Payne',3:'Alex Paulsen',4:'Michael Boxall',5:'Liberato Cacace',6:'Tim Payne',7:'Tyler Bindon',8:'Francis de Vries',9:'Finn Surman',10:'Joe Bell',11:'Sarpreet Singh',12:'Ryan Thomas',14:'Matthew Garbett',15:'Marko Stamenić',16:'Ben Old',17:'Chris Wood',18:'Elijah Just',19:'Callum McCowatt',20:'Kosta Barbarouses'},
  ESP:{1:'Espanha',2:'Unai Simón',3:'Robin Le Normand',4:'Aymeric Laporte',5:'Dean Huijsen',6:'Pedro Porro',7:'Dani Carvajal',8:'Marc Cucurella',9:'Martín Zubimendi',10:'Rodri',11:'Pedri',12:'Fabián Ruiz',14:'Mikel Merino',15:'Lamine Yamal',16:'Dani Olmo',17:'Nico Williams',18:'Ferran Torres',19:'Álvaro Morata',20:'Mikel Oyarzabal'},
  CPV:{1:'Cabo Verde',2:'Vozinha',3:'Logan Costa',4:'Pico',5:'Diney',6:'Steven Moreira',7:'Wagner Pina',8:'João Paulo',9:'Yannick Semedo',10:'Kevin Pina',11:'Patrick Andrade',12:'Jamiro Monteiro',14:'Deroy Duarte',15:'Garry Rodrigues',16:'Jovane Cabral',17:'Ryan Mendes',18:'Dailon Livramento',19:'Willy Semedo',20:'Bebé'},
  SAU:{1:'Arábia Saudita',2:'Nawaf Alaqidi',3:'Abdulrahman Al-Sanbi',4:'Saud Abdulhamid',5:'Nawaf Boushal',6:'Jihad Thakri',7:'Moteb Al-Harbi',8:'Hassan Altambakti',9:'Musab Aljuwayr',10:'Ziyad Aljohani',11:'Abdullah Alkhaibari',12:'Nasser Aldawsari',14:'Saleh Abu Alshamat',15:'Marwan Alsahafi',16:'Salem Aldawsari',17:'Abdulrahman Al-Aboud',18:'Feras Albrikan',19:'Saleh Alshehri',20:'Abdullah Al-Hamdan'},
  URY:{1:'Uruguai',2:'Sergio Rochet',3:'Santiago Mele',4:'Ronald Araujo',5:'José María Giménez',6:'Sebastian Caceres',7:'Mathias Olivera',8:'Guillermo Varela',9:'Nahitan Nandez',10:'Federico Valverde',11:'Giorgian De Arrascaeta',12:'Rodrigo Bentancur',14:'Manuel Ugarte',15:'Nicolás de la Cruz',16:'Maxi Araujo',17:'Darwin Núñez',18:'Federico Viñas',19:'Rodrigo Aguirre',20:'Facundo Pellistri'},
  FRA:{1:'França',2:'Mike Maignan',3:'Theo Hernández',4:'William Saliba',5:'Jules Koundé',6:'Ibrahima Konaté',7:'Dayot Upamecano',8:'Lucas Digne',9:'Aurélien Tchouaméni',10:'Eduardo Camavinga',11:'Manu Koné',12:'Adrien Rabiot',14:'Michael Olise',15:'Ousmane Dembélé',16:'Bradley Barcola',17:'Désiré Doué',18:'Kingsley Coman',19:'Hugo Ekitike',20:'Kylian Mbappé'},
  SEN:{1:'Senegal',2:'Eduardo Mendy',3:'Yehvann Diouf',4:'Moussa Niakhaté',5:'Abdoulaye Seck',6:'Ismail Jakobs',7:'El Hadji Malick Diouf',8:'Kalidou Koulibaly',9:'Idrissa Gana Gueye',10:'Pape Matar Sarr',11:'Pape Gueye',12:'Habib Diarra',14:'Lamine Camara',15:'Sadio Mané',16:'Ismaïla Sarr',17:'Boulaye Dia',18:'Iliman Ndiaye',19:'Nicolas Jackson',20:'Krepin Diatta'},
  IRQ:{1:'Iraque',2:'Jalal Hassan',3:'Rebin Sulaka',4:'Hussein Ali',5:'Akam Hashem',6:'Merchas Doski',7:'Zaid Tahseen',8:'Manaf Younis',9:'Zidane Iqbal',10:'Amir Al-Ammari',11:'Ibrahim Bayesh',12:'Ali Jasim',14:'Youssef Amyn',15:'Aimar Sher',16:'Marko Farji',17:'Osama Rashid',18:'Ali Al-Hamadi',19:'Aymen Hussein',20:'Mohanad Ali'},
  NOR:{1:'Noruega',2:'Ørjan Nyland',3:'Julian Ryerson',4:'Leo Østigård',5:'Kristoffer Ajer',6:'Marcus Holmgren Pedersen',7:'David Møller Wolfe',8:'Torbjørn Heggem',9:'Morten Thorsby',10:'Martin Ødegaard',11:'Sander Berge',12:'Andreas Schjelderup',14:'Patrick Berg',15:'Erling Haaland',16:'Alexander Sørloth',17:'Aron Dønnum',18:'Jørgen Strand Larsen',19:'Antonio Nusa',20:'Oscar Bobb'},
  ARG:{1:'Argentina',2:'Emiliano Martínez',3:'Nahuel Molina',4:'Cristian Romero',5:'Nicolás Otamendi',6:'Nicolás Tagliafico',7:'Leonardo Balerdi',8:'Enzo Fernández',9:'Alexis Mac Allister',10:'Rodrigo De Paul',11:'Exequiel Palacios',12:'Leandro Paredes',14:'Nico Paz',15:'Franco Mastantuono',16:'Nico González',17:'Lionel Messi',18:'Lautaro Martínez',19:'Julián Álvarez',20:'Giuliano Simeone'},
  DZA:{1:'Argélia',2:'Alexis Guendouz',3:'Ramy Bensebaini',4:'Youcef Atal',5:'Rayan Aït-Nouri',6:'Mohamed Amine Tougai',7:'Aïssa Mandi',8:'Ismael Bennacer',9:'Houssem Aouar',10:'Hicham Boudaoui',11:'Ramiz Zerrouki',12:'Nabil Bentaleb',14:'Farés Chaibi',15:'Riyad Mahrez',16:'Said Benrahma',17:'Anis Hadj Moussa',18:'Amine Gouiri',19:'Baghdad Bounedjah',20:'Mohammed Amoura'},
  AUT:{1:'Áustria',2:'Alexander Schlager',3:'Patrick Pentz',4:'David Alaba',5:'Kevin Danso',6:'Philipp Lienhart',7:'Stefan Posch',8:'Phillipp Mwene',9:'Alexander Prass',10:'Xaver Schlager',11:'Marcel Sabitzer',12:'Konrad Laimer',14:'Florian Grillitsch',15:'Nicolas Seiwald',16:'Romano Schmid',17:'Patrick Wimmer',18:'Christoph Baumgartner',19:'Michael Gregoritsch',20:'Marko Arnautović'},
  JOR:{1:'Jordânia',2:'Yazeed Abulaila',3:'Ihsan Haddad',4:'Mohammad Abu Hashish',5:'Yazan Al-Arab',6:'Abdallah Nasib',7:'Saleem Obaid',8:'Mohammad Abualnadi',9:'Ibrahim Saadeh',10:'Nizar Al-Rashdan',11:'Noor Al-Rawabdeh',12:'Mohannad Abu Taha',14:'Amer Jamous',15:'Musa Al-Taamari',16:'Yazan Al-Naimat',17:'Mahmoud Al-Mardi',18:'Ali Olwan',19:'Mohammad Abu Zrayq',20:'Ibrahim Sabra'},
  PRT:{1:'Portugal',2:'Diogo Costa',3:'José Sá',4:'Rúben Dias',5:'João Cancelo',6:'Diogo Dalot',7:'Nuno Mendes',8:'Gonçalo Inácio',9:'Bernardo Silva',10:'Bruno Fernandes',11:'Rúben Neves',12:'Vitinha',14:'João Neves',15:'Cristiano Ronaldo',16:'Francisco Trincão',17:'João Félix',18:'Gonçalo Ramos',19:'Pedro Neto',20:'Rafael Leão'},
  COD:{1:'RD Congo',2:'Lionel Mpasi',3:'Aaron Wan-Bissaka',4:'Axel Tuanzebe',5:'Arthur Masuaku',6:'Chancel Mbemba',7:'Joris Kayembe',8:'Charles Pickel',9:"Ngal'ayel Mukau",10:'Edo Kayembe',11:'Samuel Moutoussamy',12:'Noah Sadiki',14:'Théo Bongonda',15:'Meschack Elia',16:'Yoane Wissa',17:'Brian Cipenga',18:'Fiston Mayele',19:'Cédric Bakambu',20:'Nathanaël Mbuku'},
  UZB:{1:'Uzbequistão',2:'Utkir Yusupov',3:'Farrukh Savfiev',4:'Sherzod Nasrullaev',5:'Umar Eshmurodov',6:'Husniddin Aliqulov',7:'Rustamjon Ashurmatov',8:'Khojiakbar Alijonov',9:'Abdukodir Khusanov',10:'Odiljon Hamrobekov',11:'Otabek Shukurov',12:'Jamshid Iskanderov',14:'Azizbek Turgunboev',15:'Khojimat Erkinov',16:'Eldor Shomurodov',17:'Oston Urunov',18:'Jaloliddin Masharipov',19:'Igor Sergeev',20:'Abbosbek Fayzullaev'},
  COL:{1:'Colômbia',2:'Camilo Vargas',3:'David Ospina',4:'Dávinson Sánchez',5:'Yerry Mina',6:'Daniel Muñoz',7:'Johan Mojica',8:'Jhon Lucumí',9:'Santiago Arias',10:'Jefferson Lerma',11:'Kevin Castaño',12:'Richard Ríos',14:'James Rodríguez',15:'Juan Fernando Quintero',16:'Jorge Carrascal',17:'Jhon Arias',18:'Jhon Córdoba',19:'Luis Suárez',20:'Luis Díaz'},
  'GB-ENG':{1:'Inglaterra',2:'Jordan Pickford',3:'John Stones',4:'Marc Guéhi',5:'Ezri Konsa',6:'Trent Alexander-Arnold',7:'Reece James',8:'Dan Burn',9:'Jordan Henderson',10:'Declan Rice',11:'Jude Bellingham',12:'Cole Palmer',14:'Morgan Rogers',15:'Anthony Gordon',16:'Phil Foden',17:'Bukayo Saka',18:'Harry Kane',19:'Marcus Rashford',20:'Ollie Watkins'},
  HRV:{1:'Croácia',2:'Dominik Livaković',3:'Duje Ćaleta-Car',4:'Joško Gvardiol',5:'Josip Stanišić',6:'Luka Vušković',7:'Josip Šutalo',8:'Kristijan Jakić',9:'Luka Modrić',10:'Mateo Kovačić',11:'Martin Baturina',12:'Lovro Majer',14:'Mario Pašalić',15:'Petar Sučić',16:'Ivan Perišić',17:'Marco Pašalić',18:'Ante Budimir',19:'Andrej Kramarić',20:'Franjo Ivanović'},
  GHA:{1:'Gana',2:'Lawrence Ati Zigi',3:'Tariq Lamptey',4:'Mohammed Salisu',5:'Alidu Seidu',6:'Alexander Djiku',7:'Gideon Mensah',8:'Caleb Yirenkyi',9:'Abdul Fatawu Issahaku',10:'Thomas Partey',11:'Salis Abdul Samed',12:'Kamaldeen Sulemana',14:'Mohammed Kudus',15:'Iñaki Williams',16:'Jordan Ayew',17:'André Ayew',18:'Joseph Paintsil',19:'Osman Bukari',20:'Antoine Semenyo'},
  PAN:{1:'Panamá',2:'Orlando Mosquera',3:'Luis Mejía',4:'Fidel Escobar',5:'Andrés Andrade',6:'Michael Amir Murillo',7:'Eric Davis',8:'José Córdoba',9:'César Blackman',10:'Cristian Martínez',11:'Aníbal Godoy',12:'Adalberto Carrasquilla',14:'Édgar Bárcenas',15:'Carlos Harvey',16:'Ismael Díaz',17:'José Fajardo',18:'Cecilio Waterman',19:'José Luis Rodríguez',20:'Alberto Quintero'},
};

const legendPlayers = [
  { name: 'Achraf Hakimi',       code: 'MAR'    },
  { name: 'Alphonso Davies',     code: 'CAN'    },
  { name: 'Christian Pulisic',   code: 'USA'    },
  { name: 'Cody Gakpo',          code: 'NLD'    },
  { name: 'Cristiano Ronaldo',   code: 'PRT'    },
  { name: 'Erling Haaland',      code: 'NOR'    },
  { name: 'Federico Valverde',   code: 'URY'    },
  { name: 'Florian Wirtz',       code: 'DEU'    },
  { name: 'Jérémy Doku',         code: 'BEL'    },
  { name: 'Jude Bellingham',     code: 'GB-ENG' },
  { name: 'Kevin De Bruyne',     code: 'BEL'    },
  { name: 'Lamine Yamal',        code: 'ESP'    },
  { name: 'Lautaro Martínez',    code: 'ARG'    },
  { name: 'Lionel Messi',        code: 'ARG'    },
  { name: 'Luis Díaz',           code: 'COL'    },
  { name: 'Kylian Mbappé',       code: 'FRA'    },
  { name: 'Mohamed Salah',       code: 'EGY'    },
  { name: 'Santiago Giménez',    code: 'MEX'    },
  { name: 'Son Heung-min',       code: 'KOR'    },
  { name: 'Vinícius Júnior',     code: 'BRA'    },
];

const legendRarities = [
  { id: 'lilas',  label: 'Lilás',  color: '#9B59B6', textColor: 'white' },
  { id: 'bronze', label: 'Bronze', color: '#CD7F32', textColor: 'white' },
  { id: 'prata',  label: 'Prata',  color: '#95A5A6', textColor: 'white' },
  { id: 'ouro',   label: 'Ouro',   color: '#F1C40F', textColor: '#333'  },
];

// Map 'CODE-NUM' → legendPlayer for fast lookup in renderPaises
const legendStickerMap = (() => {
  const m = new Map();
  legendPlayers.forEach(lp => {
    for (const [code, players] of Object.entries(playerData)) {
      for (const [num, name] of Object.entries(players)) {
        if (name === lp.name) m.set(`${code}-${parseInt(num)}`, lp);
      }
    }
  });
  return m;
})();

const continentMap = {
  'BRA': 'América do Sul', 'ARG': 'América do Sul', 'URY': 'América do Sul', 'COL': 'América do Sul', 'ECU': 'América do Sul', 'PRY': 'América do Sul',
  'DEU': 'Europa', 'GB-ENG': 'Europa', 'FRA': 'Europa', 'ESP': 'Europa', 'PRT': 'Europa', 'NLD': 'Europa', 'BEL': 'Europa', 'HRV': 'Europa', 'SWE': 'Europa', 'GBR': 'Europa', 'AUT': 'Europa', 'CZE': 'Europa', 'TUR': 'Europa', 'NOR': 'Europa', 'BIH': 'Europa', 'CHE': 'Europa',
  'USA': 'América do Norte', 'MEX': 'América do Norte', 'CAN': 'América do Norte', 'PAN': 'América do Norte', 'HTI': 'América do Norte', 'CUW': 'América do Norte',
  'MAR': 'África', 'SEN': 'África', 'CIV': 'África', 'EGY': 'África', 'GHA': 'África', 'DZA': 'África', 'TUN': 'África', 'ZAF': 'África', 'COD': 'África', 'CPV': 'África',
  'JPN': 'Ásia', 'KOR': 'Ásia', 'AUS': 'Ásia', 'SAU': 'Ásia', 'IRN': 'Ásia', 'QAT': 'Ásia', 'IRQ': 'Ásia', 'UZB': 'Ásia', 'JOR': 'Ásia', 'NZL': 'Oceania'
};

// ============================================================================
// APPLICATION STATE
// ============================================================================

const legacyCountryCodeMap = {
  MX: 'MEX', ZA: 'ZAF', KR: 'KOR', CZ: 'CZE', CA: 'CAN', BA: 'BIH', QA: 'QAT', CH: 'CHE',
  BR: 'BRA', MA: 'MAR', HT: 'HTI', GB: 'GBR', 'GB-ENG': 'GB-ENG', US: 'USA', PY: 'PRY', AU: 'AUS', TR: 'TUR',
  DE: 'DEU', CW: 'CUW', CI: 'CIV', EC: 'ECU', NL: 'NLD', JP: 'JPN', SE: 'SWE', TN: 'TUN',
  BE: 'BEL', EG: 'EGY', IR: 'IRN', NZ: 'NZL', ES: 'ESP', CV: 'CPV', SA: 'SAU', UY: 'URY',
  FR: 'FRA', SN: 'SEN', IQ: 'IRQ', NO: 'NOR', AR: 'ARG', DZ: 'DZA', AT: 'AUT', JO: 'JOR',
  PT: 'PRT', CD: 'COD', UZ: 'UZB', CO: 'COL', HR: 'HRV', GH: 'GHA', PA: 'PAN'
};

let stickers = JSON.parse(localStorage.getItem('copaStickers') || '{}');
let duplicates = JSON.parse(localStorage.getItem('copaDuplicates') || '{}');
let searchFilter = { group: null, country: null, number: null, playerMatches: null };
let currentReportData = '';
let currentReportTitle = '';
let communityProfile = (() => { try { return JSON.parse(localStorage.getItem('copaProfile') || '{}'); } catch { return {}; } })();
let pendingTrades = (() => { try { return JSON.parse(localStorage.getItem('copaPending') || '{}'); } catch { return {}; } })();
let tradeHistory = (() => { try { return JSON.parse(localStorage.getItem('copaHistory') || '[]'); } catch { return []; } })();
let proposalSelection = new Set();
let proposalSelectionActive = false;
let currentDashboardView = 'continents';
let pendingUnmark = null;
let tradeCredits = parseInt(localStorage.getItem('copaCredits') || '0');
let wishlist = new Set((() => { try { return JSON.parse(localStorage.getItem('copaWishlist') || '[]'); } catch { return []; } })());
let offerFilter = (() => {
  try { const f = JSON.parse(localStorage.getItem('copaOfferFilter') || '{}'); return { paises: f.paises !== false, refri: f.refri !== false, history: f.history !== false, legends: f.legends !== false }; }
  catch { return { paises: true, refri: true, history: true, legends: true }; }
})();

migrateLegacyData();

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Salva dados no localStorage
 */
function saveData() {
  localStorage.setItem('copaStickers', JSON.stringify(stickers));
  localStorage.setItem('copaDuplicates', JSON.stringify(duplicates));
  updateStats();
}

function migrateLegacyData() {
  const migrateKeys = (source) => {
    let changed = false;
    const result = {};
    Object.entries(source).forEach(([key, value]) => {
      if (Object.prototype.hasOwnProperty.call(legacyCountryCodeMap, key)) {
        result[legacyCountryCodeMap[key]] = value;
        changed = true;
        return;
      }

      const [code, ...rest] = key.split('-');
      const mappedCode = legacyCountryCodeMap[code] || code;
      const newKey = [mappedCode, ...rest].join('-');
      result[newKey] = value;
      if (newKey !== key) changed = true;
    });
    return { result, changed };
  };

  const s = migrateKeys(stickers);
  const d = migrateKeys(duplicates);

  stickers = s.result;
  duplicates = d.result;

  if (s.changed || d.changed) {
    localStorage.setItem('copaStickers', JSON.stringify(stickers));
    localStorage.setItem('copaDuplicates', JSON.stringify(duplicates));
  }
}

/**
 * Escapa caracteres HTML para prevenir XSS
 */
// ---- Rarity & Credits ----

function getStickerRarity(key) {
  if (key.startsWith('legend-'))  return { value: 3, stars: '★★★', label: 'Lendária', color: '#9B59B6' };
  if (key.startsWith('refri-'))   return { value: 2, stars: '★★',  label: 'Especial',  color: '#E74C3C' };
  if (key.startsWith('history-')) return { value: 2, stars: '★★',  label: 'Especial',  color: '#3498DB' };
  const parts = key.split('-');
  const code = parts.slice(0, -1).join('-');
  let col = 0;
  for (let i = 1; i <= 20; i++) { if (stickers[`${code}-${i}`]) col++; }
  const pct = col / 20;
  if (pct < 0.25) return { value: 3, stars: '★★★', label: 'Rara',     color: '#E74C3C' };
  if (pct < 0.50) return { value: 2, stars: '★★',  label: 'Incomum',  color: '#E67E22' };
  return                { value: 1, stars: '★',   label: 'Comum',    color: '#27AE60' };
}

function creditValueForKey(key) { return getStickerRarity(key).value; }

// ---- Offer Filters ----

function getFilteredOffersList() {
  return getMyOffersList().filter(({ key }) => {
    if (pendingTrades[key]) return false;
    if (key.startsWith('refri-')   && !offerFilter.refri)   return false;
    if (key.startsWith('history-') && !offerFilter.history) return false;
    if (key.startsWith('legend-')  && !offerFilter.legends) return false;
    if (!key.startsWith('refri-') && !key.startsWith('history-') && !key.startsWith('legend-') && !offerFilter.paises) return false;
    return true;
  });
}

function getFilteredNeedsList() {
  return getMyNeedsList().filter(key => {
    if (key.startsWith('refri-')   && !offerFilter.refri)   return false;
    if (key.startsWith('history-') && !offerFilter.history) return false;
    if (key.startsWith('legend-')  && !offerFilter.legends) return false;
    if (!key.startsWith('refri-') && !key.startsWith('history-') && !key.startsWith('legend-') && !offerFilter.paises) return false;
    return true;
  });
}

function toggleOfferFilter(category) {
  offerFilter[category] = !offerFilter[category];
  localStorage.setItem('copaOfferFilter', JSON.stringify(offerFilter));
  renderOfferFilterChips();
  const previewEl = document.getElementById('community-offer-preview');
  if (previewEl) previewEl.textContent = formatOfferText();
}

function renderOfferFilterChips() {
  const el = document.getElementById('offer-filter-chips');
  if (!el) return;
  const cats = [
    { key: 'paises',  label: '🌍 Países'    },
    { key: 'refri',   label: '🥤 Refri'     },
    { key: 'history', label: '🏆 World Cup' },
    { key: 'legends', label: '⭐ Legends'   },
  ];
  el.innerHTML = cats.map(({ key, label }) => {
    const on = offerFilter[key] !== false;
    return `<button onclick="toggleOfferFilter('${key}')" style="padding:6px 12px;border-radius:20px;border:1.5px solid ${on ? '#667eea' : 'var(--color-border-tertiary)'};background:${on ? 'linear-gradient(135deg,#667eea,#764ba2)' : 'var(--color-background-secondary)'};color:${on ? 'white' : 'var(--color-text-secondary)'};cursor:pointer;font-size:12px;font-weight:600;transition:all 0.2s;">${label}</button>`;
  }).join('');
}

// ---- Room Code ----

function generateRoomCode() {
  const offers = getMyOffersList().filter(({ key }) => !pendingTrades[key]);
  if (offers.length === 0) { showToast('Nenhuma duplicata disponível'); return null; }
  const payload = {
    n: communityProfile.name || '',
    c: communityProfile.contact || '',
    o: offers.map(({ key, count }) => `${key}:${count}`).join(','),
    w: getMyNeedsList().slice(0, 60).join(',')
  };
  return 'COPA-' + btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
}

function copyRoomCode() {
  const code = generateRoomCode();
  if (!code) return;
  const el = document.getElementById('room-code-display');
  if (el) el.value = code;
  copyToClipboard(code, 'Código copiado! Envie para seu amigo 🤝');
}

function applyRoomCode() {
  const input = document.getElementById('room-code-input');
  if (!input) return;
  const code = input.value.trim();
  if (!code) { showToast('Cole o código do seu amigo aqui'); return; }
  const raw = code.startsWith('COPA-') ? code.slice(5) : code;
  try {
    const payload = JSON.parse(decodeURIComponent(escape(atob(raw))));
    input.value = '';
    showIncomingTradeOffer(payload);
  } catch {
    showToast('Código inválido ou corrompido');
  }
}

// ---- Wishlist ----

function saveWishlist() {
  localStorage.setItem('copaWishlist', JSON.stringify([...wishlist]));
}

function toggleWishlist(key, event) {
  if (event) event.stopPropagation();
  if (wishlist.has(key)) wishlist.delete(key);
  else wishlist.add(key);
  saveWishlist();
  // Targeted DOM update — avoids full re-render and scroll jump
  const safeKey = key.replace(/[^a-zA-Z0-9]/g, '-');
  const btn = document.getElementById('wl-' + safeKey);
  if (btn) {
    const inWl = wishlist.has(key);
    btn.textContent = inWl ? '❤️' : '🤍';
    btn.style.opacity = inWl ? '1' : '0.55';
    btn.title = inWl ? 'Remover da lista de desejos' : 'Adicionar à lista de desejos';
    const wrapper = btn.closest('[data-sticker-wrapper]');
    if (wrapper) wrapper.style.outline = inWl ? '1.5px solid #E74C3C60' : '';
  }
  renderWishlist();
}

function renderWishlist() {
  // Auto-remove collected stickers
  const toRemove = [...wishlist].filter(k => stickers[k]);
  if (toRemove.length) { toRemove.forEach(k => wishlist.delete(k)); saveWishlist(); }

  const el = document.getElementById('wishlist-container');
  if (!el) return;
  const wlArr = [...wishlist].filter(k => !stickers[k]);
  if (wlArr.length === 0) {
    el.innerHTML = '<p style="font-size:13px;color:var(--color-text-secondary);text-align:center;padding:1rem 0;line-height:1.6;">Nenhuma figurinha na lista ainda.<br>Toque em ❤️ em qualquer figurinha que ainda não tem.</p>';
    return;
  }
  el.innerHTML = wlArr.map(key => {
    const label = formatStickerLabel(key);
    let flagEl = '⭐';
    if (key.startsWith('refri-')) flagEl = '🥤';
    else if (key.startsWith('history-')) flagEl = '🏆';
    else if (!key.startsWith('legend-')) {
      const code = key.split('-').slice(0, -1).join('-');
      flagEl = flagHtml(code, { size: '1.2em' });
    }
    return `<div style="display:flex;align-items:center;gap:8px;padding:8px 10px;background:var(--color-background-secondary);border-radius:8px;border:0.5px solid #E74C3C30;">
      <span style="font-size:13px;">❤️</span><span>${flagEl}</span>
      <span style="flex:1;font-size:12px;font-weight:600;color:var(--color-text-primary);line-height:1.3;">${label}</span>
      <button onclick="toggleWishlist('${key}', event)" title="Remover" style="background:none;border:none;cursor:pointer;font-size:16px;color:var(--color-text-secondary);padding:2px;line-height:1;flex-shrink:0;">✕</button>
    </div>`;
  }).join('');
}

function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, m => map[m]);
}

function flagHtml(code, { size = '1.4em', square = false, title = '' } = {}) {
  const iso2 = iso3ToIso2[code];
  if (!iso2) return '🏳️';
  const squareClass = square ? ' fis' : '';
  const titleAttr = title ? ` title="${escapeHtml(title)}"` : '';
  return `<span class="fi fi-${iso2}${squareClass}"${titleAttr} style="font-size:${size};"></span>`;
}

/**
 * Parse da busca de país e número
 */
function parseSearch(countryQuery, numberQuery) {
  if (!countryQuery && !numberQuery) return { group: null, country: null, number: null, playerMatches: null };

  let group = null, country = null, number = null, playerMatches = null;

  if (countryQuery) {
    const lower = countryQuery.toLowerCase().trim();
    for (const [g, countryList] of Object.entries(countries)) {
      for (const [name, code] of countryList) {
        if (code.toLowerCase() === lower || name.toLowerCase().includes(lower)) {
          country = code;
          group = g;
          break;
        }
      }
      if (country) break;
    }

    if (!country) {
      playerMatches = new Set();
      for (const [pCode, players] of Object.entries(playerData)) {
        for (const [num, playerName] of Object.entries(players)) {
          if (playerName.toLowerCase().includes(lower)) {
            playerMatches.add(`${pCode}-${num}`);
          }
        }
      }
      if (playerMatches.size === 0) playerMatches = null;
    }
  }

  if (numberQuery) {
    number = parseInt(numberQuery);
  }

  return { group, country, number, playerMatches };
}

/**
 * Verifica se o país deve ser exibido baseado no filtro
 */
function shouldShowCountry(group, code) {
  if (!searchFilter.group && !searchFilter.country && !searchFilter.number && !searchFilter.playerMatches) return true;
  if (searchFilter.playerMatches) {
    return [...searchFilter.playerMatches].some(key => key.startsWith(code + '-'));
  }
  if (searchFilter.group && searchFilter.group !== group) return false;
  if (searchFilter.country && searchFilter.country !== code) return false;
  return true;
}

/**
 * Verifica se o número deve ser exibido baseado no filtro
 */
function shouldShowNumber(num, code) {
  if (searchFilter.playerMatches) {
    return searchFilter.playerMatches.has(`${code}-${num}`);
  }
  if (!searchFilter.number) return true;
  return searchFilter.number === num;
}

// ============================================================================
// STATE MANAGEMENT
// ============================================================================

/**
 * Alterna figurinha entre coletada e não coletada
 */
function toggleSticker(country, num, type = 'country') {
  let key = type === 'country' ? country + '-' + num : type + '-' + num;
  
  if (stickers[key]) {
    showConfirmation(country, num, type);
  } else {
    stickers[key] = true;
    if (wishlist.has(key)) { wishlist.delete(key); saveWishlist(); }
    saveData();
    renderPaises();
    renderRefri();
    renderHistory();
    renderLegends();
    renderTrocas();
  }
}

/**
 * Adiciona uma duplicata
 */
function addDuplicate(country, num, type = 'country') {
  const key = type === 'country' ? `${country}-${num}` : type === 'legend' ? `legend-${country}-${num}` : `${type}-${num}`;
  if (!duplicates[key]) duplicates[key] = 0;
  duplicates[key]++;
  saveData();
  if (type === 'country') renderPaises();
  else if (type === 'refri') renderRefri();
  else if (type === 'history') renderHistory();
  else if (type === 'legend') renderLegends();
  renderTrocas();
}

/**
 * Remove uma duplicata
 */
function removeDuplicate(country, num, type = 'country') {
  const key = type === 'country' ? `${country}-${num}` : type === 'legend' ? `legend-${country}-${num}` : `${type}-${num}`;
  if (duplicates[key] && duplicates[key] > 0) {
    duplicates[key]--;
    if (duplicates[key] === 0) delete duplicates[key];
  }
  saveData();
  if (type === 'country') renderPaises();
  else if (type === 'refri') renderRefri();
  else if (type === 'history') renderHistory();
  else if (type === 'legend') renderLegends();
  renderTrocas();
}

/**
 * Mostra modal de confirmação para desmarcar figurinha
 */
function showConfirmation(country, num, type = 'country') {
  const key = type === 'country' ? `${country}-${num}` : type === 'legend' ? `legend-${country}-${num}` : `${type}-${num}`;
  const dupCount = duplicates[key] || 0;
  
  if (dupCount > 0) {
    pendingUnmark = { country, num, type, key };
    
    let countryName = '';
    let itemLabel = '';
    
    if (type === 'country') {
      for (const [g, countryList] of Object.entries(countries)) {
        for (const [name, code] of countryList) {
          if (code === country) {
            countryName = name;
            break;
          }
        }
      }
      itemLabel = `${countryName} #${num}`;
    } else if (type === 'refri') {
      const player = refriPlayers[num];
      itemLabel = player ? `${player.name} (CC ${String(num).padStart(2, '0')})` : `CC ${String(num).padStart(2, '0')}`;
    } else if (type === 'history') {
      itemLabel = `World Cup #${num}`;
    } else if (type === 'legend') {
      const player = legendPlayers[country];
      const rarity = legendRarities.find(r => r.id === num);
      itemLabel = `${player ? player.name : `Legend #${country}`} – ${rarity ? rarity.label : num}`;
    }

    const message = `Você tem <strong>${dupCount}</strong> cópia${dupCount > 1 ? 's' : ''} dessa figurinha registrada${dupCount > 1 ? 's' : ''} para troca.<br><br>Se desmarcar, <strong>${itemLabel}</strong> e suas duplicatas serão removidas.`;
    
    document.getElementById('modal-message').innerHTML = message;
    document.getElementById('confirmation-modal').classList.add('active');
  } else {
    performUnmark(country, num, type);
  }
}

/**
 * Confirma o desmarcamento da figurinha
 */
function confirmUnmark() {
  if (pendingUnmark) {
    performUnmark(pendingUnmark.country, pendingUnmark.num, pendingUnmark.type);
    document.getElementById('confirmation-modal').classList.remove('active');
    pendingUnmark = null;
  }
}

/**
 * Cancela o desmarcamento
 */
function cancelUnmark() {
  document.getElementById('confirmation-modal').classList.remove('active');
  pendingUnmark = null;
  renderPaises();
  renderRefri();
  renderHistory();
  renderLegends();
}

/**
 * Executa o desmarcamento da figurinha
 */
function performUnmark(country, num, type = 'country') {
  const key = type === 'country' ? `${country}-${num}` : type === 'legend' ? `legend-${country}-${num}` : `${type}-${num}`;
  stickers[key] = false;
  delete duplicates[key];

  saveData();
  renderPaises();
  renderRefri();
  renderHistory();
  renderLegends();
  renderTrocas();
}

// ============================================================================
// DASHBOARD AND VIEW RENDERING
// ============================================================================

/**
 * Alterna visualização do dashboard (grupos vs continentes)
 */
function switchDashboardView(view) {
  currentDashboardView = view;
  
  document.getElementById('btn-groups').style.background = view === 'groups' ? '#667eea' : 'var(--color-background-secondary)';
  document.getElementById('btn-groups').style.color = view === 'groups' ? 'white' : 'var(--color-text-primary)';
  
  document.getElementById('btn-continents').style.background = view === 'continents' ? '#667eea' : 'var(--color-background-secondary)';
  document.getElementById('btn-continents').style.color = view === 'continents' ? 'white' : 'var(--color-text-primary)';
  
  document.getElementById('view-title').textContent = view === 'groups' ? 'Por Grupo (A-L)' : 'Por Continente';
  
  updateDashboardView();
}

/**
 * Atualiza visualização do dashboard
 */
function updateDashboardView() {
  if (currentDashboardView === 'groups') {
    renderGroupsView();
  } else {
    renderContinentsView();
  }
}

/**
 * Renderiza visualização por grupos
 */
function renderGroupsView() {
  const groupStats = {};
  
  Object.entries(countries).forEach(([group, countryList]) => {
    groupStats[group] = { collected: 0, total: 0 };
    
    countryList.forEach(([name, code]) => {
      let collected = 0;
      for (let i = 1; i <= 20; i++) {
        if (stickers[code + '-' + i]) collected++;
      }
      
      groupStats[group].collected += collected;
      groupStats[group].total += 20;
    });
  });
  
  let html = '';
  Object.entries(groupStats).forEach(([group, stats]) => {
    const pct = Math.round((stats.collected / stats.total) * 100);
    const colors = ['#FFD700', '#FF8C00', '#27AE60', '#3498DB', '#E74C3C', '#9B59B6', '#F39C12', '#1ABC9C', '#E91E63', '#00BCD4', '#FF5722', '#673AB7'];
    const color = colors[group.charCodeAt(0) % colors.length];
    const flags = (countries[group] || []).map(([name, code]) => flagHtml(code, { size: '1.3em', title: name })).join(' ');

    html += `<div class="group-card" style="border-color: ${color}30; background: linear-gradient(135deg, ${color}10 0%, ${color}15 100%);">
      <div class="group-card__header">
        <div class="group-card__title">
          <span class="group-card__label" style="color: ${color};">Grupo ${group}</span>
          <div class="group-card__flags">${flags}</div>
        </div>
        <div class="group-card__percent" style="color: ${color};">${pct}% completo</div>
      </div>
      <div class="group-card__content">
        <div class="group-card__count" style="color: ${color};">${stats.collected}/${stats.total}</div>
        <div class="group-card__progress">
          <div class="group-card__progress-bar" style="width: ${pct}%; background: ${color};"></div>
        </div>
      </div>
    </div>`;
  });
  document.getElementById('view-stats').innerHTML = html;
}

/**
 * Renderiza visualização por continentes
 */
function renderContinentsView() {
  const continentStats = {};
  
  Object.entries(countries).forEach(([group, countryList]) => {
    countryList.forEach(([name, code]) => {
      const continent = continentMap[code] || 'Outros';
      if (!continentStats[continent]) {
        continentStats[continent] = { collected: 0, total: 0 };
      }
      
      let collected = 0;
      for (let i = 1; i <= 20; i++) {
        if (stickers[code + '-' + i]) collected++;
      }
      
      continentStats[continent].collected += collected;
      continentStats[continent].total += 20;
    });
  });
  
  let html = '';
  const colors = {
    'América do Sul': { bg: 'linear-gradient(135deg, #FFD70015 0%, #FFA50030 100%)', gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)', text: '#B8860B' },
    'Europa': { bg: 'linear-gradient(135deg, #4FACFE15 0%, #00F2FE30 100%)', gradient: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)', text: '#0077B6' },
    'América do Norte': { bg: 'linear-gradient(135deg, #FA709A15 0%, #FEE14030 100%)', gradient: 'linear-gradient(135deg, #FA709A 0%, #FEE140 100%)', text: '#A91D3A' },
    'África': { bg: 'linear-gradient(135deg, #F093FB15 0%, #F5576C30 100%)', gradient: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)', text: '#B91D3A' },
    'Ásia': { bg: 'linear-gradient(135deg, #FFB34715 0%, #FF8C4230 100%)', gradient: 'linear-gradient(135deg, #FFB347 0%, #FF8C42 100%)', text: '#B8450D' },
    'Oceania': { bg: 'linear-gradient(135deg, #A8EDEA15 0%, #FED6E330 100%)', gradient: 'linear-gradient(135deg, #A8EDEA 0%, #FED6E3 100%)', text: '#06A77D' }
  };
  
  Object.entries(continentStats).forEach(([continent, stats]) => {
    const pct = Math.round((stats.collected / stats.total) * 100);
    const colorSet = colors[continent] || colors['Oceania'];
    
    html += `<div style="padding: 1.25rem; background: ${colorSet.bg}; border-radius: 14px; border: 1px solid ${colorSet.text}30; transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
      <div style="font-weight: 700; margin-bottom: 8px; font-size: 13px; color: ${colorSet.text}; text-transform: uppercase; letter-spacing: 0.3px;">${continent}</div>
      <div style="font-size: 24px; font-weight: 800; background: ${colorSet.gradient}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 8px;">${stats.collected}/${stats.total}</div>
      <div style="height: 6px; background: rgba(0,0,0,0.1); border-radius: 3px; overflow: hidden; margin-bottom: 8px;">
        <div style="height: 100%; width: ${pct}%; background: ${colorSet.gradient}; transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);"></div>
      </div>
      <div style="font-size: 12px; font-weight: 700; color: ${colorSet.text};">${pct}% completo</div>
    </div>`;
  });
  
  document.getElementById('view-stats').innerHTML = html;
}

// ============================================================================
// RENDERING FUNCTIONS
// ============================================================================

/**
 * Renderiza lista de países
 */
function renderPaises() {
  let html = '';
  Object.entries(countries).forEach(([group, countryList]) => {
    let groupHasContent = false;
    let groupHtml = `<h2 style="font-size: 14px; font-weight: 700; background: #DAA520; color: white; padding: 12px 16px; border-radius: 12px; margin: 1.5rem 0 12px; text-transform: uppercase; letter-spacing: 0.3px;">Grupo ${group}</h2>`;
    
    countryList.forEach(([name, code]) => {
      if (!shouldShowCountry(group, code)) return;
      
      let collected = 0;
      for (let i = 1; i <= 20; i++) {
        if (stickers[code + '-' + i]) collected++;
      }
      
      const countryColor = countryColors[code] || '#667eea';
      const textColor = ['#F5F5F5', '#FFFFFF'].includes(countryColor) ? '#000000' : 'white';

      // Count legend players in this country
      const legendsInCountry = [];
      for (let i = 1; i <= 20; i++) {
        const lp = legendStickerMap.get(`${code}-${i}`);
        if (lp) legendsInCountry.push(i);
      }
      const hasLegends = legendsInCountry.length > 0;

      groupHtml += `<div style="margin-bottom: 14px; border-radius: 14px; border: 1px solid ${hasLegends ? '#F1C40F40' : 'var(--color-border-tertiary)'}; background: ${hasLegends ? 'linear-gradient(135deg, #F1C40F06 0%, #9B59B606 100%)' : 'var(--color-background-primary)'}; padding: 10px;">
        <div style="font-size: 14px; font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; color: var(--color-text-primary); flex-wrap: wrap;">
          ${flagHtml(code, { size: '1.5em', title: name })}
          <span>${escapeHtml(name)}</span>
          <span style="font-size: 12px; font-weight: 600; color: var(--color-text-secondary);">(${collected}/20)</span>
          ${hasLegends ? `<span style="display:inline-flex;align-items:center;gap:3px;background:linear-gradient(135deg,#F1C40F,#E67E22);color:#1a1200;border-radius:12px;padding:2px 8px;font-size:10px;font-weight:800;letter-spacing:0.3px;box-shadow:0 2px 6px #F1C40F40;">★ ${legendsInCountry.length} Legend${legendsInCountry.length > 1 ? 's' : ''}</span>` : ''}
        </div>
        <div class="sticker-grid">`;

      for (let i = 1; i <= 20; i++) {
        if (!shouldShowNumber(i, code)) continue;

        const checked = stickers[code + '-' + i];
        const dupCount = duplicates[code + '-' + i] || 0;
        const playerName = playerData[code]?.[i];
        const legendPlayer = legendStickerMap.get(`${code}-${i}`);

        let btnBg, btnColor, btnBorder, btnShadow, btnContent, btnStyle;

        if (legendPlayer) {
          // ── Legend player ──────────────────────────────────────────
          btnBg     = checked ? 'linear-gradient(135deg, #F1C40F 0%, #E67E22 100%)' : 'var(--color-background-secondary)';
          btnColor  = checked ? '#1a1200' : 'var(--color-text-primary)';
          btnBorder = `1.5px solid ${checked ? '#F1C40F' : '#F1C40F80'}`;
          btnShadow = checked ? '0 4px 16px #F1C40F60' : '0 0 0 0 transparent';
          const nameOpacity = checked ? '1' : '0.6';
          btnContent = `<span style="display:block;font-size:11px;font-weight:800;line-height:1;">${i}</span>`
                     + (playerName ? `<span style="display:block;font-size:7px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;opacity:${nameOpacity};margin-top:2px;line-height:1.1;">${escapeHtml(playerName)}</span>` : '');
          btnStyle  = 'display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:46px;';
        } else {
          // ── Normal player ──────────────────────────────────────────
          btnBg     = checked ? countryColor : 'var(--color-background-secondary)';
          btnColor  = checked ? textColor : 'var(--color-text-primary)';
          btnBorder = '';
          btnShadow = checked ? `0 4px 12px ${countryColor}40` : 'none';
          const showName = checked && playerName;
          btnContent = showName
            ? `<span style="display:block;font-size:11px;font-weight:800;line-height:1;">${i}</span><span style="display:block;font-size:7.5px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;opacity:0.92;margin-top:3px;line-height:1.1;">${escapeHtml(playerName)}</span>`
            : `${i}`;
          btnStyle  = showName ? 'display:flex;flex-direction:column;align-items:center;justify-content:center;' : '';
        }

        const borderPart = btnBorder ? `border:${btnBorder};` : '';
        const key = `${code}-${i}`;
        const inWishlist = wishlist.has(key);
        const safeKey = key.replace(/[^a-zA-Z0-9]/g, '-');
        const dupMenu = `
          <div class="dup-menu" id="dup-${code}-${i}">
            <button onclick="event.stopPropagation(); addDuplicate('${code}', ${i}, 'country')" style="padding:4px 8px;background:var(--color-background-secondary);border:0.5px solid var(--color-border-tertiary);border-radius:4px;cursor:pointer;font-size:11px;font-weight:500;color:var(--color-text-primary);">+1</button>
            <div style="font-size:11px;text-align:center;font-weight:700;color:var(--color-text-primary);">${dupCount}</div>
            <button onclick="event.stopPropagation(); removeDuplicate('${code}', ${i}, 'country')" style="padding:4px 8px;background:var(--color-background-secondary);border:0.5px solid var(--color-border-tertiary);border-radius:4px;cursor:pointer;font-size:11px;font-weight:500;color:var(--color-text-primary);">-1</button>
          </div>`;

        groupHtml += `<div data-sticker-wrapper="1" style="position:relative;${inWishlist ? 'outline:1.5px solid #E74C3C60;border-radius:6px;' : ''}">
          <button onclick="toggleSticker('${code}', ${i}, 'country')" class="sticker-button ${checked ? 'checked' : ''}" style="${btnStyle}${borderPart}background:${btnBg};color:${btnColor};box-shadow:${btnShadow};">${btnContent}</button>
          ${legendPlayer ? `<div title="${escapeHtml(legendPlayer.name)} – Legend" style="position:absolute;top:-5px;left:-5px;background:linear-gradient(135deg,#F1C40F,#E67E22);color:#1a1200;border-radius:50%;width:14px;height:14px;display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:800;border:1.5px solid white;box-shadow:0 1px 6px #F1C40F80;pointer-events:none;z-index:2;">★</div>` : ''}
          ${!checked ? `<button id="wl-${safeKey}" onclick="toggleWishlist('${key}', event)" title="${inWishlist ? 'Remover da lista de desejos' : 'Adicionar à lista de desejos'}" style="position:absolute;bottom:1px;right:1px;background:none;border:none;cursor:pointer;font-size:9px;padding:2px;line-height:1;z-index:3;opacity:${inWishlist ? '1' : '0.55'};">${inWishlist ? '❤️' : '🤍'}</button>` : ''}
          ${checked ? `<div class="dup-indicator" onclick="event.stopPropagation(); document.getElementById('dup-${code}-${i}').classList.toggle('active');">+</div>${dupMenu}` : ''}
        </div>`;
      }

      groupHtml += `</div></div>`;
      groupHasContent = true;
    });
    
    if (groupHasContent) {
      html += groupHtml;
    }
  });
  
  document.getElementById('paises-list').innerHTML = html || '<div style="text-align: center; color: var(--color-text-secondary); padding: 2rem;">Nenhuma figurinha encontrada</div>';
}

/**
 * Renderiza lista de Refris
 */
function renderRefri() {
  let html = '';
  for (let i = 1; i <= 14; i++) {
    const key = 'refri-' + i;
    const checked = stickers[key];
    const dupCount = duplicates[key] || 0;
    const player = refriPlayers[i];
    const label = `CC ${String(i).padStart(2, '0')}`;
    const inWishlist = wishlist.has(key);
    const safeKey = key.replace(/[^a-zA-Z0-9]/g, '-');

    html += `<div data-sticker-wrapper="1" style="position:relative;${!checked && inWishlist ? 'outline:1.5px solid #E74C3C60;border-radius:14px;' : ''}">
      <button onclick="toggleSticker('', ${i}, 'refri')" class="refri-card ${checked ? 'checked' : ''}" style="background: ${checked ? '#E74C3C' : 'var(--color-background-secondary)'}; box-shadow: ${checked ? '0 4px 14px #E74C3C50' : 'none'};">
        <div class="refri-card__number" style="color: ${checked ? 'rgba(255,255,255,0.65)' : 'var(--color-text-secondary)'};">${label}</div>
        <div class="refri-card__flag">${flagHtml(player.code, { size: '1.8em' })}</div>
        <div class="refri-card__name" style="color: ${checked ? 'white' : 'var(--color-text-primary)'};">${escapeHtml(player.name)}</div>
      </button>
      ${!checked ? `<button id="wl-${safeKey}" onclick="toggleWishlist('${key}', event)" title="${inWishlist ? 'Remover da lista de desejos' : 'Adicionar à lista de desejos'}" style="position:absolute;bottom:2px;right:2px;background:none;border:none;cursor:pointer;font-size:10px;padding:2px;line-height:1;z-index:3;opacity:${inWishlist ? '1' : '0.55'};">${inWishlist ? '❤️' : '🤍'}</button>` : ''}
      ${checked ? `<div class="dup-indicator" style="background: #E74C3C;" onclick="event.stopPropagation(); document.getElementById('dup-refri-${i}').classList.toggle('active');">+</div>
      <div class="dup-menu" id="dup-refri-${i}">
        <button onclick="event.stopPropagation(); addDuplicate('', ${i}, 'refri')" style="padding: 4px 8px; background: var(--color-background-secondary); border: 0.5px solid var(--color-border-tertiary); border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 500;">+1</button>
        <div style="font-size: 11px; text-align: center; font-weight: 700; color: var(--color-text-primary);">${dupCount}</div>
        <button onclick="event.stopPropagation(); removeDuplicate('', ${i}, 'refri')" style="padding: 4px 8px; background: var(--color-background-secondary); border: 0.5px solid var(--color-border-tertiary); border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 500;">-1</button>
      </div>` : ''}
    </div>`;
  }
  document.getElementById('refri-list').innerHTML = html;
}

/**
 * Renderiza lista de World Cup History
 */
function renderHistory() {
  let html = '';
  for (let i = 0; i <= 19; i++) {
    const key = 'history-' + i;
    const checked = stickers[key];
    const dupCount = duplicates[key] || 0;
    const inWishlist = wishlist.has(key);
    const safeKey = key.replace(/[^a-zA-Z0-9]/g, '-');
    html += `<div data-sticker-wrapper="1" style="position:relative;${!checked && inWishlist ? 'outline:1.5px solid #E74C3C60;border-radius:6px;' : ''}">
      <button onclick="toggleSticker('', ${i}, 'history')" class="sticker-button ${checked ? 'checked' : ''}" style="background: ${checked ? '#3498DB' : 'var(--color-background-secondary)'}; color: ${checked ? 'white' : 'var(--color-text-primary)'}; box-shadow: ${checked ? '0 4px 12px #3498DB40' : 'none'};">FWC${i}</button>
      ${!checked ? `<button id="wl-${safeKey}" onclick="toggleWishlist('${key}', event)" title="${inWishlist ? 'Remover da lista de desejos' : 'Adicionar à lista de desejos'}" style="position:absolute;bottom:1px;right:1px;background:none;border:none;cursor:pointer;font-size:9px;padding:2px;line-height:1;z-index:3;opacity:${inWishlist ? '1' : '0.55'};">${inWishlist ? '❤️' : '🤍'}</button>` : ''}
      ${checked ? `<div class="dup-indicator" style="background: #3498DB;" onclick="event.stopPropagation(); document.getElementById('dup-history-${i}').classList.toggle('active');">+</div>
      <div class="dup-menu" id="dup-history-${i}">
        <button onclick="event.stopPropagation(); addDuplicate('', ${i}, 'history')" style="padding: 4px 8px; background: var(--color-background-secondary); border: 0.5px solid var(--color-border-tertiary); border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 500;">+1</button>
        <div style="font-size: 11px; text-align: center; font-weight: 700;">${dupCount}</div>
        <button onclick="event.stopPropagation(); removeDuplicate('', ${i}, 'history')" style="padding: 4px 8px; background: var(--color-background-secondary); border: 0.5px solid var(--color-border-tertiary); border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 500;">-1</button>
      </div>` : ''}
    </div>`;
  }
  document.getElementById('history-list').innerHTML = html;
}

function renderLegends() {
  const container = document.getElementById('legends-list');
  if (!container) return;
  let html = '';
  legendPlayers.forEach((player, idx) => {
    const flag = flagHtml(player.code, { size: '1.4em', title: player.name });
    html += `<div style="margin-bottom:14px;padding:10px;background:var(--color-background-primary);border-radius:12px;border:1px solid var(--color-border-tertiary);">`;
    html += `<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">${flag}<span style="font-size:13px;font-weight:700;color:var(--color-text-primary);">${escapeHtml(player.name)}</span></div>`;
    html += `<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;">`;
    legendRarities.forEach(rarity => {
      const key = `legend-${idx}-${rarity.id}`;
      const checked = stickers[key];
      const dupCount = duplicates[key] || 0;
      const inWishlist = wishlist.has(key);
      const safeKey = key.replace(/[^a-zA-Z0-9]/g, '-');
      html += `<div data-sticker-wrapper="1" style="position:relative;${!checked && inWishlist ? 'outline:1.5px solid #E74C3C60;border-radius:8px;' : ''}">`;
      html += `<button onclick="toggleLegendSticker(${idx},'${rarity.id}')" style="width:100%;padding:10px 4px;border:2px solid ${rarity.color};border-radius:8px;cursor:pointer;font-size:11px;font-weight:700;text-align:center;background:${checked ? rarity.color : 'var(--color-background-primary)'};color:${checked ? rarity.textColor : rarity.color};transition:all 0.2s;">${rarity.label}</button>`;
      if (!checked) {
        html += `<button id="wl-${safeKey}" onclick="toggleWishlist('${key}', event)" title="${inWishlist ? 'Remover da lista de desejos' : 'Adicionar à lista de desejos'}" style="position:absolute;bottom:2px;right:2px;background:none;border:none;cursor:pointer;font-size:9px;padding:2px;line-height:1;z-index:3;opacity:${inWishlist ? '1' : '0.55'};">${inWishlist ? '❤️' : '🤍'}</button>`;
      }
      if (checked && dupCount > 0) {
        html += `<span style="position:absolute;top:-6px;right:-6px;background:#E74C3C;color:white;border-radius:50%;width:18px;height:18px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;border:2px solid white;pointer-events:none;">${dupCount}</span>`;
      }
      if (checked) {
        html += `<div style="display:flex;gap:3px;margin-top:4px;">`;
        html += `<button onclick="addDuplicate(${idx},'${rarity.id}','legend')" style="flex:1;padding:3px;background:#27AE60;color:white;border:none;border-radius:4px;cursor:pointer;font-size:10px;font-weight:600;">+1</button>`;
        html += `<button onclick="removeDuplicate(${idx},'${rarity.id}','legend')" style="flex:1;padding:3px;background:#E74C3C;color:white;border:none;border-radius:4px;cursor:pointer;font-size:10px;font-weight:600;">-1</button>`;
        html += `</div>`;
      }
      html += `</div>`;
    });
    html += `</div></div>`;
  });
  container.innerHTML = html;
}

function toggleLegendSticker(idx, rarityId) {
  const key = `legend-${idx}-${rarityId}`;
  if (stickers[key]) {
    showConfirmation(idx, rarityId, 'legend');
  } else {
    stickers[key] = true;
    if (wishlist.has(key)) { wishlist.delete(key); saveWishlist(); }
    saveData();
    renderLegends();
    renderTrocas();
  }
}

/**
 * Renderiza lista de trocas (duplicatas)
 */
function renderTrocas() {
  const items = collectAllDuplicates();

  // Update proposal mode button label
  const modeBtn = document.getElementById('btn-proposal-mode');
  if (modeBtn) {
    modeBtn.textContent = proposalSelectionActive ? '✕ Cancelar' : '✅ Selecionar Proposta';
    modeBtn.style.background = proposalSelectionActive ? '#E74C3C' : 'var(--color-background-secondary)';
    modeBtn.style.color = proposalSelectionActive ? 'white' : 'var(--color-text-primary)';
    modeBtn.style.border = proposalSelectionActive ? 'none' : '0.5px solid var(--color-border-tertiary)';
  }

  if (items.length === 0) {
    document.getElementById('trocas-list').innerHTML =
      '<div style="padding:24px;text-align:center;color:var(--color-text-secondary);grid-column:1/-1;">Nenhuma figurinha duplicada</div>';
    updateProposalBar();
    return;
  }

  let html = '';
  items.forEach(({ key, mainLabel, subLabel, flag, color, dupCount }) => {
    const isPending = !!pendingTrades[key];
    const isSelected = proposalSelection.has(key);
    const safeId = 'tcard-' + key.replace(/[^a-zA-Z0-9]/g, '-');
    const border = isSelected ? '2px solid #667eea' : `1px solid ${color}40`;
    const opacity = isPending ? 'opacity:0.65;' : '';
    const rarity = getStickerRarity(key);

    html += `<div id="${safeId}" style="padding:12px;background:linear-gradient(135deg,${color}15 0%,${color}30 100%);border-radius:12px;border:${border};box-shadow:0 2px 8px ${color}20;${opacity}position:relative;${proposalSelectionActive ? 'cursor:pointer;' : ''}" ${proposalSelectionActive ? `onclick="toggleProposalItem('${key}')"` : ''}>`;

    if (!proposalSelectionActive && rarity.value > 0) {
      html += `<div title="${rarity.label}" style="position:absolute;top:6px;right:6px;font-size:10px;color:${rarity.color};font-weight:700;line-height:1;">${rarity.stars}</div>`;
    }

    if (proposalSelectionActive) {
      html += `<div class="sel-dot" style="position:absolute;top:8px;right:8px;width:20px;height:20px;border-radius:50%;border:2px solid ${isSelected ? '#667eea' : color + '80'};background:${isSelected ? '#667eea' : 'transparent'};display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:white;">${isSelected ? '✓' : ''}</div>`;
    }

    html += `<div style="display:flex;align-items:center;gap:8px;margin-bottom:${isPending || !proposalSelectionActive ? '8px' : '0'};">${flag}<div style="flex:1;min-width:0;"><div style="font-weight:700;font-size:13px;color:${color};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${mainLabel}</div><div style="font-size:12px;color:${color};opacity:0.8;">${subLabel}</div></div></div>`;

    if (isPending) {
      html += `<div style="font-size:11px;color:var(--color-text-secondary);margin-bottom:7px;">🔄 Em negociação com <strong>${escapeHtml(pendingTrades[key].partner)}</strong> · ${pendingTrades[key].date}</div>`;
    }

    if (!proposalSelectionActive) {
      html += `<div style="display:flex;gap:5px;flex-wrap:wrap;">`;
      if (isPending) {
        html += `<button onclick="releaseSticker('${key}')" style="flex:1;padding:5px 8px;background:#27AE60;color:white;border:none;border-radius:6px;cursor:pointer;font-size:11px;font-weight:600;">✅ Liberar</button>`;
      } else {
        html += `<button onclick="reserveSticker('${key}')" style="flex:1;padding:5px 8px;background:var(--color-background-secondary);border:0.5px solid ${color}50;border-radius:6px;cursor:pointer;font-size:11px;font-weight:600;color:var(--color-text-secondary);">🔄 Reservar</button>`;
      }
      html += `<button onclick="removeDuplicate(${buildDupArgs(key)})" style="padding:5px 8px;background:#E74C3C;color:white;border:none;border-radius:6px;cursor:pointer;font-size:11px;font-weight:600;">-1</button>`;
      html += `<button onclick="addDuplicate(${buildDupArgs(key)})" style="padding:5px 8px;background:#27AE60;color:white;border:none;border-radius:6px;cursor:pointer;font-size:11px;font-weight:600;">+1</button>`;
      html += `</div>`;
    }

    html += `</div>`;
  });

  document.getElementById('trocas-list').innerHTML = html;
  updateProposalBar();
}

// ============================================================================
// STATISTICS AND UPDATES
// ============================================================================

/**
 * Atualiza estatísticas gerais
 */
function updateStats() {
  let collected = 0, paises = 0, refri = 0, history = 0, legends = 0;
  let totalDuplicates = 0;

  Object.entries(stickers).forEach(([key, value]) => {
    if (!value) return;
    if (key.startsWith('refri-')) refri++;
    else if (key.startsWith('history-')) history++;
    else if (key.startsWith('legend-')) legends++;
    else paises++;
  });

  Object.entries(duplicates).forEach(([key, qty]) => {
    if (stickers[key]) {
      totalDuplicates += qty || 0;
    }
  });

  collected = paises + refri + history + legends;
  const total = 1127;
  const missing = total - collected;
  const percentage = Math.round((collected / total) * 100);

  document.getElementById('collected').textContent = collected;
  document.getElementById('missing').textContent = missing;
  document.getElementById('percentage').textContent = percentage + '%';
  document.getElementById('duplicates').textContent = totalDuplicates;
  document.getElementById('progress-bar').style.width = percentage + '%';

  document.getElementById('stats-paises').textContent = paises + '/960';
  document.getElementById('stats-refri').textContent = refri + '/14';
  document.getElementById('stats-history').textContent = history + '/20';
  document.getElementById('stats-legends').textContent = legends + '/80';

  document.getElementById('bar-paises').style.width = (paises / 960 * 100) + '%';
  document.getElementById('bar-refri').style.width = (refri / 14 * 100) + '%';
  document.getElementById('bar-history').style.width = (history / 20 * 100) + '%';
  document.getElementById('bar-legends').style.width = (legends / 80 * 100) + '%';
  
  updateDashboardView();
}

// ============================================================================
// TABS MANAGEMENT
// ============================================================================

/**
 * Alterna entre abas
 */
function switchTab(tab) {
  document.getElementById('dashboard-content').style.display = tab === 'dashboard' ? 'block' : 'none';
  document.getElementById('paises-content').style.display = tab === 'paises' ? 'block' : 'none';
  document.getElementById('refri-content').style.display = tab === 'refri' ? 'block' : 'none';
  document.getElementById('history-content').style.display = tab === 'history' ? 'block' : 'none';
  document.getElementById('legends-content').style.display = tab === 'legends' ? 'block' : 'none';
  document.getElementById('relatorios-content').style.display = tab === 'relatorios' ? 'block' : 'none';
  document.getElementById('comunidade-content').style.display = tab === 'comunidade' ? 'block' : 'none';

  document.querySelectorAll('[id^="tab-"]').forEach(btn => {
    btn.classList.remove('active');
  });

  const activeBtn = document.getElementById('tab-' + tab);
  if (activeBtn) activeBtn.classList.add('active');

  if (tab === 'comunidade') renderComunidade();
  if (tab === 'legends') renderLegends();
}

// ============================================================================
// PREVIEW DE TROCAS
// ============================================================================

function getTradePreviewItems() {
  let items = [];

  const addItem = (title, emoji, color, dupCount, category, code = null) => {
    items.push({ title, emoji, color, dupCount, category, code });
  };

  for (let i = 1; i <= 14; i++) {
    const dupCount = duplicates['refri-' + i] || 0;
    if (stickers['refri-' + i] && dupCount > 0) {
      const player = refriPlayers[i];
      const label = `CC ${String(i).padStart(2, '0')}`;
      addItem(`${player.name} (${label})`, flagEmojis[player.code] || '🥤', '#E74C3C', dupCount, 'Refri', player.code);
    }
  }

  for (let i = 0; i <= 19; i++) {
    const dupCount = duplicates['history-' + i] || 0;
    if (stickers['history-' + i] && dupCount > 0) {
      addItem(`World Cup #${i}`, '🏆', '#3498DB', dupCount, 'World Cup');
    }
  }

  Object.entries(countries).forEach(([group, countryList]) => {
    countryList.forEach(([name, code]) => {
      const color = countryColors[code] || '#667eea';
      for (let i = 1; i <= 20; i++) {
        const dupCount = duplicates[code + '-' + i] || 0;
        if (stickers[code + '-' + i] && dupCount > 0) {
          const pName = playerData[code]?.[i];
          const itemTitle = pName ? pName : `${name} #${i}`;
          addItem(itemTitle, flagEmojis[code] || '🏳️', color, dupCount, 'Países', code);
        }
      }
    });
  });

  return items;
}

/**
 * Abre o modal com as figurinhas disponíveis para troca
 */
function openTradePreview() {
  const container = document.getElementById('trade-preview-container');
  const statsContainer = document.getElementById('trade-preview-stats');
  const items = getTradePreviewItems();
  let html = '';
  let stats = { paises: 0, refri: 0, history: 0, total: 0 };

  items.forEach((item) => {
    stats.total += item.dupCount;
    stats[item.category === 'Países' ? 'paises' : item.category === 'Refri' ? 'refri' : 'history']++;
    const flagContent = item.code
      ? flagHtml(item.code, { size: '46px', square: true })
      : `<span style="font-size:32px;">${item.emoji}</span>`;
    html += `<div class="trade-card" style="border: 1px solid ${item.color}33; background: ${item.color}15;">
      <div class="trade-image" style="background: ${item.color};">${flagContent}</div>
      <div class="trade-info">
        <div class="trade-title">${escapeHtml(item.title)}</div>
        <div class="trade-count">${item.dupCount} disponível${item.dupCount > 1 ? 's' : ''}</div>
      </div>
    </div>`;
  });

  if (!html) {
    html = '<div style="padding: 2rem; text-align: center; color: var(--color-text-secondary);">Nenhuma figurinha disponível para troca.</div>';
  }

  container.innerHTML = html;
  statsContainer.innerHTML = `
    <strong style="display:block; margin-bottom:8px; color:#667eea;">Resumo de Trocas</strong>
    🌍 Países: ${stats.paises} itens<br>
    🥤 Refri: ${stats.refri} itens<br>
    🏆 World Cup: ${stats.history} itens<br>
    <strong style="display:block; margin-top:8px; color:#667eea;">Total: ${stats.total} figurinhas</strong>
  `;
  document.getElementById('trade-modal').classList.add('active');
}

/**
 * Copia uma imagem das figurinhas disponíveis para troca para a área de transferência
 */
async function copyTradePreviewImage() {
  const items = getTradePreviewItems();
  if (!items.length) {
    alert('Nenhuma figurinha disponível para troca.');
    return;
  }

  const columns = 3;
  const cardWidth = 260;
  const cardHeight = 120;
  const padding = 20;
  const width = columns * cardWidth + (columns + 1) * padding;
  const rows = Math.ceil(items.length / columns);
  const height = rows * cardHeight + (rows + 1) * padding + 80;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#667eea';
  ctx.font = '24px sans-serif';
  ctx.fillText('Figurinhas para Troca', padding, 36);
  ctx.fillStyle = '#444444';
  ctx.font = '14px sans-serif';
  ctx.fillText(`Gerado em ${new Date().toLocaleDateString('pt-BR')}`, padding, 58);

  items.forEach((item, index) => {
    const col = index % columns;
    const row = Math.floor(index / columns);
    const x = padding + col * (cardWidth + padding);
    const y = 80 + row * (cardHeight + padding);

    ctx.fillStyle = '#f8f9ff';
    ctx.fillRect(x, y, cardWidth, cardHeight);
    ctx.strokeStyle = item.color;
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, cardWidth, cardHeight);

    ctx.fillStyle = item.color;
    ctx.fillRect(x + 16, y + 16, 56, 56);
    ctx.fillStyle = '#ffffff';
    ctx.font = '36px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(item.emoji, x + 44, y + 44);

    ctx.fillStyle = '#222222';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(item.title, x + 88, y + 32);

    ctx.fillStyle = '#555555';
    ctx.font = '13px sans-serif';
    ctx.fillText(`${item.dupCount} disponível${item.dupCount > 1 ? 's' : ''}`, x + 88, y + 60);
  });

  if (!navigator.clipboard || !window.ClipboardItem) {
    alert('Copiar imagem não é suportado neste navegador.');
    return;
  }

  canvas.toBlob(async (blob) => {
    if (!blob) {
      alert('Não foi possível gerar a imagem.');
      return;
    }

    try {
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
      alert('Imagem copiada para a área de transferência!');
    } catch (err) {
      console.error(err);
      alert('Falha ao copiar a imagem. Verifique as permissões do navegador.');
    }
  });
}

/**
 * Fecha modal de preview de trocas
 */
function closeTradePreview() {
  document.getElementById('trade-modal').classList.remove('active');
}

// ============================================================================
// REPORTS GENERATION
// ============================================================================

/**
 * Gera relatório baseado no tipo
 */
function generateReport(type) {
  let reportContent = '';
  let reportTitle = '';
  
  if (type === 'obtained') {
    reportTitle = '✅ FIGURINHAS OBTIDAS';
    reportContent = generateObtainedReport();
  } else if (type === 'missing') {
    reportTitle = '❌ FIGURINHAS FALTANTES';
    reportContent = generateMissingReport();
  } else if (type === 'duplicates') {
    reportTitle = '🔄 FIGURINHAS PARA TROCA';
    reportContent = generateDuplicatesReport();
  } else if (type === 'complete') {
    reportTitle = '📊 RELATÓRIO COMPLETO';
    reportContent = generateCompleteReport();
  }
  
  currentReportData = reportContent;
  currentReportTitle = reportTitle;
  document.getElementById('report-title').textContent = reportTitle;
  document.getElementById('report-content').textContent = reportContent;
  document.getElementById('report-modal').classList.add('active');
}

/**
 * Gera relatório de figurinhas obtidas
 */
function generateObtainedReport() {
  let report = `COPA 2026 - FIGURINHAS OBTIDAS\nData: ${new Date().toLocaleDateString('pt-BR')}\n${'='.repeat(50)}\n\n`;
  
  Object.entries(countries).forEach(([group, countryList]) => {
    report += `GRUPO ${group}\n${'-'.repeat(30)}\n`;
    
    countryList.forEach(([name, code]) => {
      let obtained = [];
      for (let i = 1; i <= 20; i++) {
        if (stickers[code + '-' + i]) {
          obtained.push(i);
        }
      }
      
      if (obtained.length > 0) {
        report += `${name}: ${obtained.join(', ')}\n`;
      }
    });
  });
  
  report += `\n\nREFRI\n${'-'.repeat(30)}\n`;
  let refriObtained = [];
  for (let i = 1; i <= 14; i++) {
    if (stickers['refri-' + i]) {
      refriObtained.push(`R${i}`);
    }
  }
  if (refriObtained.length > 0) {
    report += `Figurinhas: ${refriObtained.join(', ')}\n`;
  }
  
  report += `\n\nWORLD CUP HISTORY\n${'-'.repeat(30)}\n`;
  let historyObtained = [];
  for (let i = 0; i <= 19; i++) {
    if (stickers['history-' + i]) {
      historyObtained.push(`FWC${i}`);
    }
  }
  if (historyObtained.length > 0) {
    report += `Figurinhas: ${historyObtained.join(', ')}\n`;
  }

  report += `\n\nLEGENDS\n${'-'.repeat(30)}\n`;
  legendPlayers.forEach((player, idx) => {
    const obtained = legendRarities.filter(r => stickers[`legend-${idx}-${r.id}`]).map(r => r.label);
    if (obtained.length > 0) {
      report += `${player.name}: ${obtained.join(', ')}\n`;
    }
  });

  return report;
}

/**
 * Gera relatório de figurinhas faltantes
 */
function generateMissingReport() {
  let report = `COPA 2026 - FIGURINHAS FALTANTES\nData: ${new Date().toLocaleDateString('pt-BR')}\n${'='.repeat(50)}\n\n`;
  
  Object.entries(countries).forEach(([group, countryList]) => {
    report += `GRUPO ${group}\n${'-'.repeat(30)}\n`;
    
    countryList.forEach(([name, code]) => {
      let missing = [];
      for (let i = 1; i <= 20; i++) {
        if (!stickers[code + '-' + i]) {
          missing.push(i);
        }
      }
      
      if (missing.length > 0) {
        report += `${name}: ${missing.join(', ')}\n`;
      }
    });
  });
  
  report += `\n\nREFRI\n${'-'.repeat(30)}\n`;
  let refriMissing = [];
  for (let i = 1; i <= 14; i++) {
    if (!stickers['refri-' + i]) {
      refriMissing.push(`R${i}`);
    }
  }
  if (refriMissing.length > 0) {
    report += `Figurinhas: ${refriMissing.join(', ')}\n`;
  }
  
  report += `\n\nWORLD CUP HISTORY\n${'-'.repeat(30)}\n`;
  let historyMissing = [];
  for (let i = 0; i <= 19; i++) {
    if (!stickers['history-' + i]) {
      historyMissing.push(`FWC${i}`);
    }
  }
  if (historyMissing.length > 0) {
    report += `Figurinhas: ${historyMissing.join(', ')}\n`;
  }

  report += `\n\nLEGENDS\n${'-'.repeat(30)}\n`;
  legendPlayers.forEach((player, idx) => {
    const missing = legendRarities.filter(r => !stickers[`legend-${idx}-${r.id}`]).map(r => r.label);
    if (missing.length > 0) {
      report += `${player.name}: ${missing.join(', ')}\n`;
    }
  });

  return report;
}

/**
 * Gera relatório de figurinhas para troca
 */
function generateDuplicatesReport() {
  let report = `COPA 2026 - FIGURINHAS PARA TROCA\nData: ${new Date().toLocaleDateString('pt-BR')}\n${'='.repeat(50)}\n\n`;
  
  let hasDuplicates = false;
  
  Object.entries(countries).forEach(([group, countryList]) => {
    let groupDups = [];
    
    countryList.forEach(([name, code]) => {
      for (let i = 1; i <= 20; i++) {
        const dupCount = duplicates[code + '-' + i] || 0;
        if (stickers[code + '-' + i] && dupCount > 0) {
          groupDups.push(`${name} #${i}: ${dupCount}`);
          hasDuplicates = true;
        }
      }
    });
    
    if (groupDups.length > 0) {
      report += `GRUPO ${group}\n${'-'.repeat(30)}\n`;
      groupDups.forEach(dup => {
        report += `${dup}\n`;
      });
    }
  });
  
  report += `\n\nREFRI\n${'-'.repeat(30)}\n`;
  let refriDups = [];
  for (let i = 1; i <= 14; i++) {
    const dupCount = duplicates['refri-' + i] || 0;
    if (stickers['refri-' + i] && dupCount > 0) {
      refriDups.push(`R${i}: ${dupCount}`);
      hasDuplicates = true;
    }
  }
  if (refriDups.length > 0) {
    refriDups.forEach(dup => {
      report += `${dup}\n`;
    });
  }
  
  report += `\n\nWORLD CUP HISTORY\n${'-'.repeat(30)}\n`;
  let historyDups = [];
  for (let i = 0; i <= 19; i++) {
    const dupCount = duplicates['history-' + i] || 0;
    if (stickers['history-' + i] && dupCount > 0) {
      historyDups.push(`FWC${i}: ${dupCount}`);
      hasDuplicates = true;
    }
  }
  if (historyDups.length > 0) {
    historyDups.forEach(dup => {
      report += `${dup}\n`;
    });
  }

  report += `\n\nLEGENDS\n${'-'.repeat(30)}\n`;
  legendPlayers.forEach((player, idx) => {
    legendRarities.forEach(rarity => {
      const dupCount = duplicates[`legend-${idx}-${rarity.id}`] || 0;
      if (stickers[`legend-${idx}-${rarity.id}`] && dupCount > 0) {
        report += `${player.name} (${rarity.label}): ${dupCount}\n`;
        hasDuplicates = true;
      }
    });
  });

  if (!hasDuplicates) {
    report += '\nNenhuma figurinha duplicada registrada para troca.\n';
  }

  return report;
}

/**
 * Gera relatório completo
 */
function generateCompleteReport() {
  let report = `COPA 2026 - RELATÓRIO COMPLETO\nData: ${new Date().toLocaleDateString('pt-BR')}\n${'='.repeat(50)}\n`;
  
  let totalCollected = 0, totalDuplicates = 0;

  Object.entries(stickers).forEach(([key, value]) => {
    if (value) totalCollected++;
  });

  Object.entries(duplicates).forEach(([key, qty]) => {
    if (stickers[key]) totalDuplicates += qty || 0;
  });

  const totalMissing = 1127 - totalCollected;

  report += `\n📊 ESTATÍSTICAS GERAIS\n${'-'.repeat(30)}\n`;
  report += `Figurinhas Coletadas: ${totalCollected}/1127 (${Math.round((totalCollected/1127)*100)}%)\n`;
  report += `Figurinhas Faltantes: ${totalMissing}/1127\n`;
  report += `Duplicatas Registradas: ${totalDuplicates}\n`;
  
  return report;
}

/**
 * Exporta relatório como HTML
 */
function exportToHTML() {
  const doctype = '<!DOCTYPE html>';
  const html = '<html lang="pt-BR">';
  const head = `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${currentReportTitle}</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; padding: 2rem; min-height: 100vh; }
      .container { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 16px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3); padding: 3rem; }
      h1 { color: #FF8C42; margin-bottom: 1rem; font-size: 2.5rem; text-align: center; }
      .date { text-align: center; color: #666; margin-bottom: 2rem; font-size: 0.95rem; }
      .divider { border: none; border-top: 3px solid #FF8C42; margin: 2rem 0; }
      pre { background: #f5f5f5; padding: 2rem; border-radius: 8px; overflow-x: auto; font-size: 0.95rem; line-height: 1.6; border-left: 5px solid #FF8C42; white-space: pre-wrap; }
      .footer { text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #eee; color: #666; font-size: 0.9rem; }
      @media (max-width: 768px) { body { padding: 1rem; } .container { padding: 1.5rem; } h1 { font-size: 1.8rem; } pre { padding: 1rem; font-size: 0.85rem; } }
      @media print { body { background: #fff; padding: 0; } .container { box-shadow: none; padding: 0; } }
    </style>
  </head>`;
  
  const body = `<body>
    <div class="container">
      <h1>${currentReportTitle}</h1>
      <p class="date">Gerado em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}</p>
      <hr class="divider">
      <pre>${escapeHtml(currentReportData)}</pre>
      <div class="footer">
        <p>Copa 2026 - Controle de Figurinhas | Estiva GO</p>
      </div>
    </div>
  </body>`;
  
  const htmlContent = doctype + html + head + body + '</html>';
  
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
  setTimeout(() => URL.revokeObjectURL(url), 100);
}

/**
 * Exporta relatório como CSV
 */
function exportToCSV() {
  const csv = currentReportData.replace(/\n/g, '\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `relatorio_figurinhas_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Exporta dados atuais como JSON
 */
function exportData() {
  const exportPayload = {
    version: '1.0',
    exportedAt: new Date().toISOString(),
    stickers,
    duplicates
  };
  
  const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: 'application/octet-stream;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  const now = new Date();
  const nowStr = String(now.getMonth() + 1).padStart(2, '0')
    + String(now.getDate()).padStart(2, '0')
    + String(now.getHours()).padStart(2, '0')
    + String(now.getMinutes()).padStart(2, '0');
  const user = (communityProfile.name || 'user').replace(/[^a-zA-Z0-9]/g, '').slice(0, 12) || 'user';
  link.setAttribute('download', `${user}cup26_${nowStr}.est`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 100);
}

/**
 * Inicia o fluxo de importação de dados
 */
function importData() {
  const input = document.getElementById('import-data-input');
  if (input) {
    input.value = '';
    input.click();
  }
}

/**
 * Processa o arquivo JSON importado
 */
function handleImportFile(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      validateImportedData(data);

      const shouldMerge = window.confirm(
        'Deseja mesclar os dados importados com os dados atuais?\n\nOK: Mesclar\nCancelar: Substituir'
      );
      
      if (shouldMerge) {
        mergeImportedData(data);
      } else {
        if (!window.confirm('A importação substituirá os dados atuais. Deseja continuar?')) {
          return;
        }
        stickers = data.stickers || {};
        duplicates = data.duplicates || {};
      }
      
      saveData();
      renderPaises();
      renderRefri();
      renderHistory();
      renderTrocas();
      alert('Dados importados com sucesso!');
    } catch (error) {
      console.error('Falha ao importar dados:', error);
      alert('Arquivo inválido ou formato incorreto. Use um arquivo JSON exportado pelo app.');
    }
  };
  reader.onerror = () => {
    alert('Não foi possível ler o arquivo. Tente novamente.');
  };
  reader.readAsText(file, 'UTF-8');
}

/**
 * Mescla dados importados com os dados existentes
 */
function mergeImportedData(data) {
  const importedStickers = data.stickers || {};
  const importedDuplicates = data.duplicates || {};
  
  Object.entries(importedStickers).forEach(([key, value]) => {
    if (value) {
      stickers[key] = true;
    }
  });
  
  Object.entries(importedDuplicates).forEach(([key, qty]) => {
    if (!qty || qty <= 0) return;
    const currentQty = duplicates[key] || 0;
    duplicates[key] = currentQty + qty;
    if (!stickers[key]) {
      stickers[key] = true;
    }
  });
}

/**
 * Valida o conteúdo do JSON importado
 */
function validateImportedData(data) {
  if (!data || typeof data !== 'object') {
    throw new Error('Formato inválido');
  }
  if (typeof data.stickers !== 'object' || typeof data.duplicates !== 'object') {
    throw new Error('Estrutura de dados inválida');
  }
}

/**
 * Fecha modal de relatório
 */
function closeReport() {
  document.getElementById('report-modal').classList.remove('active');
}

// ============================================================================
// TROCAS AVANÇADAS
// ============================================================================

/** Coleta todos os itens duplicados normalizados */
function collectAllDuplicates() {
  const items = [];
  for (let i = 1; i <= 14; i++) {
    const key = 'refri-' + i;
    const dupCount = duplicates[key] || 0;
    if (stickers[key] && dupCount > 0) {
      const player = refriPlayers[i];
      items.push({ key, mainLabel: escapeHtml(player.name), subLabel: `CC ${String(i).padStart(2, '0')} · Disponíveis: ${dupCount}`, flag: flagHtml(player.code, { size: '1.6em' }), color: '#E74C3C', dupCount });
    }
  }
  for (let i = 0; i <= 19; i++) {
    const key = 'history-' + i;
    const dupCount = duplicates[key] || 0;
    if (stickers[key] && dupCount > 0) {
      items.push({ key, mainLabel: `World Cup #${i}`, subLabel: `FWC ${String(i).padStart(2, '00')} · Disponíveis: ${dupCount}`, flag: '<span style="font-size:1.6em;">🏆</span>', color: '#3498DB', dupCount });
    }
  }
  Object.values(countries).forEach(list => {
    list.forEach(([name, code]) => {
      for (let i = 1; i <= 20; i++) {
        const key = `${code}-${i}`;
        const dupCount = duplicates[key] || 0;
        if (stickers[key] && dupCount > 0) {
          const color = countryColors[code] || '#667eea';
          const pName = playerData[code]?.[i];
          items.push({ key, mainLabel: pName ? escapeHtml(pName) : `${escapeHtml(name)} #${i}`, subLabel: pName ? `${escapeHtml(name)} #${i} · Disponíveis: ${dupCount}` : `Disponíveis: ${dupCount}`, flag: flagHtml(code, { size: '1.6em', title: name }), color, dupCount });
        }
      }
    });
  });
  legendPlayers.forEach((player, idx) => {
    legendRarities.forEach(rarity => {
      const key = `legend-${idx}-${rarity.id}`;
      const dupCount = duplicates[key] || 0;
      if (stickers[key] && dupCount > 0) {
        items.push({ key, mainLabel: escapeHtml(player.name), subLabel: `${rarity.label} · Disponíveis: ${dupCount}`, flag: flagHtml(player.code, { size: '1.6em', title: player.name }), color: rarity.color, dupCount });
      }
    });
  });
  return items;
}

/** Retorna os args formatados para addDuplicate/removeDuplicate */
function buildDupArgs(key) {
  if (key.startsWith('refri-')) return `'', ${parseInt(key.split('-')[1])}, 'refri'`;
  if (key.startsWith('history-')) return `'', ${parseInt(key.split('-')[1])}, 'history'`;
  if (key.startsWith('legend-')) {
    const rest = key.slice(7); // strip 'legend-'
    const dash = rest.indexOf('-');
    const idx = rest.slice(0, dash);
    const rarityId = rest.slice(dash + 1);
    return `${idx}, '${rarityId}', 'legend'`;
  }
  const parts = key.split('-');
  const num = parts[parts.length - 1];
  const code = parts.slice(0, -1).join('-');
  return `'${code}', ${num}, 'country'`;
}

// --- Proposta selecionada ---

function toggleProposalMode() {
  proposalSelectionActive = !proposalSelectionActive;
  proposalSelection.clear();
  renderTrocas();
}

function toggleProposalItem(key) {
  if (proposalSelection.has(key)) proposalSelection.delete(key);
  else proposalSelection.add(key);
  const safeId = 'tcard-' + key.replace(/[^a-zA-Z0-9]/g, '-');
  const card = document.getElementById(safeId);
  if (card) {
    const items = collectAllDuplicates();
    const item = items.find(it => it.key === key);
    if (item) {
      const isSelected = proposalSelection.has(key);
      card.style.border = isSelected ? '2px solid #667eea' : `1px solid ${item.color}40`;
      const dot = card.querySelector('.sel-dot');
      if (dot) { dot.style.background = isSelected ? '#667eea' : 'transparent'; dot.textContent = isSelected ? '✓' : ''; dot.style.border = `2px solid ${isSelected ? '#667eea' : item.color + '80'}`; }
    }
  }
  updateProposalBar();
}

function updateProposalBar() {
  const bar = document.getElementById('proposal-bar');
  if (!bar) return;
  if (proposalSelectionActive) {
    bar.style.display = 'flex';
    const countEl = bar.querySelector('#proposal-count');
    if (countEl) countEl.textContent = proposalSelection.size > 0 ? `${proposalSelection.size} selecionada${proposalSelection.size !== 1 ? 's' : ''}` : 'Selecione figurinhas';
    const btn = bar.querySelector('#proposal-generate-btn');
    if (btn) btn.style.opacity = proposalSelection.size > 0 ? '1' : '0.4';
  } else {
    bar.style.display = 'none';
  }
}

function openProposalModal() {
  if (proposalSelection.size === 0) { showToast('Selecione ao menos uma figurinha'); return; }
  const items = collectAllDuplicates().filter(it => proposalSelection.has(it.key));
  const listEl = document.getElementById('proposal-offer-list');
  if (listEl) listEl.innerHTML = items.map(it => `<div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:0.5px solid var(--color-border-tertiary);">${it.flag}<span style="font-size:13px;color:var(--color-text-primary);">${it.mainLabel}</span><span style="font-size:11px;color:var(--color-text-secondary);margin-left:auto;">${it.subLabel.split('·')[0].trim()}</span></div>`).join('');
  const wantEl = document.getElementById('proposal-want-input');
  if (wantEl) wantEl.value = '';
  document.getElementById('proposal-modal')?.classList.add('active');
}

function closeProposalModal() {
  document.getElementById('proposal-modal')?.classList.remove('active');
}

function buildProposalMessage() {
  const want = (document.getElementById('proposal-want-input')?.value || '').trim();
  const name = communityProfile.name || 'Usuário';
  const items = collectAllDuplicates().filter(it => proposalSelection.has(it.key));
  let text = `🔄 Proposta de Troca – ${name}\n\n`;
  text += `✅ Ofereço (${items.length}):\n`;
  items.forEach(it => { text += `• ${it.mainLabel} (${it.subLabel.split('·')[0].trim()})\n`; });
  if (want) text += `\n❓ Quero em troca:\n${want}`;
  if (communityProfile.contact) text += `\n\n📱 Contato: ${communityProfile.contact}`;
  return text;
}

function copyProposalText() { copyToClipboard(buildProposalMessage(), 'Proposta copiada!'); }
function shareProposalWhatsApp() { shareViaWhatsApp(buildProposalMessage()); }

// --- Em negociação ---

function reserveSticker(key) {
  const partner = prompt('Nome do parceiro desta troca:');
  if (partner === null) return;
  pendingTrades[key] = { partner: partner.trim() || 'Parceiro', date: new Date().toLocaleDateString('pt-BR') };
  localStorage.setItem('copaPending', JSON.stringify(pendingTrades));
  renderTrocas();
  showToast('Reservado para ' + (partner.trim() || 'Parceiro') + ' 🔄');
}

function releaseSticker(key) {
  delete pendingTrades[key];
  localStorage.setItem('copaPending', JSON.stringify(pendingTrades));
  renderTrocas();
  showToast('Figurinha liberada ✅');
}

// --- Links compra / venda ---

function openBuySearchModal() {
  const searchEl = document.getElementById('buy-search-input');
  if (searchEl) { searchEl.value = ''; }
  renderBuyList('');
  document.getElementById('buy-search-modal')?.classList.add('active');
}

function closeBuySearchModal() {
  document.getElementById('buy-search-modal')?.classList.remove('active');
}

function renderBuyList(query) {
  const container = document.getElementById('buy-search-results');
  if (!container) return;
  const q = query.toLowerCase().trim();

  const missing = [];
  Object.values(countries).forEach(list => {
    list.forEach(([name, code]) => {
      for (let i = 1; i <= 20; i++) {
        if (!stickers[`${code}-${i}`]) {
          const pName = playerData[code]?.[i] || '';
          const label = `${name} #${i}${pName ? ' – ' + pName : ''}`;
          if (!q || label.toLowerCase().includes(q) || code.toLowerCase().includes(q)) {
            missing.push({ key: `${code}-${i}`, label, flag: flagHtml(code, { size: '1.2em' }), color: countryColors[code] || '#667eea' });
          }
        }
      }
    });
  });
  for (let i = 1; i <= 14; i++) {
    if (!stickers[`refri-${i}`]) {
      const player = refriPlayers[i];
      const label = `CC ${String(i).padStart(2, '0')} – ${player.name}`;
      if (!q || label.toLowerCase().includes(q)) missing.push({ key: `refri-${i}`, label, flag: flagHtml(player.code, { size: '1.2em' }), color: '#E74C3C' });
    }
  }

  if (missing.length === 0) { container.innerHTML = '<p style="text-align:center;color:var(--color-text-secondary);padding:1rem;">Nenhuma figurinha faltante encontrada</p>'; return; }

  const shown = missing.slice(0, 40);
  container.innerHTML = shown.map(({ label, flag, color }) => {
    const q2 = encodeURIComponent('figurinha panini copa 2026 ' + label.replace(/ – .+/, '').replace(/#/g, ''));
    return `<div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:0.5px solid var(--color-border-tertiary);">${flag}<span style="font-size:12px;flex:1;color:var(--color-text-primary);">${escapeHtml(label)}</span><a href="https://lista.mercadolivre.com.br/${q2}" target="_blank" rel="noopener" style="padding:4px 8px;background:#FFE600;color:#333;border-radius:6px;font-size:11px;font-weight:700;text-decoration:none;flex-shrink:0;">ML</a><a href="https://www.olx.com.br/brasil?q=${q2}" target="_blank" rel="noopener" style="padding:4px 8px;background:#7B00D4;color:white;border-radius:6px;font-size:11px;font-weight:700;text-decoration:none;flex-shrink:0;margin-left:4px;">OLX</a></div>`;
  }).join('') + (missing.length > 40 ? `<p style="text-align:center;font-size:12px;color:var(--color-text-secondary);padding-top:8px;">Refine a busca para ver mais (${missing.length - 40} ocultas)</p>` : '');
}

function openSellWhatsApp() {
  const offers = collectAllDuplicates().filter(it => !pendingTrades[it.key]);
  if (offers.length === 0) { showToast('Sem duplicatas para vender'); return; }
  const name = communityProfile.name || 'Colecionador';
  let text = `🎴 Vendo Figurinhas – Copa 2026\n${name}\n\n📦 Disponíveis (${offers.length}):\n`;
  offers.slice(0, 30).forEach(it => { text += `• ${it.mainLabel}${it.dupCount > 1 ? ` (×${it.dupCount})` : ''}\n`; });
  if (offers.length > 30) text += `... e mais ${offers.length - 30}\n`;
  if (communityProfile.contact) text += `\n📱 WhatsApp: ${communityProfile.contact}`;
  text += '\n\n_Figurinhas originais Panini_';
  shareViaWhatsApp(text);
}

// --- Histórico de trocas ---

function openRegisterTradeModal() {
  document.getElementById('trade-hist-partner').value = '';
  document.getElementById('trade-hist-contact').value = '';
  document.getElementById('trade-hist-received').value = '';
  document.getElementById('trade-hist-notes').value = '';
  const sentContainer = document.getElementById('trade-hist-sent-list');
  const offers = collectAllDuplicates().filter(it => !pendingTrades[it.key]);
  if (sentContainer) {
    sentContainer.innerHTML = offers.length > 0
      ? offers.map(it => `<label style="display:flex;align-items:center;gap:8px;padding:5px 0;font-size:12px;cursor:pointer;border-bottom:0.5px solid var(--color-border-tertiary);">${it.flag}<input type="checkbox" value="${escapeHtml(it.key)}" style="accent-color:#667eea;flex-shrink:0;"> <span style="color:var(--color-text-primary);">${it.mainLabel}</span><span style="font-size:11px;color:var(--color-text-secondary);margin-left:auto;">${it.subLabel.split('·')[0].trim()}</span></label>`).join('')
      : '<p style="font-size:13px;color:var(--color-text-secondary);text-align:center;padding:8px 0;">Sem duplicatas disponíveis</p>';
  }
  document.getElementById('trade-history-modal')?.classList.add('active');
}

function closeRegisterTradeModal() {
  document.getElementById('trade-history-modal')?.classList.remove('active');
}

function saveTradeRecord() {
  const partner = (document.getElementById('trade-hist-partner')?.value || '').trim();
  if (!partner) { showToast('Informe o nome do parceiro'); return; }
  const sentChecked = [...(document.querySelectorAll('#trade-hist-sent-list input[type=checkbox]:checked') || [])];
  const sent = sentChecked.map(cb => ({ key: cb.value, label: formatStickerLabel(cb.value) }));
  const receivedRaw = (document.getElementById('trade-hist-received')?.value || '').trim();
  const received = receivedRaw ? receivedRaw.split('\n').map(l => l.trim()).filter(Boolean).map(l => ({ label: l })) : [];
  const record = {
    id: Date.now(),
    date: new Date().toLocaleDateString('pt-BR'),
    partnerName: partner,
    partnerContact: (document.getElementById('trade-hist-contact')?.value || '').trim(),
    sent, received,
    notes: (document.getElementById('trade-hist-notes')?.value || '').trim()
  };
  const creditsEarned = sent.reduce((sum, { key }) => sum + creditValueForKey(key), 0) || sent.length;
  tradeCredits += creditsEarned;
  localStorage.setItem('copaCredits', String(tradeCredits));
  tradeHistory.unshift(record);
  localStorage.setItem('copaHistory', JSON.stringify(tradeHistory));
  sent.forEach(({ key }) => {
    if ((duplicates[key] || 0) > 1) duplicates[key]--;
    else delete duplicates[key];
    delete pendingTrades[key];
  });
  localStorage.setItem('copaDuplicates', JSON.stringify(duplicates));
  localStorage.setItem('copaPending', JSON.stringify(pendingTrades));
  closeRegisterTradeModal();
  renderTrocas(); renderPaises(); updateStats(); renderTradeHistory();
  const credEl = document.getElementById('community-credits-count');
  if (credEl) credEl.textContent = tradeCredits;
  showToast(`Troca registrada! +${creditsEarned} crédito${creditsEarned !== 1 ? 's' : ''} 🪙`);
}

function deleteTradeRecord(id) {
  if (!confirm('Remover este registro?')) return;
  tradeHistory = tradeHistory.filter(r => r.id !== id);
  localStorage.setItem('copaHistory', JSON.stringify(tradeHistory));
  renderTradeHistory();
  showToast('Registro removido');
}

function renderTradeHistory() {
  const container = document.getElementById('trade-history-list');
  if (!container) return;
  if (tradeHistory.length === 0) {
    container.innerHTML = '<p style="font-size:13px;color:var(--color-text-secondary);text-align:center;padding:1rem 0;">Nenhuma troca registrada ainda</p>';
    return;
  }
  container.innerHTML = tradeHistory.slice(0, 30).map(r => `
    <div style="background:var(--color-background-secondary);border-radius:12px;padding:12px;border:0.5px solid var(--color-border-tertiary);margin-bottom:8px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:5px;">
        <div>
          <div style="font-size:13px;font-weight:700;color:var(--color-text-primary);">${escapeHtml(r.partnerName)}${r.partnerContact ? ` · <span style="font-weight:400;">${escapeHtml(r.partnerContact)}</span>` : ''}</div>
          <div style="font-size:11px;color:var(--color-text-secondary);">${r.date}</div>
        </div>
        <button onclick="deleteTradeRecord(${r.id})" style="background:none;border:none;cursor:pointer;font-size:14px;color:var(--color-text-secondary);padding:2px 4px;">🗑️</button>
      </div>
      ${r.sent.length > 0 ? `<div style="font-size:11px;color:#27AE60;margin-bottom:2px;">✅ Enviou: ${r.sent.map(s => escapeHtml(s.label)).join(' · ')}</div>` : ''}
      ${r.received.length > 0 ? `<div style="font-size:11px;color:#3498DB;margin-bottom:2px;">📥 Recebeu: ${r.received.map(s => escapeHtml(s.label)).join(' · ')}</div>` : ''}
      ${r.notes ? `<div style="font-size:11px;font-style:italic;color:var(--color-text-secondary);margin-top:3px;">${escapeHtml(r.notes)}</div>` : ''}
    </div>`).join('');
}

// ============================================================================
// COMMUNITY & SHARING
// ============================================================================

// --- Profile helpers ---

function getAvatarColor(name) {
  const palette = ['#667eea','#764ba2','#FA709A','#27AE60','#E74C3C','#3498DB','#F39C12','#16A085','#8E44AD','#D35400'];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  return palette[Math.abs(h) % palette.length];
}

function getInitials(name) {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0].toUpperCase()).join('');
}

function updateProfileAvatar() {
  const name = (document.getElementById('profile-name')?.value || '').trim();
  const el = document.getElementById('profile-avatar-preview');
  if (!el) return;
  if (name) {
    el.textContent = getInitials(name);
    el.style.background = getAvatarColor(name);
  } else {
    el.textContent = '?';
    el.style.background = 'linear-gradient(135deg,#667eea,#764ba2)';
  }
}

function updateOnboardAvatar() {
  const name = (document.getElementById('onboard-name')?.value || '').trim();
  const el = document.getElementById('onboard-avatar');
  if (!el) return;
  if (name) {
    el.textContent = getInitials(name);
    el.style.background = getAvatarColor(name);
  } else {
    el.textContent = '🏆';
    el.style.background = 'linear-gradient(135deg,#667eea,#764ba2)';
  }
}

function renderProfileCard() {
  const cardEl = document.getElementById('profile-card');
  const formEl = document.getElementById('profile-form');
  const cancelBtn = document.getElementById('profile-cancel-btn');
  const saveBtn = document.getElementById('profile-save-btn');
  if (!cardEl || !formEl) return;

  if (communityProfile.name) {
    const color = getAvatarColor(communityProfile.name);
    const initials = getInitials(communityProfile.name);
    cardEl.innerHTML = `
      <div style="display:flex;align-items:center;gap:16px;">
        <div style="width:56px;height:56px;border-radius:50%;background:${color};display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:white;flex-shrink:0;box-shadow:0 4px 14px ${color}55;">${escapeHtml(initials)}</div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:16px;font-weight:700;color:var(--color-text-primary);margin-bottom:3px;">${escapeHtml(communityProfile.name)}</div>
          ${communityProfile.email ? `<div style="font-size:12px;color:var(--color-text-secondary);margin-bottom:1px;">✉️ ${escapeHtml(communityProfile.email)}</div>` : ''}
          ${communityProfile.contact ? `<div style="font-size:12px;color:var(--color-text-secondary);">📱 ${escapeHtml(communityProfile.contact)}</div>` : ''}
        </div>
        <button onclick="startEditProfile()" style="flex-shrink:0;padding:8px 12px;background:var(--color-background-secondary);border:0.5px solid var(--color-border-tertiary);border-radius:8px;cursor:pointer;font-size:12px;font-weight:600;color:var(--color-text-primary);">✏️ Editar</button>
      </div>`;
    cardEl.style.display = 'block';
    formEl.style.display = 'none';
  } else {
    cardEl.style.display = 'none';
    formEl.style.display = 'block';
    if (cancelBtn) cancelBtn.style.display = 'none';
    if (saveBtn) saveBtn.style.gridColumn = '1 / -1';
  }

  // Pre-fill form fields
  const nameEl = document.getElementById('profile-name');
  const emailEl = document.getElementById('profile-email');
  const contactEl = document.getElementById('profile-contact');
  if (nameEl) nameEl.value = communityProfile.name || '';
  if (emailEl) emailEl.value = communityProfile.email || '';
  if (contactEl) contactEl.value = communityProfile.contact || '';
  updateProfileAvatar();
}

function startEditProfile() {
  const formEl = document.getElementById('profile-form');
  const cardEl = document.getElementById('profile-card');
  const cancelBtn = document.getElementById('profile-cancel-btn');
  const saveBtn = document.getElementById('profile-save-btn');
  if (formEl) formEl.style.display = 'block';
  if (cardEl) cardEl.style.display = 'none';
  if (cancelBtn) cancelBtn.style.display = 'block';
  if (saveBtn) saveBtn.style.gridColumn = '2';
}

function cancelEditProfile() {
  renderProfileCard();
}

function saveCommunityProfile() {
  const name = (document.getElementById('profile-name')?.value || '').trim();
  if (!name) { showToast('Por favor, informe seu nome'); return; }
  communityProfile.name = name;
  communityProfile.email = (document.getElementById('profile-email')?.value || '').trim();
  communityProfile.contact = (document.getElementById('profile-contact')?.value || '').trim();
  localStorage.setItem('copaProfile', JSON.stringify(communityProfile));
  renderComunidade();
  showToast('Perfil salvo! ✅');
}

// --- Onboarding ---

function checkOnboarding() {
  if (!communityProfile.name) {
    document.getElementById('onboarding-modal')?.classList.add('active');
  }
}

function saveOnboardingProfile() {
  const name = (document.getElementById('onboard-name')?.value || '').trim();
  if (!name) { showToast('Por favor, informe seu nome'); return; }
  const raw = (document.getElementById('onboard-contact')?.value || '').trim();
  communityProfile.name = name;
  if (raw.includes('@')) { communityProfile.email = raw; }
  else if (raw) { communityProfile.contact = raw; }
  localStorage.setItem('copaProfile', JSON.stringify(communityProfile));
  document.getElementById('onboarding-modal')?.classList.remove('active');
  showToast('Perfil criado! 🎉');
}

function skipOnboarding() {
  document.getElementById('onboarding-modal')?.classList.remove('active');
}

function getMyOffersList() {
  return Object.entries(duplicates)
    .filter(([, count]) => count > 0)
    .map(([key, count]) => ({ key, count }));
}

function getMyNeedsList() {
  const needs = [];
  Object.values(countries).forEach(list => {
    list.forEach(([, code]) => {
      for (let i = 1; i <= 20; i++) {
        if (!stickers[`${code}-${i}`]) needs.push(`${code}-${i}`);
      }
    });
  });
  for (let i = 1; i <= 14; i++) {
    if (!stickers[`refri-${i}`]) needs.push(`refri-${i}`);
  }
  for (let i = 0; i <= 19; i++) {
    if (!stickers[`history-${i}`]) needs.push(`history-${i}`);
  }
  legendPlayers.forEach((_, idx) => {
    legendRarities.forEach(r => {
      if (!stickers[`legend-${idx}-${r.id}`]) needs.push(`legend-${idx}-${r.id}`);
    });
  });
  return needs;
}

function formatStickerLabel(key) {
  const parts = key.split('-');
  if (parts[0] === 'refri') {
    const n = parseInt(parts[1]);
    const player = refriPlayers[n];
    return `CC ${String(n).padStart(2, '0')}${player ? ' – ' + player.name : ''}`;
  }
  if (parts[0] === 'history') {
    return `FWC ${String(parseInt(parts[1])).padStart(2, '0')}`;
  }
  if (parts[0] === 'legend') {
    const idx = parseInt(parts[1]);
    const rarityId = parts.slice(2).join('-');
    const player = legendPlayers[idx];
    const rarity = legendRarities.find(r => r.id === rarityId);
    return `Legend – ${player ? player.name : `#${idx}`}${rarity ? ` (${rarity.label})` : ''}`;
  }
  const num = parts[parts.length - 1];
  const code = parts.slice(0, -1).join('-');
  const playerName = playerData[code]?.[parseInt(num)];
  let countryName = '';
  for (const list of Object.values(countries)) {
    for (const [name, c] of list) {
      if (c === code) { countryName = name; break; }
    }
    if (countryName) break;
  }
  return `${countryName || code} #${num}${playerName ? ' – ' + playerName : ''}`;
}

function formatOfferText() {
  const offers = getFilteredOffersList();
  const needs = getFilteredNeedsList();
  const name = communityProfile.name || 'Usuário';
  const collected = Object.values(stickers).filter(Boolean).length;

  let text = `🎴 Copa 2026 – ${name}\n`;
  text += `📊 ${collected} figurinhas coletadas\n\n`;

  if (offers.length > 0) {
    text += `✅ TENHO PARA TROCAR (${offers.length}):\n`;
    offers.forEach(({ key, count }) => {
      text += `• ${formatStickerLabel(key)}${count > 1 ? ` (×${count})` : ''}\n`;
    });
    text += '\n';
  } else {
    text += `✅ Sem duplicatas no momento\n\n`;
  }

  const wlArr = [...wishlist].filter(k => !stickers[k]);
  if (wlArr.length > 0) {
    text += `❤️ LISTA DE DESEJOS – prioridade (${wlArr.length}):\n`;
    wlArr.slice(0, 15).forEach(k => { text += `• ${formatStickerLabel(k)}\n`; });
    if (wlArr.length > 15) text += `... e mais ${wlArr.length - 15}\n`;
    text += '\n';
  }

  if (needs.length > 0) {
    text += `❌ PRECISO (${needs.length}):\n`;
    needs.slice(0, 20).forEach(key => { text += `• ${formatStickerLabel(key)}\n`; });
    if (needs.length > 20) text += `... e mais ${needs.length - 20}\n`;
  } else {
    text += `🏆 Álbum completo!\n`;
  }

  if (communityProfile.contact) text += `\n📱 Contato: ${communityProfile.contact}`;
  return text;
}

function copyOfferText() {
  copyToClipboard(formatOfferText(), 'Oferta copiada!');
}

function shareOfferWhatsApp() {
  shareViaWhatsApp(formatOfferText());
}

function shareAppWhatsApp() {
  const appUrl = location.origin + location.pathname;
  const name = communityProfile.name ? ` – ${communityProfile.name}` : '';
  const text = `🏆 Copa 2026 – Controle de Figurinhas${name}\n\nAcompanhe sua coleção em tempo real! Marque o que tem, gerencie duplicatas e saiba o que falta para completar o álbum.\n\n📲 Acesse: ${appUrl}\n\n_Funciona offline! Instale como app no celular._`;
  shareViaWhatsApp(text);
}

function copyAppLink() {
  copyToClipboard(location.origin + location.pathname, 'Link copiado!');
}

function nativeShare() {
  if (navigator.share) {
    navigator.share({
      title: 'Copa 2026 – Controle de Figurinhas',
      text: 'Gerencie sua coleção de figurinhas da Copa 2026!',
      url: location.origin + location.pathname
    }).catch(() => {});
  } else {
    copyAppLink();
  }
}

function copyTradeLink() {
  try {
    const offers = getFilteredOffersList().map(({ key, count }) => `${key}:${count}`).join(',');
    const needs = getFilteredNeedsList().slice(0, 60).join(',');
    const payload = btoa(unescape(encodeURIComponent(JSON.stringify({
      n: communityProfile.name || '',
      c: communityProfile.contact || '',
      o: offers,
      w: needs
    }))));
    copyToClipboard(`${location.origin}${location.pathname}#trade=${payload}`, 'Link de trocas copiado!');
  } catch {
    showToast('Erro ao gerar link');
  }
}

function shareViaWhatsApp(text) {
  window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
}

function copyToClipboard(text, successMsg) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast(successMsg)).catch(() => fallbackCopy(text, successMsg));
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0;';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); showToast(successMsg); } catch {}
  document.body.removeChild(ta);
}

function showToast(msg) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.style.cssText = 'position:fixed;bottom:32px;left:50%;transform:translateX(-50%);background:#1a1a2e;color:#fff;padding:10px 22px;border-radius:24px;font-size:13px;font-weight:600;z-index:9999;pointer-events:none;transition:opacity 0.3s;box-shadow:0 4px 16px rgba(0,0,0,0.3);opacity:0;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.style.opacity = '0'; }, 2200);
}

let _qrGenerated = false;

function renderComunidade() {
  renderProfileCard();
  renderTrocas();
  renderWishlist();
  renderTradeHistory();
  renderOfferFilterChips();

  const offers = getFilteredOffersList();
  const needs = getFilteredNeedsList();

  const offersCountEl = document.getElementById('community-offers-count');
  const needsCountEl = document.getElementById('community-needs-count');
  const previewEl = document.getElementById('community-offer-preview');
  const urlEl = document.getElementById('community-app-url');
  const credEl = document.getElementById('community-credits-count');

  if (offersCountEl) offersCountEl.textContent = offers.length;
  if (needsCountEl) needsCountEl.textContent = needs.length;
  if (previewEl) previewEl.textContent = formatOfferText();
  if (credEl) credEl.textContent = tradeCredits;

  const appUrl = location.origin + location.pathname;
  if (urlEl) urlEl.textContent = appUrl;

  if (!_qrGenerated) {
    const qrEl = document.getElementById('qr-container');
    if (qrEl && typeof QRCode !== 'undefined') {
      qrEl.innerHTML = '';
      new QRCode(qrEl, {
        text: appUrl,
        width: 160,
        height: 160,
        colorDark: '#111827',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M
      });
      _qrGenerated = true;
    }
  }
}

function checkIncomingTradeLink() {
  const hash = location.hash;
  if (!hash.startsWith('#trade=')) return;
  try {
    const payload = JSON.parse(decodeURIComponent(escape(atob(hash.slice(7)))));
    history.replaceState(null, '', location.pathname);
    showIncomingTradeOffer(payload);
  } catch {
    // invalid hash, ignore
  }
}

function showIncomingTradeOffer(payload) {
  const name = payload.n || 'Usuário';
  const offerKeys = payload.o ? payload.o.split(',').map(s => s.split(':')[0]).filter(Boolean) : [];
  const needKeys = payload.w ? payload.w.split(',').filter(Boolean) : [];

  const myNeeds = new Set(getMyNeedsList());
  const myOfferKeys = new Set(getMyOffersList().map(o => o.key));

  const theyHaveWhatINeed = offerKeys.filter(k => myNeeds.has(k));
  const iHaveWhatTheyNeed = needKeys.filter(k => myOfferKeys.has(k));

  let msg = `🎴 Proposta de troca de ${name}!\n\n`;
  if (theyHaveWhatINeed.length > 0) {
    msg += `✅ Eles TÊM ${theyHaveWhatINeed.length} que você PRECISA:\n`;
    theyHaveWhatINeed.slice(0, 8).forEach(k => { msg += `  • ${formatStickerLabel(k)}\n`; });
    if (theyHaveWhatINeed.length > 8) msg += `  ... e mais ${theyHaveWhatINeed.length - 8}\n`;
    msg += '\n';
  } else {
    msg += `❌ Eles não têm figurinhas que você precisa no momento\n\n`;
  }
  if (iHaveWhatTheyNeed.length > 0) {
    msg += `🔄 Você TEM ${iHaveWhatTheyNeed.length} que eles PRECISAM:\n`;
    iHaveWhatTheyNeed.slice(0, 8).forEach(k => { msg += `  • ${formatStickerLabel(k)}\n`; });
    if (iHaveWhatTheyNeed.length > 8) msg += `  ... e mais ${iHaveWhatTheyNeed.length - 8}\n`;
    msg += '\n';
  }
  if (payload.c) msg += `📱 Contato: ${payload.c}`;

  setTimeout(() => alert(msg), 600);
}

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Service Worker Registration
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => console.log('ServiceWorker registrado:', reg.scope))
      .catch((err) => console.log('Falha no ServiceWorker:', err));
  }
  
  // Search Listeners
  const searchPaises = document.getElementById('search-paises');
  const searchNumber = document.getElementById('search-number');
  
  if (searchPaises && searchNumber) {
    const updateFilter = () => {
      searchFilter = parseSearch(searchPaises.value, searchNumber.value);
      renderPaises();
    };
    
    searchPaises.addEventListener('input', updateFilter);
    searchNumber.addEventListener('input', updateFilter);
  }
  
  // Initial Render
  renderPaises();
  renderRefri();
  renderHistory();
  renderLegends();
  renderTrocas();
  updateStats();
  switchDashboardView('continents');
  checkIncomingTradeLink();
  checkOnboarding();
});