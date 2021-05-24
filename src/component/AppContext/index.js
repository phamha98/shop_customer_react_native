import React, {createContext, useState} from 'react';
const AppContext = createContext();
const AppProvider = props => {
  const [token, setToken] = useState("bU5arIOjzWz55ron1348YnfoE6Xyl4d6kjsW02K4");
  const [idUser, setIdUser] = useState("1");
  const [gender, setGender] = useState("Nu");
  const [datasale, setDatasale] = useState([]);
  const [dataall, setDataall] = useState([]);
  const [datanew, setDatanew] = useState([]);
  const [lEP, setLEP] = useState(false);
  const [productArray, setProductArray] = useState([]);
  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        gender, setGender,
        idUser, setIdUser,
        lEP, setLEP,
        datasale, setDatasale,
        dataall, setDataall,
        datanew, setDatanew,
        productArray, setProductArray
      }}>
      {props.children}
    </AppContext.Provider>
  );
};
export {AppProvider, AppContext};
