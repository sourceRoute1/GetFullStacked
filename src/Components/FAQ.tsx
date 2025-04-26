import { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "How much does it cost?",
      answer:
        "The mentorship is a one-time payment of ₦85,000. No hidden fees. No subscriptions.",
    },
    {
      question: "What does the payment cover?",
      answer:
        "You get:\n - A learning roadmap\n - 1-on-1 code reviews and mentorship\n - Real-world projects with feedback\n - Access to a private support channel\n - Ongoing community support even after you finish",
    },
    {
      question: "How do I pay?",
      answer: "Payment is via a secure payment link.",
    },
    {
      question: "Is there a refund?",
      answer:
        "Because this is a mentorship with limited slots and personalized time, there are no refunds. Only apply if you're ready to commit and do the work.",
    },
    {
      question: "Can I pay in two parts?",
      answer:
        "Yes, split payments are available: ₦50,000 upfront and ₦35,000 before the second week of mentorship.",
    },
    {
      question: "How long is the mentorship?",
      answer:
        "It’s self-paced but typically takes 8 weeks, depending on how fast you complete each level. You’ll get guidance and feedback as you go.",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "Not much—if you know how to Google things, you’re good to go. We start from the basics and ramp up gradually. You’ll get support every step of the way.",
    },
  ];

  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-[#0A1D56] py-20 px-6 rounded-lg shadow-lg"
    >
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/20">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left py-4 px-6 flex justify-between items-center text-lg font-semibold text-white hover:bg-[#0A1D56] focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-[#41B0FF]">
                  {open === index ? "-" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === index ? "max-h-[500px] py-4" : "max-h-0 py-0"
                }`}
              >
                <div className="px-6 text-gray-300">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
