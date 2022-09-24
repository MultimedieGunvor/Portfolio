import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import Nav from "./components/Nav";
import { LangProvider } from './Contexts/LangContext';

function App(props) {
    
    
    return (
        <main>
            <LangProvider>
                <Nav />
            
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </LangProvider>
        </main>
    );
}

export default App;
