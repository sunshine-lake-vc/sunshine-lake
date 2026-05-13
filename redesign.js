/* ═══════════════════════════════════════════════════════════════
   REDESIGN ADDITIONS — populates the 4 new sections in redesign.html
   (Category Leaders carousel, Strategic Exits + IPOs carousel,
   From Day Zero featured testimonials, Founder Voices marquee).
   ═══════════════════════════════════════════════════════════════ */
(function () {
  /* ─── Logo helper (Clearbit + wordmark fallback) ─── */
  function logoImg(name, domain, size) {
    size = size || 80;
    var initial = name[0];
    return '<img src="https://logo.clearbit.com/' + domain + '?size=' + size +
           '" alt="' + name + '" onerror="this.parentNode.classList.add(\'rd-fallback\');this.outerHTML=\'' + initial + '\';">';
  }

  function nameSize(n) {
    if (n.length >= 12) return 'rd-tighter';
    if (n.length >= 9)  return 'rd-tight';
    return '';
  }

  /* ═══ CATEGORY LEADERS ═══ */
  var leaders = [
    { name: 'Assured',          domain: 'assured.claims',   value: '$1B',    sector: 'Claims Tech',         variant: 'rd-royal'  },
    { name: 'Kalshi',           domain: 'kalshi.com',       value: '$11B',   sector: 'Prediction Markets',  variant: 'rd-cobalt' },
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

  /* ═══ FEATURED TESTIMONIALS (from Day Zero) ═══ */
  var featured = [
    { company: 'Deel',    domain: 'deel.com',
      quote: 'A fantastic partner and ally to Deel since its early days.',
      author: 'Alex Bouaziz', role: 'Co-Founder & CEO, Deel' },
    { company: 'Headway', domain: 'headway.co',
      quote: 'He hustled harder for me than anyone else did. I want him to be a part of every single round and company that I start.',
      author: 'Jake Sussman', role: 'Co-Founder, Headway' },
    { company: 'Kalshi',  domain: 'kalshi.com',
      quote: 'With us from day zero — a tremendous supporter through the twists and turns.',
      author: 'Tarek Mansour', role: 'Co-Founder & CEO, Kalshi' }
  ];

  function buildFeatured(f) {
    return ''
      + '<div class="rd-featured">'
      + '  <a class="rd-featured-company" href="https://' + f.domain + '" target="_blank" rel="noopener">' + f.company + '</a>'
      + '  <p class="rd-featured-quote">' + f.quote + '</p>'
      + '  <div class="rd-featured-attr">'
      + '    <span class="rd-name-line">' + f.author + '</span>'
      + '    <span class="rd-role-line">' + f.role + '</span>'
      + '  </div>'
      + '</div>';
  }

  /* ═══ SUPPORTING VOICES ═══ */
  var voices = [
    { name: 'Aaron Bai',         role: 'Founder & CEO',       company: 'Affiniti',   domain: 'affiniti.com',
      quote: "It's rare to find investors who are killers on the business side. Would I work with Don again? The answer is I already did — twice." },
    { name: 'Ankit Jain',        role: 'Co-Founder & CEO',    company: 'Aviator',    domain: 'aviator.co',
      quote: "When SVB was crashing, Don was the first one to call and give us a heads-up. That saved us from a bad situation.", tag: 'SVB' },
    { name: 'Filip Kozera',      role: 'Founder & CEO',       company: 'Wordware',   domain: 'wordware.ai',
      quote: "Don has this incredible ability to believe in you more than you believe in yourself. I'd totally work with Don again." },
    { name: 'James Ding',        role: 'Co-Founder & CEO',    company: 'DraftWise',  domain: 'draftwise.com',
      quote: "He intro'd two of the top law firms in the world. If I were starting another company, I would absolutely take funding from Don again." },
    { name: 'Lawrence Lin Murata',role: 'Co-Founder & CEO',   company: 'Slope',      domain: 'slopepay.com',
      quote: "He hustles harder than any investor I've met. He talked to every early hire, no matter where he was in the world." },
    { name: 'Mark Lawrence',     role: 'Founder & CEO',       company: 'SpotHero',   domain: 'spothero.com',
      quote: "We've worked through different levers to accelerate growth and optimize the P&L. If I could take money from Don again, I absolutely would.", tag: 'Exit' },
    { name: 'Max Kauderer',      role: 'Co-Founder & CEO',    company: 'Yuzu Health',domain: 'yuzuhealth.com',
      quote: "He could not have been more supportive through our pivots and challenges. We've been able to rely on Don as an independent point of feedback." },
    { name: 'Michael Tannenbaum',role: 'CEO (fmr. COO, Brex)',company: 'Figure',     domain: 'figure.com',
      quote: "When the SVB situation unfolded, Don helped pull his entire portfolio away. He's been in the trenches.", tag: 'SVB' },
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

  /* ─── Render to DOM ─── */
  function render() {
    var leadersTrack = document.getElementById('rd-leaders-track');
    var portfolioTrack = document.getElementById('rd-portfolio-track');
    var featuredRow = document.getElementById('rd-featured-row');
    var voicesTop = document.getElementById('rd-voices-top');

    if (leadersTrack) {
      var L = leaders.map(buildLeader).join('');
      leadersTrack.innerHTML = L + L;
    }
    if (portfolioTrack) {
      var P = portfolio.map(buildPortfolio).join('');
      portfolioTrack.innerHTML = P + P;
    }
    if (featuredRow) {
      featuredRow.innerHTML = featured.map(buildFeatured).join('');
    }
    if (voicesTop) {
      // All voices into a single row, doubled for seamless loop
      var allV = voices.map(buildVoice).join('');
      voicesTop.innerHTML = allV + allV;
    }
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
    'kalshi.webp':   'Kalshi founding'
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
    var count = 70;
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
    wireDrag(document.getElementById('rd-leaders-wrap'),   document.getElementById('rd-leaders-track'));
    wireDrag(document.getElementById('rd-portfolio-wrap'), document.getElementById('rd-portfolio-track'));
    wireControls();
    wireFooterCaptions();
    spawnDiveParticles();
    setupDiveZoom();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
