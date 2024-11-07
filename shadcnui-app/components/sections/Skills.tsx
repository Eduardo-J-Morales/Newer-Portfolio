import { Progress } from "@/components/ui/progress"
import { skills } from "@/app/data/content"
import { Code, Component, Container, Cloud, Server, Terminal } from "lucide-react"

const iconMap = {
    code: Code, 
    component: Component,
    container: Container,
    clould: Cloud,
    server: Server,
    terminal: Terminal
};

export default function Skills() {
    return (
        <section className="py-20 bg-secondary/100" id="skills">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
                <div className="gird grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"></div>
                {skills.map((skill, index) => {
                    let { icon } = skill
                    let Icon = icon
                    return(
                    <div key={index} className="space-y-2">
                                <div className="flex items-center gap-2">
                                <Icon/>
                                <span>{skill.name}</span>
                            </div>
                            <Progress/>
                        </div>
                )})}
                </div>
        </section>
    )
}