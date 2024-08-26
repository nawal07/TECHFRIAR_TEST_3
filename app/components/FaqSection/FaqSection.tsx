'use client';

import React, { useState } from 'react';
import styles from './FaqSection.module.css';
import Image from 'next/image';

const faqData = [
  {
    question: 'What is my eligibility to book a car?',
    answer:
      'You should be 18 years old or above and you must possess a valid driving license.',
  },
  {
    question: 'Can I book for any period of time?',
    answer: 'Yes, you can book a car for any period of time.',
  },
  {
    question: 'Can I opt for a car for a longer period?',
    answer: "You can, although the maximum duration should not exceed 6 months.",
  },
  {
    question: 'Can I book a one-way trip?',
    answer:
      'Yes, you can book a one-way trip as per your liking and travel plans.',
  },
  {
    question: 'Is there a home delivery option available?',
    answer: 'Yes, there is a home delivery option available.',
  },
  {
    question: 'How can I make the payment?',
    answer:
      'You can make the payment through any online medium like UPI, Scan and Pay, card payment, or online banking.',
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqSection}>
      <h2>Frequently asked questions</h2>
      <div className={styles.faqSectionContents}>
        {faqData.map((faq, index) => (
          <div key={index}>
            <div
              onClick={() => handleClick(index)}
              className={styles.faqSectionContentsTitle}
            >
              <h3>{faq.question}</h3>
              <Image
                className={`${
                  activeIndex === index ? styles.showDescription : styles.description
                }`}
                src={
                  activeIndex === index
                    ? '/FaqSectionXmark.svg'
                    : '/FaqSectionPlusMark.svg'
                }
                alt=""
                width={16}
                height={16}
              />
            </div>
            <div
              className={`${
                activeIndex === index
                  ? styles.faqSectionContentsDescription
                  : styles.faqSectionContentsDescriptionHide
              }`}
            >
              <p>{faq.answer}</p>
            </div>
            <div className={styles.faqSectionContentsBar}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
