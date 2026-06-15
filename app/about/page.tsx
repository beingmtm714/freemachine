import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ParticleCanvas from '@/components/ParticleCanvas'
import styles from './page.module.css'

export const metadata = {
  title: 'About — Free Machine',
}

export default function About() {
  return (
    <>
      <Nav />
      <ParticleCanvas />

      <section className={styles.hero}>
        <div className={styles.kicker}>About Free Machine</div>
        <h1 className={styles.headline}>
          Let&apos;s build the future <em>together.</em>
        </h1>
        <p className={styles.intro}>
          Free Machine was a non-profit organization that developed creative
          programs to shape a high-tech future that is equitable, abundant,
          and sustainable.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionLabel}>
            <div className={styles.sectionNum}>01</div>
            <div className={styles.sectionLabelText}>What we did</div>
          </div>
          <div className={styles.editorial}>
            <p className={`${styles.body} ${styles.bodyLead}`}>
              We were an LA-based collective of artists, designers, urban
              planners, and policy wonks aiming to reshape the dominant
              narratives around technology, the public domain, and civic
              engagement using the tools of art and culture.
            </p>
            <p className={styles.body}>
              We created experiences that engaged and challenged the public to
              collectively imagine possible futures where the fruits of emergent
              technologies are democratically owned. Our work was designed to
              generate the imaginative and emotional energy necessary to power
              institutional and policy change toward democratic oversight and
              ownership of technology.
            </p>
            <p className={styles.body}>
              The relationship between policy and creative practice was paramount
              to Free Machine&apos;s approach: storytelling drives culture, and
              culture drives policy. Our work lived at this exciting nexus of
              tech, policy, and culture with the goal of unleashing an abundant,
              sustainable future for all.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionLabel}>
            <div className={styles.sectionNum}>02</div>
            <div className={styles.sectionLabelText}>Why we did it</div>
          </div>
          <div className={styles.editorial}>
            <p className={`${styles.body} ${styles.bodyLead}`}>
              Artificial intelligence and other emergent technologies are already
              beginning to change how humans live, interact, and thrive. These
              technologies will reshape society in our lifetimes and generate
              vast amounts of wealth. Who will enjoy the privileges of this new
              era of machine-produced abundance? Whoever owns the machines.
            </p>
            <p className={styles.body}>
              Our goal was to orient society toward ensuring that this next
              generation of machines benefits everyone — not just an elite few.
            </p>
            <p className={styles.body}>
              What values do we embrace as a society? How do we collectively
              create a future based upon them, particularly in light of the
              uncertainties around automation and climate change? How do we
              become empowered to do so? What types of policies will facilitate
              these visions and goals?
            </p>
            <p className={styles.body}>
              These are big questions, but Free Machine believed we each have
              a crucial role to play in answering them.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.questions}>
        <div className={styles.questionStack}>
          <div className={styles.questionRow}>
            <span className={styles.qMark}>—</span>
            <p className={styles.qText}>
              How might we create space to envision a future that is based in
              democratic values?
            </p>
          </div>
          <div className={styles.questionRow}>
            <span className={styles.qMark}>—</span>
            <p className={styles.qText}>
              How might we empower individuals and communities to envision
              themselves playing a crucial role in creating this future?
            </p>
          </div>
          <div className={styles.questionRow}>
            <span className={styles.qMark}>—</span>
            <p className={styles.qText}>
              How do we become empowered to shape the policies that will
              facilitate the visions and goals we share?
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
