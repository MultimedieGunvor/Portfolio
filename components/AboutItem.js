
export default function AboutItem({ about }) {
    return (
        <article>
            <h1>{about.title}</h1>
            <img src={about.image} alt={about.title} />
            <div className="aboutme">
            <p>{about.content1}</p>
            <p>{about.content2}</p>
            <p>{about.content3}</p>
            </div>
            <p className="btn">
                <a href="mailto:gunvor.paludan@gmail.com">{about.btn}</a>
            </p>
            

        </article>
    );
}
