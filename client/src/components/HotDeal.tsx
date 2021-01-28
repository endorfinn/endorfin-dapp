import React from 'react';
import styles from './HotDeal.module.scss';

interface Props {
    title : string;
    isFulled : boolean;
}



function HotDeal(props : Props){

    let hotdealStyle = props.isFulled ? styles.wrapper : styles.wrapperProgress;

    return(
        <div className={hotdealStyle}>
            <h3>{props.title}</h3>
            <table>
                <thead>
                    <tr>
                        <td></td>
                        <td> </td>
                        <td>모집금액</td>
                        <td>현재금액</td>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><span>emoji</span></td><td>ETH</td><td>8 ETH</td><td>1 ETH</td></tr>
                    <tr><td><span>emoji</span></td><td>ETH</td><td>8 ETH</td><td>1 ETH</td></tr>
                    <tr><td><span>emoji</span></td><td>ETH</td><td>8 ETH</td><td>1 ETH</td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default HotDeal;