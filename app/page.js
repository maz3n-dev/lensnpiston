"use client";
// NEW: Added useScroll, useTransform, useSpring
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";

export default function Page() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  // NEW: Custom Cursor State
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState("default");

  // NEW: Ref for Hero Parallax
  const heroRef = useRef(null);
  
  // NEW: Scroll Progress Hook
  const { scrollYProgress } = useScroll();
  
  // NEW: Smooth Scroll Progress for progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // NEW: Hero Parallax Scroll Hook
  const { scrollYProgress: heroScrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroParallaxY = useTransform(heroScrollYProgress, [0, 1], ["0%", "30%"]);

  // ... (carPortfolio, testimonials, etc. data remains exactly the same) ...
  const carPortfolio = [
    {
      image: "https://images-porsche.imgix.net/-/media/0B3F90A75B0141FF8BED694C3C1A323B_7C02423B08CB49C8801E208B2D16A51E_CZ25W18OX0004-911-gt3-white-side?w=2560&h=1440&q=45&crop=faces%2Centropy%2Cedges&auto=format",
      name: "Porsche 911 GT3",
      year: "2023",
      location: "Cairo Autodrome",
      specs: "4.0L Flat-6 • 502 HP • 0-100: 3.4s"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Ferrari_F8_Tributo_Genf_2019_1Y7A5665.jpg",
      name: "Ferrari F8 Tributo",
      year: "2022",
      location: "North Coast Highway",
      specs: "3.9L V8 • 710 HP • 0-100: 2.9s"
    },
    {
      image: "https://bringatrailer.com/wp-content/uploads/2024/10/2023_dodge_challenger-srt-demon-170_414973399_853038996815419_7196473155449515394_n-95256.jpg?fit=940%2C627",
      name: "Dodge Challenger SRT",
      year: "2023",
      location: "Desert Road",
      specs: "6.2L Supercharged • 807 HP • 0-100: 2.3s"
    },
    {
      image: "https://i.sbxcars.com/auctions/qeUn2YrSnvtkrkea1S5lPA45FwHChspQ/SBXAventadorS001.JPG",
      name: "Lamborghini Aventador",
      year: "2021",
      location: "Katameya Dunes",
      specs: "6.5L V12 • 740 HP • 0-100: 2.9s"
    },
    {
      image: "https://cdn.motor1.com/images/mgl/P3nO74/s1/2000-nissan-skyline-r34-gt-r-by-kaizo-industries-driven-by-paul-walker-in-fast-and-furious-bonham-s-auction.jpg",
      name: "Nissan Skyline R34",
      year: "2002",
      location: "Downtown Cairo",
      specs: "2.6L Twin-Turbo • 276 HP • JDM Legend"
    },
    {
      image: "https://di-uploads-pod16.dealerinspire.com/bmwofbridgeport/uploads/2020/08/P90396990_M4_M4_GT3-1600x1067.jpg",
      name: "BMW M4 GT3",
      year: "2023",
      location: "Cairo International Circuit",
      specs: "3.0L I6 • 590 HP • Race Spec"
    },
    {
      image: "https://static0.hotcarsimages.com/wordpress/wp-content/uploads/2021/05/BMW-M3-E36-via-Forgestar-e1620524008133.jpg",
      name: "BMW E36 M3",
      year: "1995",
      location: "Maadi District",
      specs: "3.0L I6 • 286 HP • 90s Icon"
    },
    {
      image: "https://www.mercedes-benz.com.eg/content/dam/hq/passengercars/cars/amg-gt/amg-gt-2-doors-coupe-c192/pad/highlights/06-2023/images/mercedes-amg-gt-c192-pad-higlights-exterior-3302x1858-06-2023.jpg/1740018473439.jpg?im=Crop,rect=(0,0,3302,1857);Resize=(1280,720)",
      name: "Mercedes-AMG GT",
      year: "2022",
      location: "Alexandria Corniche",
      specs: "4.0L V8 • 523 HP • 0-100: 3.8s"
    },
    {
      image: "https://bimmerlife.com/wp-content/uploads/2023/11/1-873x583.jpg",
      name: "BMW E30 M3",
      year: "1990",
      location: "Zamalek Streets",
      specs: "2.3L I4 • 195 HP • Classic Sport"
    },
    {
      image: "https://news.turn14.com/wp-content/uploads/2022/03/001-2004-subaru-wrx-sti-msports-widebody_header.jpg",
      name: "Subaru WRX STI",
      year: "2004",
      location: "Mokattam Hills",
      specs: "2.5L Turbo • 300 HP • Rally Inspired"
    },
    {
      image: "https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/h4twHSwDIEJi8bJ2fR6bIZrgsRpKieP5eY1WpXrg.jpg",
      name: "Range Rover Sport",
      year: "2024",
      location: "Pyramids Road",
      specs: "4.4L V8 • 523 HP • Luxury SUV"
    }
  ];

  const openWhatsApp = () => {
    const message = "Hello Mostafa, I'm interested in your automotive photography services!";
    const url = `https://wa.me/201023422078?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "Car Collector",
      text: "Mostafa transformed my Porsche into a work of art. His attention to detail is exceptional!",
      car: "Porsche 911 GT3"
    },
    {
      name: "Youssef Mahmoud",
      role: "Automotive Dealer",
      text: "The professional photos increased our showroom sales by 40%. Outstanding quality!",
      car: "Multiple Brands"
    },
    {
      name: "Nour El Din",
      role: "Racing Team Owner",
      text: "Perfect shots under pressure during track days. Highly recommended for any automotive work in Egypt.",
      car: "BMW M4 GT3"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "We discuss your vision, vehicle details, and preferred locations in Cairo",
      icon: "💬"
    },
    {
      step: "02",
      title: "Planning",
      description: "Location scouting, lighting analysis, and shot list preparation",
      icon: "📋"
    },
    {
      step: "03",
      title: "Photoshoot",
      description: "Professional session using state-of-the-art equipment and techniques",
      icon: "📸"
    },
    {
      step: "04",
      title: "Editing",
      description: "Premium post-processing and color grading for magazine-quality results",
      icon: "🎨"
    },
    {
      step: "05",
      title: "Delivery",
      description: "High-resolution digital gallery delivered within agreed timeframe",
      icon: "🚀"
    }
  ];

  const equipment = [
    { name: "Canon R5", type: "Professional Mirrorless", icon: "📷" },
    { name: "Sony A7IV", type: "Hybrid Camera", icon: "🎥" },
    { name: "DJI Ronin", type: "Stabilization System", icon: "🔄" },
    { name: "Profoto Lights", type: "Studio Lighting", icon: "💡" },
    { name: "Prime Lenses", type: "Optical Excellence", icon: "🔍" }
  ];

  const aboutStats = [
    { number: "50+", label: "Cars Photographed" },
    { number: "3", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24h", label: "Fastest Delivery" }
  ];

  const featuredLocations = [
    {
      name: "Cairo Autodrome",
      description: "Professional race track for high-speed action shots",
      icon: "🏁"
    },
    {
      name: "Pyramids Road",
      description: "Iconic backdrop combining history and modern supercars",
      icon: "🏜️"
    },
    {
      name: "North Coast",
      description: "Beautiful coastal roads perfect for golden hour shoots",
      icon: "🌅"
    },
    {
      name: "Downtown Cairo",
      description: "Urban landscape with architectural marvels",
      icon: "🏙️"
    }
  ];

  const contactInfo = [
    {
      icon: "📱",
      title: "Phone",
      value: "+20 102 342 2078",
      action: openWhatsApp
    },
    {
      icon: "📍",
      title: "Location",
      value: "Cairo, Egypt",
      action: null
    },
    {
      icon: "📸",
      title: "Instagram",
      value: "@lensespistons",
      action: () => window.open('https://instagram.com/lensespistons', '_blank')
    }
  ];

  const servicesData = [
    {
      name: "Basic Shoot",
      price: "2,500 EGP",
      desc: "Perfect for individual car owners and enthusiasts",
      features: ["1-2 Hour Professional Session", "50+ High-Resolution Edited Photos", "1 Premium Location in Cairo", "48-Hour Express Delivery", "Basic Color Grading"],
      emoji: "🚗",
      popular: false
    },
    {
      name: "Premium Package",
      price: "5,000 EGP",
      desc: "Most popular choice for serious car enthusiasts",
      features: ["3-4 Hour Comprehensive Session", "100+ Professionally Edited Photos", "2 Premium Cairo Locations", "Advanced Color Grading", "24-Hour Priority Delivery", "Online Gallery Access"],
      emoji: "⭐",
      popular: true
    },
    {
      name: "Full Day Event",
      price: "8,000 EGP",
      desc: "Complete coverage for car meets and automotive events",
      features: ["Full Day Coverage (8 Hours)", "200+ Premium Edited Photos", "Multiple Vehicle Focus", "Event Highlights Package", "Quick 24-Hour Turnaround", "Social Media Ready Images", "Drone Coverage Included"],
      emoji: "🎪",
      popular: false
    }
  ];

  // Updated "sections" data
  const sections = [
    {
      id: "hero",
      title: "LENS & PISTONS",
      subtitle: "'Where the Lens meets the Pistons'",
      description: "",
      bgColor: "from-black via-gray-950 to-black",
      textColor: "text-gray-100",
      accentColor: "text-[#370CC2]",
      buttonColor: "bg-[#370CC2] hover:bg-[#2a099f]",
      borderColor: "border-[#370CC2]",
      emoji: "🏁"
    },
    {
      id: "portfolio",
      title: "PORTFOLIO",
      subtitle: "Automotive Masterpieces Gallery",
      description: "A curated collection of exceptional vehicles captured with artistic vision and technical excellence. Each photograph tells a unique story of automotive passion and engineering marvel.",
      bgColor: "from-gray-950 via-black to-gray-950",
      textColor: "text-gray-200",
      accentColor: "text-[#370CC2]",
      buttonColor: "bg-[#370CC2] hover:bg-[#2a099f]",
      borderColor: "border-[#370CC2]",
      emoji: "📸"
    },
    {
      id: "services",
      title: "SERVICES",
      subtitle: "Professional Photography Packages",
      description: "Comprehensive automotive photography services tailored to your needs. All packages include professional editing, multiple format delivery, and satisfaction guarantee.",
      bgColor: "from-black via-gray-950 to-black",
      textColor: "text-gray-200",
      accentColor: "text-[#370CC2]",
      buttonColor: "bg-[#370CC2] hover:bg-[#2a099f]",
      borderColor: "border-[#370CC2]",
      emoji: "⚡"
    },
    {
      id: "process",
      title: "PROCESS",
      subtitle: "Our Professional Workflow",
      description: "A meticulous 5-step process ensuring every photoshoot meets the highest standards of quality and professionalism from concept to delivery.",
      bgColor: "from-gray-950 via-black to-gray-950",
      textColor: "text-gray-200",
      accentColor: "text-[#370CC2]",
      buttonColor: "bg-[#370CC2] hover:bg-[#2a099f]",
      borderColor: "border-[#370CC2]",
      emoji: "🔄"
    },
    {
      id: "about",
      title: "ABOUT",
      subtitle: "Mostafa Hany - Automotive Photographer",
      description: "With 3 years of professional photography experience and specializing in automotive photography for the past year. Based in Cairo, Egypt, combining technical expertise with artistic vision.",
      bgColor: "from-black via-gray-950 to-black",
      textColor: "text-gray-200",
      accentColor: "text-[#370CC2]",
      buttonColor: "bg-[#370CC2] hover:bg-[#2a099f]",
      borderColor: "border-[#370CC2]",
      emoji: "👤"
    },
    {
      id: "contact",
      title: "CONTACT",
      subtitle: "Start Your Project Today",
      description: "Ready to capture your automotive masterpiece? Let's create something extraordinary together. Professional consultations available in Cairo and surrounding areas.",
      bgColor: "from-gray-950 via-black to-gray-950",
      textColor: "text-gray-200",
      accentColor: "text-[#370CC2]",
      buttonColor: "bg-[#370CC2] hover:bg-[#2a099f]",
      borderColor: "border-[#370CC2]",
      emoji: "📞"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sections.findIndex(s => s.id === sectionId));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setCurrentSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    const preloadImages = async () => {
      try {
        await Promise.all(carPortfolio.map(car => loadImage(car.image)));
        setImageLoaded(true);
      } catch (error) {
        console.log("Some images failed to load, continuing anyway");
        setImageLoaded(true);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (imageLoaded) {
      const timer = setTimeout(() => setIsLoading(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [imageLoaded]);

  useEffect(() => {
    const mouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      scale: 1,
      backgroundColor: "#370CC2",
      mixBlendMode: "difference",
    },
    link: {
      x: cursorPos.x - 24,
      y: cursorPos.y - 24,
      height: 48,
      width: 48,
      scale: 1.5,
      backgroundColor: "#fefaf0",
      mixBlendMode: "difference",
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#370CC2] via-[#4a1fff] to-[#23077e] flex items-center justify-center z-50">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto mb-6 relative">
              {/* Smoke 1 (Burnout) */}
              <motion.div
                className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-white/20 rounded-full blur-2xl"
                initial={{ opacity: 0.7, scale: 0.3, y: 0 }}
                animate={{ 
                  opacity: [0.7, 0.9, 0], 
                  scale: [0.3, 1.5, 2.5],
                  y: [0, -20, -40]
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0 }}
              />
              {/* Smoke 2 (Burnout) */}
              <motion.div
                className="absolute bottom-0 left-1/3 w-1/3 h-1/2 bg-white/30 rounded-full blur-xl"
                initial={{ opacity: 0.8, scale: 0.3, y: 0 }}
                animate={{ 
                  opacity: [0.8, 1, 0], 
                  scale: [0.3, 1.7, 2.8],
                  y: [0, -15, -35]
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
              />
              {/* Smoke 3 (Burnout) */}
              <motion.div
                className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-white/10 rounded-full blur-3xl"
                initial={{ opacity: 0.6, scale: 0.2, y: 0 }}
                animate={{ 
                  opacity: [0.6, 0.8, 0], 
                  scale: [0.2, 1.6, 2.6],
                  y: [0, -10, -30] 
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
              />
              
              {/* Spinning Wheel - Replaced with lens image */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  rotate: { duration: 0.5, repeat: Infinity, ease: "linear" },
                }}
                className="w-full h-full relative"
              >
                <div className="absolute inset-0 border-4 border-white/30 rounded-full" />
                <div className="absolute inset-4 border-4 border-white/50 rounded-full" />
                <div className="absolute inset-8 border-4 border-white rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <motion.img
                    src="https://ik.imagekit.io/cjqexrrmop/_Pngtree_hyper-realistic%20lens%20icon_5402648.png"
                    alt="Camera Lens"
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl font-bold text-white mb-4 tracking-widest"
              style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
            >
              LENS & PISTONS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-white/80 text-sm tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              PREMIUM AUTOMOTIVE PHOTOGRAPHY
            </motion.p>
          </motion.div>

          <div className="w-80 mx-auto mb-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-2 bg-white/30 rounded-full overflow-hidden"
            >
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="h-full bg-white"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-white/80 text-sm space-y-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              INITIALIZING PROFESSIONAL PORTFOLIO
            </motion.div>
            <div className="text-xs text-white/60">
              Cairo, Egypt • Automotive Excellence
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-black"
      onMouseEnter={() => setCursorVariant("default")}
      onMouseLeave={() => setCursorVariant("default")}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;700;900&display=swap');
          
          [style*="font-family: 'Dela Gothic One'"] {
            font-family: 'Dela Gothic One', sans-serif !important;
          }
          [style*="font-family: 'Playfair Display'"] {
            font-family: 'Playfair Display', serif !important;
          }
          [style*="font-family: 'Inter'"] {
            font-family: 'Inter', sans-serif !important;
          }
        `}
      </style>

      <motion.div
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full z-[9999] pointer-events-none"
      />
      
      <motion.div
        className="fixed top-[88px] left-0 right-0 h-1 bg-[#370CC2] z-[60] origin-left"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection('hero')}
              onMouseEnter={() => setCursorVariant("link")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              {/* Changed: Made logo bigger (w-16 h-16) and bg-white */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                <img
                  src="https://ik.imagekit.io/kf6t6lr5r/LENS%20AND%20PISTONS%20PNG.png"
                  alt="Lens & Pistons Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-100 block leading-tight" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>LENS & PISTONS</span>
                <span className="text-xs text-[#370CC2] font-medium tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>PREMIUM AUTOMOTIVE PHOTOGRAPHY</span>
              </div>
            </motion.div>

            <div className="hidden lg:flex space-x-8">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  onMouseEnter={() => setCursorVariant("link")}
                  onMouseLeave={() => setCursorVariant("default")}
                  className={`relative text-sm font-semibold transition-all duration-300 group ${
                    currentSection === index
                      ? 'text-[#370CC2]'
                      : 'text-gray-300 hover:text-[#370CC2]'
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {section.title}
                  <motion.div
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#370CC2] to-[#4a1fff] ${
                      currentSection === index ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    } transition-transform origin-left`}
                    layoutId="underline"
                  />
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={openWhatsApp}
              onMouseEnter={() => setCursorVariant("link")}
              onMouseLeave={() => setCursorVariant("default")}
              className="px-6 py-3 bg-gradient-to-r from-[#370CC2] to-[#23077e] text-white font-semibold rounded-full hover:shadow-xl transition-all shadow-lg flex items-center space-x-2 group"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="group-hover:scale-110 transition-transform">📱</span>
              <span>Get In Touch</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            onMouseEnter={() => setCursorVariant("link")}
            onMouseLeave={() => setCursorVariant("default")}
            className="relative group"
          >
            <div className={`w-3 h-3 rounded-full transition-all duration-300 shadow-lg ${
              currentSection === index
                ? 'bg-[#370CC2] scale-125 ring-2 ring-[#4a1fff]'
                : 'bg-[#4a1fff] hover:bg-[#370CC2]'
            }`} />
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              {section.title}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-r-gray-900" />
            </div>
          </button>
        ))}
      </div>

      <main>
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            ref={section.id === 'hero' ? heroRef : null}
            className={`min-h-screen bg-gradient-to-br ${section.bgColor} relative overflow-hidden`}
          >
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                backgroundSize: '80px 80px'
              }} />
            </div>

            {section.id === "hero" && (
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <motion.img
                  src={carPortfolio[0].image}
                  alt="Porsche 911 GT3"
                  className="w-full h-full object-cover opacity-20"
                  style={{ y: heroParallaxY }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
              </motion.div>
            )}

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="text-6xl mb-8"
                >
                  {section.emoji}
                </motion.div>

                <motion.h1
                  variants={titleVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`text-5xl md:text-7xl font-black mb-6 ${section.textColor} leading-tight tracking-tight`}
                  style={{ fontFamily: "'Dela Gothic One', sans-serif" }}
                >
                  {section.title.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      variants={letterVariants}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className={`text-xl md:text-2xl ${section.accentColor} mb-12 font-medium tracking-widest italic`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {section.subtitle}
                </motion.p>
                
                {section.id === "hero" && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection('portfolio')}
                      onMouseEnter={() => setCursorVariant("link")}
                      onMouseLeave={() => setCursorVariant("default")}
                      className={`px-10 py-5 ${section.buttonColor} text-white font-bold rounded-full transition-all shadow-2xl hover:shadow-3xl text-lg`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Explore Portfolio
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={openWhatsApp}
                      onMouseEnter={() => setCursorVariant("link")}
                      onMouseLeave={() => setCursorVariant("default")}
                      className={`px-10 py-5 border-2 ${section.borderColor} text-gray-100 font-bold rounded-full hover:bg-[#370CC2] hover:text-white transition-all shadow-2xl hover:shadow-3xl text-lg flex items-center space-x-3`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span>📱</span>
                      <span>Get In Touch</span>
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>

              {section.id === "portfolio" && (
                <div className="space-y-20">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                    {carPortfolio.map((car, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        whileHover={{ y: -10, scale: 1.03 }}
                        onMouseEnter={() => setCursorVariant("link")}
                        onMouseLeave={() => setCursorVariant("default")}
                        className="bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group cursor-pointer border border-gray-800"
                      >
                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src={car.image}
                            alt={car.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute top-4 right-4">
                            <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                              {car.year}
                            </span>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>{car.name}</h3>
                            <p className="text-sm opacity-90 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>{car.specs}</p>
                            <p className="text-xs opacity-80 flex items-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                              <span className="mr-1">📍</span>
                              {car.location}
                            </p>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="font-bold text-xl text-gray-100 mb-2" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>{car.name}</h3>
                          <p className="text-[#370CC2] text-sm font-medium mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>{car.specs}</p>
                          <p className="text-gray-400 text-sm flex items-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <span className="mr-2">📍</span>
                            {car.location}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-6xl mx-auto"
                  >
                    <h3 className="text-4xl font-bold text-center mb-12 text-gray-100" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>Client Testimonials</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {testimonials.map((testimonial, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: idx * 0.2 }}
                          whileHover={{ y: -5 }}
                          onMouseEnter={() => setCursorVariant("link")}
                          onMouseLeave={() => setCursorVariant("default")}
                          className="bg-[#1a1a1a] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-800"
                        >
                          <div className="text-[#370CC2] text-4xl mb-4">"</div>
                          <p className="text-gray-300 mb-6 leading-relaxed italic" style={{ fontFamily: "'Inter', sans-serif" }}>"{testimonial.text}"</p>
                          <div className="border-t border-gray-800 pt-4">
                            <div className="font-bold text-gray-100" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>{testimonial.name}</div>
                            <div className="text-[#370CC2] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{testimonial.role}</div>
                            <div className="text-gray-500 text-xs mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>{testimonial.car}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}

              {section.id === "services" && (
                <div className="space-y-20">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                  >
                    {servicesData.map((service, idx) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className={`bg-[#1a1a1a] rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 ${
                          service.popular ? 'border-[#370CC2] relative' : 'border-gray-800'
                        }`}
                      >
                        {service.popular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#370CC2] to-[#23077e] text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                            ⭐ MOST POPULAR
                          </div>
                        )}
                        <div className="text-center mb-6">
                          <div className="text-5xl mb-4">{service.emoji}</div>
                          <span className={`text-4xl font-black ${section.accentColor}`} style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>{service.price}</span>
                        </div>
                        <h3 className="font-black text-2xl text-gray-100 mb-4 text-center" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>{service.name}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed text-center font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{service.desc}</p>
                        <div className="space-y-4 mb-8">
                          {service.features.map((feature, featureIdx) => (
                            <div key={featureIdx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-[#370CC2] rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-300 text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={openWhatsApp}
                          onMouseEnter={() => setCursorVariant("link")}
                          onMouseLeave={() => setCursorVariant("default")}
                          className={`w-full px-6 py-4 ${section.buttonColor} text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl ${
                            service.popular ? 'text-lg' : ''
                          }`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Select Package
                        </motion.button>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Featured Locations */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <h3 className="text-4xl font-bold text-center mb-12 text-gray-100" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>Featured Locations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {featuredLocations.map((location, idx) => (
                        <motion.div
                          key={location.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: idx * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          onMouseEnter={() => setCursorVariant("link")}
                          onMouseLeave={() => setCursorVariant("default")}
                          className="text-center bg-[#1a1a1a] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-800"
                        >
                          <div className="text-4xl mb-3">{location.icon}</div>
                          <div className="font-bold text-gray-100 text-lg mb-2" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>{location.name}</div>
                          <div className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{location.description}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}

              {section.id === "process" && (
                <div className="max-w-6xl mx-auto space-y-16">
                  {/* Process Steps */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
                  >
                    {processSteps.map((step, idx) => (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        whileHover={{ y: -5 }}
                        onMouseEnter={() => setCursorVariant("link")}
                        onMouseLeave={() => setCursorVariant("default")}
                        className="text-center group"
                      >
                        <div className="relative mb-6">
                          <div className="w-20 h-20 bg-gradient-to-br from-[#370CC2] to-[#23077e] rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all">
                            <span className="text-2xl text-white">{step.icon}</span>
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#23077e] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                            {step.step}
                          </div>
                        </div>
                        <h3 className="font-bold text-lg text-gray-100 mb-3" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{step.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Professional Equipment */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <h3 className="text-4xl font-bold text-center mb-12 text-gray-100" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>Professional Equipment</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                      {equipment.map((item, idx) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: idx * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          onMouseEnter={() => setCursorVariant("link")}
                          onMouseLeave={() => setCursorVariant("default")}
                          className="text-center bg-[#1a1a1a] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-800"
                        >
                          <div className="text-3xl mb-3">{item.icon}</div>
                          <div className="font-bold text-gray-100 text-sm mb-1" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>{item.name}</div>
                          <div className="text-[#370CC2] text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>{item.type}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}

              {section.id === "about" && (
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <h3 className="text-5xl font-black text-gray-100 mb-6" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>Crafting Automotive Art</h3>
                      <p className="text-lg text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        With 3 years of professional photography experience and specializing in automotive photography
                        for the past year, I bring a unique blend of technical expertise and artistic vision to every
                        project. Based in Cairo, Egypt, I work with car enthusiasts, collectors, and dealerships to
                        create stunning visual narratives that showcase the true character of each vehicle.
                      </p>
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        {aboutStats.map((stat, idx) => (
                          <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            onMouseEnter={() => setCursorVariant("link")}
                            onMouseLeave={() => setCursorVariant("default")}
                            className="text-center bg-[#1a1a1a] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-800"
                          >
                            <div className={`text-3xl font-black ${section.accentColor} mb-2`} style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>
                              {stat.number}
                            </div>
                            <div className="text-gray-400 font-bold text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => scrollToSection('portfolio')}
                          onMouseEnter={() => setCursorVariant("link")}
                          onMouseLeave={() => setCursorVariant("default")}
                          className={`px-8 py-4 ${section.buttonColor} text-white font-bold rounded-full transition-all shadow-2xl hover:shadow-3xl`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          View My Work
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={openWhatsApp}
                          onMouseEnter={() => setCursorVariant("link")}
                          onMouseLeave={() => setCursorVariant("default")}
                          className={`px-8 py-4 border-2 ${section.borderColor} text-gray-100 font-bold rounded-full hover:bg-[#370CC2] hover:text-white transition-all shadow-2xl hover:shadow-3xl flex items-center space-x-2`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <span>📱</span>
                          <span>Get In Touch</span>
                        </motion.button>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="relative"
                    >
                      <div className="bg-gradient-to-br from-[#4a1fff] to-[#23077e] rounded-3xl p-8 text-white shadow-2xl">
                        <div className="text-center">
                          <div className="text-6xl mb-4">🎯</div>
                          <h4 className="text-2xl font-black mb-4" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>Mission Statement</h4>
                          <p className="text-white font-medium leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                            To capture the soul and engineering excellence of every vehicle through
                            professional photography that tells a compelling story and preserves
                            automotive legacy for generations to come.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}

              {section.id === "contact" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {contactInfo.map((info, idx) => (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="text-center bg-[#1a1a1a] rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all border border-gray-800 group cursor-pointer"
                        onClick={info.action || undefined}
                        onMouseEnter={() => setCursorVariant("link")}
                        onMouseLeave={() => setCursorVariant("default")}
                      >
                        <div className="text-4xl mb-4">{info.icon}</div>
                        <div className={`font-black text-xl mb-4 ${section.accentColor}`} style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>
                          {info.title}
                        </div>
                        <div className="text-gray-100 font-bold text-lg group-hover:text-[#370CC2] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {info.value}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-center space-y-6">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={openWhatsApp}
                      onMouseEnter={() => setCursorVariant("link")}
                      onMouseLeave={() => setCursorVariant("default")}
                      className={`px-16 py-5 ${section.buttonColor} text-white font-black rounded-full text-xl transition-all shadow-2xl hover:shadow-3xl flex items-center space-x-4 mx-auto`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span>📱</span>
                      <span>Get In Touch via WhatsApp</span>
                    </motion.button>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Typically respond within 30 minutes • Professional consultation available
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </section>
        ))}
      </main>

      {/* Enhanced Professional Footer - Dark Theme */}
      <footer className="bg-black border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            {/* Changed: Made logo bigger (w-20 h-20) and bg-white */}
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <img
                  src="https://ik.imagekit.io/kf6t6lr5r/LENS%20AND%20PISTONS%20PNG.png"
                  alt="Lens & Pistons Logo"
                  className="w-14 h-14 object-contain"
                />
            </div>
            <div>
              <span className="text-3xl font-black text-gray-100 block leading-tight" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>LENS & PISTONS</span>
              <span className="text-sm text-[#370CC2] font-bold tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>PREMIUM AUTOMOTIVE PHOTOGRAPHY</span>
            </div>
          </motion.div>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
            Professional automotive photography services in Cairo, Egypt. Transforming vehicles into timeless visual masterpieces through expert photography techniques.
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            {['Instagram', 'Facebook', 'Behance', 'YouTube'].map((social) => (
              <motion.button
                key={social}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setCursorVariant("link")}
                onMouseLeave={() => setCursorVariant("default")}
                onClick={() => {
                  if (social === 'Instagram') {
                    window.open('https://instagram.com/lensespistons', '_blank');
                  }
                }}
                className="text-gray-400 hover:text-[#370CC2] transition-colors font-bold text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {social.toUpperCase()}
              </motion.button>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openWhatsApp}
            onMouseEnter={() => setCursorVariant("link")}
            onMouseLeave={() => setCursorVariant("default")}
            className="px-8 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl flex items-center space-x-3 mx-auto mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span>💬</span>
            <span>Get In Touch: +20 102 342 2078</span>
          </motion.button>
          <div className="text-gray-500 text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
            © {new Date().getFullYear()} Lens & Pistons by Mostafa Hany. Professional Automotive Photography - Cairo, Egypt. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
