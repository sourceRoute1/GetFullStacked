import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const curriculum = [
  {
    weeks: "Week 1-2",
    title: "Web Foundations: Build Interfaces That Don't Break",
    goal: "Master the building blocks of web development with semantic HTML, modern CSS layouts,  and JavaScript ES6+ features.",
    description: ["Semantic HTML for accessibility and structure", "Modern CSS (Flexbox, Grid, responsive design)", "JavaScript (ES6+) for behavior and interaction", "How browsers render and handle user input", "Common layout and responsiveness mistakes—and how to avoid them"],
    project: "Product Waitlist Landing Page",
  },
  {
    weeks: "Week 3-4",
    title: "Frontend Engineering with React: Build Data-Driven UIs",
    goal: "Learn component-based architecture, hooks, state management, and how to fetch and display data from external APIs",
    description: ["Component-based architecture", "React hooks (state, effects, custom hooks)", "API consumption and async data handling", "Loading, error, and empty states", "Performance basics and rendering behavior", "Environment variables and configuration"],
    project: "Search-Based Movie Discovery App",
  },
  {
    weeks: "Week 5-6",
    title: "Backend Development with Node.js & Express: Build Reliable APIs",
    goal: "Build server-side applications with Node.js runtime and Express framework.",
    description: ["Node.js runtime fundamentals", "Express routing and middleware", "Request/response lifecycle", "Data validation and error handling", "Pagination, filtering, and API structure", "Designing APIs for frontend consumption"],
    project: "Kanban Task Management API",
  },
  {
    weeks: "Week 7-8",
    title: "Data & Authentication: Build Systems People Trust",
    goal: "Master relational databases with SQL queries, work with NoSQL databases, and implement secure authentication",
    description: ["Relational databases with SQL", "NoSQL databases with MongoDB", "Data modeling and schema decisions", "Secure authentication with JWT", "Authorization and access control", "Common security mistakes and best practices"],
    project: "Food ordering app",
  },
  {
    weeks: "Week 9-10",
    title: "Real-Time Communication: Go Beyond Request & Response",
    goal: "Build features that update instantly and scale responsibly",
    description: ["Server-Sent Events (SSE)", "WebSockets fundamentals", "Real-time architecture trade-offs", "Connection lifecycle and failure handling", "When real-time is necessary—and when it's not"],
    project: "Mini social media app", // Updated project
  },
  {
    weeks: "Week 11-12",
    title: "Capstone",
    goal: "Design, build, and deploy your own complete product from scratch, applying everything you've learnt.",
    description: ["Design, build, deploy, and submit a production-ready application."],
    project: "End-to-End Fullstack Application",
  },
];

function Code({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function CurriculumSection() {
  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Curriculum & Timeline</h2>
          <p className="text-xl text-muted-foreground text-balance">12 weeks of structured learning and building</p>
        </motion.div>

        <div className="space-y-4">
          {curriculum.map((item, index) => (
            <motion.div key={item.weeks} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-primary font-mono mb-1">{item.weeks}</div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                      <Code className="w-4 h-4" />
                      {item.project}
                    </div>
                  </div>
                </div>
                <div>
                  <details className="group w-full">
                    <summary className="list-none flex items-start justify-between w-full cursor-pointer">
                      <p className="text-md text-muted-foreground leading-relaxed mb-4 group-hover:text-primary">{item.goal}</p>
                      <svg className="w-4 h-4 text-primary transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <ul className="flex flex-col gap-2 text-sm">
                      {item.description.map((listItem) => (
                        <li key={listItem} className="list-disc ms-10">
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
