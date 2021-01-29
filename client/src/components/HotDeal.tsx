import React from 'react';
import styles from './HotDeal.module.scss';

interface Props {
    title : string;
    isFulled : boolean;
    isOptionFinished : boolean;
}


function HotDeal(props : Props){

    let poolStyle = props.isFulled ? styles.wrapperProgress : styles.wrapper;
    
    let optionStyle = props.isOptionFinished ? styles.wrapperOptionProgress : styles.wrapperProgress;

    //풀 참여자 모집
    let hotdealStyle = styles.wrapper;
    if (props.isFulled){
        if(props.isOptionFinished){
            //풀 옵션 모집 끝(완료)
            hotdealStyle = styles.optionFinished;
        } else if(!props.isOptionFinished){
            //풀 옵션 모집 중
            hotdealStyle = styles.wrapperOptionProgress;
        }
    } 

    return(
        <div className={hotdealStyle}>
            <h3>{props.title}</h3>
            <div className={styles.progressBarInside}></div>
            <div className={styles.progressBar}></div>
            
            
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
                    <tr><td><img className={styles.tokenImage}/></td><td>ETH</td><td>8 ETH</td><td>1 ETH</td></tr>
                    <tr><td><img className={styles.tokenImage}/></td><td>ETH</td><td>8 ETH</td><td>1 ETH</td></tr>
                    <tr><td><img className={styles.tokenImage}/></td><td>ETH</td><td>8 ETH</td><td>1 ETH</td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default HotDeal;