import { createContext, useState, useEffect } from "react";
//1
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";

export const UserContext = createContext();



//3 + passer la méthode dans Provider
const signUp = (email,pwd) => createUserWithEmailAndPassword(auth,email,pwd)


export function UserContextProvider(props) {
  //2
const [currentUser, setCurrentUser] = useState()
const [loadingData, setLoadingData] = useState(true)



const [modalState, setModalState] = useState({
    signInModal: false,
    signUpModal: false,
  });

  const toggleModal = (modal) => {
    if (modal === "signIn") {
      setModalState({
        signInModal: true,
        signUpModal: false,
      });
    } else if (modal === "signUp") {
      setModalState({
        signInModal: false,
        signUpModal: true,
      });
    } else if (modal === "close") {
      setModalState({
        signInModal: false,
        signUpModal: false,
      });
    }
  };

  return (
    <UserContext.Provider value={{ modalState, toggleModal, signUp }}>
      {props.children}
    </UserContext.Provider>
  );
}
