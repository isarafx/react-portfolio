import React, { useState } from 'react'


const Timeline = () => {

    const detail = {
        1:{
            title:"about:me",
            date:"Sep 1999 - Present",
            responsibility:
            ["INFP Virgo",
                "Greetings, my name is Isara Kunudomchaiwat. I am a 23-year-old INFP who was born and raised in Bangkok, Thailand. I am currently interested in web development. My proficiency lies in Python, which has been my primary programming language for a substantial duration. However, I am open to learning new technologies and programming languages to expand my skillset."
            ],
            tag:["Guitarist", "chess", "Basic electrical", "Cooking", "Seafood allergic", "INFP", "Virgo"],
        },
        2:{
            title:"Internship @ Stackpython",
            date:"Nov 2019 - July 2020",
            responsibility:
            [
                "Responsibilities:",
            "-Deploying and monitoring the Stackpython site.",
            "-Editing programming tutorial videos.",
            "-Sharing knowledge through programming articles.",
            "-Assisting with teaching."],
            tag:['Django', "Digital Ocean", "Nginx", "Python", "HTML", "CSS", "JS"],
        },
        3:
        {
            title:"Freelance Programmer @ Stackpython",
            date:"Aug 2020 - Present",
            responsibility:
            [
            "Responsibilities:",    
            "-Deploying and monitoring customer sites.",
            "-Lecturing and assisting with teaching.",
            "-Developing programs based on customer requirements."],
            tag:['Django', "FastAPI", "GIT", "Docker", "Digital Ocean", "Nginx", "Python", "HTML", "CSS", "JS"],
        },
    }
    const [info, setInfo] = useState(detail[1])
  return (
    <div className="container  content-space-t-4 content-space-b-3">
        <div class="row">
            <div class="col-md-6">
                <ul className='tagmargin border-start'>
                    <a className='tagwork' href='javascript:;' onClick={()=>{setInfo(detail[1])}}><li className='tagwork'>about:me</li></a>
                    
                    <a className='tagwork' href='javascript:;' onClick={()=>{setInfo(detail[2])}}><li className='tagwork'>Intership at Stackpython</li></a>
                   
                    <a className='tagwork' href='javascript:;' onClick={()=>{setInfo(detail[3])}}><li className='tagwork'>Freelance with Stackpython Team</li></a>
                    
                </ul>
            </div>
            
            <div class="col-md-6">
                <h2>{info.title}</h2>
                <h3>{info.date}</h3>
                {
                info.responsibility.map((item, index)=>{
                    return <p key={index}>{item}</p>
                } )
                }
            <p>
                {
                info.tag.map((item, index)=>{
                    return  <>
                                { (index ? ' ' : '')  }<span class="badge bg-secondary shadow-secondary" key={index} >{item}</span> 
                            </>
                } )
                }
            </p>
            </div>
            
        </div>
    </div>
  )
}

export default Timeline