
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
                        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-6xl font-bold'>Football at the Summer Olympics,  referred to as the Olympic Football Tournament. </h2>
                    <p>In order to avoid competition with the World Cup, FIFA have restricted participation of elite players in the men's tournament in various ways</p>
                  
                </div>
            </div>
                    </div>
                    <div>
                        <img src={img3} />
                        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-6xl font-bold'>badminton summer camp at a world-class Padukone sports management facility near you. </h2>
                    <p>We offer your kids an entire summer of fun and excitement with interesting badminton drills</p>
                  
                </div>
            </div>
                    </div>
                    <div>
                        <img src={img4} />
                        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-6xl font-bold'>In the summer of 1996,
                     Georgia in the United States to play beach volleyball at the Olympic Games.. </h2>
                    <p>It made me what I am,’he says, ‘I saw how entertaining it was for the fans. How big it was. </p>
                  
                </div>
            </div>
                    
                        
                    </div>
                    <div>
                        <img src={img5} />
                        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-6xl font-bold'> Summer camp at a world-class Padukone sports  near you. </h2>
                    <p>We offer your kids an entire summer of fun and excitement with  drills</p>
                  
                </div>
            </div>
                    
                    </div>
                    <div>
                        <img src={img6} />
                        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-6xl font-bold'>Football news, results, fixtures, blogs, podcasts and comment on the Premier League. </h2>
                    <p>We offer your kids an entire summer of fun and excitement with interesting Football drills</p>
                  
                </div>
            </div>
                    
                    </div>
                </Carousel>
         
    );
};

export default Banner;