# Healthcare Explained - A Global Healthcare Comparison Site

An interactive educational website explaining how healthcare systems work around the world.

## Core Concept

> **Medicine tells us how to treat disease. Healthcare tells us how society delivers that treatment.**

This site answers **10 major questions** to help people understand healthcare systems:

1. What happens when I get sick? (Patient journey)
2. How is healthcare organized? (System architecture & financing)
3. What does healthcare actually cost? (Costs & financial burden)
4. Insurance: The confusing part (How insurance works)
5. How do doctors diagnose and treat disease? (Clinical pathways)
6. Which diseases consume healthcare resources? (Disease burden & financial catastrophe)
7. Access: Can you actually get care? (Availability & wait times)
8. Quality of healthcare (Outcomes & safety)
9. Technology and the future of healthcare (Digital health & AI)
10. Who is responsible when things go wrong? (Governance & accountability)

## Features

### Main Pages

- **Home Page**: Overview of the 10 questions with detailed explanations
  - Interactive cost calculator: Compare $10k hospital bill costs across countries
  - Patient journey example: Follow "John" through chest pain in 5 different countries

- **Country Comparison Page**: Quick comparison of all healthcare systems
  - Country cards for USA, UK, India, Germany, Canada
  - Quick comparison matrix showing key metrics
  - Key insights about healthcare systems

- **Country Detail Pages**: Standardized profiles for each country
  - 14-point scorecard covering all aspects
  - Strengths and weaknesses
  - Best suited for whom

### Interactive Elements

1. **Cost Calculator** - Show what a $10,000 hospital bill costs in each country
2. **Patient Journey** - Follow a patient through chest pain diagnosis in each country
3. **Comparison Tables** - See how countries compare on key metrics
4. **Question Deep Dives** - Full explanations of each of the 10 questions

## Technology Stack

- **React 19** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **JavaScript (ES6+)** - Lightweight, no TypeScript overhead

## Running Locally

### Development

```bash
npm install
npm run dev
```

Access at http://localhost:5173/

### Build for Production

```bash
npm run build
npm run preview
```

Output in `dist/` directory.

## Countries Featured

- 🇺🇸 United States (Mixed public/private)
- 🇬🇧 United Kingdom (Tax-funded NHS)
- 🇮🇳 India (Mixed with large out-of-pocket burden)
- 🇩🇪 Germany (Social insurance)
- 🇨🇦 Canada (National single-payer)

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for GitHub Pages and ai-lab.in setup.

Default paths:
- GitHub Pages: https://umamags.github.io/healthcare/
- ai-lab.in: https://ai-lab.in/healthcare/

## Future Enhancements

- Add more countries (France, Japan, Australia, etc.)
- Patient journey examples for other conditions (cancer, diabetes, pregnancy)
- Interactive visualizations and charts
- Regional comparisons within countries
- Search and filtering functionality
- Multi-language support
