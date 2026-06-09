
import Services from "@/components/Services";
import { generateSEO } from "@/components/Seo.jsx";

export const metadata = generateSEO({
  title: "Web Development Services | Rajib Hasan",
  description:
    "Professional Full Stack Web Development services by Rajib Hasan. Specializing in React.js, Next.js, Node.js, Express.js and MongoDB to build fast, scalable and responsive web applications.",
  keywords: [
    "Web Development Services",
    "Full Stack Developer Services",
    "Hire Web Developer Bangladesh",
    "React Development Services",
    "Next.js Development Services",
    "Node.js Backend Development",
    "MERN Stack Development",
    "Frontend Development Services",
    "Backend Development Services",
    "Custom Web Application Development",
    "Freelance Web Developer Services",
    "Website Design and Development",
    "API Development Services",
    "Responsive Website Development",
  ],
  url: "/services",
});
export default function AboutPage() {
  return (
    <div>
<Services />
    </div>
  );
}