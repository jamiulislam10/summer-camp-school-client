
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import img1 from '../../../assets/abstract-innovative-idea-representation.jpg';
import img2 from '../../../assets/close-up-kids-putting-hands-together.jpg';
import img3 from '../../../assets/portrait-smiling-boy-girl-holding-racket-hands-against-concrete-wall.jpg';
import img4 from '../../../assets/medium-shot-smiley-kids-posing-together.jpg';
import img5 from '../../../assets/picture-adorable-dark-skinned-little-gymnast-competing-parallel-bars.jpg';
import img6 from '../../../assets/front-view-trainer-talking-players (1).jpg';
// import img2 from '../../../assets/home/02.jpg';
// import img3 from '../../../assets/home/03.png';
// import img4 from '../../../assets/home/04.jpg';
// import img5 from '../../../assets/home/05.png';
// import img6 from '../../../assets/home/06.png';

const Banner = () => {
    return (
       
                <Carousel>
                    {/* <div>
                        <img src={img1} />
                    </div> */}
                    <div>
                        <img src={img2} />
                    </div>
                    <div>
                        <img src={img3} />
                    </div>
                    <div>
                        <img src={img4} />
                    </div>
                    <div>
                        <img src={img5} />
                    </div>
                    <div>
                        <img src={img6} />
                    </div>
                </Carousel>
         
    );
};

export default Banner;