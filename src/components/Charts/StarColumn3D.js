// // STEP 1 - Include Dependencies
// // Include react
// import React from 'react';

// // Include the react-fusioncharts component
// import ReactFC from 'react-fusioncharts';

// // Include the fusioncharts library
// import FusionCharts from 'fusioncharts';
// import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// // Include the chart type
// import Chart from 'fusioncharts/fusioncharts.charts';

// // Adding the chart and theme as dependency to the core fusioncharts
// ReactFC.fcRoot(FusionCharts, Chart);

// // STEP 3 - Creating the JSON object to store the chart configurations

// const ChartComponent = ({ data }) => {
//   const chartConfigs = {
//     type: 'column3d', // The chart type
//     width: '100%', // Width of the chart
//     height: '350', // Height of the chart
//     dataFormat: 'json', // Data type
//     dataSource: {
//       // Chart Configuration
//       chart: {
//         caption: 'Most Popular',
//         yAxisName: 'Stars',
//         yAxisNameFontSize: 16,
//         xAxisName: 'Repos',
//         xAxisNameFontSize: 16,
//         theme: "candy"
//         // showCanvasBorder: 0,
//         // showAlternateHGridColor: 0,
//         // usePlotGradientColor: 0,
//         // valueFontSize: 16,
//         // placeValuesInside: 0,
//         // divLineColor: "#102a42",
//         // divLineAlpha: 15,
//         // captionFontColor: "#102a42",
//         // captionFontBold: 0,
//         // captionFontSize: 20,
//         // captionFont: "Roboto",
//         // baseFont: "Open Sans",
//         // baseFontSize: 12,
//         // baseFontColor: "#617d98",
//         // smartLineColor: "#617d98",
//         // showShadow: 0,
//         // showPlotBorder: 0,
//         // paletteColors:
//         //   "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
//         // bgColor: "#FFFFFF",
//         // showBorder: 0,
//       },
//       // Chart Data
//       data,
//     },
//   };

//   return <ReactFC {...chartConfigs} />;
// };

// export default ChartComponent;

// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as candy
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);



// STEP 3 - Creating the JSON object to store the chart configurations

const ChartComponent = ({data}) => {
  const chartConfigs = {
    type: "column3d", // The chart type
    width: "700", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Most Popular",
     
        // //Set the chart subcaption
        // subCaption: "Number of Repos",
        // //Set the x-axis name
        xAxisName: "repos",
        // //Set the y-axis name
        yAxisName: "stars",
        // numberSuffix: "K",
        //Set the theme for your chart
        theme: "candy",
        

      },
      // Chart Data
      data
    }
  };
  

  return (<ReactFC {...chartConfigs} />);
}


// STEP 4 - Creating the DOM element to pass the react-fusioncharts component

export default ChartComponent;

