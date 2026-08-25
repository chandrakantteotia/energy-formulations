/**
 * Manufacturing Journey, Custom Process, R&D and Quality Framework Data
 */

export const CUSTOM_MFG_STEPS = [
  {
    step: "01",
    name: "DISCOVER",
    title: "Requirement Discovery",
    description: "Understand your target product concept, active ingredients, dosage form, batch expectations, and timeline requirements.",
    deliverable: "Initial Technical Feasibility & Formulation Scope"
  },
  {
    step: "02",
    name: "DEFINE",
    title: "Specification Definition",
    description: "Establish rigorous analytical specifications, excipient selection, stability targets, and packaging barrier criteria.",
    deliverable: "Product Quality Profile & Master Specs"
  },
  {
    step: "03",
    name: "DEVELOP",
    title: "Formulation Development",
    description: "Execute formulation trials, solubility enhancement, blend uniformity testing, and prototype optimization in R&D.",
    deliverable: "Lab Trial Batches & Analytical Data"
  },
  {
    step: "04",
    name: "SCALE",
    title: "Process Validation & Scale-Up",
    description: "Prepare pilot scale batches to optimize compression, filling, and blending parameters for high-efficiency production.",
    deliverable: "Pilot Batch Evaluation & Scale-Up Protocol"
  },
  {
    step: "05",
    name: "MANUFACTURE",
    title: "Commercial Manufacturing",
    description: "Execute commercial scale manufacturing under strict cleanroom controls and in-process quality testing.",
    deliverable: "Executed Batch Manufacturing Records (BMR)"
  },
  {
    step: "06",
    name: "DELIVER",
    title: "Packaging & Supply",
    description: "Coordinate primary & secondary packaging, serialization, final Certificate of Analysis (CoA) release, and secure dispatch.",
    deliverable: "Final CoA, Release Documentation & Secure Dispatch"
  }
];

export const INSIDE_THE_PROCESS_STAGES = [
  {
    id: "raw-material",
    number: "01",
    title: "Raw Material Ingestion & Sampling",
    category: "Intake & Quarantine",
    description: "Every incoming Active Pharmaceutical Ingredient (API) and excipient undergoes quarantine, rigorous identity testing, assay verification, and chromatographic screening before release to production.",
    checks: [
      "Quarantine protocol & barcode assignment",
      "Spectroscopic identity verification (FTIR / UV)",
      "Assay, purity, and microbial limit testing",
      "Official QA analytical release"
    ],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "processing",
    number: "02",
    title: "Dispensing & Granulation / Blending",
    category: "Controlled Preparation",
    description: "Precision dispensing under laminar airflow booths followed by fluid bed processing, high-shear wet granulation, or direct dry blending to achieve micron-level uniformity.",
    checks: [
      "Negative pressure laminar airflow dispensing",
      "Moisture content (LOD) optimization",
      "Particle size distribution analysis",
      "Blend uniformity validation"
    ],
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "quality-check",
    number: "03",
    title: "In-Process Quality Verification (IPQC)",
    category: "Analytical Monitoring",
    description: "Continuous real-time sampling during production runs to ensure weight variation, hardness, disintegration, and thickness strictly meet established monograph limits.",
    checks: [
      "Automated weight variation sampling",
      "Tablet hardness & friability testing",
      "Disintegration & dissolution rate monitoring",
      "Immediate corrective feedback loops"
    ],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "manufacturing",
    number: "04",
    title: "Core Formulation Execution",
    category: "High-Speed Production",
    description: "High-speed multi-station rotary tablet compression, precision capsule filling, automated liquid filling, and aqueous film/sugar coating in environmental Class D cleanrooms.",
    checks: [
      "Auto-weight control compression",
      "Micro-dosing capsule filling accuracy",
      "Peristaltic liquid filling precision",
      "Controlled temperature & relative humidity (RH)"
    ],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "packaging",
    number: "05",
    title: "High-Barrier Packaging & Inspection",
    category: "Barrier Integrity",
    description: "Automated high-speed blister packing (Alu-Alu / PVC-PVDC), bottle induction sealing, cartoning, optical vision inspection, and serialization.",
    checks: [
      "Optical camera inspection for damaged units",
      "Online pinhole detection & leak testing",
      "Dynamic check-weigher verification",
      "2D Matrix serialization & tamper evident sealing"
    ],
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "finished-product",
    number: "06",
    title: "Final QA Release & Documentation",
    category: "Batch Release",
    description: "Comprehensive batch review by Quality Assurance, stability sample archiving, issuance of the formal Certificate of Analysis (CoA), and temperature-controlled logistics dispatch.",
    checks: [
      "Complete Batch Manufacturing Record (BMR) reconciliation",
      "Microbiological & endotoxin testing",
      "Retention sample archiving under stability conditions",
      "Final QP/QA release & dispatch authorization"
    ],
    image: "https://images.unsplash.com/photo-1550572017-ed200f5e6343?auto=format&fit=crop&w=1000&q=80"
  }
];

export const RD_JOURNEY_STEPS = [
  { step: "01", name: "Idea & Molecule Selection" },
  { step: "02", name: "Pre-Formulation & Excipient Compatibility" },
  { step: "03", name: "Formulation Optimization & Lab Scale Trials" },
  { step: "04", name: "Scale-Up, Pilot Batches & Stability" },
  { step: "05", name: "Tech-Transfer & Commercial Manufacturing" }
];

export const RD_CAPABILITY_AREAS = [
  {
    title: "Formulation Development",
    description: "Customized formulation design targeting optimal therapeutic efficacy, organoleptic properties, and stability profiles."
  },
  {
    title: "Product Optimization",
    description: "Reformulation of existing products for enhanced bioavailability, shelf-life longevity, and cost efficiency."
  },
  {
    title: "Process Development",
    description: "Engineering scalable manufacturing parameters from benchtop grams to high-volume commercial batches."
  },
  {
    title: "Scale-up Support",
    description: "Robust validation protocols and pilot-scale troubleshooting to minimize production scale risks."
  },
  {
    title: "Technology Transfer",
    description: "Seamless transfer of analytical methods, process documentation, and validation protocols between sites."
  }
];

export const QUALITY_PILLARS = [
  {
    id: "material",
    title: "Material Control",
    description: "Exacting supplier audits, raw material qualification, and complete traceability of all active and inactive ingredients."
  },
  {
    id: "process",
    title: "Process Control",
    description: "Standardized operating procedures (SOPs), validated machine parameters, and automated in-process quality checks."
  },
  {
    id: "documentation",
    title: "Documentation",
    description: "Comprehensive Batch Manufacturing Records (BMR), Batch Packaging Records (BPR), and complete data integrity."
  },
  {
    id: "testing",
    title: "Testing & Analytics",
    description: "High-precision chromatography (HPLC/GC), dissolution profiling, stability testing, and microbiological analysis."
  },
  {
    id: "consistency",
    title: "Consistency",
    description: "Batch-to-batch repeatability backed by statistical process control and validated cleanroom environments."
  },
  {
    id: "improvement",
    title: "Continuous Improvement",
    description: "CAPA methodology, annual product quality reviews (APQR), and proactive preventative maintenance systems."
  }
];
