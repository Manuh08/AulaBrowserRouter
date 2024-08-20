<<<<<<< HEAD
import Header from "./components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
    return(
        <>
        <Header/>

        <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                dynamicHeight
             >
                <div>
                    <img src="" alt="Slide 1" />
                </div>

                <div>
                    <img src="" alt="Slide 2" />
                </div>

                <div>
                    <img src="" alt="Slide 3" />
                </div>

                <div>
                    <img src="" alt="Slide 4" />
                </div>

                <div>
                    <img src="" alt="Slide 5" />
                </div>

                <div>
                    <img src="" alt="Slide 6" />
                </div>
      
            </Carousel>

            <Footer/>
        </>
=======
import Header from "../../components/Header";

export default function Home(){
    return(
        <>
        <Header/>
        <p>Minha Home</p>
        </>
        
>>>>>>> 0ed2b0abfc6a7ed304cee3bbb595c1b7b0052d09
    );
}