const threats = {
  phisinga: {
    number: '01', name: 'Phisinga', category: 'Engainu soziala', color: 'coral',
    short: 'Konfiantzazko itxura duen mezu baten bidez zure datuak lortzea.',
    definition: 'Mezu edo posta elektroniko faltsuen bidez zure datu pertsonalak (pasahitzak, banku-zenbakiak) lapurtzeko erabiltzen den engainua.',
    works: ['Mezu edo dei sinesgarri bat jasotzen duzu.', 'Esteka edo eranskin batera joateko eskatzen dizute.', 'Web faltsuan datuak sartzean, erasotzaileak eskuratzen ditu.'],
    signs: ['Premiazko edo beldurra sortzen duen mezua', 'Helbide arraroa edo akats ortografikoak', 'Pasahitza edo ordainketa eskatzea'],
    protect: 'Ez sakatu esteka susmagarririk. Egiaztatu bidaltzailea beste kanal ofizial baten bidez eta aktibatu bi urratseko autentifikazioa.'
  },
  'biren-erasoa': {
    number: '02', name: 'Biren erasoa', category: 'Sarbide-erasoa', color: 'lime',
    short: 'Pasahitzak behin eta berriz probatuz kontu batera sartzeko saiakera.',
    definition: 'Gailu batean sartu, fitxategiak kaltetzen dituen eta bere burua beste ordenagailu batzuetara zabaltzen duen programa kaltegarria.',
    works: ['Programak pasahitz-konbinazio ugari sortzen ditu.', 'Sistemak saio-hasiera bakoitza egiaztatzen du.', 'Konbinazioa zuzena bada, kontua arriskuan geratzen da.'],
    signs: ['Saio-hasiera hutsen jakinarazpenak', 'Kontua aldi baterako blokeatzea', 'Kokapen ezezaguneko saio aktiboak'],
    protect: 'Erabili pasahitz luze eta bakarra, saio-hasiera saiakerak mugatu eta gaitu bi urratseko autentifikazioa.'
  },
  troiarra: {
    number: '03', name: 'Troiarra', category: 'Malwarea', color: 'blue',
    short: 'Aplikazio edo fitxategi erabilgarriaren itxurapean ezkutatzen den programa kaltegarria.',
    definition: 'Programa erabilgarri eta seguru baten itxura duen mehatxua; kalterik egiten ez duela dirudi, baina barruan arriskua ezkutatzen du.',
    works: ['Programa erakargarri edo erabilgarri baten itxura hartzen du.', 'Erabiltzaileak instalatu edo exekutatu egiten du.', 'Atzealdean, erasotzailearekin komunikatzen da.'],
    signs: ['Iturri ezezaguneko instalatzaileak', 'Gailua motelago edo ezegonkorrago egotea', 'Aplikazio ezezagunak agertzea'],
    protect: 'Deskargatu aplikazioak iturri ofizialetatik, mantendu antibirusa eguneratuta eta ez exekutatu jatorri ezezaguneko fitxategirik.'
  },
  backdoorsak: {
    number: '04', name: 'Backdoorsak', category: 'Sarbide ezkutua', color: 'dark',
    short: 'Segurtasun-kontrolak saihestuz sistema batera sartzeko ate ezkutuak.',
    definition: 'Gailu baten segurtasuna saihestuz, erasotzaile bati ezkutuan sartzeko eta sistema urrunetik kontrolatzeko bidea ematen dioten sarrera ezkutuak.',
    works: ['Kode edo konfigurazio batek sarbide berezia uzten du.', 'Erasotzaileak ate hori aurkitu edo aktibatzen du.', 'Sisteman jardun dezake ohiko erabiltzaile gisa agertu gabe.'],
    signs: ['Erabiltzaile edo zerbitzu ezezagunak', 'Sareko konexio arraroak', 'Sistemaren ezarpen aldaketak baimenik gabe'],
    protect: 'Eguneratu softwarea, kendu erabiltzaile lehenetsiak, itxi behar ez diren zerbitzuak eta berrikusi sarbide-erregistroak.'
  },
  spywarea: {
    number: '05', name: 'Spywarea', category: 'Zaintza digitala', color: 'yellow',
    short: 'Zure jarduera ezkutuan monitorizatu eta informazioa biltzen duen softwarea.',
    definition: 'Zure gailuan zer egiten duzun (bisitatutako orriak, sakatutako teklak...) ezkutuan espiatzen eta datu horiek biltzen dituen programa.',
    works: ['Gailuan ezkutuan instalatzen da.', 'Atzealdean jarduera eta datuak biltzen ditu.', 'Informazioa urruneko zerbitzari batera bidal dezake.'],
    signs: ['Bateria edo datu mugikorrak ohikoa baino gehiago kontsumitzea', 'Popup eta birzuzenketa ezezagunak', 'Pribatutasun-ezarpen aldaketak'],
    protect: 'Berrikusi aplikazioen baimenak, desinstalatu ezezagunak direnak eta egin segurtasun-azterketak software fidagarriarekin.'
  },
  stealerrak: {
    number: '06', name: 'Stealerrak', category: 'Datu-lapurreta', color: 'violet',
    short: 'Nabigatzaile eta aplikazioetan gordetako datuak lapurtzeko malwarea.',
    definition: 'Gailuan gordeta dituzun pasahitzak, saio-hasierako datuak eta txartel-zenbakiak zuzenean lapurtzera bideratutako programa mota.',
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
      <div class="detail-terminal" aria-label="Mehatxuaren sistema-erregistroa"><p>ERREGISTROA / ${threat.number}</p><strong>MEHATXU AZTERTUA</strong><span>MAILA / ZAINTZA</span><span>ITURRIA / SARE DIGITALA</span></div>
    </section>
    <section class="detail-grid">
      <article class="definition-block"><p class="eyebrow">ZER DA?</p><h2>Arriskua<br><em>ulertzen.</em></h2><p>${threat.definition}</p></article>
      <div class="info-stack"><article class="info-card"><h3>Nola funtzionatzen du?</h3><ul class="dash-list">${threat.works.map(item => `<li>${item}</li>`).join('')}</ul></article><article class="info-card signs-card"><h3>Nola antzeman?</h3><ul class="dash-list">${threat.signs.map(item => `<li>${item}</li>`).join('')}</ul></article></div>
    </section>
    <section class="protect-banner accent-${threat.color}"><div><p class="eyebrow">03 / ZURE TXANDA</p><h2>Nola babestu?</h2><p>${threat.protect}</p></div></section>
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
