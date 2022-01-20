import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

export default function Navbar() {
  const { toggleModal } = useContext(UserContext);

  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
      alert(
        "Pour certaine raisons nous ne pouvons pas vous déconnecter, merci de réessayer ultérieurement"
      );
    }
  };

  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        AuthJS
      </Link>
      <div>
        <button
          onClick={() => toggleModal("signUp")}
          className="btn btn-primary"
        >
          Sign Up
        </button>
        <button
          onClick={() => toggleModal("signIn")}
          className="btn btn-primary ms-2"
        >
          Sign In
        </button>
        <button onClick={logOut} className="btn btn-danger ms-2">
          Log Out
        </button>
      </div>
    </nav>
  );
}
