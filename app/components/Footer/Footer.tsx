import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div id='#about' className={styles.footerSection}>
      <div className={styles.footerSectionMain}>
        <div className={styles.footerSectionOne}>
          <Image
            src="/footerSectionLlogoFooter.svg"
            alt="Company Logo"
            width={60}
            height={60}
          />
          <div>
            <p>Member of the</p>
            <p>Al Habtoor Group</p>
          </div>
        </div>
        <div className={styles.footerSectionTwo}>
          <div>
            <div>
              <p>Home</p>
              <p>About Us</p>
              <p>Services</p>
            </div>
            <div>
              <p>Offers</p>
              <p>Locations</p>
              <p>Contact Us</p>
            </div>

            <div>
              <p>FAQ</p>
              <p>Privacy Policy</p>
              <p>Service Request</p>
            </div>
            <div>
              <p>Career</p>
              <p>Terms & Conditions</p>
              <p></p>
            </div>
          </div>
          <p>Al Habtoor Companies</p>
          <div>
            <p>Hospitality</p>
            <p>Real Estate</p>
            <p>Education</p>
            <p>Publishing</p>
            <p>Automotive</p>
            <p>Vehicle Leasing</p>
          </div>
        </div>
        <div className={styles.footerSectionThree}>
          <p>FOLLOW US ON</p>
          <div>
            <Link href="https://www.facebook.com">
              <Image
                src="/footerSectionFacebook.svg"
                alt="Facebook"
                width={16}
                height={16}
              />
            </Link>
            <Link href="https://www.twitter.com">
              <Image
                src="/footerSectionTwitter.svg"
                alt="Twitter"
                width={16}
                height={16}
              />
            </Link>
            <Link href="https://www.instagram.com">
              <Image
                src="/footerSectionInstagram.svg"
                alt="Instagram"
                width={16}
                height={16}
              />
            </Link>
            <Link href="https://www.linkedin.com">
              <Image
                src="/footerSectionLinkedin.svg"
                alt="Linkedin"
                width={16}
                height={16}
              />
            </Link>
            <Link href="https://www.youtube.com">
              <Image
                src="/footerSectionYoutube.svg"
                alt="Youtube"
                width={16}
                height={16}
              />
            </Link>
          </div>
          <div className={styles.secureSign}>
            <Image
              className={styles.globalSign}
              src="/footerSectionSiteLock.svg"
              alt="Site Lock"
              width={68}
              height={38}
            />
            <Image
              className={styles.globalSign}
              src="/footerSectionGlobalSign.svg"
              alt="Global Sign"
              width={64}
              height={24}
            />
          </div>
        </div>
      </div>

      <div className={styles.footerSectionResponsive}>
        <div id="aboutus" className={styles.footerSectionResponsiveOne}>
          <Image
          className={styles.footerSectionBlackLogo}
            src="/footerSectionBlackLogo.svg"
            alt="Company Logo "
            width={56}
            height={46}
          />

          <div className={styles.iconPack}>
            <Link href="https://www.facebook.com">
              <Image
                className={styles.icons}
                src="/footerSectionBlackFacebook.svg"
                alt=""
                width={16}
                height={16}
              />
            </Link>
            <Link href="https://www.twitter.com">
              <Image
                className={styles.icons}
                src="/footerSectionBlackTwitter.svg"
                alt=""
                width={16}
                height={16}
              />
            </Link>
            <Link href="https://www.instagram.com">
              <Image
                className={styles.icons}
                src="/footerSectionBlackInstagram.svg"
                alt=""
                width={16}
                height={16}
              />
            </Link>
            <Link href="https://www.linkedin.com">
              <Image
                className={styles.icons}
                src="/footerSectionBlackLinkedin.svg"
                alt=""
                width={16}
                height={16}
              />
            </Link>
            <Link href="https://www.youtube.com">
              <Image
                className={styles.icons}
                src="/footerSectionBlackYoutube.svg"
                alt=""
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
        <div className={styles.footerSectionTwo}>
          <div>
            <p>Home</p>
            <p>Offers</p>
            <p>Career</p>
            <p>About Us</p>
            <p>Locations</p>
          </div>
          <div>
            <p>FAQ</p>
            <p>Terms & Conditions</p>
            <p>Service Request</p>
          </div>
          <div>
            <p>Privacy Policy</p>
            <p>Services</p>
            <p>Contact Us</p>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>

      <div className={styles.footerSectionFour}>
        <p>© 2018 Car rental LLC - All Rights Reserved.</p>
      </div>
      <div className={styles.footerSectionFourResponsive}>
        <p>Al Habtoor Companies</p>

        <div>
          <p>Hospitality</p>
          <p>Real Estate</p>
          <p>Publishing</p>
        </div>
        <div>
          <p>Automotive</p>
          <p>Vehicle Leasing</p>
        </div>
        <Image
          className={styles.globalSign}
          src="/footerSectionGlobalSign.svg"
          alt="Global Sign"
          width={64}
          height={24}
        />
        <span className={styles.border}></span>
        <p>© 2018 Car rental LLC - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
