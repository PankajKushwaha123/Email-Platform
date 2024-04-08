import React from "react";

function CampaignItem(props) {
  let color = "warning";
  let st = props.status;
  if (st == "Active") {
    color = "info";
  } else if (st == "Completed") {
    color = "success";
  }
  return (
    <tr>
      <td>
        <a className="fw-semibold" href="#">
          {props.id}{" "}
        </a>
        <p className="fs-sm fw-medium text-muted mb-0">{props.type}</p>
      </td>
      <td className="d-none d-xl-table-cell">
        <a className="fw-semibold" href="#">
          {props.recipients}
        </a>
        <p className="fs-sm fw-medium text-muted mb-0">{props.dgnr}</p>
      </td>
      <td>
        <span
          className={`fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-${color}-light text-${color}`}
        >
          {props.status}
        </span>
      </td>
      <td className="d-none d-sm-table-cell">
        <div className="progress mb-1" style={{ height: " 5px" }}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: props.rate + "%" }}
            aria-valuenow={props.rate}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <p className="fs-xs fw-semibold mb-0">{props.rate}%</p>
      </td>
      <td className="d-none d-sm-table-cell fw-semibold text-muted text-end">
        {props.time}
      </td>
      <td className="d-none d-sm-table-cell text-end">
        <strong>{props.actions}</strong>
      </td>
    </tr>
  );
}

export default CampaignItem;
