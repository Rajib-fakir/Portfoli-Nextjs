
import Contact from "@/components/Contact";

import { generateSEO } from "@/components/Seo.jsx";

export const metadata = generateSEO({
  title: "Contact Rajib Hasan | Hire Full Stack Web Developer",
  description:
    "Get in touch with Rajib Hasan for freelance projects, web development services, or collaboration. Available for React, Next.js, Node.js and MERN stack development work.",
  keywords: [
    "Contact Rajib Hasan",
    "Hire Web Developer Bangladesh",
    "Freelance Web Developer",
    "Full Stack Developer Contact",
    "MERN Stack Developer Hire",
    "React Developer Hire",
    "Next.js Developer Contact",
    "Node.js Developer Bangladesh",
    "Web Development Services",
    "Hire Freelancer Developer",
    "Software Engineer Contact",
    "Portfolio Contact Page",
    "Web Developer Email",
    "Freelancer Available",
  ],
  url: "/contact",
});
export default function AboutPage() {
  return (
    <div>
<Contact />
    </div>
  );
}