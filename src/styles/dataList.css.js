import styled from "styled-components";

const css ={
     DataListContainer: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  position: relative;
  width: 600px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  margin: 40px auto;
  padding: 24px; 
  background: #fff; 
  box-sizing: border-box;
 `,
 ContainerList:styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
 `,
 ContentCell: styled.span`
 display: flex;
 position: relative;
 width: ${props=> props.$width};
 font-size: 16px;
 text-allign: center;
 `
};



export default css