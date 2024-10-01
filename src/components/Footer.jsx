function Footer() {
  return (
    <footer className="flex flex-col justify-evenly gap-12 bg-tertiary py-6 text-primary sm:flex-row">
      <div className="flex flex-col items-center gap-12 sm:flex-row">
        <p className="px-2 text-lg tracking-widest">
          Follow me on social media:
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/jeromee.dev.22/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="facebook-logo.png" alt="facebook" className="h-8 w-8" />
          </a>
          <a
            href="https://www.instagram.com/xottic.jerome/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="instagram.png" alt="instagram" className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/jerome-bulosan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="linked.png" alt="linked" className="h-8 w-8" />
          </a>
          <a
            href="https://discord.com/users/den_jem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="discord.png" alt="discord" className="h-8 w-8" />
          </a>
          <a
            href="https://github.com/akiii22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="github.png" alt="github" className="h-8 w-8" />
          </a>
        </div>
      </div>
      <div className="">
        <p className="px-2 text-center text-lg tracking-wider">
          &copy; 2024 Jerome R. Bulosan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
