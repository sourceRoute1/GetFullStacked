import { motion } from "framer-motion";
import Cyril from "../assets/cyril.png";
import Evelyn from "../assets/eveIvy.png";
import Zeb from "../assets/zeb.png";
import Precious from "../assets/precious.png";
import David from "../assets/david.png";

export const testimonials = [
  {
    name: "Edward Ijeruh",
    role: "Web Developer",
    image:
      "https://img.freepik.com/premium-vector/man-face-vector_1072857-7643.jpg?w=900",
    message:
      "The mentorship is really top-notch. He simplified complex concepts and was always available to assist. I am filled with clarity, confidence, and structure with every interaction. Highly recommended!",
  },
  {
    name: "Evelyn Isaac",
    role: "Frontend (Web/Mobile) Developer, Cinfores Limited",
    image: Evelyn,
    message:
      "Before joining the Masterclass, I barely knew JavaScript. The training gave me a strong foundation, introduced core concepts, and made learning fun. If you’re serious about JavaScript, this is where to start!",
  },
  {
    name: "John Abasiono Cyril",
    role: "System and Application Analyst, Gigasec Services Limited",
    image: Cyril,
    message:
      "Thanks to SourceRoute’s mentorship, I gained solid programming fundamentals and a passion for coding. Their thorough explanations and real-world examples helped me become confident and creative with JavaScript. Highly recommended!",
  },
  {
    name: "Diepiriye Zeb-Obipi",
    role: "Web Developer",
    image: Zeb,
    message:
      "Learning with SourceRoute was hands-on and practical. You build while learning, which helped me grasp things faster than just reading docs. It’s one of the best learning experiences I’ve had!",
  },
  {
    name: "Precious Worukwo",
    role: "MERN Developer",
    image: Precious,
    message:
      "The Masterclass transformed my skills! The structured curriculum, practical projects, and expert teaching helped me grow fast. Whether beginner or advanced, SourceRoute will definitely take you to the next level.",
  },
  {
    name: "David Chukunda",
    role: "Frontend Developer, Cinfores Limited",
    image: David,
    message:
      "The JavaScript mentorship helped me conquer my fear of coding. His clear teaching style and well-structured materials made learning easy and enjoyable. I now feel confident and excited about coding. Thank you!",
  },
];

export function Testimonials() {
  return (
    <section
      className="scroll-mt-20 bg-[#0f172a] py-16 px-4 md:px-20 rounded-lg shadow-lg"
      id="testimonials"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Words from Mentees
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-[#1e293b] text-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              {testimonial.message}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
