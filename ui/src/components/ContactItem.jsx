import React from "react";

function ContactItem(props) {
  let id = props.id;
  let name = props.name;
  let email = props.email;
  let type = props.type;
  let registered = props.registered;
  let color = "info";
  if (type == "vip") {
    color = "success";
  } else if (type == "disabled") {
    color = "danger";
  }
  return (
    <tr>
      <td className="text-center fs-sm">{id}</td>
      <td className="fw-semibold fs-sm">{name}</td>
      <td className="d-none d-sm-table-cell fs-sm">
        {email}
        <span className="text-muted"></span>
      </td>
      <td className="d-none d-sm-table-cell">
        <span
          className={`fs-xs fw-semibold d-inline-block py-1 px-3  rounded-pill bg-${color}-light text-${color}`}
        >
          {type}
        </span>
      </td>
      <td>
        <span className="text-muted fs-sm">{registered} days ago</span>
      </td>
    </tr>
  );
}

export default ContactItem;
