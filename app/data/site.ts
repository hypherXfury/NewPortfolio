export const site = {
  name: "Vaibhav Shrivastava",
  firstName: "Vaibhav",
  tagline: "Unity Developer & Game Programmer",
  email: "vaibhavsatna37@gmail.com",
  location: "Satna, India",
  timeZone: "Asia/Kolkata",
  timeZoneLabel: "IST",
  openToWork: true,
  resume: "/Vaibhav_Shrivastava_Resume.pdf",
  url: "https://vaibhavxdev.vercel.app",
  intro: [
    "I build real-time 3D tools and games in Unity and C#, from runtime mesh deformation systems to gameplay mechanics that hold a stable frame rate.",
    "Right now I'm engineering patient-specific anatomical visualization at GameEon Studios, and finishing a B.Tech in Computer Science at LNCT Bhopal.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/hypherXfury" },
    { label: "LinkedIn", href: "https://linkedin.com/in/vaibhavxfury9212" },
  ],
} as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
] as const;
