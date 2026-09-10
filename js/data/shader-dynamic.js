/* SHADER NODES — Dynamic
   Auto-generated split from index.html — each nodegroup here belongs to this
   category/subcategory. Add a new nodegroup by pushing another object into
   this array; no need to touch index.html or app.js. */
window.NODEGROUPS.push(
  {
    id: "anisotropic-specular",
    category: "shader",
    sub: "dynamic",
    name: "Anisotropic Specular",
    tagline: "Directional stretched highlights mask.",
    description: "Control the shape of the specular stretching, ideal to emulate metallic shading, hair reflections and more interesting specular shaping.",
    images: {
      preview: "images/shaders/anisotropic-specular-node.webp"
    },
    inputs: [
      { name:"UV Roughness", type:"vector", desc:"Controls specular roughness independently along U and V surface directions." },
      {
        label: "Reflection Type",
        fields: [
          { name:"Specular", type:"value", desc:"Specular Range — softer highlight." },
          { name:"IOR", type:"value", desc:"Index of Refraction Range — stronger highlight." }
        ]
      },
      { name:"IOR", type:"value", desc:"Index of Refraction setting governing reflection intensity." },
      { name:"Specular Boost", type:"value", desc:"Multiplier to amplify or clamp highlight brightness." },
      { name:"Normal Sphere", type:"vector", desc:"Manually set the direction of the highlight." },
      { name:"Tangent", type:"vector", desc:"Direction vector defining the highlight stretch orientation." },
      { name:"Normal", type:"vector", desc:"Surface normal vector for lighting calculations." }
    ],
    outputs: [
      { name:"Specular", type:"value", desc:"Greyscale mask output." }
    ]
  },
  {
    id: "highlights",
    category: "shader",
    sub: "dynamic",
    name: "Highlight",
    tagline: "High-luminance view-aligned specular mask generator.",
    description: "Control fake reflections and surface highlights with an option to align directly with camera view orientation.",
    images: {
      preview: "images/shaders/highlights-node.webp"
    },
    inputs: [
      { name:"View Aligned", type:"value", desc:"Toggles highlight tracking relative to camera view space versus world space." },
      { name:"Shine", type:"value", desc:"Controls the sharpness and intensity peak of the highlight." },
      { name:"Normal", type:"vector", desc:"Input normal vector to shape the highlight contour." }
    ],
    outputs: [
      { name:"Value", type:"value", desc:"Greyscale mask output." }
    ]
  },
  {
    id: "straight-fresnel",
    category: "shader",
    sub: "dynamic",
    name: "Straight Fresnel",
    tagline: "Angle Snapped Fresnel effect.",
    description: "Calculates pure view-dependent Fresnel reflection masks, complete with controllable falloff curves and snapping controls.",
    images: {
      preview: "images/shaders/straight-fresnel-node.webp"
    },
    inputs: [
      { name:"Facing Blend", type:"value", desc:"Mixes between direct facing angle and rim falloff response." },
      { name:"Normal", type:"vector", desc:"Surface normal vector input." },
      { name:"Fresnel Falloff", type:"value", desc:"Curve exponent governing how fast reflections ramp up at grazing angles." },
      {
        label: "Straight Snapping",
        fields: [
          { name:"View Snapping", type:"value", desc:"Enables discrete stepped banding along the view vector." },
          { name:"Snapping Steps", type:"value", desc:"Number of posterization bands across the Fresnel gradient." },
          { name:"Offset", type:"value", desc:"Shifts the snapping thresholds higher or lower." }
        ]
      }
    ],
    outputs: [
      { name:"Straight", type:"value", desc:"Linear, rigid angle-of-view gradient." },
      { name:"Fresnel", type:"value", desc:"IOR-based Fresnel reflection factor." },
      { name:"Facing", type:"value", desc:"Reverse Fresnel mask." }
    ]
  },
  {
    id: "streaks",
    category: "shader",
    sub: "dynamic",
    name: "Streaks",
    tagline: "Procedural directional noise.",
    description: "Emulates vertical noise reflection streaks seen in anime floors, tables and shiny surfaces. Control the amount, length and contrast of the streaks.",
    images: {
      preview: "images/shaders/streaks-node.webp"
    },
    inputs: [
      { name:"Normal", type:"vector", desc:"Vector input for surface orientation alignment." },
      {
        label: "Mapping Menu",
        fields: [
          { name:"Scale", type:"value", desc:"Overall frequency/density of the streak pattern." },
          { name:"Depth", type:"value", desc:"How deep the noise streak fades." },
          { name:"Power Curve", type:"value", desc:"Contrast curve shifting noise brightness toward peaks or valleys." }
        ]
      },
      {
        label: "Noise Menu",
        fields: [
          { name:"Scale", type:"value", desc:"Scale parameter for internal noise." },
          { name:"Detail", type:"value", desc:"Octave detail level inside the underlying procedural noise." },
          { name:"Roughness", type:"value", desc:"Fine detail falloff between noise octaves." },
          { name:"Lacunarity", type:"value", desc:"Scale gap between consecutive noise octaves." },
          { name:"Smoothness", type:"value", desc:"Blurs edge transitions between procedural streaks." },
          { name:"Randomness", type:"value", desc:"Distorts linear streaks with random spatial variation." }
        ]
      }
    ],
    outputs: [
      { name:"Value", type:"value", desc:"Greyscale mask output." }
    ]
  },
  {
    id: "fresnel-color-mixer",
    category: "shader",
    sub: "dynamic",
    name: "Fresnel Color Mixer",
    tagline: "TEMPLATE — one-line tagline",
    description: "TEMPLATE — replace with final description of what Fresnel Color Mixer does and how it fits into the shading workflow.",
    images: {
      preview: "images/shaders/fresnel-color-mixer-node.webp"
    },
    inputs: [
      { name:"Color A", type:"color", desc:"TEMPLATE — describe what this socket controls." },
      { name:"Color B", type:"color", desc:"TEMPLATE — describe what this socket controls." },
      { name:"IOR", type:"value", desc:"TEMPLATE — describe what this socket controls." }
    ],
    outputs: [
      { name:"Color", type:"color", desc:"TEMPLATE — describe what this socket outputs." }
    ],
  },
  {
    id: "tube-specular",
    category: "shader",
    sub: "dynamic",
    name: "Tube Specular",
    tagline: "TEMPLATE — one-line tagline",
    description: "TEMPLATE — replace with final description of what Tube Specular does and how it fits into the shading workflow.",
    images: {
      preview: "images/shaders/tube-specular-node.webp"
    },
    inputs: [
      { name:"Roughness", type:"value", desc:"TEMPLATE — describe what this socket controls." }
    ],
    outputs: [
      { name:"BSDF", type:"shader", desc:"TEMPLATE — describe what this socket outputs." }
    ],
  }
);
