"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ExperienceCard from "@/components/experience-card"
import ImageGallery from "@/components/image-gallery"
import { useEffect } from "react"
import { TypeAnimation } from "@/components/type-animation"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"


export default function Home() {
  // Function to handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe all elements with the animate-on-scroll class
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-md backdrop-blur-md bg-opacity-80 dark:bg-opacity-80">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Mohamed EL-Sayed</h1>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li>
                  <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                    Contact
                  </a>
                </li>
                <li>
                  <Link href="/ieee" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                    IEEE Gallery
                  </Link>
                </li>
              </ul>
            </nav>
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl shadow-blue-900/20">
              <Image
                src="/profile-image.jpg"
                alt="Mohamed Sayed"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
                priority
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Mohamed Sayed</h1>
            <h2 className="text-2xl text-blue-600 dark:text-blue-300 mb-6">
              <TypeAnimation
                text={[
                  "Junior Front-End Developer",
                  "React Developer",

                ]}
              />
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Skilled in ReactJS and TypeScript, with hands-on experience in building responsive and user-friendly web
              applications. Strong foundation in database management, problem-solving, and software engineering
              principles.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 transform hover:-translate-y-1"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-blue-500 text-blue-600 dark:text-blue-300 rounded-md hover:bg-blue-100 dark:hover:bg-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-800/20 transform hover:-translate-y-1"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About/Education Section */}
      <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100 hover:shadow-xl hover:shadow-blue-900/10">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Education</h3>
              <div className="mb-4">
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">B.Sc. in Computer Science</h4>
                <p className="text-gray-700 dark:text-gray-300">Ahram Canadian University</p>
                <p className="text-gray-700 dark:text-gray-300">Level Four</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300 hover:shadow-xl hover:shadow-blue-900/10">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Volunteering</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3 mt-0.5">
                    <span className="h-3 w-3 rounded-full bg-blue-500 dark:bg-blue-400"></span>
                  </span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">PR Volunteer</p>
                    <p className="text-gray-700 dark:text-gray-300">ENACTUS ACU (2022–2023)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3 mt-0.5">
                    <span className="h-3 w-3 rounded-full bg-blue-500 dark:bg-blue-400"></span>
                  </span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">IT Volunteer</p>
                    <p className="text-gray-700 dark:text-gray-300">IEEE HSB (2024–2025)</p>
                  </div>
                </li>
              </ul>

              {/* IEEE Gallery Preview */}
              <div className="mt-6">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">IEEE Gallery</h4>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">View photos from IEEE volunteer activities</p>
                  <Link
                    href="/ieee"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                  >
                    View full gallery →
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((index) => (
                    <div
                      key={index}
                      className="relative aspect-square overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity bg-gray-100 dark:bg-gray-800"
                      onClick={() => { window.location.href = '/ieee' }}
                    >
                      <Image
                        src={`/images/ieee/IMG_${index === 0 ? '0056' : index === 1 ? '0088' : '0832'}.JPG`}
                        alt={`IEEE Gallery preview ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 33vw, 100px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
            Experience
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100">
              <ExperienceCard
                title="ITI Summer Training"
                period="2022–2023"
                description="Participated in intensive training programs focused on web development technologies and best practices."
              />
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300">
              <ExperienceCard
                title="CIB Internship"
                period="2023–2024"
                description="SEP Round - Gained practical experience in a professional banking environment, working on real-world projects."
              />
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-500">
              <ExperienceCard
                title="Coding Instructor"
                period="2024–2025"
                organization="ISchool"
                description="Taught programming concepts and web development to students, enhancing communication and leadership skills."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Web Development</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="HTML" />
                <SkillBadge name="CSS" />
                <SkillBadge name="JavaScript" />
                <SkillBadge name="ReactJS" />
                <SkillBadge name="TypeScript" />
                <SkillBadge name="Tailwind CSS" />
              </div>
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Database</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="SQL" />
                <SkillBadge name="XAMPP" />
              </div>
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Concepts</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="OOP" />
                <SkillBadge name="Data Structures" />
                <SkillBadge name="Algorithms" />
              </div>
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-400">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Languages</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Arabic (Native)" />
                <SkillBadge name="English (Good)" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
            Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100">
              <ProjectCard
                title="Car Agency Website"
                technologies={["ReactJS", "NodeJS", "ExpressJS", "SQL", "Bootstrap"]}
                description="An e-commerce platform with separate admin and user interfaces. Includes authentication and authorization features."
                githubLink=""
                liveLink="https://car-agency-demo.vercel.app"
              />
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300">
              <ProjectCard
                title="Clothes E-commerce (Tala Brand)"
                technologies={["ReactJS"]}
                description="E-commerce website with admin and user interfaces."
                githubLink="https://github.com/Mohameed-sayed/Tala_Brand.git"
                liveLink="https://tala-brand.vercel.app"
              />
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-500">
              <ProjectCard
                title="Product Builder"
                technologies={["React", "TypeScript"]}
                description="Web app allowing users to build custom product configurations."
                githubLink="https://github.com/Mohameed-sayed/Products-Builder-ReactTS-Project.git"
                liveLink="https://product-builder-demo.vercel.app"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
            Contact Me
          </h2>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <a
                href="mailto:example@email.com"
                className="flex items-center p-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/20"
              >
                <Mail className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-3" />
                <span className="text-gray-900 dark:text-white">Email Me</span>
              </a>
              <a
                href="tel:+20 01061258725"
                className="flex items-center p-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/20"
              >
                <Phone className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-3" />
                <span className="text-gray-900 dark:text-white">+20 01061258725</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-el-sayed-4b894032a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/20"
              >
                <Linkedin className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-3" />
                <span className="text-gray-900 dark:text-white">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Mohameed-sayed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/20"
              >
                <Github className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-3" />
                <span className="text-gray-900 dark:text-white">GitHub</span>
              </a>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-2" />
              <span className="text-gray-900 dark:text-white">Cairo, Egypt</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <p>© {new Date().getFullYear()} Mohamed Sayed. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}