import React from "react";
import {useNavigate } from "react-router-dom";
import css from '../../../styles/styles.css'

const {HeadContainer, HeaderCSS} = css;
const topMenu ={
    one:'Главная',
    two:'Планирование',
    three:'Стастика'
};
const buttonCSS = {
     display: 'block',
     padding: '10px 14px 12px',
     borderRadius: '6px',
     backgroundColor: '#b1f347',
     cursor: 'pointer',
     marginLeft: '15px'
};

const buttonCSSRight = {
     display: 'block',
     padding: '10px 14px 12px',
     borderRadius: '6px',
     backgroundColor: '#f38047',
     cursor: 'pointer',
     marginRight: '50px'
};


const Head =()=>{

    const navigate = useNavigate()
    
    return(
        <React.Fragment>
            <HeadContainer>
                <HeaderCSS.Logo>BUHCalculater</HeaderCSS.Logo>
                <HeaderCSS.HeaderMenu>
                    <button onClick={()=> {navigate("/main")}} style={buttonCSS}>{topMenu.one}</button>
                    <button onClick={()=> {navigate("/plan/demoParam")}} style={buttonCSS}>{topMenu.two}</button>
                    <button onClick={()=> {navigate("/stat")}} style={buttonCSS}>{topMenu.three}</button>
                </HeaderCSS.HeaderMenu>
                <HeaderCSS.HaederButton>
                    <button style={buttonCSSRight}>Регистрация</button>
                </HeaderCSS.HaederButton>
            </HeadContainer>

        </React.Fragment>
    );
}

export default Head;