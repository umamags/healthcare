// Links for the "What can go wrong" items on each organ card. A card item links to the ailment whose
// name it starts with. Items without an ailment file stay as plain text.
export const cardAilmentLinks = {
  brain: [
    { prefix: 'Stroke', id: 'stroke' },
    { prefix: 'dementia', id: 'dementia' },
    { prefix: "Parkinson's disease", id: 'parkinsons' },
    { prefix: 'epilepsy', id: 'epilepsy' },
    { prefix: 'migraine', id: 'migraine' },
    { prefix: 'brain tumours', id: 'brain-tumours' },
    { prefix: 'traumatic brain injury', id: 'traumatic-brain-injury' }
  ],
  eyes: [
    { prefix: 'Refractive errors', id: 'refractive-errors' },
    { prefix: 'cataract', id: 'cataract' },
    { prefix: 'glaucoma', id: 'glaucoma' },
    { prefix: 'age-related macular degeneration', id: 'macular-degeneration' },
    { prefix: 'diabetic retinopathy', id: 'diabetic-retinopathy' },
    { prefix: 'conjunctivitis', id: 'conjunctivitis' },
    { prefix: 'dry eye', id: 'dry-eye' }
  ],
  heart: [
    { prefix: 'Coronary artery disease', id: 'coronary-artery-disease' },
    { prefix: 'heart attack', id: 'heart-attack' },
    { prefix: 'heart failure', id: 'heart-failure' },
    { prefix: 'arrhythmias', id: 'arrhythmias' },
    { prefix: 'valve disease', id: 'valve-disease' },
    { prefix: 'congenital', id: 'congenital-heart-defects' }
  ],
  kidneys: [
    { prefix: 'Chronic kidney disease', id: 'chronic-kidney-disease' },
    { prefix: 'kidney stones', id: 'kidney-stones' },
    { prefix: 'urinary tract infections', id: 'kidney-infection' },
    { prefix: 'sudden (acute) kidney injury', id: 'acute-kidney-injury' }
  ],
  liver: [
    { prefix: 'Fatty liver disease', id: 'fatty-liver' },
    { prefix: 'hepatitis', id: 'hepatitis' },
    { prefix: 'alcohol-related liver disease', id: 'alcohol-related-liver-disease' },
    { prefix: 'cirrhosis', id: 'cirrhosis' },
    { prefix: 'liver cancer', id: 'liver-cancer' }
  ],
  lungs: [
    { prefix: 'Asthma', id: 'asthma' },
    { prefix: 'COPD', id: 'copd' },
    { prefix: 'pneumonia', id: 'pneumonia' },
    { prefix: 'tuberculosis', id: 'tuberculosis' },
    { prefix: 'bronchitis', id: 'bronchitis' },
    { prefix: 'lung cancer', id: 'lung-cancer' }
  ]
}
