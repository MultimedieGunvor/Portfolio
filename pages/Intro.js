import { useState, useEffect} from "react";
import IntroItem from "../components/IntroItem";
import { LangContext } from '../Contexts/LangContext';
import React from 'react';

export default function IntroPage() {
    const [intro, setIntro] = useState([]);
    const lang = React.useContext(LangContext);
    useEffect(() => {
        async function getIntro () {
            const basePath = "https://multimediegunvor.github.io/portfolio/";
            const localizedFile = lang[0] === "dk" ?  
                "introda.json": 
                "introen.json";
            const response = await fetch(basePath + localizedFile);
            const data = await response.json();
            console.log(data);
            setIntro(data);
        }
        getIntro();
    }, [lang]);

    return (
        <>
        <section>
            <section className="intro">
                {intro.map(intro => (
                    <IntroItem key={intro.id} intro={intro} />
                ))}
            </section>
        </section>
        </>
    );
    
}
