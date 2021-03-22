import React from "react";

function TableRow(props) {
    return (
        <tr>
            <td><img src={props.image} /></td>
            <td>{props.firstname}</td>
            <td>{props.lastname}</td>
            <td>{props.email}</td>
            <td>{props.phonenumber}</td>
        </tr>
    )
}

export default TableRow;