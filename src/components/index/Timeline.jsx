import React, { useState } from 'react'


const Timeline = () => {

    const detail = {
        1:{
            title:"about:me",
            date:"Sep 1999 - Present",
            responsibility:
            ["INFP Virgo",
                "Hi I'm Isara Kunudomchaiwat, born and raised in Bangkok Thailand I'm 23 INFP I've broad knowledge especially on IOT but currently interesting in web developments. I used python for a long time now It's my main programing language but I don't mind leaning new things",
            "-Isara"
            ],
            tag:["Guitarist", "chess", "Basic electrical", "Cooking", "Seafood allergic", "INFP", "Virgo"],
        },
        2:{
            title:"Internship @ Stackpython",
            date:"Nov 2019 - July 2020",
            responsibility:
            [
                "Responsibility :",
            "-Deploy an monitor Stackpython site",
            "-Edit programing tutorial video",
            "-Share knowledge by writing an programing article",
            "-Teaching assistant"],
            tag:['Django', "Digital Ocean", "Nginx", "Python", "HTML", "CSS", "JS"],
        },
        3:
        {
            title:"Freelance Programmer @ Stackpython",
            date:"Aug 2020 - Present",
            responsibility:
            [
            "Responsibility :",    
            "-Deploy an monitor Customer site",
            "-Lecturer, Teaching assistant",
            "-Share knowledge by writing an programing article",
            "-Develope program from customer requirements"],
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