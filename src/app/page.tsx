import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import PropertyTypes from "@/components/PropertyTypes/PropertyTypes";
import SampleOMs from "@/components/SampleOMs/SampleOMs";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <PropertyTypes />
      <SampleOMs />
    </main>
  );
}
