import Link from 'next/link'
import Image from 'next/image'
import OurStoryPic from "./../images/home-image-1.jpg"
import styles from "./home.module.css"

export default function Page() {
    return (
      <>
      <div className= {styles.bgWrap}>
        <Image
        src= {OurStoryPic}
        alt ="Our Story Pic"
        quality={100}/>
      </div>
      <h1>
          Welcome to Home page
      </h1>
      </>
    )
  }
