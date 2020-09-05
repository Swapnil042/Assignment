import React from 'react';
import InfoTable from './components/InfoTable';
import Form from './components/Form';
import Message from './components/Message';
import InfoAPI from './InfoAPI';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            infos : [],
            isEditForm : false,
            info : {
                name : "",
                address : "",
            },
            message : ""
        };

        this.deleteHandler = this.deleteHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
    }

    componentDidMount(){
        InfoAPI.getInfos().then(data=>{
            console.log(data);
            this.setState({infos : data.response})});
    }

    resetForm(){
        this.setState({
            info : {
                name : "",
                address : "",
            }
        });
    }

    handleChange(e){
        this.setState({
            info : {
                ...this.state.info,
                [e.target.name] : e.target.value
            }
        });
    }

    showEditForm(info){
        this.setState({isEditForm : true, info : info});
    }

    async deleteHandler(id){
        const deleteData = await InfoAPI.deleteInfo(id);
        const message = deleteData.message;
        if(message.msgError){
            this.setState({message});
        }
        else{
            const data = await InfoAPI.getInfos();
            this.setState({message, infos : data.response})
        }
    }

    async updateHandler(e){
        e.preventDefault();
        const updateData = await InfoAPI.updateInfo(this.state.info);
        const message = updateData.message;
        if(message.msgError){
            this.setState({message});
        }
        else{
            const data = await InfoAPI.getInfos();
            this.setState({message, infos : data.response})
        }
        this.setState({isEditForm: false});
        this.resetForm();
    }

    async addHandler(e){
        e.preventDefault();
        const postData = await InfoAPI.createInfo(this.state.info);
        const message = postData.message;
        if(message.msgError){
            this.setState({message});
        }
        else{
            const data = await InfoAPI.getInfos();
            this.setState({message, infos : data.response});
        }
        this.resetForm();
    }

    renderInfoTable(){
        if(this.state.infos.length > 0){
            return(
                <InfoTable infos={this.state.infos}
                               deleteHandler={this.deleteHandler}
                               showEditForm={this.showEditForm}/>
            );
        }
        return null;
    }

    renderForm(){
       return(
           <Form isEditForm={this.state.isEditForm}
                 info={this.state.info}
                 handleChange={this.handleChange}
                 handler={!this.state.isEditForm ? this.addHandler : this.updateHandler}/>
       ); 
    }

    renderMessage(){
        if(this.state.message === "")
            return null;
        return(
            <Message message={this.state.message}/>
        );
    }

    render(){
        return(
            <div className="row">
                <div className="col"></div>
                <div className="col-10">
                    {this.renderForm()}
                    {this.renderMessage()}
                    {this.renderInfoTable()}
                </div>
                <div className="col"></div>
            </div>
        )
    }
}

export default App;