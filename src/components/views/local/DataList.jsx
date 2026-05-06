import React, {useState} from "react";
import css from "../../../styles/dataList.css";

const { DataListContainer, ContainerList, ContentCell, Buttonline, ButtonItem } = css;

const DataList = (props) => {
    const {$data = [], setShow} = props;
    const [dataType, setDataType] = useState("расходы");
    const filterData = $data.filter(item=> item.split("::")[1]===dataType);
    const filterDataSum = $data.filter(item=> item.split("::")[1]===dataType)
    .reduce((sum, item)=> {
        return sum + +(item.split("::")[0])
    }, 0);
   const filterDataDelta = $data.reduce((sum, item) => {
  // 1. Разбиваем строку один раз
  const [amountStr, type] = item.split("::");
  
  // 2. Извлекаем числа из первой части (защита от undefined)
  const [n1, n2] = amountStr.split(" ");
  const amount = (Number(n1) || 0) + (Number(n2) || 0);
  
  // 3. Обновляем баланс
  return type === "расходы" ? sum - amount : sum + amount;
  }, 0);
    
    const reduceDataType1 = ()=> {setDataType("доходы"); setShow(false)};
    const reduceDataType2 = ()=> {setDataType("расходы"); setShow(true)};
    const reduceDataType3 = ()=> {setDataType(""); setShow(true)};

    return (
        <React.Fragment>
            <Buttonline>
                <ButtonItem style={{color: dataType ==="доходы" ? 'green': 'red', fontWeight: dataType ==="доходы"  ? 'bold' : 'normal'}}  onClick= {reduceDataType1}>{"доходы"}</ButtonItem>
                <ButtonItem style={{color: dataType ==="расходы" ? 'green': 'red', fontWeight: dataType ==="расходы"  ? 'bold' : 'normal'}} onClick = {reduceDataType2}>{"расходы"}</ButtonItem>
                <ButtonItem style={{color: dataType ==="" ? 'green': 'red', fontWeight: dataType ===""  ? 'bold' : 'normal'}} onClick = {reduceDataType3}>{"общее"}</ButtonItem>
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