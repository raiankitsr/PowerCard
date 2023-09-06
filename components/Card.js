import React from "react";
import { FaQuoteLeft,FaQuoteRight,FaGreaterThan,FaLessThan} from "react-icons/fa";



function Card({reviews})
{

    return(
       

        <div> 
            <h1 className="power">Power Card</h1>
            <div className="draw"></div>


            <div>
                <img src={reviews.image} className="image"></img>
           </div>   


<div className="head2">

           <p className="head">{reviews.name}</p>
</div>



           <div>
             <p className="name">{reviews.name}</p>
             <p className="job">{reviews.job}</p>
           </div>

           <div className="left"><FaQuoteLeft/></div>
           
           <p className="text">{reviews.text}</p>

           <div>
            <p className="tag">-   {reviews.name}</p>
           </div>

           <div className="right"><FaQuoteRight/></div>


           
             
        </div>
        
        
    )
}

export default Card;