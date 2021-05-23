import logo from "../../logo.svg";

// import { AppContainer, AppHeader, AppLogo, AppLink } from "./App.styled";
import { CompanyList } from "../companyList";
import { Button } from "../add_company";

export const App = () => {
  return (
    <div>
      <CompanyList />
      <Button />
    </div>
  );
  // return (
  //   <AppContainer>
  //     <AppHeader>
  //       <AppLogo src={logo} alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
  //         Learn React
  //       </AppLink>
  //     </AppHeader>
  //   </AppContainer>
  // );
};
