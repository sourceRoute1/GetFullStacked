"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const curriculum = [
  {
    weeks: "Week 1–2",
    title: "HTML, CSS, JS fundamentals",
    description:
      "Master the building blocks of web development with semantic HTML, modern CSS layouts, and JavaScript ES6+ features.",
    project: "Responsive landing page",
  },
  {
    weeks: "Week 3–4",
    title: "React + APIs",
    description:
      "Learn component-based architecture, hooks, state management, and how to fetch and display data from external APIs.",
    project: "Movie finder app",
  },
  {
    weeks: "Week 5–6",
    title: "Node.js + Express",
    description:
      "Build scalable server-side applications with Node.js runtime and Express framework, including routing and middleware.",
    project: "REST API backend",
  },
  {
    weeks: "Week 7–8",
    title: "SQL, MongoDB + Auth",
    description:
      "Master relational databases with SQL queries, work with NoSQL databases, and implement secure authentication with JWT tokens.",
    project: "Task manager with database",
  },
  {
    weeks: "Week 9–10",
    title: "Advanced Topics",
    description:
      "Explore WebSockets for real-time communication, state management patterns, and performance optimization techniques.",
    project: "Food ordering app", // Updated project
  },
  {
    weeks: "Week 11–12",
    title: "Capstone",
    description:
      "Design, build, and deploy your own fullstack application from scratch, applying everything you've learned.",
    project: "Deploy fullstack project",
  },
]

function Code({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

export function CurriculumSection() {
  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Curriculum & Timeline</h2>
          <p className="text-xl text-muted-foreground text-balance">12 weeks of structured learning and building</p>
        </motion.div>

        <div className="space-y-4">
          {curriculum.map((item, index) => (
            <motion.div
              key={item.weeks}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-primary font-mono mb-1">{item.weeks}</div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                      <Code className="w-4 h-4" />
                      {item.project}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
