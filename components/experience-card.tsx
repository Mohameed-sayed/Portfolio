import Image from "next/image"
import Link from "next/link"
import { FileText } from "lucide-react"

interface ExperienceCardProps {
  title: string
  period: string
  organization?: string
  description: string
  certificateImage?: string
}

export default function ExperienceCard({ title, period, organization, description, certificateImage }: ExperienceCardProps) {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-200 dark:border-gray-600 h-full">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-blue-600 dark:text-blue-300 font-medium mb-1">{period}</p>
      {organization && <p className="text-gray-700 dark:text-gray-300 mb-3">{organization}</p>}
      <p className="text-gray-700 dark:text-gray-300">{description}</p>

      {certificateImage && (
        <div className="mt-4">
          <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
            <Link
              href={certificateImage}
              target="_blank"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-3"
            >
              <FileText className="h-4 w-4 mr-2" />
              View Certificate
            </Link>
            <div className="relative h-40 w-full overflow-hidden rounded-md border border-gray-200 dark:border-gray-600">
              <Image
                src={certificateImage}
                alt={`${title} Certificate`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
