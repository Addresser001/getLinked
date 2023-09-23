import FAQSection from '../../component/faq_section';
import AppFooter from '../../component/footer';
import HeroSection from '../../component/hero_section';
import IntroSection from '../../component/intro_section';
import JudgingCriteriaSection from '../../component/judging_criteria';
import PartnerSection from '../../component/partners';
import PricesAndReward from '../../component/prices_section';
import PrivacyPolicy from '../../component/privacy_section';
import RulesAndGuideLines from '../../component/rules_section';
import TimelineSection from '../../component/timeline_section';
import './styles.scss'
const HomePage = () => {
  return (
    <main className="home_page">
      <HeroSection />
      <IntroSection />
      <RulesAndGuideLines />
      <JudgingCriteriaSection />
      <FAQSection />
      <TimelineSection />
      <PricesAndReward />
      <PartnerSection />
      <PrivacyPolicy />
      <AppFooter />
    </main>
  );
}

export default HomePage;