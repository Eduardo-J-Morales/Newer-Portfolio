import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary">
      <div className="text-center space-y-8 p-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I'm <span className="text-primary">John Doe</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          A passionate Full Stack Developer crafting beautiful and functional web experiences
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="default" size="lg">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
          <Button variant="outline" size="lg">
            View Projects
          </Button>
        </div>
        <div className="flex gap-4 justify-center pt-4">
          <Button variant="ghost" size="icon">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
)


}