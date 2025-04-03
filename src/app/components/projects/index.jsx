'use client';
import { useState } from 'react';
import Titles from './titles';
import Descriptions from './descriptions';
import { ProjectsData } from '@/app/utils/ProjectsData';

const data = [
    {
        title: "NFT Marketplace",
        description: "Working on the Next-Generation HMI Experience without no driving experience.",
        speed: 0.5
    },
    {
        title: "Explorer",
        description: "Developed the Future of UFC Sports Ecosystem despite not being a sports fan.",
        speed: 0.5
    },
    {
        title: "Nutri Track",
        description: "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.",
        speed: 0.67
    },
    {
        title: "Entract",
        description: "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
        speed: 0.8
    },
    {
        title: "Sleepiq",
        description: "Designed a 1M+ users product utilizing my best personal experience: sleeping.",
        speed: 0.8
    },
    // {
    //     title: "NFL",
    //     description: "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
    //     speed: 0.8
    // }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className="relative mt-14 s:mt-0 z-30 w-full">
            <Titles data={ProjectsData} setSelectedProject={setSelectedProject}/>
            <Descriptions data={ProjectsData} selectedProject={selectedProject}/>
        </div>
    )
}