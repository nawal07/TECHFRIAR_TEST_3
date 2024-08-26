import React from 'react';
import styles from './PopularCarSection.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PopularCarSection = () => {
  return (
    <div className={styles.popularCarSection}>
      <h1 className={styles.heading}>Most popular cars</h1>
      <div className={styles.popularCars}>
        <div className={styles.popularCar}>
          <Image
            className={styles.car}
            src={'/popularCar1.svg'}
            alt="Mitsubishi Eclipse"
            width={360}
            height={290}
          />
          <div className={styles.popularCarDetails}>
            <div className={styles.carTle}>
              <p className={styles.carTitle}>Mitsubishi Eclipse</p>
              <p className={styles.carDescription}>
                Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV
                mobility with signature Mitsubishi styling, technology and
                driving confidence.
              </p>
            </div>
            <div className={styles.carDetails}>
              <div className={styles.carFeatures}>
                <div className={styles.feature}>
                  <Image
                    src={'/popularCarSeats.svg'}
                    alt="Seats"
                    width={14}
                    height={14}
                  />
                  <p>6 people</p>
                </div>
                <div className={styles.feature}>
                  <Image
                    src={'/popularCarGear.svg'}
                    alt="Gear"
                    width={14}
                    height={14}
                  />
                  <p>Automatic</p>
                </div>
                <div className={styles.feature}>
                  <Image
                    src={'/popularCarDoor.svg'}
                    alt="Door"
                    width={14}
                    height={14}
                  />
                  <p>5 Doors</p>
                </div>
                <div className={styles.feature}>
                  <Image
                    src={'/popularCarAC.svg'}
                    alt="AC"
                    width={14}
                    height={14}
                  />
                  <p>AC</p>
                </div>
              </div>
              <div className={styles.carbooknPrice}>
                <p className={styles.carPrice}>AED 2700/Monthly</p>
                <Link className={styles.carBook} href={'#'}>
                  <p>Book Now</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.popularCar}>
          <Image
            className={styles.car}
            src={'/popularCar2.svg'}
            alt="Jac J7"
            width={360}
            height={290}
          />
          <div className={styles.popularCarDetails}>
            <div className={styles.carTle}>
              <p className={styles.carTitle}>Jac J7</p>
              <p className={styles.carDescription}>
                S3 Plus has been rated Five-Star in C-NCAP including front
                impact, side impact, frontal side impact & Whipping test.
              </p>
            </div>
            <div className={styles.carDetails}>
              <div className={styles.carFeatures}>
                <div className={styles.feature}>
                  <Image
                    src={'/popularCarSeats.svg'}
                    alt="Seats"
                    width={14}
                    height={14}
                  />
                  <p>6 people</p>
                </div>
                <div className={styles.feature}>
                  <Image
                    src={'/popularCarGear.svg'}
                    alt="Gear"
                    width={14}
                    height={14}
                  />
                  <p>Automatic</p>
                </div>
                <div className={styles.feature}>
                  <Image
                    src={'/popularCarDoor.svg'}
                    alt="Door"
                    width={14}
                    height={14}
                  />
                  <p>5 Doors</p>
                </div>
                <div className={styles.feature}>
                  <Image
                    src={'/popularCarAC.svg'}
                    alt="AC"
                    width={14}
                    height={14}
                  />
                  <p>AC</p>
                </div>
              </div>
              <div className={styles.carbooknPrice}>
                <p className={styles.carPrice}>AED 2700/Monthly</p>
                <Link className={styles.carBook} href={'#'}>
                  <p>Book Now</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCarSection;
