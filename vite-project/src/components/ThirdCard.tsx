import skate from '/skate_ex.jpg';
import './ThirdCard.css';

export default function ThirdCard() {
  return (
    <div className='container'>

        <div className='box2'>

            <div className='div-img3'>
              <img src={skate} width={300} height={300} alt="img of skate" />
            </div>

            <div className='text-box2'>

                <p className='paraTitle'>Title box</p>

                <p className='paraOne'>un truc</p>
                <p className='paraOne paraTwo'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit 
                    pellentesque habitant morbi tristique senectus. 
                </p> 

            </div>

        </div>

    </div>
  )
}
