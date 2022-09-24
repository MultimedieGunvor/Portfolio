
export default function ProjectItem({ projekt }) {
    return (
        <article>
            <img src={projekt.image} alt={projekt.title} />
            <h2>{projekt.title}</h2>
            <p>{projekt.summary}</p>
            <p>{projekt.description}</p>
            <div>
                <h3>{projekt.tooltitle}</h3>
                <ul>
                    <li>{projekt.tool1}</li>
                    <li>{projekt.tool2}</li>
                    <li>{projekt.tool3}</li>
                    <li>{projekt.tool4}</li>
                    <li>{projekt.tool5}</li>
                    <li>{projekt.tool6}</li>
                    <li>{projekt.tool7}</li>
                    <li>{projekt.tool8}</li>
                </ul>
            </div>
            {<div>
                {projekt.link ? (
                <a href={projekt.link} target="blank">
                    Link
                    </a>
                ) : (
                <p>No link</p>
                )}
            </div> }
        </article>
    );
}
