import React from "react";
import styled, { keyframes } from "styled-components";
import hero_image from "../../assets/image1.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";


const Hero = () => {
  return (
    <HeroContainer>
      <LeftContainer>
        <Container>
          <InnerContainer>
            <AnimatedDiv />
            <span>the best fitness gym in city</span>
          </InnerContainer>
        </Container>
        <TextContainer>
          <TopRow>
            <StyledSpan
              style={{ WebkitTextStroke: "2px white", color: "transparent" }}
            >
              Shape
            </StyledSpan>
            <StyledSpan>Your</StyledSpan>
          </TopRow>
          <BottomRow>
            <StyledSpan>Body</StyledSpan>
          </BottomRow>
        </TextContainer>
        <Description>
          In here we will help you to shape and build your ideal body and live
          up your life to the fullest
        </Description>
      </LeftContainer>

      <RightContainer>
        <HeartContainer>
          <HeartImage src={Heart} alt="heart" />
          <HeartText>
            <span>Heart Rate</span>
            <span> 120 bpm</span>
          </HeartText>
        </HeartContainer>
        <HeroImage src={hero_image} alt="Hero" />
        <CaloriesContainer>
          <CaloriesImage src={Calories} alt="calories" />
          <CaloriesText>
            <span>Calories Burned</span>
            <span> 220 kcal</span>
          </CaloriesText>
        </CaloriesContainer>
        {/* Scroll Up Arrow */}
        {/* <ScrollUpWrapper>
          <Link
            to="Header" // Replace with the section you want to scroll up to
            smooth={true}
            duration={500}
            className="text-yellow-600 hover:text-yellow-700 transition duration-300"
          >
            <FaArrowUp className="text-4xl" />
          </Link>
        </ScrollUpWrapper> */}
      </RightContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #3c3f45;
  padding-bottom: 2rem; /* Add padding to the bottom */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack elements vertically on small screens */
    height: auto; /* Allow auto height for mobile view */
    padding-bottom: 1rem; /* Reduce padding for mobile */
  }
`;

const LeftContainer = styled.div`
  background-color: #3c3f45;
  padding: 2rem;
  width: 50%; /* Adjust width for responsiveness */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  
  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    padding: 1rem; /* Adjust padding for mobile */
  }
`;

const RightContainer = styled.div`
  background-color: #facc15; /* Tailwind yellow-400 equivalent hex code */
  width: 50%; /* Adjust width for responsiveness */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center items */
    padding: 1rem; /* Adjust padding for mobile */
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  margin-top: 16px;
  background-color: #000;
  border-radius: 4rem;
  width: fit-content;
  padding: 20px;
  padding-left: 13px;
  text-transform: uppercase;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 15px;
    padding-left: 10px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    padding-left: 5px;
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const oscillate = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const AnimatedDiv = styled.div`
  position: absolute;
  background-color: yellow;
  width: 5.4rem;
  height: 80%;
  border-radius: 3rem;
  left: 0;
  z-index: 1;
  opacity: 0.5;
  animation: ${slideIn} 5s forwards;

  @media (max-width: 768px) {
    width: 4rem;
  }

  @media (max-width: 480px) {
    width: 3rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const TopRow = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const BottomRow = styled.div`
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const StyledSpan = styled.span`
  text-transform: uppercase;
  background: linear-gradient(to right, yellow, orange); /* Add yellow gradient background */
  -webkit-background-clip: text; /* Clip background to text */
  color: transparent; /* Make text color transparent to show the gradient */
`;

const Description = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 200;
  text-transform: none;
  letter-spacing: 1px;
  width: 80%;
  margin: 0 auto;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    width: 100%;
  }
`;

const HeroImage = styled.img`
  max-width: 100%;  /* Increase this value to make the image larger */
  height: auto;
  animation: ${slideIn} 2s ease-out;

  @media (max-width: 768px) {
    max-width: 90%;  /* Adjust for mobile */
  }

  @media (max-width: 480px) {
    max-width: 100%;  /* Adjust for smaller screens */
  }
`;


const HeartImage = styled.img`
  width: 60px;
  height: 60px;
  animation: ${oscillate} 2s ease-in-out infinite;
`;

const HeartText = styled.div`
  color: black;
  font-size: 1rem;
  text-align: center;
`;

const HeartContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    display: none;
  }
`;

const CaloriesContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    display: none;
  }
`;


const CaloriesImage = styled.img`
  width: 80px;
  height: 80px;
  animation: ${oscillate} 2s ease-in-out infinite;
`;

const CaloriesText = styled.div`
  color: black;
  font-size: 1rem;
  text-align: center;
`;

// const ScrollUpWrapper = styled.div`
//   position: absolute;
//   bottom: 1rem;
//   right: 1rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0.5rem;
//   background: rgba(0, 0, 0, 0.5); /* Semi-transparent background for visibility */
//   border-radius: 50%;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

//   .text-4xl {
//     color: yellow; /* Customize the arrow color if needed */
//   }

//   @media (max-width: 768px) {
//     bottom: 0.5rem; /* Adjust positioning for smaller screens */
//     right: 0.5rem;
//   }

//   @media (max-width: 480px) {
//     bottom: 0.25rem;
//     right: 0.25rem;
//   }
// `;

export default Hero;
