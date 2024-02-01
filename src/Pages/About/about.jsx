import "./about.css";
import aboutImage from "../../assets/About/istockphoto-1210226489-1024x1024.jpg";
import picOne from "../../assets/About/pic01.jpg";
import picTwo from "../../assets/About/pic02.jpg";
import picThree from "../../assets/About/pic03.jpg";
import picShawn from "../../assets/About/pic04.jpg";
import mission from "../../assets/About/Mission.jpg";
import vision from "../../assets/About/Vision.jpg";
import value from "../../assets/About/Value.jpg";

function about() {
    return (
        <>
        {/* About us Section */}
        <div className="heading">
            <h1>About Us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ex ad veritatis, illum aspernatur eum voluptates soluta eaque praesentium error ratione animi optio tempora. Aspernatur tempora ipsam eligendi vitae numquam amet nam veniam, quidem blanditiis, asperiores possimus ratione officia harum quae doloribus consequuntur aliquid eum tenetur molestias consectetur excepturi labore!</p>
        </div>
        <div className="container">
            <section className="about">
                <div className="about-image">
                    <img src={aboutImage} alt="Mental Health Picture" />
                </div>
                <div className="about-content">
                    <h2>Who We Are</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, atque quis nostrum officiis odit impedit amet culpa ab esse, adipisci vitae. Ab optio ipsam totam atque quos, mollitia quas labore dolores vel, quae, autem blanditiis tenetur. Molestiae commodi illo distinctio, dolor consectetur accusamus! Quasi iure cumque illo illum dolor ex.</p>
                    <a href="" className="read-more">Read More</a>
                </div>
            </section>
        </div>

        {/* Team section */}
        <div className="wrapper">
            <div className="title">
                <h2>Our Team</h2>
            </div>
            <div className="card-container">

                {/* Kemboi */}
                <div className="card">
                    <div className="imbBx">
                        <img src={picOne} alt="User Image" />
                    </div>
                    <div className="content">
                        <div className="contentBx">
                            <h3>Brian kemboi <br /><span>UI/UX Designer</span></h3>
                        </div>
                        <ul className="sci">
                            <li style="--i: 1">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li style="--i: 2">
                                <a href="#"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li style="--i: 3">
                                <a href="#"><i className="fa fa-github"></i></a>
                            </li>
                            <li style="--i: 4">
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Freshia */}
                <div className="card">
                    <div className="imbBx">
                        <img src={picTwo} alt="User Image" />
                    </div>
                    <div className="content">
                        <div className="contentBx">
                            <h3>Freshia Njoki <br /><span>Full Stack Development</span></h3>
                        </div>
                        <ul className="sci">
                            <li style="--i: 1">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li style="--i: 2">
                                <a href="#"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li style="--i: 3">
                                <a href="#"><i className="fa fa-github"></i></a>
                            </li>
                            <li style="--i: 4">
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Gideon */}
                <div className="card">
                    <div className="imbBx">
                        <img src={picThree} alt="User Image" />
                    </div>
                    <div className="content">
                        <div className="contentBx">
                            <h3>Gideon Nge`tich<br /><span>Front-End Web Developer</span></h3>
                        </div>
                        <ul className="sci">
                            <li style="--i: 1">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li style="--i: 2">
                                <a href="#"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li style="--i: 3">
                                <a href="#"><i className="fa fa-github"></i></a>
                            </li>
                            <li style="--i: 4">
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Shawn */}
                <div className="card">
                    <div className="imbBx">
                        <img src={picShawn} alt="User Image" />
                    </div>
                    <div className="content">
                        <div className="contentBx">
                            <h3>Calvin Mwangi<br /><span>Back-End Web Developer</span></h3>
                        </div>
                        <ul className="sci">
                            <li style="--i: 1">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li style="--i: 2">
                                <a href="#"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li style="--i: 3">
                                <a href="#"><i className="fa fa-github"></i></a>
                            </li>
                            <li style="--i: 4">
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Our Objectives */}
        <div className="mvv-container">
            {/* Mision */}
            <div className="mvv-block">
                <div className="image">
                    <img src={mission} alt="Our Mission Picture" />
                </div>
                <div className="content-2">
                    <h4>Our Mission</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus?</p>
                </div>
            </div>

            {/* Vision */}
            <div className="mvv-=block">
                <div className="image">
                    <img src={vision} alt="Our Mission Picture" />
                </div>
                <div className="content-2">
                    <h4>Our Vision</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus?</p>
                </div>
            </div>

            {/* Values */}
            <div className="mvv-=block">
                <div className="image">
                    <img src={value} alt="Our Mission Picture" />
                </div>
                <div className="content-2">
                    <h4>Our Values</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus?</p>
                </div>
            </div>
        </div>

        {/* Footer */}
        </>
    )
}

export default about