import React from 'react';
import styles from './RentOrLeaseSection.module.css';
import Image from 'next/image';

const steps = [
  {
    number: '01',
    imageSrc: '/rentLeaseSectionLocation.svg',
    description: 'Select the location. Browse through our available options and find the perfect car to suit your needs.',
  },
  {
    number: '02',
    imageSrc: '/rentLeaseSectionCalendar.svg',
    description: 'Choose your desired Pick-Up date and time.',
  },
  {
    number: '03',
    imageSrc: '/rentLeaseSectionCar.svg',
    description: 'Make payment and book the car. Select an option to either have the car delivered to your location or pick it up directly from us.',
  },
];

const RentOrLeaseSection = () => {
  return (
    <div className={styles.main}>
      <div className={styles.rentLeaseSection}>
        <p className={styles.rentLeaseSectionTitle}>Rent/Lease in three easy steps</p>
        <div className={styles.rentLeaseSectionContent}>
          {steps.map((step, index) => (
            <div key={index}>
              <div className={styles.rentLeaseSectionContentTitle}>
                <p>{step.number}</p>
              </div>
              <div className={styles.rentLeaseSectionContentDescription}>
                <Image src={step.imageSrc} alt="" width={56} height={56} />
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RentOrLeaseSection;
