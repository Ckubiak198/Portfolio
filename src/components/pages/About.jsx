import Navbar from '../pieces/navbar'
import ProjectCarousel from '../pieces/ProjectCarousel';
import vid1 from '../../assets/vid1.mp4';
import vid2 from '../../assets/vid2.mp4';
import vid3 from '../../assets/vid3.mp4';
import vid4 from '../../assets/vid4.mp4';
import './About.css';


const vids = [
  {
    video: vid3,
  },
  {
    video: vid4,
  },
  {
    video: vid1,
  },
  {
    video: vid2,
  }
];

function About() {
    return (
    <>
        <Navbar />
            <div>
                <h1>Hey there!</h1>
                <div className="about-bio">
                    <p>
                        I'm Cody. I'm a recent Computer Science graduate from the University at Buffalo. 
                        I've always been fascinated by computers, wanting to become a software developer ever since I was about 10 years old.
                         Now that I know more about it, I'm even more passionate and am eager to apply my skills.
                        I am open to work and excited about the opportunities to grow that lie ahead.<br></br> <br></br>
                        Throughout my 4 years at UB, I've gained experience in various programming languages and technologies,
                            including Java, Python, C, and React.
                        I'm particularly interested in full-stack development and I'm working on projects that
                             showcase my abilities in this area (see Projects tab).<br></br> <br></br>
                    </p>
                    <p>
                        On the side (for fun), I like playing basketball, golf, and video games. In fact,
                        I competed on the Varsity Rocket League team for UB. You can see some of the better goals I've scored recently
                        further down this page. <br></br>
                    </p>
                </div>
                <div className="videos">
                    <ProjectCarousel slides={vids} placeholderIcon="ti ti-user" />
                </div>
            </div>
    </>
    )
}

export default About;