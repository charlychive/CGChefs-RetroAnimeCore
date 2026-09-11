/* SHADER NODES — Utilities
   Auto-generated split from index.html — each nodegroup here belongs to this
   category/subcategory. Add a new nodegroup by pushing another object into
   this array; no need to touch index.html or app.js. */
window.NODEGROUPS.push(
  {
    id: "smooth-threshold",
    category: "shader",
    sub: "utilities",
    name: "Smooth Threshold+",
    tagline: "Smooth step thresholding operation with clamping and inversion features.",
    description: "Applies a smooth transition threshold to scalar input values, enabling soft edge isolation, ramp filtering, or anti-aliased value clamping. Use it like a contrast node.",
    images: {
      preview: "images/shaders/smooth-threshold-node.webp"
    },
    inputs: [
      {
        label: "Range Clamp Method",
        desc: "Defines boundary rules to prevent mathematically invalid or out-of-bounds math when calculating threshold transitions:",
        fields: [
          { name:"None", type:"value", desc:"Disables input parameter clamping, allowing threshold values to extend freely." },
          { name:"Bound Threshold", type:"value", desc:"Keeps the threshold value within safe valid limits." },
          { name:"Bound Range Symmetric", type:"value", desc:"Scales and clamps the smooth transition evenly on both sides of the threshold." },
          { name:"Bound Range Asymmetric", type:"value", desc:"Clamps the smooth transition independently on either side of the threshold." },
          { name:"Bound Threshold & Range", type:"value", desc:"Enforces boundary limits on both the threshold midpoint and the transition width simultaneously." }
        ]
      },
      { name:"Clamp", type:"value", desc:"Locks the final calculated output values strictly within a normalized 0.0 to 1.0 range, preventing unexpected negative values or over-bright highlights." },
      { name:"Invert", type:"value", desc:"Flips output values to invert black and white threshold regions." },
      { name:"Value", type:"value", desc:"Input scalar data value to be thresholded." },
      { name:"Threshold", type:"value", desc:"Midpoint value boundary for the smooth transition." },
      { name:"Smooth Range", type:"value", desc:"Softness width applied along the threshold boundary." }
    ],
    outputs: [
      { name:"Value", type:"value", desc:"Filtered scalar value output." }
    ]
  },
  {
    id: "easypower",
    category: "shader",
    sub: "utilities",
    name: "Easy Power",
    tagline: "Exponential contrast and falloff shaping utility.",
    description: "Adjusts input value curves using power scaling and shape bias controls to create custom contrast falloffs, gamma adjustments, and value remaps.",
    images: {
      preview: "images/shaders/easypower-node.webp"
    },
    inputs: [
      { name:"Value", type:"value", desc:"Input scalar value to undergo exponential shaping." },
      { name:"Power Shape", type:"value", desc:"Exponent modifier that adjusts the steepness of the curve response." },
      { name:"Shape Bias", type:"value", desc:"Offsets the baseline balance of the exponential response curve." }
    ],
    outputs: [
      { name:"Value", type:"value", desc:"Power-shaped scalar value output." }
    ]
  }
);
