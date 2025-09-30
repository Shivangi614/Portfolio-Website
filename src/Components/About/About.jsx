
import React from "react";
import "./About.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaPython, FaCalendar, FaCertificate } from "react-icons/fa";
import { SiMongodb, SiExpress, SiPostman } from "react-icons/si";
import Accenture from "../../assets/Certificate of Accenture.pdf";
import Internship_FSWD from "../../assets/Certificate of Internship-FSWD.pdf";
import LOR_FSWD from "../../assets/LOR- FSWD.pdf";
import Python_NPTEL from "../../assets/Certificate of Python-NPTEL.pdf";
import Cisco from "../../assets/Cisco Certificate.jpg";
import Python_IBM from "../../assets/Coursera Python Certificate.pdf";
import Workshop from "../../assets/Workshop certificate -FS.pdf";
import Python_IIT from "../../assets/Participant-Certificate-TMU-Python.pdf";
import TCS_iON from "../../assets/TCS iON Certificate.pdf";
import MockOffer from "../../assets/MockOffer.jpg";
import Internship_Cognifyz from "../../assets/Cognifyz Internship certificate.pdf";
import Internship_Celebal from "../../assets/Celebal Technologies Internship Certificate.pdf";
import Internship_Elevate from "../../assets/Elevate Labs Certificate.png";
import bullet from "../../assets/bullet-img.png";
import office from "../../assets/Office_img.png";
import university from "../../assets/university-img.png";
import Profile_Img from "../../assets/profile-img.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      {/* About Me Section */}
      <div className="about-container">
        <div className="about-text">
          <h2>About <span className="highlight">Me</span></h2>
          <img src={Profile_Img} alt="Shivangi Jain" />
          <p>
            Hey there! I’m Shivangi Jain, a passionate <strong>Full Stack Developer </strong>who loves turning ideas into reality through code. Whether it's crafting sleek user interfaces with<strong> React</strong> or building powerful back-end systems with <strong>Node.js and MongoDB</strong>, I thrive on creating seamless, high-performance web applications.<br />
            From designing <strong>visually stunning e-commerce platforms</strong> to developing <strong>real-time weather</strong> apps and<strong> smart task management systems</strong>, I enjoy blending creativity with functionality. My approach is all about writing clean, efficient code that delivers smooth, engaging user experiences. I believe that technology should not just work—it should <strong>delight and inspire!</strong>
          </p>
        </div>

      </div>

      {/* Skills Section */}
      <div id="skill" className="about-skills">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className="skill"><FaHtml5 className="icon" /> HTML5</div>
          <div className="skill"><FaCss3Alt className="icon" /> CSS3</div>
          <div className="skill"><FaJs className="icon" /> JavaScript</div>
          <div className="skill"><FaReact className="icon" /> React.js</div>
          <div className="skill"><FaNodeJs className="icon" /> Node.js</div>
          <div className="skill"><SiExpress className="icon" /> Express.js</div>
          <div className="skill"><SiMongodb className="icon" /> MongoDB</div>
          <div className="skill"><FaPython className="icon" /> Python</div>
          <div className="skill"><FaGithub className="icon" /> GitHub</div>
          <div className="skill"><SiPostman className="icon" /> Postman</div>
        </div>
      </div>

      {/* Experience & Certifications Section */}
      <div className="about-experience">
        <h2>Learning & Professional Growth</h2>

        <div className="timeline">
          <div className="timeline-item">
            <h3>Web Development Internship</h3>
            <p className="organization"><img src={office} alt="office" /> Elevate Labs | <FaCalendar /> August 2025 – September 2025</p>
            <p className="description"><img src={bullet} alt="bullet" /> Successfully completed a Web Development Internship at Elevate Labs, recognized under Skill India and MSME, Govt. of India.Gained hands-on experience in full-stack web development, focusing on front-end and back-end technologies including React.js and Node.js.Worked on real-world projects involving API integration, deployment, and performance optimization.Honored as the <strong>Best Performer</strong> 🏆 for outstanding dedication, attention to detail, and continuous learning.</p>
            <a href={Internship_Elevate} className="certificate-link"><FaCertificate /> View Certificate</a>
          </div>

          <div className="timeline-item">
            <h3>React JS Internship</h3>
            <p className="organization"><img src={office} />Celebal Technologies | <FaCalendar /> June 2025 – August 2025</p>
            <p className="description"><img src={bullet} /> I successfully completed a React JS internship at Celebal Technologies, where I gained hands-on experience in building dynamic and responsive web applications. During the internship, I worked on real-world projects involving component-based architecture, state management, routing, and API integration. I also learned best practices in frontend development and improved my skills in creating scalable, user-friendly interfaces.</p>
            <a href={Internship_Celebal} className="certificate-link"><FaCertificate /> View Certificate</a>
          </div>
          <div className="timeline-item">
            <h3>Full Stack Web Development Internship</h3>
            <p className="organization"><img src={office} />Cognifyz Technologies | <FaCalendar /> April 2025 – May 2025</p>
            <p className="description"><img src={bullet} /> Completed project-based tasks focusing on full-stack development, API integration, and user experience enhancement. Demonstrated strong commitment, attention to detail, and effective coordination while handling assigned tasks.</p>
            <a href={Internship_Cognifyz} className="certificate-link"><FaCertificate />  View Certificate</a>
          </div>
          <div className="timeline-item">
            <h3>Mock Offer Letter – Samatribya Bodh 3.0</h3>
            <p className="organization"><img src={university} />Teerthanker Mahaveer University | <FaCalendar /> March 2025</p>
            <p className="description"><img src={bullet} /> Received as part of a university-level recognition event for demonstrating technical and soft skills excellence. Included training and placement guidance aligned with 5 LPA roles.</p>
            <a href={MockOffer} className="certificate-link"><FaCertificate /> View Letter</a>
          </div>

          <div className="timeline-item">
            <h3>TCS iON Career Edge – Young Professional</h3>
            <p className="organization"><img src={office} />TCS iON | <FaCalendar />April 2025</p>
            <p className="description"><img src={bullet} /> A certification covering essential workplace skills including communication, soft skills, IT basics, and an intro to AI.</p>
            <a href={TCS_iON} className="certificate-link"><FaCertificate /> View Certificate</a>
          </div>

          <div className="timeline-item">
            <h3>Full Stack Web Development Internship</h3>
            <p className="organization"><img src={office} /> InternsElite | <FaCalendar /> 2024</p>
            <p className="description"><img src={bullet} />  Built and deployed a fashion website, to-do list, and weather app using React, Node.js, and MongoDB.</p>
            <a href={Internship_FSWD} className="certificate-link"><FaCertificate /> View Certificate</a>
            <a href={LOR_FSWD} className="certificate-link"><FaCertificate /> Letter Of Recommendation</a>
          </div>

          <div className="timeline-item">
            <h3>The Joy of Computing Python</h3>
            <p className="organization"> <img src={university} /> IIT Madras (NPTEL) | <FaCalendar /> 2024</p>
            <p className="description"><img src={bullet} /> Developed a strong foundation in Python programming and problem-solving techniques.</p>
            <a href={Python_NPTEL} className="certificate-link"><FaCertificate /> View Certificate</a>
          </div>

          <div className="timeline-item">
            <h3>Introduction to Packet Tracer</h3>
            <p className="organization"><img src={university} />  Cisco Networking Academy | <FaCalendar /> 2024</p>
            <p className="description"><img src={bullet} /> Learned the fundamentals of computer networking and packet simulation using Cisco Packet Tracer.</p>
            <a href={Cisco} className="certificate-link"><FaCertificate /> View Certificate</a>
          </div>

          <div className="timeline-item">
            <h3>Developer and Technology Job Simulation</h3>
            <p className="organization"><img src={office} /> Accenture | <FaCalendar /> 2024</p>
            <p className="description"><img src={bullet} /> Understood real-world software development workflows and business problem-solving through technology.</p>
            <a href={Accenture} className="certificate-link"><FaCertificate /> View Certficate</a>
          </div>

          <div className="timeline-item">
            <h3>Python for Data Science, AI, and Development</h3>
            <p className="organization"><img src={office} /> IBM (Coursera) | <FaCalendar /> 2024</p>
            <p className="description"><img src={bullet} /> Gained knowledge of Python applications in AI & Data Science, covering libraries like NumPy and Pandas.</p>
            <a href={Python_IBM} className="certificate-link"><FaCertificate /> View Certificate</a>
          </div>

          <div className="timeline-item">
            <h3>Workshop: Roadmap to Becoming a Full Stack Developer</h3>
            <p className="organization"><img src={university} />  Teerthanker Mahaveer University | <FaCalendar /> Dec 3, 2024</p>
            <p className="description"><img src={bullet} /> Attended an interactive workshop on mastering full stack development.</p>
            <a href={Workshop} className="certificate-link"><FaCertificate /> View Certificate</a>
          </div>

          <div className="timeline-item">
            <h3>Python 3.4.3 Training</h3>
            <p className="organization"><img src={university} />  IIT Bombay (Spoken Tutorial Project) | <FaCalendar /> Dec 8, 2023</p>
            <p className="description"><img src={bullet} /> Completed a Python training program with an online assessment.</p>
            <a href={Python_IIT} className="certificate-link"><FaCertificate /> View Certificate</a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;


