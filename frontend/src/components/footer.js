import logo from '../assets/logo.svg';

export default function Footer() {
    return(
        <footer class="footer bg-black w-100 py-md-5 pt-1 px-md-5 px-3 container-fluid border-bottom border-secondary" style={{ paddingBottom: '100px',}}>
            <div class="row py-5 align-items-start justify-content-between">
                <div class="col-md-3 d-flex flex-column ps-md-5">
                    <img src={logo} width="130" classname="footer-logo" alt="logo" loading="lazy"/>
                    <div class="mt-md-4 mt-2 mb-4">
                        <a class="fb py-1 ms-2 ms-md-0 me-4" href="https://www.facebook.com/Cyberstickio-100203956085984/">
                            <img src="https://apps.nativetalk.com.ng:445/static/ic_fb.svg" loading="lazy"/>
                        </a>
                        <a class="tw py-1 me-4" href="https://www.twitter.com/Cyberstick_io">
                            <img src="https://apps.nativetalk.com.ng:445/static/ic_tw.svg" loading="lazy"/>
                        </a>
                        <a class="ig py-1 me-4" href="https://www.instagram.com/cyberstick.io/">
                            <img src="https://apps.nativetalk.com.ng:445/static/ic_ig.svg" loading="lazy"/>
                        </a>
                        <a class="yt py-1 me-4" href="https://youtube.com/channel/UCAvjUB_HpH77JcBvEKfhZFA">
                            <img src="https://apps.nativetalk.com.ng:445/static/ic_yt.svg" loading="lazy"/>
                        </a>
                    </div>
                    
                </div>
                <div class="col-md-3 col-6 d-flex flex-column mt-5 mt-md-0">
                    <h5 class="p-0 mt-md-0 text-white">CATEGORIES</h5>
                    <a href="#cyberbuy" class="py-1 m-0">CyberBuy</a>
                    <a href="#cyberswap" class="py-1 m-0">CyberSwap</a>
                    <a href="#cyberfix" class="py-1 m-0">CyberFix</a>
                </div>
                <div class="col-md-3 col-6 d-flex flex-column mt-5 mt-md-0">
                    <h5 class="p-0 mt-md-0 text-white">CONTACT US</h5>
                    <a href="tel:09088999099" class="py-1 m-0">(+234) 908 899 9099</a>
                    <a href="#!" class="py-1 m-0">support@cyberstick.io</a>
                </div>
                <div class="col-md-3 col-6 d-flex flex-column mt-5 mt-md-0">
                    <h5 class="p-0 mt-md-0 text-white">INFORMATION</h5> 
                    <a href="#!" class="py-1 m-0">Terms And Conditions</a>
                    <a href="#!" class="py-1 m-0">Privacy Policy</a>
                </div>
            </div>  
            <div class="d-flex text-white align-items-end flex-column mt-md-0">
                <p class="text-end off-white">SUBSCRIBE TO OUR NEWSLETTER</p>
                <div class="d-flex">
                    <div class="form-group me-2 " >
                        <input type="email" class="form-control text-white" placeholder="Your email" style={{backgroundColor: "#222222"}}/>
                    </div>
                    <button class="btn ctabtn ">Subscribe</button>
                </div>
            </div>

        </footer>
    )
    
}