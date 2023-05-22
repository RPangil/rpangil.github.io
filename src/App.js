import { Fragment } from 'react';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Container from './Components/UI/Container';

import styles from './SCSS/main.module.scss';

function App() 
{
    return (
        <Fragment>
            <Header />
            <main>
                <Container>
                    <p>Welcome! I'm</p>
                    <h1>Robert Pangilinan</h1>
                    <p>
                        I'm a frontend web developer with a primary focus on React and aim to create intuitive and user friendly websites.
                    </p>
                </Container>
                <Container title='About Me'>
                    <p>
                        Hey! My name is Robert and I take interest in almost anything related to tech, photography, basketball and football. 
                        I started to get into web development back in 2011, when I had a computer class that taught us how to make basic websites.
                        From there, I took a lot more interest in coding, inspecting websites to see how they're made and libraries that could help with making websites responsive.
                    </p>
                    <p>
                        While in college, I worked as a college assistant that helps making and maintaining webpages for the different college departments. 
                        After graduating college, I was able to work in a start-up and most recently a website agency. 
                        Recently, I'm working on a couple of projects for an F1 league that wants a revamped website and a private project, while looking for a job.
                    </p>
                </Container>
                <Container title="Technologies">
                    <p>Some of the technologies I use are:</p>
                    <ul>
                        <li>React</li>
                        <li>Sass</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>MySQL</li>
                        <li>Bootstrap</li>
                    </ul>
                </Container>
                <Container title="Places I've Worked">
                    <ul>
                        <li>Ovis Technologies</li>
                        <li>Element Zero</li>
                        <li>LaGuardia Community College</li>
                    </ul>
                </Container>
                <Container title="Websites I've Worked On">
                    <ul>
                        <li>Quester</li>
                        <li>Ketoret</li>
                        <li>Novawulf</li>
                        <li>Aero Capital Solutions</li>
                        <li>Saige Private Wealth</li>
                        <li>HFC</li>
                        <li>Quorum</li>
                        <li>Famiglia</li>
                    </ul>
                </Container>
            </main>
            <Footer />
        </Fragment>
    );
}

export default App;