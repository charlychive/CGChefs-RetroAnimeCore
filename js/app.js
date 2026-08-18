/* ================================================================
   APP LOGIC
   ----------------------------------------------------------------
   Loaded LAST, after every js/data/*.js file has pushed its entries
   into window.NODEGROUPS. Defines the category/subcategory metadata,
   builds the sidebar outliner + article pages from NODEGROUPS, and
   wires up interaction (accordions, scroll-spy, mobile toggle).

   To add a brand-new top-level category or shader subcategory, add it
   to CAT_META / SHADER_SUBCATS below AND create its js/data/*.js file
   AND add a <script src="js/data/...js"> tag in index.html before this
   file. Adding a nodegroup to an EXISTING category/subcategory never
   requires touching this file or index.html — just edit its data file.
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
  shader:      { label:"Shader Nodes",        color:"var(--cat-shader)", subcats: SHADER_SUBCATS },
  compositor:  { label:"Compositing Nodes",   color:"var(--cat-compositor)" },
  modifiers:   { label:"Modifiers",           color:"var(--cat-modifiers)" },
  materials:   { label:"Materials",           color:"var(--cat-materials)" },
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
    const items = groups[cat] || [];
    html += `<div class="nav-group">
      <button type="button" class="nav-group-label collapsed" data-group="${cat}" aria-expanded="false">
        <svg class="chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
        <span class="dot" style="background:${meta.color}"></span>${meta.label}
        <span class="group-count">${items.length}</span>
      </button>
      <div class="nav-group-links collapsed" data-group-links="${cat}"><div class="links-inner">`;

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

  document.querySelectorAll(".nav-group-label").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.group;
      const links = document.querySelector(`[data-group-links="${cat}"]`);
      const wasCollapsed = links.classList.contains("collapsed");

      // close every group first
      document.querySelectorAll(".nav-group-links").forEach(el => el.classList.add("collapsed"));
      document.querySelectorAll(".nav-group-label").forEach(b => {
        b.classList.add("collapsed");
        b.setAttribute("aria-expanded", "false");
      });

      // then reopen only the one that was clicked, if it had been closed
      if(wasCollapsed){
        links.classList.remove("collapsed");
        btn.classList.remove("collapsed");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // subgroup accordion (e.g. Color / Core / Dynamic ... under Shader Nodes) —
  // exclusive within its own parent group, independent of other parent groups.
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
  document.getElementById("articleContent").innerHTML = html;
}

buildNav();
buildArticles();

/* ---------------- scroll-spy ---------------- */
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