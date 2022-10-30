import Subscribe from "../components/subscribe/Subscribe";
import Card from "../components/card/Card";
import htmlImage from "../assets/img/orange-image.png";
import cssImage from "../assets/img/blue-image.png";
import designImage from "../assets/img/image.png";


const Home = () => {
    return (
        <div className="root">
            <section id="showcase">
                <div className="container">
                    <h1>Professional Web Design</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ex corrupti, dolor eaque amet cumque.</p>
                </div>
            </section>
            <Subscribe />
            <section id="boxes">
                <div className="container">
                    <Card src={htmlImage} title="Html-Markup" url="/Html" />
                    <Card src={cssImage} title="CSS" url="/Css" />
                    <Card src={designImage} title="Design-İmage" url="/Logo" />

                </div>
            </section>
        </div>
    )
}
export default Home;