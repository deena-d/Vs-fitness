import React from "react";
import { programsData } from "../../data/programsData";


const Program = () => {
  return (
    <div style={{ backgroundColor: "#3c3f45" }}>
      <div
        className="flex flex-col gap-2 px-4 py-4"
        style={{ backgroundColor: "#3c3f45" }}
      >
        <div className="flex flex-wrap justify-center gap-2 text-white uppercase italic">
          <span
            className="block text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl program-text"
            style={{ WebkitTextStroke: "2px white", color: "transparent" }}
          >
            Explore our
          </span>
          <span className="block text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Programs
          </span>
          <span
            className="block text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ WebkitTextStroke: "2px white", color: "transparent" }}
          >
            to shape you
          </span>
        </div>
      </div>
      <div
  className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
  style={{ backgroundColor: "#3c3f45", marginTop: "2rem" }}
>
  {programsData.slice(0, 6).map((program) => (
    <div
      className="bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center shadow-lg hover:bg-yellow-100 hover:text-black transition duration-300 ease-in-out"
      key={program.id}
      style={{
        width: "100%",
        maxWidth: "250px",
        height: "300px", // Height of each program card
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto", // Center the cards horizontally
      }}
    >
      <div className="w-16 h-16 mb-2 fill-current">{program.image}</div>
      <span className="font-bold text-xl text-center mt-2">
        {program.heading}
      </span>
      <span className="text-sm leading-5 text-center mt-1">
        {program.details}
      </span>
    </div>
  ))}
</div>


      {/* Media Query for responsive design */}
      <style jsx>{`
        @media (max-width: 775px) {
          .program-text {
            font-size: 1.5rem; /* Adjust text size */
          }
          .bg-gray-800 {
            height: 250px; /* Reduce card height */
          }
        }
      `}</style>
      {/* Scroll Up Arrow */}
      {/* <div className="mt-8 flex justify-end">
          <Link
            to="Aboutus" // Replace with the section you want to scroll up to
            smooth={true}
            duration={500}
            className="text-yellow-600 hover:text-yellow-700 transition duration-300"
          >
            <FaArrowUp className="text-4xl" />
          </Link>
        </div> */}
    </div>
  );
};

export default Program;
