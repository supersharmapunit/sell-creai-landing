import styles from "./PropertyTypes.module.css";
import { Store, Home, Building2, Factory, Hotel, Mountain } from "lucide-react";

const propertyTypes = [
  { name: "Retail", icon: Store },
  { name: "Multi-family", icon: Home },
  { name: "Office", icon: Building2 },
  { name: "Industrial", icon: Factory },
  { name: "Hotel", icon: Hotel },
  { name: "Land", icon: Mountain },
];

const PropertyTypes = () => {
  return (
    <section className={styles.propertyTypes}>
      <h2 className={styles.title}>
        Create OMs and Ads For Various Real Estate Property Types
      </h2>
      <div className={styles.grid}>
        {propertyTypes.map((type) => (
          <div key={type.name} className={styles.type}>
            <div className={styles.iconWrapper}>
              <type.icon size={36} className={styles.icon} />
            </div>
            <p className={styles.typeName}>{type.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyTypes;
