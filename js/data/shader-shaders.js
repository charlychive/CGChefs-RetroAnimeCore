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
    tagline: "Customized subsurface scattering shader pass with rim color saturation controls.",
    description: "Generates dynamic subsurface light transport effects with explicit color controls, saturation biasing, and custom light penetration profiles. Regular subsurface can look heavily saturated by nature in the subsurface area, so this node helps bring that back to look more akin to how it would be painted on a background surface in anime.",
    images: {
      preview: "images/shaders/custom-subsurface-node.webp"
    },
    inputs: [
      { name:"Color", type:"color", desc:"Primary base diffuse surface color." },
      { name:"Sub Intensity", type:"value", desc:"Strength and reach of the subsurface light absorption." },
      { name:"Custom Subsurface Color", type:"color", desc:"Secondary subsurface tint color for internal light scattering." },
      { name:"Saturation Bias", type:"value", desc:"Shifts the saturation level of light as it scatters deeper into the surface." },
      { name:"Normal", type:"vector", desc:"Surface normal map input for light interaction orientation." }
    ],
    outputs: [
      { name:"Shader", type:"shader", desc:"BSDF material shader output." }
    ]
  }
);
