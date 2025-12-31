import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CreditCard } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Pricing & Enrollment</h2>
          <p className="text-xl text-muted-foreground text-balance">Invest in your future as a fullstack developer</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-primary/50 hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all">
            <div className="text-center mb-8">
              <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}>
                Limited spots available
              </motion.div>
              <div className="text-5xl md:text-6xl font-bold mb-2">
                ₦180,000
                <span className="text-2xl text-muted-foreground font-normal">/cohort</span>
              </div>
              <p className="text-muted-foreground">One-time payment for the full program</p>
            </div>

            <div className="space-y-4 mb-8">
              <motion.div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-default" whileHover={{ x: 4 }}>
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold">Duration</div>
                  <div className="text-sm text-muted-foreground">
                    12 weeks intensive program. <br />
                    3x live classes in a week <br />
                  </div>
                </div>
              </motion.div>
              <motion.div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-default" whileHover={{ x: 4 }}>
                <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold">Next Cohort</div>
                  <div className="text-sm text-muted-foreground">Starting February 9, 2026</div>
                </div>
              </motion.div>
              <motion.div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-default" whileHover={{ x: 4 }}>
                <CreditCard className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold">Payment Options</div>
                  <div className="text-sm text-muted-foreground">Installment plans available</div>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 rounded-full font-semibold shadow-lg hover:shadow-primary/30 transition-all" asChild>
                  <a href="https://pay.squadco.com/232YAG" target="_blank" rel="noopener noreferrer">
                    Join the Next Cohort
                  </a>
                </Button>
              </motion.div>
              <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="outline" className="w-full text-lg py-6 rounded-full font-semibold border-2 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all bg-transparent" asChild>
                  <a href="https://calendly.com/testmetry/getfullstacked" target="_blank" rel="noopener noreferrer">
                    Book a Call
                  </a>
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
