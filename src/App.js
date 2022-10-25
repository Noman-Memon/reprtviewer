/* eslint-disable */
import React from 'react'
import './App.css'
//Report designer source
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-viewer.min'
import '@boldreports/javascript-reporting-controls/Content/material/bold.reports.all.min.css'
//Data-Visualization
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.bulletgraph.min'
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.chart.min'
//Reports react base
import '@boldreports/react-reporting-components/Scripts/bold.reports.react.min'

var viewerStyle = {
  height: '700px',
  width: '100%',
}

function App() {
  return (
    <div style={viewerStyle}>
      <BoldReportViewerComponent
        id="reportviewer-container"
        reportServiceUrl={
          'https://demos.boldreports.com/services/api/ReportViewer'
        }
        reportPath={'~/Resources/docs/sales-order-detail.rdl'}
      ></BoldReportViewerComponent>
    </div>
    // var viewerStyle = { height: '700px', width: '100%' }
    // var reportPath = 'AreaCharts.rdlc'
    // var reportData = [
    //   {
    //     value: [
    //       {
    //         SalesPersonID: 281,
    //         FullName: 'Ito',
    //         Title: 'Sales Representative',
    //         SalesTerritory: 'South West',
    //         Y2002: 0,
    //         Y2003: 28000,
    //         Y2004: 3018725,
    //       },
    //       {
    //         SalesPersonID: 282,
    //         FullName: 'Saraiva',
    //         Title: 'Sales Representative',
    //         SalesTerritory: 'Canada',
    //         Y2002: 25000,
    //         Y2003: 14000,
    //         Y2004: 3189356,
    //       },
    //       {
    //         SalesPersonID: 283,
    //         FullName: 'Cambell',
    //         Title: 'Sales Representative',
    //         SalesTerritory: 'North West',
    //         Y2002: 12000,
    //         Y2003: 13000,
    //         Y2004: 1930885,
    //       },
    //     ],
    //     name: 'AdventureWorksXMLDataSet',
    //   },
    // ]

    // function App() {
    //   return (
    //     <div style={viewerStyle}>
    //       <BoldReportViewerComponent
    //         id="reportviewer-container"
    //         reportServiceUrl={
    //           'https://demos.boldreports.com/services/api/ReportViewer'
    //         }
    //         processingMode={'Local'}
    //         reportPath={reportPath}
    //         dataSources={reportData}
    //       ></BoldReportViewerComponent>
    //     </div>
  )
}

export default App
