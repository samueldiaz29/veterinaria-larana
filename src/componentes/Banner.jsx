import React,{useState,useEffect} from "react";
import "./Banner.css";

const imagenes=["/img/banner1.jpg","/img/banner2.jpg","/img/banner3.jpg"];

function Banner(){
    const[index,setIndex]=useState(0);

    useEffect(()=>{
        const timer= setInterval(()=>{
            setIndex((prev)=>(prev+1)%imagenes.length);
        },4000)
        return ()=>clearInterval(timer);
    },[]);

    return(
        <div className="banner">
            <img src={imagenes[index]} alt="banner" className="banner-img"/>

        </div>
    )

}

export default Banner;