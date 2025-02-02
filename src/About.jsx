export default function About() {
  return (
    <div id="about">
      <div className="flex flex-col items-center justify-center h-30">
        <div className="text-2xl font-semibold text-gray-700 h-20 mt-9">
          <h1>ABOUT ME</h1>
        </div>
        <div className="border-t-2 border-gray-300 w-full"></div>
        
      </div>
      {/* Name and image */}
      <div className="flex justify-between">
        <div className="w-[650px] pl-32 mt-30">
          <p className="text-lg text-gray-500 leading-relaxed">
            Hello! My name is <strong>Precious Obinna Ohanyere</strong>, and I
            am a passionate full-stack developer with a strong focus on backend
            technologies. Over the past few years, While my primary focus is on{" "}
            <strong>Python</strong> for backend development, I also have strong
            proficiency in <strong>JavaScript (React, Vue and Express)</strong>{" "}
            and <strong>Golang</strong>, enabling me to contribute across the
            full stack.I have a keen interest in building scalable applications,
            particularly those that drive social impact.
            <br />
            <br />
            Currently, I am leading the development of Volcred, a platform that
            connects volunteers with organizations, helping bridge the gap
            between skills and opportunities. My work involves designing the
            server-side logic, optimizing the backend and frontend, deployment,
            and ensuring the platform’s architecture is both secure and
            efficient.
            <br />
            <br />I am always open to collaborating on meaningful projects and
            engaging in discussions about technology, startups, and the future
            of software development. Let’s connect and build something amazing
            together!
          </p>
          <div className="border-t-2 text-gray-400 mt-10"></div>
          <div className="flex w-[650px] text-gray-500 justify-between">
          <div><h2>Phone</h2><p className="mt-3"><a href="tel:+2347032937596">+2347032937596</a></p></div>
          <div className="mr-32"><h2>Email</h2><p className="mt-3"><a href="mailto:obbyprecious24@gmail.com"> Obbyprecious24@gmail.com </a></p></div>
        </div>
        </div>
        <div className="w-[650px] pr-32 mt-30 flex h-[600px]">
          <div className="relative">
            <img
              src="/src/assets/my_pic.jpg"
              alt=""
              className="h-[600px] object-center"
            />
            <div className="absolute bottom-0 left-0 w-full flex items-center justify-center text-white text-2xl font-bold bg-black h-[100px]">
              <a href="https://www.linkedin.com/in/precious-o-3b2b08209/" target="blank"><img src="/src/assets/logo/linkedin.svg" alt="Linkedin logo" className="w-[40px] h-[40px]"/></a>
             <a href="https://www.x.com" className="mr-10 ml-10"> <img src="/src/assets/logo/twitter.svg" alt="X logo" className="w-[40px] h-[40px]" /></a>
              <a href="https://www.github.com/preqsy" target="blank"><img src="/src/assets/logo/github.svg" alt="github logo" className="w-[40px] h-[40px]"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
