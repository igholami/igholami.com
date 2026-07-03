import { awards } from '../data/personalData'

const parse = (raw: string): { year: string; title: string } => {
  const m = raw.match(/^(.*?)\s*\((\d{4})\)\s*$/)
  if (!m) return { year: '', title: raw }
  return { year: m[2], title: m[1].trim() }
}

const AwardsSection: React.FC = () => {
  const items = awards.map(parse).sort((a, b) => Number(b.year) - Number(a.year))
  return (
    <section>
      <h2>Awards</h2>
      <ul>
        {items.map((a, i) => (
          <li key={i}>
            <span style={{ color: '#a8a29e', display: 'inline-block', minWidth: '105px' }}>
              {a.year}
            </span>
            {a.title}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AwardsSection
