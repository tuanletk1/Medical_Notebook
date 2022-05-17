import { Route, Switch, BrowserRouter } from "react-router-dom";
// component
import Routes from "./routes/Routes";

function MedicalUser() {
  return (
    <BrowserRouter>
      {
        <Route
          render={() => (
            <>
              <Routes />
            </>
          )}
        />
      }
    </BrowserRouter>
  );
}

export default MedicalUser;
