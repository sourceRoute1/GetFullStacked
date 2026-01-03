import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

// const projects = [
//   {
//     title: "E-commerce Platform",
//     image: "/modern-ecommerce-dashboard.png",
//   },
//   {
//     title: "Task Management App",
//     image: "/task-management-app.png",
//   },
//   {
//     title: "Social Media Dashboard",
//     image: "/social-media-analytics-dashboard.png",
//   },
//   {
//     title: "Real-time Chat Application",
//     image: "/modern-chat-app.png",
//   },
// ];

const testimonials = [
  {
    name: "Edward Ijeruh",
    role: "Frontend Developer at TechCorp",
    content: "The mentorship is really top-notch. He simplified complex concepts and was always available to assist. I am filled with clarity, confidence, and structure with every interaction.",
  },
  {
    name: "Evelyn Isaac",
    role: "Frontend (Web/Mobile) Developer at Cinfores Limited",
    content: "Before joining the Masterclass, I barely knew JavaScript. The training gave me a strong foundation, introduced core concepts, and made learning fun.",
  },
  {
    name: "John Abasiono Cyril",
    role: "System and Application Analyst, Gigasec Services Limited",
    content: "Thanks to this mentorship, I gained solid programming fundamentals and a passion for coding. Their thorough explanations and real-world examples helped me become confident and creative with JavaScript.",
  },
];

export function TestimonialSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Words from Community</h2>
          <p className="text-xl text-muted-foreground text-balance">See what our alumni say about GetFullStacked</p>
        </motion.div>

        {/* Project Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {projects.map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all group">
                <div className="aspect-video overflow-hidden">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-primary font-mono mt-1">Built with GetFullStacked</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div> */}

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-4 leading-relaxed">{testimonial.content}</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
