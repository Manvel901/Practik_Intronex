import React from "react";
import { useNavigate } from "react-router-dom";
import css from "../../../styles/dataList.css";

const { DataListContainer, ContainerList, ContentCell, Buttonline, ButtonItem } = css;

const DataList = (props) => {
    const {$data = [], setShow, viewType} = props;
    const navigate = useNavigate();
    const filterData = $data.filter(item=> item.split("::")[1]===viewType);
    const filterDataSum = $data.filter(item=> item.split("::")[1]===viewType)
    .reduce((sum, item)=> {
        return sum + +(item.split("::")[0])
    }, 0);
   const filterDataDelta = $data.reduce((sum, item) => {

  const [amountStr, type] = item.split("::");
  
 
  const [n1, n2] = amountStr.split(" ");
  const amount = (Number(n1) || 0) + (Number(n2) || 0);
  
 
  return type === "расходы" ? sum - amount : sum + amount;
  }, 0);
    
    const reduceDataType1 = ()=> { setShow(false); navigate("/stat/доходы")};
    const reduceDataType2 = ()=> { setShow(true); navigate("/stat/расходы")};
    const reduceDataType3 = ()=> {setShow(true); navigate("/stat/общее")};

    return (
        <React.Fragment>
            <Buttonline>
                <ButtonItem style={{color: viewType ==="доходы" ? 'green': 'red', fontWeight: viewType ==="доходы"  ? 'bold' : 'normal'}}  onClick= {reduceDataType1}>{"доходы"}</ButtonItem>
                <ButtonItem style={{color: viewType ==="расходы" ? 'green': 'red', fontWeight: viewType ==="расходы"  ? 'bold' : 'normal'}} onClick = {reduceDataType2}>{"расходы"}</ButtonItem>
                <ButtonItem style={{color: viewType ==="общее" ? 'green': 'red', fontWeight: viewType ===""  ? 'bold' : 'normal'}} onClick = {reduceDataType3}>{"общее"}</ButtonItem>
            </Buttonline>

            <DataListContainer>
              {filterData.length>0 && <React.Fragment>
                {filterData.map((item, index) => {
                    return (
                        <ContainerList key = {index}>
                            <ContentCell>
                                {item.split("::")[0]}
                            </ContentCell>
                            <ContentCell>
                               {item.split('::')[1]}
                            </ContentCell>
                            <ContentCell>
                               {item.split('::')[2]}
                            </ContentCell >
                        </ContainerList>

                    );
                })}
                       <ContainerList>
                            <ContentCell>
                               {filterDataSum}
                            </ContentCell>
                            <ContentCell >
                               {"------"}
                            </ContentCell>
                            <ContentCell>
                               {"------"}
                            </ContentCell >
                        </ContainerList>
                </React.Fragment>
                }

                {filterData.length=== 0 && <React.Fragment>
                {$data.map((item, index) => {
                    return (
                        <ContainerList key = {index}>
                            <ContentCell>
                                {item.split("::")[0]}
                            </ContentCell>
                            <ContentCell>
                               {item.split('::')[1]}
                            </ContentCell>
                            <ContentCell>
                               {item.split('::')[2]}
                            </ContentCell >
                        </ContainerList>
                    );
                })}
                <ContainerList>
                            <ContentCell >
                               {filterDataDelta}
                            </ContentCell>
                            <ContentCell  >
                               {"------"}
                            </ContentCell>
                            <ContentCell >
                               {"------"}
                            </ContentCell >
                        </ContainerList>
                </React.Fragment>
                }
            </DataListContainer>

        </React.Fragment>
    );
}
export default DataList;