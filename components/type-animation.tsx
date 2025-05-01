"use client"

import { useState, useEffect } from "react"

interface TypeAnimationProps {
  text: string | string[]
  typingSpeed?: number
  delay?: number
  deleteSpeed?: number
  pauseBetweenTexts?: number
}

export function TypeAnimation({
  text,
  typingSpeed = 100,
  delay = 500,
  deleteSpeed = 50,
  pauseBetweenTexts = 2000
}: TypeAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [textArrayIndex, setTextArrayIndex] = useState(0)

  // Convert single string to array for consistent handling
  const textArray = Array.isArray(text) ? text : [text]
  const currentText = textArray[textArrayIndex]

  useEffect(() => {
    // Initial delay before typing starts
    const startTimeout = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!isTyping) return

    // Typing logic
    if (!isDeleting && currentIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }
    // Pause at the end of typing before deleting
    else if (!isDeleting && currentIndex >= currentText.length && textArray.length > 1) {
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseBetweenTexts)
      return () => clearTimeout(timeout)
    }
    // Deleting logic
    else if (isDeleting && displayText) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1))
        setCurrentIndex((prev) => prev - 1)
      }, deleteSpeed)
      return () => clearTimeout(timeout)
    }
    // Move to next text
    else if (isDeleting && !displayText) {
      setIsDeleting(false)
      setTextArrayIndex((prev) => (prev + 1) % textArray.length)
      setCurrentIndex(0)
    }
  }, [currentIndex, currentText, displayText, isDeleting, isTyping, textArray, textArrayIndex, typingSpeed, deleteSpeed, pauseBetweenTexts])

  return (
    <span className="relative">
      {displayText}
      <span
        className={`inline-block w-0.5 h-5 bg-blue-300 ml-0.5 animate-blink`}
      ></span>
    </span>
  )
}
