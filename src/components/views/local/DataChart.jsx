import React, { useEffect, useState } from "react";
import css from "../../../styles/dataList.css";
import { ResponsivePie } from "@nivo/pie"

const { DataListContainer } = css;
const MyResponsivePie = ({ data /* see data tab */ }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 30,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)
const DataChart = (props) => {

    const { data = [], show } = props;

    const [r01, setr01] = useState(0);
    const [r02, setr02] = useState(0);
    const [r03, setr03] = useState(0);
    const [r04, setr04] = useState(0);

    const filterData = data.filter(item => item.split("::")[1] === "расходы");

    useEffect(() => {
      

        for (let i = 0; i < filterData.length; i++) {
            if (filterData[i].split("::")[2] === "оплата Интернета") {

                setr01(prev =>
            prev + +(filterData[i].split("::")[0]));

            }
            if (filterData[i].split("::")[2] === "оплата ЖКХ") {

                 setr02(prev =>
            prev + +(filterData[i].split("::")[0]));

            }
            if (filterData[i].split("::")[2] === "путешествия") {

                 setr03(prev =>
            prev + +(filterData[i].split("::")[0]));

            }
            if (filterData[i].split("::")[2] === "образование") {

                 setr04(prev =>
            prev + +(filterData[i].split("::")[0]));

            }
            

        }
    }, []);


    return (
        <React.Fragment>

        { show === true && <DataListContainer style={{ minHeight: "500px", alignItems: "stretch" }}>
            <MyResponsivePie
                data={[
                    { id: "оплата Интернета", label: "оплата Интернета", value: r01, color: "hsl(302, 100%, 62%)" },
                    { id: "оплата ЖКХ", label: "оплата ЖКХ", value: r02, color: "hsl(217, 100%, 50%)" },
                    { id: "путешествия", label: "путешествия", value: r03, color: "hsl(171, 100%, 50%)" },
                    { id: "образование", label: "образование", value: r04, color: "hsl(182, 100%, 50%)" }
                ]}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
            />
        </DataListContainer>
}
        </React.Fragment>

    );
}
export default DataChart;