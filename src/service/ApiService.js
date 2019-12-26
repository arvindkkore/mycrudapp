import axios from 'axios';
import { logRoles } from '@testing-library/react';
const USER_API_BASE_URL = 'http://localhost:8083/api/v1/employees';
const header ={headers:{
    'Access-Control-Allow-Origin':'*'
}};
class ApiService {
    
    fetchUsers() {
        console.log("====");
        console.log(USER_API_BASE_URL);
        
        return axios.get(USER_API_BASE_URL,{header});
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId,{header});
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId,{header});
    }

    addUser(user) {
        console.log("====");
        console.log(user);
        return axios.post(""+USER_API_BASE_URL, user,{header});
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user,{header});
    }

}

export default new ApiService();