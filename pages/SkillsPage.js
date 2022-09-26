import { useState, useEffect} from "react";
import SkillsItem from "../components/SkillsItem";
import { LangContext } from '../Contexts/LangContext';
import React from 'react';

export default function SkillsPage() {
    const [skills, setSkills] = useState([]);
    const lang = React.useContext(LangContext);
    useEffect(() => {
        async function getSkills () {
            const basePath = "https://multimediegunvor.github.io/portfolio/";
            const localizedFile = lang[0] === "dk" ?  
                "skillsda.json": 
                "skillsen.json";
            const response = await fetch(basePath + localizedFile);
            const data = await response.json();
            console.log(data);
            setSkills(data);
        }
        getSkills();
    }, [lang]);

    return (
        <>
        <section className="page">
            <section className="skills">
                {skills.map(skills => (
                    <SkillsItem key={skills.id} skills={skills} />
                ))}
            </section>
        </section>
        </>
    );
    
}
