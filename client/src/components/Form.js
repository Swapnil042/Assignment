import React from 'react';
import Input from './Input';

const Form = (props)=>{
    return(
        <form onSubmit={props.handler}>
            <h4>{props.isEditForm ? "Editing Infomation: " : "Add Infomation: "}</h4>
            <div className="form-group">
                <Input name="name"
                       placeholder="Enter Name"
                       labelName="Name: "
                       handleChange={props.handleChange}
                       value={props.info.name}/>
                <Input name="address"
                       placeholder="Enter Address"
                       labelName="Address: "
                       handleChange={props.handleChange}
                       value={props.info.address}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form> 
    )
}

export default Form;