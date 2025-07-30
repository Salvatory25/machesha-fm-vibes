import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import DJs from "@/components/DJs";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Programs />
      <DJs />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
