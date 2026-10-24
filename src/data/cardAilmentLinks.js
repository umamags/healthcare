// Links for the "What can go wrong" items on each organ card. A card item links to the ailment whose
// name it starts with. Generated from the organ cards and ailment files; see the mapping check.
export const cardAilmentLinks = {
  'appendix': [
    { prefix: 'Appendicitis', id: 'appendicitis' },
    { prefix: 'tumors of the appendix', id: 'appendix-tumours' }
  ],
  'bone': [
    { prefix: 'Fractures', id: 'fractures' },
    { prefix: 'osteoporosis', id: 'osteoporosis' },
    { prefix: 'osteoarthritis', id: 'osteoarthritis' },
    { prefix: 'rheumatoid arthritis', id: 'rheumatoid-arthritis' },
    { prefix: 'bone infection', id: 'bone-infection' },
    { prefix: 'bone cancer', id: 'bone-cancer' }
  ],
  'brain': [
    { prefix: 'Stroke', id: 'stroke' },
    { prefix: 'dementia', id: 'dementia' },
    { prefix: 'Parkinson', id: 'parkinsons' },
    { prefix: 'epilepsy', id: 'epilepsy' },
    { prefix: 'migraine', id: 'migraine' },
    { prefix: 'brain tumours', id: 'brain-tumours' },
    { prefix: 'traumatic brain injury', id: 'traumatic-brain-injury' }
  ],
  'breasts': [
    { prefix: 'Benign lumps', id: 'benign-breast-lumps' },
    { prefix: 'breast pain', id: 'breast-pain' },
    { prefix: 'mastitis', id: 'mastitis' },
    { prefix: 'nipple discharge', id: 'nipple-discharge' },
    { prefix: 'breast cancer', id: 'breast-cancer' }
  ],
  'cervix': [
    { prefix: 'Cervicitis', id: 'cervicitis' },
    { prefix: 'cervical polyps', id: 'cervical-polyps' },
    { prefix: 'HPV infection', id: 'hpv-infection' },
    { prefix: 'precancerous cell changes', id: 'cervical-precancer' },
    { prefix: 'cervical cancer', id: 'cervical-cancer' }
  ],
  'ears': [
    { prefix: 'Hearing loss', id: 'hearing-loss' },
    { prefix: 'middle-ear infection', id: 'otitis-media' },
    { prefix: 'swimmer', id: 'swimmers-ear' },
    { prefix: 'tinnitus', id: 'tinnitus' },
    { prefix: 'vertigo', id: 'vertigo' },
    { prefix: 'earwax blockage', id: 'earwax-blockage' },
    { prefix: 'perforated eardrum', id: 'perforated-eardrum' }
  ],
  'eyes': [
    { prefix: 'Refractive errors', id: 'refractive-errors' },
    { prefix: 'cataract', id: 'cataract' },
    { prefix: 'glaucoma', id: 'glaucoma' },
    { prefix: 'age-related macular degeneration', id: 'macular-degeneration' },
    { prefix: 'diabetic retinopathy', id: 'diabetic-retinopathy' },
    { prefix: 'conjunctivitis', id: 'conjunctivitis' },
    { prefix: 'dry eye', id: 'dry-eye' }
  ],
  'fallopian-tubes': [
    { prefix: 'Blockage', id: 'tubal-blockage' },
    { prefix: 'hydrosalpinx', id: 'hydrosalpinx' },
    { prefix: 'pelvic inflammatory disease', id: 'pelvic-inflammatory-disease' },
    { prefix: 'ectopic pregnancy', id: 'ectopic-pregnancy' },
    { prefix: 'tubal cancer', id: 'tubal-cancer' }
  ],
  'feet': [
    { prefix: 'Plantar fasciitis', id: 'plantar-fasciitis' },
    { prefix: 'bunions', id: 'bunions' },
    { prefix: 'athlete', id: 'athletes-foot' },
    { prefix: 'ingrown toenails', id: 'ingrown-toenails' },
    { prefix: 'ankle sprains', id: 'ankle-sprains' },
    { prefix: 'diabetes-related foot problems', id: 'diabetic-foot' }
  ],
  'hands': [
    { prefix: 'Carpal tunnel', id: 'carpal-tunnel' },
    { prefix: 'arthritis', id: 'hand-arthritis' },
    { prefix: 'trigger finger', id: 'trigger-finger' },
    { prefix: 'tendon injuries', id: 'tendon-injuries' },
    { prefix: 'fractures and sprains', id: 'hand-fractures-sprains' }
  ],
  'heart': [
    { prefix: 'Coronary artery disease', id: 'coronary-artery-disease' },
    { prefix: 'heart attack', id: 'heart-attack' },
    { prefix: 'heart failure', id: 'heart-failure' },
    { prefix: 'arrhythmias', id: 'arrhythmias' },
    { prefix: 'valve disease', id: 'valve-disease' },
    { prefix: 'congenital', id: 'congenital-heart-defects' }
  ],
  'intestines': [
    { prefix: 'IBS', id: 'ibs' },
    { prefix: 'IBD', id: 'ibd' },
    { prefix: 'coeliac disease', id: 'coeliac-disease' },
    { prefix: 'diverticular disease', id: 'diverticular-disease' },
    { prefix: 'bowel obstruction', id: 'bowel-obstruction' },
    { prefix: 'colorectal cancer', id: 'colorectal-cancer' }
  ],
  'kidneys': [
    { prefix: 'Chronic kidney disease', id: 'chronic-kidney-disease' },
    { prefix: 'kidney stones', id: 'kidney-stones' },
    { prefix: 'urinary tract infections', id: 'kidney-infection' },
    { prefix: 'sudden (acute) kidney injury', id: 'acute-kidney-injury' }
  ],
  'liver': [
    { prefix: 'Fatty liver disease', id: 'fatty-liver' },
    { prefix: 'hepatitis', id: 'hepatitis' },
    { prefix: 'alcohol-related liver disease', id: 'alcohol-related-liver-disease' },
    { prefix: 'cirrhosis', id: 'cirrhosis' },
    { prefix: 'liver cancer', id: 'liver-cancer' }
  ],
  'lungs': [
    { prefix: 'Asthma', id: 'asthma' },
    { prefix: 'COPD', id: 'copd' },
    { prefix: 'pneumonia', id: 'pneumonia' },
    { prefix: 'tuberculosis', id: 'tuberculosis' },
    { prefix: 'bronchitis', id: 'bronchitis' },
    { prefix: 'lung cancer', id: 'lung-cancer' }
  ],
  'mouth': [
    { prefix: 'Mouth ulcers', id: 'mouth-ulcers' },
    { prefix: 'cold sores', id: 'cold-sores' },
    { prefix: 'oral thrush', id: 'oral-thrush' },
    { prefix: 'dry mouth', id: 'dry-mouth' },
    { prefix: 'persistent bad breath', id: 'bad-breath' },
    { prefix: 'oral cancer', id: 'oral-cancer' }
  ],
  'nose': [
    { prefix: 'Allergic rhinitis', id: 'allergic-rhinitis' },
    { prefix: 'sinusitis', id: 'sinusitis' },
    { prefix: 'deviated septum', id: 'deviated-septum' },
    { prefix: 'nosebleeds', id: 'nosebleeds' },
    { prefix: 'nasal polyps', id: 'nasal-polyps' },
    { prefix: 'loss of smell', id: 'loss-of-smell' }
  ],
  'ovaries': [
    { prefix: 'Functional cysts', id: 'ovarian-cysts' },
    { prefix: 'PCOS', id: 'pcos' },
    { prefix: 'endometriosis cysts', id: 'endometriomas' },
    { prefix: 'ovarian torsion', id: 'ovarian-torsion' },
    { prefix: 'premature ovarian insufficiency', id: 'premature-ovarian-insufficiency' },
    { prefix: 'ovarian cancer', id: 'ovarian-cancer' }
  ],
  'penis': [
    { prefix: 'Erectile dysfunction', id: 'erectile-dysfunction' },
    { prefix: 'Peyronie', id: 'peyronies-disease' },
    { prefix: 'balanitis', id: 'balanitis' },
    { prefix: 'phimosis', id: 'phimosis' },
    { prefix: 'paraphimosis', id: 'paraphimosis' },
    { prefix: 'sexually transmitted infections', id: 'penile-stis' },
    { prefix: 'penile cancer', id: 'penile-cancer' }
  ],
  'prostate': [
    { prefix: 'Benign prostatic enlargement', id: 'bph' },
    { prefix: 'prostatitis', id: 'prostatitis' },
    { prefix: 'prostate cancer', id: 'prostate-cancer' }
  ],
  'scrotum': [
    { prefix: 'Hydrocele', id: 'hydrocele' },
    { prefix: 'varicocele', id: 'varicocele' },
    { prefix: 'epididymal cyst', id: 'epididymal-cyst' },
    { prefix: 'inguinal hernia', id: 'inguinal-hernia' },
    { prefix: 'skin cysts', id: 'scrotal-skin-cysts' },
    { prefix: 'Fournier', id: 'fourniers-gangrene' }
  ],
  'seminal-vesicles': [
    { prefix: 'Seminal vesiculitis', id: 'seminal-vesiculitis' },
    { prefix: 'cysts', id: 'seminal-vesicle-cysts' },
    { prefix: 'small stones', id: 'seminal-vesicle-stones' },
    { prefix: 'being absent from birth', id: 'absent-seminal-vesicles' },
    { prefix: 'cancer', id: 'seminal-vesicle-cancer' }
  ],
  'skin': [
    { prefix: 'Acne', id: 'acne' },
    { prefix: 'eczema', id: 'eczema' },
    { prefix: 'psoriasis', id: 'psoriasis' },
    { prefix: 'fungal infections', id: 'fungal-skin-infections' },
    { prefix: 'hives', id: 'hives' },
    { prefix: 'skin cancer', id: 'skin-cancer' }
  ],
  'sperm-ducts': [
    { prefix: 'Epididymitis', id: 'epididymitis' },
    { prefix: 'epididymal cysts', id: 'epididymal-cyst' },
    { prefix: 'blocked vas deferens', id: 'blocked-vas-deferens' },
    { prefix: 'post-vasectomy pain', id: 'post-vasectomy-pain' }
  ],
  'spinal-cord': [
    { prefix: 'Slipped', id: 'herniated-disc' },
    { prefix: 'spinal stenosis', id: 'spinal-stenosis' },
    { prefix: 'sciatica', id: 'sciatica' },
    { prefix: 'spinal cord injury', id: 'spinal-cord-injury' },
    { prefix: 'muscle/ligament strain', id: 'back-strain' }
  ],
  'stomach': [
    { prefix: 'Acid reflux', id: 'acid-reflux' },
    { prefix: 'gastritis', id: 'gastritis' },
    { prefix: 'stomach ulcers', id: 'stomach-ulcers' },
    { prefix: 'indigestion', id: 'indigestion' },
    { prefix: 'stomach cancer', id: 'stomach-cancer' }
  ],
  'teeth': [
    { prefix: 'Tooth decay', id: 'tooth-decay' },
    { prefix: 'gum disease', id: 'gum-disease' },
    { prefix: 'tooth abscess', id: 'tooth-abscess' },
    { prefix: 'cracked or broken tooth', id: 'cracked-tooth' },
    { prefix: 'impacted wisdom teeth', id: 'impacted-wisdom-teeth' },
    { prefix: 'tooth loss', id: 'tooth-loss' },
    { prefix: 'mouth sores', id: 'non-healing-mouth-sores' }
  ],
  'testes': [
    { prefix: 'Testicular torsion', id: 'testicular-torsion' },
    { prefix: 'epididymitis/orchitis', id: 'epididymitis-orchitis' },
    { prefix: 'varicocele', id: 'varicocele' },
    { prefix: 'hydrocele', id: 'hydrocele' },
    { prefix: 'testicular cancer', id: 'testicular-cancer' },
    { prefix: 'low testosterone', id: 'low-testosterone' },
    { prefix: 'undescended testicle', id: 'undescended-testicle' }
  ],
  'throat': [
    { prefix: 'Sore throat', id: 'sore-throat' },
    { prefix: 'tonsillitis', id: 'tonsillitis' },
    { prefix: 'strep throat', id: 'strep-throat' },
    { prefix: 'laryngitis', id: 'laryngitis' },
    { prefix: 'acid reflux irritating', id: 'throat-reflux' },
    { prefix: 'swallowing difficulty', id: 'dysphagia' },
    { prefix: 'persistent hoarseness', id: 'hoarseness-neck-lump' }
  ],
  'uterus': [
    { prefix: 'Fibroids', id: 'fibroids' },
    { prefix: 'endometriosis', id: 'endometriosis' },
    { prefix: 'adenomyosis', id: 'adenomyosis' },
    { prefix: 'endometrial polyps', id: 'endometrial-polyps' },
    { prefix: 'heavy menstrual bleeding', id: 'heavy-menstrual-bleeding' },
    { prefix: 'uterine prolapse', id: 'uterine-prolapse' },
    { prefix: 'endometrial cancer', id: 'endometrial-cancer' }
  ],
  'vagina': [
    { prefix: 'Yeast infection', id: 'yeast-infection' },
    { prefix: 'bacterial vaginosis', id: 'bacterial-vaginosis' },
    { prefix: 'sexually transmitted infections', id: 'vaginal-stis' },
    { prefix: 'dryness and thinning', id: 'vaginal-dryness' },
    { prefix: 'pelvic organ prolapse', id: 'pelvic-organ-prolapse' }
  ],
  'vulva': [
    { prefix: 'Irritation or allergy', id: 'vulvar-irritation' },
    { prefix: 'lichen sclerosus', id: 'lichen-sclerosus' },
    { prefix: 'Bartholin', id: 'bartholins-cyst' },
    { prefix: 'genital warts', id: 'genital-warts' },
    { prefix: 'vulvar cancer', id: 'vulvar-cancer' }
  ]
}
