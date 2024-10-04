import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

function Home() {
  return (
    <div
      className="mx-6 my-20 flex flex-col items-center justify-center gap-4 sm:flex sm:flex-row sm:items-center sm:justify-around"
      id="home"
    >
      <InView>
        {({ inView, ref }) => (
          <motion.img
            ref={ref}
            src="home.png"
            alt="3dface"
            className="my-5 max-w-96 sm:max-w-[340px]"
            initial={{ x: -200, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 50, duration: 1 }}
          />
        )}
      </InView>

      <InView>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            className="space-y-3 px-10 py-10"
            initial={{ x: 200, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 1,
              delay: 0.2,
            }}
          >
            <h2 className="text-5xl font-bold tracking-wider text-primary">
              Welcome to My <span className="text-blue-200">Portfolio</span>
            </h2>
            <p className="text-2xl font-semibold text-primary">
              Explore my projects and learn more about my skills and experience.
            </p>
          </motion.div>
        )}
      </InView>
    </div>
  );
}

export default Home;
