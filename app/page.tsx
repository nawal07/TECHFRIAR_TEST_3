import BookingSection from './components/BookingSection/BookingSection';
import CoverImageSection from './components/CoverImageSection/CoverImageSection';
import FaqSection from './components/FaqSection/FaqSection';
import Footer from './components/Footer/Footer';
import LocationSection from './components/LocationSection/LocationSection';
import Navbar from './components/Navbar/Navbar';
import PopularCarSection from './components/PopularCarSection/PopularCarSection';
import RentOrLeaseSection from './components/RentOrLeaseSection/RentOrLeaseSection';
import SubscribeSection from './components/SubscribeSection/SubscribeSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <BookingSection />
        <CoverImageSection />
        <PopularCarSection />
        <SubscribeSection />
        <RentOrLeaseSection />
        <LocationSection/>
        <FaqSection/>
        <Footer/>
      </main>
    </>
  );
}
