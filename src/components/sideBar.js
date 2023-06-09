import React from 'react'
import hamza from '../img/hamza.jpg'

export default function SideBar() {
  return (
    <aside data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1000" >
        <div class="image">
            <img src={hamza} alt="profile" />
        </div>
        <div class="profile">
            <h3>hamza maerof</h3>
            <p>full stack developer</p>
            <ul class="social-media">
              <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-at"></i></a></li>
            </ul>
        </div>
        <div class="info">
            <div class="info-b">
                <i class="fa-solid fa-mobile-screen-button"></i>
                <div class="text">
                    <h6>phone</h6>
                    <span>+21259079226</span>
                </div>
            </div>
            <div class="info-b">
                <i class="fa-solid fa-envelope-open-text"></i>
                <div class="text">
                    <h6>email</h6>
                    <span>hamzamaerof98@gmail.com</span>
                </div>
            </div>
            <div class="info-b">
                <i class="fa-solid fa-location-dot"></i>
                <div class="text">
                    <h6>location</h6>
                    <span>casablanca</span>
                </div>
            </div>
            <div class="info-b">
                <i class="fa-solid fa-cake-candles"></i>
                <div class="text">
                    <h6>birthday</h6>
                    <span>septembre26,1998</span>
                </div>
            </div>
        </div>
        <div class="btn w-100">
          <a href="https://hamzamf7.github.io/MY_CV/" target="_blank">
            <button>
                {/* <i class="fa-solid fa-download"></i> */}
                <i class="fa-solid fa-eye"></i>
              <span>  CV</span>
            </button>
          </a>
        </div>
    </aside>
 )
}
