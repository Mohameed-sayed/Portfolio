import {
  Github,
  ExternalLink,
  Code2,
  Store,
  ShoppingCart,
  Layers,
  Database,
  Layout,
  FileCode2
} from "lucide-react"

interface ProjectCardProps {
  title: string
  technologies: string[]
  description: string
  githubLink?: string
  liveLink?: string
  imageSrc?: string
}

// Function to determine which icon to show based on project title/technologies
function getProjectIcon(title: string, technologies: string[]) {
  const techString = technologies.join(" ").toLowerCase();
  const iconClass = "h-12 w-12 text-blue-500 dark:text-blue-400";

  if (title.toLowerCase().includes("e-commerce") || title.toLowerCase().includes("shop")) {
    return <ShoppingCart className={iconClass} />;
  } else if (title.toLowerCase().includes("agency") || title.toLowerCase().includes("car")) {
    return <Store className={iconClass} />;
  } else if (techString.includes("react") && techString.includes("typescript")) {
    return <Code2 className={iconClass} />;
  } else if (techString.includes("database") || techString.includes("sql")) {
    return <Database className={iconClass} />;
  } else {
    return <Layout className={iconClass} />;
  }
}

export default function ProjectCard({
  title,
  technologies,
  description,
  githubLink,
  liveLink,
  imageSrc
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition border border-gray-200 dark:border-gray-700 h-full flex flex-col">
      <div className="flex justify-center items-center p-6 bg-gray-100 dark:bg-gray-900">
        {imageSrc ? (
          <div className="w-16 h-16 flex items-center justify-center">
            <FileCode2 className="h-12 w-12 text-blue-500 dark:text-blue-400" />
          </div>
        ) : (
          <div className="w-16 h-16 flex items-center justify-center">
            {getProjectIcon(title, technologies)}
          </div>
        )}
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex space-x-4 mt-auto">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
