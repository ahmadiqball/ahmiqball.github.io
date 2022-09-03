import "./Skills.css";
import image1 from "../../assets/img/html-1.svg";
import image2 from "../../assets/img/css-3.svg";
import image3 from "../../assets/img/logo-javascript.svg";
import image4 from "../../assets/img/react-2.svg";
import image5 from "../../assets/img/nextjs-2.svg";
import image6 from "../../assets/img/vue-js-1.svg";
import image7 from "../../assets/img/git-icon.svg";
import image8 from "../../assets/img/bootstrap-5-1.svg";
import image9 from "../../assets/img/material-ui-1.svg";
import image10 from "../../assets/img/tailwind-css-2.svg";
import image11 from "../../assets/img/nodejs-icon.svg";
import image12 from "../../assets/img/python-5.svg";
import image13 from "../../assets/img/tensorflow-2.svg";
import image14 from "../../assets/img/power-bi.svg";
import image15 from "../../assets/img/visual-studio-code-1.svg";
import image16 from "../../assets/img/figma-1.svg";
import image17 from "../../assets/img/adobe-photoshop-2.svg";

const Skills = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17
  ];
  return (
    <section className="skills" id="skills">
      <div className="skills-head">
        <h1>Skills</h1>
        <div className="skills-cards">
            {images.map((imgSrc) => (
                <div className="skill-card" key={imgSrc.toString()}>
                    <img src={imgSrc} alt="skill-img" />
                </div>
            ))
            }
        </div>
      </div>
    </section>
  );
};

export default Skills;
