import React from "react";
export const CommonContext = React.createContext({});
const GlobalContext = ({ children }) => {
  const [accordionId, setAccordionId] = React.useState();
  const [accordionSubId, setAccordionSubId] = React.useState();
  return (
    <CommonContext.Provider
      value={{ accordionId, setAccordionId, accordionSubId, setAccordionSubId }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export default GlobalContext;
