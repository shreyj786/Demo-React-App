import { useNavigate} from 'react-router-dom';
import {memo} from 'react';
import Button from './Button';
import { useDataProvider } from './DataProvide';
function Parallax() {
    const navigate = useNavigate();
    const {linkClick } = useDataProvider();
    return (
        <div id="parallax">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 text-center">
                        <h2 className="mb-3"><q>
                            Let food be thy medicine and medicine be thy food.
                        </q></h2>
                        <h5 className="mb-3">Learn more about our food, services and business by clicking the button below</h5>
                        <Button className="main-btn" onclick={()=>{
                            linkClick("about1");
                            navigate('/about')}}>
                            Learn more
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Parallax);