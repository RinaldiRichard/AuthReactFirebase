import React from "react";
// 1 ref et state
import { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";

export default function SignUpModal() {
  // context 4 -> rajout signUp
  const { toggleModal, modalState, signUp } = useContext(UserContext);
  console.log(signUp);
  // 4
  const [validation, setValidation] = useState("");

  // 2 + rajout methode dans ref={} sur les inputs
  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  //5 rajout ref={formRef} dans le form
  const formRef = useRef();

  // 3 + rajout methode handleForm dans onSubmit du form
  //context 6 rajout async
  const handleForm = async (e) => {
    e.preventDefault();

    if (
      (inputs.current[1].value.length || inputs.current[2].value.length) < 6
    ) {
      setValidation("6 caractères minimum");
      //Pour sortir de la fonction
      return;
    } else if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Les mots de passe ne correspondent pas");
      return;
    }

    //context 5
    try {
      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      );
      formRef.current.reset();
      setValidation("")
      console.log(cred);
    } catch (err) {

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
                        type="email"
                        name="email"
                        required
                        className="form-control"
                        id="signUpEmail"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signUpPassword" className="form-label">
                        Mot de passe
                      </label>
                      <input
                        ref={addInputs}
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
