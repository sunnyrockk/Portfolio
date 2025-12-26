import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "Life-Biotech",
      year: "2025",
      description:
        "A full-stack website built for Life-Biotech, a pharmaceutical manufacturing brand — includes a secure and smart login authentication system.",
      image: "/modern-ecommerce-dashboard.png",
      technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      github: "#",
      live: "https://lifebiotech.in",
    },
    {
      title: "Quite-Connect",
      year: "2025",
      description:
        "Quite-Connect is a safe space for anonymous expression. Students and employees can share their feelings, release stress, and support each other — making campus and workplace environments more positive and healthy",
      image: "/task-management-dashboard.png",
      technologies: ["Javascript", "Tailwind CSS", "HTML"],
      github: "#",
      live: "#",
    },
    {
      title: "Weather Forecast Dashboard",
      year: "2025",
      description:
        "Clean and intuitive weather dashboard providing detailed forecasts, interactive maps, and historical data visualization. Responsive design for all devices.",
      image: "/weather-forecast-app.png",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Tailwind"],
      github: "#",
      live: "#",
    },
  ]

  return (
    <section id="projects">
      <div className="container max-w-5xl py-24">
        <h2 className="mb-4 text-balance text-4xl font-light tracking-tight">Projects</h2>
        <p className="mb-12 text-pretty text-lg text-muted-foreground">
          I love tackling challenging projects and building modern, responsive, and complex web applications. Here are a
          few of my favorites.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group flex flex-col overflow-hidden border-border bg-card/50 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-4 p-6">
                <div>
                  <h3 className="text-2xl font-medium text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.year}</p>
                </div>
                <p className="flex-1 text-pretty leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-full bg-muted px-3 py-1 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 rounded-full"
                    asChild
                    disabled={project.live === "#"}
                  >
                    <a
                      href={project.live !== "#" ? project.live : undefined}
                      target={project.live !== "#" ? "_blank" : undefined}
                      rel={project.live !== "#" ? "noopener noreferrer" : undefined}
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      View Website
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 rounded-full bg-transparent" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Source
                    </a>
                  </Button>
                </div>
                {/* </CHANGE> */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
