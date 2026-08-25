/**
 * Product Categories & Searchable Explorer Catalog Data
 * Realistic pharmaceutical and nutraceutical dosage representations.
 * All entries are structured for easy CMS/database integration.
 */

export const PRODUCT_CATEGORIES = [
  {
    id: "tablets",
    title: "Tablets",
    subtitle: "Solid Oral Dosage",
    description: "Uncoated, film-coated, enteric-coated, sustained-release, chewable, and dispersible tablet formulations.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    types: ["Immediate Release", "Film Coated", "Enteric Coated", "Sustained / Extended Release", "Dispersible / Chewable"],
    count: "Multiple formulations"
  },
  {
    id: "capsules",
    title: "Capsules",
    subtitle: "Hard Gelatin & HPMC",
    description: "Hard gelatin and vegetarian HPMC capsules containing powders, pellets, sustained-release beads, or mini-tablets.",
    image: "https://images.unsplash.com/photo-1550572017-ed200f5e6343?auto=format&fit=crop&w=800&q=80",
    types: ["Hard Gelatin", "Vegetarian / HPMC", "Pellet-Filled (MUPS)", "Targeted Release"],
    count: "Multiple formulations"
  },
  {
    id: "liquids",
    title: "Oral Liquids & Syrups",
    subtitle: "Liquid Dosage Forms",
    description: "Homogeneous oral solutions, suspensions, and flavored pediatric/adult syrups formulated with taste masking.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
    types: ["Oral Syrups", "Suspensions", "Pediatric Drops", "Sugar-Free Solutions"],
    count: "Multiple formulations"
  },
  {
    id: "dry-syrups",
    title: "Dry Syrups",
    subtitle: "Powders for Reconstitution",
    description: "Moisture-sensitive antibiotic and pediatric powders engineered for stability prior to aqueous reconstitution.",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",
    types: ["Antibiotic Dry Syrups", "Pediatric Formulations", "Taste-Masked Powders"],
    count: "Multiple formulations"
  },
  {
    id: "topicals",
    title: "Topical Formulations",
    subtitle: "Dermatological & Ointments",
    description: "Creams, gels, ointments, lotions, and transdermal bases formulated for uniform active ingredient release.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    types: ["Hydrophilic Creams", "Lipophilic Ointments", "Clear Gels", "Therapeutic Lotions"],
    count: "Multiple formulations"
  },
  {
    id: "softgels",
    title: "Softgels",
    subtitle: "Lipid-Based Delivery",
    description: "Hermetically sealed gelatin capsules optimized for oily formulations, vitamins, and low-solubility active substances.",
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=800&q=80",
    types: ["Liquid Fill", "Suspension Fill", "Enteric Softgels", "Veggie Softgels"],
    count: "Multiple formulations"
  },
  {
    id: "nutraceuticals",
    title: "Nutraceuticals & Dietary",
    subtitle: "Wellness & Supplementary",
    description: "Standardized vitamin blends, mineral complexes, herbal extracts, amino acids, and specialized wellness blends.",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=800&q=80",
    types: ["Multivitamin Blends", "Antioxidant Complexes", "Effervescent Powders", "Electrolyte Formulas"],
    count: "Multiple formulations"
  },
  {
    id: "other",
    title: "Specialty Formulations",
    subtitle: "Custom Delivery Systems",
    description: "Custom manufacturing options, sachets, effervescent granules, mouth dissolving strips, and tailored delivery solutions.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    types: ["Effervescent Granules", "Oral Sachets", "Mouth Dissolving Strips", "Custom Bases"],
    count: "Custom options"
  }
];

export const SAMPLE_PRODUCTS = [
  {
    id: "EF-TAB-01",
    name: "Paracetamol & Caffeine Tablets",
    category: "Tablets",
    dosageForm: "Tablet",
    type: "Pharmaceutical",
    strength: "500mg / 65mg",
    releaseType: "Immediate Release",
    packaging: "Blister Pack (Alu-Alu / PVC-PVDC)",
    description: "Analgesic and antipyretic solid oral formulation manufactured under controlled relative humidity.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "EF-TAB-02",
    name: "Pantoprazole Gastro-Resistant Tablets",
    category: "Tablets",
    dosageForm: "Tablet",
    type: "Pharmaceutical",
    strength: "40mg",
    releaseType: "Enteric Coated",
    packaging: "Alu-Alu Cold Form Blister",
    description: "Acid-labile proton pump inhibitor formulation with protective enteric barrier coating.",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "EF-CAP-01",
    name: "Rabeprazole & Levosulpiride SR Capsules",
    category: "Capsules",
    dosageForm: "Capsule",
    type: "Pharmaceutical",
    strength: "20mg / 75mg",
    releaseType: "Sustained Release Pellets",
    packaging: "Alu-Alu Strip Packaging",
    description: "Dual-pellet technology delivering immediate PPI release combined with sustained prokinetic action.",
    image: "https://images.unsplash.com/photo-1550572017-ed200f5e6343?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "EF-CAP-02",
    name: "Omeprazole Delayed-Release Capsules",
    category: "Capsules",
    dosageForm: "Capsule",
    type: "Pharmaceutical",
    strength: "20mg",
    releaseType: "Delayed Release",
    packaging: "HDPE Container / Blister",
    description: "Standardized enteric-coated micropellets filled into hard gelatin capsule shells.",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "EF-LIQ-01",
    name: "Ambroxol, Levosalbutamol & Guaiphenesin Syrup",
    category: "Oral Liquids",
    dosageForm: "Syrup",
    type: "Pharmaceutical",
    strength: "30mg / 1mg / 50mg per 5ml",
    releaseType: "Oral Solution",
    packaging: "Amber PET Bottle (100ml / 60ml)",
    description: "Mucolytic bronchodilator suspension with pleasant flavor profile and stable viscosity.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "EF-DRY-01",
    name: "Cefixime Oral Suspension (Dry Syrup)",
    category: "Dry Syrups",
    dosageForm: "Dry Syrup",
    type: "Pharmaceutical",
    strength: "50mg / 100mg per 5ml",
    releaseType: "Reconstitutable Powder",
    packaging: "Glass / HDPE Bottle with Measuring Cup",
    description: "High-stability antibiotic dry powder engineered for uniform dispersion upon aqueous reconstitution.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "EF-TOP-01",
    name: "Diclofenac Diethylamine, Linseed Oil & Methyl Salicylate Gel",
    category: "Topical Formulations",
    dosageForm: "Gel",
    type: "Pharmaceutical",
    strength: "1.16% w/w Base",
    releaseType: "Topical Emulgel",
    packaging: "Lami Tube (30g / 50g)",
    description: "Fast-absorbing topical pain relief emulgel with enhanced transdermal penetration kinetics.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "EF-SFT-01",
    name: "Coenzyme Q10 & Omega-3 Soft Gelatin Capsules",
    category: "Softgels",
    dosageForm: "Softgel",
    type: "Nutraceutical",
    strength: "100mg / 500mg",
    releaseType: "Lipid Matrix",
    packaging: "Blister Pack (Alu-Alu)",
    description: "Bioavailability-enhanced lipid suspension encapsulated in pharmaceutical-grade gelatin.",
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "EF-NUT-01",
    name: "Multivitamin & Mineral Effervescent Tablets",
    category: "Nutraceuticals",
    dosageForm: "Effervescent Tablet",
    type: "Nutraceutical",
    strength: "Comprehensive RDA Blend",
    releaseType: "Fast Dissolving",
    packaging: "Desiccant Tube (20 Tabs)",
    description: "Pleasant citrus flavor effervescent formulation offering rapid nutrient absorption.",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "EF-DERM-01",
    name: "Clindamycin Phosphate & Nicotinamide Gel",
    category: "Topical Formulations",
    dosageForm: "Gel",
    type: "Cosmetic / Derma",
    strength: "1% / 4% w/w",
    releaseType: "Topical Gel",
    packaging: "Aluminum Collapsible Tube",
    description: "Non-greasy, clear dermatological gel formulation for targeted topical application.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
  }
];
