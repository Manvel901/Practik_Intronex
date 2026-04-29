import styled from "styled-components";

const css = {
 FornatContainer: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  position: relative;
  width: 600px;
  height: auto;
  min-height: 200px;
  border-radius: 8px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  margin: 40px auto;
  padding: 24px; 
  background: #fff; 
  box-sizing: border-box;
 `,
 Input: styled.input`
  display: block;
  position: relative;
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  background-color: rgb(229, 229, 229);
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 14px;
  margin-bottom: 10px;
  :last-child{
   margin-bottum: 0px;
  }
  `,
  Button:styled.span`
  display: block;
  position: relative;
  width: 220px;
  height: 44px;
  line-height: 42px; 
  border-radius: 4px; 
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0 12px;
  background-color: green;
  color: #000;
  user-select: none;`

}

export default css;