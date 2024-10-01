function Skills() {
  return (
    <>
      <h1 className="mb-24 text-center text-5xl tracking-wider text-primary">
        TechStack
      </h1>
      <div
        className="my-20 flex flex-wrap items-center justify-evenly"
        id="skills"
      >
        <div className="flex flex-col items-center justify-center gap-16 px-4 py-5">
          <h3 className="font-sans text-4xl tracking-widest text-primary">
            Languanges
          </h3>
          <img
            src="languanges.png"
            alt="languanges"
            className="h-84 w-96 shadow-lg sm:w-96"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-16 px-4 py-5">
          <h3 className="font-sans text-4xl tracking-widest text-primary">
            Frameworks
          </h3>
          <img
            src="frameworks.png"
            alt="frameworks"
            className="h-84 w-96 shadow-lg sm:w-96"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-16 px-4 py-5">
          <h3 className="font-sans text-4xl tracking-widest text-primary">
            Databases
          </h3>
          <img
            src="database.png"
            alt="database"
            className="h-84 w-96 shadow-lg sm:w-96"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-16 px-4 py-5">
          <h3 className="font-sans text-4xl tracking-widest text-primary">
            Version&Back-End
          </h3>
          <img
            src="version.png"
            alt="version"
            className="h-84 w-96 shadow-lg sm:w-96"
          />
        </div>
      </div>
    </>
  );
}

export default Skills;
