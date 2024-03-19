import video from "./assets/output.mp4";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { useState } from "react";
const notes = [
  {
    id: "1",
    head: "Be who you are",
    note: "Every day, you inspire me with your strength, kindness, and unwavering determination. And I'm endlessly grateful to have you by my side.",
  },
  {
    id: "2",
    head: "Believe in Yourself",
    note: "Never doubt the incredible person you are. You have a heart of gold, a mind full of wisdom, and a spirit that shines brightly.",
  },
  {
    id: "3",
    head: "You're Beautiful Inside and Out",
    note: "Your beauty radiates from within, lighting up the world around you with warmth and kindness. ",
  },
  {
    id: "4",
    head: "Chase Your Dreams",
    note: "Follow your dreams fearlessly, knowing that I'll be cheering you on every step of the way. ",
  },
  {
    id: "5",
    head: "Embrace Your Strength",
    note: "You're stronger than you know, capable of overcoming any obstacle that comes your way. ",
  },
  {
    id: "6",
    head: "You're Enough",
    note: "You are more than enough, just as you are. Your presence brings joy into my life and the lives of those around you.",
  },
  {
    id: "7",
    head: "Keep Shining Brightly",
    note: "Your light shines brighter than the stars, illuminating even the darkest of days. Keep shining brightly.",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return notes.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  const handleRightClick = () => {
    setCurrentIndex((prev) => {
      if (prev === notes.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  return (
    <div className="bg-[#FF007F] p-10 w-[100%] h-[100vh]">
      <h1 className="text-center text-4xl  font-['Cormorant_Garamond'] font-bold">
        Happy Birthday Ritu 🤍
      </h1>
      <div className=" my-10 flex items-center justify-center">
        <video width="500" controls className="shadow-2xl">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="w-[250px] my-3 mx-auto relative">
        <ul className=" text-center  ">
          <li
            className="bg-black text-white p-2 font-mono shadow-lg rounded-lg w-full h-full"
            key={notes[currentIndex].id}
          >
            <h2 className="text-2xl mb-2">
              {notes[currentIndex].id}. {notes[currentIndex].head}
            </h2>
            <p>{notes[currentIndex].note}</p>
          </li>
        </ul>
        <div
          onClick={handleLeftClick}
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-5  rounded-full p-2 bg-black/20 text-white cursor-pointer"
        >
          <SlArrowLeft size={20} />
        </div>
        <div
          onClick={handleRightClick}
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer"
        >
          <SlArrowRight size={20} />
        </div>
      </div>
      <div className="w-[70%] my-6 mx-auto text-center font-serif text-xl">
        <h2>
          Thank You for being there with support, late night shayaris and love.
        </h2>
      </div>
    </div>
  );
}

export default App;
