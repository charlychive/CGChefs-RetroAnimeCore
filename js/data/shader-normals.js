/* SHADER NODES — Normals
   Auto-generated split from index.html — each nodegroup here belongs to this
   category/subcategory. Add a new nodegroup by pushing another object into
   this array; no need to touch index.html or app.js. */
window.NODEGROUPS.push(
  {
    id: "normal-reflection-voronoi",
    category: "shader",
    sub: "normals",
    name: "Normal Reflection Voronoi",
    tagline: "Surface-reflection vector distortion powered by procedural Voronoi noise.",
    description: "Modifies input normal vectors using a procedural Voronoi pattern to simulate surface imperfections, painted angles, or warped reflection dynamics.",
    images: {
      preview: "images/shaders/normal-reflection-voronoi-node.webp"
    },
    inputs: [
      { name:"Normal", type:"vector", desc:"Base surface normal map vector to be distorted." },
      { name:"Offset", type:"vector", desc:"External vector shift applied to the noise calculation." },
      { name:"Offset Strength", type:"value", desc:"Intensity multiplier for the Voronoi-based normal deviation." },
      { name:"Make Offset Signed", type:"value", desc:"Converts positive offset values to a signed range (-1.0 to 1.0) for dual-directional surface pushing." },
      { name:"Reverse Offset", type:"value", desc:"Inverts the direction of the normal vector displacement." },
      {
        label: "Voronoi Settings",
        fields: [
          { name:"Scale", type:"value", desc:"Sets the global size/frequency of the Voronoi noise cells." },
          { name:"Detail", type:"value", desc:"Sets the number of octave layers used for micro-surface variation." },
          { name:"Roughness", type:"value", desc:"Multiplies the high-frequency detail impact across noise octaves." },
          { name:"Lacunarity", type:"value", desc:"Frequency scaling factor between Voronoi noise layers." },
          { name:"Smoothness", type:"value", desc:"Blends cell borders into smooth organic gradients." },
          { name:"Randomness", type:"value", desc:"Controls cell layout irregularity (0.0 for rigid grids, 1.0 for scattered cells)." }
        ]
      }
    ],
    outputs: [
      { name:"Normal", type:"vector", desc:"Modified normal map vector for shading inputs." }
    ]
  }
);
