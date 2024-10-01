function About() {
  return (
    <div className="mx-5 mt-52">
      <div
        className="mx-4 my-5 flex flex-col items-center justify-center gap-6 rounded-xl bg-transparent p-7 sm:mx-auto sm:flex sm:items-center sm:justify-around"
        id="about"
      >
        <h2 className="px-4 text-3xl font-semibold text-primary sm:text-5xl">
          Who Am I
        </h2>
        <div className="rounded-lg px-10 py-6 shadow-2xl sm:p-20">
          <p className="text-xl font-medium leading-9 tracking-wider text-primary sm:text-2xl sm:leading-10">
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
        </div>
      </div>
    </div>
  );
}

export default About;
