"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 pt-16">
      {/* Background code pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <pre className="text-xs font-mono text-primary leading-relaxed">
          {`const developer = {
  skills: ['React', 'Node.js', 'MongoDB'],
  projects: ['Portfolio', 'API', 'Chat App'],
  status: 'building'
};

function buildFuture() {
  return learn() + practice() + deploy();
}`}
        </pre>
      </div>

      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 hover:border-primary/50 transition-colors cursor-default" whileHover={{ scale: 1.05 }}>
          <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}>
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>
          <span className="text-sm text-muted-foreground">Next cohort starts soon</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Master Fullstack Development by <span className="text-primary">Building Real-World Apps</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
          A 12-week guided program that takes you from beginner to confident developer with hands-on projects and mentor support.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-primary/30 transition-all" asChild>
              <a href="#pricing">Join the Next Cohort</a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full font-semibold border-2 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all bg-transparent" asChild>
              <a href="https://calendly.com/testmetry/getfullstacked" target="_blank" rel="noopener noreferrer">
                Book a Call
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-16 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Code2 className="w-4 h-4" />
          <span>Learn by building • Deploy real projects • Get hired</span>
        </motion.div>
      </div>
    </section>
  );
}
