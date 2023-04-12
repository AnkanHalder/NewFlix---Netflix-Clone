import axios from "axios";

async function Post(data){
    const response = await axios.get(
        "http://localhost:8000/login/" + data.email +"/" + data.password
      );
      return response.data;

}

export default Post;