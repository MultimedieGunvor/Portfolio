
export default function SkillsItem({ skills }) {
    return (
        <article className="skills">
            <h2>{skills.title}</h2>
            <div className="skill-deets">
                <img src={skills.deetslogo} alt={skills.deetstitle} />
                <h3>{skills.deetstitle}</h3>
                <p>{skills.deetscontent}</p>
            </div>
            <div className="skill-adobe">
                <img src={skills.adobelogo} alt={skills.adobetitle} />
                <h3>{skills.adobetitle}</h3>
                <p>{skills.adobecontent}</p>
            </div>
            <div className="skill-design">
                <img src={skills.designlogo} alt={skills.designtitle} />
                <h3>{skills.designtitle}</h3>
                <p>{skills.designcontent}</p>
            </div>
            <div className="skill-web">
                <img src={skills.weblogo} alt={skills.webtitle} />
                <h3>{skills.webtitle}</h3>
                <p>{skills.webcontent}</p>
            </div>
            <div className="skill-react">
                <img src={skills.reactlogo} alt={skills.reacttitle} />
                <h3>{skills.reacttitle}</h3>
                <p>{skills.reactcontent}</p>
            </div>
            <div className="skill-some">
                <img src={skills.somelogo} alt={skills.sometitle} />
                <h3>{skills.sometitle}</h3>
                <p>{skills.somecontent}</p>
            </div>
        </article>
    );
}
