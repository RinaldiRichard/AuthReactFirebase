import React from "react";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router";

export default function SignUpModal() {
  const { toggleModal, modalState, signUp } = useContext(UserContext);

  const navigate = useNavigate();

  const [validation, setValidation] = useState("");
  const [validMail, setValidMail] = useState("");

  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const formRef = useRef();

  const resetText = () => {
    setValidation("");
    setValidMail("");
  };
  const handleForm = async (e) => {
    e.preventDefault();

    if (
      (inputs.current[1].value.length || inputs.current[2].value.length) < 6
    ) {
      setValidation("6 caractères minimum");
      return;
    } else if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Les mots de passe ne correspondent pas");
      return;
    }

    try {

      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      );

      formRef.current.reset();
      setValidation("");
      console.log(cred);
      navigate("/private/private-home")
      toggleModal("close");

    } catch (err) {
      console.dir(err);
      if (err.code === "auth/email-already-in-use") {
        setValidMail("Adresse e-mail déjà utilisée");
      } else if (err.code === "auth/invalid-email") {
        setValidMail("Adresse email non valide");
      }
    }
  };

  return (
    <>
      {modalState.signUpModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div className="w-100 h-100 bg-dark bg-opacity-75"></div>
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">INSCRIPTION</h5>
                  <button
                    onClick={() => {
                      toggleModal("close");
                    }}
                    className="btn-close"
                  ></button>
                </div>

                <div className="modal-body">
                  <form
                    ref={formRef}
                    onSubmit={handleForm}
                    className="sign-up-form"
                  >
                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">
                        Adresse email
                      </label>
                      <input
                        ref={addInputs}
                        onChange={resetText}
                        type="email"
                        name="email"
                        required
                        className="form-control"
                        id="signUpEmail"
                      />
                      <p className="text-danger mt-1">{validMail}</p>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signUpPassword" className="form-label">
                        Mot de passe
                      </label>
                      <input
                        ref={addInputs}
                        onChange={resetText}
                        type="password"
                        name="password"
                        required
                        className="form-control"
                        id="signUpPassword"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="repeatPassword" className="form-label">
                        Confirmation du mot de passe
                      </label>
                      <input
                        ref={addInputs}
                        onChange={resetText}
                        type="password"
                        name="password"
                        required
                        className="form-control"
                        id="repeatPassword"
                      />
                      <p className="text-danger mt-1">{validation}</p>
                    </div>
                    <button className="btn btn-primary">Envoyer</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
