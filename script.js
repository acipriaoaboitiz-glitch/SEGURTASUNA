const threats = {
  phisinga: {
    number: '01', name: 'Phishinga', category: 'Engainu soziala', color: 'coral',
    image: 'images/definition-01.jpg', imageAlt: 'Pertsona bat banku-txartelarekin ordenagailu eramangarri baten aurrean',
    short: 'Konfiantzazko itxura duen mezu baten bidez zure datuak lortzea.',
    definition: 'Mezu edo posta elektroniko faltsuen bidez zure datu pertsonalak, hala nola pasahitzak eta banku-zenbakiak, lapurtzeko erabiltzen den engainua.',
    sourceUrl: 'https://www.malwarebytes.com/phishing', sourceLabel: 'Malwarebytes',
    caseYear: '2016', caseTitle: 'John Podestaren phishing-a',
    caseText: 'AEBetako hauteskunde-kanpainako arduradun batek Google-ren segurtasun-alerta faltsu baten esteka sakatu zuen; kontua arriskuan geratu zen.',
    realExample: 'Bankuaren logotipoa duen SMS faltsu batek esteka batera sartzeko eskatzen dizu, kontua blokeatuko dutela esanez.',
    characteristics: ['Mezu faltsuak edo dei engainagarriak', 'Premia eta beldurra sortzen ditu', 'Pasahitzak edo banku-datuak eskatzen ditu'],
    works: ['Mezu edo dei sinesgarri bat jasotzen duzu.', 'Esteka edo eranskin batera joateko eskatzen dizute.', 'Web faltsuan datuak sartzean, erasotzaileak eskuratzen ditu.'],
    signs: ['Premiazko edo beldurra sortzen duen mezua', 'Helbide arraroa edo akats ortografikoak', 'Pasahitza edo ordainketa eskatzea'],
    securityImpacts: [
      { name: 'Konfidentzialtasuna', explanation: 'Phishingak pasahitzak, banku-datuak edo bestelako informazio pribatua lortzea du helburu.' },
      { name: 'Autentifikazioa', explanation: 'Bidaltzaile edo webgune fidagarri baten itxura egiten du, eta lapurtutako kredentzialek biktimaren kontuan sartzeko aukera eman dezakete.' }
    ],
    protect: 'Ez sakatu esteka susmagarririk. Egiaztatu bidaltzailea beste kanal ofizial baten bidez eta aktibatu bi urratseko autentifikazioa.'
  },
  'biren-erasoa': {
    number: '02', name: 'Indar gordineko erasoa', category: 'Sarbide-erasoa', color: 'lime',
    image: 'images/definition-02.jpg', imageAlt: 'Ordenagailu-pantailan agertzen den kodea',
    short: 'Pasahitzak behin eta berriz probatuz kontu batera sartzeko saiakera.',
    definition: 'Pasahitz posible asko automatikoki probatuz kontu edo sistema batera sartzen saiatzen den erasoa.',
    sourceUrl: 'https://www.threatdown.com/glossary/what-is-a-brute-force-attack/', sourceLabel: 'ThreatDown',
    caseYear: 'ADIBIDEA', caseTitle: 'Pasahitzak automatikoki probatzea',
    caseText: 'Erasotzaileek automatizatutako tresnak erabil ditzakete pasahitz-konbinazio asko probatzeko, zuzena aurkitu arte.',
    realExample: 'Erasotzaile batek sare sozial bateko kontuan pasahitz-konbinazio ugari probatzen ditu, saioa lortu arte.',
    characteristics: ['Saiakera automatiko asko', 'Pasahitz ahulak aprobetxatzen ditu', 'Kontua blokeatzea eragin dezake'],
    works: ['Programak pasahitz-konbinazio ugari sortzen ditu.', 'Sistemak saio-hasiera bakoitza egiaztatzen du.', 'Konbinazioa zuzena bada, kontua arriskuan geratzen da.'],
    signs: ['Saio-hasiera hutsen jakinarazpenak', 'Kontua aldi baterako blokeatzea', 'Kokapen ezezaguneko saio aktiboak'],
    securityImpacts: [
      { name: 'Autentifikazioa', explanation: 'Erasotzaileak pasahitz-konbinazioak probatzen ditu erabiltzailearen identitatea ordezkatu eta saioa hasteko.' },
      { name: 'Konfidentzialtasuna', explanation: 'Pasahitza asmatuz gero, baimenik gabeko sarbidea lor dezake kontuko informazio pribatura.' },
      { name: 'Erabilgarritasuna', explanation: 'Saio-hasierako saiakera ugarik kontua blokeatzea edo zerbitzua moteltzea eragin dezakete.' }
    ],
    protect: 'Erabili pasahitz luze eta bakarra, saio-hasiera saiakerak mugatu eta gaitu bi urratseko autentifikazioa.'
  },
  troiarra: {
    number: '03', name: 'Troiarra', category: 'Malwarea', color: 'blue',
    image: 'images/definition-08.jpg', imageAlt: 'Ordenagailu eta bideojoko klasikoak, programa erakargarri baten adibide',
    short: 'Aplikazio edo fitxategi erabilgarriaren itxurapean ezkutatzen den programa kaltegarria.',
    definition: 'Programa erabilgarri eta seguru baten itxura duen mehatxua; kalterik egiten ez duela dirudi, baina barruan arriskua ezkutatzen du.',
    sourceUrl: 'https://www.malwarebytes.com/trojan', sourceLabel: 'Malwarebytes',
    caseYear: '2007', caseTitle: 'Zeus troiarra',
    caseText: 'Zeus troiarrak milaka ordenagailu kutsatu zituen eta online bankuko datuak lapurtu zituen, programa arrunt baten itxurapean.',
    realExample: 'Doako joko edo programa baten instalatzaileak itxura normala du, baina atzean malwarea instalatzen du.',
    characteristics: ['Programa legitimo baten itxura', 'Erabiltzaileak instalatu behar du', 'Ezkutuan jarduten du'],
    works: ['Programa erakargarri edo erabilgarri baten itxura hartzen du.', 'Erabiltzaileak instalatu edo exekutatu egiten du.', 'Atzealdean, erasotzailearekin komunikatzen da.'],
    signs: ['Iturri ezezaguneko instalatzaileak', 'Gailua motelago edo ezegonkorrago egotea', 'Aplikazio ezezagunak agertzea'],
    securityImpacts: [
      { name: 'Konfidentzialtasuna', explanation: 'Troiar motaren arabera, ezkutuan datuak bildu eta erasotzaileari bidal diezazkioke.' },
      { name: 'Osotasuna', explanation: 'Instalatutako programa kaltegarriak fitxategiak edo sistemaren konfigurazioa alda ditzake.' },
      { name: 'Autentifikazioa', explanation: 'Troiarrak pasahitzak lapurtu edo erasotzaileari urruneko sarbidea eman diezaioke.' },
      { name: 'Erabilgarritasuna', explanation: 'Karga kaltegarriak sistema kaltetu edo gailua eta fitxategiak erabilezin bihur ditzake.' }
    ],
    protect: 'Deskargatu aplikazioak iturri ofizialetatik, mantendu antibirusa eguneratuta eta ez exekutatu jatorri ezezaguneko fitxategirik.'
  },
  backdoorsak: {
    number: '04', name: 'Backdoorsak', category: 'Sarbide ezkutua', color: 'dark',
    image: 'images/definition-04.jpg', imageAlt: 'Sareko konexio eta sarbide ugari dituen routerra',
    short: 'Segurtasun-kontrolak saihestuz sistema batera sartzeko ate ezkutuak.',
    definition: 'Gailu baten segurtasuna saihestuz, erasotzaile bati ezkutuan sartzeko eta sistema urrunetik kontrolatzeko bidea ematen dioten sarrera ezkutuak.',
    sourceUrl: 'https://www.malwarebytes.com/backdoor', sourceLabel: 'Malwarebytes',
    caseYear: '2020', caseTitle: 'SUNBURST / SolarWinds',
    caseText: 'SolarWinds Orion softwarearen eguneratze batean atzeko atea ezkutatu zen; erakunde askoren sistemetara sartzeko erabili zuten.',
    realExample: 'Router batean administratzailearen pasahitz lehenetsia aldatu gabe uzteak erasotzaileari sarbide ezkutua eman diezaioke.',
    characteristics: ['Sarbide arrunta saihesten du', 'Ezkutuan mantentzen saiatzen da', 'Sistema urrunetik kontrolatzeko balio dezake'],
    works: ['Kode edo konfigurazio batek sarbide berezia uzten du.', 'Erasotzaileak ate hori aurkitu edo aktibatzen du.', 'Sisteman jardun dezake ohiko erabiltzaile gisa agertu gabe.'],
    signs: ['Erabiltzaile edo zerbitzu ezezagunak', 'Sareko konexio arraroak', 'Sistemaren ezarpen aldaketak baimenik gabe'],
    securityImpacts: [
      { name: 'Autentifikazioa', explanation: 'Atzeko ateak ohiko saio-hasiera edo sarbide-kontrolak saihesteko aukera ematen dio erasotzaileari.' },
      { name: 'Konfidentzialtasuna', explanation: 'Sarbide ezkutuak datu edo fitxategi pribatuak ikustea eta ateratzea ahalbidetu dezake.' },
      { name: 'Osotasuna', explanation: 'Erasotzaileak urruneko aginduak exekutatu eta fitxategiak edo konfigurazioa alda ditzake.' },
      { name: 'Erabilgarritasuna', explanation: 'Sistemaren kontrola lortuta, zerbitzuak eten edo datuak erabilezin bihur ditzake.' }
    ],
    protect: 'Eguneratu softwarea, kendu erabiltzaile lehenetsiak, itxi behar ez diren zerbitzuak eta berrikusi sarbide-erregistroak.'
  },
  spywarea: {
    number: '05', name: 'Spywarea', category: 'Zaintza digitala', color: 'yellow',
    image: 'images/definition-05.jpg', imageAlt: 'Pertsona bat pantailan dagoen informazioa begiratzen',
    short: 'Zure jarduera ezkutuan monitorizatu eta informazioa biltzen duen softwarea.',
    definition: 'Zure gailuan zer egiten duzun (bisitatutako orriak, sakatutako teklak...) ezkutuan espiatzen eta datu horiek biltzen dituen programa.',
    sourceUrl: 'https://www.malwarebytes.com/spyware', sourceLabel: 'Malwarebytes',
    caseYear: '2016', caseTitle: 'Pegasus spywarea',
    caseText: 'Pegasus spywarea telefonoak urrunetik zelatatzeko erabili izan da; mezuak, deiak eta kokapena eskuratzeko gai zen.',
    realExample: 'Aplikazio susmagarri batek teklatuan idazten dituzun pasahitzak eta bisitatzen dituzun webguneak grabatzen ditu.',
    characteristics: ['Jarduera isilean monitorizatzen du', 'Teklak edo nabigazioa graba ditzake', 'Datuak urruneko zerbitzari batera bidal ditzake'],
    works: ['Gailuan ezkutuan instalatzen da.', 'Atzealdean jarduera eta datuak biltzen ditu.', 'Informazioa urruneko zerbitzari batera bidal dezake.'],
    signs: ['Bateria edo datu mugikorrak ohikoa baino gehiago kontsumitzea', 'Popup eta birzuzenketa ezezagunak', 'Pribatutasun-ezarpen aldaketak'],
    securityImpacts: [
      { name: 'Konfidentzialtasuna', explanation: 'Spywareak nabigazioa, mezuak edo bestelako datu pribatuak ezkutuan bildu eta bidal ditzake.' },
      { name: 'Autentifikazioa', explanation: 'Teklak edo saio-hasierako datuak grabatzen baditu, erasotzaileak erabiltzailearen kontuak ordezka ditzake.' }
    ],
    protect: 'Berrikusi aplikazioen baimenak, desinstalatu ezezagunak direnak eta egin segurtasun-azterketak software fidagarriarekin.'
  },
  stealerrak: {
    number: '06', name: 'Stealerrak', category: 'Datu-lapurreta', color: 'violet',
    image: 'images/definition-06.jpg', imageAlt: 'Ordenagailuan erakusten diren erabiltzaile-datu eta grafikoak',
    short: 'Nabigatzaile eta aplikazioetan gordetako datuak lapurtzeko malwarea.',
    definition: 'Nabigatzaileetan gordetako kredentzialak, bereziki pasahitzak, bildu eta lapurtzen dituen malware mota.',
    sourceUrl: 'https://attack.mitre.org/techniques/T1555/003/', sourceLabel: 'MITRE ATT&CK',
    caseYear: 'ADIBIDEA', caseTitle: 'Nabigatzailean gordetako kredentzialak',
    caseText: 'Malwareak nabigatzaile batean gordetako kredentzialak bildu eta erasotzaileari bidal diezazkioke.',
    realExample: 'Deskarga susmagarri batek nabigatzailean gordetako pasahitzak kopiatzen ditu.',
    characteristics: ['Nabigatzaileetan gordetako kredentzialak bilatzen ditu', 'Pasahitzak lapur ditzake', 'Informazioa erasotzaileari bidal diezaioke'],
    works: ['Malwarea fitxategi edo deskarga baten bidez iristen da.', 'Gailuko aplikazio eta nabigatzaileak aztertzen ditu.', 'Aurkitutako datuak erasotzaileari bidaltzen dizkio.'],
    signs: ['Kontuetan baimenik gabeko saioak', 'Nabigatzaileko saioak itxi edo aldatu izana', 'Antibirusak fitxategi susmagarriak detektatzea'],
    securityImpacts: [
      { name: 'Konfidentzialtasuna', explanation: 'Stealer-ak nabigatzailean gordetako pasahitzak eta bestelako kredentzialak lapurtzen ditu.' },
      { name: 'Autentifikazioa', explanation: 'Lapurtutako kredentzialekin, erasotzailea biktima balitz bezala sar daiteke kontuetan.' }
    ],
    protect: 'Ez gorde datu kritikoak nabigatzailean, erabili pasahitz-kudeatzailea, aldatu pasahitzak infekzioaren ondoren eta amaitu saio guztiak.'
  },
  koobface: {
    number: '07', name: 'Koobface', category: 'Sare sozialetako malwarea', color: 'coral',
    image: 'images/definition-16.jpg', imageAlt: 'Hainbat pertsona gailu digitalen inguruan lanean',
    short: 'Sare sozialen bidez zabaltzen den harra, bideo faltsuen amuarekin.',
    definition: 'Koobface Facebook izenarekin hitz-jokoa egiten duen harra da, sare sozialen bidez zabaltzen dena. Kontaktu baten itxurazko mezu batean bideo faltsu baterako esteka bidaltzen dizu; klik eginez gero, ordenagailua kutsa dezake eta zure informazioa lapurtu.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Koobface', sourceLabel: 'Wikipedia',
    caseYear: '2008', caseTitle: 'Koobface harra',
    caseText: 'Koobface sare sozialetako kontuen bidez zabaldu zen, erabiltzaileak bideo faltsuak ikustera erakarriz.',
    realExample: 'Lagun baten kontutik bideo bat ikusteko esteka iristen zaizu. Estekan klik egin ondoren, fitxategi bat deskargatzeko eskatzen dizu.',
    characteristics: ['Kontaktu ezagun baten mezua imitatzen du', 'Bideo edo esteka faltsuak erabiltzen ditu', 'Informazioa lapurtu edo malware gehiago instala dezake'],
    works: ['Mezu engainagarria sare sozial baten bidez iristen da.', 'Bideo faltsuaren estekan klik egitera edo fitxategia deskargatzera bultzatzen zaitu.', 'Exekutatzean, gailua kutsa dezake eta datuak lapurtu.'],
    signs: ['Bideo bat ikusteko deskarga ezezagunak eskatzea', 'Zure kontutik zuk bidali gabeko mezuak bidaltzea', 'Gailuan jarduera edo programa susmagarriak agertzea'],
    securityImpacts: [
      { name: 'Konfidentzialtasuna', explanation: 'Koobfacek kutsatutako gailuko informazioa lapur dezake.' },
      { name: 'Autentifikazioa', explanation: 'Kontaktu ezagun baten kontua imitatzen du eta kontu kutsatu batetik mezuak bidal ditzake.' },
      { name: 'Osotasuna', explanation: 'Kutsatutako kontua erabiliz baimenik gabeko mezuak bidaltzen ditu, erabiltzailearen komunikazioa aldatuz.' }
    ],
    protect: 'Ez ireki ustekabeko bideo-estekak, egiaztatu kontaktuarekin beste kanal baten bidez eta mantendu sistema eta antibirusa eguneratuta.'
  },
  botnet: {
    number: '08', name: 'Botnet', category: 'Gailu kutsatuen sarea', color: 'blue',
    image: 'images/definition-10.jpg', imageAlt: 'Gauez espaziotik ikusten den mundu konektatua',
    short: 'Erasotzaile batek urrunetik kontrolatzen duen gailu kutsatuen multzoa.',
    definition: 'Botnet bat ordenagailu eta beste gailu kutsatu askoren sarea da. Hacker batek urrunetik kontrolatzen ditu jabeak ohartu gabe, eta batera erabil ditzake spam-mezuak bidaltzeko edo webguneak blokeatzeko.',
    sourceUrl: 'https://www.malwarebytes.com/botnet', sourceLabel: 'Malwarebytes',
    caseYear: '2016', caseTitle: 'Mirai botneta',
    caseText: 'Mirai botnetak segurtasun eskaseko gailuak kutsatu zituen eta haiek batera erabili zituen zerbitzuen aurkako eraso handietan.',
    realExample: 'Zure routerra kutsatuta badago, erasotzaileak beste gailu kutsatu batzuekin batera erabil dezake webgune baten zerbitzaria gainkargatzeko.',
    characteristics: ['Gailu kutsatu asko biltzen ditu', 'Jabeek ez dute kontrola galdu dutela nabaritzen', 'Spam-a bidaltzeko edo zerbitzuak eteteko erabil daiteke'],
    works: ['Malwareak gailu bat kutsatzen du.', 'Gailua erasotzailearen urruneko kontrol-sistemarekin konektatzen da.', 'Botneteko gailuek aginduak batera betetzen dituzte.'],
    signs: ['Interneteko trafiko edo datu-kontsumo ezohikoa', 'Gailua motelago ibiltzea edo berotzea', 'Routerrean konexio ezezagunak agertzea'],
    securityImpacts: [
      { name: 'Erabilgarritasuna', explanation: 'Botnetak eskaera gehiegirekin zerbitzari edo webgune bat gainkargatu eta erabiltzaileentzat eskuraezin bihur dezake.' }
    ],
    protect: 'Eguneratu gailuen softwarea, aldatu routerraren pasahitz lehenetsia eta desgaitu erabiltzen ez dituzun urruneko sarbideak.'
  },
  'indar-gordineko-erasoa': {
    number: '09', name: 'Indar gordineko erasoa', category: 'Pasahitzen aurkako erasoa', color: 'violet',
    image: 'images/definition-13.jpg', imageAlt: 'Kodea duen ordenagailu eramangarri bat lan-mahai batean',
    short: 'Pasahitza asmatu arte konbinazio ugari automatikoki probatzea.',
    definition: 'Erasotzaileak automatikoki pasahitz-konbinazio ugari probatzen ditu zuzena aurkitu eta kontu edo sistema batera sartu arte.',
    sourceUrl: 'https://www.threatdown.com/glossary/what-is-a-brute-force-attack/', sourceLabel: 'ThreatDown',
    caseYear: 'ADIBIDEA', caseTitle: 'Pasahitzak probatzea',
    caseText: 'Pasahitz labur edo ohikoak automatikoki asmatzeko errazagoak dira; kontuetan saio-hasierako saiakera asko egiten dira.',
    realExample: 'Erasotzaileak kontu batean pasahitz-konbinazio ugari probatzen ditu, zuzena aurkitu eta saioa hasi arte.',
    characteristics: ['Saiakera asko automatikoki egiten ditu', 'Pasahitz labur edo arruntak aprobetxatzen ditu', 'Saiakerak mugatuta ez badaude arrakasta izan dezake'],
    works: ['Programak balizko pasahitz-konbinazioak sortzen ditu.', 'Konbinazio bakoitza kontuan saioa hasteko probatzen du.', 'Pasahitza asmatzen badu, erasotzailea kontuan sartzen da.'],
    signs: ['Saio-hasiera hutsen jakinarazpen ugari', 'Kontua aldi baterako blokeatzea', 'Zuk ezagutzen ez dituzun saio aktiboak'],
    securityImpacts: [
      { name: 'Autentifikazioa', explanation: 'Pasahitza asmatzen badu, erasotzaileak kontuaren benetako erabiltzailearen identitatea ordezkatzen du.' },
      { name: 'Konfidentzialtasuna', explanation: 'Kontura sartuz gero, erabiltzaileak babestutako informazioa irakur dezake.' },
      { name: 'Erabilgarritasuna', explanation: 'Saiakera ugariek kontua blokeatzea edo zerbitzua moteltzea eragin dezakete.' }
    ],
    protect: 'Erabili luzea eta bakarra den pasahitza, aktibatu bi urratseko autentifikazioa eta mugatu saio-hasierako saiakerak.'
  },
  notpetya: {
    number: '12', name: 'NotPetya', category: 'Malware suntsitzailea', color: 'coral',
    image: 'images/definition-11.jpg', imageAlt: 'Datu-zentro bateko zerbitzariak',
    short: 'Ukrainan hasi eta mundu osoko erakundeei eragin zien malware suntsitzailea.',
    definition: 'NotPetya 2017an zabaldu zen malware suntsitzailea izan zen. Ransomware itxura bazuen ere, fitxategiak berreskuratzeko ordainketa eskatzea baino gehiago, kutsatutako sistemak hondatzeko diseinatuta zegoen.',
    sourceUrl: 'https://www.microsoft.com/en-us/security/blog/2017/06/27/new-ransomware-old-techniques-petya-adds-worm-capabilities/', sourceLabel: 'Microsoft Security Blog',
    caseYear: '2017', caseTitle: 'NotPetya-ren mundu mailako erasoa',
    caseText: 'Microsoft-en arabera, lehen infekzioak Ukrainan detektatu ziren eta ondoren beste 64 herrialdetara zabaldu zen.',
    realExample: 'Enpresa baten sarean NotPetya sartu ondoren, ordenagailu askoren fitxategiak eta sistema abiarazteko informazioa hondatu zituen.',
    characteristics: ['Ransomware itxura zuen baina malware suntsitzailea zen', 'Ukrainan hasi eta nazioartean zabaldu zen', 'Enpresen eta erakundeen sistemak kaltetu zituen'],
    works: ['Sareko sistemetara iritsi eta kutsatutako ordenagailuetan aktibatzen zen.', 'Fitxategiak eta sistema berreskuratzeko beharrezko informazioa hondatzen zituen.', 'Erakunde bateko ordenagailu askori eragin ziezaiekeen.'],
    signs: ['Fitxategiak ireki edo sistema abiarazi ezin izatea', 'Erreskate-mezua agertzea', 'Sareko ordenagailu askok aldi berean huts egitea'],
    securityImpacts: [
      { name: 'Osotasuna', explanation: 'NotPetyak fitxategiak eta sistema abiarazteko informazioa hondatu edo aldatzen ditu.' },
      { name: 'Erabilgarritasuna', explanation: 'Sistema eta fitxategiak erabilezin uzten ditu, eta erakunde askoren jarduna eten dezake.' }
    ],
    protect: 'Eguneratu sistema eta softwarea, banatu sareak behar bezala, mugatu erabiltzaile-baimenak eta gorde sarera konektatuta ez dauden segurtasun-kopiak.'
  },
  stuxnet: {
    number: '13', name: 'Stuxnet', category: 'Industria-sistemei zuzendutako harra', color: 'blue',
    image: 'images/circuit-board.jpg', imageAlt: 'Osagai elektronikoak dituen zirkuitu-plaka',
    short: 'Industria-ekipoak kontrolatzen dituzten sistemak kaltetu zituen har informatikoa.',
    definition: 'Stuxnet har informatikoa industria-sistemetan hedatzeko eta kontrolagailu programagarri jakin batzuei eragiteko diseinatu zen. Kontrol-sistemaren funtzionamendua alda zezakeen, eta ezkutuan jarduten zuen.',
    sourceUrl: 'https://docs.broadcom.com/doc/security-response-w32-stuxnet-dossier-11-en', sourceLabel: 'Symantec (Broadcom)',
    caseYear: '2010', caseTitle: 'Industria-sistemen aurkako Stuxnet',
    caseText: 'Symantecen ikerketak Stuxneten kodea eta industria-kontrol sistemetan zuen eragina aztertu zituen.',
    realExample: 'Industria-ekipo bat kontrolatzen duen sistema kutsatuz gero, haren funtzionamendua baimenik gabe alda dezake.',
    characteristics: ['Industria-kontrol sistemak zituen helburu', 'Sareko ekipoen artean heda zitekeen', 'Kontrol-ekipoen funtzionamendua ezkutuan alda zezakeen'],
    works: ['Sistema informatiko batera iristen zen.', 'Sareko beste ekipoetara heda zitekeen.', 'Industria-ekipo jakin bat kontrolatzen zuten aginduak alda zitzakeen.'],
    signs: ['Kontrol-sistemaren portaera ezohikoa', 'Industria-ekipoen funtzionamendu-aldaketak', 'Segurtasun-tresnek detektatutako fitxategi susmagarriak'],
    securityImpacts: [
      { name: 'Osotasuna', explanation: 'Kontrol-sistemako aginduak alda zitzakeen, eta horrek industria-ekipoen funtzionamendu zuzena hausten zuen.' },
      { name: 'Erabilgarritasuna', explanation: 'Ekipoen funtzionamendua kaltetuz gero, industria-prozesua eten edo erabilezin gera zitekeen.' }
    ],
    protect: 'Mantendu industria-sistemak eta softwarea eguneratuta, mugatu sareetarako sarbidea, erabili baimen egokiak eta egin konfigurazioen segurtasun-kopiak.'
  },
  cryptolocker: {
    number: '11', name: 'CryptoLocker', category: 'Ransomware erasoa', color: 'blue',
    image: 'images/definition-11.jpg', imageAlt: 'Datu-zentro bateko zerbitzariak',
    short: 'Fitxategiak zifratu eta erreskatea eskatzen zuen ransomware ezaguna.',
    definition: 'CryptoLocker 2013an zabaldu zen ransomwarea izan zen: mezu elektroniko engainagarrien bidez iritsi, kutsatutako ordenagailuetako fitxategiak zifratu eta desblokeatzeko erreskatea eskatu zuen. GameOver Zeus botnetarekin lotuta egon zen.',
    sourceUrl: 'https://www.justice.gov/archives/opa/pr/us-leads-multi-national-action-against-gameover-zeus-botnet-and-cryptolocker-ransomware', sourceLabel: 'U.S. Department of Justice',
    caseYear: '2014', caseTitle: 'CryptoLocker eta GameOver Zeus',
    caseText: '2014an, nazioarteko operazio batek GameOver Zeus botnetaren azpiegitura eten eta CryptoLocker ransomwarearen biktima askori fitxategiak berreskuratzen lagundu zien.',
    realExample: 'Mezu faltsu baten eranskina irekitzeak gailua kutsatu eta dokumentuak zifratu zitzakeen; ondoren, erasotzaileak ordainketa eskatzen zuen.',
    characteristics: ['Fitxategiak zifratu eta erreskatea eskatzen zuen', 'Mezu elektroniko engainagarrien bidez zabal zitekeen', 'GameOver Zeus botnetarekin lotuta egon zen'],
    works: ['Erabiltzailea mezu engainagarri baten eranskina irekitzera bultzatzen zuen.', 'Malwareak fitxategiak zifratu eta erabiltezin bihurtzen zituen.', 'Erasotzaileak fitxategiak berreskuratzeko ordainketa eskatzen zuen.'],
    signs: ['Fitxategiak ireki ezin izatea', 'Erreskate-mezua agertzea', 'Fitxategien izen edo luzapenak aldatuta agertzea'],
    securityImpacts: [
      { name: 'Osotasuna', explanation: 'Fitxategiak zifratzean, haien jatorrizko edukia eta egoera aldatzen dira.' },
      { name: 'Erabilgarritasuna', explanation: 'Erabiltzaileak ezin ditu bere fitxategiak ireki edo erabili desblokeatu arte.' }
    ],
    protect: 'Ez ireki iturri ezezagunetako eranskinik, eguneratu sistema eta aplikazioak, eta egin segurtasun-kopiak gailutik bereizita.'
  },
  'atzeko-ate-unitatea': {
    number: '12', name: 'Atzeko ateak', category: 'Sarbide ezkutua', color: 'dark',
    image: 'images/circuit-board.jpg', imageAlt: 'Osagai elektronikoak dituen zirkuitu-plaka',
    short: 'Ohiko segurtasun-kontrolak saihesteko sarbide ezkutuak.',
    definition: 'Atzeko ate batek sistema batera ezkutuan sartzeko aukera ematen dio erasotzaileari. Softwarean edo firmwarean egon daiteke eta urruneko aginduak exekutatzeko, fitxategiak lapurtzeko edo konfigurazioa aldatzeko erabil daiteke.',
    sourceUrl: 'https://www.malwarebytes.com/backdoor', sourceLabel: 'Malwarebytes',
    caseYear: '2016', caseTitle: 'Mirai eta IoT gailuak',
    caseText: 'Mirai malwareak pasahitz lehenetsi ahulak zituzten IoT gailuak hartu eta botnet batean sartzen zituen.',
    realExample: 'Mezu bateko eranskin susmagarri bat exekutatzeak gailuan urruneko sarbidea ematen duen malwarea instala dezake.',
    characteristics: ['Softwarean edo firmwarean ezkuta daiteke', 'Urruneko sarbidea eta aginduak ahalbidetzen ditu', 'Eranskin, deskarga, USB edo pasahitz ahulen bidez instala daiteke'],
    works: ['Malwarea edo konfigurazio ezkutua gailuan sartzen da.', 'Atzeko ateak ohiko sarbide-kontrolak saihesten ditu.', 'Erasotzaileak urrunetik aginduak exekutatu edo datuak atera ditzake.'],
    signs: ['Sareko konexio ezezagunak', 'Erabiltzaile edo zerbitzu ezezagunak', 'Ezarpen edo fitxategi susmagarriak'],
    securityImpacts: [
      { name: 'Autentifikazioa', explanation: 'Atzeko ateak ohiko sarbide-kontrolak saihesten ditu, eta identitatea egiaztatu gabe sar daiteke erasotzailea.' },
      { name: 'Konfidentzialtasuna', explanation: 'Erasotzaileak fitxategiak eta datu pribatuak ikusi edo atera ditzake.' },
      { name: 'Osotasuna', explanation: 'Urruneko aginduek konfigurazioa edo fitxategiak alda ditzakete.' },
      { name: 'Erabilgarritasuna', explanation: 'Erasotzaileak zerbitzuak eten edo sistema erabilezin bihur dezake.' }
    ],
    protect: 'Eguneratu sistema, aktibatu suebakia, aldatu lehenetsitako pasahitzak, erabili baimen mugatuko kontuak eta ez exekutatu iturri ezezagunetako fitxategirik.'
  },
  'botnet-unitatea': {
    number: '13', name: 'Botnet', category: 'Gailu kutsatuen sarea', color: 'violet',
    image: 'images/data-center.jpg', imageAlt: 'Datu-zentro bateko zerbitzari-armairuak eta sare-konexioak',
    short: 'Urrunetik kontrolatutako gailu kutsatuen sarea.',
    definition: 'Botnet bat erasotzaile baten agindupean dauden ordenagailu eta gailu kutsatuen multzoa da. Jabeek agian ez dute nabaritzen gailua kontrolpean dagoela.',
    sourceUrl: 'https://www.malwarebytes.com/botnet', sourceLabel: 'Malwarebytes',
    caseYear: '2016', caseTitle: 'Mirai botneta',
    caseText: 'Mirai botnetak pasahitz lehenetsiak zituzten IoT gailuak kutsatu eta DDoS erasoetan erabili zituen.',
    realExample: 'Kutsatutako router batek beste gailu askorekin batera webgune bati eskaera ugari bidal diezazkioke.',
    characteristics: ['Gailuak troiar edo pasahitz ahulen bidez kutsa daitezke', 'Kontrol-zentro baten aginduak jasotzen dituzte', 'Spam-a bidaltzeko, malwarea zabaltzeko edo DDoS erasoak egiteko erabil daitezke'],
    works: ['Gailu bat malware bidez kutsatzen da.', 'Kutsatutako gailua kontrol-zentroarekin komunikatzen da.', 'Botneteko gailuek aginduak batera betetzen dituzte.'],
    signs: ['Interneteko konexioa moteltzea', 'Disko edo sare-jarduera ezohikoa', 'Zuk bidali gabeko mezuen erantzunak'],
    securityImpacts: [
      { name: 'Autentifikazioa', explanation: 'Gailuak jabeen baimenik gabe kutsatu eta erasotzailearen agindupean jartzen dira.' },
      { name: 'Erabilgarritasuna', explanation: 'Botneteko gailuek DDoS erasoekin zerbitzu bat gainkargatu edo eskuraezin bihur dezakete.' }
    ],
    protect: 'Aldatu lehenetsitako pasahitzak, instalatu eguneraketak, erabili suebakia eta deskargatu softwarea iturri fidagarrietatik.'
  },
  harrak: {
    number: '11', name: 'Harrak', category: 'Autohedatzen den malwarea', color: 'lime',
    image: 'images/definition-03.jpg', imageAlt: 'Sarean hedatzen den kode digital berdea',
    short: 'Sarean bere kabuz zabal daitekeen malwarea.',
    definition: 'Har informatikoa sarean bere kabuz hedatzen den malwarea da; ez du erabiltzaileak ekipo bakoitzean instalatzea behar. Urruneko sarbidea ireki, segurtasun-tresnak oztopatu edo beste malware bat deskarga dezake.',
    sourceUrl: 'https://www.malwarebytes.com/computer-worm', sourceLabel: 'Malwarebytes',
    caseYear: '2003', caseTitle: 'SQL Slammer harra',
    caseText: 'SQL Slammer harra azkar hedatu zen datu-baseetako zerbitzarien ahultasuna baliatuz eta sareko trafiko handia sortuz.',
    realExample: 'Segurtasun-eguneraketarik gabeko ekipo baten ahultasuna baliatuz, harra sare lokaleko beste ordenagailuetara heda daiteke.',
    characteristics: ['Gailu batetik bestera bere kabuz heda daiteke', 'Sareko ahultasunak edo USB gailuak balia ditzake', 'Sistema moteldu edo segurtasun-prozesuak oztopa ditzake'],
    works: ['Ahultasun bat duen ekipo batean sartzen da.', 'Sareko beste ekipo zaurgarri batzuk bilatzen ditu.', 'Bere kopiak hedatzen ditu ekipo horiek kutsatzeko.'],
    signs: ['Ekipoa moteltzea edo huts egitea', 'Diskoko espazio librea azkar gutxitzea', 'Fitxategi edo alerta susmagarriak agertzea'],
    securityImpacts: [
      { name: 'Osotasuna', explanation: 'Harrek fitxategiak aldatu, segurtasun-tresnak oztopatu edo bestelako malwarea instala dezakete.' },
      { name: 'Autentifikazioa', explanation: 'Har batzuek urruneko sarbide ezkutua ireki dezakete, ohiko identifikazioa saihesteko.' },
      { name: 'Erabilgarritasuna', explanation: 'Autohedapenak sareko trafikoa handitu eta ekipoak edo zerbitzuak moteldu edo geldiaraz ditzake.' }
    ],
    protect: 'Instalatu segurtasun-eguneraketak, erabili antibirus eta suebaki eguneratuak, kontuz ibili USBekin eta egin datuen segurtasun-kopiak.'
  },
  mamuak: {
    number: '10', name: 'Mamuak', category: 'Drive-by download erasoa', color: 'yellow',
    image: 'images/definition-15.jpg', imageAlt: 'Webguneak eta kodea dituen ordenagailu eramangarria',
    short: 'Webgune kutsatu bat bisitatzean abia daitekeen erasoa.',
    definition: 'Drive-by download eraso batean, erasotzaileak webgune kaltetu batean script maltzur bat txertatzen du. Orria bisitatzean, script-ak nabigatzailearen edo aplikazio zaharkituen ahultasunak ustiatzen saia daiteke eta malwarea deskargatu.',
    sourceUrl: 'https://www.kaspersky.com/resource-center/definitions/drive-by-download', sourceLabel: 'Kaspersky',
    caseYear: 'WEB', caseTitle: 'Drive-by erasoa',
    caseText: 'Webgune legitimo bat arriskuan jarri eta iragarki edo script maltzurrak txerta daitezke bisitariak kutsatzeko.',
    realExample: 'Nabigatzaile zaharkitu batekin webgune kutsatu bat bisitatzen duzu; haren script-ak ahultasun bat aurkitu eta malwarea deskargatzen du.',
    characteristics: ['Webgune kutsatu bat bisitatzea nahikoa izan daiteke', 'Script edo iragarki maltzurrak erabil ditzake', 'Nabigatzaile edo aplikazio zaharkituen ahultasunak bilatzen ditu'],
    works: ['Erasotzaileak script maltzurra webgune batean txertatzen du.', 'Bisitariaren nabigatzaileak script-a jasotzen du.', 'Ahultasun bat aurkituz gero, malwarea deskargatu edo exekutatu daiteke.'],
    signs: ['Nabigatzailearen abisuak', 'Deskarga edo birbideratze ustekabeak', 'Gailuan programa edo fitxategi ezezagunak'],
    securityImpacts: [
      { name: 'Osotasuna', explanation: 'Ahultasun bat ustiatzen bada, script-ak baimenik gabeko kodea edo fitxategiak deskargatu eta exekuta ditzake.' },
      { name: 'Konfidentzialtasuna', explanation: 'Deskargatutako malwarearen arabera, gailuko datuak bildu eta kanpora bidal daitezke.' },
      { name: 'Autentifikazioa', explanation: 'Kargako malwareak kredentzialak lapurtzen baditu, erabiltzailearen kontuak ordezka ditzake.' },
      { name: 'Erabilgarritasuna', explanation: 'Instalatutako malwareak nabigatzailea, gailua edo zerbitzuak erabilezin bihur ditzake.' }
    ],
    protect: 'Eguneratu sistema eta nabigatzailea, erabili web-babes eguneratua, eta ez ireki mezu edo webgune susmagarrietako estekak.'
  },
  troiarrak: {
    number: '16', name: 'Troiarrak', category: 'Itxura engainagarria duen malwarea', color: 'blue',
    image: 'images/secure-workspace.jpg', imageAlt: 'Ordenagailu eramangarri batean kodea eta aplikazioak ageri dira',
    short: 'Programa zilegi baten itxurapean ezkutatzen den malwarea.',
    definition: 'Troiarra programa erabilgarri edo zilegi baten itxurapean ezkutatzen den malwarea da. Erabiltzaileak exekutatzen duenean instala daiteke, atzeko atea ireki eta informazioa lapurtu edo urruneko aginduak jasotzeko.',
    sourceUrl: 'https://www.malwarebytes.com/trojan', sourceLabel: 'Malwarebytes',
    caseYear: '2007', caseTitle: 'Zeus troiarra',
    caseText: 'Zeus troiarrak programa arrunt baten itxura hartzen zuen eta online bankuko datuak lapurtzeko erabili zen.',
    realExample: 'Doako programa baten instalatzaile faltsu bat irekitzean, programa arruntaz gain troiarra ere instala daiteke atzealdean.',
    characteristics: ['Programa zilegi edo erakargarri baten itxura hartzen du', 'Normalean erabiltzaileak deskargatu edo exekutatu behar du', 'Urruneko sarbidea edo datu-lapurreta ahalbidetu dezake'],
    works: ['Troiarra daraman fitxategia deskargatu edo irekitzen da.', 'Malwarea atzealdean instalatzen da, erabiltzaileari ohartarazi gabe.', 'Erasotzailearekin konektatu eta aginduak bete edo datuak bidal ditzake.'],
    signs: ['Gailua motelago ibiltzea edo erroreak agertzea', 'Fitxategiak berez sortu edo ezabatzea', 'Abiaraztean programa ezezagunak exekutatzea'],
    securityImpacts: [
      { name: 'Konfidentzialtasuna', explanation: 'Troiarrak datuak lapurtu eta erasotzaileari bidal diezazkioke.' },
      { name: 'Osotasuna', explanation: 'Instalatzean, fitxategiak edo sistemaren konfigurazioa alda ditzake.' },
      { name: 'Autentifikazioa', explanation: 'Pasahitzak lapurtu edo atzeko ate bat ireki dezake, kontu edo sistemetara baimenik gabe sartzeko.' },
      { name: 'Erabilgarritasuna', explanation: 'Mota batzuetako troiarrek gailua edo fitxategiak hondatu eta erabilezin bihur ditzakete.' }
    ],
    protect: 'Deskargatu programak webgune ofizialetatik, mantendu sistema eta antibirusa eguneratuta, eta ez ireki ezezagunen eranskinak.'
  }
};

const key = new URLSearchParams(window.location.search).get('term') || 'phisinga';
const threat = threats[key] || threats.phisinga;
const detail = document.querySelector('#detail-content');

if (detail) {
  document.title = `${threat.name} | Segurtasun mapa`;
  detail.innerHTML = `
    <a class="back-link" href="index.html">MEHATXUEN MAPARA ITZULI</a>
    <section class="detail-hero accent-${threat.color}">
      <div class="detail-title"><p class="eyebrow">${threat.number} / ${threat.category}</p><h1>${threat.name}</h1><p>${threat.short}</p></div>
      <div class="detail-case" aria-label="Adibidea"><div class="case-visual"><strong>${threat.caseYear}</strong><span>${threat.number}</span></div><p>ADIBIDEA</p><h2>${threat.caseTitle}</h2><span>${threat.caseText}</span>
        <nav class="example-sources" aria-label="Kontsultatutako informazio-iturria">
          <span>INFORMAZIO-ITURRIA</span>
          <a href="${threat.sourceUrl}" target="_blank" rel="noopener noreferrer">${threat.sourceLabel}</a>
        </nav>
      </div>
    </section>
    <section class="detail-grid">
      <article class="definition-block"><p class="eyebrow">ZER DA?</p><h2>Arriskua<br><em>ulertzen.</em></h2><p>${threat.definition}</p>
        <section class="security-properties" aria-labelledby="security-properties-title">
          <p class="eyebrow">EZAUGARRIAK</p>
          <h3 id="security-properties-title">Zer ezaugarri kaltetzen ditu?</h3>
          <p class="security-properties-note">Ondorioak erasoaren motaren eta erabilitako malwarearen araberakoak izan daitezke. Zerrendatutako ezaugarriak bakarrik hartzen dira urratutzat.</p>
          <dl class="security-property-list">${threat.securityImpacts.map(impact => `<div><dt>${impact.name}</dt><dd>${impact.explanation}</dd></div>`).join('')}</dl>
        </section>
        <figure class="definition-photo"><img src="${threat.image}" alt="${threat.imageAlt}" loading="lazy" decoding="async"><figcaption>${threat.number} / ${threat.category} · Irudiaren jatorria egiaztatu behar da</figcaption></figure>
      </article>
      <div class="info-stack"><article class="info-card characteristics-card"><h3>Seinaleak</h3><ul class="dash-list">${threat.characteristics.map(item => `<li>${item}</li>`).join('')}</ul></article><article class="info-card"><h3>Nola funtzionatzen du?</h3><ul class="dash-list">${threat.works.map(item => `<li>${item}</li>`).join('')}</ul></article><article class="info-card signs-card"><h3>Nola antzeman?</h3><ul class="dash-list">${threat.signs.map(item => `<li>${item}</li>`).join('')}</ul></article></div>
    </section>
    <section class="protect-banner accent-${threat.color}"><div><p class="eyebrow">03 / ZURE TXANDA</p><h2>Nola aurre egin?</h2><p>${threat.protect}</p></div></section>
    <section class="real-example-panel">
      <h2>Horrela gerta daiteke.</h2>
      <p>${threat.realExample}</p>
    </section>
  `;
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const fullscreenButton = document.querySelector('#fullscreen-toggle');

if (fullscreenButton) {
  const fullscreenLabel = fullscreenButton.querySelector('span');
  const updateFullscreenButton = () => {
    const isFullscreen = Boolean(document.fullscreenElement);
    const label = isFullscreen ? 'Irten pantaila osotik' : 'Pantaila osoa';

    fullscreenLabel.textContent = label;
    fullscreenButton.setAttribute('aria-label', label);
    fullscreenButton.setAttribute('aria-pressed', String(isFullscreen));
  };

  if (!document.documentElement.requestFullscreen || !document.exitFullscreen) {
    fullscreenButton.disabled = true;
    fullscreenLabel.textContent = 'Pantaila osoa ez dago erabilgarri';
    fullscreenButton.setAttribute('aria-label', 'Pantaila osoa ez dago erabilgarri');
  } else {
    fullscreenButton.addEventListener('click', async () => {
      try {
        if (document.fullscreenElement) {
          await document.exitFullscreen();
        } else {
          await document.documentElement.requestFullscreen();
        }
      } catch (error) {
        console.error('Ezin izan da pantaila osoa aldatu.', error);
        fullscreenLabel.textContent = 'Ezin izan da aktibatu';
        fullscreenButton.setAttribute('aria-label', 'Ezin izan da pantaila osoa aktibatu');
      }
    });

    document.addEventListener('fullscreenchange', updateFullscreenButton);
    updateFullscreenButton();
  }
}

if (!reducedMotion) {
  let animationFrame;

  window.addEventListener('pointermove', (event) => {
    cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    });
  }, { passive: true });

  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-depth', `${window.scrollY}px`);
  }, { passive: true });
}
