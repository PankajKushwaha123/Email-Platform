import React from "react";

function MailItem(props) {
  let name = props.name;
  let subject = props.subject;
  let description = props.description;
  let time = props.time;
  return (
    <tr>
      <td className="text-center" style={{ width: "60px" }}>
        <div className="form-check d-inline-block">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="inbox-msg15"
            name="inbox-msg15"
          />
          <label className="form-check-label" for="inbox-msg15"></label>
        </div>
      </td>
      <td
        className="d-none d-sm-table-cell fw-semibold"
        style={{ width: "140px" }}
      >
        {name}
      </td>
      <td>
        <a
          className="fw-semibold"
          data-bs-toggle="modal"
          data-bs-target="#one-inbox-message"
          href="#"
        >
          {subject}
        </a>
        <div className="text-muted mt-1">{description}</div>
      </td>
      <td
        className="d-none d-xl-table-cell text-muted"
        style={{ width: "80px" }}
      >
        <i className="fa fa-paperclip me-1"></i> (3)
      </td>
      <td
        className="d-none d-xl-table-cell text-muted"
        style={{ width: "120px" }}
      >
        <em>{time}</em>
      </td>
    </tr>
  );
}

export default MailItem;
