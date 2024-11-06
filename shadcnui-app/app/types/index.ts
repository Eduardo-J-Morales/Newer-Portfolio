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
    LEVEL: number;
}
