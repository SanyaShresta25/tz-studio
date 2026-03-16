export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT SIDE */}
        <div className="footer-left">

          <div className="company">
            <img src="/logo.png" className="footer-logo" alt="Design Webtech"/>
            <span className="company-name">Design Webtech</span>
          </div>

          <p className="address">
            #120/34/1, 5th Main, Above IDFC Bank, Sector 7,
            HSR Layout, Bengaluru - 560102
          </p>

          <p className="contact">
            📞 99920123436
          </p>

          <p className="email">
            ✉ support@designwebtech.com
          </p>

          <p className="copyright">
            News Portal © 2026. All rights reserved.
          </p>

        </div>


        {/* RIGHT SIDE */}
        <div className="footer-right">

          <p className="follow">Follow our page</p>

          <div className="social-icons">
            <a href="#">f</a>
            <a href="#">in</a>
            <a href="#">X</a>
            <a href="#">▶</a>
            <a href="#">📷</a>
          </div>

          <div className="footer-links">
            <a href="#">Contact</a>
            <a href="#">Blog</a>
            <a href="#">Photo Gallery</a>
            <a href="#">Videos</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>

          <p className="powered">
            Powered by <span>Design Webtech</span>
          </p>

        </div>

      </div>

    </footer>
  )
}