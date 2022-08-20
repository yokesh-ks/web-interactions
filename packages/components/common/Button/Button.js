import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Button = ({ label = "button", size = "md", handleClick }) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  return (
    <ButtonStyle onClick={handleClick} scale={scale}>
      {label}
    </ButtonStyle>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  // backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
};

const ButtonStyle = styled.button`
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
  padding: ${({ scale }) =>
    scale ? `${scale * 0.5}rem ${scale * 1}rem` : `10px 20px`};
  border-radius: 8px;
  box-shadow: 2px 2px 39px 0px rgba(255, 65, 108, 0.55);
  -webkit-box-shadow: 2px 2px 39px 0px rgba(255, 65, 108, 0.55);
  -moz-box-shadow: 2px 2px 39px 0px rgba(255, 65, 108, 0.55);
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
`;
