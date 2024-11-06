import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/app/data/content"
import { Github, Link } from "lucide-react"

export default function Projects() {
    return(
        <section className="py-20 px-4" id="projects">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Feature Projects</h2>
                <div>
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden">

                        <img 
                        src={project.image}
                        alt={project.title}
                        className=""/>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}