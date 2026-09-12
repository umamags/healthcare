export const questions = [
  {
    id: 1,
    number: 1,
    title: 'What happens when I get sick?',
    shortDesc: 'The patient journey',
    icon: '🏥',
    description: 'When a person gets sick, how does the healthcare system around them actually work? Follow the journey from symptoms to treatment.',
    content: `
## The Patient Journey

The typical pathway when someone gets sick:

![Sample patient journey diagram](https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80)

**Symptom → self-care → primary care → diagnostic tests → specialist → treatment → hospitalization → rehabilitation → long-term management**

### Stage-by-stage comparison:

| Stage | USA | UK | India | Germany | Canada |
|-------|-----|----|----|---------|--------|
| First contact | PCP/urgent care | GP | GP/clinic/specialist | GP or specialist | GP or walk-in |
| Specialist access | Referral often insurance-dependent | Usually GP referral | Often direct | Usually GP/referral | Usually GP referral |
| MRI/CT | Often insurance authorization | NHS pathway | Public/private | Insurance/public | Public system pathway |
| Surgery | Hospital | NHS/private | Public/private | Hospital | Public hospital |
| Payment | Insurance + patient | Mostly taxation | Mixed | Social insurance | Taxation |

### Key insight:
Not all systems require a GP as gatekeeper. Germany and India often allow direct specialist access, while UK and Canada emphasize primary care coordination.
    `
  },
  {
    id: 2,
    number: 2,
    title: 'How is healthcare organized?',
    shortDesc: 'System architecture & financing',
    icon: '🏗️',
    description: 'The architecture of healthcare systems - who pays, how money flows, and different organizational models.',
    content: `
## Healthcare Financing Models

### Major Models

**Tax-funded:**
- UK (NHS): Citizens pay via taxes; free at point of service
- Direct government funding

**Social insurance:**
- Germany, France, Japan: Mandatory insurance through employer/government
- Employee + employer contributions

**National health insurance:**
- Canada, Taiwan: Single-payer through government
- Funded by taxes; free at point of service

**Employer/private insurance:**
- United States: Insurance through employment
- Complex system with multiple payers

**Mixed systems:**
- India, Australia: Combination of public, private, out-of-pocket
- Highly variable

**Out-of-pocket-heavy:**
- Many developing countries: Families pay directly
- No protection against catastrophic costs

### Money Flow

**Citizen → Government/Employer/Insurance → Healthcare Fund → Hospital/Doctor → Patient**

This flow determines:
- Who bears financial risk
- Who controls costs
- Whether care access depends on wealth
- How transparent costs are
    `
  },
  {
    id: 3,
    number: 3,
    title: 'What does healthcare actually cost?',
    shortDesc: 'Costs & financial burden',
    icon: '💰',
    description: 'What patients pay, what society pays, and why healthcare can be expensive even when there\'s no bill.',
    content: `
## Healthcare Costs

### What the patient pays (direct)

- Premium (annual fee)
- Deductible (must pay this amount first)
- Copayment (fixed amount per visit)
- Coinsurance (percentage of bill)
- Prescription cost
- Hospital bill
- Specialist fee
- Diagnostic tests
- Emergency care
- Rehabilitation
- Long-term care

### What society pays (through taxes/insurance)

- Taxes (general revenue)
- Employer contributions
- Government subsidies
- Insurance contributions
- Hidden out-of-pocket spending

### Key Insight

**Healthcare can be expensive even when the patient doesn't receive a bill.**

Example: A UK resident pays relatively little at point of service but contributes considerably through taxation (~9% on salary).

### Interactive Example: $10,000 Hospital Bill

**USA with insurance:**
- Premium paid: ~$500/month
- Deductible: $1,500
- Coinsurance (20%): $2,000
- **Patient pays: ~$3,500 + premiums**

**UK (NHS):**
- Through taxation already paid
- **Patient pays: £0**

**India (private):**
- **Patient pays: ~$10,000 (catastrophic for most)**

**Germany:**
- Co-pay capped at 2% of annual income
- **Patient pays: typically €100-300**

**Canada:**
- Through provincial insurance already paid
- **Patient pays: $0**
    `
  },
  {
    id: 4,
    number: 4,
    title: 'Insurance: The confusing part',
    shortDesc: 'How insurance works',
    icon: '📋',
    description: 'The concepts that confuse most people - premiums, deductibles, copays, networks, and insurance exclusions.',
    content: `
## Insurance Explained

### The Insurance Pathway

**Premium → Deductible → Copay → Coinsurance → Out-of-pocket Maximum**

1. **Premium**: Annual fee to be insured (~$400-500/month in USA)
2. **Deductible**: Amount you pay before insurance pays (~$1,500-5,000)
3. **Copay**: Fixed fee per visit (~$20-50)
4. **Coinsurance**: Percentage of bill after deductible (10-40%)
5. **Out-of-pocket maximum**: Cap on annual patient spending

### Types of Insurance

- **Employer-sponsored**: Through your job (most common in USA)
- **Individual insurance**: You buy directly
- **Government insurance**: Medicare (USA 65+), Medicaid (USA low-income)
- **Mandatory insurance**: Germany, France, Japan (everyone must have)
- **Supplemental insurance**: Extra coverage on top
- **Private insurance**: Full coverage outside public system

### Insurance Complications

- **Networks**: You may only use doctors in your plan's network
- **Prior authorization**: Insurance must approve treatment before it happens
- **Referral requirements**: Must get approval from primary care doctor
- **Formularies**: Insurance lists which drugs are covered
- **Pre-existing conditions**: Some plans exclude prior conditions
- **Claims process**: Paperwork and delays in payment

### Comparison

| Feature | USA | Germany | UK | Canada |
|---------|-----|---------|----|----|
| Insurance mandatory? | No* | Yes | Yes (NHS) | Yes |
| Cost to patient | High | Medium (capped) | Taxes only | Taxes only |
| Network restrictions? | Yes | Limited | No | No |
| Prior auth needed? | Often | Sometimes | Rarely | Sometimes |

*USA: ~90% covered, but gaps exist
    `
  },
  {
    id: 5,
    number: 5,
    title: 'How do doctors diagnose and treat disease?',
    shortDesc: 'Clinical pathways',
    icon: '🔬',
    description: 'The decision-making process doctors use - diagnosis, treatment options, and the role of evidence and risk.',
    content: `
## Diagnosis and Treatment

### Diagnostic Pathway

**Symptoms → History → Physical Exam → Differential Diagnosis → Tests → Diagnosis**

### Common Diagnostic Tests

- **Blood tests**: Check for infection, glucose, cholesterol, organ function
- **X-rays**: Quick look at bones, lungs, chest
- **CT**: Detailed cross-sectional imaging
- **MRI**: Detailed soft tissue imaging (brain, joints, organs)
- **Ultrasound**: Safe, real-time imaging (pregnancy, organs)
- **ECG**: Heart electrical activity
- **Biopsy**: Tissue sample for cancer or infection
- **Genetic testing**: Inherited conditions
- **Endoscopy**: Camera inside body (stomach, colon, lungs)
- **Pathology**: Lab analysis of tissues

### Treatment Pathway

**Diagnosis → Treatment Options → Benefits/Risks → Shared Decision → Treatment → Monitoring → Adjustment**

### Key Concept: Probabilities, not certainties

Modern medicine is NOT:
- "I have disease X → doctor gives medicine Y"

Modern medicine IS:
- "I have condition X"
- "Here are three treatment options A, B, C"
- "Option A: 70% chance of cure, 10% side effects"
- "Option B: 60% chance of cure, 5% side effects"
- "Option C: Watch and wait, see if it improves"
- **Patient and doctor decide together**

### Example: Chest pain

1. **History**: When did it start? What makes it worse/better?
2. **Exam**: Blood pressure, heart sounds, chest tenderness?
3. **Tests**: ECG, troponin blood test, chest X-ray
4. **Diagnosis**: Heart attack? Angina? Muscle strain? Anxiety?
5. **Treatment options**:
   - If heart attack: emergency catheterization
   - If angina: medications + lifestyle
   - If muscle: rest + physical therapy
   - If anxiety: reassurance + CBT
    `
  },
  {
    id: 6,
    number: 6,
    title: 'Which diseases consume healthcare resources?',
    shortDesc: 'Disease burden & financial catastrophe',
    icon: '🦠',
    description: 'Which diseases cause the most spending and which cause financial bankruptcy for families.',
    content: `
## Disease Burden

### Common but relatively inexpensive

- Minor infections (cold, flu)
- Allergies
- Simple injuries
- Routine hypertension

Annual cost per person: $100-500

### Common and expensive over time

- Diabetes
- Heart disease
- COPD (lung disease)
- Kidney disease
- Arthritis
- Dementia

Annual cost per person: $5,000-15,000+ (lifetime burden high)

### Less common but potentially catastrophic

- Cancer (treatment cost $50,000-500,000+)
- Major trauma (accident requiring ICU)
- Organ failure (transplant cost $300,000+)
- Premature birth/NICU ($50,000-500,000)
- Complex surgery
- Long-term disability

Annual cost per person: $50,000-500,000+

### Important Distinction

**"What causes the most healthcare spending?"** ≠ **"What causes individuals to experience financial catastrophe?"**

The wealthy system-wide may be dominated by chronic disease management (diabetes, heart disease). But individual families go bankrupt from:
- Cancer treatment
- Premature birth requiring NICU
- Major trauma
- Rare genetic diseases requiring expensive drugs

### Financial Risk by Country

| Disease | USA | UK | India | Germany | Canada |
|---------|-----|----|----|---------|--------|
| Cancer | High | Low | **VERY HIGH** | Low | Low |
| Diabetes (chronic) | Medium | Low | High | Low | Low |
| Heart attack (acute) | High | Low | High | Low | Low |
| Organ transplant | **VERY HIGH** | Low | Very High | Low | Low |

### Example: Leukemia in a child

**USA**: $500,000+ treatment cost → insurance may cover 80% → family pays $100,000+
**India**: $500,000 treatment cost → family pays **$500,000** (catastrophic bankruptcy common)
**Germany**: Covered by insurance, patient co-pay <€500
**UK**: Free through NHS
**Canada**: Free through provincial insurance
    `
  },
  {
    id: 7,
    number: 7,
    title: 'Access: Can you actually get care?',
    shortDesc: 'Availability & wait times',
    icon: '⏱️',
    description: 'Having insurance doesn\'t mean you can access care. Availability, geography, and wait times matter.',
    content: `
## Healthcare Access

### Availability Metrics

- Number of doctors per 1,000 population
- Number of nurses per 1,000 population
- Hospitals per capita
- ICU beds per capita
- Specialists available
- Diagnostic equipment

### Speed of Access

| Service | USA | UK | India | Germany | Canada |
|---------|-----|----|----|---------|--------|
| Primary care appointment | 1-2 weeks | Same/next day | Immediate | 1-2 weeks | 1-3 days |
| Specialist appointment | 2-4 weeks | 4-13 weeks | 1-2 days | 2-6 weeks | 4-16 weeks |
| MRI | 1-2 weeks | 4-8 weeks | 1 day | 1-3 weeks | 2-4 weeks |
| Surgery | Varies | 8-26 weeks | 1 week | 2-4 weeks | 3-6 months |
| Cancer treatment start | 1-2 weeks | 2-4 weeks | 1-2 weeks | 1-2 weeks | 1-2 weeks |

### Geography: Urban vs Rural Access

**Urban areas**: Good access in all countries

**Suburban areas**:
- USA: Good
- UK: Good
- India: Variable
- Germany: Good
- Canada: Good

**Rural areas**:
- USA: Limited; doctor shortages severe
- UK: Equal access; NHS guarantees coverage
- India: **Very limited; massive gap**
- Germany: Good; insurance guarantees coverage
- Canada: Better than USA but some remote areas limited

**Remote areas**:
- USA: Very limited
- UK: Telemedicine + occasional clinic visits
- India: Almost no access
- Germany: Telemedicine services
- Canada: Telemedicine + occasional visits

### Key Question
> **How far does a person have to travel to see a doctor?**

This determines real access.
    `
  },
  {
    id: 8,
    number: 8,
    title: 'Quality of healthcare',
    shortDesc: 'Outcomes & safety',
    icon: '✅',
    description: 'Quality metrics show that expensive doesn\'t always mean better outcomes.',
    content: `
## Healthcare Quality

### Important distinction
**Don't equate expensive healthcare with good healthcare.**

USA spends 2-3x more per capita than other developed nations but doesn't have proportionally better outcomes.

### Quality Metrics

**Mortality & Survival:**
- Overall mortality rate
- Preventable deaths
- Cancer survival rates
- Cardiac event survival
- Maternal mortality
- Infant mortality

**Safety:**
- Hospital-acquired infections
- Surgical complications
- Medication errors
- Readmission rates (patients returning to hospital)

**Experience:**
- Patient satisfaction
- Time spent with doctor
- Continuity of care (seeing same doctor)

### Outcomes Comparison

| Metric | USA | UK | India | Germany | Canada |
|--------|-----|----|----|---------|--------|
| Life expectancy | 78 | 81 | 70 | 82 | 82 |
| Maternal mortality (per 100k) | 26 | 7 | 103 | 6 | 5 |
| Infant mortality (per 1k) | 5.4 | 3.8 | 30 | 3.2 | 4.4 |
| 5-year cancer survival | 70% | 65% | 40-50% | 68% | 67% |
| Hospital infection rate | Moderate | Lower | Higher | Lower | Moderate |

### Key Insight
Germany, UK, Canada have lower mortality and better safety outcomes despite lower spending than USA.

### Prevention vs Treatment
Countries emphasizing primary care and prevention (UK, Germany, Canada) have better long-term outcomes than those emphasizing treatment after disease develops (USA).
    `
  },
  {
    id: 9,
    number: 9,
    title: 'Technology and the future of healthcare',
    shortDesc: 'Digital health & AI',
    icon: '🤖',
    description: 'How technology is changing healthcare - from electronic records to AI diagnosis.',
    content: `
## Healthcare Technology

### Today's Technology

**Electronic Medical Records (EMR/EHR)**
- Digital patient records
- Reduces errors
- Enables data sharing
- USA: High adoption (~96%)
- Germany: High adoption
- UK: NHS digital records (ongoing)
- India: Growing in private sector
- Canada: Variable by province

**Telemedicine**
- Remote consultations
- Growing adoption post-pandemic
- Benefits: Convenience, access in rural areas
- Challenges: Diagnosis limitations, security

**Wearables**
- Smartwatches monitoring heart rate, sleep
- Fitness trackers
- Continuous glucose monitors for diabetics

**Remote Monitoring**
- For chronic diseases (heart failure, COPD)
- Early warning of decompensation

**Robotic Surgery**
- Da Vinci robot allows minimally invasive complex surgery
- Reduces recovery time
- Expensive; mainly in developed nations

**Digital Imaging**
- AI-assisted diagnosis of X-rays, CT, MRI
- Can detect abnormalities faster than humans
- Reduces radiologist workload

**Genomics**
- Personalized medicine based on genetic makeup
- Identifies cancer mutations
- Drug response prediction
- Currently expensive; becoming cheaper

### AI in Healthcare

#### What AI Could Help With:
- **Diagnosis**: Analyzing medical imaging
- **Drug discovery**: Testing millions of compounds
- **Clinical documentation**: Converting doctor speech to notes
- **Patient triage**: Identifying urgent cases
- **Personalized treatment**: Recommending therapy based on genetics + patient data
- **Risk prediction**: Identifying high-risk patients
- **Chronic disease monitoring**: Early warning system

#### AI Challenges:
- **Hallucinations**: AI making up facts
- **Bias**: Training on biased historical data
- **Privacy**: Patient data required for training
- **Liability**: Who's responsible if AI recommendation causes harm?
- **Explainability**: Doctors may not understand why AI gave recommendation
- **Cybersecurity**: AI systems vulnerable to hacking
- **Regulatory approval**: Who approves AI tools?

### Recurring Question
> **What should humans do, and what should machines do?**

AI excels at: Analyzing patterns in large datasets, detecting abnormalities in images, predicting risk.

Humans excel at: Listening, empathy, complex judgment, communicating with patients, ethical decisions.
    `
  },
  {
    id: 10,
    number: 10,
    title: 'Who is responsible when things go wrong?',
    shortDesc: 'Governance & accountability',
    icon: '⚖️',
    description: 'How healthcare systems govern themselves and who is responsible for decisions.',
    content: `
## Healthcare Governance

### Key Players

- **Government**: Sets policies, funds systems, regulates
- **Hospitals**: Provide infrastructure, manage quality
- **Doctors**: Treat patients, set standards of care
- **Insurance companies**: Decide what's covered, negotiate prices
- **Pharmaceutical companies**: Develop and price drugs
- **Medical device companies**: Develop equipment
- **Regulators**: FDA, EMA, etc. approve drugs and devices
- **Employers**: Negotiate insurance plans (USA)
- **Patients**: Make healthcare decisions

### Critical Governance Questions

**Who approves a drug?**
- FDA (USA) requires clinical trials proving safety and efficacy
- European Medicines Agency (EMA) for Europe
- India's DCGI for India

**Who decides what insurance covers?**
- Insurance company (USA)
- Government (UK, Canada, Germany)
- Medical society consensus

**Who sets medical standards?**
- Medical societies (doctors)
- Regulatory bodies
- Evidence from clinical trials

**Who negotiates drug prices?**
- Individual patients in USA (highest cost)
- Government agencies (UK, Germany negotiate lower prices)
- Insurance companies negotiate rebates
- India: Government price controls

**Who pays when something goes wrong?**
- Malpractice lawsuits (USA, UK) - doctor/hospital insurance pays
- Government compensation fund (Germany)
- Workers' compensation
- Patient may have no recourse (India, developing countries)

**Who decides whether an expensive treatment is worth paying for?**
- UK NICE (National Institute for Health and Care Excellence): Cost-effectiveness analysis
- Patient (USA) and insurance company negotiate
- Government budget (Canada)
- Insurance company or patient ability to pay (Germany)

### Why This Matters

Different governance approaches lead to:
- Different drug prices (cancer drug $10,000/year in USA vs $3,000 in Europe)
- Different access (long waits in UK vs expensive access in USA)
- Different innovation rates (pharmaceutical R&D higher in USA due to higher prices)
- Different equity (universal systems more equitable; market systems more stratified)

### The Intersection

Healthcare is the intersection of:
- **Medicine**: How to treat disease
- **Economics**: What we can afford
- **Politics**: Who decides allocation
- **Technology**: What's possible
- **Human psychology**: Hopes, fears, values, preferences
    `
  }
]
