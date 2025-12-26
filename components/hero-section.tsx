import Image from "next/image"

export function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-between">
          <div className="order-2 space-y-8 text-center md:order-1 md:text-left">
            <div className="space-y-2">
              <h1 className="text-balance font-sans text-3xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                {"Hi, I'm Sunny 👋"}
              </h1>
            </div>
            {/* <p className="text-balance text-2xl font-medium text-primary lg:text-2xl">Full-stack developer passionate about building solutions and helping people; active on LinkedIn.</p> */}
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Full-stack developer passionate about building solutions and helping people; active on LinkedIn.
            </p>
          </div>

          <div className="relative order-1 shrink-0 md:order-2">
            <div className="animate-float-slow relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 shadow-2xl transition-transform hover:scale-105 md:h-80 md:w-80">
              <Image src="/images/profile-photo.png" alt="Sunny Mall" fill className="object-cover" priority />
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
