/* SHADER NODES — Color
   Auto-generated split from index.html — each nodegroup here belongs to this
   category/subcategory. Add a new nodegroup by pushing another object into
   this array; no need to touch index.html or app.js. */
window.NODEGROUPS.push(
  {
    id: "gouache-color",
    category: "shader",
    sub: "color",
    name: "Gouache Color",
    tagline: "Simple 1 color juicy filter.",
    description: "Use a texture mask to emulate a gouache style gradient color falloff and pigment buildup.",
    images: {
      preview: "images/shaders/gouache-color-node.webp"
    },
    inputs: [
      { name:"Factor", type:"value", desc:"Use as input for grayscale mask." },
      { name:"Pigment Color", type:"color", desc:"Choose the local color the pigment should be." }
    ],
    outputs: [
      { name:"Color", type:"color", desc:"The final blended RGB color result." }
    ],
    note: "Use texture masks that have a good balance of noise, contrast and gradient information to get a tangible effect. Use this in combination with other nodes, mixed over or as an underpaint layer."
  },
  {
    id: "lut",
    category: "shader",
    sub: "color",
    name: "LUT",
    tagline: "Poster Color grading preset with optional high-precision 3D smoothing.",
    description: "Remaps your material's colors using standard look-up table data, with an integrated switch to toggle trilinear interpolation for smoothing out harsh color banding during heavy tone transforms.",
    images: {
      preview: "images/shaders/lut-node.webp"
    },
    inputs: [
      { name:"Color", type:"color", desc:"Base color input or texture map to be color-graded." },
      { name:"Amount", type:"value", desc:"Blend factor controlling the strength of the LUT effect." },
      { name:"Noise Dithering", type:"value", desc:"Adds subtle high-frequency noise during sampling to prevent visual color banding in gradients." },
      { name:"Preserve Luminosity", type:"value", desc:"Maintains the perceived brightness of the input image while applying only the hue and saturation changes from the LUT." },
      {
        label: "LUT / LUT Trilinear",
        desc: "Switches between standard LUT sampling and trilinear 3D interpolation for smoother transitions between neighboring color points. (LUT Trilinear is more expensive.)"
      },
      {
        label: "Advanced",
        fields: [
          { name:"Grid Size", type:"value", desc:"Defines the resolution/dimensions of the LUT grid array (e.g., 8x8, 16x16, 33x33) for accurate sampling math. Default is 8 with the stock LUT — if you change it for your own custom LUT, make sure to match your grid resolution." }
        ]
      }
    ],
    outputs: [
      { name:"Color", type:"color", desc:"The final blended RGB color result." }
    ]
  },
  {
    id: "mix-hsl",
    category: "shader",
    sub: "color",
    name: "Mix HSL",
    tagline: "Color mixing node focused on Hue, Lightness, and Saturation blending.",
    description: "Lets you blend colors by directly targeting their hue, lightness, and saturation values rather than raw RGB channels, giving you much cleaner control over tone shifts.",
    images: {
      preview: "images/shaders/mix-hsl-node.webp"
    },
    inputs: [
      { name:"Factor", type:"value", desc:"Controls the blend weight between the two color inputs." },
      { name:"Color 1", type:"color", desc:"The base color input (or first image/texture) being blended." },
      { name:"Color 2", type:"color", desc:"The secondary color input (or second image/texture) being blended." },
      {
        label: "Advanced Settings",
        fields: [
          { name:"Green Bias", type:"value", desc:"A utility toggle that shifts HSL color space weighting slightly toward green hues, helping preserve natural luminance levels." }
        ]
      }
    ],
    outputs: [
      { name:"Color", type:"color", desc:"The final blended RGB color result." }
    ]
  },
  {
    id: "mix-ryb",
    category: "shader",
    sub: "color",
    name: "Mix RYB",
    tagline: "Realistic paint blending driven by traditional color theory.",
    description: "Mixes colors using the subtractive Red-Yellow-Blue model instead of RGB. This mimics how physical pigments interact, so mixing yellow and blue gives you natural green instead of muddy gray.",
    images: {
      preview: "images/shaders/mix-ryb-node.webp"
    },
    inputs: [
      { name:"Factor", type:"value", desc:"Controls the blend weight between the two color inputs." },
      { name:"Color 1", type:"color", desc:"The base color input (or first image/texture) being blended." },
      { name:"Color 2", type:"color", desc:"The secondary color input (or second image/texture) being blended." }
    ],
    outputs: [
      { name:"Color", type:"color", desc:"The final blended RGB color result." }
    ]
  },
  {
    id: "color-blend-mix",
    category: "shader",
    sub: "color",
    name: "Color Blend Mix",
    tagline: "Useful Color Blending Menu Switcher.",
    description: "Blends two color inputs using standard Mix, traditional RYB, or HSL color modes, featuring built-in controls to fine-tune final brightness, hue, and saturation.",
    images: {
      preview: "images/shaders/color-blend-mix-node.webp"
    },
    inputs: [
      { name:"Mask Input", type:"value", desc:"Scalar mask/factor controlling the blend between the 2 color inputs." },
      {
        label: "Blending Mode",
        desc: "Mix, Mix RYB, or Mix HSL."
      },
      {
        label: "Color",
        fields: [
          { name:"Color 1", type:"color", desc:"The base color input (or first image/texture) being blended." },
          { name:"Color 2", type:"color", desc:"The secondary color input (or second image/texture) being blended." }
        ]
      },
      {
        label: "Post Settings",
        fields: [
          { name:"Brightness", type:"value", desc:"Adjusts overall output brightness level in post." },
          { name:"Hue", type:"value", desc:"Shifts the overall hue of the output result." },
          { name:"Saturation", type:"value", desc:"Multiplies the output color intensity/saturation." }
        ]
      }
    ],
    outputs: [
      { name:"Color", type:"color", desc:"The final blended RGB color result." }
    ]
  },
  {
    id: "tricolor-blend-mix",
    category: "shader",
    sub: "color",
    name: "TriColor Blend Mix",
    tagline: "Three-way color blending with falloff mapping.",
    description: "Maps three distinct color inputs (Light, Midtone, Dark) across a driving mask input, giving you full control over threshold ranges, falloff softness, and post-adjustments.",
    images: {
      preview: "images/shaders/tricolor-blend-mix-node.webp"
    },
    inputs: [
      { name:"Mask Input", type:"value", desc:"Scalar mask/factor controlling the blend between the color inputs." },
      {
        label: "Blending Mode",
        desc: "Mix, Mix RYB, or Mix HSL blend modes (see descriptions)."
      },
      {
        label: "Color Settings",
        fields: [
          { name:"Light", type:"color", desc:"Highlight color band input." },
          { name:"Midtone", type:"color", desc:"Midtone color band input." },
          { name:"Dark", type:"color", desc:"Shadow color band input." },
          { name:"Light Falloff", type:"value", desc:"Softness/transition width of the light color boundary." },
          { name:"Light Range", type:"value", desc:"Threshold position where the light color activates." },
          { name:"Dark Falloff", type:"value", desc:"Softness/transition width of the dark color boundary." },
          { name:"Dark Range", type:"value", desc:"Threshold position where the dark color activates." }
        ]
      },
      {
        label: "Post Settings",
        fields: [
          { name:"Brightness", type:"value", desc:"Adjusts overall output brightness level in post." },
          { name:"Hue", type:"value", desc:"Shifts the overall hue of the output result." },
          { name:"Saturation", type:"value", desc:"Multiplies the output color intensity/saturation." }
        ]
      }
    ],
    outputs: [
      { name:"Color", type:"color", desc:"The final blended RGB color result." }
    ]
  }
);
