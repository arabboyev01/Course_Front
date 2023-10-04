import React from "react";
import PropTypes from "prop-types";
import ButtonToggle from '@/Theme/ButtonToggle'

const Toggle: any = ({ onToggle }: any) => {

  return <ButtonToggle onToggle={onToggle}/>
};

Toggle.propTypes = {
  onToggle: PropTypes.func.isRequired
};

export default Toggle;