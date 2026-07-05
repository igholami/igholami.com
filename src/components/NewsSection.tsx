import { news } from '../data/personalData'

const shortDate = (raw: string) => {
  const d = new Date(raw)
  if (isNaN(d.getTime())) return raw
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

const NewsSection: React.FC = () => {
  const sorted = [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <section>
      <h2>News</h2>
      <ul>
        {sorted.map((item) => (
          <li key={item.id} style={{ display: 'flex', gap: '0.5rem', alignItems: 'baseline' }}>
            <span style={{ color: '#a8a29e', flex: '0 0 100px' }}>
              {shortDate(item.date)}
            </span>
            <span style={{ flex: 1 }} dangerouslySetInnerHTML={{ __html: item.title }} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default NewsSection
