import { motion } from "framer-motion";

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
    image:
      "https://lh4.googleusercontent.com/av0_b9ZlG07ZtUQZThaJBBjM5yJ0fxc3lYMH-wwmGc-liwLX6VZVUtm3QBQkVNx4yWkjXDM4x9lYOySXJ6FE8r6eECulHbxQ8RInzz-CU-yskxtmCvyV7FinW9-YyqkYUQ=w1280",
    message:
      "Before joining the Masterclass, I barely knew JavaScript. The training gave me a strong foundation, introduced core concepts, and made learning fun. If you’re serious about JavaScript, this is where to start!",
  },
  {
    name: "John Abasiono Cyril",
    role: "System and Application Analyst, Gigasec Services Limited",
    image:
      "https://lh4.googleusercontent.com/giYQdT4pNWuPCGM1vruPoyvp6c1_VsMZ4xI6RpgIWwJqDscWAGZLYyyAFdR-UzzVpobLO7IDaZuAWXoad3Neb2m6wLlsCyzpz0-WaVaC2UEHd-oy9y3EEzeW0mIOHVmt1g=w1280",
    message:
      "Thanks to SourceRoute’s mentorship, I gained solid programming fundamentals and a passion for coding. Their thorough explanations and real-world examples helped me become confident and creative with JavaScript. Highly recommended!",
  },
  {
    name: "Diepiriye Zeb-Obipi",
    role: "Web Developer",
    image:
      "https://lh5.googleusercontent.com/eAYnbq8B0zcqpUYfTqQOHGBytExNO90pml45H6mHykinEnTL1vanMHJuEFaW7o3cZmP4vZJxpiyW7hfa4ETn-CyAlIbOONLtcWtCZ06Cce8TKs72wnS3p6Mg1MWh2Rg7mQ=w1280",
    message:
      "Learning with SourceRoute was hands-on and practical. You build while learning, which helped me grasp things faster than just reading docs. It’s one of the best learning experiences I’ve had!",
  },
  {
    name: "Precious Worukwo",
    role: "MERN Developer",
    image:
      "https://lh6.googleusercontent.com/Duolrx7JEzAJpFxavFh_B2LbErjQpBZrhqkMBBr1GjVprELl9jtU94IjCtHRDncCLSnmp3lcN29-mhK7D0vtlCjPkjnECp9MNHpeNjVSZcmsuM7irKH6yuyP7A91cvtG3A=w1280",
    message:
      "The Masterclass transformed my skills! The structured curriculum, practical projects, and expert teaching helped me grow fast. Whether beginner or advanced, SourceRoute will definitely take you to the next level.",
  },
  {
    name: "David Chukunda",
    role: "Frontend Developer, Cinfores Limited",
    image:
      "https://lh3.googleusercontent.com/yLCgqGSBWUKdnQhcVemYI71cAkUmNuy7mb6pIRqS8Wyax1RxHdqnhkjPAY_iw3_PN0J0B2RTNPjxF0sPbpevCtIkcQX0y5y6ttc2zCLr61pzdsNrzBl5xJePsLv_hkUKpw=w1280",
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
