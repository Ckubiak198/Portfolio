import Navbar from '../pieces/navbar'
import ProjectCarousel from "../pieces/ProjectCarousel";
import landing from "../assets/landing.png";
import signup from "../assets/signup.png";
import savedrecipes from "../assets/savedrecipes.png";
import pantry from "../assets/pantry.png";


const LTB = [
  {
    image: landing,
    title: "Landing page",
  },
  {
    image: signup,
    title: "Sign up page",
  },
  {
    image: savedrecipes,
    title: "Saved recipes",
  },
  {
    image: pantry,
    title: "User Pantry",
  },
];

function Projects() {
    return (
    <>
        <Navbar />
            <div>
                <h1>Projects</h1>

                <h2>Lettuce Turnip The Beet</h2>
                <h3> Full-stack school project (PHP + MySQL + React) </h3>
                <p> A web application for managing and organizing recipes.  </p>
                <p> Source code not public due to academic policies. </p>
                <ProjectCarousel slides={LTB} placeholderIcon="ti ti-photo" />

                {/* put box grid of projects here */}

            </div>
    </>
    )
}

export default Projects;