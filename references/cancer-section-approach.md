Markdown · cancer-section-approach.md

# Cancer Education Section: Claude Code Implementation Approach

## Overview

Build a "Cancer Explained" section mirroring your healthcare site's structure. Target: People who suspect they have cancer in USA & India contexts.

---

## Phase 1: Information Architecture

### Page Structure (Suggested)

```
/cancer/
├── index.html (Main hub)
├── basics/ (What is cancer?)
│   ├── what-is-cancer.html
│   ├── types-of-cancer.html
│   └── how-cancer-develops.html
├── suspect/ (I'm worried I might have cancer)
│   ├── symptoms.html
│   ├── risk-factors.html
│   └── screening.html
├── diagnosis/ (I've been diagnosed)
│   ├── diagnosis-journey.html
│   ├── staging-explained.html
│   └── treatment-options.html
├── manage/ (Living with cancer)
│   ├── side-effects.html
│   ├── mental-health.html
│   └── support-resources.html
├── financial/ (Preparing financially)
│   ├── costs-overview.html
│   ├── insurance-guide.html
│   └── financial-assistance.html
└── resources/ (Additional help)
    ├── glossary.html
    ├── myths-facts.html
    └── qa.html
```

---

## Phase 2: Content Strategy

### Core Content Sections (In Priority Order)

**1. Main Hub Page** (`/cancer/`)

- Hero: "Understanding Cancer: A guide for people who suspect they might have it"
- 6 Journey Cards (clickable sections):
  - "Just Diagnosed? Here's what to expect"
  - "I have symptoms. Should I worry?"
  - "Types of Cancer Explained"
  - "Treatment Options Demystified"
  - "Managing Side Effects"
  - "Financial Reality: India vs USA"

**2. Symptoms & When to See a Doctor** (Most urgent for your audience)

- Common cancer symptoms (non-specific)
- Red flags by body region
- India vs USA: Where to go, costs, wait times
- Interactive symptom checker (disclaimers: not diagnosis)

**3. Diagnosis Journey** (Patient story format - mimic your chest pain example)

- "Meet Priya (India)" - Private hospital journey, costs, timeline
- "Meet James (USA)" - Insurance, copays, timeline
- What tests you'll have, costs in each country
- How long diagnosis typically takes

**4. Types of Cancer** (Simplified)

- Most common types: Breast, Lung, Cervical, Colorectal
- For each: Risk factors, symptoms, survival rates
- Link to country-specific treatment availability

**5. Treatment Options** (Non-jargon explanations)

- Surgery, Chemotherapy, Radiation, Immunotherapy, Targeted Therapy
- What happens during treatment
- Common side effects
- India vs USA: Availability & costs

**6. Financial Preparation**

- Cost breakdowns (India vs USA)
- Insurance navigation (Medicaid/Medicare vs employer vs private)
- Financial assistance programs by country
- Interactive: "What will treatment cost me?"

---

## Phase 3: Design & Features

### Consistent with Your Healthcare Site:

✓ Question cards format (like your "10 Major Questions") ✓ Country comparison (USA & India side-by-side) ✓ Patient journey examples (like chest pain example) ✓ Interactive calculators ✓ Visual diagrams (cancer stages, treatment pathways)

### Specific Elements to Build:

1. **Side-by-Side Country Cards**

   ```
   India Path:
   - Symptom → Private hospital (immediate, costs $$)
   - vs Public hospital (free, long waits)
   - Treatment costs & timeline
   - Insurance reality

   USA Path:
   - Symptom → Primary care or ER
   - Insurance verification
   - Treatment costs & insurance coverage
   - Out-of-pocket realities
   ```
2. **Cost Calculator**
   - "What will my cancer treatment cost?"
   - Slider: Treatment type (surgery, chemo, both, etc.)
   - Output: India private, India public, USA with insurance, USA without
3. **Diagnosis Timeline Visualization**
   - Visual timeline: Symptom → Lab test → Imaging → Biopsy → Pathology → Staging
   - Duration in India vs USA
   - What happens at each step
4. **Symptom Checker** (with strong disclaimers)
   - "These symptoms warrant investigation"
   - Links to "When to see a doctor"
   - Regional doctor-finding resources
5. **Myth-Busting Section**
   - "Cancer myths we need to stop believing"
   - Quick fact cards

---

## Phase 4: Claude Code Workflow

### Step 1: Audit Current Site Tech Stack

```bash
# Ask yourself:
- Is your site HTML/CSS/JS, React, Vue, or static site generator?
- Do you have a template system or component structure?
- How do you manage navigation & routing?
```

### Step 2: Brief Claude Code for Each Page

For each page, provide Claude with:

**Context:**

- Link to live site (so Claude can view your design system)
- "Use the same style, layout, and interaction patterns"
- Current site technology (React/HTML/etc.)

**For content pages ask:**

> "Create a page about \[topic\] for non-medical readers. Include:
> 
> - Simple explanations (no jargon)
> - India & USA context/costs
> - \[Any interactive elements\]
> - Consistent with our healthcare site style"

### Step 3: Interactive Elements

For each interactive component, provide data:

- Treatment cost data (India vs USA, 2024-2025)
- Diagnosis timeline estimates
- Symptom-disease mapping

**Where to get data:**

- National Cancer Institute (USA) → cancer.gov
- Cancer India registry
- WHO cancer factsheets
- Health ministry data (both countries)

### Step 4: Build in Order

1. **Hub page** (navigation center)
2. **Diagnosis journey** (most urgent for your audience)
3. **Symptoms & screening** (people's first question)
4. **Types of cancer** (informational)
5. **Treatment & side effects** (important context)
6. **Financial** (complex, deserves careful attention)
7. **Support & resources** (helpful but can come later)

---

## Phase 5: Data You'll Need

### For Diagnosis Journey Example:

- Typical timeline: Symptom → diagnosis (India: 3-6 months, USA: 1-3 months)
- Costs at each step
- Test names and what they measure

### For Cost Calculator:

| Treatment Type | India (Private) | India (Public) | USA (With Insurance) | USA (Uninsured) |
| --- | --- | --- | --- | --- |
| Early surgery only | $2,000-5,000 | Free | $5,000-10,000 | $30,000-60,000 |
| Chemo (6 cycles) | $3,000-8,000 | Free | $10,000-20,000 | $50,000-150,000 |
| Radiation (30 days) | $2,000-4,000 | Free | $15,000-25,000 | $40,000-75,000 |

### For Symptom Checker:

- Red flags vs benign symptoms
- Specialist to see (oncologist, surgeon, etc.)
- Urgency level (see in weeks vs months vs years)

---

## Phase 6: Practical Next Steps

1. **Share project repo/structure** with Claude Code
2. **Create a template** using your existing healthcare page style
3. **Build hub page first** - establish navigation
4. **Tackle diagnosis journey** - high impact for your audience
5. **Add cost calculator** - mirrors your healthcare bill calculator
6. **Populate content pages** - 1-2 per Claude Code session

---

## Tone & Voice Guide

For this audience (non-medical, anxious):

- **Clear over clever** - Use plain English
- **Reassuring tone** - "Here's what happens" vs scary scenarios
- **Specific costs** - Real numbers (updated 2024-2025)
- **Country-aware** - India/USA realities (not sugar-coated)
- **Action-oriented** - "Here's what to do if you have these symptoms"
- **Honest about unknowns** - "Costs vary based on..." not false certainty

---

## Sample Brief for Claude Code

### Example 1: Main Hub Page

> "Create a main hub page for a cancer education section. The site is healthcare-focused and uses the same style as \[show example\]. Create 6 cards for different user journeys:
> 
> 1. 'I have symptoms'
> 2. 'Recently diagnosed'
> 3. 'Cancer types explained'
> 4. 'Treatment options'
> 5. 'Managing side effects'
> 6. 'Financial preparation'
> 
> Each card should link to its respective page and have a short description."

### Example 2: Diagnosis Journey

> "Create a 'Diagnosis Journey' page showing what happens when someone has cancer symptoms. Use a side-by-side format comparing:
> 
> - India (private hospital path)
> - USA (typical insurance path)
> 
> For each, show timeline, costs, what tests happen, and what to expect. Include a visual timeline and real cost estimates for 2024."

### Example 3: Cost Calculator

> "Create an interactive cost calculator for cancer treatment. User selects treatment type (surgery, chemotherapy, radiation, combination). Shows estimated costs for:
> 
> - India private hospital
> - India public hospital
> - USA with insurance
> - USA without insurance Use realistic 2024-2025 costs and include notes about variability."

---

## Success Criteria

- [ ] Hub page shows journey-based navigation
- [ ] At least 3 core pages completed (diagnosis, symptoms, types)
- [ ] Country comparison on key pages (costs, timelines)
- [ ] One interactive element (calculator or timeline)
- [ ] Consistent design with healthcare site
- [ ] Plain language (tested with non-medical reader)
- [ ] All claims backed by sources/cited
- [ ] Mobile responsive
- [ ] Links to verified resources (Mayo Clinic, Cancer.gov, Indian oncology boards)