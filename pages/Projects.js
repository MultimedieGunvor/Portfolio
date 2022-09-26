import { useState, useEffect} from "react";
import ProjectItem from "../components/ProjectItem";
import { LangContext } from '../Contexts/LangContext';
import React from 'react';

export default function Projects() {
    const [projekter, setProjects] = useState([]);
    const lang = React.useContext(LangContext);
    useEffect(() => {
        async function getProjects () {
            const basePath = "https://multimediegunvor.github.io/portfolio/";
            const localizedFile = lang[0] === "dk" ?  
                "projekter.json": 
                "projects.json";
            const response = await fetch(basePath + localizedFile);
            const data = await response.json();
            console.log(data);
            setProjects(data);
        }
        getProjects();
    }, [lang]);

    return (
        <>
        <section className="page">
            <h1>Projects</h1>
            <section className="projects-container">
                {projekter.map(projekt => (
                    <ProjectItem key={projekt.id} projekt={projekt} />
                ))}
            </section>
        </section>
        </>
    );
}
