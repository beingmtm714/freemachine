import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ParticleCanvas from '@/components/ParticleCanvas'
import styles from './page.module.css'

export const metadata = {
  title: 'Programs — Free Machine',
}

export default function Programs() {
  return (
    <>
      <Nav />
      <ParticleCanvas />

      <section className={styles.hero}>
        <div className={styles.kicker}>Programs</div>
        <h1 className={styles.headline}>Future Perfect</h1>
        <p className={styles.intro}>
          A live, group game in which participants join an imagined society
          called Tomorrowland.
        </p>
      </section>

      <section className={styles.detail}>
        <div className={styles.detailGrid}>
          <div className={styles.detailLeft}>
            <h2 className={styles.sectionHeading}>
              To make it to their ideal future, they&apos;ll have to work together.
            </h2>
            <p className={styles.body}>
              Presented with automation or climate-change related predicaments,
              participants debate and then vote between two policy options. The
              winning option is enacted, we jump forward in time, and based on
              their choices, face a new situation.
            </p>
            <p className={styles.body}>
              At the end of a twenty-year period, the group&apos;s decisions have
              guided Tomorrowland to one of four potential futures.
            </p>
            <p className={styles.body}>
              Future Perfect engaged the public in an imaginative and fun
              environment where they could learn about the complexity of tech
              &amp; environment policy, with the goal of driving participants to
              become advocates for these type of policies in their local
              jurisdictions.
            </p>
          </div>
          <div className={styles.factStack}>
            {[
              { label: 'Format', value: 'Live, group game' },
              { label: 'Setting', value: 'Tomorrowland — an imagined society' },
              { label: 'Duration', value: '20-year simulation in ~90 minutes' },
              { label: 'Outcomes', value: 'One of four possible futures' },
              { label: 'Focus', value: 'Automation & climate policy' },
            ].map(({ label, value }) => (
              <div key={label} className={styles.factRow}>
                <div className={styles.factLabel}>{label}</div>
                <div className={styles.factValue}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.timeline}>
        <div className={styles.timelineInner}>
          <div className={styles.programKicker}>How it worked</div>
          <h2 className={styles.programTitle}>From now to twenty years from today</h2>
          <div className={styles.timelineList}>
            {[
              {
                year: 'Year 0',
                title: 'Join Tomorrowland',
                body: 'Participants took on the role of neighborhood council members. They were introduced to the society, its values, and the challenges it faces.',
              },
              {
                year: 'Year +5',
                title: 'First predicament',
                body: 'Automation and climate trends intensified. The group debated and voted between two divergent policy paths. The majority won; consequences followed.',
              },
              {
                year: 'Year +10',
                title: 'Ripple effects',
                body: 'Earlier decisions shaped the landscape. New predicaments emerged. Coalition-building became necessary to navigate harder choices.',
              },
              {
                year: 'Year +15',
                title: 'The stakes rose',
                body: 'The costs and benefits of earlier policies were now visible. One vote could reshape the trajectory of an entire society.',
              },
              {
                year: 'Year +20',
                title: 'One of four futures',
                body: "The group's cumulative decisions guided Tomorrowland to one of four possible outcomes — from equitable abundance to deep inequality. The debrief began.",
              },
            ].map(({ year, title, body }) => (
              <div key={year} className={styles.tlStep}>
                <div className={styles.tlYear}>{year}</div>
                <div className={styles.tlContent}>
                  <div className={styles.tlTitle}>{title}</div>
                  <div className={styles.tlBody}>{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.testimonial}>
        <div className={styles.testimonialInner}>
          <div className={styles.tMark}>&ldquo;</div>
          <blockquote className={styles.tQuote}>
            I&apos;ve never seen anything quite like it. I loved how engaged
            people were in policy, the gamification of wonkiness. Fun and
            impactful.
          </blockquote>
          <div className={styles.tAttr}>— Emily, participant</div>
        </div>
      </section>

      <Footer />
    </>
  )
}
