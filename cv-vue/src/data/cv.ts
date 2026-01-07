// HTML from lab1 type converted
import type { EducationItem, Job, Profile, Skill }  from "./types";

export const profile: Profile = {
    name: "Zan Mo",
    role: "Cyber Security Student",
    email: "zan.molnarlm@gmail.com",
    phone: "0176 76612431",
    imageUrl: "../assets/placeholder.jpg"
};

export const skills: Skill[] = [
    "Python",
    "JS/TS/Node.js",
    "SQL (PostgreSQL, MySQL, MariaDB)",
    "SIEM/SOC",
    "Tenable One",
    "n8n workflows",
    "K8S"
]

export const aboutMe = `I am a Cyber Security student who loves working on network defense
 and automation projects. I also have a big and growing interest in computer networks
  and the security thereof`;

export const jobs: Job[] = [
    {
        id: "job1",
        title: "CyberSec Werkstudent - Börse Stuttgart",
        period: "Nov 2024 - Present",
        details: ["Working on SIEM/SOC and vulnerability management using Tenable One as well work with OneIM"]
    },
    {
        id: "job2",
        title: "AI Developer and server admin - Cybersecurity Business Advisory",
        period: "Sep 2025 - Present",
        details: [
            "Building an AI CyberSec assistant using n8n workflows.",
            "Helping with code audits and LLM setup",
            "Administrating and managing Google Workspace",
            "Creating and administrating a K8S cluster"
        ],
    },
];

export const education: EducationItem[] = [
    { title: "Cyber Security - Hochschule Esslingen", period: "2024-Present"},
    { title: "Information Engineering - HAW", period: "2021 - 2023 (not finished)" },
];