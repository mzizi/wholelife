import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Layout } from "./components";
import { ThemeProvider } from "./context";
import { Landing, NotFound } from "./pages";
import { routes } from "./utils";

function App() {
  return (
    <ThemeProvider initialTheme="light">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
          {routes.map(({ href, label, component: Component }, key) => (
            <Route
              key={key}
              path={href}
              loader={() => <p>Loading ${label}</p>}
              element={<Layout>{Component}</Layout>}
            />
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
