import { Link } from 'react-router-dom';
import image from '../../assets/http-error-404-not-found.png'
import './FourOFour.css'
const FourOFour = () => {
    return (
            <div className='four'>
                <Link className='mt-2' to='/'><button className="btn btn-accent">Home</button></Link>
                <img src={image} alt="" />
            </div>
    );
};

export default FourOFour;