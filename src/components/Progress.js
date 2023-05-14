import { useEffect,useState,useRef } from "react";
import {memo} from 'react';

function Progress(){
    const body= document.body;
    const bar = useRef();
    const[pos,setPos] = useState(0);
    window.addEventListener('scroll',()=>{
        setPos((window.scrollY/
        (body.scrollHeight-window.innerHeight))*100);
    })
    useEffect(()=>{
        bar.current.style.width = `${pos}%`;
    },[pos]);
    return(
        <>
        <div className="progress sticky-top">
            <span ref={bar} className="bar"></span>
        </div>
        </>
    )
}

export default memo(Progress);