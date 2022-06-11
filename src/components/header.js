import * as React from "react"
import { Link } from "gatsby"
import { Button } from "./ui"
import { MdAutoGraph } from "react-icons/md"
import * as styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.flexContainer}>
        <Link to="/" className={styles.logoContainer}>
          <span className={styles.logo}>Voicetrainer</span>
          <MdAutoGraph className={styles.icon} />
        </Link>
        <div className={styles.cta}>
          <Button to="mailto:operations@voicetrainer.io">Get in Touch!</Button>
        </div>
      </div>
    </header>
  )
}
