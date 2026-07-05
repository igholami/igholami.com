import { publications } from '../data/personalData'
import MathRenderer from './common/MathRenderer'

interface Parsed {
  text: string
  abbr: string | null
  badge: string | null
}

const parseVenue = (v: string): Parsed => {
  let badge: string | null = null
  let s = v
  const badgeMatch = s.match(/\(([^()]*(?:Best Paper|Special Issue)[^()]*)\)\s*$/i)
  if (badgeMatch) {
    badge = badgeMatch[1].trim()
    s = s.slice(0, badgeMatch.index).trim()
  }
  const m = s.match(/^(.*)\((.+?)\)\s*-?\s*(\d{4})?(.*)$/)
  if (!m) return { text: s, abbr: null, badge }
  const full = m[1].trim()
  const abbr = m[2].trim()
  const year = m[3] ? ' ' + m[3] : ''
  const suffix = m[4].trim()
  return { text: `${full}${year}${suffix ? ' ' + suffix : ''}`, abbr, badge }
}

const PublicationsSection: React.FC = () => {
  const sorted = [...publications].sort((a, b) => a.order - b.order)

  return (
    <section>
      <h2>Publications</h2>
      <ul>
        {sorted.map((pub) => {
          const parsed = pub.venues.map(parseVenue)
          const abbrs = parsed.map(p => p.abbr).filter(Boolean) as string[]
          const badges = parsed.map(p => p.badge).filter(Boolean) as string[]
          const links = pub.links ?? abbrs.map(a => ({ label: a, url: pub.url }))
          return (
            <li key={pub.id} style={{ marginBottom: '0.7rem' }}>
              <div style={{ fontWeight: 600 }}>
                <MathRenderer>{pub.title}</MathRenderer>
              </div>
              <div style={{ color: '#a8a29e', fontSize: '0.95rem' }}>
                {parsed.map(p => p.text).join('; ')}
                {links.length > 0 && (
                  <>
                    {' '}
                    [{links.map((l, i) => (
                      <span key={l.label}>
                        <a href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
                        {i < links.length - 1 && ', '}
                      </span>
                    ))}]
                  </>
                )}
                {badges.map(b => (
                  <span key={b}> <strong>{b}</strong></span>
                ))}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default PublicationsSection
