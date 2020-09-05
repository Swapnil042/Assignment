import React from 'react';

const InfoTableRow = (props)=>{
    const {name,address,_id} = props.info;
    return(
        <tr>
            <td>{name}</td>
            <td>{address}</td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" onClick={props.showEditForm.bind(this,props.info)} className="btn btn-secondary">Edit</button>
                    <button type="button" onClick={props.deleteHandler.bind(this,_id)} className="btn btn-danger">Delete</button>
                </div>
            </td>
            
        </tr>
    )
}

export default InfoTableRow;