import { useEffect,useState } from "react";
import axios from "axios";

type Post = {
    id:number;
    userId:number;
    title:string;
    body:string;
};

export const PostList = () => {
    const [postList,setPostList] = useState<Post[]>([]);
    const [userId, setUserId] = useState(1);
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() =>{
        axios
            .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setPostList(res.data);
            })
            .catch((e)=> {
                setErrorMessage(e.message);
            });
    },[userId]);

    return (
        <div>
            <h2>PostList</h2>
            <div>
                <p>userID:{userId}</p>
                <input 
                    type="number"
                    value={userId}
                    onChange={(e) => setUserId(Number(e.target.value))}
                />
            </div>
            {errorMessage !== "" && (
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>
            )}
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">ユーザーid</th>
                    <th scope="col">タイトル</th>
                    <th scope="col">内容</th>
                    </tr>
                </thead>
                <tbody>
                    {postList.map((post) => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.userId}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};