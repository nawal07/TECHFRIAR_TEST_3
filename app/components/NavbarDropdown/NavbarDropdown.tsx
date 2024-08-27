'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState,useEffect, useRef } from 'react';
import styles from './NavbarDropdown.module.css';

const NavbarDropdown = () => {
  const [active, setActive] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setActive(!active);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    // Navbar dropdown Menu 
    <div ref={dropdownRef} className={styles.hamburgerMenu}>
      {active ?? <div className={styles.overlay} onClick={toggleMenu}></div>}
      <Image
        className={styles.hamburgerIcon}
        src={active ? '/closeDropdownIcon.svg' : '/hamburgerIcon.svg'}
        alt="Hamburger Icon"
        onClick={toggleMenu}
        width={24}
        height={24}
      ></Image>
      {active && (
        <div className={styles.dropdownMenu}>
          <ul className={styles.dropdownMenuList}>
            <li className={styles.dropdownItem}>About Us</li>
            <li className={styles.dropdownItem}>Offers</li>
            <li className={styles.dropdownItem}>Corporate</li>
            <li className={styles.dropdownItem}>Personal</li>
            <li className={styles.dropdownItem}>Locations</li>
            <li className={styles.dropdownItem}>Contact us</li>
          </ul>
          <div className={styles.userLogin}>Log In/Sign Up</div>
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;
