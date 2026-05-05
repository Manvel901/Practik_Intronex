import React from "react";
import css from "../../../styles/dataList.css";

const { DataListContainer, ContainerList, ContentCell } = css;

const DataList = (props) => {
    const {$data = []} = props;


    return (
        <React.Fragment>

            <DataListContainer>
                {$data.map((item, index) => {
                    return (
                        <ContainerList key = {index}>
                            <ContentCell width={"33%"}>
                                {item.split("::")[0]}
                            </ContentCell>
                            <ContentCell  width={"33%"}>
                               {item.split('::')[1]}
                            </ContentCell>
                            <ContentCell width={"33%"}>
                               {item.split('::')[2]}
                            </ContentCell >
                        </ContainerList>

                    );
                })}
            </DataListContainer>

        </React.Fragment>
    );
}
export default DataList;