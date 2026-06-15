import styles from './NodeDiagram.module.css'

export default function NodeDiagram() {
  return (
    <div className={styles.wrap}>
      <svg
        viewBox="0 0 480 420"
        width="100%"
        height="420"
        role="img"
        aria-labelledby="nd-title nd-desc"
        style={{ overflow: 'visible' }}
      >
        <title id="nd-title">Free Machine network diagram</title>
        <desc id="nd-desc">
          A node graph showing Free Machine at the center, connected to Policy,
          Technology, and Culture nodes, with Civic and Public satellite nodes.
        </desc>

        {/* Standard edges */}
        <line className={styles.edge} x1="240" y1="210" x2="120" y2="120" />
        <line className={styles.edge} x1="240" y1="210" x2="360" y2="120" />
        <line className={styles.edge} x1="240" y1="210" x2="240" y2="330" />
        <line className={styles.edge} x1="120" y1="120" x2="360" y2="120" />
        <line className={styles.edge} x1="120" y1="120" x2="100" y2="280" />
        <line className={styles.edge} x1="360" y1="120" x2="380" y2="300" />
        <line className={styles.edge} x1="100" y1="280" x2="240" y2="330" />
        <line className={styles.edge} x1="380" y1="300" x2="240" y2="330" />

        {/* Active edges */}
        <line className={`${styles.edge} ${styles.edgeActive}`} x1="240" y1="210" x2="100" y2="280" />
        <line className={`${styles.edge} ${styles.edgeActive}`} x1="240" y1="210" x2="380" y2="300" />

        {/* Policy node */}
        <g>
          <circle cx="120" cy="120" r="44" fill="var(--node-a)" stroke="var(--node-a)" strokeWidth="1" />
          <text className={styles.label} x="120" y="116" fill="white">Policy</text>
          <text className={styles.labelSub} x="120" y="130" fill="white">Advocacy</text>
        </g>

        {/* Technology node */}
        <g>
          <circle cx="360" cy="120" r="44" fill="var(--node-c)" stroke="var(--node-c)" strokeWidth="1" />
          <text className={styles.label} x="360" y="116" fill="white">Technology</text>
          <text className={styles.labelSub} x="360" y="130" fill="white">Emerging</text>
        </g>

        {/* Culture node */}
        <g>
          <circle cx="240" cy="330" r="44" fill="var(--node-b)" stroke="var(--node-b)" strokeWidth="1" />
          <text className={styles.label} x="240" y="326" fill="white">Culture</text>
          <text className={styles.labelSub} x="240" y="340" fill="white">Storytelling</text>
        </g>

        {/* Civic satellite */}
        <g>
          <circle cx="100" cy="280" r="30" fill="var(--bg-2)" stroke="rgba(28,28,28,0.2)" strokeWidth="1" />
          <text className={styles.labelNeutral} x="100" y="284">Civic</text>
        </g>

        {/* Public satellite */}
        <g>
          <circle cx="380" cy="300" r="30" fill="var(--bg-2)" stroke="rgba(28,28,28,0.2)" strokeWidth="1" />
          <text className={styles.labelNeutral} x="380" y="304">Public</text>
        </g>

        {/* Center — Free Machine */}
        <g>
          <circle cx="240" cy="210" r="56" fill="var(--ink)" stroke="var(--ink)" strokeWidth="1" />
          <text className={styles.labelCenter} x="240" y="205">Free</text>
          <text className={styles.labelCenter} x="240" y="221">Machine</text>
        </g>
      </svg>
    </div>
  )
}
