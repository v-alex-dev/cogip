import Axios from "axios";

export function getUsers(){
    return Axios.get("https://cogip-990e44950882.herokuapp.com/users/")
      .then(response => {
        const users = response.data;
        return users;
      })
      .catch(error => {
        console.error("Error fetching users:", error);
        throw error;
      });
}

export function getUser(id){
    return Axios.get("https://cogip-990e44950882.herokuapp.com/users/"+id)
      .then(response => {
        const user = response.data;
        return user;
      })
      .catch(error => {
        console.error("Error fetching user:", error);
        throw error;
      });
}