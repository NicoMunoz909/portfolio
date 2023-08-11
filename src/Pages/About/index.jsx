import "./About.css";
import {
  SiAmazonec2,
  SiAmazonrds,
  SiAwsamplify,
  SiCss3,
  SiEslint,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNginx,
  SiNodedotjs,
  SiNpm,
  SiPostman,
  SiReact,
  SiRender,
  SiSequelize,
  SiVercel,
} from "react-icons/si";

const About = () => {
  return (
    <div className="about content">
      <div className="about-description">
        <h2>about me</h2>
        <div className="about-description__content">
          <div className="img-container">
            <img src="https://placehold.co/1200x800" alt="" />
          </div>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad dolorem provident sequi. Facilis ex
              molestias velit magni quos. Reiciendis alias impedit, repellendus adipisci accusantium iure
              dolore dicta deserunt dignissimos laboriosam.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi praesentium vitae in cumque,
              rerum, soluta quas exercitationem numquam nulla nam deserunt consequuntur pariatur obcaecati
              officia ipsum officiis mollitia eligendi facere!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi praesentium vitae in cumque,
              rerum, soluta quas exercitationem numquam nulla nam deserunt consequuntur pariatur obcaecati
              officia ipsum officiis mollitia eligendi facere!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi praesentium vitae in cumque,
              rerum, soluta quas exercitationem numquam nulla nam deserunt consequuntur pariatur obcaecati
              officia ipsum officiis mollitia eligendi facere!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi praesentium vitae in cumque,
              rerum, soluta quas exercitationem numquam nulla nam deserunt consequuntur pariatur obcaecati
              officia ipsum officiis mollitia eligendi facere!
            </p>
          </div>
        </div>
      </div>
      <div className="about-technologies">
        <h2>technologies</h2>
        <p>
          The technologies I've used since starting my journey.
          <br /> If they are listed here is because I consider I've spent enough time with to have at least a
          solid understanding on the basics, and I am able to use the documentation to work around any issues
          I face with them.
        </p>
        <div className="about_technologies__icons">
          <div>
            <SiReact />
            <span>React JS</span>
          </div>
          <div>
            <SiJavascript />
            <span>JavaScript</span>
          </div>
          <div>
            <SiHtml5 />
            <span>HTML</span>
          </div>
          <div>
            <SiCss3 />
            <span>CSS</span>
          </div>
          <div>
            <SiNodedotjs />
            <span>Node JS</span>
          </div>
          <div>
            <SiExpress />
            <span>Express JS</span>
          </div>
          <div>
            <SiMysql />
            <span>MySQL</span>
          </div>
          <div>
            <SiSequelize />
            <span>Sequelize</span>
          </div>
          <div>
            <SiMongodb />
            <span>MongoDB</span>
          </div>
          <div>
            <SiMongoose />
            <span>Mongoose</span>
          </div>
          <div>
            <SiGit />
            <span>Git</span>
          </div>
          <div>
            <SiGithub />
            <span>GitHub</span>
          </div>
          <div>
            <SiNginx />
            <span>Nginx</span>
          </div>
          <div>
            <SiPostman />
            <span>Postman</span>
          </div>
          <div>
            <SiVercel />
            <span>Vercel</span>
          </div>
          <div>
            <SiRender />
            <span>Render</span>
          </div>
          <div>
            <SiNpm />
            <span>NPM</span>
          </div>
          <div>
            <SiAmazonec2 />
            <span>AWS EC2</span>
          </div>
          <div>
            <SiAwsamplify />
            <span>AWS Amplify</span>
          </div>
          <div>
            <SiAmazonrds />
            <span>AWS RDS</span>
          </div>
          <div>
            <SiEslint />
            <span>EsLint</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
