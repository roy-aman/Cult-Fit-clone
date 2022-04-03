const navbar = () => {
  return `
  <div id="mobile_navbar">
  <div class="mobile_nav_top">
    <div class="toggle_mobile_nav">
      <i class="fa-solid fa-bars"></i>
    </div>
    <a href="./">  <img
    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_35,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg"
    alt="logo"
  /> </a>
    <div id="mobile_location">Bangalore</div>
  </div>
</div>
<div id="mobile_nav_links">
  <div>
  <img
    src="https://static.cure.fit/assets/images/curefit-v-man-white.svg"
    alt="logo"
  />
  <p class="close_mobile_nav">X</p>
  </div>
    <div><a href="./">HOME</a></div>
    <div><a href="./cultCenter.html">CULT</a></div>
    <div><a href="./fitness.html">LIVE</a></div>
    <div><a href="./care.html">CARE</a></div>
    <div><a href="./mind.html">MIND</a></div>
    <div><a href="./store.html">STORE</a></div>


    <div><p id="mobile_signin">Sign in</p></div>
    <div><p id="mobile_cart">Cart</p></div>
    <div><p>Blog</p></div>
</div>
  <nav>
    <div class="navbar_logo">
      <a href="./"><img
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
        alt="logo" 
      /> </a>
    </div>
    <div class="middle_nav_links">
      <div><a href="./cultCenter.html"> CULT </a></div>
      <div><a href="./fitness.html"> LIVE </a></div>
      <div><a href="./care.html"> CARE </a></div>
      <div><a href="./eatOrder.html"> EAT </a></div>
      <div><a href="./mind.html"> MIND </a></div>
      <div><a href="./store.html"> STORE </a></div>
    </div>
    <div class="right_nav_links">
      <div id="toggle_location">
        <p>Bangalore</p>
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/location.png"
          alt="location"
        />
      </div>
      <div id="location_container" class="hide">
      <div>
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_20,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/search.svg" alt="search">
        <input type="text" placeholder="Search your city">
      </div>
      <div class="popular_cities">
        <p>Popular Cities</p>
        <div>
          <h2>Bangalore</h2>
          <h2>Delhi NCR</h2>
          <h2>Hyderabad</h2>
          <h2>Mumbai</h2>
        </div>
      </div>
      <div class="other_cities">
        <p>Others</p>
        <div>
          <h2>Ranchi</h2>
          <h2>Dehradun</h2>
          <h2>Bhubaneswar</h2>
          <h2>Jabalpur</h2>
          <h2>Vijayawada</h2>
          <h2>Chennai</h2>
          <h2>Visakhapatnam</h2>
          <h2>Jaipur</h2>
          <h2>Vadodara</h2>
          <h2>Pune</h2>
          <h2>Kolkata</h2>
          <h2>Ahmedabad</h2>
          <h2>Mysore</h2>
          <h2>Chandigarh Tricity</h2>
          <h2>Kota</h2>
          <h2>Kochi</h2>
          <h2>Ludhiana</h2>
          <h2>Surat</h2>
          <h2>Jammu</h2>
          <h2>Amritsar</h2>
          <h2>Indore</h2>
          <h2>Coimbatore</h2>
          <h2>Mangalore</h2>
          <h2>Bhopal</h2>
          <h2>Nagpur</h2>
          <h2>Kanpur</h2>
          <h2>Agra</h2>
          <h2>Lucknow</h2>
          <h2>Other</h2>
        </div>
      </div>
    </div>
      <div>GET APP</div>
      <div id="login">
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/Profile.png"
          alt="user"
        />
      </div>
      <div id="user_logged">
      <p>X</p>
      <h2>Hi, you are already logged in.</h2>
      <button>Log Out</button>
    </div>
      <div id="cart_btn">
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg"
          alt="cart"
        />
      </div>
      <div id="cart_popup" class="hide">
      <div class="cart_top">
        <p>Your Cart</p>
        <p class="close_cart">X</p>
      </div>
      <div class="cart_mid">
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/temp/cart/empty-cart-dark-theme.svg"
          alt="empty"
        />
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't made any purchases yet</p>
      </div>
      <div class="total_items_price"></div>
      <button id="checkOut">Back</button>
    </div>
    </div>
  </nav>
  

  <div id="login_popup">
  <div>
    <p class="close_login">X</p>
    <div class="login_logo">
      <img
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_75,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg"
        alt="logo"
      />
      <img
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.55,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cf-name-white.png"
        alt="brand"
      />
    </div>
    <div class="login_input">
      <span>+91</span>
      <input type="Number" placeholder="Enter your phone number" />
    </div>
    <button disabled>CONTINUE</button>
    
    <p class="social">
      OR CONNECT WITH
      <img
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_24,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/login/google-login-white.svg"
        alt="google"
      />
      <img
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_24,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/login/fb-login-white.svg"
        alt="fb"
      />
      <img
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/login/email-rounded.svg"
        alt="mail"
      />
    </p>
    <div class="conditions">
      * By Continuing you agree to the Terms of Services and Privacy policy.
    </div>
  </div>
  <div class="enter_otp">
  <p class="backToLogin">&loarr;</p>
  <h1>Enter Your OTP</h1>
  <div class="otp">Your otp is</div>
  <div>
    <input type="number" placeholder="Enter OTP here" />
    <p class="otp_message"></p>
  </div>
  <button disabled>CONFIRM</button>
</div>
</div> 
  `;
};

export default navbar;
