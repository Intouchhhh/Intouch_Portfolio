import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Gamepad2, Palette, Rocket } from "lucide-react"

const skillCategories = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["C", "C#", "C++", "Python", "JavaScript", "MySQL"],
  },
  {
    icon: Gamepad2,
    title: "Game Engines",
    skills: ["Unity", "Unreal Engine", "Godot" ],
  },
  {
    icon: Palette,
    title: "Design & Art",
    skills: ["Game Design", "Level Design"],
  },
  {
    icon: Rocket,
    title: "Tools & Tech",
    skills: ["Github", "Git", "Plastic SCM", "Visual Studio", "Visual studio code"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Skills & Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
