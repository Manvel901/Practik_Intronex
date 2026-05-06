import styled from "styled-components";

const css ={
DataListContainer: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  position: relative;
  width: 600px;
  border-radius: 8px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  margin: 40px auto;
  padding: 24px; 
  background: #fff; 
  box-sizing: border-box;
  overflow: hidden; /* обрезает границы под скругления контейнера */
`,

ContainerList: styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 равные колонки */
  width: 100%;
  min-height: 48px; /* фиксированная высота строки */
  align-items: center;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`,

ContentCell: styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 4px;
  font-size: 16px;
  text-align: center; /* исправлена опечатка: allign → align */
  border-right: 1px solid #e0e0e0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:last-child {
    border-right: none;
  }
`,
 Buttonline: styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 800px;
  margin: 0 auto;
  margin-top: 40px;
`,

ButtonItem: styled.span`
  display: block;
  position: relative;
  font-size: 15px;
  color: #ff0000 ;
  margin-right: 40px;
  cursor: pointer;
`
};



export default css