import React from 'react';
import { useNavigate } from 'react-router-dom';
import myPhoto from '/aditya.jpg'; 

const AboutUs = () => {
  const navigate = useNavigate();
  document.title = "TF | ABOUT US";

  return (
    <div className="bg-[#1e1e2f] min-h-screen text-white px-8 py-12 w-full">
      <div className="w-full mx-auto space-y-10">
        <h1 className="text-2xl w-[20%] text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>
        </h1>

        <h1 className="text-4xl font-bold">About The Films</h1>

        <div className="flex flex-col md:flex-row items-start gap-10">
          <img
            src={myPhoto}
            alt="Developer Aditya"
            className="w-60 h-60 rounded-full object-cover border-4 border-purple-600"
          />

          <div>
            <p className="text-lg mb-4">
              <span className="font-bold text-purple-400">The Films</span> is a dynamic and modern platform designed to explore trending and popular movies, TV shows, and celebrities. Built for movie lovers, it features:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-1">
              <li>Live trending and top-rated feeds</li>
              <li>Pages dedicated to each movie, show, and actor</li>
              <li>Clean, responsive UI built with Tailwind CSS</li>
              <li>Smooth navigation powered by React Router</li>
            </ul>
            <p className="text-lg">
              This is <span className="font-semibold text-yellow-300">Version 1.0</span> of The Films. Upcoming features include advanced filtering, search by genre, and personalized recommendations.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-12 mb-4">About the Developer</h2>
          <p className="text-lg mb-2">
            I'm <span className="text-purple-400 font-semibold">Aditya Meena</span>, a third-year B.Tech student at IIIT Raichur, passionate about frontend development and generative AI. I love turning ideas into interactive user experiences.
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>React.js, Tailwind CSS, and JavaScript</li>
            <li>Backend basics with FastAPI and Flask</li>
            <li>Experience with LangChain, OpenAI, and Gemini</li>
          </ul>
          <p className="mt-4 text-lg">
            I'm focused on building beautiful and performant web apps that solve real problems and engage users. The Films is a fusion of my love for cinema and my skills in modern web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
