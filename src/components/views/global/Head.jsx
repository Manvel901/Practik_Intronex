import React from "react";
import { Link } from "react-router-dom";
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
    
    return(
        <React.Fragment>
            <HeadContainer>
                <HeaderCSS.Logo>BUHCalculate</HeaderCSS.Logo>
                <HeaderCSS.HeaderMenu>
                    <button style={buttonCSS}><Link to={"/main"} style={{color:"inherit", textDecoration:"none"}}>{topMenu.one}</Link></button>
                    <button style={buttonCSS}><Link to={"/plan"} style={{color:"inherit" , textDecoration:"none"}}>{topMenu.two}</Link></button>
                    <button style={buttonCSS}><Link to={"/stat"} style={{color:"inherit" , textDecoration:"none"}}>{topMenu.three}</Link></button>
                </HeaderCSS.HeaderMenu>
                <HeaderCSS.HaederButton>
                    <button style={buttonCSSRight}>Регистрация</button>
                </HeaderCSS.HaederButton>
            </HeadContainer>

        </React.Fragment>
    );
}

export default Head;