import React from "react";

const Hero = ({handleLogout})  => {

    return(
        <section className="hero">
            <nav>
                <h2>Welcome to TechnoCraT</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <body>
                <h2>Who we are!</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloribus quibusdam dolores hic ducimus repudiandae earum, delectus rem nisi obcaecati odio maiores non eligendi sequi perspiciatis debitis dolore vel similique?</h3>
                <div>
                    <iframe width="420" height="345" src="https://www.youtube.com/embed/m7atGkba-Z8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>
            </body>
            
        </section>
    );
};

export default Hero