"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Ready to get <span className="text-primary">full-stack confident?</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance leading-relaxed">Start building apps that actually work. Join the next cohort today.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-primary/30 transition-all group" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Join the Next Cohort
                  <motion.div className="inline-block ml-2" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}>
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full font-semibold border-2 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all bg-transparent" asChild>
                <a href="https://calendly.com/testmetry/getfullstacked" target="_blank" rel="noopener noreferrer">
                  Book a Call
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="pt-12 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <a href="mailto:hello@getfullstacked.dev" className="text-sm font-medium">
                hello@getfullstacked.dev
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a href="#curriculum" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Curriculum
              </a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </a>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} GetFullStacked. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
