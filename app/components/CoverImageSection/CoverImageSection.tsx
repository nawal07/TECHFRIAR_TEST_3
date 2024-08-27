'use client';
import React, { useState, useEffect } from 'react';
import styles from './CoverImageSection.module.css';
import Link from 'next/link';

const CoverImageSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/coverImageSectionCar1.svg',
    '/coverImageSectionCar2.jpg',
    '/coverImageSectionCar3.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    // Cover Image section 
    <div
      id="offer"
      className={styles.coverImageSection}
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className={styles.coverImageText}>
        <div className={styles.coverImageText1}>
          <p>Receive guaranteed</p>
          <Link className={styles.giftVoucher} href={'#'}><p >GIFT VOUCHER</p></Link>
        </div>
        <p>on a monthly hire or lease</p>
      </div>
      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              index === currentImage ? styles.active : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CoverImageSection;
