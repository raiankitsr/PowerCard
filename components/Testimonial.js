import React from "react";
import Card from "./Card";
import {FaGreaterThan,FaLessThan} from "react-icons/fa";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import {RiCloseCircleLine} from "react-icons/ri"
import { BsInstagram,BsLinkedin,BsWhatsapp,BsFacebook} from "react-icons/bs";





function Testimonial({reviews})
{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



    const[index,setindex]= useState(0);

    function greater()
    {
        if(index+1 >= reviews.length)
        {
            setindex(0);
        }
        else
        {
            setindex(index+1);
        }
    }

    function lesser()
    {
        if(index-1 < 0)
        {
            setindex(reviews.length-1);
        }
        else
        {
            setindex(index-1);
        }
    }


    return(

        
        <div className="card">




<Modal show={show} onHide={handleClose}>
    <div className="modal"></div>
    <div className="modal-contain">
        <div>
        <h2 className="share">Share My Profile      <button className="cross" onClick={() => setShow(false)}><RiCloseCircleLine/></button></h2>
        
            
        </div>

        <div>
            <h3 className="share2">Share via</h3>
        </div>

        <div className="icon">
            <button><BsInstagram/></button>
            <button><BsLinkedin/></button>
            <button><BsWhatsapp/></button>
            <button><BsFacebook/></button>
            
        </div>





        <div>
            <button className="close" onClick={()=> setShow(false)}>Close</button>
        </div>
    </div>
</Modal>





            <div className="head"><h1>{reviews.name}</h1></div>
                  <div className="line"></div>
                  <div className="line2"></div>
           
            <Card reviews = {reviews[index]}/>
            
            <div className="button">
            <button onClick={lesser}><FaLessThan/></button>
            <button onClick={greater}><FaGreaterThan/></button>
            </div>

            



            









            <div>
            <button className="submit" onClick={handleShow}>Let's Connect</button>
           </div>

        </div>

        



        
    )
}

export default Testimonial;