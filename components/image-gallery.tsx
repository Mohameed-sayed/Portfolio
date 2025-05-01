"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, Image as ImageIcon } from "lucide-react"

interface ImageGalleryProps {
  images?: string[]
  title?: string
  placeholderCount?: number
}

export default function ImageGallery({
  images = [],
  title,
  placeholderCount = 6
}: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageError, setImageError] = useState<Record<number, boolean>>({})

  // Use placeholder images if no images are provided or if there's an error loading an image
  const hasRealImages = images.length > 0
  const displayCount = hasRealImages ? images.length : placeholderCount

  const openModal = (index: number) => {
    if (!hasRealImages) return // Don't open modal for placeholder images
    setCurrentIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      goToPrevious()
    } else if (e.key === "ArrowRight") {
      goToNext()
    } else if (e.key === "Escape") {
      closeModal()
    }
  }

  const handleImageError = (index: number) => {
    setImageError(prev => ({ ...prev, [index]: true }))
  }

  return (
    <div className="w-full">
      {title && <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{title}</h4>}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {Array.from({ length: displayCount }).map((_, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity bg-gray-100 dark:bg-gray-800"
            onClick={() => openModal(index)}
          >
            {hasRealImages && !imageError[index] ? (
              <Image
                src={images[index]}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
                onError={() => handleImageError(index)}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon className="h-12 w-12 text-gray-400 dark:text-gray-600" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal for fullscreen view */}
      {isModalOpen && hasRealImages && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-gray-800 rounded-full"
            onClick={closeModal}
          >
            <X className="h-6 w-6" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-gray-800 rounded-full"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <div className="relative h-[80vh] w-[80vw] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {!imageError[currentIndex] ? (
              <Image
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                fill
                className="object-contain"
                onError={() => handleImageError(currentIndex)}
                sizes="80vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon className="h-24 w-24 text-gray-600" />
                <p className="text-white absolute mt-32">Image could not be loaded</p>
              </div>
            )}
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-gray-800 rounded-full"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  )
}
