import { notFound } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github, FileText, Gamepad2 } from "lucide-react"
import { projects } from "@/lib/projects-data"


export default async function ProjectPage({ params }: { params: { id: string } }) {

  const { id } = await params;
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Title Section */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.demoUrl && (
              <Button asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <Gamepad2 className="mr-2 h-4 w-4" />
                  Play Demo
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button variant="outline" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
            {project.gddUrl && (
              <Button variant="outline" asChild>
                <a href={project.gddUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Game Design Document
                </a>
              </Button>
            )}
          </div>

          {/* Full Description */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
            </CardContent>
          </Card>

          {/* Media Gallery */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Gallery</h2>
            <div className="grid gap-6">
              {project.media.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    {item.type === "image" && (
                      <div className="space-y-2">
                        <img
                          src={item.url || "/placeholder.svg"}
                          alt={item.caption || `Project media ${index + 1}`}
                          className="w-full h-auto object-cover"
                        />
                        {item.caption && <p className="text-sm text-muted-foreground px-6 pb-4">{item.caption}</p>}
                      </div>
                    )}
                    {item.type === "video" && (
                      <div className="space-y-2">
                        <video src={item.url} controls className="w-full h-auto">
                          Your browser does not support the video tag.
                        </video>
                        {item.caption && <p className="text-sm text-muted-foreground px-6 pb-4">{item.caption}</p>}
                      </div>
                    )}
                    {item.type === "youtube" && (
                      <div className="space-y-2">
                        <div className="relative w-full pt-[56.25%]">
                          <iframe
                            src={item.url}
                            className="absolute top-0 left-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        {item.caption && <p className="text-sm text-muted-foreground px-6 pb-4">{item.caption}</p>}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
