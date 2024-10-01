function Projects() {
  return (
    <div className="my-14" id="projects">
      <h1 className="my-10 text-center text-5xl font-bold tracking-wider text-primary">
        My Projects
      </h1>
      <div className="p-4">
        <div className="my-8 flex flex-col items-center justify-around gap-4 p-4 sm:flex sm:flex-col sm:items-center sm:gap-5 md:flex-row md:justify-around">
          <img
            src="assignment_show.png"
            alt="assignment"
            className="mb-5 w-[100%] min-w-[250px] rounded-lg md:max-w-[40%] md:rounded-lg"
          />
          <p className="grow p-10 text-lg tracking-wider text-primary shadow-xl sm:w-96 sm:text-2xl">
            My React Projects that can track assignment this is a single page
            application using react-router context api and useReducers.
            <span className="mx-2">
              Check the project
              <a
                href="https://github.com/akiii22/Assignment_Tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 italic text-blue-500 underline"
              >
                here
              </a>
            </span>
          </p>
        </div>
        <div className="my-8 flex flex-col-reverse items-center justify-around gap-4 p-4 sm:flex sm:flex-col sm:items-center sm:gap-5 md:flex-row md:justify-around">
          <p className="grow p-10 text-lg tracking-wider text-primary shadow-lg sm:w-96 sm:text-2xl">
            My javascript application where you can deposit money withdraw and
            transfer money using javascript dom and some arrays manipulation.
            <span className="mx-2">
              Check the project
              <a
                href="https://github.com/akiii22/bankist_app"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 italic text-blue-500 underline"
              >
                here
              </a>
            </span>
          </p>
          <img
            src="bankist-show.png"
            alt="bank"
            className="mb-5 w-[100%] min-w-[250px] rounded-lg md:max-w-[40%] md:rounded-lg"
          />
        </div>
        <div className="my-8 flex flex-col items-center justify-around gap-4 p-4 sm:flex sm:flex-col sm:items-center sm:gap-5 md:flex-row md:justify-around">
          <img
            src="forkify-cover.png"
            alt="pizza"
            className="mb-5 w-[100%] min-w-[250px] rounded-lg md:max-w-[40%] md:rounded-lg"
          />
          <p className="grow p-10 text-lg tracking-wider text-primary shadow-lg sm:w-96 sm:text-2xl">
            A javascript project where you can search for your favorite pizza
            and you can add it to your favorite list and make your own recipe or
            pizza.{" "}
            <span className="mx-2">
              Check the project
              <a
                href="https://github.com/akiii22/forkify_app"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 italic text-blue-500 underline"
              >
                here
              </a>
            </span>
          </p>
        </div>
        <div className="my-8 flex flex-col-reverse items-center justify-around gap-4 p-4 sm:flex sm:flex-col sm:items-center sm:gap-5 md:flex-row md:justify-around">
          <p className="grow p-10 text-lg tracking-wider text-primary shadow-lg sm:w-96 sm:text-2xl">
            A React application that you can search for a movie and store in.
            The first project that introduce useEffect hook.{" "}
            <span className="mx-2">
              Check the project
              <a
                href="https://github.com/akiii22/MovieApp"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 italic text-blue-500 underline"
              >
                here
              </a>
            </span>
          </p>
          <img
            src="movie.png"
            alt="movie"
            className="mb-5 w-[100%] min-w-[250px] rounded-lg md:max-w-[40%] md:rounded-lg"
          />
        </div>
        <div className="my-8 flex flex-col items-center justify-around gap-4 p-4 sm:flex sm:flex-col sm:items-center sm:gap-5 md:flex-row md:justify-around">
          <img
            src="kcl-show.png"
            alt="kcl hardware"
            className="mb-5 w-[100%] min-w-[250px] rounded-lg md:max-w-[40%] md:rounded-lg"
          />
          <p className="grow p-10 text-lg tracking-wider text-primary shadow-lg sm:w-96 sm:text-2xl">
            Capstone project this is a full stack project that we build during
            our thesis this is a e-commerce website for a hardware shop with
            data visualization.{" "}
            <span className="mx-2">
              Check the project
              <a
                href="https://kclhardware.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 italic text-blue-500 underline"
              >
                here
              </a>
            </span>
          </p>
        </div>
        <div className="my-8 flex flex-col-reverse items-center justify-around gap-4 p-4 sm:flex sm:flex-col sm:items-center sm:gap-5 md:flex-row md:justify-around">
          <p className="grow p-10 text-lg tracking-wider text-primary shadow-lg sm:w-96 sm:text-2xl">
            A mapty project one of my course project where you can mark where
            you travel, this is a single page application. It uses a useReducer,
            Context api, React router.{" "}
            <span className="mx-2">
              Check the project
              <a
                href="https://github.com/akiii22/MaptyProject"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 italic text-blue-900 underline"
              >
                here
              </a>
            </span>
          </p>
          <img
            src="mapty-show.png"
            alt="mapty"
            className="mb-5 w-[100%] min-w-[250px] rounded-lg md:max-w-[40%] md:rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
