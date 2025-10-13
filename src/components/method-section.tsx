import { motion } from "framer-motion";
import { Code, Users, Globe, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const methods = [
  {
    icon: Code,
    title: "Learn by Building",
    description: "Every concept leads to a real project.",
  },
  {
    icon: Users,
    title: "Mentor Support",
    description: "Live guidance and code reviews.",
  },
  {
    icon: Globe,
    title: "Community Access",
    description: "Collaborate and learn with peers.",
  },
  {
    icon: Rocket,
    title: "Portfolio Ready",
    description: "Graduate with deploy-ready apps.",
  },
];

export function MethodSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">The GetFullStacked Method</h2>
          <p className="text-xl text-muted-foreground text-balance">A proven approach to mastering fullstack development</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, index) => (
            <motion.div key={method.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -8 }}>
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group cursor-default">
                <motion.div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors" whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }} transition={{ duration: 0.5 }}>
                  <method.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{method.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
