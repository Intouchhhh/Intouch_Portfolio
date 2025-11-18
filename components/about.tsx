export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {
                  "As a recent graduate of computer engineering, I'm trying to find my way into the video game industry. My love of games motivated me to pursue game development on my own, despite the fact that my university didn't teach much about it. I have spent a lot of time learning and experimenting with various game engines over the years, including Unity, Godot, and Unreal Engine 5, by developing small prototypes and side projects to improve my skills."
                }
              </p>
              <p>
                I'm especially interested in level design, game design, and gameplay programming. 
                I truly enjoy studying how video games work, exploring their various mechanics, and figuring out what exactly makes an experience interesting and compelling. 
                To push myself and try out new ideas, I usually study game design theories, participate in game jams, or experiment with new ideas in my spare time.
              </p>
              <p>
                I'm always looking for ways to grow, work with others, and create valuable player experiences. 
                Whether it's creating a new mechanic, designing a level's flow, or polishing a prototype, I'm ready to keep learning and developing as a developer.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
              <img
                src="\Intouch_Grad.jpg"
                alt="Intouch picture"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
