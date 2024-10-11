import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

function Skills() {
  return (
    <>
      <h1 className="mb-24 text-center text-5xl tracking-wider text-primary">
        TechStack
      </h1>
      <div
        className="my-20 flex flex-wrap items-center justify-evenly gap-8"
        id="tech"
      >
        <InView>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="flex flex-col items-center justify-center gap-16 px-4 py-5"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0 }}
            >
              <h3 className="font-sans text-4xl tracking-widest text-primary">
                Languages
              </h3>
              <img
                src="languanges.png"
                alt="languages"
                className="h-84 card w-96 rounded-md sm:w-96"
              />
            </motion.div>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              className="flex flex-col items-center justify-center gap-16 px-4 py-5"
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="font-sans text-4xl tracking-widest text-primary">
                Frameworks
              </h3>
              <img
                src="frameworks.png"
                alt="frameworks"
                className="h-84 card w-96 rounded-md sm:w-96"
              />
            </motion.div>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="flex flex-col items-center justify-center gap-16 px-4 py-5"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="font-sans text-4xl tracking-widest text-primary">
                Databases
              </h3>
              <img
                src="database.png"
                alt="database"
                className="h-84 card w-96 rounded-md sm:w-96"
              />
            </motion.div>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="flex flex-col items-center justify-center gap-16 px-4 py-5"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="font-sans text-4xl tracking-widest text-primary">
                Version & Back-End
              </h3>
              <img
                src="version.png"
                alt="version"
                className="h-84 card w-96 rounded-md sm:w-96"
              />
            </motion.div>
          )}
        </InView>
      </div>
    </>
  );
}

export default Skills;
