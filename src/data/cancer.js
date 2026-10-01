export const cancerSections = [
  {
    id: 'symptoms',
    title: 'I Have Symptoms',
    description: 'What symptoms warrant investigation?',
    icon: '🔍',
    shortDesc: 'When to see a doctor'
  },
  {
    id: 'diagnosed',
    title: 'Recently Diagnosed',
    description: 'What to expect after diagnosis',
    icon: '📋',
    shortDesc: 'The diagnosis journey'
  },
  {
    id: 'types',
    title: 'Cancer Types Explained',
    description: 'Common cancers and risk factors',
    icon: '🧬',
    shortDesc: 'Breast, lung, cervical, colorectal'
  },
  {
    id: 'treatment',
    title: 'Treatment Options',
    description: 'Understanding your treatment choices',
    icon: '💊',
    shortDesc: 'Surgery, chemo, radiation, immunotherapy'
  },
  {
    id: 'sideeffects',
    title: 'Managing Side Effects',
    description: 'What to expect and how to cope',
    icon: '💪',
    shortDesc: 'Living with cancer treatment'
  },
  {
    id: 'financial',
    title: 'Financial Preparation',
    description: 'Understanding costs and getting help',
    icon: '💰',
    shortDesc: 'India vs USA costs and assistance'
  }
]

export const cancerTreatmentCosts = {
  earlyDetectionSurgery: {
    india_private: 2500,
    india_public: 0,
    usa_insured: 7500,
    usa_uninsured: 45000
  },
  chemotherapy6Cycles: {
    india_private: 5500,
    india_public: 0,
    usa_insured: 15000,
    usa_uninsured: 100000
  },
  radiationTherapy: {
    india_private: 3000,
    india_public: 0,
    usa_insured: 20000,
    usa_uninsured: 55000
  },
  combinedTreatment: {
    india_private: 12000,
    india_public: 0,
    usa_insured: 40000,
    usa_uninsured: 200000
  }
}

export const cancerDiagnosisTimeline = {
  usa: {
    duration: '1-3 months',
    steps: [
      { name: 'Symptom Recognition', days: '0-14' },
      { name: 'Primary Care Visit', days: '14-21', cost: '$150-300' },
      { name: 'Initial Imaging (CT/MRI)', days: '21-35', cost: '$2,000-4,000' },
      { name: 'Specialist Referral', days: '35-49', cost: '$200' },
      { name: 'Biopsy', days: '49-70', cost: '$1,500-3,000' },
      { name: 'Pathology Results', days: '70-84', cost: '$500-1,000' },
      { name: 'Staging & Treatment Plan', days: '84-90', cost: '$500-1,000' }
    ]
  },
  india: {
    duration: '3-6 months',
    steps: [
      { name: 'Symptom Recognition', days: '0-30' },
      { name: 'Private Hospital Visit', days: '30-45', cost: '$100-200' },
      { name: 'Initial Imaging', days: '45-70', cost: '$300-800' },
      { name: 'Specialist Consultation', days: '70-90', cost: '$100-300' },
      { name: 'Biopsy', days: '90-120', cost: '$200-500' },
      { name: 'Pathology Analysis', days: '120-150', cost: '$100-300' },
      { name: 'Treatment Planning', days: '150-180', cost: '$200-500' }
    ]
  }
}

export const cancerSymptomChecker = [
  {
    symptom: 'Persistent fatigue',
    urgency: 'medium',
    description: 'Unusual tiredness lasting 2+ weeks',
    specialist: 'Primary care doctor',
    timeline: 'See within 2-4 weeks'
  },
  {
    symptom: 'Unexplained weight loss',
    urgency: 'high',
    description: '10+ lbs loss without diet changes',
    specialist: 'Primary care doctor',
    timeline: 'See within 1-2 weeks'
  },
  {
    symptom: 'Persistent cough',
    urgency: 'high',
    description: 'Cough lasting 3+ weeks',
    specialist: 'Pulmonologist',
    timeline: 'See within 2-4 weeks'
  },
  {
    symptom: 'Unusual lump',
    urgency: 'high',
    description: 'New lump in breast, neck, or body',
    specialist: 'Surgeon/Oncologist',
    timeline: 'See within 1-2 weeks'
  },
  {
    symptom: 'Blood in urine or stool',
    urgency: 'high',
    description: 'Visible blood in urine or stool',
    specialist: 'Urologist/Gastroenterologist',
    timeline: 'See within 1-2 weeks'
  },
  {
    symptom: 'Persistent pain',
    urgency: 'medium',
    description: 'Pain lasting 3+ weeks without injury',
    specialist: 'Primary care doctor',
    timeline: 'See within 2-4 weeks'
  }
]

export const commonCancerTypes = [
  {
    name: 'Breast Cancer',
    icon: '🎀',
    prevalence: 'Most common in women',
    riskFactors: 'Age, family history, hormones, alcohol',
    survivalRate: '5-year: 92% (USA), 87% (India)',
    earlyDetection: 'Mammography, self-examination',
    treatmentTypes: 'Surgery, chemotherapy, radiation, hormone therapy'
  },
  {
    name: 'Lung Cancer',
    icon: '💨',
    prevalence: 'Second most common',
    riskFactors: 'Smoking, secondhand smoke, radon',
    survivalRate: '5-year: 22% (USA), 15% (India)',
    earlyDetection: 'Chest X-ray, CT scan (for high-risk)',
    treatmentTypes: 'Surgery, chemotherapy, radiation, targeted therapy'
  },
  {
    name: 'Cervical Cancer',
    icon: '🔬',
    prevalence: 'Preventable with HPV vaccine',
    riskFactors: 'HPV infection, smoking, weak immunity',
    survivalRate: '5-year: 73% (USA), 60% (India)',
    earlyDetection: 'Pap smear, HPV test',
    treatmentTypes: 'Surgery, chemotherapy, radiation'
  },
  {
    name: 'Colorectal Cancer',
    icon: '🎯',
    prevalence: 'Third most common',
    riskFactors: 'Age, family history, polyps, IBD',
    survivalRate: '5-year: 66% (USA), 50% (India)',
    earlyDetection: 'Colonoscopy, fecal test',
    treatmentTypes: 'Surgery, chemotherapy, radiation'
  }
]

export const treatmentTypes = [
  {
    name: 'Surgery',
    description: 'Removal of cancer tumor and surrounding tissue',
    timing: 'Often first-line for localized cancer',
    sideEffects: 'Pain, infection risk, recovery time',
    recovery: '2-6 weeks depending on extent'
  },
  {
    name: 'Chemotherapy',
    description: 'Powerful drugs that kill fast-dividing cells',
    timing: 'Before surgery (neoadjuvant) or after (adjuvant)',
    sideEffects: 'Nausea, hair loss, fatigue, low immunity',
    recovery: 'Varies; cycles typically 3-6 months'
  },
  {
    name: 'Radiation Therapy',
    description: 'High-energy rays targeting cancer cells',
    timing: 'Often combined with chemo or surgery',
    sideEffects: 'Skin damage, fatigue, burns',
    recovery: 'Usually 5 weeks of daily sessions'
  },
  {
    name: 'Immunotherapy',
    description: 'Drugs that boost immune system to fight cancer',
    timing: 'Newer option; increasingly used first-line',
    sideEffects: 'Autoimmune reactions, fatigue',
    recovery: 'Ongoing infusions, weeks to months'
  },
  {
    name: 'Targeted Therapy',
    description: 'Drugs targeting specific cancer mutations',
    timing: 'Personalized based on tumor genetics',
    sideEffects: 'Generally fewer than chemo, variable',
    recovery: 'Ongoing pills or infusions'
  }
]

export const financialAssistance = [
  {
    country: 'USA',
    programs: [
      'Patient assistance programs (pharmaceutical companies)',
      'Hospital financial aid/charity care',
      'Cancer support organizations (American Cancer Society, CancerCare)',
      'Medicaid (if eligible)',
      'Clinical trials (free treatment + monitoring)',
      'Nonprofit grants and loans'
    ],
    tips: 'Ask about payment plans; negotiate directly with hospitals'
  },
  {
    country: 'India',
    programs: [
      'Government cancer centers (AIIMS, Tata Memorial) - heavily subsidized',
      'NGO support (Cancer Society of India, various state programs)',
      'Corporate CSR programs',
      'Employer group insurance',
      'Clinical trials at medical institutions',
      'State health insurance schemes'
    ],
    tips: 'Public hospitals much cheaper; check employer coverage first'
  }
]
