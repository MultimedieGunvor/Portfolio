import { useState, useEffect} from "react";
import AboutItem from "../components/AboutItem";
import { LangContext } from '../Contexts/LangContext';
import React from 'react';

export default function AboutPage() {
    const [about, setAbout] = useState([]);
    const lang = React.useContext(LangContext);
    useEffect(() => {
        async function getAbout () {
            const basePath = "https://multimediegunvor.github.io/portfolio/";
            const localizedFile = lang[0] === "dk" ?  
                "aboutda.json": 
                "abouten.json";
            const response = await fetch(basePath + localizedFile);
            const data = await response.json();
            console.log(data);
            setAbout(data);
        }
        getAbout();
    }, [lang]);

    return (
        <>
        <section className="page">
            <section className="about">
                {about.map(about => (
                    <AboutItem key={about.id} about={about} />
                ))}
            </section>
        </section>
        </>
    );
    
}
