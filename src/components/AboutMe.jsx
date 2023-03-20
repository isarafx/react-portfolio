import React from 'react'
import Navigationbar from './Navigationbar'

const AboutMe = () => {
  return (
    <>
    <Navigationbar />
    <div className="container">
      <br />
      <h1>About me</h1>
        <br />
        <h2>Isara Kunudomchaiwat</h2>
        <h3>Email: isrdev@icloud.com</h3>
          <p>Technology will improve the quality of life for humankind, but it is the goodness in people's hearts that will make this world a better place for everyone.</p>
        <br />
        <hr />
        <h2>Education</h2>
        <br />
          <h3>Vocational Certificate in Electrical and Electronic Engineering</h3>
            <h5>Thai-German Pre-Engineering School</h5>
            <h5>CIT, KMUTNB</h5>
            <h5>2014-2017</h5>
          <br />
          <h3>B.Eng in Computer Engineering</h3>
            <h5>Department of Electrical and Computer Engineering</h5>
            <h5>Faculty of Engineering, KMUTNB</h5>
            <h5>2017-2023</h5>
        <br />
        <hr />
        <h2>Work Experience</h2>
          <br />
          <h3>Internship</h3>
            <h4>Stackpython (2019-present)</h4>
              <ul>
                <li>Article writer, Video Editor</li>
                <li>Deploy and maintain website</li>
                <li>Teaching assistant</li>
              </ul>
          <h3>Freelance Programmer</h3>
            <h4>Stackpython Team (2020-present)</h4>
              <ul>
                <li>Develop websites or APIs with a team</li>
                <li>Create RESTful API endpoints</li>
                <li>Maintenance of sites on Digital Ocean</li>
                <li>Running</li>
                <li>Develop websites based on customer requirements</li>
                <li>Lecturer, Teaching Assistant</li>
              </ul>
        <br />
        <hr />
        <h2>Technology</h2>
        <br />
          <h3>Operating Systems</h3>
            <p>Windows, MacOS</p>
          <h3>Frameworks</h3>
            <p>Django, FastAPI, React, NextJS</p>
          <h3>Programing Language</h3>
            <p>HTML, CSS, JS, Python</p>
          <h3>Tools</h3>
            <p>VS Code, Insomnia, DBWeaver, PGadmin, GIT, Github, nano</p>
        <br />
        <hr />
        <h2>Language Proficiency</h2>
          <br />
          <ul>
            <li>Thai: Native</li>
            <li>English: Good (Toeic:905)</li>
          </ul>
        <br />
        <hr />
        <h2>Trivials</h2>
          <br />
          <ul>
            <li>Allergic to seafood</li>
            <li>Guitar Player</li>
            <li>Chess Enthusiast</li>
            <li>Runner</li>
            <li>Manchester United Supporter</li>
            <li>Zodiac Sign: Virgo</li>
          </ul>
    </div>
    </>
  )
}

export default AboutMe
