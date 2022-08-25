import "./Banner.css";
import { useState, useEffect } from "react";

const Banner = () => {
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [isDelete, setIsDelete] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const profText = ["Web Developer", "Data Scientist"];
  const period = 2000;

  useEffect(() => {
    let typer = setInterval(() => {
      type();
    }, delta);

    return () => {
      clearInterval(typer);
    };
  }, [text]);

  const type = () => {
    let idx = loopNum % profText.length;
    let fullText = profText[idx];
    let movingText = isDelete
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(movingText);

    if (isDelete) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDelete && movingText === fullText) {
      setIsDelete(true);
      setDelta(period);
    } else if (isDelete && movingText === "") {
      setIsDelete(false);
      setLoopNum((prevNum) => prevNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <div className="banner-head">
        <h1>
          Hi, I am Iqbal<br></br>
          <span className="txt-rotate">
            <span className="banner-prof">{text}</span>
          </span>
        </h1>
        <p>
          Hello, i am Ahmad Iqbal Yahya, a final year Aerospace Engineering
          student from Bandung Institute of Technology. Currently i am
          interested to leveling up my skill and building my career as a Data
          Sciencetist and Software Engineeri. Let's explore my page to find more about me !
        </p>
      </div>
    </section>
  );
};

export default Banner;
