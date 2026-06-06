/* ═══════════════════════════════════════════════════════════════
   REDESIGN ADDITIONS — populates the 4 new sections in redesign.html
   (Category Leaders carousel, Strategic Exits + IPOs carousel,
   From Day Zero featured testimonials, Founder Voices marquee).
   ═══════════════════════════════════════════════════════════════ */
(function () {
  /* ─── Logo helper (LOCAL_LOGOS → Google favicons → text wordmark) ─── */
  function logoImg(name, domain, size) {
    size = size || 128;
    var src = (typeof LOCAL_LOGOS !== 'undefined' && LOCAL_LOGOS[domain])
           || 'https://www.google.com/s2/favicons?domain=' + domain + '&sz=' + size;
    var safeName = String(name).replace(/'/g, "\\'");
    return '<img src="' + src + '" alt="' + name +
           '" onerror="var p=this.parentNode;p.classList.add(\'rd-fallback\');p.textContent=\'' + safeName + '\';">';
  }

  function nameSize(n) {
    if (n.length >= 12) return 'rd-tighter';
    if (n.length >= 9)  return 'rd-tight';
    return '';
  }

  /* ═══ CATEGORY LEADERS ═══ */
  var leaders = [
    { name: 'Assured',          domain: 'assured.claims',   value: '$1B',    sector: 'Claims Tech',         variant: 'rd-royal'  },
    { name: 'Kalshi',           domain: 'kalshi.com',       value: '$22B',   sector: 'Prediction Markets',  variant: 'rd-cobalt' },
    { name: 'Deel',             domain: 'deel.com',         value: '$17.3B', sector: 'Global Payroll',      variant: 'rd-azure'  },
    { name: 'Checkr',           domain: 'checkr.com',       value: '$5B',    sector: 'Background Checks',   variant: 'rd-royal'  },
    { name: 'Fundamental.tech', domain: 'fundamental.tech', value: '$1.4B',  sector: 'AI Infrastructure',   variant: 'rd-cobalt' },
    { name: 'Headway',          domain: 'headway.co',       value: '$2.3B',  sector: 'Mental Health',       variant: 'rd-azure'  }
  ];

  function buildLeader(c) {
    return ''
      + '<article class="rd-card rd-ipo ' + c.variant + '">'
      + '  <div class="rd-badge rd-stamp"><small>Valued</small>' + c.value + '</div>'
      + '  <div class="rd-card-inner">'
      + '    <div class="rd-flow">'
      + '      <a class="rd-name ' + nameSize(c.name) + '" href="https://' + c.domain + '" target="_blank" rel="noopener">' + c.name + '</a>'
      + '    </div>'
      + '  </div>'
      + '  <div class="rd-card-foot">'
      + '    <div class="rd-sector">' + c.sector + '</div>'
      + '    <div class="rd-year">Private</div>'
      + '  </div>'
      + '</article>';
  }

  /* ═══ STRATEGIC EXITS + IPOs ═══ */
  var portfolio = [
    { type: 'ipo',  name: 'Airbnb',   domain: 'airbnb.com',   year: '2020', sector: 'Hospitality',     variant: 'rd-deep' },
    { type: 'ipo',  name: 'Figma',    domain: 'figma.com',    year: '2025', sector: 'Design Software', variant: 'rd-navy' },
    { type: 'ipo',  name: 'Groupon',  domain: 'groupon.com',  year: '2011', sector: 'Commerce',        variant: 'rd-ink' },

    { type: 'exit', acq: 'BitOasis',    acqDomain: 'bitoasis.com',    to: 'Coinbase',      toDomain: 'coinbase.com',   year: '2024', sector: 'Crypto',           variant: 'rd-navy' },
    { type: 'exit', acq: 'Brex',        acqDomain: 'brex.com',        to: 'Capital One',   toDomain: 'capitalone.com', year: '—',    sector: 'Fintech',          variant: 'rd-deep', value: '$5.15B' },
    { type: 'exit', acq: 'Datagrid',    acqDomain: 'datagrid.com',    to: 'Procore',       toDomain: 'procore.com',    year: '2024', sector: 'Construction Tech',variant: 'rd-ink' },
    { type: 'exit', acq: 'Enable',      acqDomain: 'enable.us',       to: 'Mindtickle',    toDomain: 'mindtickle.com', year: '2023', sector: 'Sales Enablement', variant: 'rd-navy' },
    { type: 'exit', acq: 'Glide',       acqDomain: 'glide.com',       to: 'Compass',       toDomain: 'compass.com',    year: '2024', sector: 'PropTech',         variant: 'rd-deep' },
    { type: 'exit', acq: 'Hidden Road', acqDomain: 'hiddenroad.com',  to: 'Ripple',        toDomain: 'ripple.com',     year: '2024', sector: 'Crypto Prime',     variant: 'rd-ink',  value: '$1.25B' },
    { type: 'exit', acq: 'Legalpad',    acqDomain: 'legalpad.io',     to: 'Deel',          toDomain: 'deel.com',       year: '2022', sector: 'Immigration',      variant: 'rd-navy' },
    { type: 'exit', acq: 'Ostro',       acqDomain: 'ostro.health',    to: 'Veeva Systems', toDomain: 'veeva.com',      year: '2023', sector: 'Health Tech',      variant: 'rd-deep' },
    { type: 'exit', acq: 'Pry',         acqDomain: 'pry.co',          to: 'Brex',          toDomain: 'brex.com',       year: '2023', sector: 'Fintech',          variant: 'rd-ink' },
    { type: 'exit', acq: 'SpotHero',    acqDomain: 'spothero.com',    to: 'Uber',          toDomain: 'uber.com',       year: '—',    sector: 'Mobility',         variant: 'rd-navy' },
    { type: 'exit', acq: 'TaxProper',   acqDomain: 'taxproper.com',   to: 'Opendoor',      toDomain: 'opendoor.com',   year: '2023', sector: 'PropTech',         variant: 'rd-deep' }
  ];

  function badge(e) {
    if (e.value) return '<div class="rd-badge rd-stamp"><small>Exit</small>' + e.value + '</div>';
    return '<div class="rd-badge rd-label">Acquired</div>';
  }

  function buildPortfolio(c) {
    if (c.type === 'ipo') {
      return ''
        + '<article class="rd-card rd-ipo ' + c.variant + '">'
        + '  <div class="rd-badge rd-label">IPO</div>'
        + '  <div class="rd-card-inner">'
        + '    <div class="rd-flow">'
        + '      <a class="rd-name ' + nameSize(c.name) + '" href="https://' + c.domain + '" target="_blank" rel="noopener">' + c.name + '</a>'
        + '    </div>'
        + '  </div>'
        + '  <div class="rd-card-foot">'
        + '    <div class="rd-sector">' + c.sector + '</div>'
        + '    <div class="rd-year">' + c.year + '</div>'
        + '  </div>'
        + '</article>';
    }
    var lc = nameSize(c.acq);
    var rc = nameSize(c.to);
    return ''
      + '<article class="rd-card ' + c.variant + '">'
      + '  ' + badge(c)
      + '  <div class="rd-card-inner">'
      + '    <div class="rd-flow">'
      + '      <a class="rd-name ' + lc + '" href="https://' + c.acqDomain + '" target="_blank" rel="noopener">' + c.acq + '</a>'
      + '      <div class="rd-arrow"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'
      + '      <a class="rd-name ' + rc + '" href="https://' + c.toDomain + '" target="_blank" rel="noopener">' + c.to + '</a>'
      + '    </div>'
      + '  </div>'
      + '  <div class="rd-card-foot">'
      + '    <div class="rd-sector">' + c.sector + '</div>'
      + '    <div class="rd-year">' + c.year + '</div>'
      + '  </div>'
      + '</article>';
  }

  /* ═══ Compact portfolio chips — merged single carousel ═══ */
  function slLink(name, domain) {
    return '<a href="https://' + domain + '" target="_blank" rel="noopener">' + name + '</a>';
  }
  function slChip(nameHtml, tag) {
    return '<div class="sl-chip"><span class="sl-chip-name">' + nameHtml + '</span>'
         + '<span class="sl-chip-tag">' + tag + '</span></div>';
  }
  function buildLeaderChip(c) {
    return slChip(slLink(c.name, c.domain), c.value);
  }
  function buildPortfolioChip(c) {
    if (c.type === 'ipo') {
      return slChip(slLink(c.name, c.domain), 'IPO');
    }
    var nm = slLink(c.acq, c.acqDomain)
           + '<span class="sl-chip-arrow">&rarr;</span>'
           + slLink(c.to, c.toDomain);
    return slChip(nm, c.value || 'Acquired');
  }

  /* ═══ 3 x 3 portfolio grid — 20 companies cycle through 9 cells ═══ */
  // First 9 entries are shown on initial load; remainder rotate in.
  // Curated initial mix = 4 leaders + 2 IPOs + 3 notable exits so the
  // "acquired by X" treatment is visible from the first render.
  var allCells = [
    // ── Initial 9 (mixed) ──
    { type: 'leader', name: 'Deel',     tag: '$17.3B', url: 'deel.com' },
    { type: 'leader', name: 'Kalshi',   tag: '$22B',   url: 'kalshi.com' },
    { type: 'exit',   name: 'Brex',     acquirer: 'Capital One', tag: '$5.15B', url: 'brex.com',       acquirerUrl: 'capitalone.com' },
    { type: 'leader', name: 'Checkr',   tag: '$5B',    url: 'checkr.com' },
    { type: 'ipo',    name: 'Airbnb',   tag: 'IPO',    url: 'airbnb.com' },
    { type: 'exit',   name: 'SpotHero', acquirer: 'Uber',        tag: '',       url: 'spothero.com',   acquirerUrl: 'uber.com' },
    { type: 'leader', name: 'Headway',  tag: '$2.3B',  url: 'headway.co' },
    { type: 'exit',   name: 'BitOasis', acquirer: 'Coinbase',    tag: '',       url: 'bitoasis.com',   acquirerUrl: 'coinbase.com' },
    { type: 'ipo',    name: 'Figma',    tag: 'IPO',    url: 'figma.com' },
    // ── Rotation pool ──
    { type: 'leader', name: 'Fundamental.tech', tag: '$1.4B', url: 'fundamental.tech' },
    { type: 'leader', name: 'Assured',          tag: '$1B',   url: 'assured.claims' },
    { type: 'ipo',    name: 'Groupon',          tag: 'IPO',   url: 'groupon.com' },
    { type: 'exit', name: 'Hidden Road', acquirer: 'Ripple',        tag: '$1.25B', url: 'hiddenroad.com', acquirerUrl: 'ripple.com' },
    { type: 'exit', name: 'Datagrid',    acquirer: 'Procore',       tag: '',       url: 'datagrid.com',   acquirerUrl: 'procore.com' },
    { type: 'exit', name: 'Enable',      acquirer: 'Mindtickle',    tag: '',       url: 'enable.us',      acquirerUrl: 'mindtickle.com' },
    { type: 'exit', name: 'Glide',       acquirer: 'Compass',       tag: '',       url: 'glide.com',      acquirerUrl: 'compass.com' },
    { type: 'exit', name: 'Legalpad',    acquirer: 'Deel',          tag: '',       url: 'legalpad.io',    acquirerUrl: 'deel.com' },
    { type: 'exit', name: 'Ostro',       acquirer: 'Veeva Systems', tag: '',       url: 'ostro.health',   acquirerUrl: 'veeva.com' },
    { type: 'exit', name: 'Pry',         acquirer: 'Brex',          tag: '',       url: 'pry.co',         acquirerUrl: 'brex.com' },
    { type: 'exit', name: 'TaxProper',   acquirer: 'Opendoor',      tag: '',       url: 'taxproper.com',  acquirerUrl: 'opendoor.com' }
  ];
  // Prefer local logo files where we have actual brand marks; fall
  // back to Google's favicon service for the rest. (airbnb.svg and
  // groupon.svg were authored white-on-blue for the old 3x3 grid and
  // disappear on the cream exits-band, so we let the favicon service
  // return the real brand-colored marks instead. deel/kalshi/headway
  // .webp files in images/logos/ are founder photos, not logos.)
  var LOCAL_LOGOS = {
    'airbnb.com':   'images/logos/airbnb.png',
    'groupon.com':  'images/logos/Groupon-Symbol.png',
    'legalpad.io':  'images/logos/legalpad.png',
    'ostro.health': 'images/logos/ostro.png'
  };
  function logoUrl(domain) {
    if (LOCAL_LOGOS[domain]) return LOCAL_LOGOS[domain];
    return 'https://www.google.com/s2/favicons?domain=' + domain + '&sz=128';
  }
  function buildCell(c) {
    var nameBlock =
      '<span class="sl-cell-name">' + c.name + '</span>'
      + (c.type === 'exit' && c.acquirer
          ? '<span class="sl-cell-sub">acquired by ' + c.acquirer + '</span>'
          : '');
    var tagHtml = c.tag ? '<span class="sl-cell-tag">' + c.tag + '</span>' : '';
    var typeCls = c.type ? ' sl-cell-' + c.type : '';
    return '<a class="sl-cell' + typeCls + '" href="https://' + c.url + '" target="_blank" rel="noopener">'
         + '<img class="sl-cell-logo" src="' + logoUrl(c.url) + '" alt="" loading="lazy" onerror="this.classList.add(\'sl-cell-logo--missing\')">'
         + nameBlock
         + tagHtml
         + '</a>';
  }
  function startGridRotation() {
    var track = document.getElementById('rd-leaders-track');
    if (!track) return;
    var cells = track.querySelectorAll('.sl-cell');
    if (cells.length < 9 || allCells.length <= 9) return;
    var visible = allCells.slice(0, 9).slice(); // companies currently in the grid
    var slot = 0;
    // Replace a cell's content + classes with a freshly-built one
    function applyCell(cell, next) {
      var tmp = document.createElement('div');
      tmp.innerHTML = buildCell(next);
      var rebuilt = tmp.firstChild;
      cell.className = rebuilt.className;
      cell.setAttribute('href', rebuilt.getAttribute('href'));
      cell.innerHTML = rebuilt.innerHTML;
    }
    setInterval(function () {
      var cell = cells[slot];
      var pool = allCells.filter(function (c) { return visible.indexOf(c) === -1; });
      if (pool.length === 0) { slot = (slot + 1) % 9; return; }
      var next = pool[Math.floor(Math.random() * pool.length)];
      visible[slot] = next;
      cell.style.opacity = '0';
      setTimeout(function () {
        applyCell(cell, next);
        cell.style.opacity = '1';
      }, 450);
      slot = (slot + 1) % 9;
    }, 2800);
  }

  /* ═══ FOUNDER VOICES — one unified feed ═══ */
  var voices = [
    // ── Lead voices (formerly the featured row) ──
    // Shuo opens the feed — anchor quote that frames the rest of the
    // voices around Don's hands-on, day-zero involvement.
    { name: 'Shuo Wang',         role: 'Co-Founder',          company: 'Deel',       domain: 'deel.com',
      quote: "We spent those early days working side-by-side out of Don's office. He has incredible heart, helped wire the core DNA of the business, and is still just as crucial to us today." },
    { name: 'Alex Bouaziz',      role: 'Co-Founder & CEO',    company: 'Deel',       domain: 'deel.com',
      quote: "A fantastic partner and ally to Deel since its early days." },
    { name: 'Jake Sussman',      role: 'Co-Founder',          company: 'Headway',    domain: 'headway.co',
      quote: "He hustled harder for me than anyone else did. I want him to be a part of every single round and company that I start." },
    { name: 'Tarek Mansour',     role: 'Co-Founder & CEO',    company: 'Kalshi',     domain: 'kalshi.com',
      quote: "With us from day zero — a tremendous supporter through the twists and turns." },
    { name: 'Aaron Bai',         role: 'Founder & CEO',       company: 'Affiniti',   domain: 'affiniti.com',
      quote: "It's rare to find investors who are killers on the business side. Would I work with Don again? The answer is I already did — twice." },
    { name: 'Ankit Jain',        role: 'Co-Founder & CEO',    company: 'Aviator',    domain: 'aviator.co',
      quote: "When SVB was crashing, Don was the first one to call and give us a heads-up. That saved us from a bad situation." },
    { name: 'Filip Kozera',      role: 'Founder & CEO',       company: 'Wordware',   domain: 'wordware.ai',
      quote: "Don has this incredible ability to believe in you more than you believe in yourself. I'd totally work with Don again." },
    { name: 'James Ding',        role: 'Co-Founder & CEO',    company: 'DraftWise',  domain: 'draftwise.com',
      quote: "He intro'd two of the top law firms in the world. If I were starting another company, I would absolutely take funding from Don again." },
    { name: 'Lawrence Lin Murata',role: 'Co-Founder & CEO',   company: 'Slope',      domain: 'slopepay.com',
      quote: "He hustles harder than any investor I've met. He talked to every early hire, no matter where he was in the world." },
    { name: 'Mark Lawrence',     role: 'Founder & CEO',       company: 'SpotHero',   domain: 'spothero.com',
      quote: "We've worked through different levers to accelerate growth and optimize the P&L. If I could take money from Don again, I absolutely would." },
    { name: 'Max Kauderer',      role: 'Co-Founder & CEO',    company: 'Yuzu Health',domain: 'yuzuhealth.com',
      quote: "He could not have been more supportive through our pivots and challenges. We've been able to rely on Don as an independent point of feedback." },
    { name: 'Michael Tannenbaum',role: 'CEO (fmr. COO, Brex)',company: 'Figure',     domain: 'figure.com',
      quote: "When the SVB situation unfolded, Don helped pull his entire portfolio away. He's been in the trenches." },
    { name: 'Nick Evans',        role: 'Co-Founder & CEO',    company: 'Avocado',    domain: 'avocadohq.com',
      quote: "Don understands that product-market fit is everything at the early stage. You send an email asking to chat, and your phone rings immediately." },
    { name: 'Sean Doherty',      role: 'CEO',                 company: 'GovDash',    domain: 'govdash.com',
      quote: "He's been a great sounding board, especially during uncertain moments. We're backed by Kraft Ventures, Northzone, and others — but Don stands out." },
    { name: 'Thiago Da Costa',   role: 'Co-Founder & CEO',    company: 'Datagrid',   domain: 'datagrid.com',
      quote: "He came down hard on expense control and pushed me. I credit Don for pushing me to stay focused on what really mattered.", tag: 'Acquired' },
    { name: 'Thomas Dowling',    role: 'Co-Founder',          company: 'TaxProper',  domain: 'taxproper.com',
      quote: "From day one through to TaxProper's acquisition, Don was more than an investor. He's one of those rare investors who actually makes your business better.", tag: 'Acquired' },
    { name: 'Todd Heine',        role: 'Founder & CEO',       company: 'Legalpad',   domain: 'legalpad.io',
      quote: "He stayed engaged throughout the life of our business and was absolutely critical in helping us achieve a successful acquisition by Deel.", tag: 'Acquired' }
  ];

  function buildVoice(v) {
    var tag = v.tag ? '<span class="rd-voice-tag">' + v.tag + '</span>' : '';
    return ''
      + '<div class="rd-voice">'
      + '  <p class="rd-voice-quote">"' + v.quote + '"</p>'
      + '  <div class="rd-voice-attr">'
      + '    <a class="rd-voice-mark" href="https://' + v.domain + '" target="_blank" rel="noopener" aria-label="' + v.company + '">'
      + '      ' + logoImg(v.company, v.domain, 80)
      + '    </a>'
      + '    <div class="rd-voice-author">'
      + '      <span class="rd-vname">' + v.name + '</span>'
      + '      <span class="rd-vrole">' + v.role + ', <a class="rd-voice-company" href="https://' + v.domain + '" target="_blank" rel="noopener">' + v.company + '</a></span>'
      + '    </div>'
      + '    ' + tag
      + '  </div>'
      + '</div>';
  }

  /* ─── Build a pill-shaped exit-card for the cream marquee band ─── */
  function buildExitCard(c) {
    var sub = (c.type === 'exit' && c.acquirer)
      ? '<span class="rd-exit-sub">acquired by ' + c.acquirer + '</span>'
      : '';
    var tag = c.tag ? '<span class="rd-exit-tag">' + c.tag + '</span>' : '';
    return ''
      + '<a class="rd-exit-card" href="https://' + c.url + '" target="_blank" rel="noopener">'
      + '  <span class="rd-exit-logo"><img src="' + logoUrl(c.url) + '" alt="" loading="lazy" onerror="this.style.display=\'none\'"></span>'
      + '  <span class="rd-exit-name">' + c.name + '</span>'
      + sub
      + tag
      + '</a>';
  }

  /* ─── Render to DOM ─── */
  function render() {
    var leadersTrack = document.getElementById('rd-leaders-track');
    var portfolioTrack = document.getElementById('rd-portfolio-track');
    var voicesTop = document.getElementById('rd-voices-top');
    var exitsIpo    = document.getElementById('rd-exits-ipo');
    var exitsSeed   = document.getElementById('rd-exits-seed');
    var exitsMa     = document.getElementById('rd-exits-ma');

    if (leadersTrack) {
      // Legacy 3x3 grid — only renders if the element still exists
      leadersTrack.innerHTML = allCells.slice(0, 9).map(buildCell).join('');
    }
    if (voicesTop) {
      // Voices now render as a single-card carousel (no auto-scroll
      // doubling) — see setupVoicesCarousel() for the prev/next wiring.
      voicesTop.innerHTML = voices.map(buildVoice).join('');
    }
    if (exitsIpo && exitsSeed && exitsMa) {
      // Three rows by deal type. Smaller source sets get repeated more
      // times so every row has enough card volume for a seamless wrap.
      var ipoSet    = allCells.filter(function (c) { return c.type === 'ipo'; });
      var seedSet   = allCells.filter(function (c) { return c.type === 'leader'; });
      var maSet     = allCells.filter(function (c) { return c.type === 'exit'; });

      function repeatList(arr, times) {
        var out = [];
        for (var i = 0; i < times; i++) out = out.concat(arr);
        return out;
      }
      // Aim for roughly equal card counts per row (~18-22 cards each)
      var ipoHtml   = repeatList(ipoSet,  6).map(buildExitCard).join('');
      var seedHtml  = repeatList(seedSet, 3).map(buildExitCard).join('');
      var maHtml    = repeatList(maSet,   2).map(buildExitCard).join('');

      // Doubled so the rAF marquee can wrap seamlessly
      exitsIpo.innerHTML  = ipoHtml  + ipoHtml;
      exitsSeed.innerHTML = seedHtml + seedHtml;
      exitsMa.innerHTML   = maHtml   + maHtml;
    }
  }

  /* ─── Generic rAF-driven marquee (used by Voices + Exits) ─────────
     speed: px/sec. Negative = scroll left, positive = scroll right.
     Track must be rendered as [...items, ...items] for seamless wrap. */
  function driveMarquee(row, speed) {
    if (!row) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var wrap = row.parentElement;
    var paused = false;
    var x = 0;
    var lastT = null;
    var halfWidth = 0;
    var initialized = false;

    function measure() {
      var styles = getComputedStyle(row);
      var gap = parseFloat(styles.columnGap || styles.gap) || 0;
      halfWidth = (row.scrollWidth + gap) / 2;
      // For right-scrolling rows, start with x at -halfWidth so the
      // animation can move toward 0 then wrap back.
      if (!initialized && speed > 0 && halfWidth > 0) {
        x = -halfWidth;
        initialized = true;
      }
    }

    if (wrap) {
      wrap.addEventListener('mouseenter', function () { paused = true; });
      wrap.addEventListener('mouseleave', function () { paused = false; });
      wrap.addEventListener('touchstart', function () { paused = false; }, { passive: true });
    }

    function tick(t) {
      if (lastT === null) lastT = t;
      var dt = (t - lastT) / 1000;
      lastT = t;
      if (!paused && halfWidth > 0) {
        x += speed * dt;
        if (speed < 0 && x <= -halfWidth) x += halfWidth;
        if (speed > 0 && x >= 0) x -= halfWidth;
        row.style.transform = 'translate3d(' + x.toFixed(2) + 'px,0,0)';
      }
      requestAnimationFrame(tick);
    }

    measure();
    setTimeout(measure, 800);
    setTimeout(measure, 2500);
    window.addEventListener('resize', measure);

    requestAnimationFrame(tick);
  }

  /* ─── Founder Voices is now a single-card carousel (see
       setupVoicesCarousel) — no auto-scroll. Kept as a stub for any
       caller still referencing it. ─── */
  function startMarquee() { /* no-op */ }

  /* ─── Strategic Exits carousel — three rows (IPO / Seed / M&A),
       alternating scroll directions for visual interest ─── */
  function startExitsMarquees() {
    driveMarquee(document.getElementById('rd-exits-ipo'),  -26); // IPOs scroll left
    driveMarquee(document.getElementById('rd-exits-seed'),  22); // Seed deals scroll right
    driveMarquee(document.getElementById('rd-exits-ma'),   -30); // M&A scroll left
  }

  /* ─── Carousel drag (per carousel) ─── */
  function wireDrag(wrap, track) {
    if (!wrap || !track) return;
    var isDown = false, startX = 0, offset = 0;
    function getX() {
      var t = getComputedStyle(track).transform;
      if (!t || t === 'none') return 0;
      try { return new DOMMatrix(t).m41; } catch (e) { return 0; }
    }
    wrap.addEventListener('pointerdown', function (e) {
      if (e.target.closest('a, button')) return;
      isDown = true;
      startX = e.clientX;
      offset = getX();
      track.style.animation = 'none';
      track.style.transition = 'none';
      wrap.classList.add('rd-paused');
      wrap.style.cursor = 'grabbing';
    });
    window.addEventListener('pointermove', function (e) {
      if (!isDown) return;
      var dx = e.clientX - startX;
      var next = offset + dx;
      var halfW = track.scrollWidth / 2;
      if (next < -halfW) next += halfW;
      if (next > 0) next -= halfW;
      track.style.transform = 'translateX(' + next + 'px)';
    });
    window.addEventListener('pointerup', function () {
      if (!isDown) return;
      isDown = false;
      wrap.style.cursor = '';
      track.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
    });
  }

  /* ─── Portfolio carousel prev/pause/next buttons ─── */
  function wireControls() {
    var wrap = document.getElementById('rd-portfolio-wrap');
    var track = document.getElementById('rd-portfolio-track');
    var prev = document.getElementById('rd-prev');
    var pause = document.getElementById('rd-pause');
    var pauseIcon = document.getElementById('rd-pause-icon');
    var next = document.getElementById('rd-next');
    if (!wrap || !track || !prev || !pause || !next) return;

    var paused = false;
    pause.addEventListener('click', function () {
      paused = !paused;
      wrap.classList.toggle('rd-paused', paused);
      pauseIcon.innerHTML = paused
        ? '<path d="M8 5l11 7-11 7V5z" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="currentColor"/>'
        : '<path d="M9 5v14M15 5v14" stroke-width="1.8" stroke-linecap="round"/>';
    });

    function getX() {
      var t = getComputedStyle(track).transform;
      if (!t || t === 'none') return 0;
      try { return new DOMMatrix(t).m41; } catch (e) { return 0; }
    }
    function nudge(dir) {
      if (!paused) { paused = true; wrap.classList.add('rd-paused'); }
      var card = track.querySelector('.rd-card');
      if (!card) return;
      var step = (card.offsetWidth + 16) * dir;
      var halfW = track.scrollWidth / 2;
      var x = getX() - step;
      if (x < -halfW) x += halfW;
      if (x > 0) x -= halfW;
      track.style.animation = 'none';
      track.style.transition = 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)';
      track.style.transform = 'translateX(' + x + 'px)';
    }
    next.addEventListener('click', function () { nudge(1); });
    prev.addEventListener('click', function () { nudge(-1); });
  }

  /* ═══════════════════════════════════════════════════════════════
     FOOTER PHOTO CAPTIONS — "Dive Beneath the Surface"
     Maps image filenames to one-liners. Add/edit entries here to
     fill in real captions. Filenames without a match fall back to
     the generic placeholder.
     ═══════════════════════════════════════════════════════════════ */
  var CAPTIONS = {
    'snap-1.webp':   'Founders offsite',
    'snap-2.webp':   'Portfolio gathering',
    'snap-3.webp':   'SLC dinner',
    'snap-4.webp':   'Founders summit',
    'snap-5.webp':   'Demo day',
    'snap-6.webp':   'Founder coffee',
    'snap-7.webp':   'Annual offsite',
    'snap-9.webp':   'Portfolio meeting',
    'snap-10.webp':  'Founder dinner',
    'snap-11.webp':  'New York office',
    'snap-12.webp':  'SF founders night',
    'snap-13.webp':  'Portfolio review',
    'snap-14.webp':  'Demo day',
    'snap-15.webp':  'Founder retreat',
    'snap-16.webp':  'Investor dinner',
    'snap-17.webp':  'Founder onboarding',
    'snap-18.webp':  'Summit, 2024',
    'snapshot9.webp':  'Team meeting',
    'snapshot11.webp': 'Founders panel',
    'snapshot13.webp': 'Annual summit',
    'snapshot14.webp': 'Founder & GP',
    'deel.webp':     'Deel — early days',
    'headway.webp':  'Headway team',
    'kalshi.webp':   'Kalshi founding',
    'suhail-luana.jpg':   'Suhail with Luana Lopes Lara — Kalshi $22B party',
    'suhail-nicolas.jpg': 'Suhail with Nicolas Dessaigne — YC Winter ’26 Demo Day'
  };
  var FALLBACK_CAPTION = 'Sunshine Lake portfolio';

  function captionFor(src) {
    if (!src) return FALLBACK_CAPTION;
    var parts = src.split('/');
    var file = parts[parts.length - 1];
    return CAPTIONS[file] || FALLBACK_CAPTION;
  }

  function addCaption(cell) {
    if (!cell || cell.querySelector('.footer-photo-caption[data-rd]')) return;
    var img = cell.querySelector('img.front') || cell.querySelector('img');
    if (!img) return;
    var caption = document.createElement('div');
    caption.className = 'footer-photo-caption';
    caption.setAttribute('data-rd', 'true');
    caption.textContent = captionFor(img.getAttribute('src'));
    cell.appendChild(caption);
  }

  function wireFooterCaptions() {
    var grid = document.getElementById('footerPhotoGrid');
    if (!grid) return;
    // Tag any cells that are already there
    grid.querySelectorAll('.footer-photo-cell').forEach(addCaption);
    // Watch for new cells the host script injects later
    var mo = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        m.addedNodes.forEach(function (n) {
          if (n.nodeType === 1 && n.classList && n.classList.contains('footer-photo-cell')) {
            addCaption(n);
          }
        });
      });
    });
    mo.observe(grid, { childList: true, subtree: false });
  }

  /* ═══════════════════════════════════════════════════════════════
     DIVE ZOOM — scroll-driven scale on the painterly water and
     sparkles so the user feels like they're zooming INTO the
     water as the hero card recedes. Uses the modern CSS `scale`
     property (independent of transform) so it composes cleanly
     with the drift animation's translate.
     ═══════════════════════════════════════════════════════════════ */
  function setupDiveZoom() {
    var spacer = document.querySelector('.hero-scroll-spacer.rd-water-extend');
    if (!spacer) return;

    var rafPending = false;
    function update() {
      var rect = spacer.getBoundingClientRect();
      var spacerH = rect.height;
      if (spacerH <= 0) return;
      var raw = -rect.top / spacerH; // 0 at top, 1 at bottom of spacer
      var progress = Math.max(0, Math.min(1, raw));
      // Ease the zoom so it accelerates as you go deeper
      var eased = progress * progress;
      var zoom = 1 + eased * 2.4; // 1× → 3.4× over the spacer
      spacer.style.setProperty('--rd-dive-zoom', zoom.toFixed(3));
    }

    function onScroll() {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(function () {
        update();
        rafPending = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }

  /* (setupHeroGrow reverted — existing hero card scroll-scaling restored.) */

  /* ═══════════════════════════════════════════════════════════════
     DIVE PARTICLES — white sparkles drifting through the dive layer
     ═══════════════════════════════════════════════════════════════ */
  function spawnDiveParticles() {
    var layer = document.getElementById('rd-dive-particles');
    if (!layer) return;
    var count = 10;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
      var p = document.createElement('div');
      p.className = 'rd-dive-particle';
      var size = 1 + Math.random() * 3.5;
      // Bias particles toward the upper 70% of the dive section so
      // the bottom fade-to-white area stays clean
      var yPct = Math.pow(Math.random(), 0.75) * 88;
      p.style.cssText =
        'left:' + (Math.random() * 100) + '%;' +
        'top:' + yPct + '%;' +
        'width:' + size + 'px;' +
        'height:' + size + 'px;' +
        'animation-duration:' + (1.4 + Math.random() * 4.2) + 's;' +
        'animation-delay:-' + (Math.random() * 6) + 's;';
      frag.appendChild(p);
    }
    layer.appendChild(frag);
  }

  function init() {
    render();
    startGridRotation();       // no-op now that the 3x3 grid is removed
    startMarquee();            // Founder Voices marquee
    startExitsMarquees();      // Strategic Exits carousel (two opposite rows)
    wireDrag(document.getElementById('rd-leaders-wrap'),   document.getElementById('rd-leaders-track'));
    wireDrag(document.getElementById('rd-portfolio-wrap'), document.getElementById('rd-portfolio-track'));
    wireControls();
    wireFooterCaptions();
    spawnDiveParticles();
    setupDiveZoom();
    setupSideNav();
    setupMobileMenu();
    setupTeamCarousel();
    setupVoicesCarousel();
    setupThesisCodaShift();
  }

  /* ═══ Founder Voices carousel — single card at a time, user-driven
       prev/next with a "1 / N" counter beneath. Replaces the previous
       auto-scrolling marquee so the testimonials don't compete with
       the Top 1% Track Record carousel above. ═══ */
  /* Tune each voice quote's font-size class based on character length so
     short and long quotes fill roughly the same visual area in the card. */
  function tuneVoiceQuoteSize() {
    var quotes = document.querySelectorAll('#rd-voices-top .rd-voice-quote');
    quotes.forEach(function (q) {
      q.classList.remove('is-xl', 'is-lg', 'is-md', 'is-sm');
      var len = (q.textContent || '').length;
      var cls = 'is-md';
      if      (len < 90)  cls = 'is-xl';
      else if (len < 150) cls = 'is-lg';
      else if (len < 220) cls = 'is-md';
      else                cls = 'is-sm';
      q.classList.add(cls);
    });
  }

  function setupVoicesCarousel() {
    var row     = document.getElementById('rd-voices-top');
    // The scrollable element is the .rd-voices-marquee parent — NOT the
    // inner .rd-voices-row. The row only provides the flex layout.
    var scroller = row ? row.parentElement : null;
    var prev    = document.getElementById('voicesPrev');
    var next    = document.getElementById('voicesNext');
    var counter = document.getElementById('voicesCounter');
    if (!row || !scroller || !prev || !next) return;

    tuneVoiceQuoteSize();

    function step() {
      var card = row.querySelector('.rd-voice');
      if (!card) return scroller.clientWidth || 320;
      var styles = getComputedStyle(row);
      var gap = parseFloat(styles.columnGap || styles.gap) || 0;
      return card.offsetWidth + gap;
    }
    function activeIndex() {
      var w = step();
      if (!w) return 0;
      return Math.round(scroller.scrollLeft / w);
    }
    function total() {
      return row.querySelectorAll('.rd-voice').length;
    }
    function updateUI() {
      var n = total();
      var i = activeIndex();
      var max = scroller.scrollWidth - scroller.clientWidth - 2;
      prev.disabled = scroller.scrollLeft <= 2;
      next.disabled = scroller.scrollLeft >= max;
      if (counter) counter.textContent = (i + 1) + ' / ' + n;
    }
    prev.addEventListener('click', function () {
      scroller.scrollBy({ left: -step(), behavior: 'smooth' });
    });
    next.addEventListener('click', function () {
      scroller.scrollBy({ left: step(), behavior: 'smooth' });
    });
    scroller.addEventListener('scroll', updateUI, { passive: true });
    window.addEventListener('resize', updateUI);
    updateUI();
  }

  /* ═══ Thesis coda — color shift white → Sunshine Yellow on scroll
       The "What better time to build…" question fades from white at the
       moment it enters the viewport to gold #F2D831 by the time it
       reaches the top. Pure scroll-progress lerp via rAF. ═══ */
  function setupThesisCodaShift() {
    // No-op — the coda's color treatment is now a CSS shimmer animation
    // (see .team-thesis .thesis-coda in the inline page styles). Kept as
    // a stub so init() doesn't blow up.
    return;
    /* eslint-disable no-unreachable */
    var coda = document.querySelector('.team-thesis .thesis-coda');
    if (!coda) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // RGB endpoints
    var W = [255, 255, 255];  // white
    var Y = [242, 216, 49];   // Sunshine Yellow

    var pending = false;
    function compute() {
      pending = false;
      var rect = coda.getBoundingClientRect();
      var vh = window.innerHeight || document.documentElement.clientHeight;
      // 0 when the coda's TOP first enters the bottom of the viewport,
      // 1 when the coda's TOP reaches roughly 20% from the top of viewport
      var startY = vh * 0.85;   // begin shift when top is here
      var endY   = vh * 0.2;    // fully gold when top is here
      var t = (startY - rect.top) / (startY - endY);
      if (t < 0) t = 0;
      if (t > 1) t = 1;
      var r = Math.round(W[0] + (Y[0] - W[0]) * t);
      var g = Math.round(W[1] + (Y[1] - W[1]) * t);
      var b = Math.round(W[2] + (Y[2] - W[2]) * t);
      coda.style.setProperty('--coda-color', 'rgb(' + r + ',' + g + ',' + b + ')');
    }
    function onScroll() {
      if (pending) return;
      pending = true;
      requestAnimationFrame(compute);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    compute();
  }

  /* ═══ Team carousel — prev/next arrows scroll one card at a time ═══ */
  function setupTeamCarousel() {
    var track = document.getElementById('teamCards');
    var prev  = document.getElementById('teamPrev');
    var next  = document.getElementById('teamNext');
    if (!track || !prev || !next) return;

    function step() {
      var card = track.querySelector('.team-card');
      if (!card) return 320;
      var styles = getComputedStyle(track);
      var gap = parseFloat(styles.columnGap || styles.gap) || 0;
      return card.offsetWidth + gap;
    }
    function updateButtons() {
      var max = track.scrollWidth - track.clientWidth - 2; // 2px tolerance
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max;
    }
    prev.addEventListener('click', function () {
      track.scrollBy({ left: -step(), behavior: 'smooth' });
    });
    next.addEventListener('click', function () {
      track.scrollBy({ left:  step(), behavior: 'smooth' });
    });
    track.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);
    updateButtons();
  }

  /* ═══════════════════════════════════════════════════════════════
     MOBILE MENU — hamburger toggle + smooth-scroll on link tap
     ═══════════════════════════════════════════════════════════════ */
  function setupMobileMenu() {
    var btn = document.getElementById('rd-mobile-menu-btn');
    var panel = document.getElementById('rd-mobile-menu');
    var close = document.getElementById('rd-mobile-menu-close');
    if (!btn || !panel) return;

    function open() {
      panel.classList.add('open');
      panel.setAttribute('aria-hidden', 'false');
      btn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function shut() {
      panel.classList.remove('open');
      panel.setAttribute('aria-hidden', 'true');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    btn.addEventListener('click', function () {
      if (panel.classList.contains('open')) shut(); else open();
    });
    if (close) close.addEventListener('click', shut);

    // Tap a section link → smooth scroll + close
    panel.querySelectorAll('.rd-mobile-menu-link').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var sel = a.getAttribute('href');
        var target = sel ? document.querySelector(sel) : null;
        if (target) {
          e.preventDefault();
          shut();
          // brief delay so the close animation can start before scrolling
          setTimeout(function () {
            var top = target.getBoundingClientRect().top + (window.pageYOffset || 0);
            window.scrollTo({ top: top, behavior: 'smooth' });
          }, 100);
        }
      });
    });

    // ESC closes
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('open')) shut();
    });
  }

  /* ═══════════════════════════════════════════════════════════════
     SIDE NAV — smooth scroll + scroll-spy highlight
     ═══════════════════════════════════════════════════════════════ */
  function setupSideNav() {
    var nav = document.getElementById('rd-sidenav');
    if (!nav) return;
    var items = Array.prototype.slice.call(nav.querySelectorAll('.rd-sidenav-item'));
    var sections = items.map(function (item) {
      var sel = item.getAttribute('href');
      var target = sel ? document.querySelector(sel) : null;
      return { item: item, target: target };
    }).filter(function (s) { return s.target; });

    // Smooth scroll on click
    sections.forEach(function (s) {
      s.item.addEventListener('click', function (e) {
        e.preventDefault();
        var rect = s.target.getBoundingClientRect();
        var top = rect.top + (window.pageYOffset || document.documentElement.scrollTop);
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });

    // Scroll-spy: highlight the section closest to the viewport center
    var rafPending = false;
    function update() {
      var mid = (window.pageYOffset || document.documentElement.scrollTop) + window.innerHeight * 0.4;
      var activeIdx = 0;
      for (var i = 0; i < sections.length; i++) {
        var r = sections[i].target.getBoundingClientRect();
        var top = r.top + (window.pageYOffset || document.documentElement.scrollTop);
        if (top <= mid) activeIdx = i;
      }
      sections.forEach(function (s, i) {
        s.item.classList.toggle('active', i === activeIdx);
      });
    }
    function onScroll() {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(function () {
        update();
        rafPending = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
