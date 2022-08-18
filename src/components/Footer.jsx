import React from "react";

function Footer() {
  return (
    <div className="container-fluid contFooter">
      <div className="row footer">
        <div className="col-12 col-md-4 aboutUs">
          <h3>ABOUT US</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo.
          </p>
          <div className="cont-redes-sociales">
            <div>
              <i class="ri-facebook-fill"></i>
            </div>
            <div>
              <i class="ri-instagram-fill"></i>
            </div>
            <div>
              <i class="ri-twitter-fill"></i>
            </div>
            <div>
              <i class="ri-pinterest-line"></i>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4  newsletter">
          <h3>SUBSCRIBE TO NEWSLETTER</h3>
          <form action="">
            <input type="text" placeholder="Your full name" /> <br />
            <input type="text" placeholder="Your e-mail address" /> <br />
            <button>SUBSCRIBE</button>
          </form>
        </div>
        <div className="col-12 col-md-4 brand">
          <h3>THE BRAND</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt minim veniam.
          </p>
          <p>
            Egestas integer eget aliquet nibh praesent tristique sum magna sit
            amet. Elit eget gravida cum sociis natoque et penatibus et magnis
            dis. Cras fermentum odio eu feugiat pretium nibh. Sagittis vitae et
            leo duis.
          </p>
        </div>
      </div>

      <div className="row copyright">
        <span>© Copyright - Ignacio Vivas</span>
      </div>
    </div>
  );
}

export default Footer;
