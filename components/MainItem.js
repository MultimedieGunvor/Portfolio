
export default function MainItem({ main }) {
    return (
        <article className="main-article">
            <p>{main.content2}</p>
            {/* <div className="main-pics">
                <img src={main.trends} alt="Data om søgeord" />
                <img src={main.diagram} alt="Data om virksomhedsformer" />
            </div> */}
            <p>{main.content3}</p>
            <p>{main.content4}</p>
        </article>
    );
}
