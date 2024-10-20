import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

const Testimonial = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  // Auto-slide the testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prevSelected) => (prevSelected === tLength - 1 ? 0 : prevSelected + 1));
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [selected, tLength]);

  const handleLeftClick = () => {
    setSelected(selected === 0 ? tLength - 1 : selected - 1);
  };

  const handleRightClick = () => {
    setSelected(selected === tLength - 1 ? 0 : selected + 1);
  };

  return (
    <TestimonialContainer>
      <LeftContainer>
        <TitleContainer>
          <Title>Testimonials</Title>
          <Subtitle className="program-text">What they say about us</Subtitle>
        </TitleContainer>
        <ReviewText>{testimonialsData[selected].review}</ReviewText>
        <Author>
          <span>{testimonialsData[selected].name} - </span>
          {testimonialsData[selected].status}
        </Author>
        <ArrowContainer>
          <Arrow src={leftArrow} alt="left-arrow" onClick={handleLeftClick} />
          <Arrow src={rightArrow} alt="right-arrow" onClick={handleRightClick} />
        </ArrowContainer>
      </LeftContainer>

      <RightContainer>
        <TestimonialImage src={testimonialsData[selected].image} alt="testimonial" />
      </RightContainer>
    </TestimonialContainer>
  );
};

const TestimonialContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #3c3f45;
  padding-bottom: 2rem;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding-bottom: 1rem;
  }
`;

const LeftContainer = styled.div`
  width: 50%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

const RightContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
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

const TitleContainer = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: transparent;
  -webkit-text-stroke: 2px white;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2rem;
    -webkit-text-stroke: 1.5px white;
  }
`;

const ReviewText = styled.p`
  font-size: 1.5rem;
  line-height: 1.8;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Author = styled.p`
  font-size: 1.2rem;
  color: #f1c40f;
  margin-bottom: 2rem;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const Arrow = styled.img`
  width: 40px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const TestimonialImage = styled.img`
  width: 300px; /* Fixed width */
  height: 300px; /* Fixed height */
  object-fit: cover; /* Ensures the image covers the space without distortion */
  animation: ${slideIn} 2s ease-out;
  border-radius: 50%; /* Makes the image a perfect circle */

  @media (min-width: 769px) {
    border: 5px solid #f1c40f;
    border-radius: 50%; /* Ensure the circle shape for larger screens */
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width for smaller screens */
    height: auto; /* Height auto to maintain aspect ratio */
    border: none;
    border-radius: 50%; /* Circle on mobile as well */
  }
`;

export default Testimonial;
