"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import ImageGallery from "@/components/image-gallery"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"

// Get all IEEE images
const ieeeImages = Array.from({ length: 12 }).map((_, i) => {
  // Map the actual image filenames from the directory
  const imageFiles = [
    "IMG_0056.JPG",
    "IMG_0088.JPG",
    "IMG_0832.jpg",
    "IMG_20250215_230536.jpg",
    "IMG_2770.JPG",
    "IMG_2771.JPG",
    "IMG_2772.JPG",
    "IMG_2793.JPG",
    "IMG_8792.JPG",
    "IMG_9583.JPG",
    "IMG_9584.JPG",
    "IMG_9962.JPG"
  ]
  
  // Return the path to each image
  return `/images/ieee/${imageFiles[i]}`
})

export default function IEEEGallery() {
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
          <div className="flex items-center space-x-4">
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                    Home
                  </Link>
                </li>
              </ul>
            </nav>
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </header>

      {/* IEEE Gallery Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Back to Home
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
            IEEE Volunteer Gallery
          </h1>
          
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200">
            A collection of memorable moments from IEEE volunteer activities and events. These images showcase the collaborative spirit and dedication of our IEEE community.
          </p>
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300">
            <ImageGallery
              title="IEEE Volunteer Activities"
              images={ieeeImages}
            />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Mohamed Sayed. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
