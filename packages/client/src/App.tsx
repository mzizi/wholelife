import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import * as packageJSON from "../package.json";
import { ThemeProvider } from "./context";
import { Content, Landing, NotFound } from "./pages";
import { routes } from "./utils";

function App() {
  return (
    <ThemeProvider initialTheme="light">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
          {routes.map((route, key) => {
            if (route.subRoutes && route.subRoutes.length > 0) {
              return (
                <Route
                  key={key}
                  path={route.href}
                  element={
                    <Content
                      activeView="default"
                      parentRoute={route}
                      title={route.label}
                      version={packageJSON.version}
                    />
                  }
                  loader={() => <p>Loading ${route.label}</p>}
                >
                  <Route path="*" element={<NotFound />} />
                  {route.subRoutes.map((subRoute, key) => (
                    <Route
                      key={key}
                      path={subRoute.href}
                      element={subRoute.component}
                      loader={() => <p>Loading ${subRoute.label}</p>}
                    />
                  ))}
                </Route>
              );
            } else {
              return (
                <Route
                  key={key}
                  path={route.href}
                  element={
                    <Content
                      activeView="page"
                      title={route.label}
                      version={packageJSON.version}
                    />
                  }
                  loader={() => <p>Loading ${route.label}</p>}
                />
              );
            }
          })}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
