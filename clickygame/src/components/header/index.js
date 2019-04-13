import React from "react";


function Header(props){
   return(
       <div className="jumbotron" id="jumbo">
           <div className="container">
               <h1>Clicky Game</h1>

               <h2>Score: <span>{props.children}</span>  </h2>

           </div>

       </div>
   )
}

export default Header;