interface ExperienceCardProps {
  title: string
  period: string
  organization?: string
  description: string
}

export default function ExperienceCard({ title, period, organization, description }: ExperienceCardProps) {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-200 dark:border-gray-600 h-full">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-blue-600 dark:text-blue-300 font-medium mb-1">{period}</p>
      {organization && <p className="text-gray-700 dark:text-gray-300 mb-3">{organization}</p>}
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  )
}
