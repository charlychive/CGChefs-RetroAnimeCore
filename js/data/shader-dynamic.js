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
    tagline: "Angle-dependent three-tone material colorizer.",
    description: "Combines a 3-point color gradient with Fresnel angle calculations, driving color shifts from center to rim based on view angle and snapping steps.",
    images: {
      preview: "images/shaders/fresnel-color-mixer-node.webp"
    },
    inputs: [
      {
        label: "Color Blending Mode",
        desc: "Mix, Mix RYB, or Mix HSL."
      },
      {
        label: "Colors",
        fields: [
          { name:"Light", type:"color", desc:"Highlight color or image texture." },
          { name:"Midtone", type:"color", desc:"Midtone color or image texture." },
          { name:"Shadow", type:"color", desc:"Shadow color or image texture." }
        ]
      },
      {
        label: "Gradient Settings",
        fields: [
          { name:"Light Falloff", type:"value", desc:"Softness/transition width of the light color boundary." },
          { name:"Light Range", type:"value", desc:"Threshold position where the light color activates." },
          { name:"Shadow Falloff", type:"value", desc:"Softness/transition width of the dark color boundary." },
          { name:"Shadow Range", type:"value", desc:"Threshold position where the dark color activates." }
        ]
      },
      {
        label: "Fresnel Settings",
        fields: [
          { name:"Straight", type:"value", desc:"Linear, rigid angle-of-view gradient." },
          { name:"Fresnel", type:"value", desc:"IOR-based Fresnel reflection gradient." },
          { name:"Facing", type:"value", desc:"Reverse Fresnel mask gradient." },
          { name:"View Snapping", type:"value", desc:"Snaps the reflection to view." },
          { name:"Snapping Steps", type:"value", desc:"Quantizes the snapping angle range." },
          { name:"Offset", type:"value", desc:"Shifts the reflection across the mesh normals." },
          { name:"Normal", type:"vector", desc:"Surface normal vector input, influences the reflection distortion." }
        ]
      }
    ],
    outputs: [
      { name:"Color", type:"color", desc:"The final blended RGB color result." }
    ]
  },
  {
    id: "tube-specular",
    category: "shader",
    sub: "dynamic",
    name: "Tube Specular",
    tagline: "Tangent-based specular highlight for cylindrical geometry.",
    description: "Calculates continuous specular highlights optimized for cylindrical and tubular shapes like cables, pipes, and organic tendrils using tangent vectors.",
    images: {
      preview: "images/shaders/tube-specular-node.webp"
    },
    inputs: [
      { name:"Roughness", type:"value", desc:"Broadness and blurriness of the specular gradient mask." },
      { name:"Normal", type:"vector", desc:"Surface normal vector input, influences specular distortion." },
      { name:"Tangent", type:"vector", desc:"Longitudinal tangent vector driving highlight alignment along the tube axis." }
    ],
    outputs: [
      { name:"Specular", type:"value", desc:"Greyscale mask output." }
    ]
  }
);
