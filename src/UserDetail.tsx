import { useState } from "react";

type User = {
  firstName: string;
  lastName: string;
  loginCount: number;
};

export const UserDetail = () => {
  const [user, setUser] = useState<User>({
    firstName: "sample",
    lastName: "太郎",
    loginCount: 0,
  });

  const handleLogin = () => {
    const newCount = user.loginCount + 1;
    setUser({
      firstName: user.firstName,
      lastName: user.lastName,
      loginCount: newCount,
    });
  };

  return (
    <div>
      <p>{user.firstName} {user.lastName}</p>
      <p>ログイン回数: {user.loginCount}</p>
      <div>
        <button className="btn btn-success" onClick={handleLogin}>
          ログイン
        </button>
      </div>
    </div>
  );
};
