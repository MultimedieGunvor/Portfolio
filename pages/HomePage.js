import { useState, useEffect} from "react";
import MainItem from "../components/MainItem";
import { LangContext } from '../Contexts/LangContext';
import React from 'react';
import SkillsPage from "./SkillsPage";
import Typewriter from 'typewriter-effect';
import IntroPage from "./Intro";

export default function HomePage() {
    const [main, setMain] = useState([]);
    const lang = React.useContext(LangContext);
    useEffect(() => {
        async function getMain () {
            const basePath = "https://multimediegunvor.github.io/portfolio/";
            const localizedFile = lang[0] === "dk" ?  
                "mainda.json": 
                "mainen.json";
            const response = await fetch(basePath + localizedFile);
            const data = await response.json();
            console.log(data);
            setMain(data);
        }
        getMain();
    }, [lang]);

    return (
        <>
        <section className="page">
            <div className="hero">
            <Typewriter options={{strings: ['Hello', 'World'], autoStart: true, loop: true,}}/>
            </div>
            <section className="main">
            <IntroPage />
            <SkillsPage />
                {main.map(main => (
                    <MainItem key={main.id} main={main} />
                ))}
            </section>
            
        </section>
        </>
    );
    
}
