import React, { useEffect } from "react";
import hero_image from "../../assets/background.jpg"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";
import achievements from "../../data/achievementsData";

const ExploreMe = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id="ExploreMe"
      className="p-8 md:p-16 relative min-h-screen"
      style={{
        backgroundImage: `url(${hero_image})`, // Corrected background image syntax
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // For parallax scrolling effect
      }}
    >
      {/* Semi-transparent overlay to enhance text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 text-white">
        {/* Trainer and Gym Details */}
        <div
          className="max-w-4xl mx-auto mb-16 text-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.6)",
          }}
        >
          <h1 className="text-4xl font-bold mb-6">Explore Me</h1>
          <p className="text-lg mb-6 leading-relaxed">
            Welcome to the world of fitness with Vinoth, your master trainer.
            With over 18 years of experience in the gym industry, Vinoth has
            worked as a professional trainer for nearly 15 years, training over
            200 students. VS Fitness Gym, founded in January 2023, has quickly
            grown to over 210 active members. Vinoth’s proudest achievements
            include having 15 of his students win weightlifting competitions,
            and he himself secured the 3rd prize in one of these prestigious
            events.
          </p>
          <p className="text-lg leading-relaxed">
            VS Fitness Gym is a modern facility that opened in January 2023. It
            offers a top-notch training environment with advanced equipment and
            a variety of classes designed for all fitness levels. Whether you're
            a beginner or an experienced athlete, our gym provides the ideal
            setting to pursue your fitness goals. With over 210 active members
            and counting, VS Fitness Gym is dedicated to fostering a community
            where members can excel and transform their health and wellness.
          </p>
        </div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="relative p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105"
            >
             <img
  src={achievement.image}
  alt={achievement.title}
  className="w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-44 lg:w-34 lg:h-48 object-cover rounded-lg mb-4"
/>

              <h3 className="text-xl font-bold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-300">{achievement.year}</p>
              <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <p className="text-white text-center p-4">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/")}
            className="inline-block px-8 py-4 bg-yellow-600 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-700 transition duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreMe;
