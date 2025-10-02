import React, { useState, useEffect } from "react";
import HeroSectionMobile from "./components/MobileComponents/HeroSectionMobile";
import HeroSection from "./pages/Home/HeroSection";
import useMediaQuery from "./hooks/useMediaQuery";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ApproachSection from "./pages/Home/ApproachSection";
import ServicesSection from "./pages/Home/ServiceSection";
import StatsSection from "./pages/Home/StatsSection";
import BestWorksSection from "./pages/Home/BestWorkSection";
import TestimonialsSection from "./pages/Home/TestimonialSection";
import FAQSection from "./components/Faq";
import ImagineHandSection from "./pages/Home/ImagineHandSection";
import { StyledFixedNavigation } from "./components/common/FixedNavigation";
import Hellosection from "./pages/Home/Hellosection";
import Fixedribbon from "./components/Fixedribbon";
import Loader from "./components/common/Loader";

import { Helmet } from "react-helmet";
import CtaWithTheme from "./components/ui/CtaWithTheme";
// import DesignStareScroll from "./components/ui/DesignStareScroll";
import ScrollText from "./components/ui/ScrollText";
import FounderSection from "./pages/Home/FounderSection";

function App() {
  const [loading, setLoading] = useState(true);
  const [ctaOpen, setCtaOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 769px)");

  const openCta = () => setCtaOpen(true);
  const closeCta = () => setCtaOpen(false);

  // Prevent scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [loading]);

  return (
    <>
      {loading && <Loader onLoadingComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          <Helmet>
            <title>
              Creative Agency Services | Flexirl - Design & Digital Marketing
              Experts
            </title>
            <meta
              name="description"
              content="Flexirl Creative Agency offers innovative design solutions, product development, digital marketing, and video motion graphics. Spark your brand's imaginative flair with our expert team of designers and developers."
            />
            <meta
              property="og:title"
              content="Creative Agency Services | Flexirl - Design & Digital Marketing Experts"
            />
            <meta
              property="og:description"
              content="Flexirl Creative Agency offers innovative design solutions, product development, digital marketing, and video motion graphics. Spark your brand's imaginative flair with our expert team of designers and developers."
            />
          </Helmet>
          {isDesktop && <StyledFixedNavigation onOpenCta={openCta} />}

          <main className="w-full overflow-x-hidden bg-[#ffff]">
            <div className="overflow-x-hidden-">
              {isMobile && <Header onOpenCta={openCta} />}

              {/* Home */}
              <div id="home">
                {isMobile ? (
                  <HeroSectionMobile onOpenCta={openCta} />
                ) : (
                  <HeroSection onOpenCta={openCta} />
                )}
              </div>

              {/* About - imagine hand + approach */}
              <div id="about">
                <ImagineHandSection onOpenCta={openCta} />
                <ApproachSection />
              </div>

              {/* Services */}
              <div id="services">
                <ServicesSection />
              </div>

              <div>
                <ScrollText />
              </div>

              {/* Projects - stats + best works */}
              <div id="projects">
                <BestWorksSection />
                <StatsSection />
              </div>

              {/* Testimonials */}
              <div id="testimonial">
                <TestimonialsSection />
              </div>

              <FAQSection />
              <FounderSection />
              <div id="sayhello">
                <Hellosection onOpenCta={openCta} />
              </div>

              <Fixedribbon />
              <Footer />
            </div>
          </main>

          <CtaWithTheme isOpen={ctaOpen} onClose={closeCta} />
        </>
      )}
    </>
  );
}

export default App;
