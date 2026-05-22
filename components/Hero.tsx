
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="heroContent"
      >
        <span className="subtitle">NOVAIR BEAUTY</span>
        <h1>FEEL THE NEW AIR OF BEAUTY</h1>
        <p>
          מותג טיפוח יוקרתי עם חוויית קנייה מודרנית ונקייה.
        </p>

        <div className="heroButtons">
          <button className="primaryBtn">לקנייה עכשיו</button>
          <button className="secondaryBtn">הקולקציה שלנו</button>
        </div>
      </motion.div>
    </section>
  )
}
