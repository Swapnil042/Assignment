import React from 'react';
import InfoTableRow from './InfoTableRow';

const InfoTable = (props)=>{
    return(
        <table id="example" class="table table-striped table-bordered" style={{width:'100%'}}>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
               {props.infos.map(info=>{
                   return <InfoTableRow key={info._id}
                                            info={info}
                                            deleteHandler={props.deleteHandler}
                                            showEditForm={props.showEditForm}/>
               })}
            </tbody>
        </table>
    )
}

export default InfoTable;