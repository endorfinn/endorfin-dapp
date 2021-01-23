import React from 'react'
import styles from './PoolChart.module.scss'
import Plot from 'react-plotly.js'
import TokenInfo from './TokenInfo/TokenInfo'
import ProgressTable from './Progresstable/ProgressTable'

interface Props {
    title : string;
}

function PoolChart(props : Props) {
  return (
    <div className={styles.Background}>
      <div className={styles.section1}>
        <div className={styles.title}>
          <span>{props.title}</span>
        </div>
        <div className={styles.tokenInfo}>
            <TokenInfo/>
        </div>
      </div>
      <div className="section2">
        <div className="progresstable">
            <ProgressTable/>
        </div>
        <div className="chart">
          <Plot
            data={[
              {
                x: [
                  '2020.12.11',
                  '2020.12.12',
                  '2020.12.13',
                  '2020.12.14',
                  '2020.12.14',
                  '2020.12.15',
                  '2020.12.16',
                ],
                y: [500.15, 558.15],
                type: 'scatter',
                mode: 'lines',
                marker: { color: 'black' },
              },
              {
                x: [
                  '2020.12.11',
                  '2020.12.12',
                  '2020.12.13',
                  '2020.12.14',
                  '2020.12.14',
                  '2020.12.15',
                  '2020.12.16',
                ],
                y: [400, 400, 400, 400, 400, 400],
                type: 'scatter',
                mode: 'lines',
                marker: { color: 'red' },
              },
            ]}
            layout={{ width: 750, height: 300 }}
          />
        </div>
      </div>
    </div>
  )
}

export default PoolChart
