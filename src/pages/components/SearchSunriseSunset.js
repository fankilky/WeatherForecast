import axios from "axios";
import { useState, useEffect } from "react";
import { ResponsiveLine } from '@nivo/line'


export default function SearchSunriseSunset(props) {
    const [yearData, setYearData] = useState("")
    const [loading, setloading] = useState(true);


    useEffect(() => {
        let year = Object.values(props);
        let API = `https://data.weather.gov.hk/weatherAPI/opendata/opendata.php?dataType=SRS&year=${year}&rformat=json`;
            axios.get(API, {mode:'cors'}).then((response) => {
                setYearData(response.data.data);
            });
        setloading(false);
        }, [props]);

            
        // push all sunrise time in a array 
        let sunriseStat = [];
        useEffect(() => {
            for (let i = 0; i < yearData.length; i++) {
                sunriseStat.push({"x":yearData?.[i]?.[0],"y":yearData?.[i]?.[1]})
            };
                
        }, [yearData]);

        // push all sunrise time in a array 
        let sunsetStat = [];
        useEffect(() => {
            for (let i = 0; i < yearData.length; i++) {
                sunsetStat.push({"x":yearData?.[i]?.[0],"y":yearData?.[i]?.[3]})
            };
        }, [yearData]);

        const data = [
                {
                  "id": "Sunrise",
                  "color": "hsl(268, 70%, 50%)",
                  "data": sunriseStat
                },
                {
                    "id": "Sunset",
                    "color": "hsl(331, 70%, 50%)",
                    "data": sunsetStat
                  },
            ]

        
        if (loading === true) { return (<p>loading...</p>)}

        return (
        <>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{
                    type: "time",
                    format: "%Y-%m-%d",
                    precision: 'day'
                }}
                xFormat="time:%Y-%m-%d"
                yScale={{
                    type: "linear",
                    min: "auto",
                    max: "auto",
                    format: "%Hh%M [%d]",
                    stacked: false,
                    reverse: false,
                }}
                yFormat="time:%Hh%M [%d]"
                curve="cardinal"
                axisTop={null}
                axisRight={null}
                axisLeft={{
                orient: "left",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Time",
                legendOffset: -40,
                legendPosition: "middle"
                }}
                axisBottom={{
                format: "%x",
                //tickValues: "every 2 days",
                // tickRotation: -90,
                legend: "time scale",
                legendOffset: -12
                }}
                colors={{ scheme: "nivo" }}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabel="y"
                pointLabelYOffset={-12}
                useMesh={true}
                theme={{
                    "background": "rgba(194,194,194,0.5)",}}
                legends={[
                {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                    {
                        on: "hover",
                        style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1
                        }
                    }
                    ]
                }
                ]}
            />   
        </>)
  
}
