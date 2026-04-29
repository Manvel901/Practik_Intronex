import styled from 'styled-components'

const css = {
    HeadContainer: styled.header`
    display: flex;
  padding: 0 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 80px;
  background-color: #6695b7;
    `,
  FooterContainer:styled.footer`
  display: flex; 
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 80px;
  background-color: #8c8c90;
    `, 
  HeaderCSS: {
    Logo:styled.div`
     font-size: 40px;
     color: #d4ff00;`,
     HeaderMenu:styled.div`
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
     position: relative;`,
     HaederButton:styled.div`
     font-size: 40px;
     color: #d4ff00;`
  }


}

export default css;