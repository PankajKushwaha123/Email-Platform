import React from "react";

function SendinLogs(props) {
  let id = props.id;
  let usrtyp = props.type;
  let recipients = props.recipients;
  let dgnr = props.dgnr;
  let medium = props.medium;
  let event = props.event;
  let time = props.time;
  let invested = props.invested;
  let color = medium == "API" ? "warning" : "info";

  return (
    <tr>
      <td>
        <a className="fw-semibold" href="#">
          {id}{" "}
        </a>
        <p className="fs-sm fw-medium text-muted mb-0">{usrtyp}</p>
      </td>
      <td className="d-none d-xl-table-cell">
        <a className="fw-semibold" href="#">
          {recipients}
        </a>
        <p className="fs-sm fw-medium text-muted mb-0">{dgnr}</p>
      </td>
      <td>
        <span
          className={`fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-${color}-light text-${color}`}
        >
          {medium}
        </span>
      </td>
      <td className="d-none d-sm-table-cell text-center">
        <strong>{event}</strong>
      </td>
      <td className="d-none d-sm-table-cell fw-semibold text-muted text-end">
        {time}
      </td>
      <td className="d-none d-sm-table-cell text-end">
        <strong>{invested}</strong>
      </td>
    </tr>
  );
}

export default SendinLogs;
