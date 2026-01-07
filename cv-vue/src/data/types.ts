export type Skill = string;

export interface Job {
    id: string;
    title: string;
    period: string;
    details: string[];
}

export interface EducationItem {
    title: string;
    period: string;
}

export interface Profile {
    name: string;
    role: string;
    email: string;
    phone: string;
    imageUrl?: string;
}