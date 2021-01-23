import React from 'react';

function TokenInfo(){
    return(
        <div className="tokenInfo">
          <div className="infoListTop">
            <span style={{ marginRight: '30px' }}>구성토큰</span>
          </div>
          <div className="infoList">
            <span>ETH</span>
            <span>2</span>
          </div>
          <div className="infoList">
            <span>DAI</span>
            <span>2</span>
          </div>
          <div className="infoList">
            <span>LINK</span>
            <span>3</span>
          </div>
        </div>
    );
}

export default TokenInfo;