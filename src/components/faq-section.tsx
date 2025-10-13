import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need prior coding experience?",
    answer: "No! GetFullStacked is designed for complete beginners. We start from the fundamentals and build up your skills progressively. All you need is a computer, internet connection, and commitment to learn.",
  },
  {
    question: "What if I can't attend live sessions?",
    answer: "All live sessions are recorded and available for replay. You can watch them at your own pace. However, we highly recommend attending live sessions for real-time interaction with mentors and peers.",
  },
  {
    question: "Can I pay in installments?",
    answer: 'Yes! We offer flexible payment plans. You can split the payment into 2 or 3 installments. Contact us via the "Book a Call" button to discuss payment options that work for you.',
  },
  {
    question: "What happens after the course?",
    answer: "After completing the program, you'll have a portfolio of real projects, lifetime access to course materials, and continued access to our community. We also provide job search support and career guidance.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground text-balance">Everything you need to know about GetFullStacked</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.01 }}>
                <AccordionItem value={`item-${index}`} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/10 transition-all hover:border-primary/30">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6 hover:text-primary transition-colors">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
