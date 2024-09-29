import styles from "./SampleOMs.module.css";
import Image from "next/image";

const sampleOMs = [
  {
    title: "Crowder Plaza",
    type: "Retail OM",
    description: "Strip centers, street retail, vehicle related, and more",
    image: "/images/crowderPlaza.png",
  },
  {
    title: "Riverbend Apartments",
    type: "Multi-Family OM",
    description: "Garden, low-rise, mid-rise, high-rise",
    image: "/images/riverbend-apartments.png",
  },
  {
    title: "Southfield Office",
    type: "Office OM",
    description: "All classes of office buildings, loft/creative, medical",
    image: "/images/southfield-office.png",
  },
];

const SampleOMs = () => {
  return (
    <section className={styles.sampleOMs}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.container}>
        <h2>Sample OMs created with our platform</h2>
        <div className={styles.grid}>
          {sampleOMs.map((om) => (
            <div key={om.title} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={om.image}
                  alt={om.title}
                  layout="fill"
                  objectFit="cover"
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3>{om.title}</h3>
                <p className={styles.type}>{om.type}</p>
                <p className={styles.description}>{om.description}</p>
                <div className={styles.cta}>
                  <button className={styles.viewSampleButton}>
                    View Sample
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleOMs;
