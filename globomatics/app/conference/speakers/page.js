import Link from "next/link"
import styles from "./speaker.module.css"
export default function Page() {
    return (
      <>
      <h1>
          Welcome to speakers
      </h1>
      <p className={styles.speaker}>Speakers Page</p>
        <h2>
      <Link href='/conference'>back to conference</Link>
      </h2>
      </>
    )
  }
