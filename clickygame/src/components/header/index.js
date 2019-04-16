import React from "react";
import "./style.css";

function Header(props){
   return(
       <div className="jumbotron" id="jumbo">
           <div className="container">
               <h1>Game of Thrones - Killicky Game</h1>
                <h4>Click on each character card to kill them off.  Kill off all twelve to win but click on one a second time and you lose ...</h4>
               <h2>Kills: <span>{props.children}</span>  </h2>

           </div>

       </div>
   )
}

export default Header;