/* SHADER NODES — Texturing
   Auto-generated split from index.html — each nodegroup here belongs to this
   category/subcategory. Add a new nodegroup by pushing another object into
   this array; no need to touch index.html or app.js. */
window.NODEGROUPS.push(
  {
    id: "add-whitenoise",
    category: "shader",
    sub: "texturing",
    name: "Add Whitenoise",
    tagline: "Procedural white noise color overlay with dither controls.",
    description: "Blends high-frequency white noise across base color maps to break up banding and add micro-surface grit.",
    images: {
      preview: "images/shaders/add-whitenoise-node.webp"
    },
    inputs: [
      { name:"Color", type:"color", desc:"Incoming base image or color input." },
      { name:"Noise Dithering", type:"value", desc:"Intensity of high-frequency dither noise injected into the color output." }
    ],
    outputs: [
      { name:"Color", type:"color", desc:"Modified color output containing white noise dithering." }
    ]
  },
  {
    id: "gobo-noise-a",
    category: "shader",
    sub: "texturing",
    name: "Gobo Noise A",
    tagline: "Procedural light-gobo noise generator for dynamic light masking as a card projection.",
    description: "Simulates lighting gobos, shadowed silhouettes, and atmospheric light passing through cards using procedural noise controls and transform mappings.",
    images: {
      preview: "images/shaders/gobo-noise-a-node.webp"
    },
    inputs: [
      { name:"Shadow Amount", type:"value", desc:"Intensity and density of projected shadow patterns." },
      { name:"Transparency", type:"value", desc:"Alpha opacity balance of the gobo pattern." },
      { name:"Edge Noise", type:"value", desc:"Distorts and roughens the perimeter edges of projected shadow lines." },
      { name:"Noise Scale", type:"value", desc:"Sets the frequency and size of the gobo noise texture." },
      { name:"Noise Detail", type:"value", desc:"Adds fractal detail layers to the shadow pattern edges." },
      { name:"Noise Roughness", type:"value", desc:"Multiplies fine detail contrast within shadow octaves." },
      { name:"Lacunarity", type:"value", desc:"Frequency step scaling factor between noise layers." },
      { name:"Distortion", type:"value", desc:"Warps and twists the gobo shadow pattern." },
      {
        label: "Transform Settings",
        fields: [
          { name:"Location X / Y / Z", type:"value", desc:"World/local positional shifts for the gobo origin." },
          { name:"Scale X / Y", type:"value", desc:"Horizontal and vertical scaling dimensions of the gobo projection." },
          { name:"Rotation", type:"value", desc:"Rotational angle offset for the gobo stencil." }
        ]
      }
    ],
    outputs: [
      { name:"Output", type:"shader", desc:"Complete gobo material shader or color pass." },
      { name:"Invisible Card", type:"shader", desc:"Same as Output, but the card itself is invisible on both sides to the camera (useful when the card is blocking your view)." }
    ]
  },
  {
    id: "screennoise",
    category: "shader",
    sub: "texturing",
    name: "ScreenNoise",
    tagline: "Screen-space procedural noise coordinate generator.",
    description: "Generates resolution-independent procedural noise locked to screen space coordinates, ideal for material based camera grain, post-process stylization, or UI overlays. Unlike Spatial UVs, Spatial UVs Stable, or Sticky Grain, it doesn't stick to the surface of objects — which in some cases is exactly what you want.",
    images: {
      preview: "images/shaders/screennoise-node.webp"
    },
    inputs: [
      { name:"Normalize", type:"value", desc:"Normalizes output vector values into a standardized range." },
      { name:"Vector", type:"vector", desc:"Screen coordinate mapping input vector." },
      { name:"Scale", type:"value", desc:"Frequency size of the screen-space noise cells." },
      { name:"Detail", type:"value", desc:"Octave passes for fine micro-grain detail." },
      { name:"Roughness", type:"value", desc:"Sharpness and contrast multiplier across noise octaves." },
      { name:"Lacunarity", type:"value", desc:"Frequency scaling multiplier between noise layers." },
      { name:"Distortion", type:"value", desc:"Warps screen noise mapping." }
    ],
    outputs: [
      { name:"Factor", type:"value", desc:"Grayscale intensity noise value pass." },
      { name:"Color", type:"color", desc:"Modified color output containing screen noise dithering." }
    ]
  },
  {
    id: "soft-ao",
    category: "shader",
    sub: "texturing",
    name: "Soft AO",
    tagline: "Comprehensive dithered ambient occlusion, cavity, and curvature mask generator.",
    description: "Built on Blender's native SSAO node. Extracts soft surface contact shadows, dirt-accumulating cavities, and exposed edges to generate realistic wear and occlusion masks.",
    images: {
      preview: "images/shaders/soft-ao-node.webp"
    },
    inputs: [
      { name:"Color", type:"color", desc:"Un-occluded base surface color." },
      { name:"AO Color", type:"color", desc:"Tint color applied to shadowed, crevice, or cavity regions." },
      {
        label: "Controls Mode",
        fields: [
          { name:"Cavity / Curvature / Both", type:"value", desc:"Selects whether the node extracts concave crevices (Cavity), convex ridges (Curvature), or both simultaneously." },
          { name:"Invert AO", type:"value", desc:"Reverses ambient occlusion mapping (swapping light and dark areas)." },
          { name:"Distance", type:"value", desc:"Maximum ray trace sampling distance for occlusion detection." },
          { name:"AO Intensity", type:"value", desc:"Strength multiplier applied to occluded areas." },
          { name:"Threshold", type:"value", desc:"Cutoff point for isolating deep crevices from flat surfaces." },
          { name:"AO Distance", type:"value", desc:"Secondary falloff radius for fine contact shadowing." },
          { name:"Smooth Range", type:"value", desc:"Softens or sharpens the transition gradient along occlusion boundaries." },
          { name:"AO Brightness", type:"value", desc:"Overall brightness adjustment factor for the output mask." }
        ]
      },
      {
        label: "Extra Inputs",
        fields: [
          { name:"AO Normal", type:"vector", desc:"Optional custom normal map input to influence cavity tracing." }
        ]
      }
    ],
    outputs: [
      { name:"Color", type:"color", desc:"Final composite color output with AO applied." },
      { name:"AO Mask", type:"value", desc:"Isolated grayscale mask of ambient occlusion and cavity regions." }
    ]
  },
  {
    id: "hex-voronoi-splat",
    category: "shader",
    sub: "texturing",
    name: "HexVoronoiSplat",
    tagline: "Hexagonal Voronoi texture splatting generator with transition blending.",
    description: "Maps and splats images across a hexagonal Voronoi cell grid, using customizable noise and transition controls to eliminate visible repeating seams.",
    images: {
      preview: "images/shaders/hex-voronoi-splat-node.webp"
    },
    inputs: [
      { name:"Vector", type:"vector", desc:"Input surface mapping coordinates." },
      { name:"Image Sample", type:"image", desc:"Source image texture to be randomly splatted across the grid using a closure input." },
      { name:"Blend", type:"value", desc:"Cross-fade amount along cell boundary edges." },
      {
        label: "Transition Mode (Smooth / Noise)",
        desc: "Selects between a soft gradient or a noisy pattern along splat seams.",
        subpanels: [
          {
            label: "Noise Settings",
            fields: [
              { name:"Noise Strength", type:"value", desc:"Intensity of edge distortion along cell transitions." },
              { name:"Scale", type:"value", desc:"Scale of the noise pattern blurring the cell seams." },
              { name:"Detail", type:"value", desc:"Number of detail octave passes used for edge breakups." },
              { name:"Roughness", type:"value", desc:"Detail contrast factor along transition borders." },
              { name:"Lacunarity", type:"value", desc:"Step multiplier between noise transition layers." },
              { name:"Distortion", type:"value", desc:"Warps the edge transition boundary shape." }
            ]
          }
        ]
      },
      {
        label: "Voronoi Settings",
        fields: [
          { name:"Scale", type:"value", desc:"Cell grid density scale across the surface." },
          { name:"Point Chance", type:"value", desc:"Probability that a cell contains an active image splat instance." },
          { name:"Randomness", type:"value", desc:"Positional scatter irregularity of the hexagonal Voronoi grid points." }
        ]
      },
      {
        label: "Transforms",
        fields: [
          { name:"Cel Texture Scale", type:"value", desc:"Changes the size of each cel internally." },
          { name:"Random Scale", type:"value", desc:"Randomizes the scale of individual cels." },
          { name:"Random Offset", type:"value", desc:"Offsets each cel's location randomly." },
          { name:"Random Rotation", type:"value", desc:"Randomizes the rotation of individual cels." }
        ]
      }
    ],
    outputs: [
      { name:"Image", type:"image", desc:"Combined splatted image output pass." }
    ]
  },
  {
    id: "sticky-grain",
    category: "shader",
    sub: "texturing",
    name: "Sticky Grain",
    tagline: "Surface and value aware grain noise generator with infinite zoom resolution.",
    description: "Applies fine grain noise across surfaces, offering independent noise controls for illuminated and shadowed regions. Uses logic similar to Spatial UVs Stable, applied to a grain/noise chain instead of UV coordinates.",
    images: {
      preview: "images/shaders/sticky-grain-node.webp"
    },
    inputs: [
      { name:"Color", type:"color", desc:"Input base material color or texture pass." },
      { name:"Light Noise Amount", type:"value", desc:"Intensity of grain applied to brightly lit surface areas." },
      { name:"Shadow Noise Amount", type:"value", desc:"Intensity of grain applied to darker surface areas." },
      { name:"Noise Scale", type:"value", desc:"Frequency size of individual grain particles." },
      { name:"Detail", type:"value", desc:"Detail octave count for micro-texture depth." },
      { name:"Roughness", type:"value", desc:"Fine-grained contrast factor." },
      { name:"Lacunarity", type:"value", desc:"Scaling step between noise frequency levels." },
      { name:"Distortion", type:"value", desc:"Warps grain noise distribution." }
    ],
    outputs: [
      { name:"Color", type:"color", desc:"Composite color map containing value-driven noise grain." }
    ]
  }
);
