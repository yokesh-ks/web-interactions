import React, { useState } from "react";
import styled from "styled-components";
import { LeftArrow } from "../Icons/leftArrow";
import { RightArrow } from "../Icons/rightArrow";

function Caurosel(props) {
  const { data } = props;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNextState = () => {
    if (currentSlideIndex === data?.length - 1) {
      setCurrentSlideIndex(0);
      return
    }
    setCurrentSlideIndex(currentSlideIndex + 1);
  };

  const handlePreviousState = () => {
    if (currentSlideIndex === 0) {
      setCurrentSlideIndex(data.length - 1);
      return
    }
    setCurrentSlideIndex(currentSlideIndex - 1);
  };

  return (
    <MainContaniner image={data[currentSlideIndex].image}>
      <p>{data[currentSlideIndex].mainTitle}</p>
      <LeftArrow onClick={handlePreviousState} />
      <RightArrow onClick={handleNextState} />
      <Image
        src={data[currentSlideIndex].image}
        alt={data[currentSlideIndex].mainTitle}
        resizeMode="cover"
      />
      <Button>{data[currentSlideIndex].buttonText}</Button>
    </MainContaniner>
  );
}

const MainContaniner = styled.div`
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
`;

const Button = styled.button`
  background: #ff416c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ff4b2b,
    #ff416c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ff4b2b,
    #ff416c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: none;
  padding: 10px 30px;
  border-radius: 8px;
  box-shadow: 2px 2px 39px 0px rgba(255, 65, 108, 0.55);
  -webkit-box-shadow: 2px 2px 39px 0px rgba(255, 65, 108, 0.55);
  -moz-box-shadow: 2px 2px 39px 0px rgba(255, 65, 108, 0.55);
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
`;

export default Caurosel;
