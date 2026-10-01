export const heartSections = [
  {
    id: 'causes',
    title: 'What Causes Heart Problems',
    description: 'How your heart works and why things go wrong',
    icon: '💔',
    shortDesc: 'Heart mechanics & risk factors'
  },
  {
    id: 'types',
    title: 'Types of Heart Disease',
    description: 'Different conditions affecting your heart',
    icon: '🫀',
    shortDesc: 'CAD, heart failure, arrhythmias, valve disease'
  },
  {
    id: 'symptoms',
    title: 'Symptoms & Screening',
    description: 'What to watch for and when to see a doctor',
    icon: '🚨',
    shortDesc: 'Warning signs and screening tests'
  },
  {
    id: 'diagnosis',
    title: 'After a Diagnosis',
    description: 'Treatment options and managing your condition',
    icon: '⚕️',
    shortDesc: 'Care team and treatment paths'
  },
  {
    id: 'financial',
    title: 'Financial Preparation',
    description: 'Understanding costs and insurance',
    icon: '💰',
    shortDesc: 'Insurance, medications, assistance'
  },
  {
    id: 'living',
    title: 'Living with Heart Disease',
    description: 'Mental health, lifestyle, and support',
    icon: '❤️',
    shortDesc: 'Diet, exercise, mental health, resources'
  }
]

export const heartRiskFactors = {
  unchangeable: [
    { factor: 'Age', detail: 'Risk increases with age (men 45+, women 55+)' },
    { factor: 'Family history', detail: 'Strong genetic component to heart disease' },
    { factor: 'Sex', detail: 'Men at higher risk; women\'s risk increases after menopause' }
  ],
  changeable: [
    { factor: 'High blood pressure', detail: 'Damages artery walls; major risk factor' },
    { factor: 'High cholesterol', detail: 'LDL (bad) cholesterol builds up as plaque' },
    { factor: 'Smoking', detail: 'Damages blood vessels; increases clot risk by 2-4x' },
    { factor: 'Diabetes', detail: 'High blood sugar damages blood vessels' },
    { factor: 'Obesity', detail: 'Excess weight strains the heart' },
    { factor: 'Inactivity', detail: 'Lack of exercise weakens heart muscle' },
    { factor: 'Poor diet', detail: 'High salt, sugar, unhealthy fats contribute to disease' },
    { factor: 'Stress', detail: 'Chronic stress raises blood pressure' },
    { factor: 'Poor sleep', detail: 'Sleep deprivation affects heart rhythm and pressure' }
  ]
}

export const heartDiseaseTypes = [
  {
    name: 'Coronary Artery Disease (CAD)',
    icon: '🚫',
    description: 'Plaque buildup narrows arteries supplying the heart',
    prevalence: 'Most common type of heart disease',
    symptoms: 'Chest pain (angina), shortness of breath, fatigue',
    severity: 'Can lead to heart attack if artery becomes blocked',
    survival: '5-year: 95% (USA & India with treatment)'
  },
  {
    name: 'Heart Failure',
    icon: '⚠️',
    description: 'Heart can\'t pump enough blood to meet body\'s needs',
    prevalence: 'Affects 6+ million Americans, millions globally',
    symptoms: 'Shortness of breath, swelling, fatigue, difficulty exercising',
    severity: 'Chronic condition requiring lifelong management',
    survival: '5-year: 50% depending on severity'
  },
  {
    name: 'Atrial Fibrillation (AFib)',
    icon: '⚡',
    description: 'Irregular, rapid heart rhythm increases stroke risk',
    prevalence: 'Affects 2.7-6 million Americans globally',
    symptoms: 'Heart palpitations, shortness of breath, dizziness',
    severity: 'Manageable with medications; increases stroke risk 5x',
    survival: '5-year: 80-90% with proper management'
  },
  {
    name: 'Heart Attack (MI)',
    icon: '🆘',
    description: 'Blocked artery cuts off blood flow to heart muscle',
    prevalence: '1 million+ heart attacks yearly worldwide',
    symptoms: 'Chest pain, pressure, shortness of breath, sweating',
    severity: 'Medical emergency; time-critical treatment',
    survival: '1-year: 90%+ (USA); 60%+ (India) with treatment'
  },
  {
    name: 'Valve Disease',
    icon: '🔄',
    description: 'Heart valves don\'t close/open properly',
    prevalence: 'Affects 2.5% of population',
    symptoms: 'Fatigue, shortness of breath, chest pain, swelling',
    severity: 'Can require surgery; manageable with medications',
    survival: '5-year: Variable (80-95%) depending on valve'
  },
  {
    name: 'Cardiomyopathy',
    icon: '💪',
    description: 'Heart muscle becomes thickened, weakened, or stiffened',
    prevalence: 'Rare; affects 1-2 per 100,000 people',
    symptoms: 'Shortness of breath, fatigue, chest discomfort',
    severity: 'Can lead to heart failure; may need transplant',
    survival: '5-year: 50-75% depending on type'
  }
]

export const heartSymptoms = [
  {
    symptom: 'Chest pain or discomfort',
    urgency: 'high',
    description: 'Pressure, squeezing, or heaviness in chest',
    when: 'During activity or rest',
    action: 'Call 911 if severe or sudden; see doctor if persistent'
  },
  {
    symptom: 'Shortness of breath',
    urgency: 'high',
    description: 'Difficulty breathing, especially with exertion',
    when: 'During activity or even at rest',
    action: 'Seek immediate care if severe; see doctor within days if mild'
  },
  {
    symptom: 'Heart palpitations',
    urgency: 'medium',
    description: 'Feeling heart racing, pounding, or skipping beats',
    when: 'Can happen anytime',
    action: 'See doctor within 1-2 weeks for evaluation'
  },
  {
    symptom: 'Dizziness or fainting',
    urgency: 'high',
    description: 'Lightheadedness or loss of consciousness',
    when: 'Often with exertion or position changes',
    action: 'Seek immediate care; could indicate serious arrhythmia'
  },
  {
    symptom: 'Unusual fatigue',
    urgency: 'medium',
    description: 'Extreme tiredness without clear cause',
    when: 'Persistent, especially with light activity',
    action: 'See doctor within 1-2 weeks'
  },
  {
    symptom: 'Swelling in legs or abdomen',
    urgency: 'medium',
    description: 'Fluid accumulation causing puffiness',
    when: 'Often worse at end of day or after standing',
    action: 'See doctor within 1-2 weeks'
  },
  {
    symptom: 'Sudden shortness of breath at night',
    urgency: 'high',
    description: 'Waking up gasping for air',
    when: 'Heart failure symptom',
    action: 'Seek urgent care; may indicate heart failure'
  }
]

export const heartScreeningTests = [
  {
    test: 'Blood Pressure Check',
    cost_usa: '$25-50',
    cost_india: '$5-15',
    when: 'Every 1-2 years (or as recommended)',
    what: 'Measures force of blood against artery walls',
    normal: 'Less than 120/80 mmHg'
  },
  {
    test: 'Cholesterol Panel',
    cost_usa: '$50-200',
    cost_india: '$10-40',
    when: 'Every 4-6 years (or as recommended)',
    what: 'Measures LDL, HDL, triglycerides in blood',
    normal: 'LDL <100, HDL >40 (men) or >50 (women)'
  },
  {
    test: 'ECG (Electrocardiogram)',
    cost_usa: '$100-500',
    cost_india: '$20-100',
    when: 'During check-up or if symptoms present',
    what: 'Records electrical activity of heart',
    normal: 'Regular rhythm, normal rate'
  },
  {
    test: 'Echocardiogram (Echo)',
    cost_usa: '$500-2,000',
    cost_india: '$100-300',
    when: 'If murmur or function concerns detected',
    what: 'Ultrasound creates images of heart chambers',
    normal: 'Normal size, function, valve movement'
  },
  {
    test: 'Stress Test',
    cost_usa: '$1,000-3,000',
    cost_india: '$200-600',
    when: 'If chest pain or risk factors present',
    what: 'Heart monitored while exercising or with medication',
    normal: 'No significant ST changes or arrhythmias'
  },
  {
    test: 'Coronary Calcium Score',
    cost_usa: '$100-500',
    cost_india: '$80-300',
    when: 'For risk stratification in asymptomatic people',
    what: 'CT scan detects calcium in artery walls',
    normal: 'Score 0 or minimal calcification'
  }
]

export const heartTreatmentPaths = {
  cad: {
    mild: {
      description: 'Angina (chest pain) but no heart attack yet',
      treatment: 'Lifestyle changes + medications (statins, aspirin, beta-blockers)',
      procedures: 'May not need intervention',
      monitoring: 'Regular check-ups and tests'
    },
    severe: {
      description: 'Significant blockage (>70%)',
      treatment: 'Medications + procedures',
      procedures: 'Angioplasty with stent or bypass surgery',
      monitoring: 'Post-procedure follow-up and cardiac rehab'
    }
  },
  heartFailure: {
    mild: {
      description: 'Ejection fraction 40-50%',
      treatment: 'Lifestyle changes, medications (ACE inhibitors, beta-blockers)',
      procedures: 'None usually needed',
      monitoring: 'Regular echo and clinic visits'
    },
    severe: {
      description: 'Ejection fraction <30%',
      treatment: 'Multiple medications, close monitoring',
      procedures: 'May need device (pacemaker, ICD) or transplant',
      monitoring: 'Frequent visits and possible hospitalization'
    }
  },
  afib: {
    lowRisk: {
      description: 'No heart disease, first occurrence',
      treatment: 'Rate control (beta-blockers) or rhythm control',
      procedures: 'May attempt cardioversion or ablation',
      monitoring: 'ECG monitoring, symptom tracking'
    },
    highRisk: {
      description: 'Recurrent AFib, structural heart disease',
      treatment: 'Anticoagulation (blood thinners) + rate/rhythm control',
      procedures: 'Ablation or implantable devices',
      monitoring: 'Regular ECG, INR checks'
    }
  }
}

export const heartMedicationCosts = {
  usa: {
    statin: '$4-40/month', // Generic available
    betaBlocker: '$4-15/month',
    aceInhibitor: '$4-20/month',
    aspirin: '$5-10/month',
    anticoagulant: '$50-500/month', // Warfarin cheap, newer drugs expensive
    average_3_drugs: '$100-300/month'
  },
  india: {
    statin: '$1-8/month',
    betaBlocker: '$1-5/month',
    aceInhibitor: '$1-8/month',
    aspirin: '$1-2/month',
    anticoagulant: '$10-100/month',
    average_3_drugs: '$30-80/month'
  }
}

export const heartProcedureCosts = {
  stent: {
    usa_insured: '$8,000-15,000',
    usa_uninsured: '$25,000-50,000',
    india_private: '$4,000-8,000',
    india_public: 'Free/subsidized'
  },
  bypass: {
    usa_insured: '$20,000-40,000',
    usa_uninsured: '$100,000-200,000',
    india_private: '$15,000-35,000',
    india_public: 'Free/subsidized'
  },
  ablation: {
    usa_insured: '$8,000-15,000',
    usa_uninsured: '$20,000-40,000',
    india_private: '$5,000-12,000',
    india_public: 'Free/subsidized'
  },
  device: {
    usa_insured: '$15,000-25,000',
    usa_uninsured: '$40,000-80,000',
    india_private: '$8,000-20,000',
    india_public: 'Free/subsidized'
  }
}

export const cardiacRehab = {
  description: 'Supervised program after heart attack, surgery, or diagnosis',
  duration: '6-12 weeks, 2-3 times per week',
  components: [
    'Exercise training (monitored)',
    'Education about heart disease',
    'Nutrition counseling',
    'Stress management',
    'Smoking cessation programs',
    'Psychological support'
  ],
  cost_usa: '$1,500-3,000 (often covered by insurance)',
  cost_india: '$300-1,000 (private); free (public)'
}

export const heartLifestyleFactors = [
  {
    factor: 'Diet (Mediterranean diet recommended)',
    impact: 'Can reduce heart disease risk by 30%',
    actions: 'More fruits, vegetables, fish, olive oil; less salt and saturated fat'
  },
  {
    factor: 'Exercise',
    impact: 'Regular activity reduces risk by 20-30%',
    actions: '150 min moderate aerobic + 2x resistance training weekly'
  },
  {
    factor: 'Weight management',
    impact: 'Obesity increases risk significantly',
    actions: 'Achieve and maintain healthy BMI (18.5-24.9)'
  },
  {
    factor: 'Smoking cessation',
    impact: 'Immediate improvement; 50% risk reduction after 1 year',
    actions: 'Quit completely; seek professional help if needed'
  },
  {
    factor: 'Stress management',
    impact: 'Chronic stress increases risk',
    actions: 'Meditation, yoga, therapy, mindfulness practices'
  },
  {
    factor: 'Sleep',
    impact: 'Poor sleep linked to higher risk',
    actions: '7-9 hours nightly; consistent schedule'
  },
  {
    factor: 'Alcohol',
    impact: 'Moderate consumption (1-2 drinks) may be protective',
    actions: 'Limit to moderate levels; avoid binge drinking'
  }
]

export const mentalHealthHeart = [
  {
    condition: 'Anxiety',
    prevalence: '25-50% of cardiac patients experience',
    impact: 'Can trigger chest pain, increase blood pressure',
    treatment: 'CBT, medications (SSRIs), relaxation techniques'
  },
  {
    condition: 'Depression',
    prevalence: '15-30% after heart attack or diagnosis',
    impact: 'Associated with worse outcomes, less adherence',
    treatment: 'Antidepressants, therapy, support groups'
  },
  {
    condition: 'PTSD (from cardiac event)',
    prevalence: '10-20% after heart attack',
    impact: 'Fear of recurrence, avoidance of activity',
    treatment: 'Trauma-focused therapy, gradual exposure'
  }
]
