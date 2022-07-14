// Skills Icons
import PostgreSQL from "./images/elephant.svg.png"
import bootstrap from "./images/bootstrap.svg.png"
import css from "./images/css.svg.png"
import django from "./images/django.svg.png"
import html from './images/html5.png'
import javascript from './images/Javascript.svg.png'
import mongodb from './images/mongodb.svg.png'
import nodejs from './images/nodejs.svg.png'
import npm from './images/npm.svg.png'
import python from './images/python.svg.png'
import react from './images/react.svg'
import sass from './images/sass.svg.png'
import typescript from './images/typescript.svg.png'
import yarn from './images/yarn.png'
import express from './images/express.png'
import linkedin from './images/linkedin.svg.png'
import resume from './images/resume.png'
import gitlab from './images/gitlab.svg'
import jira from './images/Jira.png'
import rust from './images/rust.png'


// Social Icon
import githubIcon from "./images/github.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Gerald!",
  headerTagline: [
    //Line 1 For Header
    "",
    //Line 2 For Header
    "GET MONEY",
    //Line 3 For Header
    "TERRARIA",
  ],
  //   Header Paragraph
  headerParagraph:
    "Former employee in the retail sector now a Full-Stack Software Developer with skills in JavaScript, Python and React. I thrive in environments where I’m constantly learning and I work hard to improve myself wherever I am. With multiple years of communicating with both co-workers and customers I have a strong foundation in communication and collaboration.",

  //Contact Email
  contactEmail: "gerald.tiamzon@yahoo.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Timed Attack", //Project Title - Add Your Project Title Here
      para:
        "A full-stack web application where other track-focused car enthusiasts can keep track of their lap times given a specific track of their choice. The goal of Timed Attack is to create a platform to compare lap times of other users and see a breakdown of their car to see to see how fast they are or seek opportunities to improve. Come test my site with this account but please be kind. test@gmail.com | PW: test1 ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/D0N1uDl.png",
      //Project URL - Add Your Project Url Here
      url: "https://timedattack.herokuapp.com/",
      github: "https://github.com/gtiamzon/timedattack",
      stack: "Node.JS | Express | Mongoose | Bootstrap"
    },
    {
      title: "Wayfarer", //Project Title - Add Your Project Title Here
      para:
        "Wayfarer is a full-stack web application where people can share tips about their travel locations around the world. It builds a community for people seeking to travel or craving to learn about the art and architectures around the world. Users can create posts to share their travel tips and highlights. Users also have their own profile page, which shows their information and their history of posts in descending order.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/1Zy8KMX.png",
      //Project URL - Add Your Project Url Here
      url: "https://wayfarer-art-app.herokuapp.com/",
      github: "https://github.com/selaguardia/ProjectWayfarer",
      stack:"Django | Python | PostgreSQL | Bootstrap"
    },
    {
      title: "Pokégram", //Project Title - Add Your Project Title Here
      para:
        "A Pokemon inspired photo share full-stack application in an effort to reverse engineer Instagram. Utilizing four key features of Instagram by allowing the user to create, delete, update, and like both posts and comments while having the goal of improving the user experience.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/625H7BG.png",
      //Project URL - Add Your Project Url Here
      url: "https://bestpokegram.herokuapp.com/posts",
      github: "https://github.com/jennifergoldberg/Pokegram",
      stack: "Node.JS | Express | Mongoose | Bootstrap"
    },
    {
      title: "Tomagotchi", //Project Title - Add Your Project Title Here
      para:
        "The goal of this project is to create a tomagotchi-like game, where the user has to keep the Avatar alive by eating, training, and meditating. By maintaining these three metrics and gaining levels, the Avatar will evolve depending on the level.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/mawWlIe.png",
      //Project URL - Add Your Project Url Here
      url: "https://gtiamzon.github.io/Project-Zero---Tomagotchi-/",
      github: "https://github.com/gtiamzon/Project-Zero---Tomagotchi-",
      stack: "HTML | CSS | JavaScript | PSone.css"
    
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Former employee in the retail sector now a Full-Stack Software Engineer with skills in JavaScript, Python and React. I thrive in environments where I’m constantly learning and I work hard to improve myself wherever I am. With multiple years of communicating with both co-workers and customers I have a strong foundation in communication and collaboration.",
  aboutParaTwo:
    "When I'm not writing code, you can find me doing something with my car. From performing maintenance to driving on race tracks, you can count me in. Other things I enjoy are food, traveling and playing video games.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    "https://i.imgur.com/0ssjEaq.jpg?1",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: django,
      para:
        "Django",
    },
    {
      img: express,
      para:
        "Express",
    },
    {
      img: bootstrap,
      para:
        "Bootstrap",
    },
    {
      img: css,
      para:
        "CSS3",
    },
    {
      img: html,
      para:
        "HTML5",
    },
    {
      img: javascript,
      para:
        "JavaScript",
    },
    {
      img: mongodb,
      para:
        "MongoDB",
    },
    {
      img: nodejs,
      para:
        "Node.js",
    },
    {
      img: npm,
      para:
        "NPM",
    },
    {
      img: PostgreSQL,
      para:
        "PostgreSQL",
    },
    {
      img: python,
      para:
        "Python",
    },
    {
      img: react,
      para:
        "React",
    },
    {
      img: sass,
      para:
        "SASS",
    },
    {
      img: typescript,
      para:
        "TypeScript",
    },
    {
      img: yarn,
      para:
        "Yarn",
    },
    {
      img: gitlab,
      para:
        "Gitlab"
    },
    {
      img: jira,
      para:
        "Jira"
    },
    {
      img: rust,
      para:
        "Rust"
    }
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  social: [
    // Add Or Remove The Link Accordingly
    {
      img: linkedin,
      url: "https://www.linkedin.com/in/gerald-tiamzon/",
    },
    { 
      img: githubIcon, 
      url: "https://github.com/gtiamzon" 
    },
    { 
      img: resume, 
      url: "https://docs.google.com/document/d/1nLSO0aydql0R9xq0q_wHMZT4EzYNNWNSQFfE14YE5V4/edit?usp=sharing" 
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
