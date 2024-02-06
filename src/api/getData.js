import Axios from "axios";


export default function getData(){
    return Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        const data = response.data;
        return data;
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        throw error;
      });
  }