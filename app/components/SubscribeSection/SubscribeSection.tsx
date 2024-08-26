'use client';

import React, { useState, ChangeEvent, MouseEvent } from 'react';
import styles from './SubscribeSection.module.css';
import Image from 'next/image';
import Link from 'next/link';

const SubscribeSection: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');

  const validateEmail = (value: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(value)) {
      setEmailError('');
      return true;
    } else {
      setEmailError('Please enter a valid email address');
      return false;
    }
  };

  const validateName = (value: string): boolean => {
    if (value.trim() === '') {
      setNameError('Name is required');
      return false;
    } else {
      setNameError('');
      return true;
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
    validateName(value);
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const isEmailValid = validateEmail(email);
    const isNameValid = validateName(name);

    if (isEmailValid && isNameValid) {
      console.log('Form submitted successfully');
      alert('Form submitted successfully!');
      setEmail(''); // Clear the email field
      setName(''); // Clear the name field
    } else {
      console.log('Form submission failed due to validation errors');
    }
  };

  return (
    <div className={styles.subscribeSection}>
      <div className={styles.subscribeForm}>
        <p className={styles.subscribeTitle}>
          Subscribe here for exclusive offers and updates!
        </p>
        <div className={styles.subscribeFormLink}>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
            {nameError && <p className={styles.error}>{nameError}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />

            {emailError && <p className={styles.error}>{emailError}</p>}
          </div>
        </div>
        <p className={styles.subscribeFormCatch}>
          Dont miss out! Enter your email and your name, then hit subscribe to
          unlock a world of special offers and details.
        </p>
        <p className={styles.subscribeFormCatchResponsive}>
          Please select the ways you would like to hear from Diamondlease, and
          confirm that you’re happy for us to store your data in line with our
          Privacy Policy.
        </p>

        <button onClick={handleSubmit}>Subscribe</button>
      </div>
      <div className={styles.subscribeLink}>
        <Image
          className={styles.mobile}
          src={'/subscribeSectionPhone.svg'}
          alt="Mobile Image"
          width={260}
          height={450}
        />
        <div className={styles.subscribeLinkContent}>
          <p>Enter your number and receive a direct link to download the app</p>
          <input type="text" placeholder="Enter Phone Number" />
          <button>Get the Link</button>
          <p className={styles.getLinks}>Get it on</p>
          <div className={styles.downloadLinks}>
            <Link href={'https://www.apple.com/app-store/'}>
              <Image
                className={styles.downloadLink}
                src={'/subscribeSectionAppstore.svg'}
                alt="Appstore Link"
                width={103}
                height={30}
              />
            </Link>
            <Link href={'https://play.google.com/store'}>
              <Image
                className={styles.downloadLink}
                src={'/subscribeSectionPlaystore.svg'}
                alt="Playstore Link"
                width={103}
                height={30}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.subscribeLinkResponsive}>
        <div className={styles.subscribeLinkResponsiveHead}>
          <Image
            className={styles.mobile}
            src={'/subscribeSectionPhone.svg'}
            alt="Mobile Image"
            width={216}
            height={335}
          />
          <div className={styles.subscribeLinkResponsiveHeadContent}>
            <div className={styles.subscribeLinkResponsiveHeadLinks}>
              <p className="get-links">Get it on</p>
              <div className={styles.subscribeLinkResponsiveHeadLink}>
                <Link href={'https://www.apple.com/app-store/'}>
                  <Image
                    className={styles.downloadLink}
                    src={'/subscribeSectionAppstore.svg'}
                    alt="Appstore Link"
                    width={103}
                    height={30}
                  />
                </Link>
                <Link href={'https://play.google.com/store'}>
                  <Image
                    className={styles.downloadLink}
                    src={'/subscribeSectionPlaystore.svg'}
                    alt="Playstore Link"
                    width={103}
                    height={30}
                  />
                </Link>
              </div>
            </div>
            <p>
              Enter your number and receive a direct link to download the app
            </p>
          </div>
        </div>
        <div className={styles.getLinksResponsive}>
          <input type="text" placeholder="Enter Phone Number" />
          <button>Get the Link</button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
