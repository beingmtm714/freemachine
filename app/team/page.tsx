import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ParticleCanvas from '@/components/ParticleCanvas'
import styles from './page.module.css'

export const metadata = {
  title: 'Team — Free Machine',
}

const founders = [
  {
    name: 'Ben Gansky',
    role: 'Co-Founder & Executive Director',
    bio: 'Ben Gansky translates complex concepts into imaginative, accessible, and emotionally-rich experiences. Drawing on his background in community organizing, game design, theatre, critical theory, and media production, Gansky conceives, designs, and operates projects and programs that vivify the intersection of emerging technologies, progressive politics, and culture. He holds an MFA in Directing from Carnegie Mellon University.',
  },
  {
    name: 'Colleen Pulawski',
    role: 'Co-Founder & Narrative Director',
    bio: 'Drawing on her formal background in theatre, Colleen devises immersive, participatory experiences and wields these forms to promote civic engagement and progressive politics within communities. By synthesizing her storytelling acumen with work in the civic sphere, Colleen is dedicated to strengthening ties between artists, communities, and policymakers to further agendas of equity by shaping public policy through public conversation. Colleen received her BFA in acting from Carnegie Mellon University, and is presently an MPP candidate at UC Berkeley\'s Goldman School of Public Policy.',
  },
  {
    name: 'Blessing Yen',
    role: 'Co-Founder & Creative Director',
    bio: 'Blessing Yen is a designer, producer and director. Along with her partner, James Kaelan, she has co-directed and produced, amongst other works, the VR narrative "The Visitor" (Slamdance \'16, SFIFF \'16, AFI FEST \'16) and the feature film, EEL (AFF Wroclaw \'14, Sarasota \'15). She currently teaches Design for User Experience at USC, and serves as Chief Design Officer for the crowdfunding and streaming platform, Seed&Spark.',
  },
  {
    name: 'Michael Martin',
    role: 'Co-Founder & Policy Director',
    bio: 'Michael Martin, a city planner by trade, is currently the Head of Communities at SignalFire, an AI-driven, early-stage venture capital fund. Previously, he managed the AI XPRIZE and led Global Community Relations at the XPRIZE Foundation. He holds a Masters in Urban Planning from the University of New Orleans and a B.A. in Political Science from Pace University.',
  },
]

const emeritus = [
  { name: 'Veronica Moonhill', role: 'Immersive Theater and Filmmaker' },
  { name: 'Max Silverman', role: 'Founder, Canvas' },
  { name: 'James Kaelan', role: 'Independent Writer/Director' },
]

const advisors = [
  { name: 'Kenneth Bailey', role: 'Founder, Design Studio for Social Intervention' },
  { name: 'Cory Doctorow', role: 'Science fiction author, activist and journalist' },
  { name: 'Marina Gorbis', role: 'Executive Director, Institute for the Future' },
  { name: 'Emily Best', role: 'Founder & CEO, Seed & Spark' },
  { name: 'Anmol Chaddha', role: 'Director, Equitable Futures Lab, Institute for the Future' },
  { name: 'Cadwell Turnbull', role: 'Science fiction author, Workers Cooperative activist' },
  { name: 'Mina Hanna', role: 'Chair, IEEE-USA Artificial Intelligence and Autonomous Systems Policy Committee; Vice Chair, IEEE-USA Research and Development Policy Committee' },
  { name: 'Erin LeDell', role: 'Chief Machine Learning Scientist, h2o.ai' },
  { name: 'David Danks', role: 'L.L. Thurstone Professor of Philosophy & Psychology, Head of the Dept of Philosophy, Carnegie Mellon University' },
  { name: 'Vivienne Lee', role: 'Principal Consultant, REDF' },
  { name: 'David Chai', role: 'Independent Political Consultant, Newsom Administration' },
  { name: 'Michelle Rhone-Collins', role: 'Executive Director, LIFT' },
]

export default function Team() {
  return (
    <>
      <Nav />
      <ParticleCanvas />

      <section className={styles.hero}>
        <div className={styles.kicker}>The Team</div>
        <h1 className={styles.headline}>The people behind Free Machine</h1>
        <p className={styles.intro}>
          A collective of artists, designers, urban planners, and policy wonks
          building a more democratic technological future.
        </p>
      </section>

      <section className={styles.founders}>
        {founders.map(({ name, role, bio }) => (
          <div key={name} className={styles.bioRow}>
            <div className={styles.bioMeta}>
              <div className={styles.bioName}>{name}</div>
              <div className={styles.bioRole}>{role}</div>
            </div>
            <p className={styles.bioText}>{bio}</p>
          </div>
        ))}
      </section>

      <section className={styles.emeritus}>
        <div className={styles.emeritusLabel}>Founders Emeritus</div>
        <div className={styles.emeritusList}>
          {emeritus.map(({ name, role }) => (
            <div key={name} className={styles.emeritusRow}>
              <span className={styles.emeritusName}>{name}</span>
              <span className={styles.emeritusRole}>{role}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.advisors}>
        <div className={styles.kicker}>Advisors</div>
        <h2 className={styles.advisorsHeading}>Our advisory board</h2>
        <div className={styles.advisorList}>
          {advisors.map(({ name, role }) => (
            <div key={name} className={styles.advisorRow}>
              <div className={styles.advisorName}>{name}</div>
              <div className={styles.advisorRole}>{role}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
