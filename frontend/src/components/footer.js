

export default function Footer() {
    return(
        <footer class="footer bg-black w-100 py-5 px-5 container-fluid border-bottom border-secondary">
            <div class="row py-5 align-items-start justify-content-between">
                <div class="col-md-3 d-flex flex-column ps-5">
                    <img src="https://apps.nativetalk.com.ng:445/static/ic_logo.svg" style={{width: "60%"}} classname="footer-logo " alt="logo" loading="lazy"/>
                    <div class="mt-4">
                        <a class="fb py-1 m-2 me-4" href="https://www.facebook.com/Cyberstickio-100203956085984/">
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
                <div class="col-md-3 col-6 d-flex flex-column mt-4">
                    <h5 class="p-0 mt-md-0 text-white">CATEGORIES</h5>
                    <a href="#cyberbuy" class="py-1 m-0">CyberBuy</a>
                    <a href="#cyberswap" class="py-1 m-0">CyberSwap</a>
                    <a href="#cyberfix" class="py-1 m-0">CyberFix</a>
                </div>
                <div class="col-md-3 col-6 d-flex flex-column mt-4">
                    <h5 class="p-0 mt-md-0 text-white">CONTACT US</h5>
                    <a href="#!" class="py-1 m-0">(+234) 908 899 9099</a>
                    <a href="#!" class="py-1 m-0">support@cyberstick.io</a>
                </div>
                <div class="col-md-3 col-6 d-flex flex-column mt-4">
                    <h5 class="p-0 mt-md-0 text-white">INFORMATION</h5> 
                    <a href="#!" class="py-1 m-0">Terms And Conditions</a>
                    <a href="#!" class="py-1 m-0">Privacy Policy</a>
                </div>
            </div>  
            <div class="d-flex text-white align-items-end flex-column">
                <p class="text-end">SUBSCRIBE TO OUR NEWSLETTER</p>
                <div class="d-flex">
                    <div class="form-group me-2 " style={{width: "300px"}}>
                        <input type="email" class="form-control text-white" placeholder="Your email" style={{backgroundColor: "#222222"}}/>
                    </div>
                    <button class="btn ctabtn ">Subscribe</button>
                </div>
            </div>

        </footer>
    )
    
}