import { Carousel } from 'antd';
import Testimonials from '../Testimonials/Testimonials';

function CaRousel() {
    return (
        <Carousel autoplay>
            <Testimonials
                src={'https://keenitsolutions.com/products/html/soccer/images/testimonial/peter.jpg'}
                position={'CEO Founder '}
            >
                William Peter
            </Testimonials>
            <Testimonials
                src={'https://keenitsolutions.com/products/html/soccer/images/testimonial/tom.jpg'}
                position={'CEO Founder '}
            >
                Tom Williamson
            </Testimonials>
            <Testimonials
                src={'https://keenitsolutions.com/products/html/soccer/images/testimonial/lan.jpg'}
                position={'Office Manager'}
            >
                Ian Kristian
            </Testimonials>
        </Carousel>
    )
}

export default CaRousel;