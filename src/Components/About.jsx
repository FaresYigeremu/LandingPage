import React from 'react'
import backgroundImage from './About2.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import video from './videoDemo2.mp4'
function About() {
  return (
    <div>
        <div className="p-6">
          <h2 className="text-4xl font-bold text-white">About</h2>
          <div className="bg-no-repeat bg-center bg-cover w-full h-[600px]"
                style={{backgroundImage: `url(${backgroundImage})`}}>
                    
          </div>
          
          <p className="mt-4 text-lg">
            Welcome to my <a href="https://e-commerce-483ac.web.app">portfolio!</a> I proposed this project to
            practice my skills in developing a full-stack application using
            <a href="https://reactjs.org"> React js</a>, <a href="https://firebase.google.com"> Firebase</a> and
             <a href="https://stripe.com">Stripe</a>. But what inspired me to create an
            e-commerce platform was a personal experience: I had always been
            frustrated with the difficulty of finding the right products online,
            and the complexity of checkout processes. I wanted to create
            something that would make it easy for users to find what they were
            looking for, and complete their purchase quickly and easily.

          </p>
          <p className="mt-4 text-lg">
            The project was completed in 17 days and is a portfolio project to commemorate my journey throught Alx-Foundation.
          </p>
          <p className="mt-4 text-lg">
            The team consisted of:-
            <ul className="list-disc ml-6">
              <li>
                  Fares Yigeremu(Yeah! I am the creator of this project and the only one)
              </li>
            </ul>
          </p>
          <p className='flex'>
          <a href="https://www.linkedin.com/in/fares-yigeremu-974a33220/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-4xl mx-2 hover:text-blue-800" />
          </a>
          <a href="https://github.com/FaresYigeremu" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-4xl mx-2 hover:text-blue-800" />
          </a>
          <a href="https://twitter.com/75_always" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter className="text-4xl mx-2 hover:text-blue-800" />
          </a>
          </p>
          <p className="mt-4 text-lg">
            The github repository for this project can be found{" "}
            <a
              href="https://github.com/FaresYigeremu/E-commerce"
              target="_blank"
              rel="noopener noreferrer"
            >
              here.
            </a>
            </p>
            <div className="mt-10">
              <h2 className="text-3xl font-bold text-white">Watch how it works</h2>
              <div className="mt-4">
                <video
                  width="100%"
                  controls
                >
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default About