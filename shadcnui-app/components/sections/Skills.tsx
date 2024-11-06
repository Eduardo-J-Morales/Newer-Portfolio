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
        <section className="py-20 bg-secondary/50" id="skills">
            <div className="container mx-auto px-4"></div>

        </section>
    )
}