import React from "react";
import { useEffect, useRef } from "react";

import './PixelCard.css';
function Welcome(){
      
    return(
        <div className={Styles.card}>
          <PixelCard variant="pink">
            <h1>bem vindo</h1>
        </PixelCard>
        </div>
    )
}
export default Welcome;