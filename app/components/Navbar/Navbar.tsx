import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import NavbarDropdown from '../NavbarDropdown/NavbarDropdown';

const Navbar = () => {
  return (
    // Navbar Section 
    <div className={styles.main}>
      <div className={styles.navbarSocialMediaIcons}>
        <Link href="https://www.facebook.com">
          <Image
            src="/navbarFacebook.svg"
            alt="Facebook"
            width={8.8}
            height={15.5}
          />
        </Link>

        <Link href="https://www.instagram.com">
          <Image
            src="/navbarInstagram.svg"
            alt="Instagram"
            width={14}
            height={14}
          />
        </Link>

        <Link href="https://www.twitter.com">
          <Image
            src="/navbarTwitter.svg"
            alt="Twitter"
            width={15.2}
            height={14.1}
          />
        </Link>

        <Link href="https://www.linkedin.com">
          <Image
            src="/navbarLinkedin.svg"
            alt="LinkedIn"
            width={15}
            height={15}
          />
        </Link>
      </div>
      <div className={styles.navbarContents}>
        <div className={styles.navbarCompany}>
          <Image
            className={styles.navbarLogoName}
            src="/navbarLogoName.svg"
            alt="NavbarLogoName"
            width={291}
            height={54}
          />
          <Image
            className={styles.navbarLogoIcon}
            src="/navbarLogoIcon.svg"
            alt="NavbarLogoIcon"
            width={45}
            height={52}
          />
        </div>
         {/* Navbar Menu  */}
        <NavbarMenu />
        {/* Navbar Dropdown  */}
        <NavbarDropdown />
      </div>
      <div className={styles.navbarCatch}>
        <p className={styles.navbarCatchText}>
          Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand
          Sales Counters | All Rates inclusive of VAT. T&C’s apply | Follow us
          on Social Media for New Offers
        </p>
      </div>
    </div>
  );
};

export default Navbar;
