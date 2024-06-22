import { useEffect,useState } from "react";

export const PostList = () => {
    const [userId, setUserId] = useState(1);
    useEffect(() =>{
        console.log("PostsList");
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
        </div>
    );
};