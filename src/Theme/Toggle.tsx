import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ToggleContainer = styled.button`
  width: 50px;
  height: 30px;
  border: 0.125em solid ${({ theme: { text } }) => text};
  border-radius: 1.5em;
  margin: 0 auto;
  overflow: hidden;
  background: ${({ theme: { body } }) => body};
  cursor: pointer;
  transition: all 0.3s linear;
`;

const Switch = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ theme: { text } }) => text};
  position: relative;
  transform: ${({ theme: { name } }) =>
    name === "light" ? "translateX(0)" : "translateX(21px)"};
  transition: inherit;
`;

const Toggle: any = ({ onToggle }: any) => {
  return (
    <ToggleContainer onClick={onToggle}>
      <Switch />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  onToggle: PropTypes.func.isRequired
};

export default Toggle;