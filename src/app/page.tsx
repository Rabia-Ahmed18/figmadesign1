"use-client"

import Header from "../app/Components/header";
import Image from "next/image";
import Footer from "./footer";
import main1 from "./Public/images/main1.png";
import one from "./Public/images/one.png";
import two from "./Public/images/two.png";
import pro1 from "./Public/images/pro1.png";
import pro2 from "./Public/images/pro2.png";
import pro3 from "./Public/images/pro3.png";
import pro4 from "./Public/images/pro4.png";
import pro5 from "./Public/images/pro5.png";
import picture1 from "./Public/images/picture1.png";
import picture2 from "./Public/images/picture2.png";
import picture3 from "./Public/images/picture3.png";
import contactpic from "./Public/images/contactpic.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page() {
  return (
    <>
        {/* <Navbar className="bg-body-tertiary">

      <div className="parentContainer"> */}
        {/* <div className="headerPic">
          <Image src={headerPic} alt="header icon" className="logo" />
        </div> */}
        <Header />
      {/* </div>
      </Navbar> */}

      <div className="parentContainer1">
        <div className="headings">
          <h1 className="heading">PROJECT</h1>
          <h1>
            <span className="lorum">Lorum </span>
          </h1>
        </div>
        <div>
          <Image
            src={main1}
            width={829}
            height={770}
            alt="mainpic"
            className="mainPic"
          />
        </div>
      </div>
      <div className="aboutContainer">
        <div className="aboutleft">
          <Image src={picture1} alt="picture1" className="picture1" />

          <Image
            src={picture2}
            width={270}
            height={140}
            alt="picture2"
            className="picture2"
          />
        </div>
        <div>
          <Image src={picture3} alt="picture3" className="picture3" />
        </div>
        <div className="textContainer">
          <h1 className="about">About</h1>
          <p className="aboutText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="readmore">READ MORE ➡</button>
        </div>
      </div>
      <div className="parentStatement">
        <div>
          <h1>Main Focus/Mission Statement</h1>
        </div>
        <div className="childStatement">
          <div className="statement1">
            <div>
              <Image
                src={one}
                alt="image-one"
                width={104}
                height={140}
                className="one"
              />
            </div>
            <div className="statementText">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat.{" "}
              </p>
            </div>
          </div>
          <div className="statement2">
            <div>
              <Image
                src={two}
                alt="image-two"
                width={104}
                height={140}
                className="two"
              />
            </div>
            <div className="statementText">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat, magna mauris porttitor
                tortor, a auctor est felis ut nisl.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="parentProject">
        <h1> Our Projects</h1>
        <div className="pic1Container">
          <Image
            src={pro1}
            className="project1"
            alt="image"
            height={255}
            width={570}
          />

          <Image src={pro2} alt="image" height={255} width={570} />
        </div>
        <div className="pic1Container">
          <Image src={pro3} alt="image" height={255} width={270} />
          <Image src={pro4} alt="image" height={255} width={470} />
          <Image src={pro5} alt="image" height={255} width={370} />
        </div>
        <button className="project-btn"> ALL PROJECTS ➡ </button>
      </div>
      <div className="parentForm">
        <h1> Contact Us </h1>
        <div className="childForm">
          <div className="contactLength">
            <form>
              <input
                type="text"
                placeholder="Name"
                className="contactForm"
                required
              ></input>
              <input
                type="number"
                placeholder="Phone Number"
                className="contactForm"
                required
              ></input>
              <input
                type="number"
                placeholder="E-mail"
                className="contactForm"
                required
              ></input>

              <textarea
                placeholder="Message"
                className="contactForm-message"
                aria-placeholder="Message"
                required
              ></textarea>
            </form>
          </div>
          <div>
            <Image
              className="contactPic"
              src={contactpic}
              width={749}
              height={308}
              alt="image"
            />
          </div>
        </div>
        <div>
          <button className="contact-button"> SEND EMAIL ➡</button>
        </div>
      </div>

      <Footer />
    </>
  );
}
