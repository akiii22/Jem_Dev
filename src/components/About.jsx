import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="mx-5 mt-52">
      <div
        className="navOpen mx-4 my-5 flex flex-col items-center justify-center gap-6 rounded-xl p-7 shadow-2xl sm:mx-auto sm:flex sm:items-center sm:justify-around"
        id="about"
      >
        <motion.h2
          ref={ref}
          className="px-4 text-3xl font-semibold text-secondary sm:text-5xl"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Who Am I
        </motion.h2>

        <motion.div
          className="rounded-lg px-10 py-6 sm:p-20"
          initial={{ opacity: 0.9, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ ease: "easeOut" }}
        >
          <p className="text-xl font-medium leading-9 tracking-wider text-secondary sm:text-2xl sm:leading-10">
            Hi, I'm Jerome R. Bulosan, a fresh graduate with a degree in
            Information Technology, majoring in Web Application Development. I’m
            passionate about building modern and responsive web applications and
            continuously learning new technologies to improve my skills.
            Although I don't have any formal work experience yet, I’ve dedicated
            my time to honing my skills through various personal projects,
            internships, and online courses. My technical skills include HTML5,
            CSS3, JavaScript, React, Node.js, and working with tools like Redux
            and Tailwind CSS. I’m eager to apply my knowledge in real-world
            scenarios, contribute to meaningful projects, and grow as a
            developer in a professional environment.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
