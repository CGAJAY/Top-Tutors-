import CallToActionSection from './components/CallToActionSection';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';

export default function Home() {
  return (
    <div>
      <Header />
      <WelcomeSection />
      <CallToActionSection />
    </div>
  );
}
