import React from "react";

export default function SignUpModal() {
  return (
    <>
      <div className="position-fixed top-0 vw-100 vh-100">
        <div className="w-100 h-100 bg-dark bg-opacity-75">
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sign Up</h5>
                  <button className="btn-close"></button>
                </div>

                <div className="modal-body">
                  <form className="sign-up-form">
                    <div className="mb-3">
                      <label htmlFor="signUpEmail"className="form-label">Adresse email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="form-control"
                        id="signUpEmail"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signUpPassword"className="form-label">Mot de passe</label>
                      <input
                        type="password"
                        name="password"
                        required
                        className="form-control"
                        id="signUpPassword"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="repeatPassword"className="form-label">Confirmation du mot de passe</label>
                      <input
                        type="password"
                        name="password"
                        required
                        className="form-control"
                        id="repeatPassword"
                      />
                      <p className="text-danger mt-1"></p>
                    </div>
                    <button className="btn btn-primary">Envoyer</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
