export interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    link?: string;
    github?: string
}

export interface Skill {
    name: string;
    icon: string;
    level: number;
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
}