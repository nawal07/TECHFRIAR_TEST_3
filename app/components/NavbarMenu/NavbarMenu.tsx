import React from 'react';
import Link from 'next/link';
import { FaBell } from 'react-icons/fa';
import styles from './NavbarMenu.module.css';

const NavbarMenu = () => {
  const userName = 'John Doe';
  const notifications = 1;
  return (
    <>
    {/* Navbar Menu  */}
      <div className={styles.navbarMenuItems}>
        <Link className={styles.navbarMenuItemsList} href="#">
          About
        </Link>
        <Link className={styles.navbarMenuItemsList} href="#">
          Offers
        </Link>
        <Link className={styles.navbarMenuItemsList} href="#">
          Corporate
        </Link>
        <Link className={styles.navbarMenuItemsList} href="#">
          Personal
        </Link>
        <Link className={styles.navbarMenuItemsList} href="#">
          Location
        </Link>
        <Link className={styles.navbarMenuItemsList} href="#">
          Contact Us
        </Link>
        <div className={styles.navbarUserNotification}>
          <Link href="" className={styles.navbarUser}>
            <div className={styles.navbarNotification}>
              <div className={styles.navbarNotificationIcon}>
                <FaBell className={styles.navbarBellIcon} />
                {notifications > 0 && (
                  <span className={styles.navbarNotificationCount}>
                    {notifications}
                  </span>
                )}
              </div>
            </div>
          </Link>
          <Link href="" className={styles.navbarUser}>
            <div className={styles.navbarUserProfile}>
              <div className={styles.navbarUserIcon}>
                <span className={styles.navbarUserInitial}>
                  {userName.at(0)}
                </span>
              </div>
              <span className={styles.navbarUserName}>{userName}</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarMenu;
