
import Projects from "@/components/Projects";
import { generateSEO } from "@/components/Seo.jsx";

export const metadata = generateSEO({
  title: "Projects | Rajib Hasan Full Stack Portfolio",
  description:
    "Explore projects built by Rajib Hasan, a Full Stack Web Developer specializing in React.js, Next.js, Node.js, Express.js and MongoDB. Featuring modern, scalable and responsive web applications.",
  keywords: [
    "Rajib Hasan Projects",
    "Web Developer Portfolio",
    "Full Stack Projects",
    "MERN Stack Projects",
    "React Projects",
    "Next.js Projects",
    "Node.js Projects",
    "MongoDB Projects",
    "Frontend Projects",
    "Backend Projects",
    "Web Development Portfolio",
    "Freelance Developer Projects",
    "API Projects",
    "Real World Web Apps",
    "Software Engineer Projects",
  ],
  url: "/projects",
});
export default function AboutPage() {
  return (
    <div>
<Projects />
    </div>
  );
}