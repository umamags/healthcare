const cardFiles = import.meta.glob('../../references/organs/*-card.md', {
  query: '?raw',
  import: 'default',
  eager: true
})

const articleFiles = import.meta.glob('../../references/organs/*-article.md', {
  query: '?raw',
  import: 'default',
  eager: true
})

// Card and article text for one organ. Only the organ page imports this, so the home page doesn't load it.
export function getOrganText(organId) {
  return {
    card: cardFiles[`../../references/organs/${organId}-card.md`],
    article: articleFiles[`../../references/organs/${organId}-article.md`]
  }
}
