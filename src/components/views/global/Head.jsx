import React from "react";
import css from '../../../styles/styles.css'

const {HeadContainer, HeaderCSS} = css;
const topMenu ={
    one:'О Компании',
    two:'Контакты',
    three:'Поддержка'
};
const buttonCSS = {
     display: 'block',
     padding: '10px 14px 12px',
     borderRadius: '6px',
     backgroundColor: '#B0F347',
     cursor: 'pointer',
     marginLeft: '15px'
};


const Head =()=>{
    return(
        <React.Fragment>
            <HeadContainer>
                <HeaderCSS.Logo>MiyaGI&AndyPanda</HeaderCSS.Logo>
                <HeaderCSS.HeaderMenu>
                    <button style={buttonCSS}>{topMenu.one}</button>
                    <button style={buttonCSS}>{topMenu.two}</button>
                    <button style={buttonCSS}>{topMenu.three}</button>
                </HeaderCSS.HeaderMenu>
                <HeaderCSS.HaederButton>
                    <button style={buttonCSS}>Регистрация</button>
                </HeaderCSS.HaederButton>
            </HeadContainer>

        </React.Fragment>
    );
}

export default Head;