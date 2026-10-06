const threats = {
  phisinga: {
    number: '01', name: 'Phisinga', category: 'Engainu soziala', color: 'coral',
    short: 'Konfiantzazko itxura duen mezu baten bidez zure datuak lortzea.',
    definition: 'Mezu edo posta elektroniko faltsuen bidez zure datu pertsonalak, hala nola pasahitzak eta banku-zenbakiak, lapurtzeko erabiltzen den engainua.',
    caseYear: '2016', caseTitle: 'John Podestaren phishing-a',
    caseText: 'AEBetako hauteskunde-kanpainako arduradun batek Google-ren segurtasun-alerta faltsu baten esteka sakatu zuen; kontua arriskuan geratu zen.',
    realExample: 'Bankuaren logotipoa duen SMS faltsu batek esteka batera sartzeko eskatzen dizu, kontua blokeatuko dutela esanez.',
    characteristics: ['Mezu faltsuak edo dei engainagarriak', 'Premia eta beldurra sortzen ditu', 'Pasahitzak edo banku-datuak eskatzen ditu'],
    works: ['Mezu edo dei sinesgarri bat jasotzen duzu.', 'Esteka edo eranskin batera joateko eskatzen dizute.', 'Web faltsuan datuak sartzean, erasotzaileak eskuratzen ditu.'],
    signs: ['Premiazko edo beldurra sortzen duen mezua', 'Helbide arraroa edo akats ortografikoak', 'Pasahitza edo ordainketa eskatzea'],
    protect: 'Ez sakatu esteka susmagarririk. Egiaztatu bidaltzailea beste kanal ofizial baten bidez eta aktibatu bi urratseko autentifikazioa.'
  },
  'biren-erasoa': {
    number: '02', name: 'Biren erasoa', category: 'Sarbide-erasoa', color: 'lime',
    short: 'Pasahitzak behin eta berriz probatuz kontu batera sartzeko saiakera.',
    definition: 'Gailu batean sartu, fitxategiak kaltetzen dituen eta bere burua beste ordenagailu batzuetara zabaltzen duen programa kaltegarria.',
    caseYear: '2012', caseTitle: 'LinkedIn-eko pasahitzak',
    caseText: 'LinkedIn-eko datu-ihesaren ondoren, 117 milioi pasahitz-hash argitaratu ziren; pasahitz ahul asko saiakera automatikoekin aurkitu ziren.',
    realExample: 'Erasotzaile batek sare sozial bateko kontuan pasahitz-konbinazio ugari probatzen ditu, saioa lortu arte.',
    characteristics: ['Saiakera automatiko asko', 'Pasahitz ahulak aprobetxatzen ditu', 'Kontua blokeatzea eragin dezake'],
    works: ['Programak pasahitz-konbinazio ugari sortzen ditu.', 'Sistemak saio-hasiera bakoitza egiaztatzen du.', 'Konbinazioa zuzena bada, kontua arriskuan geratzen da.'],
    signs: ['Saio-hasiera hutsen jakinarazpenak', 'Kontua aldi baterako blokeatzea', 'Kokapen ezezaguneko saio aktiboak'],
    protect: 'Erabili pasahitz luze eta bakarra, saio-hasiera saiakerak mugatu eta gaitu bi urratseko autentifikazioa.'
  },
  troiarra: {
    number: '03', name: 'Troiarra', category: 'Malwarea', color: 'blue',
    short: 'Aplikazio edo fitxategi erabilgarriaren itxurapean ezkutatzen den programa kaltegarria.',
    definition: 'Programa erabilgarri eta seguru baten itxura duen mehatxua; kalterik egiten ez duela dirudi, baina barruan arriskua ezkutatzen du.',
    caseYear: '2007', caseTitle: 'Zeus troiarra',
    caseText: 'Zeus troiarrak milaka ordenagailu kutsatu zituen eta online bankuko datuak lapurtu zituen, programa arrunt baten itxurapean.',
    realExample: 'Doako joko edo programa baten instalatzaileak itxura normala du, baina atzean malwarea instalatzen du.',
    characteristics: ['Programa legitimo baten itxura', 'Erabiltzaileak instalatu behar du', 'Ezkutuan jarduten du'],
    works: ['Programa erakargarri edo erabilgarri baten itxura hartzen du.', 'Erabiltzaileak instalatu edo exekutatu egiten du.', 'Atzealdean, erasotzailearekin komunikatzen da.'],
    signs: ['Iturri ezezaguneko instalatzaileak', 'Gailua motelago edo ezegonkorrago egotea', 'Aplikazio ezezagunak agertzea'],
    protect: 'Deskargatu aplikazioak iturri ofizialetatik, mantendu antibirusa eguneratuta eta ez exekutatu jatorri ezezaguneko fitxategirik.'
  },
  backdoorsak: {
    number: '04', name: 'Backdoorsak', category: 'Sarbide ezkutua', color: 'dark',
    short: 'Segurtasun-kontrolak saihestuz sistema batera sartzeko ate ezkutuak.',
    definition: 'Gailu baten segurtasuna saihestuz, erasotzaile bati ezkutuan sartzeko eta sistema urrunetik kontrolatzeko bidea ematen dioten sarrera ezkutuak.',
    caseYear: '2020', caseTitle: 'SUNBURST / SolarWinds',
    caseText: 'SolarWinds Orion softwarearen eguneratze batean atzeko atea ezkutatu zen; erakunde askoren sistemetara sartzeko erabili zuten.',
    realExample: 'Router batean administratzailearen pasahitz lehenetsia aldatu gabe uzteak erasotzaileari sarbide ezkutua eman diezaioke.',
    characteristics: ['Sarbide arrunta saihesten du', 'Ezkutuan mantentzen saiatzen da', 'Sistema urrunetik kontrolatzeko balio dezake'],
    works: ['Kode edo konfigurazio batek sarbide berezia uzten du.', 'Erasotzaileak ate hori aurkitu edo aktibatzen du.', 'Sisteman jardun dezake ohiko erabiltzaile gisa agertu gabe.'],
    signs: ['Erabiltzaile edo zerbitzu ezezagunak', 'Sareko konexio arraroak', 'Sistemaren ezarpen aldaketak baimenik gabe'],
    protect: 'Eguneratu softwarea, kendu erabiltzaile lehenetsiak, itxi behar ez diren zerbitzuak eta berrikusi sarbide-erregistroak.'
  },
  spywarea: {
    number: '05', name: 'Spywarea', category: 'Zaintza digitala', color: 'yellow',
    short: 'Zure jarduera ezkutuan monitorizatu eta informazioa biltzen duen softwarea.',
    definition: 'Zure gailuan zer egiten duzun (bisitatutako orriak, sakatutako teklak...) ezkutuan espiatzen eta datu horiek biltzen dituen programa.',
    caseYear: '2016', caseTitle: 'Pegasus spywarea',
    caseText: 'Pegasus spywarea telefonoak urrunetik zelatatzeko erabili izan da; mezuak, deiak eta kokapena eskuratzeko gai zen.',
    realExample: 'Aplikazio susmagarri batek teklatuan idazten dituzun pasahitzak eta bisitatzen dituzun webguneak grabatzen ditu.',
    characteristics: ['Jarduera isilean monitorizatzen du', 'Teklak edo nabigazioa graba ditzake', 'Datuak urruneko zerbitzari batera bidal ditzake'],
    works: ['Gailuan ezkutuan instalatzen da.', 'Atzealdean jarduera eta datuak biltzen ditu.', 'Informazioa urruneko zerbitzari batera bidal dezake.'],
    signs: ['Bateria edo datu mugikorrak ohikoa baino gehiago kontsumitzea', 'Popup eta birzuzenketa ezezagunak', 'Pribatutasun-ezarpen aldaketak'],
    protect: 'Berrikusi aplikazioen baimenak, desinstalatu ezezagunak direnak eta egin segurtasun-azterketak software fidagarriarekin.'
  },
  stealerrak: {
    number: '06', name: 'Stealerrak', category: 'Datu-lapurreta', color: 'violet',
    short: 'Nabigatzaile eta aplikazioetan gordetako datuak lapurtzeko malwarea.',
    definition: 'Gailuan gordeta dituzun pasahitzak, saio-hasierako datuak eta txartel-zenbakiak zuzenean lapurtzera bideratutako programa mota.',
    caseYear: '2021', caseTitle: 'RedLine Stealer',
    caseText: 'RedLine malwareak nabigatzaileetan gordetako pasahitzak eta cookie-ak lapurtu zituen, eta kontu askotara baimenik gabe sartzeko erabili zen.',
    realExample: 'Deskarga susmagarri batek nabigatzailean gordetako pasahitzak eta saio aktiboen cookie-ak kopiatzen ditu.',
    characteristics: ['Gordetako datuak bilatzen ditu', 'Pasahitzak eta cookie-ak lapurtzen ditu', 'Informazioa azkar bidaltzen du'],
    works: ['Malwarea fitxategi edo deskarga baten bidez iristen da.', 'Gailuko aplikazio eta nabigatzaileak aztertzen ditu.', 'Aurkitutako datuak erasotzaileari bidaltzen dizkio.'],
    signs: ['Kontuetan baimenik gabeko saioak', 'Nabigatzaileko saioak itxi edo aldatu izana', 'Antibirusak fitxategi susmagarriak detektatzea'],
    protect: 'Ez gorde datu kritikoak nabigatzailean, erabili pasahitz-kudeatzailea, aldatu pasahitzak infekzioaren ondoren eta amaitu saio guztiak.'
  },
  koobface: {
    number: '07', name: 'Koobface', category: 'Sare sozialetako malwarea', color: 'coral',
    short: 'Sare sozialen bidez zabaltzen den harra, bideo faltsuen amuarekin.',
    definition: 'Koobface Facebook izenarekin hitz-jokoa egiten duen harra da, sare sozialen bidez zabaltzen dena. Kontaktu baten itxurazko mezu batean bideo faltsu baterako esteka bidaltzen dizu; klik eginez gero, ordenagailua kutsa dezake eta zure informazioa lapurtu.',
    caseYear: '2008', caseTitle: 'Koobface harra',
    caseText: 'Koobface sare sozialetako kontuen bidez zabaldu zen, erabiltzaileak bideo faltsuak ikustera erakarriz.',
    realExample: 'Lagun baten kontutik bideo bat ikusteko esteka iristen zaizu. Estekan klik egin ondoren, fitxategi bat deskargatzeko eskatzen dizu.',
    characteristics: ['Kontaktu ezagun baten mezua imitatzen du', 'Bideo edo esteka faltsuak erabiltzen ditu', 'Informazioa lapurtu edo malware gehiago instala dezake'],
    works: ['Mezu engainagarria sare sozial baten bidez iristen da.', 'Bideo faltsuaren estekan klik egitera edo fitxategia deskargatzera bultzatzen zaitu.', 'Exekutatzean, gailua kutsa dezake eta datuak lapurtu.'],
    signs: ['Bideo bat ikusteko deskarga ezezagunak eskatzea', 'Zure kontutik zuk bidali gabeko mezuak bidaltzea', 'Gailuan jarduera edo programa susmagarriak agertzea'],
    protect: 'Ez ireki ustekabeko bideo-estekak, egiaztatu kontaktuarekin beste kanal baten bidez eta mantendu sistema eta antibirusa eguneratuta.'
  },
  botnet: {
    number: '08', name: 'Botnet', category: 'Gailu kutsatuen sarea', color: 'blue',
    short: 'Erasotzaile batek urrunetik kontrolatzen duen gailu kutsatuen multzoa.',
    definition: 'Botnet bat ordenagailu eta beste gailu kutsatu askoren sarea da. Hacker batek urrunetik kontrolatzen ditu jabeak ohartu gabe, eta batera erabil ditzake spam-mezuak bidaltzeko edo webguneak blokeatzeko.',
    caseYear: '2016', caseTitle: 'Mirai botneta',
    caseText: 'Mirai botnetak segurtasun eskaseko gailuak kutsatu zituen eta haiek batera erabili zituen zerbitzuen aurkako eraso handietan.',
    realExample: 'Zure routerra kutsatuta badago, erasotzaileak beste gailu kutsatu batzuekin batera erabil dezake webgune baten zerbitzaria gainkargatzeko.',
    characteristics: ['Gailu kutsatu asko biltzen ditu', 'Jabeek ez dute kontrola galdu dutela nabaritzen', 'Spam-a bidaltzeko edo zerbitzuak eteteko erabil daiteke'],
    works: ['Malwareak gailu bat kutsatzen du.', 'Gailua erasotzailearen urruneko kontrol-sistemarekin konektatzen da.', 'Botneteko gailuek aginduak batera betetzen dituzte.'],
    signs: ['Interneteko trafiko edo datu-kontsumo ezohikoa', 'Gailua motelago ibiltzea edo berotzea', 'Routerrean konexio ezezagunak agertzea'],
    protect: 'Eguneratu gailuen softwarea, aldatu routerraren pasahitz lehenetsia eta desgaitu erabiltzen ez dituzun urruneko sarbideak.'
  },
  'indar-gordineko-erasoa': {
    number: '09', name: 'Indar gordineko erasoa', category: 'Pasahitzen aurkako erasoa', color: 'violet',
    short: 'Pasahitza asmatu arte konbinazio ugari automatikoki probatzea.',
    definition: 'Kutxa gotor bat ireki nahian konbinazio guztiak banan-banan probatzea bezalakoa da. Erasotzailearen programak milaka pasahitz proba ditzake segundoko, zurea asmatu eta kontuan sartu arte.',
    caseYear: 'Adibidea', caseTitle: 'Pasahitzak probatzea',
    caseText: 'Pasahitz labur edo ohikoak automatikoki asmatzeko errazagoak dira; kontuetan saio-hasierako saiakera asko egiten dira.',
    realExample: 'Erasotzaileak kontu batean pasahitz-konbinazio ugari probatzen ditu, zuzena aurkitu eta saioa hasi arte.',
    characteristics: ['Saiakera asko automatikoki egiten ditu', 'Pasahitz labur edo arruntak aprobetxatzen ditu', 'Saiakerak mugatuta ez badaude arrakasta izan dezake'],
    works: ['Programak balizko pasahitz-konbinazioak sortzen ditu.', 'Konbinazio bakoitza kontuan saioa hasteko probatzen du.', 'Pasahitza asmatzen badu, erasotzailea kontuan sartzen da.'],
    signs: ['Saio-hasiera hutsen jakinarazpen ugari', 'Kontua aldi baterako blokeatzea', 'Zuk ezagutzen ez dituzun saio aktiboak'],
    protect: 'Erabili luzea eta bakarra den pasahitza, aktibatu bi urratseko autentifikazioa eta mugatu saio-hasierako saiakerak.'
  },
  stuxnet: {
    number: '10', name: 'Stuxnet', category: 'Industria-sistemen aurkako harra', color: 'coral',
    short: 'Industria-kontrol sistemak helburu izan zituen malware sofistikatua.',
    definition: 'Stuxnet harrak Natanzeko zentral nuklearreko Siemens kontrol-sistemei eraso zien. Zentrifugen funtzionamendua manipulatu zuen; hainbat iturriren arabera, 1.000 inguru kaltetu zituen.',
    caseYear: '2010', caseTitle: 'Natanzeko zentrifugak',
    caseText: 'Stuxnetek Siemens kontrol-softwarea zuten industria-sistemak bilatu eta kontrolagailuen funtzionamendua aldatu zuen.',
    realExample: 'USB memoria baten bidez irits zitekeen sarera, eta Windowsen ahultasunak baliatu kontrol-sistemetara heltzeko.',
    characteristics: ['Siemens industria-kontrol sistemak zituen helburu', 'USB eta sare bidez heda zitekeen', 'Kontrolagailuen aginduak manipula zitzakeen'],
    works: ['Sistema kutsatu batera iristen zen USB edo sare bidez.', 'Siemens kontrol-softwarea eta ekipo egokiak bilatzen zituen.', 'Kontrolagailuei aginduak aldarazten zizkien, kalte fisikoa eragiteko.'],
    signs: ['Kontrol-sistemetan ustekabeko aldaketak', 'USB bidezko infekzio susmagarriak', 'Kontrolagailuen edo prozesu industrialen portaera ezohikoa'],
    protect: 'Mantendu industria-sistemak eguneratuta, mugatu USB gailuen erabilera eta aplikatu segurtasun-neurriak kontrol-sistemaren hornitzailearekin koordinatuta.'
  },
  wannacry: {
    number: '11', name: 'WannaCry', category: 'Ransomware erasoa', color: 'blue',
    short: 'Mundu osora zabaldu eta ospitale-zerbitzuak eten zituen ransomwarea.',
    definition: 'WannaCry 2017an zabaldu zen ransomwarea izan zen: kutsatutako ordenagailuetako fitxategiak blokeatu eta erreskatea eskatu zuen. Erresuma Batuko NHSn, gutxienez 81 trust kaltetu zituen eta milaka hitzordu bertan behera utzi ziren.',
    caseYear: '2017', caseTitle: 'WannaCry eta NHS',
    caseText: 'National Audit Office-ren arabera, NHSn gutxienez 81 trust kaltetu ziren eta 19.000 hitzordu inguru bertan behera geratu ziren.',
    realExample: 'Eguneratu gabeko Windows sistema bat kutsatu ondoren, WannaCry sarean zabaldu eta fitxategiak zifratu zituen.',
    characteristics: ['Fitxategiak zifratu eta erreskatea eskatzen zuen', 'Har moduan hedatzen zen sareetan', 'Ahultasunak zituzten Windows sistemak baliatu zituen'],
    works: ['Sistema zaurgarri batean sartzen zen.', 'Fitxategiak zifratu eta erabiltzaileari erreskatea eskatzen zion.', 'Sareko beste sistema zaurgarri batzuetara hedatzen zen.'],
    signs: ['Fitxategiak ireki ezin izatea', 'Erreskate-mezua agertzea', 'Sareko gailu askok aldi berean arazoak izatea'],
    protect: 'Instalatu segurtasun-eguneraketak, erabili suebakia eta egin datuen segurtasun-kopiak, sarera konektatuta ez dagoen kopia bat barne.'
  },
  'atzeko-ate-unitatea': {
    number: '12', name: 'Atzeko ateak', category: 'Sarbide ezkutua', color: 'dark',
    short: 'Ohiko segurtasun-kontrolak saihesteko sarbide ezkutuak.',
    definition: 'Atzeko ate batek sistema batera ezkutuan sartzeko aukera ematen dio erasotzaileari. Softwarean edo firmwarean egon daiteke eta urruneko aginduak exekutatzeko, fitxategiak lapurtzeko edo konfigurazioa aldatzeko erabil daiteke.',
    caseYear: '2016', caseTitle: 'Mirai eta IoT gailuak',
    caseText: 'Mirai malwareak pasahitz lehenetsi ahulak zituzten IoT gailuak hartu eta botnet batean sartzen zituen.',
    realExample: 'Mezu bateko eranskin susmagarri bat exekutatzeak gailuan urruneko sarbidea ematen duen malwarea instala dezake.',
    characteristics: ['Softwarean edo firmwarean ezkuta daiteke', 'Urruneko sarbidea eta aginduak ahalbidetzen ditu', 'Eranskin, deskarga, USB edo pasahitz ahulen bidez instala daiteke'],
    works: ['Malwarea edo konfigurazio ezkutua gailuan sartzen da.', 'Atzeko ateak ohiko sarbide-kontrolak saihesten ditu.', 'Erasotzaileak urrunetik aginduak exekutatu edo datuak atera ditzake.'],
    signs: ['Sareko konexio ezezagunak', 'Erabiltzaile edo zerbitzu ezezagunak', 'Ezarpen edo fitxategi susmagarriak'],
    protect: 'Eguneratu sistema, aktibatu suebakia, aldatu lehenetsitako pasahitzak, erabili baimen mugatuko kontuak eta ez exekutatu iturri ezezagunetako fitxategirik.'
  },
  'botnet-unitatea': {
    number: '13', name: 'Botnet', category: 'Gailu kutsatuen sarea', color: 'violet',
    short: 'Urrunetik kontrolatutako gailu kutsatuen sarea.',
    definition: 'Botnet bat erasotzaile baten agindupean dauden ordenagailu eta gailu kutsatuen multzoa da. Jabeek agian ez dute nabaritzen gailua kontrolpean dagoela.',
    caseYear: '2016', caseTitle: 'Mirai botneta',
    caseText: 'Mirai botnetak pasahitz lehenetsiak zituzten IoT gailuak kutsatu eta DDoS erasoetan erabili zituen.',
    realExample: 'Kutsatutako router batek beste gailu askorekin batera webgune bati eskaera ugari bidal diezazkioke.',
    characteristics: ['Gailuak troiar edo pasahitz ahulen bidez kutsa daitezke', 'Kontrol-zentro baten aginduak jasotzen dituzte', 'Spam-a bidaltzeko, malwarea zabaltzeko edo DDoS erasoak egiteko erabil daitezke'],
    works: ['Gailu bat malware bidez kutsatzen da.', 'Kutsatutako gailua kontrol-zentroarekin komunikatzen da.', 'Botneteko gailuek aginduak batera betetzen dituzte.'],
    signs: ['Interneteko konexioa moteltzea', 'Disko edo sare-jarduera ezohikoa', 'Zuk bidali gabeko mezuen erantzunak'],
    protect: 'Aldatu lehenetsitako pasahitzak, instalatu eguneraketak, erabili suebakia eta deskargatu softwarea iturri fidagarrietatik.'
  },
  harrak: {
    number: '14', name: 'Harrak (worms)', category: 'Autohedatzen den malwarea', color: 'lime',
    short: 'Sarean bere kabuz zabal daitekeen malwarea.',
    definition: 'Har informatikoa sarean bere kabuz hedatzen den malwarea da; ez du erabiltzaileak ekipo bakoitzean instalatzea behar. Urruneko sarbidea ireki, segurtasun-tresnak oztopatu edo beste malware bat deskarga dezake.',
    caseYear: '2003', caseTitle: 'SQL Slammer harra',
    caseText: 'SQL Slammer harra azkar hedatu zen datu-baseetako zerbitzarien ahultasuna baliatuz eta sareko trafiko handia sortuz.',
    realExample: 'Segurtasun-eguneraketarik gabeko ekipo baten ahultasuna baliatuz, harra sare lokaleko beste ordenagailuetara heda daiteke.',
    characteristics: ['Gailu batetik bestera bere kabuz heda daiteke', 'Sareko ahultasunak edo USB gailuak balia ditzake', 'Sistema moteldu edo segurtasun-prozesuak oztopa ditzake'],
    works: ['Ahultasun bat duen ekipo batean sartzen da.', 'Sareko beste ekipo zaurgarri batzuk bilatzen ditu.', 'Bere kopiak hedatzen ditu ekipo horiek kutsatzeko.'],
    signs: ['Ekipoa moteltzea edo huts egitea', 'Diskoko espazio librea azkar gutxitzea', 'Fitxategi edo alerta susmagarriak agertzea'],
    protect: 'Instalatu segurtasun-eguneraketak, erabili antibirus eta suebaki eguneratuak, kontuz ibili USBekin eta egin datuen segurtasun-kopiak.'
  },
  mamuak: {
    number: '15', name: 'Mamuak', category: 'Drive-by download erasoa', color: 'yellow',
    short: 'Webgune kutsatu bat bisitatzean abia daitekeen erasoa.',
    definition: 'Drive-by download eraso batean, erasotzaileak webgune kaltetu batean script maltzur bat txertatzen du. Orria bisitatzean, script-ak nabigatzailearen edo aplikazio zaharkituen ahultasunak ustiatzen saia daiteke eta malwarea deskargatu.',
    caseYear: 'WEB', caseTitle: 'Drive-by erasoa',
    caseText: 'Webgune legitimo bat arriskuan jarri eta iragarki edo script maltzurrak txerta daitezke bisitariak kutsatzeko.',
    realExample: 'Nabigatzaile zaharkitu batekin webgune kutsatu bat bisitatzen duzu; haren script-ak ahultasun bat aurkitu eta malwarea deskargatzen du.',
    characteristics: ['Webgune kutsatu bat bisitatzea nahikoa izan daiteke', 'Script edo iragarki maltzurrak erabil ditzake', 'Nabigatzaile edo aplikazio zaharkituen ahultasunak bilatzen ditu'],
    works: ['Erasotzaileak script maltzurra webgune batean txertatzen du.', 'Bisitariaren nabigatzaileak script-a jasotzen du.', 'Ahultasun bat aurkituz gero, malwarea deskargatu edo exekutatu daiteke.'],
    signs: ['Nabigatzailearen abisuak', 'Deskarga edo birbideratze ustekabeak', 'Gailuan programa edo fitxategi ezezagunak'],
    protect: 'Eguneratu sistema eta nabigatzailea, erabili web-babes eguneratua, eta ez ireki mezu edo webgune susmagarrietako estekak.'
  },
  troiarrak: {
    number: '16', name: 'Troiarrak', category: 'Itxura engainagarria duen malwarea', color: 'blue',
    short: 'Programa zilegi baten itxurapean ezkutatzen den malwarea.',
    definition: 'Troiarra programa erabilgarri edo zilegi baten itxurapean ezkutatzen den malwarea da. Erabiltzaileak exekutatzen duenean instala daiteke, atzeko atea ireki eta informazioa lapurtu edo urruneko aginduak jasotzeko.',
    caseYear: '2007', caseTitle: 'Zeus troiarra',
    caseText: 'Zeus troiarrak programa arrunt baten itxura hartzen zuen eta online bankuko datuak lapurtzeko erabili zen.',
    realExample: 'Doako programa baten instalatzaile faltsu bat irekitzean, programa arruntaz gain troiarra ere instala daiteke atzealdean.',
    characteristics: ['Programa zilegi edo erakargarri baten itxura hartzen du', 'Normalean erabiltzaileak deskargatu edo exekutatu behar du', 'Urruneko sarbidea edo datu-lapurreta ahalbidetu dezake'],
    works: ['Troiarra daraman fitxategia deskargatu edo irekitzen da.', 'Malwarea atzealdean instalatzen da, erabiltzaileari ohartarazi gabe.', 'Erasotzailearekin konektatu eta aginduak bete edo datuak bidal ditzake.'],
    signs: ['Gailua motelago ibiltzea edo erroreak agertzea', 'Fitxategiak berez sortu edo ezabatzea', 'Abiaraztean programa ezezagunak exekutatzea'],
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
      <div class="detail-case" aria-label="Bizitza errealeko kasua"><div class="case-visual"><strong>${threat.caseYear}</strong><span>${threat.number}</span></div><p>BENETAKO KASUA</p><h2>${threat.caseTitle}</h2><span>${threat.caseText}</span></div>
    </section>
    <section class="detail-grid">
      <article class="definition-block"><p class="eyebrow">ZER DA?</p><h2>Arriskua<br><em>ulertzen.</em></h2><p>${threat.definition}</p></article>
      <div class="info-stack"><article class="info-card characteristics-card"><p class="eyebrow">EZAUGARRIAK</p><h3>Hitzaren seinaleak</h3><ul class="dash-list">${threat.characteristics.map(item => `<li>${item}</li>`).join('')}</ul></article><article class="info-card"><h3>Nola funtzionatzen du?</h3><ul class="dash-list">${threat.works.map(item => `<li>${item}</li>`).join('')}</ul></article><article class="info-card signs-card"><h3>Nola antzeman?</h3><ul class="dash-list">${threat.signs.map(item => `<li>${item}</li>`).join('')}</ul></article></div>
    </section>
    <section class="protect-banner accent-${threat.color}"><div><p class="eyebrow">03 / ZURE TXANDA</p><h2>Nola aurre egin?</h2><p>${threat.protect}</p></div></section>
    <section class="real-example-panel"><h2>Horrela gerta daiteke.</h2><p>${threat.realExample}</p></section>
  `;
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
