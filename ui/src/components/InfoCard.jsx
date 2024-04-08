import React from "react";

function InfoCard(props) {
  return (
    <div className="block block-rounded d-flex flex-column">
      <div className="block-content block-content-full flex-grow-1 d-flex justify-content-between align-items-center">
        <dl className="mb-0">
          <dt className="fs-3 fw-bold">{props.num}</dt>
          <dd className="fs-sm fw-medium fs-sm fw-medium text-muted mb-0">
            {props.des}
          </dd>
        </dl>
        <div className="item item-rounded-lg bg-body-light">
          <i className={props.symbol}></i>
        </div>
      </div>
      <div className="bg-body-light rounded-bottom">
        <a
          className="block-content block-content-full block-content-sm fs-sm fw-medium d-flex align-items-center justify-content-between"
          href="#"
        >
          <span>{props.li}</span>
          <i className="fa fa-arrow-alt-circle-right ms-1 opacity-25 fs-base"></i>
        </a>
      </div>
    </div>
  );
}

export default InfoCard;
