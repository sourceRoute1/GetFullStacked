import { useState } from "react";
import {
  Menu,
  X,
  Lightbulb,
  Rocket,
  MessageSquareQuote,
  FileText,
  Map,
  Calendar,
  Code,
  MessageCircle,
  Briefcase,
  Users,
  Book,
  CheckCircle,
  HelpCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/gfs_favicon.png";
import heroImg from "../assets/herosection.png";
import FAQ from "../Components/FAQ";
import { Testimonials } from "../Components/Testimonials";

const sections = [
  { id: "about", icon: <Lightbulb size={16} />, title: "About" },
  { id: "benefits", icon: <Rocket size={16} />, title: "Benefits" },
  {
    id: "testimonials",
    icon: <MessageSquareQuote size={16} />,
    title: "Stories",
  },
  { id: "register", icon: <FileText size={16} />, title: "Apply" },
  { id: "faq", icon: <HelpCircle size={16} />, title: "FAQ" },
];

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function LandingPage() {
  const [open, setOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="font-inter text-white min-h-screen bg-gradient-to-br from-[#0A1D56] via-[#0C356A] to-[#000000]">
      {/* Navbar */}
      <nav className="sticky top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-black/50 shadow-md">
        {/* Logo */}
        <div
          onClick={() => scrollToSection("hero-section")}
          className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
        >
          <img
            src={logo}
            alt="Logo Icon"
            className="h-8 w-8 object-contain self-start mt-[2px]"
          />
          <div className="relative flex flex-col justify-center leading-tight">
            <h1 className="text-[1.1rem] md:text-xl font-bold">
              <span className="text-[#41B0FF]">Get</span>
              <span className="text-white">FullStack</span>
              <span className="text-[#41B0FF]">ed</span>
            </h1>
            <span className="absolute right-0 top-full text-[8px] md:text-[10px] text-gray-400">
              by SourceRoute
            </span>
          </div>
        </div>
        {/* Center Navlinks */}
        <div className="hidden md:flex gap-6 items-center mx-auto">
          {sections
            .filter((s) => s.id !== "register")
            .map((s) => (
              <a
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className="flex items-center gap-2 text-md hover:text-[#41B0FF] cursor-pointer transition"
              >
                {s.icon}
                <span>{s.title}</span>
              </a>
            ))}
        </div>
        {/* Apply Button (Right Side) */}
        <div className="hidden md:flex">
          <a
            onClick={() => scrollToSection("register")}
            className="px-2 py-2 bg-[#41B0FF] text-black rounded-lg text-md font-medium hover:bg-[#3295E6] transition flex items-center gap-2 cursor-pointer"
          >
            <FileText size={16} /> Apply for Mentorship
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-white" onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>
      </nav>

      {/* Sidebar (Mobile Nav) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full z-50 p-6 flex flex-col gap-6 bg-black/50 backdrop-blur-lg border-l border-white/10 shadow-2xl cursor-pointer"
          >
            <div className="flex justify-end">
              <button onClick={() => setOpen(false)}>
                <X size={28} />
              </button>
            </div>

            {sections.map((s) => (
              <a
                key={s.id}
                onClick={() => {
                  scrollToSection(s.id);
                  setOpen(false);
                }}
                className="flex items-center gap-2 text-md hover:text-[#41B0FF] transition"
              >
                {s.icon}
                <span>{s.title}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        id="hero-section"
        className="scroll-mt-28 h-screen bg-cover bg-center flex flex-col justify-center items-center relative text-center px-6"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl font-bold text-[#41B0FF]">
            Become a <span className="text-white">Full Stack Developer</span>
            —For Real
          </h1>
          <p className="text-xl text-gray-300 mt-4">
            Build real projects. Get direct feedback. Skip the confusion—learn
            with a mentor who actually cares.
          </p>
          <a
            onClick={() => scrollToSection("register")}
            className="mt-6 inline-flex px-8 py-3 bg-[#41B0FF] text-black text-lg rounded-lg hover:bg-[#3295E6] transition items-center gap-2 cursor-pointer"
          >
            👉 Apply for Mentorship
          </a>
          <br />
          <a
            href="https://calendly.com/testmetry/getfullstacked"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex px-6 py-2 border border-[#41B0FF] text-[#41B0FF] text-md rounded-lg hover:bg-[#41B0FF]/10 transition items-center gap-2 cursor-pointer]"
          >
            🎙️ Book a Clarity Call
          </a>
        </div>
      </section>

      {/* Sections */}
      <main className="space-y-8 md:space-y-14 pt-10 pb-20 px-3 md:px-6">
        {/* About Section */}
        <section
          id="about"
          className="scroll-mt-20 relative bg-[#0A1D56] py-20 rounded-lg shadow-lg"
        >
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                <span className="text-[#41B0FF]">Why</span> GetFullStacked?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Mentorship that moves you forward.{" "}
                <strong>Not a course.</strong> <br />
                <span className="italic text-white">
                  “You don’t need 10 more hours of video. You need someone to
                  tell you what to do, review your code, and help you level up.”
                </span>
              </p>
              <p className="text-gray-300 text-md leading-relaxed mb-8">
                Join the mentorship that cuts through the noise and makes you a
                full-stack dev. One-time payment. Lifetime value.
              </p>

              {/* Offer Box */}
              <div className="bg-black/30 border border-white/10 p-6 rounded-lg shadow-inner">
                <p className="text-white text-lg font-semibold mb-2">
                  For{" "}
                  <span className="line-through text-red-400">₦170,000</span>{" "}
                  <span className="text-[#41B0FF] font-bold">₦85,000</span>, you
                  get:
                </p>
                <ul className="text-gray-300 space-y-3 text-sm md:text-md">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-[#41B0FF] mt-1" />
                    <span>Structured curriculum</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-[#41B0FF] mt-1" />
                    <span>Expert code reviews</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-[#41B0FF] mt-1" />
                    <span>Projects that make you stand out</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefits Overview */}
            <div className="bg-[#0C356A] rounded-lg shadow-lg p-6 md:p-10">
              <h3 className="text-2xl text-white font-bold mb-4">
                You’ll build things like:
              </h3>
              <ul className="text-gray-300 space-y-4 text-sm md:text-md">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-[#41B0FF]" />
                  <span>Full-stack e-Commerce App with auth</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-[#41B0FF]" />
                  <span>Interactive weather App</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-[#41B0FF]" />
                  <span>Real-time chat App</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-[#41B0FF]" />
                  <span>Portfolio-worthy capstone project</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-[#41B0FF]" />
                  <span>…and more</span>
                </li>
              </ul>

              <p className="mt-6 text-white font-semibold">
                Get the kind of help{" "}
                <span className="text-[#41B0FF]">YouTube</span> can’t give.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="benefits"
          className="scroll-mt-20 relative bg-[#0A1D56] py-20 rounded-lg shadow-lg"
        >
          <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Levels & Checklist */}
            <div className="bg-[#0C356A] rounded-lg shadow-lg p-6 md:p-10">
              <h3 className="text-2xl text-white font-bold mb-4">
                Four Structured Levels:
              </h3>
              <ul className="text-gray-300 text-sm md:text-md space-y-3 mb-6 list-disc pl-5">
                <li>
                  <strong>Level 1</strong> — HTML, CSS, JavaScript
                </li>
                <li>
                  <strong>Level 2</strong> — React, TypeScript, APIs, Modern UI
                </li>
                <li>
                  <strong>Level 3</strong> — Node, Databases, Full Stack Logic
                </li>
                <li>
                  <strong>Level 4</strong> — Next.js, Auth, Deployments, Testing
                </li>
              </ul>

              <p className="text-gray-300 text-sm italic mb-4">
                Know the <span className="text-white">“why”</span> behind the
                tools. Each level includes hands-on projects, feedback, and
                mentorship to keep you moving.
              </p>

              <div className="border-t border-white/10 pt-4">
                <ul className="text-gray-300 space-y-2 text-sm md:text-md">
                  <li className="flex items-center space-x-2">
                    <Map size={20} className="text-[#41B0FF]" />
                    <span>Learning roadmap</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Calendar size={20} className="text-[#41B0FF]" />
                    <span>Weekly project tasks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Code size={20} className="text-[#41B0FF]" />
                    <span>One-on-one code reviews</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MessageCircle size={20} className="text-[#41B0FF]" />
                    <span>Direct chat support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Briefcase size={20} className="text-[#41B0FF]" />
                    <span>Job-focused project portfolio</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users size={20} className="text-[#41B0FF]" />
                    <span>Lifetime access to the community</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Book size={20} className="text-[#41B0FF]" />
                    <span>Access to resources</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Headline & Value */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                What You Get for{" "}
                <span className="line-through text-red-400">₦170,000</span>{" "}
                <span className="text-[#41B0FF]">₦85,000</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Everything you need to go from <strong>confused</strong> to{" "}
                <span className="text-white font-semibold">hireable.</span>A
                clear roadmap, structured guidance, and expert mentorship all in
                one.
              </p>
              <p className="text-white font-semibold">
                No fluff. No subscriptions.{" "}
                <span className="text-[#41B0FF]">Just your growth.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Register Section */}
        <section
          id="register"
          className="scroll-mt-20 bg-[#0A1D56] py-20 px-6 rounded-lg shadow-lg"
        >
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to get serious?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-2">
              Get <span className="text-white font-semibold">unstuck</span>. Get{" "}
              <span className="text-white font-semibold">mentored</span>.
            </p>
            <p className="text-xl md:text-2xl font-semibold mb-4">
              Get fullstacked for{" "}
              <span className="line-through text-red-400">₦170,000</span>{" "}
              <span className="text-[#41B0FF]">₦85,000</span> only.
            </p>
            <p className="text-md md:text-lg text-gray-300 mb-6">
              No subscription. No fluff.{" "}
              <span className="text-white font-semibold">
                Just your growth.
              </span>
              <br />
              <span className="text-[#41B0FF] font-medium">
                Only limited slots per season.
              </span>
            </p>

            {!showOptions ? (
              <button
                onClick={() => setShowOptions(true)}
                className="px-6 py-3 bg-[#41B0FF] text-[#0A1D56] font-semibold text-lg rounded-2xl shadow-md hover:bg-[#66c3ff] transition duration-300 cursor-pointer"
              >
                👉 Apply Now
              </button>
            ) : (
              <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
                <a
                  href="https://pay.squadco.com/link/232YAG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#41B0FF] text-[#0A1D56] font-semibold rounded-xl shadow hover:bg-[#66c3ff] transition"
                >
                  💳 Full Payment – ₦85,000
                </a>
                <a
                  href="https://pay.squadco.com/KFWVBN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[#41B0FF] text-[#41B0FF] font-semibold rounded-xl shadow hover:bg-[#41B0FF]/10 transition"
                >
                  🧾 Installment – ₦50,000
                </a>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Footer */}
      <footer className="bg-black py-6 text-center text-gray-500 text-sm space-y-1">
        <div>
          © {new Date().getFullYear()} GetFullStacked. All rights reserved.
        </div>
        <div>
          Developed by{" "}
          <a
            href="https://github.com/Edward-Ijeruh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#41B0FF] hover:underline"
          >
            Edward Ijeruh
          </a>
        </div>
      </footer>
    </div>
  );
}
