import "./FourthCards.css";
import { IoShareSocial } from "react-icons/io5";
import { SlSocialTwitter } from "react-icons/sl";
import { FaGithub } from "react-icons/fa6";

import deck1 from '/deck_baker1.jpg';
import deck2 from '/deck_baker2.jpg';
import deck3 from '/deck_baker3.jpg';

export default function FourthCards() {
  return (

    <div className='container-fourth'>

        <div className="box-fourth">
            
            <div className='minibox-fourth'>
                
                <div className='div-img-fourth'>
                    <img src={deck1} width={220} height={220} alt="img baker1" 
                        className="img-fourth"
                    />
                </div>

                <div className='textbox-fourth'>
                    <h3 className="titlebox-fourth">Title</h3>
                    <h6 className="h6-fourth">second title</h6>
                    <p className="para-fourth">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit 
                        pellentesque habitant morbi tristique senectus.
                    </p>
                </div>

                <div className="div-details-fourth">
                    <details className="details-fourth">
                        <summary className="summary-fourth">
                            Baker decks
                        </summary>
                        <a href="" className="link-fourth">https://www.baker-decks.com</a>
                    </details>
                </div>

                <div className="container-socialicons-fourth">
                    
                    <div className="box-socialicons-fourth">
                        <span className="icons-fourth"><IoShareSocial size={24} /></span>
                        <span className="icons-fourth"><SlSocialTwitter size={24} /></span>
                        <span className="icons-fourth"><FaGithub size={24} /></span>
                    </div>

                </div>

            </div>
            
            <div className='minibox-fourth'>
                
                <div className='div-img-fourth'>
                    <img src={deck2} width={220} height={220} alt="img baker2" 
                        className="img-fourth"
                    />
                </div>

                <div className='textbox-fourth'>
                    <h3 className="titlebox-fourth">Title</h3>
                    <h6 className="h6-fourth">second title</h6>
                    <p className="para-fourth">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit 
                        pellentesque habitant morbi tristique senectus.
                    </p>
                </div>

                <div className="div-details-fourth">
                    <details className="details-fourth">
                        <summary className="summary-fourth">
                            Baker decks
                        </summary>
                        <a href="" className="link-fourth">https://www.baker-decks.com</a>
                    </details>
                </div>

                <div className="container-socialicons-fourth">
                    
                    <div className="box-socialicons-fourth">
                        <span className="icons-fourth"><IoShareSocial size={24} /></span>
                        <span className="icons-fourth"><SlSocialTwitter size={24} /></span>
                        <span className="icons-fourth"><FaGithub size={24} /></span>
                    </div>

                </div>

            </div>
            
            
            <div className='minibox-fourth'>
                
                <div className='div-img-fourth'>
                    <img src={deck3} width={220} height={220} alt="img baker3" 
                        className="img-fourth"
                    />
                </div>

                <div className='textbox-fourth'>
                    <h3 className="titlebox-fourth">Title</h3>
                    <h6 className="h6-fourth">second title</h6>
                    <p className="para-fourth">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit 
                        pellentesque habitant morbi tristique senectus.
                    </p>
                </div>

                <div className="div-details-fourth">
                    <details className="details-fourth">
                        <summary className="summary-fourth">
                            Baker decks
                        </summary>
                        <a href="" className="link-fourth">https://www.baker-decks.com</a>
                    </details>
                </div>

                <div className="container-socialicons-fourth">

                    <div className="box-socialicons-fourth">
                        <span className="icons-fourth"><IoShareSocial size={24} /></span>
                        <span className="icons-fourth"><SlSocialTwitter size={24} /></span>
                        <span className="icons-fourth"><FaGithub size={24} /></span>
                    </div>

                </div>

            </div>

        </div>

    </div>

  )
}
