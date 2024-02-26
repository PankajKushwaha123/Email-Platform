import React from "react";

function Footer() {
  return (
    <footer id="page-footer" className="bg-body-light">
      <div className="content py-3">
        <div className="row fs-sm">
          <div className="col-sm-6 order-sm-2 py-1 text-center text-sm-end">
            Made on Earth <i className="fa fa-earth text-info"></i> by Humans.
          </div>
          <div className="col-sm-6 order-sm-1 py-1 text-center text-sm-start">
            <a
              className="fw-semibold"
              href="https://1.envato.market/AVD6j"
              target="_blank"
            >
              MailMort
            </a>{" "}
            &copy; <span data-toggle="year-copy"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
