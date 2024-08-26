import React from 'react';
import Image from 'next/image';
import styles from './LocationSection.module.css';
import { Open_Sans } from 'next/font/google';

const sans = Open_Sans({
  weight: ['400'],
  subsets: ['latin'],
});

const LocationSection = () => {
  return (
    <div id="location" className={styles.locationSection}>
      <h2>Locations</h2>
      <div className={styles.differentLocations}>
        <div className={styles.location}>
          <Image className={styles.image} src="/locationSectionIcon.svg" alt="" width={22} height={28} />
          <p className={sans.className}>Dubai</p>
        </div>
        <div className={styles.bar}></div>
        <div className={styles.location}>
          <Image className={styles.image} src="/locationSectionIcon.svg" alt="" width={22} height={28} />
          <p className={sans.className}>Abu Dhabi</p>
        </div>
        <div className={styles.bar}></div>
        <div className={styles.location}>
          <Image className={styles.image} src="/locationSectionIcon.svg" alt="" width={22} height={28} />
          <p className={sans.className}>Sharjah</p>
        </div>
        <div className={styles.bar}></div>
        <div className={styles.location}>
          <Image className={styles.image} src="/locationSectionIcon.svg" alt="" width={22} height={28} />
          <p className={sans.className}>Fujairah</p>
        </div>
        <div className={styles.bar}></div>
        <div className={styles.location}>
          <Image className={styles.image} src="/locationSectionIcon.svg" alt="" width={22} height={28} />
          <p className={sans.className}>Ras Al Khaimah</p>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
