import { useState } from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import SocialProof from './components/sections/SocialProof';
import CredBar from './components/sections/CredBar';
import About from './components/sections/About';
import IRSection from './components/sections/IRSection';
import ConditionsCollage from './components/sections/ConditionsCollage';
import ServicesSection from './components/sections/ServicesSection';
import IRAdvantages from './components/sections/IRAdvantages';
import AnatomyViewer3D from './components/sections/AnatomyViewer3D';
import BeforeAfter from './components/sections/BeforeAfter';
import WhySection from './components/sections/WhySection';
import Journey from './components/sections/Journey';
import Testimonials from './components/sections/Testimonials';
import Publications from './components/sections/Publications';
import BlogSection from './components/sections/BlogSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/common/Footer';
import WAB from './components/common/WAB';
import ScrollTop from './components/common/ScrollTop';
import TreatmentPage from './components/pages/TreatmentPage';
import BlogPage from './components/pages/BlogPage';

function App() {
    const [page, setPage] = useState("home");
    const [blogId, setBlogId] = useState(null);
    const [treatmentId, setTreatmentId] = useState(null);

    const goToBlog = (id) => {
        setBlogId(id);
        setTreatmentId(null);
        setPage("blog");
    };

    const goToTreatment = (id) => {
        setTreatmentId(id);
        setBlogId(null);
        setPage("treatment");
    };

    const goHome = () => {
        setPage("home");
        setBlogId(null);
        setTreatmentId(null);
        setTimeout(() => document.querySelector("#blog")?.scrollIntoView({ behavior: "smooth" }), 100);
    };

    const goHomeTop = () => {
        setPage("home");
        setBlogId(null);
        setTreatmentId(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const goHomeServices = () => {
        setPage("home");
        setBlogId(null);
        setTreatmentId(null);
        setTimeout(() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }), 100);
    };

    const goContact = () => {
        setPage("home");
        setBlogId(null);
        setTreatmentId(null);
        setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 100);
    };

    return (
        <>
            <Navbar onNav={(p) => { if (p === "home") goHomeTop(); }} />
            {page === "home" ? (
                <>
                    <Hero />
                    <SocialProof />
                    <CredBar />
                    <About />
                    <IRSection />
                    <ConditionsCollage onTreatment={goToTreatment} />
                    <ServicesSection onTreatment={goToTreatment} />
                    <IRAdvantages />
                    <AnatomyViewer3D />
                    <BeforeAfter />
                    <WhySection />
                    <Journey />
                    <Testimonials />
                    <Publications />
                    <BlogSection onBlog={goToBlog} />
                    <FAQSection />
                    <ContactSection />
                    <Footer />
                </>
            ) : page === "treatment" ? (
                <TreatmentPage id={treatmentId} onBack={goHomeServices} onContact={goContact} />
            ) : (
                <BlogPage id={blogId} onBack={goHome} />
            )}
            <WAB />
            <ScrollTop />
        </>
    );
}

export default App;
