import React from "react";
import Plot from "react-plotly.js";

import "./MyPage.scss";

function MyPage() {
  return (
    <div className="Background">
      <div className = "section1">
        <div className = "title">
            <span>Pool1</span>
        </div>
        <div className = "tokenInfo">
        <div className = "infoListTop">
            <span>구성토큰</span>
            <span>현재가치</span>
          </div>
          <div className = "infoList">
            <span>문양</span>
            <span>ETH</span>
            <span>8 ETH</span>
            <span>4 ETH</span>
          </div>
          <div className = "infoList">
            <span>문양</span>
            <span>LINK</span>
            <span>8 ETH</span>
            <span>4 ETH</span>
          </div>
          <div className = "infoList">
            <span>문양</span>
            <span>DAI</span>
            <span>8 ETH</span>
            <span>4 ETH</span>
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
        <span>300,000 $</span>
        <span>300,000 $</span>
        <span>300,000 $</span>
        </div>
        </div>
        <div className = "chart">
        <Plot
        data={[
          {
            x: ["2020.12.11", "2020.12.12", "2020.12.13","2020.12.14","2020.12.14","2020.12.15","2020.12.16"],
            y: [6000, 3000,4000,7000,10000,12000],
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'black'}
          },
          {
            x: ["2020.12.11", "2020.12.12", "2020.12.13","2020.12.14","2020.12.14","2020.12.15","2020.12.16"],
            y: [2800,2800,2800,2800,2800,2800],
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
