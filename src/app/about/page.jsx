
import About from "@/components/About";

import { generateSEO } from "@/components/Seo.jsx";


export const metadata = generateSEO({
  title: "About Rajib Hasan | Full Stack Web Developer",
  description:
    "Learn more about Rajib Hasan, a passionate Full Stack Web Developer from Bangladesh skilled in React.js, Next.js, Node.js, Express.js and MongoDB. Focused on building modern, scalable and responsive web applications.",
  keywords: [
    "About Rajib Hasan",
    "Web Developer Bangladesh",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Portfolio Developer",
    "Freelance Web Developer",
    "Software Engineer Bangladesh",
  ],
  url: "/about",
});




export default function AboutPage() {
  return (
    <div>
<About />
    </div>
  );
}