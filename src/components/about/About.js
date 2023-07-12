import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span className={Style.green}>evgenymarik $</span> cat aboutevgeny </p>
         <p><span className={Style.green}>aboutevgeny <span className={Style.green}>(main)</span> $ </span>
         Hello! I'm Evgeny, a fun-loving guy who finds joy in life's simple pleasures. I deeply love problems! code and cyber my favourite, engaging in meaningful conversations, and spending quality time with people.
         </p>
         <p>
         Exploring new places and going on exciting trips are among my favourite ways to create lasting memories.
         </p>
         <p>
         <a target={'_blank'} rel={'noreferrer'} >Professionally</a>, I've been working As a Freelance software developer and consulter for several projects since June 2022. I am a software engineer with a B.Sc. degree in Software Engineering. I thrive in the dynamic world of technology, utilizing my skills to design innovative solutions and contribute to the ever-evolving field. In addition to my passion for software engineering, I am keenly interested in the stock market. As a daily trader, I enjoy analyzing market trends and making informed investment decisions. This combination of technical expertise and financial acumen allows me to approach challenges with a unique perspective. With my vibrant personality, love for life, and diverse skill set, I bring a refreshing energy to any team or project. I enthusiastically embrace new opportunities, always seeking personal growth and professional excellence.
         </p>
         <p>
         <a target={'_blank'} rel={'noreferrer'} >I can do and learn anything!!</a> Can contribute much to your organization and provide added value in various areas such as business, cybersecurity, stocks, mathematics, sports and more.
         </p> <p>Let's connect and explore how our shared interests and expertise can lead to exciting collaborations and meaningful achievements.</p>
        </>;
    }
    
    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}