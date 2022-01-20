import React from "react";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router";

export default function SignUpModal() {
  const { toggleModal, modalState, signIn } = useContext(UserContext);

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

    try {
      const cred = await signIn(
        inputs.current[0].value,
        inputs.current[1].value
      );

      formRef.current.reset();
      setValidation("");
      console.log(cred);
      navigate("/private/private-home");
      toggleModal("close");
    } catch (err) {
      console.dir(err);
      setValidation("Oups, l'email et/ou le mot de passe est incorrect !");
    }
  };

  return (
    <>
      {modalState.signInModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div className="w-100 h-100 bg-dark bg-opacity-75"></div>
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">CONNEXION</h5>
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
                      <label htmlFor="signInEmail" className="form-label">
                        Adresse email
                      </label>
                      <input
                        ref={addInputs}
                        onChange={resetText}
                        type="email"
                        name="email"
                        required
                        className="form-control"
                        id="signInEmail"
                      />
                      <p className="text-danger mt-1">{validMail}</p>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signInPassword" className="form-label">
                        Mot de passe
                      </label>
                      <input
                        ref={addInputs}
                        onChange={resetText}
                        type="password"
                        name="password"
                        required
                        className="form-control"
                        id="signInPassword"
                      />
                    </div>
                    <p className="text-danger mt-1">{validation}</p>
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
