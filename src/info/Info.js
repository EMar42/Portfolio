import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Evgeny",
    lastName: "Marik",
    initials: "EM", // the example uses first and last, but feel free to use three or more if you like.
    position: "Learner, for they all enrich my knowledge..",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '⛽',
            text: 'Fueled by people, love & coffee' 
        },
        {
            link: "mailto:evgenymarik@gmail.com?subject=I have a Job for you!",
            emoji: "💼",
            text: "Freelance Software Developer"
        },
        {
            link: "https://www.nerdwallet.com/reviews/investing/brokers/interactive-brokers#:~:text=Interactive%20Brokers%20attracts%20active%20traders,trades%20of%20stocks%20and%20ETFs.",
            emoji: '📈',
            text: ' Daily Trader'
        },
        {
            link: "mailto:evgenymarik@gmail.com?subject=Let's chat!",
            emoji: "📧",
            text: "Evgenymarik@gmail.com"
        },{
            emoji: '🌎',
            text: 'Based in Israel'
        },
        {
            link: 'https://drive.google.com/file/d/1EVHQ_gDkEwHTv83MzVhkVGfykxSsDGv7/view?usp=sharing',
            emoji: '📥',
            text: 'CV [press here to download]'
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/evgeny.marik/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://github.com/EMar42",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/evgeny-marik-b48880217",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
    ],
    bio: " I'm a fun-loving guy who finds joy in the simple pleasures of life. I have a deep love for code, engaging in meaningful conversations, and spending quality time with people. Exploring new places and going on exciting trips are among my favorite ways to create lasting memories. \nProfessionally, I am a software engineer with a B.Sc. degree in Software Engineering. I thrive in the dynamic world of technology, utilizing my skills to design innovative solutions and contribute to the ever-evolving field. \nIn addition to my passion for software engineering, I have a keen interest in the stock market. As a daily trader, I enjoy analyzing market trends and making informed investment decisions. This combination of technical expertise and financial acumen allows me to approach challenges with a unique perspective. \n\n With my vibrant personality, love for life, and diverse skill set, I bring a refreshing energy to any team or project. I embrace new opportunities with enthusiasm, always seeking personal growth and professional excellence. Let's connect and explore how our shared interests and expertise can lead to exciting collaborations and meaningful achievements.",
    skills:
        {
            proficientWith: ['javascript', 'python', 'java', 'c#/c', ,' git(.*)','nodejs', 'react.js', 'vue.js', 'sql/nosql', 'android', 'aws', 'linux/windows'],
            exposedTo: ['c++' , 'docker' ,'go' , 'k8', 'angular' ],
        }
    ,
    hobbies: [
        {
            label : 'travel',
            emoji: '🛫'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'basketball',
            emoji: '🏀'
        },
        {
            label: 'cooking',
            emoji: '👨‍🍳'
        }, 
        {
            label: 'movies',
            emoji: '🎥'
        }
    
    ],
    portfolio: [
        {
            title: "CampIL",
            live: "https://campil.onrender.com/", 
            source: "https://github.com/EMar42/CampIL", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock2
        },
        {
            title: "CoolTheme",
            live: "https://cooltheme.netlify.app/",
            source: "https://github.com/EMar42/Web-Theme",
            image: mock1
        },
        {
            title: "Query Parser",
            source: "https://github.com/EMar42/Data-Query",
            image: mock3
        },
        {
            title: "Jabeta",
            source: "https://github.com/EMar42/my-Jabeta",
            image: mock4
        }
    ]
}