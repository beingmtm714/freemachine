import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ParticleCanvas from '@/components/ParticleCanvas'
import styles from './page.module.css'

export const metadata = {
  title: 'Press — Free Machine',
}

const pressItems = [
  {
    source: 'The New York Times',
    headline: 'Free Machine\'s Public Option for AI',
    dek: 'Americans don\'t have to be beholden to the tech Goliaths to get the benefits of artificial intelligence. An alternative possibility is for government to provide the infrastructure needed for a technological future — through a public option for artificial intelligence.',
    href: 'https://www.nytimes.com/2019/11/10/opinion/artificial-intelligence-facebook-google.html',
  },
  {
    source: 'ASU · 4S Making & Doing',
    headline: 'Future Perfect awarded special commendation',
    dek: 'Bridging theory and practice: Future Perfect receives special commendation from the Society for the Social Study of Sciences "Making & Doing" track.',
    href: 'https://news.asu.edu/20211118-engaging-public-science-and-technology-studies',
  },
  {
    source: '4S Honorable Mention',
    headline: 'Do Graphics Processing Units Have Politics?',
    dek: "FM's Gansky receives honorable mention for the multi-media performance lecture from the 4S's \"Making & Doing\" track.",
    href: 'https://4sonline.org/2022_multiple__winners.php',
  },
]

export default function Press() {
  return (
    <>
      <Nav />
      <ParticleCanvas />

      <section className={styles.hero}>
        <div className={styles.kicker}>Press</div>
        <h1 className={styles.headline}>Free Machine in the press</h1>
      </section>

      <section className={styles.list}>
        {pressItems.map(({ source, headline, dek, href }) => (
          <a
            key={href}
            href={href}
            className={styles.row}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.source}>{source}</div>
            <div className={styles.content}>
              <div className={styles.rowHeadline}>{headline}</div>
              <div className={styles.dek}>{dek}</div>
            </div>
            <div className={styles.arrow}>↗</div>
          </a>
        ))}
      </section>

      <Footer />
    </>
  )
}
