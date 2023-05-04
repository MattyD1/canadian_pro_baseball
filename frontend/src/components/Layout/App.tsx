import { ReactNode } from "react";
import { Navbar } from "../Navbar";

type AppProps = {
  children: ReactNode;
};

const App = ({ children }: AppProps) => {
  return (
    <main>
      {/* Navigation Bar */}
      <Navbar />

      {/* Content */}
      {children}

      {/* Footer */}
    </main>
  );
};

export default App;
