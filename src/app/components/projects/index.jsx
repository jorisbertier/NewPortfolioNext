'use client';
import { useState } from 'react';
import Titles from './titles';
import Descriptions from './descriptions';
import { ProjectsData } from '@/app/utils/ProjectsData';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className="relative mt-0 s:mt-0 z-30 w-full">
            <Titles data={ProjectsData} setSelectedProject={setSelectedProject}/>
            <Descriptions data={ProjectsData} selectedProject={selectedProject}/>
        </div>
    )
}