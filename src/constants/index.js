const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 0.5, suffix: "+", label: "Years of Experience" },
  { value: 0.1, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 30, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality?? You ask?",
    desc: "Come, hold hands, and pray with us that the code compiles. Also, don't ask me how it works.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Unreliable Communication",
    desc: "Leaving you guessing at every step with little to no transparency or clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "Self-Certified Vibe Coder",
    desc: "No degrees, just vibes. Bugs fear me. I code it till it feels right — logic comes later (maybe). Deadlines fear us. We deliver when the stars align—or when we feel like it. Expect confusion, chaos, and maybe a PDF.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Git Github",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git Github",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Gagan Deep Yadav brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2024 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Gagan Deep Yadav's contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "October - December 2024",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Confused Client",
    mentions: "@stillwaiting",
    review:
      "Asked for a website, got a digital art installation that occasionally works as a website. The loading screen is just a GIF of a cat typing. Somehow got 5 stars on Google Maps???",
    imgPath: "/images/client1.png",
  },
  {
    name: "Stack Overflow Veteran",
    mentions: "@copypastepro",
    review:
      "Gagan's code is like modern art - nobody understands how it works, but it's provocative, gets the people going. 60% of the time, it works every time. Documentation? 'Check the vibes' he said.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Project Manager",
    mentions: "@deadlinewhat",
    review:
      "Asked for an estimated completion date, got a lecture on astrology and moon phases. The project was delivered during Mercury retrograde. Can't complain though - the bugs are features now.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Tech Lead",
    mentions: "@caffeinatedcoder",
    review:
      "His commit messages are just emojis and 'it works on my machine ¯\\_(ツ)_/¯'. The code runs on prayers and energy drinks. But hey, the users love it, probably because they're as confused as we are.",
    imgPath: "/images/client5.png",
  },
  {
    name: "QA Engineer",
    mentions: "@bugfinder",
    review:
      "Tried to break his code, but the code broke me instead. Error messages are just different types of laughter. The test environment is 'production' because 'that's where the real testing happens.'",
    imgPath: "/images/client4.png",
  },
  {
    name: "Senior Developer",
    mentions: "@legacy_code_survivor",
    review:
      "His code comments are just motivational quotes and memes. Variable names? 'thing1' to 'thing9001'. But somehow the system hasn't crashed in weeks. We're too scared to update it.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/gagan__0108/"
  },
  {
    name: "github",
    imgPath: "/images/github.svg",
    link: "https://github.com/gagan-0108"
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link: "https://x.com/Gagan__0108"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/gagan-deep-yadav-74b12a30a/"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
