import React from 'react';
import One from "../../images/packageOne.png"
import Two from "../../images/packageTwo.jpeg"
import Three from "../../images/packageThree.jpeg"
import Four from "../../images/packageFour.jpeg"
import { Link } from 'react-router-dom';

function Package() {
    return (<>
        <div className="container pb-5 mb-5">
            <div className="text-dark my-5 pt-4">
                
                <h2 className="mutual-heading font-weight-bold font-bold">Packages</h2>
                
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-6"><Link to ="/package/airport" >
                    <a href="tel:+91-9935474730">
                        <img src={One} alt="Airport" className="rounded mb-3 img-fluid"/>
                    </a>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <a href="tel:+91-9935474730">
                        <img src={Two} alt="Airport" className="rounded mb-3 img-fluid"/>
                    </a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <a href="tel:+91-9935474730">
                        <img src={Three} alt="Airport" className="rounded mb-3 img-fluid"/>
                    </a>
                    
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6"><Link to ="/package/Vindhyachal" >
                    <a href="tel:+91-9935474730">
                        <img src={Four} alt="Airport" className="rounded mb-3 img-fluid"/>
                    </a></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Package
