import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Curriculum", href: "#curriculum" },
  { name: "Projects", href: "#projects" },
  { name: "Who it's for", href: "#audience" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a href="#hero" className="flex items-center font-bold text-xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span className="text-primary font-heading">{"<"}</span>
            <span className="font-heading inline-block me-2">GFS</span>
            <span className="text-primary font-heading">{"/>"}</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a key={item.name} href={item.href} className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group" whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg hover:shadow-primary/20 transition-all" asChild>
                <a href="#pricing">Join Now</a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-background border-b border-border">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.a key={item.name} href={item.href} className="block py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} whileTap={{ scale: 0.95 }}>
                  {item.name}
                </motion.a>
              ))}
              <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full" asChild>
                <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>
                  Join Now
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
