import React from 'react';

const Footer = () => {
    return(
<footer className="page-footer font-small blue pt-4">
  <div className="container-fluid text-center text-md-left">
    <div className="row">
      <div className="col-md-6 mt-md-0 mt-3">
        <h5 className="text-uppercase">Botines.com</h5>
        <p>Here you can see a couple my Social Media where you can reach me</p>
        </div>
        <hr className="clearfix w-100 d-md-none pb-3" />
        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href= "https://www.instagram.com/" >Instagram</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.facebook.com/">Facebook</a>
             </li>
          </ul>
          </div>
          </div>
          </div>
          <div className="footer-copyright text-center py-3">© 2018 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
          </div>
</footer>
)
}
export default Footer