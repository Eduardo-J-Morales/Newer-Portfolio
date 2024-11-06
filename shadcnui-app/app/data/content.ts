import { Project, Skill } from '@/app/types/index';
export const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL",
      tags: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&h=900",
      github: "https://github.com",
      link: "https://demo.com"
    },
    {
      title: "AI Image Generator",
      description: "An AI-powered image generation tool using DALL-E API",
      tags: ["Next.js", "OpenAI", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?q=80&w=1600&h=900",
      github: "https://github.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      tags: ["React", "Firebase", "Material-UI"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&h=900",
      link: "https://demo.com"
    }
  ];
  
  export const skills: Skill[] = [
    { name: "TypeScript", icon: "code", level: 90 },
    { name: "React", icon: "component", level: 95 },
    { name: "Node.js", icon: "server", level: 85 },
    { name: "Python", icon: "terminal", level: 80 },
    { name: "AWS", icon: "cloud", level: 75 },
    { name: "Docker", icon: "container", level: 85 }
  ];
  
//   export const experiences: Experience[] = [
//     {
//       title: "Senior Software Engineer",
//       company: "Tech Corp",
//       period: "2020 - Present",
//       description: "Leading development of enterprise applications using React and Node.js"
//     },
//     {
//       title: "Full Stack Developer",
//       company: "StartupX",
//       period: "2018 - 2020",
//       description: "Built and maintained multiple web applications using modern technologies"
//     },
//     {
//       title: "Software Developer",
//       company: "Digital Solutions",
//       period: "2016 - 2018",
//       description: "Developed and optimized web applications for various clients"
//     }
//   ];
  