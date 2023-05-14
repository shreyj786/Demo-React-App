import { useEffect,memo } from "react";
import {  useLocation } from "react-router-dom";
function Scrolltop(){
    const {pathname} = useLocation();
    useEffect(()=>{
       const scroll =  window.scrollTo({
            top:0,
            behavior:"smooth"
        });

        return ()=> scroll;
    },[pathname])
    return null;
}

export default memo(Scrolltop);