'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './BookingSection.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';
import Link from 'next/link';

const BookingSection = () => {
  const [fromDate, setFromDate] = useState<Date | null>(new Date());
  const [toDate, setToDate] = useState<Date | null>(new Date());
  const [fromDate2, setFromDate2] = useState<Date | null>(new Date());
  const [toDate2, setToDate2] = useState<Date | null>(new Date());
  const [pickup, setPickup] = useState(true);
  const [dropOff, setDropOff] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.bookingMode}>
          <p
            onClick={() => {
              setPickup(true);
            }}
            className={`${pickup && styles.clicked}`}
          >
            Same as Pick-Up
          </p>
          <p
            onClick={() => {
              setPickup(false);
            }}
            className={`${!pickup && styles.clicked}`}
          >
            Different Drop-Off
          </p>
          <select className={styles.vehicleType} name="vehicle type">
            <option value="" hidden>
              Select vehicle type
            </option>
            <option value="1">Car</option>
            <option value="2">Bike</option>
          </select>
        </div>
        <div className={styles.bookingDetails}>
          {/* Same Location dropdown  */}
          <div className={styles.locationDropdown}>
            <div>
              <Image
                src={'/bookingSectionLocation.svg'}
                alt="Location"
                width={9}
                height={12}
                className={styles.locationIcon}
              ></Image>
              <select className="location-select">
                <option value="al-quoz">Al Quoz</option>
                <option value="downtown">Downtown</option>
                <option value="jumeirah">Jumeirah</option>
              </select>
            </div>
            <Image
              src={'/bookingSectionDropdownIcon.svg'}
              alt="Down Arrow"
              width={7}
              height={5}
              className={styles.dropdownIcon}
            ></Image>
          </div>

          {/* Different Location dropdown  */}
          <div
            className={`${styles.locationDropdown} ${
              pickup && styles.diffDropdown
            }`}
          >
            <div>
              <Image
                src={'/bookingSectionLocation.svg'}
                alt="Location"
                width={9}
                height={12}
                className={styles.locationIcon}
              ></Image>
              <select className="location-select">
                <option value="downtown">Downtown</option>
                <option value="jumeirah">Jumeirah</option>
                <option value="al-quoz">Al Quoz</option>
              </select>
            </div>
            <Image
              src={'/bookingSectionDropdownIcon.svg'}
              alt="Down Arrow"
              width={7}
              height={5}
              className={styles.dropdownIcon}
            ></Image>
          </div>

          {/* From Date  */}

          <div className={styles.calendarDropdown}>
            <Image
              src={'/bookingSectionCalendarIcon.svg'}
              alt="Calendar"
              width={10}
              height={10}
            ></Image>
            <DatePicker
              selected={fromDate}
              onChange={(date: Date | null) => setFromDate(date)}
              showTimeSelect
              dateFormat="dd/MM/yyyy h:mm aa"
              className={styles.CalendarInput}
            />
          </div>

          {/* To Date  */}

          <div className={styles.calendarDropdown}>
            <Image
              src={'/bookingSectionCalendarIcon.svg'}
              alt="Calendar"
              width={10}
              height={10}
            ></Image>
            <DatePicker
              selected={toDate}
              onChange={(date: Date | null) => setToDate(date)}
              showTimeSelect
              dateFormat="dd/MM/yyyy h:mm aa"
              className={styles.CalendarInput}
            />
          </div>

          {/* Search Icon  */}
          <div className={styles.searchIcon}>
            <div className={styles.bookSeperator}>
              <Image
                src={'/bookingSectionSearchIcon.svg'}
                width={24}
                height={24}
                alt=""
              ></Image>
            </div>
          </div>

          {/* Quick book Option  */}
          <div className={styles.quickBookSection}>
            <p>Quick Book</p>
          </div>
        </div>

        {/* Download links  */}
        <div className={styles.downloadLinkSection}>
          <p>Download our App for easy accessibility anytime, anywhere!</p>
          <div className={styles.downloadLinks}>
            <Link href={'https://www.apple.com/app-store/'}>
              <Image
                src={'/bookingSectionAppleLogo.svg'}
                width={110}
                height={32}
                alt="Apple Logo"
                className={styles.downloadLinks}
              />
            </Link>
            <Link href={'https://play.google.com/store'}>
              <Image
                src={'/bookingSectionGoogleplayLogo.svg'}
                width={110}
                height={32}
                alt="Googleplay Logo"
                className={styles.downloadLinks}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bookQuickbookCar}>
        <div className={styles.bookQuickbookCarOptions}>
          <button
            onClick={() => {
              setShowDropdown(!showDropdown);
            }}
            className={styles.bookCar}
          >
            Book a Car
          </button>
          <button>Quick Book</button>
        </div>
        <div
          id="bookCarMenu"
          className={`${styles.bookQuickbookCarDropdownMenu} ${
            showDropdown && styles.showDropDown
          }`}
          ref={dropdownRef}
        >
          <div className={styles.bookCarOptions}>
            <p
              onClick={() => {
                setDropOff(true);
              }}
              className={`${dropOff && styles.click}`}
            >
              Same as Pick-Up
            </p>
            <p
              onClick={() => {
                setDropOff(false);
              }}
              className={`${!dropOff && styles.click}`}
            >
              Different Drop-Off
            </p>
            <select className={styles.vehicleType} name="vehicle type">
              <option value="" hidden>
                vehicle type
              </option>
              <option value="1">Car</option>
              <option value="2">Bike</option>
            </select>
          </div>
          <div className={styles.bookCarDetails}>
            <div
              className={`${styles.locationDropdown} ${
                dropOff && styles.diffDropdown
              }`}
            >
              <div>
                <Image
                  src={'/bookingSectionLocation.svg'}
                  alt="Location"
                  width={9}
                  height={12}
                  className={styles.locationIcon}
                ></Image>
                <select className="location-select">
                  <option value="downtown">Downtown</option>
                  <option value="jumeirah">Jumeirah</option>
                  <option value="al-quoz">Al Quoz</option>
                </select>
              </div>
              <Image
                src={'/bookingSectionDropdownIcon.svg'}
                alt="Down Arrow"
                width={7}
                height={5}
                className={styles.dropdownIcon}
              ></Image>
            </div>
            <div className={styles.locationDropdown}>
              <div>
                <Image
                  src={'/bookingSectionLocation.svg'}
                  alt="Location"
                  width={9}
                  height={12}
                  className={styles.locationIcon}
                ></Image>
                <select className="location-select">
                  <option value="al-quoz">Al Quoz</option>
                  <option value="downtown">Downtown</option>
                  <option value="jumeirah">Jumeirah</option>
                </select>
              </div>
              <Image
                src={'/bookingSectionDropdownIcon.svg'}
                alt="Down Arrow"
                width={7}
                height={5}
                className={styles.dropdownIcon}
              ></Image>
            </div>
            {/* From Date  */}

            <div className={styles.calendarDropdown}>
              <Image
                src={'/bookingSectionCalendarIcon.svg'}
                alt="Calendar"
                width={10}
                height={10}
              ></Image>
              <DatePicker
                selected={fromDate2}
                onChange={(date: Date | null) => setFromDate2(date)}
                showTimeSelect
                dateFormat="dd/MM/yyyy h:mm aa"
                className={styles.CalendarInput}
                placeholderText="Pick-Up Date & Time"
              />
            </div>

            {/* To Date  */}

            <div className={styles.calendarDropdown}>
              <Image
                src={'/bookingSectionCalendarIcon.svg'}
                alt="Calendar"
                width={10}
                height={10}
              ></Image>
              <DatePicker
                selected={toDate2}
                onChange={(date: Date | null) => setToDate2(date)}
                showTimeSelect
                dateFormat="dd/MM/yyyy h:mm aa"
                className={styles.CalendarInput}
                placeholderText="Pick-Up Date & Time"
              />
            </div>
          </div>
          <button className={styles.bookCarSearch}>Search</button>
        </div>
       
      </div>
      <div className={styles.contactIconphone}>
          <Image className={styles.contactIcon} src="/phone.svg" alt="" width={26} height={26}/>
        </div>
        <div className={styles.contactIcon24}>
        <Image className={styles.contactIcon} src="/24-7.svg" alt="" width={38} height={38}/>
        </div>
    </>
  );
};

export default BookingSection;
