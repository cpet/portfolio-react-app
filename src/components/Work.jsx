import React from 'react';
import LearnWithSesame from '../assets/LearnWithSesame.png';
import Mathimals from '../assets/Mathimals.png';
import MathVsMonsters from '../assets/MathVsMonsters.png';
import VikingQueenDefense from '../assets/VikingQueenDefense.png';
import Shmupnage from '../assets/Shmupnage.png';
import Mathsolve from '../assets/Mathsolve.png';
import EX4CE from '../assets/EX4CE.png';
import Galaxe from '../assets/Galaxe.png';
import OmvicQuiz from '../assets/OmvicQuiz.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#3C51A3] font-bold bg-slate-100'>
      <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center text-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#A33C8A]'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Learn With Homer */}
          <div style={{ backgroundImage: `url(${LearnWithSesame})` }}
            className='shadow-sm shadow-slate-700 group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white px-2 justify-center text-center'>
                Phaser 3 HTML5 Game to Mobile via HOMER Wrapper.
              </span>
              <div className='pt-8 text-center'>
                <a href='https://play.google.com/store/apps/details?id=com.homer.sesame&hl=en_CA&gl=US' target={'_blank'} rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3C51A3] font-bold text-lg'>
                    App Store Link
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* EX4CE */}
          <div style={{ backgroundImage: `url(${EX4CE})` }}
            className='shadow-sm shadow-slate-700 group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white px-5 justify-center text-center'>
                Mobile Browser Frienly Phaser 3 HTML5 Game.
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.newgrounds.com/portal/view/760525' target={'_blank'} rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3C51A3] font-bold text-lg'>
                    Play Link
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Mathimals */}
          <div style={{ backgroundImage: `url(${Mathimals})` }}
            className='shadow-sm shadow-slate-700 group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white px-5 justify-center text-center'>
                Mobile Browser Frienly Phaser 3 HTML5 Game. Mathgames.com's API.
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.mathgames.com/play/mathimals.html' target={'_blank'} rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3C51A3] font-bold text-lg'>
                    Play Link
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Math vs Monsters */}
          <div style={{ backgroundImage: `url(${MathVsMonsters})` }}
            className='shadow-sm shadow-slate-700 group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white px-5 justify-center text-center'>
                Pixi JS 4.6.0 HTML5 Game. Mathgames.com's API.
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.mathgames.com/play/mathvsmonsters.html' target={'_blank'} rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3C51A3] font-bold text-lg'>
                    Play Link
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Viking Queen Defense */}
          <div style={{ backgroundImage: `url(${VikingQueenDefense})` }}
            className='shadow-sm shadow-slate-700 group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white px-5 justify-center text-center'>
                Pixi JS 4.6.0 HTML5 Game. Mathgames.com's API.
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.mathgames.com/play/viking-queen-defense.html' target={'_blank'} rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3C51A3] font-bold text-lg'>
                    Play Link
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Mathsolve */}
          <div style={{ backgroundImage: `url(${Mathsolve})` }}
            className='shadow-sm shadow-slate-700 group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white px-5 justify-center text-center'>
                Phaser v3 HTML5 Game. Mobile Web Optimized.
              </span>
              <div className='pt-8 text-center'>
                <a href='https://cpet.itch.io/match-2-math-solver' target={'_blank'} rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3C51A3] font-bold text-lg'>
                    Play Link
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Shmupnage */}
          <div style={{ backgroundImage: `url(${OmvicQuiz})` }}
            className='shadow-sm shadow-slate-700 group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white px-5 justify-center text-center'>
                Phaser v2 HTML5 Game.
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.omvic.on.ca/portal/quiz.aspx' target={'_blank'} rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3C51A3] font-bold text-lg'>
                    Play Link
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Shmupnage */}
          <div style={{ backgroundImage: `url(${Shmupnage})` }}
            className='shadow-sm shadow-slate-700 group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white px-5 justify-center text-center'>
                Phaser v3 HTML5 Game. Mobile Web Optimized.
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.y8.com/games/shmupnage' target={'_blank'} rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3C51A3] font-bold text-lg'>
                    Play Link
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Galaxe */}
          <div style={{ backgroundImage: `url(${Galaxe})` }}
            className='shadow-sm shadow-slate-700 group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white px-5 justify-center text-center'>
                Pixi HTML5 Game. Mobile Web Optimized.
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.y8.com/games/galaxe' target={'_blank'} rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3C51A3] font-bold text-lg'>
                    Play Link
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;
