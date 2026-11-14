/* content.js 의 내용을 읽어서 화면을 그립니다. 평소에는 고칠 필요가 없습니다.
   index.html 은 영어(en), ja.html 은 일본어(ja), ko.html 은 한국어(ko)로 그려집니다. */
(function () {
  const S = SITE;
  const PAGES = { en: "index.html", ja: "ja.html", ko: "ko.html" };
  const LANG_NAMES = { en: "English", ja: "日本語", ko: "한국어" };
  const LANG = PAGES[document.documentElement.lang] ? document.documentElement.lang : "en";
  // 지금 언어의 글이 없을 때 대신 쓸 언어의 순서
  const ORDER = [LANG].concat(Object.keys(PAGES).filter((l) => l !== LANG));

  // 섹션 제목 등 화면에 고정으로 나오는 낱말
  const LABELS = {
    en: {
      about: "About", news: "News", research: "Research", papers: "Publications",
      misc: "Other Publications", presentations: "Presentations", teaching: "Teaching", cv: "CV",
      experience: "Experience", education: "Education", awards: "Awards",
      qualifications: "Fellowships, Programs & Qualifications", memberships: "Memberships",
      outreach: "Social Contribution", cvDownload: "Download CV (PDF)",
      present: "Present", invited: "Invited", nav: "Sections",
    },
    ja: {
      about: "プロフィール", news: "お知らせ", research: "研究", papers: "論文",
      misc: "その他の著作", presentations: "講演・口頭発表等", teaching: "担当経験のある科目", cv: "経歴",
      experience: "職歴", education: "学歴", awards: "受賞",
      qualifications: "フェローシップ・プログラム・資格", memberships: "所属学協会",
      outreach: "社会貢献活動", cvDownload: "履歴書（PDF）",
      present: "現在", invited: "招待", nav: "セクション",
    },
    ko: {
      about: "소개", news: "소식", research: "연구", papers: "논문",
      misc: "기타 저작", presentations: "학회 발표", teaching: "강의 경력", cv: "이력",
      experience: "경력", education: "학력", awards: "수상",
      qualifications: "장학금 · 프로그램 · 자격", memberships: "소속 학회",
      outreach: "사회 공헌 활동", cvDownload: "이력서 (PDF)",
      present: "현재", invited: "초청", nav: "섹션",
    },
  };
  const L = LABELS[LANG];

  // 왼쪽 메뉴와, 각 메뉴를 눌렀을 때 보여 줄 섹션들. 맨 앞의 메뉴가 첫 화면입니다.
  const TABS = {
    about: ["about", "news", "research"],
    papers: ["papers"],
    misc: ["misc"],
    presentations: ["presentations"],
    teaching: ["teaching"],
    cv: ["cv"],
  };

  // { en: "...", ja: "...", ko: "..." } 에서 지금 언어의 글을 고릅니다. 없으면 다른 언어의 글을 씁니다.
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    for (const l of ORDER) if (v[l]) return v[l];
    return "";
  }

  // 태그를 만드는 작은 도우미: el("p", "클래스", "글자")
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function link(label, url, className) {
    const a = el("a", className, label);
    a.href = url;
    if (/^https?:/.test(url)) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }

  const has = (list) => Array.isArray(list) && list.length > 0;
  const period = (p) => t(p).replace(/present/i, L.present);

  /* ---------- 왼쪽 프로필 ---------- */
  const name = t(S.name);
  document.title = [name, t(S.affiliation)].filter(Boolean).join(" | ");
  document.querySelector('meta[name="description"]').content =
    [name, t(S.nameSub), t(S.position), t(S.affiliation)].filter(Boolean).join(" · ");

  // 다른 언어 페이지로 가는 버튼
  const sw = document.getElementById("lang-switch");
  sw.textContent = "";
  const langLinks = ORDER.slice(1).map((l) => {
    const a = link(LANG_NAMES[l], PAGES[l]);
    a.lang = l;
    return sw.appendChild(a);
  });

  const photo = document.getElementById("photo");
  if (S.photo) {
    const img = new Image();
    img.alt = name;
    img.onload = () => { photo.textContent = ""; photo.appendChild(img); };
    img.src = S.photo;
  }
  photo.textContent = name.trim().charAt(0); // 사진 파일이 없으면 이름 첫 글자를 보여 줍니다.

  document.getElementById("name").textContent = name;
  document.getElementById("name-sub").textContent = t(S.nameSub);
  document.getElementById("position").textContent = t(S.position);
  document.getElementById("affiliation").textContent = t(S.affiliation);

  const contact = document.getElementById("contact");
  if (t(S.location)) contact.appendChild(el("li", "plain", t(S.location)));
  if (S.email) contact.appendChild(el("li")).appendChild(link(S.email, "mailto:" + S.email));
  (S.links || []).forEach((l) => contact.appendChild(el("li")).appendChild(link(t(l.label), l.url)));

  /* ---------- 본문 섹션 ---------- */
  const main = document.getElementById("main");
  const nav = document.getElementById("nav");
  nav.setAttribute("aria-label", L.nav);

  function section(id) {
    const sec = el("section");
    sec.id = "sec-" + id;
    sec.appendChild(el("h2", "", L[id]));
    main.appendChild(sec);
    return sec;
  }

  // 저자 목록에서 내 이름을 굵게
  function authors(text) {
    const box = el("div", "sub authors");
    const names = S.myNames || [];
    let rest = text;
    while (rest) {
      let first = -1, hit = "";
      names.forEach((n) => {
        const i = rest.indexOf(n);
        if (i !== -1 && (first === -1 || i < first)) { first = i; hit = n; }
      });
      if (first === -1) { box.appendChild(document.createTextNode(rest)); break; }
      box.appendChild(document.createTextNode(rest.slice(0, first)));
      box.appendChild(el("strong", "", hit));
      rest = rest.slice(first + hit.length);
    }
    return box;
  }

  // 왼쪽에 날짜, 오른쪽에 내용이 오는 목록. 소식·논문·발표·경력 등에 모두 씁니다.
  function rows(items) {
    const ul = el("ul", "rows");
    items.forEach((it) => {
      const li = el("li");
      li.appendChild(el("span", "when", period(it.period || it.date)));
      const body = el("div");
      if (it.text) body.appendChild(el("div", "", t(it.text)));
      if (it.title) {
        const title = el("div", "title", t(it.title));
        if (it.invited) title.appendChild(el("span", "badge", L.invited));
        body.appendChild(title);
      }
      if (t(it.authors)) body.appendChild(authors(t(it.authors)));
      const sub = [t(it.venue), t(it.place), t(it.note)].filter(Boolean).join(" · ");
      if (sub) body.appendChild(el("div", "sub", sub));
      if (has(it.links)) {
        const box = el("div", "item-links");
        it.links.forEach((l) => box.appendChild(link(t(l.label), l.url)));
        body.appendChild(box);
      }
      li.appendChild(body);
      ul.appendChild(li);
    });
    return ul;
  }

  // 소개
  if (has(S.about) || has(S.interests)) {
    const sec = section("about");
    (S.about || []).forEach((p) => sec.appendChild(el("p", "", t(p))));
    if (has(S.interests)) {
      const ul = el("ul", "tags");
      S.interests.forEach((i) => ul.appendChild(el("li", "", t(i))));
      sec.appendChild(ul);
    }
  }

  // 소식
  if (has(S.news)) section("news").appendChild(rows(S.news));

  // 연구 주제
  if (has(S.research)) {
    const sec = section("research");
    S.research.forEach((r) => {
      const card = el("div", "card");
      card.appendChild(el("h4", "", t(r.title)));
      card.appendChild(el("p", "", t(r.description)));
      sec.appendChild(card);
    });
  }

  // 논문 · 그 밖의 저작 · 발표 · 강의
  ["papers", "misc", "presentations", "teaching"].forEach((id) => {
    if (has(S[id])) section(id).appendChild(rows(S[id]));
  });

  // 경력 (여러 목록을 한 섹션에 모읍니다)
  const cvParts = ["experience", "education", "awards", "qualifications", "memberships", "outreach"]
    .filter((id) => has(S[id]));

  if (cvParts.length || S.cv) {
    const sec = section("cv");
    cvParts.forEach((id) => {
      sec.appendChild(el("h3", "", L[id]));
      sec.appendChild(rows(S[id]));
    });
    if (S.cv) sec.appendChild(link(L.cvDownload, S.cv, "button"));
  }

  /* ---------- 왼쪽 메뉴: 누른 메뉴의 내용만 보여 줍니다 ---------- */
  const find = (id) => document.getElementById("sec-" + id);
  const tabs = Object.keys(TABS).filter((tab) => TABS[tab].some(find)); // 내용이 있는 메뉴만
  const tabLinks = {};
  tabs.forEach((tab) => { tabLinks[tab] = nav.appendChild(link(L[tab], "#" + tab)); });

  function show() {
    const wanted = location.hash.slice(1);
    const current = tabs.includes(wanted) ? wanted : tabs[0];
    tabs.forEach((tab) => {
      TABS[tab].forEach((id) => { if (find(id)) find(id).hidden = tab !== current; });
      tabLinks[tab].classList.toggle("active", tab === current);
      if (tab === current) tabLinks[tab].setAttribute("aria-current", "page");
      else tabLinks[tab].removeAttribute("aria-current");
    });
    document.body.dataset.tab = current;
    // 언어를 바꿔도 보고 있던 메뉴가 유지되게 합니다.
    langLinks.forEach((a) => { a.href = PAGES[a.lang] + (current === tabs[0] ? "" : "#" + current); });
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", show);
  show();

  document.getElementById("footer").textContent =
    "© " + new Date().getFullYear() + " " + (S.name.en || name);
})();
