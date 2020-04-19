import React from 'react';
import headshot from './main.png';

class Homepage extends React.Component{
    render(){
        return(
            <body>
                <div class="column1">
                    <img src={headshot} alt="Molly Murtha" class="headshot"/>
                </div>

                <div class="column2">
                <div class="bio">
                    <h1>Molly Murtha</h1>
                <p class="quote">"If more people valued home, above gold, this world would be a merrier place..." </p><p class="quote">-J.R.R. Tolkien</p>
                <p>Molly Murtha is currently a senior at the University of Central Florida studying Digital Media. After two 
                        and a half years studying photography at the Savannah College of Art and Design, she decided to change gears 
                        and expand her knowledge of web development. Her combined passions for front-end web design, photography, and 
                        graphic design has lead her into seeking a career in content production and management.</p>
                <p>In her free time she enjoys riding horses, playing video games, concerts, and going on new adventures. She loves trying
                    new things especially when it involves being creative or being outdoors. She also loves living a healthy lifestyle and 
                    is a huge advocate for balancing both physcial and mental health. Most importantly, she is also a huge fan of Tolkien.
                </p>
                    </div>

                <h2>Awards</h2>
                <p class="quote">Intercollegiate Horse Shows Association</p>
                <ul class="portfolio">
                    <li>2018 Novice on the Flat National Champion</li>
                    <li>2020 Reserve Champion High Point Rider Zone 5 Region 5</li>
                </ul>

                <h2>Skills</h2>
                <ul class="portfolio">
                    <li>Advanced Equestrian</li>
                    <li>Digital and Film Photography</li>
                    <li>Adobe Creative Cloud Programs</li>
                    <li>HTML and CSS</li>
                    <li>Minimal JS and React</li>
                </ul>
                <p><a target="_blank" href="https://mmurtha.myportfolio.com/work">Portfolio</a></p>
                </div>

            </body>
        )
    }
}

export default Homepage;
