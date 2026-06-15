import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ParticleCanvas from '@/components/ParticleCanvas'
import NodeDiagram from '@/components/NodeDiagram'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Nav />
      <ParticleCanvas />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.kicker}>Civic Technology &amp; Culture · Los Angeles</div>
          <h1 className={styles.headline}>
            Who tells the story of our <em>collective</em> future?
          </h1>
          <p className={styles.heroBody}>
            Our images of the future are largely determined by private-sector
            actors who sell us a vision designed to benefit their shareholders.
            Free Machine was built to change that.
          </p>
          <a
            href="https://www.nytimes.com/2019/11/10/opinion/artificial-intelligence-facebook-google.html"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCta}
          >
            Before the AI boom: our 2019 op-ed in the Times
          </a>
        </div>
        <div className={styles.heroRight}>
          <NodeDiagram />
        </div>
      </section>

      {/* Pillars */}
      <section className={styles.pillars}>
        <div className={styles.pillarsHeading}>How we worked</div>
        <div className={styles.pillarsGrid}>
          <div className={styles.pillarCard}>
            <div className={`${styles.pillarDot} ${styles.dotA}`} />
            <div className={styles.pillarTitle}>Educate</div>
            <p className={styles.pillarBody}>
              The public about how technology and technology policy impacts their
              lives right now — and major challenges and opportunities we&apos;ll
              face in the near future.
            </p>
          </div>
          <div className={styles.pillarCard}>
            <div className={`${styles.pillarDot} ${styles.dotB}`} />
            <div className={styles.pillarTitle}>Engage</div>
            <p className={styles.pillarBody}>
              Through immersive storytelling that invites emotional and
              imaginative investment in what could be. Experiences designed to
              spark participation and agency.
            </p>
          </div>
          <div className={styles.pillarCard}>
            <div className={`${styles.pillarDot} ${styles.dotC}`} />
            <div className={styles.pillarTitle}>Organize</div>
            <p className={styles.pillarBody}>
              The public through partnerships and connections to substantive,
              relevant, and innovative policy advocacy efforts that drive
              real change.
            </p>
          </div>
        </div>
      </section>

      {/* Future Perfect */}
      <section className={styles.program}>
        <div className={styles.programInner}>
          <div>
            <div className={styles.programKicker}>Flagship Program</div>
            <h2 className={styles.programTitle}>Future Perfect</h2>
            <p className={styles.programBody}>
              A live, group game in which participants join an imagined society
              called Tomorrowland. As neighborhood council members, they navigate
              trends of automation and climate change — working together to guide
              their society towards safety and equality.
            </p>
            <p className={styles.programBody}>
              Presented with predicaments, participants debate and vote between
              two policy options. The winning option is enacted, we jump forward
              in time, and face a new situation based on their choices.
            </p>
            <div className={styles.programQuote}>
              <p className={styles.quoteText}>
                &ldquo;I&apos;ve never seen anything quite like it. I loved how
                engaged people were in policy, the gamification of wonkiness.
                Fun and impactful.&rdquo;
              </p>
              <div className={styles.quoteAttr}>— Emily, participant</div>
            </div>
          </div>
          <div>
            <div className={styles.futuresGrid}>
              <div className={styles.futureCell}>
                <div className={styles.futureYear}>Year 0</div>
                <div className={styles.futureText}>
                  Participants join Tomorrowland as neighborhood council members
                  facing real-world policy dilemmas around automation and climate.
                </div>
              </div>
              <div className={styles.futureCell}>
                <div className={styles.futureYear}>Year +5</div>
                <div className={styles.futureText}>
                  Trends intensify. The group debates and votes on two divergent
                  policy paths. Choices have consequences.
                </div>
              </div>
              <div className={styles.futureCell}>
                <div className={styles.futureYear}>Year +10</div>
                <div className={styles.futureText}>
                  Earlier decisions ripple outward. New predicaments demand new
                  coalitions and harder choices.
                </div>
              </div>
              <div className={styles.futureCell}>
                <div className={styles.futureYear}>Year +20</div>
                <div className={styles.futureText}>
                  The group&apos;s cumulative decisions guide Tomorrowland to one
                  of four potential futures — for better or worse.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press */}
      <section className={styles.press}>
        <div className={styles.pressKicker}>In the press</div>
        <div className={styles.pressList}>
          <a
            href="https://www.nytimes.com/2019/11/10/opinion/artificial-intelligence-facebook-google.html"
            className={styles.pressRow}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.pressSource}>The New York Times</div>
            <div className={styles.pressHeadline}>
              Free Machine&apos;s Public Option for AI — Americans don&apos;t
              have to be beholden to the tech Goliaths.
            </div>
            <div className={styles.pressArrow}>↗</div>
          </a>
          <a
            href="https://news.asu.edu/20211118-engaging-public-science-and-technology-studies"
            className={styles.pressRow}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.pressSource}>ASU · 4S Making &amp; Doing</div>
            <div className={styles.pressHeadline}>
              Future Perfect awarded special commendation — bridging theory and
              practice in science &amp; technology studies.
            </div>
            <div className={styles.pressArrow}>↗</div>
          </a>
          <a
            href="https://4sonline.org/2022_multiple__winners.php"
            className={styles.pressRow}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.pressSource}>4S Honorable Mention</div>
            <div className={styles.pressHeadline}>
              Do Graphics Processing Units Have Politics? — Ben Gansky&apos;s
              multi-media performance lecture recognized.
            </div>
            <div className={styles.pressArrow}>↗</div>
          </a>
        </div>
      </section>

      {/* About teaser */}
      <section className={styles.about}>
        <div className={styles.aboutInner}>
          <h2 className={styles.aboutHeading}>
            We created experiences that{' '}
            <strong>challenged the public</strong> to collectively imagine
            possible futures.
          </h2>
          <p className={styles.aboutBody}>
            Free Machine was a non-profit organization that developed creative
            programs to shape a high-tech future that is equitable, abundant,
            and sustainable — an LA-based collective of artists, designers,
            urban planners, and policy wonks.
          </p>
          <p className={styles.aboutBody}>
            The relationship between policy and creative practice was paramount
            to our approach: storytelling drives culture, and culture drives
            policy. Our work lived at this nexus of tech, policy, and culture.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
