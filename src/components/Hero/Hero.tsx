import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Sell CRE Faster with OMs & Ads created in minutes</h1>
        <p>
          Create beautiful Commercial Real Estate Offering Memorandums, Flyers &
          Ads in minutes with our AI powered platform
        </p>
        <div className={styles.cta}>
          <button className={styles.tryFreeButton}>Try for free</button>
          <button className={styles.watchDemoButton}>Watch Demo</button>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/hero-left-section.png"
          alt="Hero Image"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
