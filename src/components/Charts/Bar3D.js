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
    type: "bar3d", // The chart type
    width: "700", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Portfolio Repositories",
     
        // //Set the chart subcaption
        // subCaption: "Number of Repos",
        // //Set the x-axis name
        xAxisName: "name of repo",
        // //Set the y-axis name
        // yAxisName: "size of repo",
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

