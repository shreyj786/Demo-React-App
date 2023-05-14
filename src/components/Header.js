import yellow_brand from '../Assets/yellow_brand.png'
import {memo} from 'react';

function Header(){
    return(
        <header className='d-flex justify-content-center py-3'>
            <img  src ={yellow_brand} alt="logo"/>
        </header>
    );
}

export default memo(Header);