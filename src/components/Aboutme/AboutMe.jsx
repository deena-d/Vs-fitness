import React, { useState } from "react";
import hero_image from "../../assets/hero_image.png"; // Main content image
import banner_image from "../../assets/banner.jpg"; // Your banner image
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const AboutMe = () => {
  const [bannerVisible, setBannerVisible] = useState(true); // State to control banner visibility
  const [closingBanner, setClosingBanner] = useState(false); // State to trigger fade-out animation

  // Function to close the banner with animation
  const closeBanner = () => {
    setClosingBanner(true);
    setTimeout(() => setBannerVisible(false), 500); // Remove banner after fade-out animation
  };

  // Function to scroll smoothly to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {bannerVisible && (
        <BannerOverlay className={closingBanner ? "fade-out" : "fade-in"}>
          <BannerContent>
            <img src={banner_image} alt="Banner" />
            <CloseButton onClick={closeBanner}>X</CloseButton>
          </BannerContent>
        </BannerOverlay>
      )}

      <AboutMeContainer bannerVisible={bannerVisible}>
        {/* Left side image */}
        <ImageContainer>
          <img
            src={hero_image}
            alt="Trainer"
            className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md"
          />
        </ImageContainer>

        {/* Right side content */}
        <ContentContainer>
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">About Me</h2>
          <TextWrapper>
            <StyledSpan
              className="block text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              style={{ WebkitTextStroke: "2px white", color: "transparent" }}
            >
              Welcome to
            </StyledSpan>
            <span className="block text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Fitness
            </span>
            <StyledSpan
              className="block text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              style={{ WebkitTextStroke: "2px white", color: "transparent" }}
            >
              with vino
            </StyledSpan>
          </TextWrapper>
          <Description>
            Greetings! I'm Vinoth, your dedicated fitness mentor and master
            trainer at VS Fitness Gym. With a robust foundation of over 18 years
            in the fitness realm, I have spent the last 15 years guiding more
            than 200 individuals on their journey to strength, health, and
            well-being. <strong>Specializing in Powerlifting and Weightlifting
            for both men and women</strong>, my personalized training sessions
            are meticulously tailored to each individual, ensuring every client
            experiences a transformative path to peak physical condition.
          </Description>
          <Description>
            At VS Fitness Gym, we offer more than just a traditional workout
            environment. <strong>We break boundaries by providing a wide variety
            of training options</strong>— Functional
            Training and dynamic group classes. Our philosophy is simple:
            fitness is for everyone, and it should be accessible and enjoyable.
            <strong>That's why we offer membership plans that are both
            affordable and flexible</strong>, allowing you to embark on your
            fitness journey without barriers. Join us at VS Fitness, where the
            pursuit of strength meets the joy of movement, and together we’ll
            craft the best version of you.
          </Description>

          {/* Explore Me Button */}
          <Link
            to="/explore-me"
            className="inline-block px-8 py-4 bg-yellow-600 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-700 transition duration-300"
          >
            Explore Me
          </Link>
        </ContentContainer>

        {/* Scroll Up Arrow */}
        <ScrollUpWrapper onClick={scrollToTop}>
          <FaArrowUp className="text-4xl text-yellow-600 hover:text-yellow-700 transition duration-300" />
        </ScrollUpWrapper>
      </AboutMeContainer>
    </>
  );
};

// Keyframes for fade-in and fade-out animations
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// Styled Components
const BannerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  /* Animation for fading in and out */
  &.fade-in {
    animation: ${fadeIn} 0.5s ease-out forwards;
  }
  &.fade-out {
    animation: ${fadeOut} 0.5s ease-out forwards;
  }
`;

const BannerContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 100%; /* Adjust the size of the banner image */
    max-width: 750px; /* Limit maximum size */
    height: auto;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  color: white;
`;

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #3c3f45;
  margin-top: ${({ bannerVisible }) => (bannerVisible ? "0" : "0")};

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 4rem;
  }
`;


const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  flex: 1;
  margin-top: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 0;
    text-align: left;
    margin-left: 1rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  color: white;
  text-transform: uppercase;
  font-style: italic;
`;

const StyledSpan = styled.span`
  background: linear-gradient(to right, yellow, orange);
  -webkit-background-clip: text;
  color: transparent;
`;

const Description = styled.p`
  color: white;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;

  strong {
    color: #facc15; /* Tailwind yellow-400 equivalent */
  }
`;

const ScrollUpWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export default AboutMe;
