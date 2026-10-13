/* Rynex Tech — shared header & footer.
   Include once per page, right after <div id="rx-header"></div> ... <div id="rx-footer"></div>.
   Edit the header/footer here and every page updates. */
(function () {
  var page = document.body.getAttribute('data-page') || '';
  var root = document.documentElement;

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  // bilingual text node: <span data-rx-en data-rx-ja>
  function t(en, ja) { return '<span data-rx-en="' + esc(en) + '" data-rx-ja="' + esc(ja) + '">' + esc(en) + '</span>'; }
  function a(href, en, ja, extra) {
    return '<a href="' + href + '"' + (extra || '') + ' data-rx-en="' + esc(en) + '" data-rx-ja="' + esc(ja) + '">' + esc(en) + '</a>';
  }

  var PAGE_FILE = { main: 'index.html', team: 'team.html', projects: 'projects.html', about: 'about.html', services: 'services.html', 'blog-post': 'blog.html', blog: 'blog.html' };
  var NAV = [
    ['index.html', 'Home', 'ホーム'],
    ['about.html', 'About Us', '会社概要'],
    ['team.html', 'Team', 'チーム'],
    ['services.html', 'Services', 'サービス'],
    ['projects.html', 'Portfolios', '実績'],
    ['blog.html', 'Blog', 'ブログ'],
    ['index.html#career', 'Career', '採用情報'],
    ['index.html#contact', 'Contact', 'お問い合わせ']
  ];
  var navHtml = NAV.map(function (n) {
    var on = n[0] === PAGE_FILE[page];
    return a(n[0], n[1], n[2], on ? ' aria-current="page"' : '');
  }).join('') +
    a('https://rynextech.com/', 'Digital Marketing', 'デジタルマーケティング', ' class="rx-ext" target="_blank" rel="noopener noreferrer"') +
    a('index.html#contact', 'Request a Quote', 'お見積り依頼', ' class="rx-nav-cta" data-quote');

  var header =
    '<div class="rx-header" role="banner"><div class="rx-bar">' +
      '<a class="rx-brand" href="index.html" aria-label="Rynex Tech"><img class="rx-logo" src="images/rynexlogo.png" alt="Rynex Tech" height="40"></a>' +
      '<div class="rx-nav" id="rx-nav" role="navigation" aria-label="Main navigation" data-rx-aria-en="Main navigation" data-rx-aria-ja="メインナビゲーション">' + navHtml + '</div>' +
      '<div class="rx-actions">' +
        '<div class="rx-lang" role="group" aria-label="Language" data-rx-aria-en="Language" data-rx-aria-ja="言語">' +
          '<button type="button" data-lang="en" aria-pressed="false">EN</button><button type="button" data-lang="ja" aria-pressed="false">JA</button></div>' +
        a('index.html#contact', 'Request a Quote', 'お見積り依頼', ' class="rx-cta" data-quote') +
        '<button class="rx-toggle" type="button" aria-label="Menu" data-rx-aria-en="Menu" data-rx-aria-ja="メニュー" aria-expanded="false" aria-controls="rx-nav"><span></span></button>' +
      '</div></div></div>';

  var ICON = {
    facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 22v-8.2h2.8l.4-3.3h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.3h2.8V22h3.4z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.9 8.9H3.6V20h3.3V8.9zM5.3 3.5a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM20.4 13.3c0-3-1.6-4.6-3.9-4.6-1.8 0-2.6 1-3 1.7V8.9h-3.3V20h3.3v-6.2c0-1.6.3-3.2 2.3-3.2s2 1.9 2 3.3V20h3.3l-.1-6.7z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7.3A4.7 4.7 0 1016.7 12 4.7 4.7 0 0012 7.3zm0 7.7a3 3 0 113-3 3 3 0 01-3 3zm5-8.8a1.1 1.1 0 101.1 1.1A1.1 1.1 0 0017 6.2zM12 3c-2.4 0-2.7 0-3.7.1a6.5 6.5 0 00-2.2.4 4.5 4.5 0 00-2.6 2.6 6.5 6.5 0 00-.4 2.2C3 9.3 3 9.6 3 12s0 2.7.1 3.7a6.5 6.5 0 00.4 2.2 4.5 4.5 0 002.6 2.6 6.5 6.5 0 002.2.4c1 .1 1.3.1 3.7.1s2.7 0 3.7-.1a6.5 6.5 0 002.2-.4 4.5 4.5 0 002.6-2.6 6.5 6.5 0 00.4-2.2c.1-1 .1-1.3.1-3.7s0-2.7-.1-3.7a6.5 6.5 0 00-.4-2.2 4.5 4.5 0 00-2.6-2.6 6.5 6.5 0 00-2.2-.4C14.7 3 14.4 3 12 3zm0 1.6c2.4 0 2.7 0 3.6.1a4.9 4.9 0 011.7.3 3 3 0 011.7 1.7 4.9 4.9 0 01.3 1.7c.1.9.1 1.2.1 3.6s0 2.7-.1 3.6a4.9 4.9 0 01-.3 1.7 3 3 0 01-1.7 1.7 4.9 4.9 0 01-1.7.3c-.9.1-1.2.1-3.6.1s-2.7 0-3.6-.1a4.9 4.9 0 01-1.7-.3 3 3 0 01-1.7-1.7 4.9 4.9 0 01-.3-1.7c-.1-.9-.1-1.2-.1-3.6s0-2.7.1-3.6a4.9 4.9 0 01.3-1.7 3 3 0 011.7-1.7 4.9 4.9 0 011.7-.3c.9-.1 1.2-.1 3.6-.1z"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L2 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z"/></svg>'
  };
  // Social profiles. Currently the platforms' homepages; replace with the official company profile URLs when available (leave a URL empty to hide that icon).
  var SOCIAL = [
    ['https://www.facebook.com/Rynextech', 'Facebook', 'facebook'],
    ['https://www.linkedin.com', 'LinkedIn', 'linkedin'],
    ['https://www.instagram.com/Rynextech', 'Instagram', 'instagram'],
    ['https://x.com', 'X', 'x']
  ];
  function soc(href, label, icon) {
    return '<a href="' + href + '" target="_blank" rel="noopener noreferrer" aria-label="' + label + '">' + ICON[icon] + '</a>';
  }

  var footer =
    '<div class="rx-footer" role="contentinfo"><div class="rx-f-inner">' +
      '<div class="rx-f-grid">' +
        '<div class="rx-f-brand">' +
          '<a class="rx-brand" href="index.html" aria-label="Rynex Tech"><span class="rx-mark" aria-hidden="true">R</span><span>Rynex <b>Tech</b></span></a>' +
          '<p class="rx-about">' + t('Nepali engineers, delivering the Japanese way. Dedicated software teams, 24/7 client support and cross-border hiring for companies in Japan and beyond.',
            'ネパールのエンジニアが、日本品質でお届けします。専任ソフトウェアチーム、24時間365日のサポート、国境を越えた採用支援を提供します。') + '</p>' +
          '<div class="rx-social">' + SOCIAL.filter(function (x) { return x[0]; }).map(function (x) { return soc(x[0], x[1], x[2]); }).join('') + '</div>' +
        '</div>' +
        '<div class="rx-col"><h4>' + t('Services', 'サービス') + '</h4>' +
          a('index.html#offshore', 'Offshore Development', 'オフショア開発') + a('index.html#support', 'Client Support', 'クライアントサポート') +
          a('index.html#hr', 'HR Service', '人材サービス') + a('index.html#consulting', 'IT Consulting', 'ITコンサルティング') +
          a('index.html#engineering', 'SES System Engineering Service', 'SES（システムエンジニアリングサービス）') +
          a('index.html#method', 'Methodology', '開発手法') + a('services.html', 'All Services', 'サービス一覧') + '</div>' +
        '<div class="rx-col"><h4>' + t('Company', '会社情報') + '</h4>' +
          a('about.html', 'About Us', '会社概要') + a('team.html', 'Our Team', '私たちのチーム') + a('projects.html', 'Portfolios', '実績') +
          a('index.html#career', 'Career', '採用情報') + a('sitemap.html', 'Sitemap', 'サイトマップ') + '</div>' +
        '<div class="rx-col"><h4>' + t('Resources', 'リソース') + '</h4>' +
          a('blog.html', 'Blog', 'ブログ') + a('index.html#contact', 'Contact', 'お問い合わせ') +
          a('index.html#contact', 'Request a Quote', 'お見積り依頼', ' data-quote') +
          a('legal.html#privacy', 'Privacy Policy', 'プライバシーポリシー') + a('legal.html#terms', 'Terms of Service', '利用規約') + '</div>' +
        '<div class="rx-f-contact"><h4>' + t('Contact', 'お問い合わせ') + '</h4>' +
          '<div class="rx-card"><h5>' + t('Nepal Office', 'ネパールオフィス') + '</h5>' +
            '<p>' + t('Kathmandu, Nepal', 'ネパール・カトマンズ') + '</p>' +
            '<p><a href="tel:+9779767984140">+977 9767984140</a></p>' +
            '<p><a href="mailto:info@rynextech.com">info@rynextech.com</a></p>' +
            '<p>' + t('Mon–Fri · 9:00–18:00 NPT', '月〜金 · 9:00〜18:00（ネパール時間）') + '</p></div>' +
          '<div class="rx-card"><h5>' + t('Japan Representation', '日本窓口') + '</h5>' +
            '<p>' + t('Room 201, Act Residence Shin-Koganei, 4-8-14 Higashicho, Koganei-shi, Tokyo 184-0011, Japan', '〒184-0011 東京都小金井市東町4-8-14 アクト・レジデンス新小金井 201号室') + '</p>' +
            '<p><a href="tel:+81424098256">042-409-8256</a></p>' +
            '<p><a href="mailto:info@rynextech.com">info@rynextech.com</a></p></div>' +
        '</div>' +
      '</div>' +
      '<div class="rx-news"><div><h4>' + t('Stay in the loop', '最新情報を受け取る') + '</h4><p>' + t('Practical notes on building software and teams across borders.', '国境を越えたソフトウェア開発とチームづくりの実践ノートをお届けします。') + '</p></div>' +
        '<form class="rx-nl" id="nl"><input type="email" name="email" placeholder="Your email" aria-label="Email" required data-rx-ph-en="Your email" data-rx-ph-ja="メールアドレス" data-rx-aria-en="Email" data-rx-aria-ja="メールアドレス">' +
        '<button type="submit" data-rx-en="Subscribe" data-rx-ja="登録">Subscribe</button></form>' +
        '<p class="rx-nlmsg" id="nlmsg" aria-live="polite"></p></div>' +
      '<div class="rx-f-bottom"><span>' + t('© 2026 Rynex Tech. All rights reserved. · Company Reg. No. 351154/81/82', '© 2026 Rynex Tech. 無断転載を禁じます。 · 会社登録番号 351154/81/82') + '</span>' +
        '<div>' + a('legal.html#privacy', 'Privacy Policy', 'プライバシーポリシー') + a('legal.html#terms', 'Terms of Service', '利用規約') + a('sitemap.html', 'Sitemap', 'サイトマップ') + '</div></div>' +
    '</div></div>';

  var h = document.getElementById('rx-header'), f = document.getElementById('rx-footer');
  if (h) { h.outerHTML = header; }
  if (f) { f.outerHTML = footer; }
  // Make #contact links land on the footer contact block unless the page has its own #contact section.
  var fc = document.querySelector('.rx-f-contact');
  if (fc && !document.getElementById('contact')) fc.id = 'contact';

  // Pages with no translation script of their own (legal, sitemap, about, services, blog, blog-post): default to Japanese like the other pages, unless English was saved.
  if (page === 'legal' || page === 'sitemap' || page === 'about' || page === 'services' || page === 'blog' || page === 'blog-post') {
    var saved = null;
    try { saved = localStorage.getItem('rx-lang'); } catch (e) { }
    root.lang = saved === 'en' ? 'en' : 'ja';
  }

  function apply() {
    var ja = root.lang !== 'en';
    // Every bilingual element on the page (header, footer and page content).
    // Elements with data-rx-html may contain markup (bold, links); the rest are plain text.
    document.querySelectorAll('[data-rx-en]').forEach(function (el) {
      var v = el.getAttribute(ja ? 'data-rx-ja' : 'data-rx-en');
      if (v === null) return;
      if (el.hasAttribute('data-rx-html')) { el.innerHTML = v; } else { el.textContent = v; }
    });
    document.querySelectorAll('[data-rx-alt-en]').forEach(function (el) { el.setAttribute('alt', el.getAttribute(ja ? 'data-rx-alt-ja' : 'data-rx-alt-en')); });
    document.querySelectorAll('[data-rx-aria-en]').forEach(function (el) { el.setAttribute('aria-label', el.getAttribute(ja ? 'data-rx-aria-ja' : 'data-rx-aria-en')); });
    document.querySelectorAll('[data-rx-ph-en]').forEach(function (el) { el.setAttribute('placeholder', el.getAttribute(ja ? 'data-rx-ph-ja' : 'data-rx-ph-en')); });
    document.querySelectorAll('.rx-lang button').forEach(function (b) {
      var on = b.dataset.lang === (ja ? 'ja' : 'en');
      b.classList.toggle('on', on); b.setAttribute('aria-pressed', on);
    });
    // Page title and meta description (legal & sitemap set them on <body>).
    var bd = document.body, tt = bd.getAttribute(ja ? 'data-rx-title-ja' : 'data-rx-title-en');
    if (tt) document.title = tt;
    var dd = bd.getAttribute(ja ? 'data-rx-desc-ja' : 'data-rx-desc-en'), md = document.querySelector('meta[name="description"]');
    if (dd && md) md.setAttribute('content', dd);
  }
  new MutationObserver(apply).observe(root, { attributes: true, attributeFilter: ['lang'] });
  apply();

  document.querySelectorAll('.rx-lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      root.lang = b.dataset.lang === 'en' ? 'en' : 'ja';
      try { localStorage.setItem('rx-lang', root.lang); } catch (e) { }
    });
  });

  // Mobile menu
  var hd = document.querySelector('.rx-header'), tg = hd.querySelector('.rx-toggle');
  function setOpen(o) { hd.classList.toggle('open', o); tg.setAttribute('aria-expanded', o); }
  tg.addEventListener('click', function () { setOpen(!hd.classList.contains('open')); });
  hd.querySelector('.rx-nav').addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  document.addEventListener('click', function (e) { if (!e.target.closest('.rx-header')) setOpen(false); });
  window.matchMedia('(min-width:1221px)').addEventListener('change', function (m) { if (m.matches) setOpen(false); });
  function onScroll() { hd.classList.toggle('rx-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Newsletter: index & projects have their own handler; others use mailto.
  if (page !== 'main' && page !== 'projects') {
    document.getElementById('nl').addEventListener('submit', function (e) {
      e.preventDefault();
      var email = this.querySelector('[name="email"]').value;
      location.href = 'mailto:info@rynextech.com?subject=' + encodeURIComponent('Newsletter signup') + '&body=' + encodeURIComponent('Please subscribe this email address: ' + email);
      document.getElementById('nlmsg').textContent = root.lang === 'en' ? 'Your email app will open to send the signup request.' : 'メールアプリが開きます。送信してご登録ください。';
    });
  }
})();