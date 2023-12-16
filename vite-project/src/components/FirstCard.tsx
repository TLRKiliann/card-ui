import skate from '/skate_ex.jpg';
import './FirstCard.css';

export default function FirstCard() {
  return (
    <>
      <div>
        <h1>Card</h1>
      </div> 
      
      <div className='wraper-card'>
        
        <div className='container-card'>

          <div className="card">

            <div className='inner-card'>
              
              <div className='div-imgOne'>
                <img src={skate} width={200} height={200} alt="img of skate"
                  className='imgOne' />
              </div>

              <div className='div-skills'>

                <div className='title-h3'>
                  <h3>Element Skate Aqua</h3>
                </div>

                <div className='boxOne'>

                  <div className="containerOne">
                    <h4>Confort</h4>
                    <div className="div-square">
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square-two'></p>
                      <p className='square-two'></p>
                      <p className='square-two'></p>
                      <p className='square-two'></p>
                    </div>
                  </div>

                  <div className="containerOne">
                    <h4>Flip</h4>
                    <div className="div-square">
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square-two'></p>
                      <p className='square-two'></p>
                      <p className='square-two'></p>
                    </div>
                  </div>

                  <div className="containerOne">
                    <h4>Light</h4>
                    <div className="div-square">
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square-two'></p>
                      <p className='square-two'></p>
                    </div>
                  </div>

                  <div className="containerOne">
                    <h4>Solidity</h4>
                    <div className="div-square">
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square-two'></p>
                      <p className='square-two'></p>
                      <p className='square-two'></p>
                    </div>
                  </div>

                  <div className="containerOne">
                    <h4>Jump</h4>
                    <div className="div-square">
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square'></p>
                      <p className='square-two'></p>
                      <p className='square-two'></p>
                    </div>
                  </div>

                </div>

              </div>
          
            </div>

            <div className='div-bottom'>

              <div className='div-bottom-first'>
                <button>-</button>
                <button>+</button>
              </div>

              <div className='div-bottom-second'>

                <div className='sub-div-btn'>
                  <p>Price:</p>
                  <p>102.- CHF</p>
                </div>

                <div className='sub-div-btn'>
                  <p>Stock:</p>
                  <p>3</p>
                </div>

              </div>

            </div>

            <div className='underground'>
              <details>
                <summary>
                  Element
                </summary>
                <a href=""> 
                  tempor incididunt ut labore et dolore magna aliqua.
                </a>
              </details>
              <button className='click'>Show</button>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}
