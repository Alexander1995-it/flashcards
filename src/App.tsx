import { Login } from "./pages/login";
import { useMeQuery } from "./services/auth";

export const App = () => {
  const { data, isLoading, isError, error } = useMeQuery();

  return (
    <div className="App">
      <Login />
      hello
    </div>
  );
};
