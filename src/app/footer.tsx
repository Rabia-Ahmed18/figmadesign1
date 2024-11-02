import Image from "next/image";
import footerImg from "./Public/images/footer-img.png";
import Link from "next/link";
import address from "./Public/images/address.png";
import phone from "./Public/images/phone.png";
import email from "./Public/images/email.png";
import facebook from "./Public/images/facebook.png";
import linkedin from "./Public/images/Linkedin.png";
import twitter from "./Public/images/twitter.png";
import shape from "./Public/images/shape.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <div className="footer">
      {/* <Container> */}
      <Row>
        <div className="parentFooter">
          <Col>
            <div className="image">
              <Image
                src={footerImg}
                alt="footer img"
                height={94}
                width={145}
                className="footerImage"
              />
            </div>
          </Col>
          <Col>
            <div className="information">
              <h4>Information</h4>
              <ul className="f-links" style={{marginRight:"40px"}}>
                <Link style={{color:"white",marginRight:"40px"}} className="link-f" href={"#"}>
                  Main
                </Link>
                <Link style={{color:"white"}}  className="link-f" href={"#"}>
                  Gallery
                </Link>
                <Link  style={{color:"white"}} className="link-f" href={"#"}>
                  Projects
                </Link>
                <Link  style={{color:"white"}} className="link-f" href={"#"}>
                  Certifications
                </Link>
                <Link  style={{color:"white"}} className="link-f" href={"#"}>
                  Contact
                </Link>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="contact">
              <h4>Contact</h4>
              <br />
              <h5>
                {" "}
                <Image src={address} alt="icon" height={16} width={16} />
                1234 Sample Street
                <br />
                Austin Texas 78704
              </h5>
              <br />
              <h5>
                {" "}
                <Image src={phone} alt="icon" height={16} width={16} />
                512.333.2222
              </h5>
              <br />
              <h5>
                {" "}
                <Image src={email} alt="icon" height={16} width={16} />
                sampleemail@gmail.com
              </h5>
            </div>
          </Col>
          <Col>
            <div className="socialMedia">
              <h4>Social Media</h4>

              <div className="links">
                <h5 className="social-icon">
                  <Image src={facebook} alt="facebook" width={10} height={19} />
                </h5>
                &nbsp;
                &nbsp;
                <h5 className="social-icon">
                  <Image src={linkedin} alt="linkedin" width={22} height={17} />
                </h5>
                &nbsp;
                &nbsp;
                <h5 className="social-icon">
                  {" "}
                  <Image src={twitter} alt="twitter" width={20} height={20} />
                </h5>
                &nbsp;
                &nbsp;
                <h5 className="social-icon">
                  {" "}
                  <Image src={shape} alt="shape" width={14} height={19} />
                </h5>
                &nbsp;
                &nbsp;
              </div>
            </div>
          </Col>
        </div>
      </Row>
      {/* </Container> */}
    </div>
  );
}
