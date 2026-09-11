/* SHADER NODES — Mapping
   Auto-generated split from index.html — each nodegroup here belongs to this
   category/subcategory. Add a new nodegroup by pushing another object into
   this array; no need to touch index.html or app.js. */
window.NODEGROUPS.push(
  {
    id: "camdata-plus",
    category: "shader",
    sub: "mapping",
    name: "CamData+",
    tagline: "Advanced view and camera transform vector outputs.",
    description: "Utility node outputting essential camera vectors and coordinate spaces needed for complex screen-space, view-aligned, or camera based shader setups.",
    images: {
      preview: "images/shaders/camdata-plus-node.webp"
    },
    inputs: [],
    outputs: [
      { name:"CamPos", type:"vector", desc:"World-space origin position of the active rendering camera." },
      { name:"CamDir", type:"vector", desc:"Normalized direction vector pointing along the camera lens axis." },
      { name:"CamRight", type:"vector", desc:"Normalized horizontal vector pointing to the camera's right." },
      { name:"CamUp", type:"vector", desc:"Normalized vertical vector pointing to the camera's top." },
      { name:"CamSpace Coords", type:"vector", desc:"UV/Coordinate positions transformed directly into camera screen space." }
    ]
  },
  {
    id: "spatial-uvs",
    category: "shader",
    sub: "mapping",
    name: "Spatial UVs",
    tagline: "Procedural multi-scale UV coordinate modifier.",
    description: "Scales and distorts UV coordinate maps using spatial tangent and bi-tangent vectors, perfect for multi-layered procedural tiling and texture detail setups.",
    images: {
      preview: "images/shaders/spatial-uvs-node.webp"
    },
    inputs: [
      { name:"UV", type:"vector", desc:"Base input UV coordinate map." },
      { name:"Texture Scale", type:"value", desc:"Master multiplier for UV tiling frequency." },
      { name:"Lacunarity", type:"value", desc:"Frequency scaling multiplier between secondary coordinate layers." },
      { name:"Tangent", type:"vector", desc:"Surface tangent vector for directional coordinate mapping." },
      { name:"Bi-Tangent", type:"vector", desc:"Surface bi-tangent vector perpendicular to tangent." }
    ],
    outputs: [
      { name:"UV", type:"vector", desc:"Modified spatial UV coordinate output." }
    ]
  },
  {
    id: "spatial-uvs-stable",
    category: "shader",
    sub: "mapping",
    name: "Spatial UVs Stable",
    tagline: "World-stable UV coordinate generator with spatial blending and randomization.",
    description: "Generates an infinite projection mapping coordinates effect, based on position and normal vectors, incorporating random transformations and triplanar blending to minimize seam artifacts and texture repeating.",
    images: {
      preview: "images/shaders/spatial-uvs-stable-node.webp"
    },
    inputs: [
      { name:"Position", type:"vector", desc:"Input 3D surface coordinates used for coordinate mapping." },
      { name:"Normal", type:"vector", desc:"Surface vector direction used for triplanar projection calculations." },
      {
        label: "Settings",
        fields: [
          { name:"Blending Amount", type:"value", desc:"Controls the overall weight of spatial texture blending across coordinates." },
          { name:"Scale", type:"value", desc:"Global scale multiplier for the generated UV coordinates." },
          { name:"Lacunarity", type:"value", desc:"Scaling gap factor applied between coordinate transformation passes." }
        ]
      },
      {
        label: "Random Settings",
        fields: [
          { name:"X Flip / Y Flip", type:"value", desc:"Randomly flips texture coordinates across the X or Y axes." },
          { name:"Rotation", type:"value", desc:"Controls the degree of procedural rotation applied to texture patches." },
          { name:"Offset Scale", type:"value", desc:"Multiplies the positional offset range for randomized tiling." }
        ]
      },
      {
        label: "Triplanar Settings",
        fields: [
          { name:"Blend Amount", type:"value", desc:"Softens transition boundaries between projection axes in triplanar mapping." }
        ],
        subpanels: [
          {
            label: "Object Transforms",
            fields: [
              { name:"Location / Rotation / Scale (Toggles)", type:"value", desc:"Locks the noise mapping for world-space stability per transform." }
            ]
          },
          {
            label: "Advanced Settings",
            fields: [
              { name:"Nudge Rotation", type:"value", desc:"Toggles small rotational coordinate offsets to eliminate visible patterns." },
              { name:"Nudge Factor", type:"value", desc:"Intensity factor of the rotational nudge offset." }
            ]
          }
        ]
      }
    ],
    outputs: [
      { name:"UV", type:"vector", desc:"Modified spatial UV coordinate output." }
    ]
  },
  {
    id: "triplanar",
    category: "shader",
    sub: "mapping",
    name: "Triplanar UVs",
    tagline: "Seamless 3-axis projection coordinate generator with object-transform tracking with corrected normals.",
    description: "Projects textures onto geometry along world or object axes without requiring manual UV unwrapping, featuring blend controls and optional transform mapping.",
    images: {
      preview: "images/shaders/triplanar-node.webp"
    },
    inputs: [
      { name:"Blend Amount", type:"value", desc:"Softens or sharpens the transition seams where the three projection planes intersect." },
      {
        label: "Object Transforms",
        fields: [
          { name:"Location / Rotation / Scale (Toggles)", type:"value", desc:"Locks the noise mapping for world-space stability per transform." }
        ]
      },
      {
        label: "Advanced Settings",
        fields: [
          { name:"Nudge Rotation", type:"value", desc:"Toggles small rotational coordinate offsets to eliminate visible patterns." },
          { name:"Nudge Factor", type:"value", desc:"Intensity factor of the rotational nudge offset." }
        ]
      },
      { name:"Position", type:"vector", desc:"Input surface vector defining coordinate space location." },
      { name:"Normal", type:"vector", desc:"Input vector for normal influence on the Triplanar projection." }
    ],
    outputs: [
      { name:"UV", type:"vector", desc:"Main 2D projection vector for texture mapping." },
      { name:"Tangent", type:"vector", desc:"Surface tangent direction vector based on projection orientation." },
      { name:"BiTangent", type:"vector", desc:"Binormal direction vector perpendicular to the tangent and normal." }
    ]
  }
);
