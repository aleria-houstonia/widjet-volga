import React, { useReducer } from "react";

export const dataContext = React.createContext();

const INIT_STATE = {
  gender: "",
  url: "",
  typeGlasses: "",
  needCorection: false,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GENDER":
      return { ...state, gender: action.payload };
    case "TYPEGLASSES":
      return { ...state, typeGlasses: action.payload };
    case "URL":
      return { ...state, url: action.payload };
    case "NEEDCORRECTION":
      return { ...state, needCorection: action.payload };
    default:
      return state;
  }
};

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function changeGender(gender) {
    dispatch({
      type: "GENDER",
      payload: gender,
    });
  }
  function changeTypeGlasses(typeGlasses) {
    dispatch({
      type: "TYPEGLASSES",
      payload: typeGlasses,
    });
  }
  function changeURL(url) {
    dispatch({
      type: "URL",
      payload: url,
    });
  }
  function changeCorrection(val) {
    dispatch({
      type: "NEEDCORRECTION",
      payload: val,
    });
  }
  return (
    <dataContext.Provider
      value={{
        changeTypeGlasses,
        changeURL,
        changeGender,
        changeCorrection,
        needCorection: state.needCorection,
        gender: state.gender,
        url: state.url,
        typeGlasses: state.typeGlasses,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataContextProvider;
