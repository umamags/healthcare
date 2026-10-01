export const kidneySections = [
  {
    id: 'causes',
    title: 'What Causes Kidney Problems',
    description: 'How your kidneys work and what damages them',
    icon: '💧',
    shortDesc: 'Kidney function & risk factors'
  },
  {
    id: 'types',
    title: 'Types of Kidney Disease',
    description: 'CKD stages, acute kidney injury, and other conditions',
    icon: '🫘',
    shortDesc: 'CKD stages 1-5, AKI, diabetic kidney disease'
  },
  {
    id: 'symptoms',
    title: 'Symptoms & Screening',
    description: 'The silent disease: what to watch for',
    icon: '🩺',
    shortDesc: 'Warning signs & screening tests'
  },
  {
    id: 'diagnosis',
    title: 'After a Diagnosis',
    description: 'Managing progression and treatment options',
    icon: '⚕️',
    shortDesc: 'Care team, dialysis, transplant'
  },
  {
    id: 'financial',
    title: 'Financial Preparation',
    description: 'Understanding costs and insurance coverage',
    icon: '💰',
    shortDesc: 'Medicare ESRD, dialysis costs, assistance'
  },
  {
    id: 'living',
    title: 'Living with Kidney Disease',
    description: 'Dialysis, transplant, and quality of life',
    icon: '❤️‍🩹',
    shortDesc: 'Daily life, mental health, kidney donation'
  }
]

export const kidneyFunction = [
  {
    function: 'Filter waste from blood',
    detail: 'Removes urea and creatinine to form urine'
  },
  {
    function: 'Balance fluids and salts',
    detail: 'Maintains proper electrolyte levels (sodium, potassium, phosphorus)'
  },
  {
    function: 'Regulate blood pressure',
    detail: 'Controls fluid volume and hormone production'
  },
  {
    function: 'Make red blood cells',
    detail: 'Produces erythropoietin (EPO) hormone'
  },
  {
    function: 'Activate Vitamin D',
    detail: 'Helps body absorb calcium for bone health'
  }
]

export const kidneyDiseaseCauses = {
  bigTwo: [
    { cause: 'Diabetes', detail: 'High blood sugar damages kidney filters over years (most common cause)' },
    { cause: 'High Blood Pressure', detail: 'Damages blood vessels in kidneys; reduces filtration (2nd most common)' }
  ],
  other: [
    { cause: 'Infections', detail: 'UTIs spreading upward to kidneys' },
    { cause: 'Kidney Stones', detail: 'Can cause urinary blockage and damage' },
    { cause: 'Autoimmune Diseases', detail: 'Lupus, glomerulonephritis attack kidney filters' },
    { cause: 'Inherited Conditions', detail: 'Polycystic kidney disease (PKD)' },
    { cause: 'Medications', detail: 'NSAIDs (ibuprofen, naproxen) with long-term use' },
    { cause: 'Severe Dehydration', detail: 'Reduces blood flow to kidneys' },
    { cause: 'Urinary Blockages', detail: 'Enlarged prostate, kidney stones, tumors' }
  ]
}

export const ckdStages = [
  {
    stage: 'Stage 1',
    gfr: '90 or higher',
    description: 'Normal kidney function but signs of kidney disease present',
    symptoms: 'Usually none; protein in urine may indicate damage',
    management: 'Control blood pressure and blood sugar; lifestyle changes; annual monitoring'
  },
  {
    stage: 'Stage 2',
    gfr: '60-89',
    description: 'Mild decrease in kidney function',
    symptoms: 'Usually none; may have protein in urine',
    management: 'Slow progression with BP/glucose control; annual visits; reduce salt'
  },
  {
    stage: 'Stage 3a',
    gfr: '45-59',
    description: 'Mild to moderate decrease in kidney function',
    symptoms: 'May feel fatigued, have frequent urination',
    management: 'Monitor closely; medications to slow progression; monitor phosphorus, potassium'
  },
  {
    stage: 'Stage 3b',
    gfr: '30-44',
    description: 'Moderate to severe decrease in kidney function',
    symptoms: 'Fatigue, swelling, urination changes more noticeable',
    management: 'Start planning for dialysis/transplant; referral to nephrologist essential'
  },
  {
    stage: 'Stage 4',
    gfr: '15-29',
    description: 'Severe decrease in kidney function',
    symptoms: 'Significant fatigue, swelling, high blood pressure, anemia symptoms',
    management: 'Prepare for dialysis or transplant; vascular access creation; medication management'
  },
  {
    stage: 'Stage 5',
    gfr: 'Less than 15',
    description: 'End-stage renal disease (ESRD); kidney failure',
    symptoms: 'Severe: nausea, vomiting, shortness of breath, confusion, muscle cramps',
    management: 'Dialysis or transplant required to survive; Medicare coverage begins'
  }
]

export const kidneyDiseaseTypes = [
  {
    name: 'Chronic Kidney Disease (CKD)',
    icon: '📉',
    prevalence: 'Affects 37 million Americans (1 in 7)',
    progression: 'Develops gradually over months to years',
    reversibility: 'Usually not reversible; can be slowed',
    treatment: 'Medications, diet, lifestyle; dialysis or transplant if progresses to stage 5'
  },
  {
    name: 'Acute Kidney Injury (AKI)',
    icon: '⚡',
    prevalence: 'Hospital-acquired or acute onset',
    progression: 'Sudden loss of kidney function (days to weeks)',
    reversibility: 'Often reversible if treated promptly',
    treatment: 'Address underlying cause; usually recovers; repeated episodes can cause CKD'
  },
  {
    name: 'Diabetic Kidney Disease',
    icon: '💉',
    prevalence: 'Leading cause of CKD; affects 20-30% of diabetics',
    progression: 'Typically takes 5-10 years to develop',
    reversibility: 'Slow progression with tight glucose and BP control',
    treatment: 'ACE inhibitors/ARBs highly effective; blood sugar control is critical'
  },
  {
    name: 'Polycystic Kidney Disease (PKD)',
    icon: '🧬',
    prevalence: 'Inherited; affects 1 in 400-1000 people',
    progression: 'Usually reaches ESRD by age 60',
    reversibility: 'Inherited condition; not preventable',
    treatment: 'Blood pressure control; newer medications to slow cyst growth; dialysis/transplant'
  },
  {
    name: 'Glomerulonephritis',
    icon: '🔴',
    prevalence: '5-10% of CKD cases',
    progression: 'Inflammation of kidney filters; variable',
    reversibility: 'Can sometimes improve with treatment',
    treatment: 'Medications to control inflammation; immunosuppressants sometimes needed'
  },
  {
    name: 'Kidney Stones',
    icon: '🪨',
    prevalence: 'Affects 1 in 11 Americans (rising)',
    progression: 'Acute episodes; can recur',
    reversibility: 'Stones pass or are removed; kidney function usually recovers',
    treatment: 'Pain management, hydration; procedures if blocked; prevention of recurrence'
  }
]

export const kidneySymptoms = [
  {
    symptom: 'Swelling (edema)',
    urgency: 'medium',
    location: 'Ankles, feet, face, hands',
    cause: 'Kidneys retain fluid and sodium',
    timeline: 'Usually develops gradually'
  },
  {
    symptom: 'Foamy or bubbly urine',
    urgency: 'medium',
    location: 'Visible in toilet',
    cause: 'Protein leaking into urine',
    timeline: 'Can appear early in disease'
  },
  {
    symptom: 'Changes in urination',
    urgency: 'medium',
    location: 'Frequent or infrequent urination',
    cause: 'Kidneys losing filtration ability',
    timeline: 'Highly variable'
  },
  {
    symptom: 'Persistent fatigue',
    urgency: 'medium',
    location: 'General body exhaustion',
    cause: 'Anemia from low EPO production',
    timeline: 'Worsens with disease progression'
  },
  {
    symptom: 'High blood pressure',
    urgency: 'high',
    location: 'Systemic',
    cause: 'Kidneys regulate blood pressure; failure causes hypertension',
    timeline: 'Often develops early'
  },
  {
    symptom: 'Flank pain',
    urgency: 'high',
    location: 'Sides of lower back',
    cause: 'Kidney stones, infection, or enlarged cysts',
    timeline: 'Sudden onset (stones) or gradual'
  },
  {
    symptom: 'Nausea and vomiting',
    urgency: 'high',
    location: 'Gastrointestinal',
    cause: 'Uremia (waste buildup in blood)',
    timeline: 'Indicates advanced kidney disease'
  },
  {
    symptom: 'Itching',
    urgency: 'medium',
    location: 'Generalized, often intense',
    cause: 'Phosphorus and uremia buildup',
    timeline: 'Develops in advanced stages'
  },
  {
    symptom: 'Metallic taste',
    urgency: 'medium',
    location: 'Mouth',
    cause: 'Uremia affects taste buds',
    timeline: 'Later stages of CKD'
  }
]

export const screeningTests = [
  {
    test: 'eGFR (Estimated Glomerular Filtration Rate)',
    cost_usa: 'Free with blood test (part of metabolic panel)',
    cost_india: 'Free with routine blood work',
    when: 'Anyone with diabetes or hypertension: annually; others: every 5 years',
    what: 'Blood test estimating kidney function based on creatinine',
    normal: '>60 mL/min/1.73m²'
  },
  {
    test: 'ACR (Albumin-to-Creatinine Ratio)',
    cost_usa: 'Free with urinalysis',
    cost_india: 'Free with routine urine test',
    when: 'Anyone with diabetes: annually; hypertension: if indicated',
    what: 'Urine test detecting protein (albumin) leakage',
    normal: '<30 mg/g creatinine'
  },
  {
    test: 'Blood Pressure Check',
    cost_usa: 'Free at most clinics',
    cost_india: 'Free at most facilities',
    when: 'At every doctor visit for those with CKD risk',
    what: 'Monitors systolic and diastolic pressure',
    normal: '<130/80 mmHg (tighter for CKD patients)'
  },
  {
    test: 'Serum Creatinine',
    cost_usa: '$10-50',
    cost_india: '$2-10',
    when: 'Part of routine check for CKD patients',
    what: 'Blood test measuring waste product filtered by kidneys',
    normal: '0.7-1.3 mg/dL (varies by sex/age)'
  },
  {
    test: 'BUN (Blood Urea Nitrogen)',
    cost_usa: '$10-50',
    cost_india: '$2-10',
    when: 'Monitors CKD progression',
    what: 'Blood test measuring nitrogen waste',
    normal: '7-20 mg/dL'
  },
  {
    test: 'Potassium Level',
    cost_usa: '$10-50',
    cost_india: '$2-10',
    when: 'Regular monitoring for stage 3+ CKD',
    what: 'Blood test checking electrolyte levels',
    normal: '3.5-5.0 mEq/L (varies by stage)'
  }
]

export const renalDietByStage = {
  stage1_2: {
    stage: 'Stage 1-2',
    gfr: '>60',
    goals: 'Prevent or slow progression',
    sodium: 'Less than 2,300mg/day (1 tsp salt)',
    potassium: 'No restriction needed; follow normal intake',
    phosphorus: 'No restriction needed',
    protein: 'Normal intake (0.8g/kg body weight)',
    fluids: 'No restriction needed',
    focus: 'Control blood pressure and blood sugar; healthy diet'
  },
  stage3: {
    stage: 'Stage 3a-3b',
    gfr: '30-59',
    goals: 'Slow progression; manage blood pressure',
    sodium: 'Less than 2,300mg/day',
    potassium: 'Monitor; may start limiting (2,000-3,000mg/day)',
    phosphorus: 'Monitor levels; may limit (800-1,000mg/day)',
    protein: 'Moderate reduction (0.6-0.8g/kg)',
    fluids: 'Usually not restricted yet',
    focus: 'Medications working; diet prevents complications'
  },
  stage4: {
    stage: 'Stage 4',
    gfr: '15-29',
    goals: 'Prepare for dialysis/transplant; prevent complications',
    sodium: 'Less than 2,000mg/day',
    potassium: 'Strictly limit (2,000mg/day)',
    phosphorus: 'Strictly limit (800mg/day); may need binders',
    protein: 'Moderate reduction (0.6-0.8g/kg)',
    fluids: 'May start limiting (1,500-2,000mL/day)',
    focus: 'Prevent hyperkalemia and high phosphorus; manage anemia'
  },
  stage5_dialysis: {
    stage: 'Stage 5 (On Dialysis)',
    gfr: '<15',
    goals: 'Replace kidney function; prevent complications',
    sodium: 'Strictly limit (2,000-3,000mg/day)',
    potassium: 'Strictly limit (1,500-2,000mg/day)',
    phosphorus: 'Strictly limit (800mg/day); phosphate binders essential',
    protein: 'Higher (1.2g/kg) due to dialysis losses',
    fluids: 'Strictly limit (600-1,000mL/day between treatments)',
    focus: 'Diet is critical; poor adherence causes dangerous electrolyte swings'
  }
}

export const kidneyMedicationWarnings = [
  {
    medication: 'ACE Inhibitors (e.g., lisinopril, enalapril)',
    benefits: 'Protect kidneys; reduce proteinuria; slow CKD progression',
    warnings: [
      'NEVER combine with ARBs (dual blockade dangerous)',
      'Requires periodic kidney function and potassium checks',
      'Avoid in pregnancy',
      'May cause dry cough (not harmful)',
      'Can cause hyperkalemia; monitor K+ levels'
    ]
  },
  {
    medication: 'ARBs (Angiotensin Receptor Blockers; e.g., losartan, valsartan)',
    benefits: 'Similar kidney protection to ACE inhibitors',
    warnings: [
      'NEVER combine with ACE inhibitors',
      'Requires periodic kidney function and potassium checks',
      'Avoid in pregnancy',
      'Can cause hyperkalemia; monitor K+ levels',
      'Better tolerated than ACE inhibitors (less cough)'
    ]
  },
  {
    medication: 'NSAIDs (Ibuprofen, Naproxen, Indomethacin)',
    benefits: 'Pain and inflammation relief',
    warnings: [
      'AVOID with CKD; reduce kidney blood flow',
      'Single high dose can cause AKI in susceptible patients',
      'Chronic use accelerates CKD progression',
      'Use acetaminophen instead for pain',
      'Especially avoid during dehydration'
    ]
  },
  {
    medication: 'Diuretics',
    benefits: 'Manage fluid overload and blood pressure',
    warnings: [
      'Can worsen kidney function if overused',
      'May cause dehydration',
      'Monitor electrolytes closely',
      'Dose adjustments needed as kidney function declines'
    ]
  },
  {
    medication: 'Phosphate Binders (Calcium carbonate, Sevelamer)',
    benefits: 'Control high phosphorus in stage 4-5 CKD',
    warnings: [
      'Must be taken with meals',
      'Can cause constipation',
      'Calcium-based binders increase calcium load',
      'Non-calcium binders may be preferred in some stages'
    ]
  }
]

export const dialysisOptions = [
  {
    type: 'Hemodialysis (In-Center)',
    frequency: '3x per week, 4 hours each session',
    location: 'Dialysis center',
    how: 'Blood pumped through artificial kidney machine, filtered, returned to body',
    advantages: 'Medical supervision; staff handles setup/cleanup',
    disadvantages: 'Rigid schedule; requires vascular access (fistula, graft, catheter); travel dependent',
    effectiveness: 'Removes 60-70% of accumulated waste'
  },
  {
    type: 'Peritoneal Dialysis (PD)',
    frequency: '4-6x per day, 20-40 minutes each',
    location: 'Home or anywhere with sterile conditions',
    how: 'Dialysate fluid in abdomen; waste diffuses across peritoneum lining',
    advantages: 'Flexible schedule; more gradual; can travel with supplies',
    disadvantages: 'Risk of peritonitis (infection); technique-dependent; daily commitment',
    effectiveness: 'Removes 60-70% of waste; more continuous than hemodialysis'
  },
  {
    type: 'Home Hemodialysis',
    frequency: '4-6x per week, 2-5 hours each',
    location: 'Home',
    how: 'Same as in-center but using home machine; requires setup training',
    advantages: 'Flexible schedule; better quality of life; shorter sessions more frequent',
    disadvantages: 'Requires medical training; significant equipment space; high setup cost',
    effectiveness: 'Can remove 70-80% due to frequency and nocturnal options'
  }
]

export const treatmentCosts = {
  dialysis: {
    usa_annual: '$88,000-96,000',
    usa_insured: 'Medicare/insurance covers 80%',
    india_annual: '$3,600-7,200',
    india_note: 'Hemodialysis at private centers; public centers much cheaper'
  },
  transplant: {
    usa_surgery: '$260,000-330,000',
    usa_annual_maintenance: '$10,000-15,000',
    india_surgery: '$15,000-30,000',
    india_annual_maintenance: '$2,000-4,000',
    india_note: 'Includes donor surgery; costs vary by hospital'
  },
  medications_monthly: {
    usa: '$200-400',
    india: '$30-80'
  },
  vascular_access: {
    usa_fistula: '$3,000-5,000',
    india_fistula: '$400-800'
  }
}

export const medicareCoverage = {
  esrd_coverage: 'Medicare covers ALL end-stage renal disease treatment regardless of age or prior eligibility',
  start_date: 'Typically begins in 4th month of dialysis (can start 1st month if on home dialysis)',
  covers: [
    'Dialysis treatments (in-center and home)',
    'Related lab tests and medications',
    'Hospital stays related to ESRD',
    'Transplant surgery and anti-rejection drugs',
    'Vascular access procedures'
  ],
  coordination_period: '30-month coordination period: Medicare pays secondary to employer insurance first',
  employer_insurance: 'Employer plan pays first during coordination period, then Medicare becomes primary',
  important_notes: [
    'Coverage continues even if patient returns to work',
    'No premium required for ESRD coverage',
    'Standard Medicare copay and deductible apply',
    'Many patients have both Medicare and supplemental insurance'
  ]
}

export const livingKidneyDonation = {
  how_it_works: 'Living donor gives one kidney; both donor and recipient can live normal lifespans with one kidney',
  requirements: [
    'Must be in good health',
    'Compatible blood type (A, B, AB, O) or crossmatch negative',
    'Psychological evaluation',
    'Comprehensive medical testing'
  ],
  outcomes: 'Living donor transplants have better outcomes than deceased donor (95% function at 1 year vs 90%)',
  risks_donor: [
    'Surgical risks (infection, bleeding, anesthesia)',
    'Slightly higher blood pressure over lifetime',
    'Small increased risk of kidney disease',
    'Rare: need for dialysis if remaining kidney fails',
    'Emotional risk if relationship changes'
  ],
  myths: [
    {
      myth: 'Donating a kidney will cause kidney disease',
      fact: 'One healthy kidney is sufficient; people with one kidney live normal lifespans'
    },
    {
      myth: 'Donors must be close relatives',
      fact: 'Strangers can donate; many altruistic donations happen'
    },
    {
      myth: 'It costs money to donate',
      fact: 'Donation is free; New NOTA law (2022) allows living donors to receive priority if they need transplant later'
    }
  ]
}

export const financialAssistancePrograms = {
  usa: [
    'Medicare ESRD coverage (primary resource)',
    'Medicaid (if eligible by income)',
    'American Kidney Fund grants (Safety Net grants ~$200/year)',
    'Patient assistance programs (pharmaceutical companies)',
    'Hospital financial aid/charity care',
    'Transplant-specific programs (Living donors\' travel/lodging)'
  ],
  india: [
    'Government dialysis centers (free or heavily subsidized)',
    'AIIMS and government hospital programs',
    'Corporate CSR programs',
    'NGO support (Indian Kidney Foundation, etc.)',
    'Employer insurance (group policies)',
    'State health insurance schemes (varies by state)'
  ]
}
