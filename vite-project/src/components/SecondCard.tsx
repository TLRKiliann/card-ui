import skate from '/skate_ex.jpg';
import './SecondCard.css';

export default function SecondCard() {
  return (
    <div className='container'>

        <div className='box'>

            <div className='div-img2'>
              <img src={skate} width={300} height={300} alt="img of skate" />
            </div>

            <div className='text-box'>

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
