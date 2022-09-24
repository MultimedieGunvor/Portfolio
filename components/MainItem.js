
export default function MainItem({ main }) {
    return (
        <article>
            <p>{main.content}</p>
            <img src={main.trends} alt="Data om søgeord" />
            <img src={main.diagram} alt="Data om virksomhedsformer" />
            <img src={main.conzoom} alt="Data om målgruppesegmenter" />
            <img src={main.code} alt="Async, fetch og JSON" />

        </article>
    );
}
