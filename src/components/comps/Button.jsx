import React from "react";
import css from "../../form/form.css";

const {StyledButton} = css;

const ButtonComponent = ({ children, onClick, $bgColor }) => {
  return (
    <StyledButton 
      onClick={onClick} 
      $bgColor={$bgColor} // ⚡ Обязательно передаём проп дальше в styled-компонент
    >
      {children}
    </StyledButton>
  );
};

export default ButtonComponent;