import React from 'react';
import styles from './RentOrLeaseSection.module.css';
import Image from 'next/image';

const RentOrLeaseSection = () => {
  return (
    <div className={styles.main}>
      <div className={styles.rentLeaseSection}>
        <p className={styles.rentLeaseSectionTitle}>
          Rent/Lease in three easy steps
        </p>
        <div className={styles.rentLeaseSectionContent}>
          <div>
            <div className={styles.rentLeaseSectionContentTitle}>
              <p>01</p>
            </div>
            <div className={styles.rentLeaseSectionContentDescription}>
              <Image
                src="/rentLeaseSectionLocation.svg"
                alt=""
                width={56}
                height={56}
              />
              <p>
                Select the location. Browse through our available options and
                find the perfect car to suit your needs.
              </p>
            </div>
          </div>
          <div>
            <div className={styles.rentLeaseSectionContentTitle}>
              <p>02</p>
            </div>
            <div className={styles.rentLeaseSectionContentDescription}>
              <Image
                src="/rentLeaseSectionCalendar.svg"
                alt=""
                width={56}
                height={56}
              />
              <p>Choose your desired Pick-Up date and time.</p>
            </div>
          </div>
          <div>
            <div className={styles.rentLeaseSectionContentTitle}>
              <p>03</p>
            </div>
            <div className={styles.rentLeaseSectionContentDescription}>
              <Image
                src="/rentLeaseSectionCar.svg"
                alt=""
                width={56}
                height={56}
              />
              <p>
                Make payment and book the car. Select an option to either have
                the car delivered to your location or pick it up directly from
                us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentOrLeaseSection;
