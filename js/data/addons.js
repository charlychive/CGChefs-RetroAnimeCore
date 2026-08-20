/* ADDONS — standalone Blender add-ons bundled with the pack.
   These are NOT nodegroups (no Inputs/Outputs sockets), so each entry sets
   type:"addon" and uses features/requirements lists instead — rendered by
   the addon-card branch in buildArticles() (js/app.js). Add a new addon by
   pushing another object into this array; no need to touch addons.html or
   app.js. */
window.NODEGROUPS.push(
  {
    id: "anim-bake-helper",
    category: "addons",
    type: "addon",
    name: "Anim Bake Helper",
    tagline: "TEMPLATE — one-line tagline",
    description: "TEMPLATE — replace with final description of what Anim Bake Helper does and how it fits into the animation workflow.",
    features: [
      "TEMPLATE — first feature bullet.",
      "TEMPLATE — second feature bullet.",
      "TEMPLATE — third feature bullet."
    ],
    requirements: [
      "TEMPLATE — e.g. Blender 4.x"
    ],
    note: "Placeholder entry — swap in the real feature list, requirements, and a UI screenshot once this addon is finalized."
  }
);
