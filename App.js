import React from "react";
import reviews from "./data";
import Testimonial from "./components/Testimonial";



const App = () => {


  return(
    <div className="container">

      <div>
        <Testimonial reviews={reviews}></Testimonial>
      </div>
    


    </div>
  )
};

export default App;
