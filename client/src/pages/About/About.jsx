import "./About.scss";

const About = () => {
    return (
        <div className="about-container">
            <div className="left">
                <h1><span>TravelPin</span> Mapping Your Global Adventures with Innovation</h1>
                <span>
                    Welcome to TravelPin - where wanderlust meets innovation! Our
                    revolutionary travel log app redefines how you document and share global
                    adventures. Pin your favorite spots on a world map, craft personalized
                    itineraries, and relive your journeys in an interactive way. With an
                    intuitive interface, showcasing your explorations has never been easier.
                    Leave no trace but your insights with our location rating and review
                    system, helping fellow travelers. Developed with React and Node.js, expect
                    a seamless user experience. Start your visual travel diary today with
                    TravelPin!
                </span>
            </div>

            <div className="right">
                <img className="img1" src="https://res.cloudinary.com/dnyggdtcs/image/upload/v1692170409/EarthWander/8832125_vauqoo.jpg" alt="Mountains" height={500} />
                <img className="img2" src="https://res.cloudinary.com/dnyggdtcs/image/upload/v1692170409/EarthWander/8832125_vauqoo.jpg" alt="Mountains" height={500} />
            </div>
        </div>
    );
};

export default About;
