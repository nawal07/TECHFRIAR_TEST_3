import React from 'react';
import styles from './PopularCarSection.module.css';
import Image from 'next/image';
import Link from 'next/link';

const carData = [
  {
    title: 'Mitsubishi Eclipse',
    description:
      'Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology, and driving confidence.',
    imageSrc: '/popularCar1.svg',
    price: 'AED 2700/Monthly',
    features: [
      { icon: '/popularCarSeats.svg', text: '6 people' },
      { icon: '/popularCarGear.svg', text: 'Automatic' },
      { icon: '/popularCarDoor.svg', text: '5 Doors' },
      { icon: '/popularCarAC.svg', text: 'AC' },
    ],
  },
  {
    title: 'Jac J7',
    description:
      'S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact & Whipping test.',
    imageSrc: '/popularCar2.svg',
    price: 'AED 2700/Monthly',
    features: [
      { icon: '/popularCarSeats.svg', text: '6 people' },
      { icon: '/popularCarGear.svg', text: 'Automatic' },
      { icon: '/popularCarDoor.svg', text: '5 Doors' },
      { icon: '/popularCarAC.svg', text: 'AC' },
    ],
  },
];

const PopularCarSection = () => {
  return (
    // Popular Car section 
    <div className={styles.popularCarSection}>
      <h1 className={styles.heading}>Most popular cars</h1>
      <div className={styles.popularCars}>
        {carData.map((car, index) => (
          <div key={index} className={styles.popularCar}>
            <Image
              className={styles.car}
              src={car.imageSrc}
              alt={car.title}
              width={360}
              height={290}
            />
            <div className={styles.popularCarDetails}>
              <div className={styles.carTle}>
                <p className={styles.carTitle}>{car.title}</p>
                <p className={styles.carDescription}>{car.description}</p>
              </div>
              <div className={styles.carDetails}>
                <div className={styles.carFeatures}>
                  {car.features.map((feature, i) => (
                    <div key={i} className={styles.feature}>
                      <Image
                        src={feature.icon}
                        alt={feature.text}
                        width={14}
                        height={14}
                      />
                      <p>{feature.text}</p>
                    </div>
                  ))}
                </div>
                <div className={styles.carbooknPrice}>
                  <p className={styles.carPrice}>{car.price}</p>
                  <Link className={styles.carBook} href="#">
                    <p>Book Now</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCarSection;
