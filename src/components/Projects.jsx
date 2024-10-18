import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Button from "./Button";

function Projects() {
  return (
    <div className="my-14" id="projects">
      <h1 className="my-10 text-center text-5xl font-bold tracking-wider text-primary">
        My Projects
      </h1>
      <div className="p-4">
        <InView>
          {({ inView, ref }) => (
            <div
              className="my-8 flex flex-col items-center justify-around gap-4 p-4 sm:flex sm:flex-col sm:items-center sm:gap-5 md:flex-row md:justify-around"
              ref={ref}
            >
              <motion.img
                src="assignment_show.png"
                alt="assignment"
                className="mb-5 w-[100%] min-w-[250px] rounded-lg md:max-w-[40%] md:rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <motion.p
                className="grow p-10 text-lg tracking-wider text-primary shadow-xl sm:w-96 sm:text-2xl"
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                My React Projects that can track assignments. This is a single
                page application using React Router, Context API, and
                useReducers.
                <span className="mx-2">
                  Check the
                  <Button>
                    <a
                      href="https://github.com/akiii22/Assignment_Tracker"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 tracking-wider text-primary"
                    >
                      project here...
                    </a>
                  </Button>
                </span>
              </motion.p>
            </div>
          )}
        </InView>

        {/* Bankist Project */}
        <InView>
          {({ inView, ref }) => (
            <div
              className="my-8 flex flex-col-reverse items-center justify-around gap-4 p-4 sm:flex sm:flex-col sm:items-center sm:gap-5 md:flex-row md:justify-around"
              ref={ref}
            >
              <motion.p
                className="grow p-10 text-lg tracking-wider text-primary shadow-lg sm:w-96 sm:text-2xl"
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                My JavaScript application where you can deposit money, withdraw,
                and transfer money using JavaScript DOM and array manipulation.
                <span className="mx-2">
                  Check the
                  <Button>
                    <a
                      href="https://github.com/akiii22/bankist_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 tracking-wider text-primary"
                    >
                      project here...
                    </a>
                  </Button>
                </span>
              </motion.p>
              <motion.img
                src="bankist-show.png"
                alt="bank"
                className="mb-5 w-[100%] min-w-[250px] rounded-lg md:max-w-[40%] md:rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <div
              className="my-8 flex flex-col items-center justify-around gap-4 p-4 sm:flex sm:flex-col sm:items-center sm:gap-5 md:flex-row md:justify-around"
              ref={ref}
            >
              <motion.img
                src="forkify-cover.png"
                alt="pizza"
                className="mb-5 w-[100%] min-w-[250px] rounded-lg md:max-w-[40%] md:rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <motion.p
                className="grow p-10 text-lg tracking-wider text-primary shadow-lg sm:w-96 sm:text-2xl"
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                A JavaScript project where you can search for your favorite
                pizza and add it to your favorites or create your own recipe.
                <span className="mx-2">
                  Check the
                  <Button>
                    <a
                      href="https://github.com/akiii22/forkify_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 tracking-wider text-primary"
                    >
                      project here...
                    </a>
                  </Button>
                </span>
              </motion.p>
            </div>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <div
              className="my-8 flex flex-col-reverse items-center justify-around gap-4 p-4 sm:flex sm:flex-col sm:items-center sm:gap-5 md:flex-row md:justify-around"
              ref={ref}
            >
              <motion.p
                className="grow p-10 text-lg tracking-wider text-primary shadow-lg sm:w-96 sm:text-2xl"
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                A React application where you can search for movies and save
                them to your list. The first project that introduced me to the
                useEffect hook.
                <span className="mx-2">
                  Check the
                  <Button>
                    <a
                      href="https://github.com/akiii22/MovieApp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 tracking-wider text-primary"
                    >
                      project here...
                    </a>
                  </Button>
                </span>
              </motion.p>
              <motion.img
                src="movie.png"
                alt="movie"
                className="mb-5 w-[100%] min-w-[250px] rounded-lg md:max-w-[40%] md:rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <div
              className="my-8 flex flex-col items-center justify-around gap-4 p-4 sm:flex sm:flex-col sm:items-center sm:gap-5 md:flex-row md:justify-around"
              ref={ref}
            >
              <motion.img
                src="kcl-show.png"
                alt="kcl hardware"
                className="mb-5 w-[100%] min-w-[250px] rounded-lg md:max-w-[40%] md:rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <motion.p
                className="grow p-10 text-lg tracking-wider text-primary shadow-lg sm:w-96 sm:text-2xl"
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Capstone project: This is a full-stack project we built during
                our thesis, an e-commerce website for a hardware shop with data
                visualization.
                <span className="mx-2">
                  Check the
                  <Button>
                    <a
                      href="https://kclhardware.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 tracking-wider text-primary"
                    >
                      project here...
                    </a>
                  </Button>
                </span>
              </motion.p>
            </div>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <div
              className="my-8 flex flex-col-reverse items-center justify-around gap-4 p-4 sm:flex sm:flex-col sm:items-center sm:gap-5 md:flex-row md:justify-around"
              ref={ref}
            >
              <motion.p
                className="grow p-10 text-lg tracking-wider text-primary shadow-lg sm:w-96 sm:text-2xl"
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                A mapty project, one of my course projects where you can mark
                where you travel. This is a single page application. It uses a
                useReducer, Context API, React Router.{" "}
                <span className="mx-2">
                  Check the
                  <Button>
                    <a
                      href="https://github.com/akiii22/MaptyProject"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 tracking-wider text-primary"
                    >
                      project here...
                    </a>
                  </Button>
                </span>
              </motion.p>
              <motion.img
                src="mapty-show.png"
                alt="mapty"
                className="mb-5 w-[100%] min-w-[250px] rounded-lg md:max-w-[40%] md:rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          )}
        </InView>
      </div>
    </div>
  );
}

export default Projects;
