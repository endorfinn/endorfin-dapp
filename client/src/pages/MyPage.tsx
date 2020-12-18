import React from "react";
import Plot from "react-plotly.js";

import "./MyPage.scss";

function MyPage() {
  return (
    <div className="Background">
      <div className = "section1">
        <div className = "title">
            <span>Endorfin</span>
        </div>
        <div className = "tokenInfo">
        <div className = "infoListTop">
            <span style={{marginRight: '30px'}}>구성토큰</span>
          </div>
          <div className = "infoList">
            <span>ETH</span>
            <span>1</span>
          </div>
          <div className = "infoList">
            <span>DAI</span>
            <span>2</span>
          </div>
          <div className = "infoList">
            <span>LINK</span>
            <span>3</span>
          </div>
        </div>
      </div>
      <div className = "section2">
        <div className = "progresstable">
        <div className = "tablehead">
        <span>시작가치</span>
        <span>현재가치</span>
        <span>옵션행사</span>
        </div>
        <div className = "tabletail">
        <span>558.15 $</span>
        <span>558. $</span>
        <span>300,000 $</span>
        </div>
        </div>
        <div className = "chart">
        <Plot
        data={[
          {
            x: ["2020.12.11", "2020.12.12", "2020.12.13","2020.12.14","2020.12.14","2020.12.15","2020.12.16"],
            y: [500.15,558.15],
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'black'}
          },
          {
            x: ["2020.12.11", "2020.12.12", "2020.12.13","2020.12.14","2020.12.14","2020.12.15","2020.12.16"],
            y: [400,400,400,400,400,400],
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'red'}
          }
        ]}
        layout={ {width: 750, height: 300}}
      />
        </div>
      </div>
    </div>
  );
}

export default MyPage;
