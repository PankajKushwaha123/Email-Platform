import React from "react";

function ContactItem(props) {
  let id = props.id;
  let name = props.name;
  let email = props.email;
  let lists = props.lists;
  let phone = props.phone;
  let color = "info";
  return (
    <tr>
      <td className="text-center fs-sm">{id}</td>
      <td className="fw-semibold fs-sm">{name}</td>
      <td className="d-none d-sm-table-cell fs-sm">
        {email}
        <span className="text-muted"></span>
      </td>
      <td className="d-none d-sm-table-cell">{lists}</td>
      <td>
        <span className="text-muted fs-sm">{phone}</span>
      </td>
    </tr>
  );
}

export default ContactItem;
