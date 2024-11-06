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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden">

                        <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"/>
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                        <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                            <Badge key={i} variant='secondary'>{tag}</Badge>
                        ))}
                        </div>
                        </CardContent>
                        <CardFooter className='gap-2'>
                            {project.github && (
                                <Button variant="outline" size="sm">
                                    <Github className="mr-2 h-4 w-4"></Github>
                                    <strong>Code</strong>
                                </Button>
                            )}
                            {project.link && (
                                <Button >
                                    <Link className="mr-2 h-4"/>
                                    <strong>Demo</strong>
                                </Button>
                            )}
                        </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}