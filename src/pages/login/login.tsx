import { useState } from "react";

import { useLoginMutation } from "../../services/auth";

export const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [set, result] = useLoginMutation();

  return (
    <div>
      <input
        onChange={(e) => setLogin({ ...login, email: e.currentTarget.value })}
      />
      <input
        onChange={(e) =>
          setLogin({ ...login, password: e.currentTarget.value })
        }
      />
      <button onClick={() => set(login)}>Login</button>
    </div>
  );
};
