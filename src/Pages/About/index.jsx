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
import imagenPerfil from "/perfil.jpg";

const About = () => {
  return (
    <div className="about content">
      <div className="about-description">
        <h1>about me</h1>
        <div className="about-description__content">
          <div className="img-container">
            <img src={imagenPerfil} alt="" />
          </div>
          <div>
            <h2>My journey</h2>
            <p>
              I've been hooked to technology since my dad gifted me a Playstation when I was 4 years old. At
              10 years old I had already learnt how to burn my own PS2 games, use CheatEngine on web games,
              and unsuscefully tried to create a private server for a MMORPG game (we came close tough).
            </p>
            <p>
              It wasn't until past my 20's that I became interested in software development. My journey took
              trough countless free courses like <a>this one</a> from MIT wich taught me the basics of
              computer science, open source programs like FreeCodeCamp and TheOdinProject, and finally two
              intensive bootcamps that I feel took me out of the 'tutorial hell'. Since then I haven't stopped
              learning, working on projects to make some every-day tasks easier.
            </p>
            <h2>As a person</h2>
            <p>
              I am curious by nature, always going the extra mile to understand the why's of everything I do,
              and love learning. I like to approach everything I do with an open-mind ready to absorb new
              knowledge. I am perfectionist and that reflects in my coding, I strive to keep it clean,
              consistent and readable. Also even the most insignificant of bugs annoys me. Sure I can put
              something together quickly and make it work, but then I feel the urge to organize it.
            </p>
            <h2>Other Interests</h2>
            <p>
              Passionate about electronic music, it is not only my passion but also my creative outlet. In my
              free time you will most likely find me searching and downloading new music, recording a mix, or
              producing a new track. Other interests of mine include gaming, travelling and hiking.
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
