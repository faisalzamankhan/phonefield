import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

import Example from "./component/example";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider>
    </>
  );
}

export default App;
