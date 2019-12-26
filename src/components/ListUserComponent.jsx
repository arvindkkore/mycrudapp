import React, { Component } from 'react';
import ApiService from "../service/ApiService";

class ListUserComponent extends Component {    
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
    }
    deleteUser = (userId) =>{
        ApiService.deleteUser(userId)
        .then(res => {
            this.setState({message : 'User deleted successfully.'});
            this.setState({users: this.state.users.filter(user => user.id !== userId)});
        })
    }
    editUser = (id) =>{
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }
    addUser =() =>{
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');  
    }
    reloadUserList =() =>{
        ApiService.fetchUsers()
        .then((res) => {
            console.log("======");
            console.log(res);
            this.setState({users: res.data})
        });
    }

    componentDidMount() {
        this.reloadUserList();
    }    
    render() { 
        return ( 
            <div>
            <h2 className="text-center">User Details</h2>
            <button className="btn btn-success m-2"  onClick={() => this.addUser()}> Add User</button>
            <table className="table table-striped" >
                <thead>
                    <tr>
                        <th >Id</th>                        
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>                        
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map(
                    user =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.emailId}</td>
                                    <td>
                                        <button className="btn btn-danger m-2" onClick={() => this.deleteUser(user.id)}> Delete</button>
                                        <button className="btn btn-success" onClick={() => this.editUser(user.id)}> Edit</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
         );
    }
}
 
export default  ListUserComponent;