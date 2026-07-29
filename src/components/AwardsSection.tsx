import { awards } from '../data/personalData'

const AwardsSection: React.FC = () => {
  return (
    <section>
      <h2>Awards</h2>
      <ul>
        {awards.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </section>
  )
}

export default AwardsSection
