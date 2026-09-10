/* SHADER NODES — Shaders
   Auto-generated split from index.html — each nodegroup here belongs to this
   category/subcategory. Add a new nodegroup by pushing another object into
   this array; no need to touch index.html or app.js. */
window.NODEGROUPS.push(
  {
    id: "custom-cel-shade",
    category: "shader",
    sub: "shaders",
    name: "Custom Cel Shade",
    tagline: "TEMPLATE — one-line tagline",
    description: "TEMPLATE — replace with final description of what Custom Cel Shade does and how it fits into the shading workflow.",
    inputs: [
      { name:"Base Color", type:"color", desc:"TEMPLATE — describe what this socket controls." },
      { name:"Shading Steps", type:"value", desc:"TEMPLATE — describe what this socket controls." },
      { name:"Shadow Color", type:"color", desc:"TEMPLATE — describe what this socket controls." }
    ],
    outputs: [
      { name:"BSDF", type:"shader", desc:"TEMPLATE — the combined shader output, connect to a Material Output's Surface input." }
    ],
  },
  {
    id: "custom-subsurface",
    category: "shader",
    sub: "shaders",
    name: "Custom Subsurface",
    tagline: "TEMPLATE — one-line tagline",
    description: "TEMPLATE — replace with final description of what Custom Subsurface does and how it fits into the shading workflow.",
    images: {
      preview: "images/shaders/custom-subsurface-node.webp"
    },
    inputs: [
      { name:"Base Color", type:"color", desc:"TEMPLATE — describe what this socket controls." },
      { name:"Radius", type:"vector", desc:"TEMPLATE — describe what this socket controls." }
    ],
    outputs: [
      { name:"BSDF", type:"shader", desc:"TEMPLATE — the combined shader output, connect to a Material Output's Surface input." }
    ],
  }
);
