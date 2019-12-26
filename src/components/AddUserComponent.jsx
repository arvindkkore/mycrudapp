import React, { Component } from 'react';
import ApiService from "../service/ApiService";
class AddUserComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            id: '',
            firstName: '',
            lastName: '',
            emailId: "",            
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        ApiService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add User</h2>
                <form> 
                <div className="form-group">
                    <label>First Name:</label>
                    <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Last Name:</label>
                    <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                </div>                
                <div className="form-group">
                    <label>Email:</label>
                    <input placeholder="Email " name="emailId" className="form-control" value={this.state.emailId} onChange={this.onChange}/>
                </div>
                <button className="btn icon-left btn-danger m-2" onClick={this.props.history.goBack}>Back</button>                
                <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                
            </form>
    </div>
        );
    }
}

export default AddUserComponent;