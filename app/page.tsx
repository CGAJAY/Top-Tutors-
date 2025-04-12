import CallToActionSection from './components/CallToActionSection';
import Header from './components/Header';
import HowItWorksSection from './components/HowItWorksSection';
import ReviewsSection from './components/ReviewsSection';
import WeGuaranteeSection from './components/WeGuaranteeSection';
import WeOfferSection from './components/WeOfferSection';
import WelcomeSection from './components/WelcomeSection';

export default function Home() {
  return (
    <div>
      <Header />
      <WelcomeSection />
      <CallToActionSection />
      <WeOfferSection />
      <HowItWorksSection />
      <WeGuaranteeSection />
      <ReviewsSection />
    </div>
  );
}
