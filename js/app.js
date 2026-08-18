/* ================================================================
   APP LOGIC — shared across every page of the site
   ----------------------------------------------------------------
   MULTI-PAGE ARCHITECTURE (as of the split into per-category pages):

   Every page loads window.NODEGROUPS = [] first, then sets
   window.PAGE_CATEGORY to that page's own CAT_META key (e.g. "shader"),
   then loads ONLY that category's js/data/*.js file(s) — never another
   category's — then loads this file last. That means NODEGROUPS on any
   given page only ever contains that page's own nodegroups: nothing else
   loads or renders, so a page with heavy images/GIFs never pulls in
   another category's media.

   The sidebar still shows every category on every page (via CAT_META,
   which is just labels/colors — cheap, no media), but only the CURRENT
   page's category is expandable into individual node links. Every other
   category is a single row that links out to that category's own page
   ("<key>.html" — see pageHref()). This keeps the original rule intact:
   adding a nodegroup to an EXISTING category means editing exactly one
   js/data/*.js file — never any page's HTML, and never this file.

   Adding a brand-new top-level category or shader subcategory still means:
   add it to CAT_META / SHADER_SUBCATS below, create its js/data/*.js file,
   and create its own <key>.html page following the pattern of the other
   category pages (copy one and swap the category key + data script tags +
   header text).

   index.html is NOT a category page — it's the handwritten homepage (its
   own hero copy + a card grid built by buildHomeCards() below, one card
   per CAT_META entry). It sets window.PAGE_CATEGORY = "home", a value
   that deliberately matches no CAT_META key, so every category — install
   included — shows up in the sidebar as a normal external link. The
   Installation Guide lives at install.html like everything else.
   ================================================================ */


/* ================================================================
   RENDERING
   ================================================================ */
/* Subcategories nested inside the "Shader Nodes" outliner group.
   Every shader nodegroup should set a `sub` field matching one of these keys. */
const SHADER_SUBCATS = {
  color:      { label:"Color",      color:"var(--sub-color)" },
  core:       { label:"Core",       color:"var(--sub-core)" },
  dynamic:    { label:"Dynamic",    color:"var(--sub-dynamic)" },
  mapping:    { label:"Mapping",    color:"var(--sub-mapping)" },
  normals:    { label:"Normals",    color:"var(--sub-normals)" },
  shaders:    { label:"Shaders",    color:"var(--sub-shaders)" },
  texturing:  { label:"Texturing",  color:"var(--sub-texturing)" },
  utilities:  { label:"Utilities",  color:"var(--sub-utilities)" }
};

const CAT_META = {
  install:     { label:"Installation Guide",  color:"var(--cat-install)" },
  materials:   { label:"Materials",           color:"var(--cat-materials)" },
  shader:      { label:"Shader Nodes",        color:"var(--cat-shader)", subcats: SHADER_SUBCATS },
  compositor:  { label:"Compositing Nodes",   color:"var(--cat-compositor)" },
  modifiers:   { label:"Modifiers",           color:"var(--cat-modifiers)" },
  assets:      { label:"Assets",              color:"var(--cat-assets)" },
  roadmap:     { label:"Roadmap",             color:"var(--cat-roadmap)" },
  tutorials:   { label:"Tutorials",           color:"var(--cat-tutorials)" },
  faq:         { label:"FAQ",                 color:"var(--cat-faq)" },
  contact:     { label:"Contact",             color:"var(--cat-contact)" }
};
const TYPE_COLOR = {
  shader:"var(--sock-shader)", value:"var(--sock-value)",
  vector:"var(--sock-vector)", color:"var(--sock-color)", image:"var(--sock-image)"
};

/* One-line descriptions used on the homepage's category cards
   (buildHomeCards) — kept in sync with each page's own header lead text. */
const CAT_BLURB = {
  install:     "Get the pack installed and ready to use — links, requirements, and setup steps.",
  materials:   "Ready-made materials, broken down the same way as the nodegroups — inputs, outputs, and what each one is for.",
  shader:      "Every custom Shader Node in the pack — what each socket does, its type, and its default value.",
  compositor:  "Every custom Compositor Node in the pack — what each socket does, its type, and its default value.",
  modifiers:   "Custom modifier setups, with the settings and sockets that matter explained.",
  assets:      "Meshes, rigs, and other ready-to-use assets included in the pack.",
  roadmap:     "What's shipped, what's in progress, and what's planned next.",
  tutorials:   "Walkthroughs and guides for getting the most out of the pack.",
  faq:         "Answers to common questions about installing and using the pack.",
  contact:     "Ways to reach CGCHEFS with questions, bug reports, or feedback."
};

/* Every category's own page — "<key>.html" at the site root. */
function pageHref(cat){
  return `${cat}.html`;
}

function imgSlot(label, hint, src){
  if(src){
    return `<figure class="img-slot has-image" style="margin:0">
      <img src="${src}" alt="${label}" loading="lazy" decoding="async">
    </figure>`;
  }
  return `<div class="img-slot">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
    </svg>
    <div class="slot-label">${label}</div>
    <div class="slot-hint">${hint}</div>
  </div>`;
}

function buildNav(){
  const groups = {};
  NODEGROUPS.forEach(n => (groups[n.category] ||= []).push(n));
  let html = "";

  Object.keys(CAT_META).forEach(cat => {
    const meta = CAT_META[cat];
    const isCurrent = cat === window.PAGE_CATEGORY;

    if(!isCurrent){
      // Every category that ISN'T this page: one plain row that links out
      // to that category's own page. We deliberately never show its item
      // list or count here — that data lives in a js/data/*.js file this
      // page never loads, which is the entire point of splitting by page.
      html += `<div class="nav-group">
        <a class="nav-group-label nav-external" href="${pageHref(cat)}">
          <span class="dot" style="background:${meta.color}"></span>${meta.label}
          <svg class="external-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M9 6l6 6-6 6"/></svg>
        </a>
      </div>`;
      return;
    }

    // The current page's own category: full expandable outliner tree,
    // open by default since it's the whole reason you're on this page.
    const items = groups[cat] || [];
    html += `<div class="nav-group">
      <button type="button" class="nav-group-label current-page" data-group="${cat}" aria-expanded="true">
        <svg class="chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
        <span class="dot" style="background:${meta.color}"></span>${meta.label}
        <span class="group-count">${items.length}</span>
      </button>
      <div class="nav-group-links" data-group-links="${cat}"><div class="links-inner">`;

    if(meta.subcats){
      // nested outliner tree: group this category's items by their `sub` key
      const subGroups = {};
      items.forEach(n => (subGroups[n.sub] ||= []).push(n));
      Object.keys(meta.subcats).forEach(subKey => {
        const subMeta = meta.subcats[subKey];
        const subItems = subGroups[subKey] || [];
        html += `<div class="nav-subgroup">
          <button type="button" class="nav-subgroup-label collapsed" data-subgroup="${cat}-${subKey}" aria-expanded="false">
            <svg class="chevron" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
            <span class="dot" style="background:${subMeta.color}"></span>${subMeta.label}
            <span class="group-count">${subItems.length}</span>
          </button>
          <div class="nav-subgroup-links collapsed" data-subgroup-links="${cat}-${subKey}"><div class="links-inner">`;
        if(subItems.length){
          subItems.forEach(n => {
            html += `<a class="nav-link sub-link" data-target="${n.id}" href="#${n.id}" style="--accent-active:${subMeta.color}">
              <span class="stub" style="background:${subMeta.color}"></span>${n.name}
            </a>`;
          });
        } else {
          html += `<div class="nav-empty">Coming soon</div>`;
        }
        html += `</div></div></div>`;
      });
    } else if(items.length){
      items.forEach(n => {
        html += `<a class="nav-link" data-target="${n.id}" href="#${n.id}" style="--accent-active:${meta.color}">
          <span class="stub" style="background:${meta.color}"></span>${n.name}
        </a>`;
      });
    } else {
      html += `<div class="nav-empty">Coming soon</div>`;
    }
    html += `</div></div></div>`;
  });

  document.getElementById("navContent").innerHTML = html;

  // Current-page group toggle (collapse it if you want to scan the rest of
  // the sidebar without scrolling past every item). Only one such group
  // exists per page now, so there's no "close the others" exclusivity to
  // manage — that only mattered when every category lived on one page.
  document.querySelectorAll(".nav-group-label[data-group]").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.group;
      const links = document.querySelector(`[data-group-links="${cat}"]`);
      const wasCollapsed = links.classList.contains("collapsed");
      links.classList.toggle("collapsed");
      btn.classList.toggle("collapsed", !wasCollapsed);
      btn.setAttribute("aria-expanded", String(wasCollapsed));
    });
  });

  // subgroup accordion (e.g. Color / Core / Dynamic ... under Shader Nodes) —
  // exclusive within the current page's single expanded group.
  document.querySelectorAll(".nav-subgroup-label").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const key = btn.dataset.subgroup;
      const parentGroup = btn.closest(".nav-group-links");
      const links = document.querySelector(`[data-subgroup-links="${key}"]`);
      const wasCollapsed = links.classList.contains("collapsed");

      parentGroup.querySelectorAll(".nav-subgroup-links").forEach(el => el.classList.add("collapsed"));
      parentGroup.querySelectorAll(".nav-subgroup-label").forEach(b => {
        b.classList.add("collapsed");
        b.setAttribute("aria-expanded", "false");
      });

      if(wasCollapsed){
        links.classList.remove("collapsed");
        btn.classList.remove("collapsed");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

function socketRow(s){
  return `<div class="socket-row">
    <div class="socket-dot-col"><div class="socket-dot" style="background:${TYPE_COLOR[s.type]}"></div></div>
    <div>
      <div class="socket-name-row">
        <span class="socket-name">${s.name}</span>
      </div>
      <p class="socket-desc">${s.desc}</p>
    </div>
  </div>`;
}

function buildArticles(){
  // Pages that don't render nodegroup data (currently just the handwritten
  // homepage) have no #articleContent element at all — nothing to do here.
  const container = document.getElementById("articleContent");
  if(!container) return;

  if(!NODEGROUPS.length){
    container.innerHTML = `
      <div class="empty-page">
        <div class="section-label">Coming soon</div>
        <p>This section doesn't have any published entries yet. Check back soon, or jump to another category from the sidebar.</p>
      </div>`;
    return;
  }

  let html = "";
  NODEGROUPS.forEach(n => {
    const meta = CAT_META[n.category];
    const subMeta = (meta.subcats && n.sub) ? meta.subcats[n.sub] : null;
    const badgeColor = subMeta ? subMeta.color : meta.color;
    const badgeLabel = subMeta ? subMeta.label : n.category;
    const crumb = subMeta ? `NodeGroups &gt; ${meta.label} &gt; ${subMeta.label} &gt; ${n.name}` : `NodeGroups &gt; ${n.name}`;
    html += `
    <article class="node-article" id="${n.id}">
      <div class="node-main">
        <div class="node-kicker">
          <span class="cat-badge"><span class="dot" style="background:${badgeColor}"></span>${badgeLabel}</span>
          <span class="node-path">${crumb}</span>
        </div>
        <h2>${n.name}</h2>
        <div class="node-tagline">${n.tagline}</div>
        <p class="node-desc">${n.description}</p>

        <div class="section-label">Inputs</div>
        ${n.inputs.map(socketRow).join("")}

        <div class="section-label">Outputs</div>
        <div class="outputs-list">${n.outputs.map(socketRow).join("")}</div>

        ${n.note ? `<div class="node-note"><strong>Note —</strong> ${n.note}</div>` : ""}
      </div>

      <aside class="node-images">
        ${imgSlot("Node Preview", "Screenshot of the nodegroup's interface / node editor layout", n.images && n.images.preview)}
      </aside>
    </article>`;
  });
  container.innerHTML = html;
}

/* Homepage-only: one card per CAT_META entry, in the same order as the
   sidebar, linking out to that category's page. No-ops on every other
   page since #homeCards only exists on index.html. */
function buildHomeCards(){
  const container = document.getElementById("homeCards");
  if(!container) return;
  let html = "";
  Object.keys(CAT_META).forEach(cat => {
    const meta = CAT_META[cat];
    html += `<a class="home-card" href="${pageHref(cat)}" style="--card-accent:${meta.color}">
      <div class="home-card-head">
        <span class="dot" style="background:${meta.color}"></span>
        <h3>${meta.label}</h3>
      </div>
      <p>${CAT_BLURB[cat] || ""}</p>
    </a>`;
  });
  container.innerHTML = html;
}

buildNav();
buildArticles();
buildHomeCards();

/* ---------------- scroll-spy ---------------- */
/* Only ever observes THIS page's own sections, since NODEGROUPS only ever
   holds this page's own category. */
const links = Array.from(document.querySelectorAll(".nav-link"));
const sections = NODEGROUPS.map(n => document.getElementById(n.id));
const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const link = links.find(l => l.dataset.target === entry.target.id);
    if(!link) return;
    if(entry.isIntersecting) {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
}, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });
sections.forEach(s => s && spy.observe(s));

/* ---------------- mobile sidebar toggle ---------------- */
const sidebar = document.getElementById("sidebar");
const scrim = document.getElementById("sidebarScrim");
document.getElementById("sidebarToggle").addEventListener("click", () => {
  sidebar.classList.toggle("open"); scrim.classList.toggle("open");
});
scrim.addEventListener("click", () => { sidebar.classList.remove("open"); scrim.classList.remove("open"); });
links.forEach(l => l.addEventListener("click", () => { sidebar.classList.remove("open"); scrim.classList.remove("open"); }));
