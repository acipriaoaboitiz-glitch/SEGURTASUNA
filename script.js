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
