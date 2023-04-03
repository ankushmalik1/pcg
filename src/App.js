import React, { useState, useEffect } from "react";
import "./App.css";
import { connect, Connect } from "react-redux";
import { inputAction } from "./actions";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import validator from "./validator";
import Modal from "./Modal";

const App = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    address: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [appear, setAppear] = useState(false);
  const [firstErr, setFirstErr] = useState(false);
  const [lastErr, setLastErr] = useState(false);
  const [unameErr, setUnameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [addressErr, setAddressErr] = useState(false);
  const [details, setDetails] = useState(false);

  const firstHandleChange = (e) => {
    const { name, value } = e.target;

    if (value.length < 3 || value.length > 20) {
      setFirstErr(true);
    } else {
      setFirstErr(false);
    }
    setFormValues({ ...formValues, [name]: value });
    setIsSubmit(true);
  };

  const lastHandleChange = (e) => {
    const { name, value } = e.target;

    if (value.length < 3 || value.length > 20) {
      setLastErr(true);
    } else {
      setLastErr(false);
    }
    setFormValues({ ...formValues, [name]: value });
    setIsSubmit(true);
  };

  const unameHandleChange = (e) => {
    const { name, value } = e.target;

    if (value.length < 3 || value.length > 10) {
      setUnameErr(true);
    } else {
      setUnameErr(false);
    }
    setFormValues({ ...formValues, [name]: value });
    setIsSubmit(true);
  };

  const emailHandleChange = (e) => {
    const { name, value } = e.target;

    if (validator.isEmail(value)) {
      //when email formt is correct, run below logic
      setEmailErr(false);
    } else {
      //when email is incorrect, run below logic
      setEmailErr(true);
    }
    setFormValues({ ...formValues, [name]: value });
    setIsSubmit(true);
  };

  const addressHandleChange = (e) => {
    const { name, value } = e.target;

    if (value.length < 3) {
      setAddressErr(true);
    } else {
      setAddressErr(false);
    }
    setFormValues({ ...formValues, [name]: value });
    setIsSubmit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setAppear(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "Firstname is required";
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required";
    }
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.address) {
      errors.address = "Address is required";
    }
    return errors;
  };

  return (
    <div className="maincontainer">
      <header class="appheader d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 class="my-0 mr-md-auto font-weight-normal">
          Public Consulting Group (PCG)
        </h5>
        <nav class="my-2 my-md-0 mr-md-3">
          <a class="p-2 text-dark" href="#">
            Home
          </a>
          <a class="p-2 text-dark" href="#">
            Focus
          </a>
          <a class="p-2 text-dark" href="#">
            Insights
          </a>
          <a class="p-2 text-dark" href="#">
            Careers
          </a>
        </nav>
        <a class="btn btn-outline-primary" href="#">
          Sign up
        </a>
      </header>
      <div class="container">
        <section class="py-5 text-center">
          <h2>Checkout form</h2>
          <p class="lead">
            To serve the public effectively and make a positive difference, it’s
            essential to have the right technology solutions and support. At
            PCG, we provide the full spectrum of technology consulting services
            to help you meet your operational and program needs both today and
            in the future.
          </p>
        </section>

        {/* Billing Address section begins here */}
        {appear ? (
          ""
        ) : (
          <section class="col-md-8 order-md-1">
            <h4 class="mb-3">Billing address</h4>

            <form class="needs-validation" onSubmit={handleSubmit}>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">
                    First Name{<span style={{ color: "red" }}>*</span>}
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    class="form-control requiredd"
                    id="firstName"
                    placeholder=""
                    minLength="2"
                    maxLength="20"
                    value={formValues.firstname}
                    onChange={firstHandleChange}
                    required
                  />
                  {firstErr ? (
                    <span class="validation-error">
                      Please enter a valid value
                    </span>
                  ) : (
                    ""
                  )}
                  <p>{formErrors.firstname}</p>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">
                    Last Name{<span style={{ color: "red" }}>*</span>}
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    class="form-control"
                    id="lastName"
                    placeholder=""
                    minLength="2"
                    maxLength="20"
                    value={formValues.lastname}
                    onChange={lastHandleChange}
                    required
                  />
                  {lastErr ? (
                    <span class="validation-error">
                      Please enter a valid value
                    </span>
                  ) : (
                    ""
                  )}
                  <label>{formErrors.lastname}</label>
                </div>
              </div>

              <div class="mb-3">
                <label for="username">
                  Username{<span style={{ color: "red" }}>*</span>}
                </label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                  </div>
                  <input
                    type="text"
                    name="username"
                    class="form-control"
                    id="username"
                    placeholder="Username"
                    onChange={unameHandleChange}
                    required
                  />
                  {unameErr ? (
                    <span class="validation-error">
                      Please enter a valid value
                    </span>
                  ) : (
                    ""
                  )}
                  <label>{formErrors.username}</label>
                </div>
              </div>

              <div class="mb-3">
                <label for="email">
                  Email{<span style={{ color: "red" }}>*</span>}{" "}
                  <span class="text-muted"></span>
                </label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="email"
                  placeholder="you@example.com"
                  onChange={emailHandleChange}
                />
                {emailErr ? (
                  <span class="validation-error">
                    Please enter a valid value
                  </span>
                ) : (
                  ""
                )}
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div class="mb-3">
                <label for="address">
                  Address{<span style={{ color: "red" }}>*</span>}
                </label>
                <input
                  type="text"
                  name="address"
                  class="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  value={formValues.address}
                  onChange={addressHandleChange}
                  required
                />
                {addressErr ? (
                  <span class="validation-error">
                    Please enter a valid value
                  </span>
                ) : (
                  ""
                )}
                <label>{formErrors.address}</label>
              </div>

              <div class="mb-3">
                <label for="address2">
                  Address 2 <span class="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>

              <div class="row">
                <div class="col-md-5 mb-3">
                  <label for="country">Country</label>
                  <select
                    class="custom-select d-block w-100"
                    id="country"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="state">State</label>
                  <select
                    class="custom-select d-block w-100"
                    id="state"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>California</option>
                    <option>New York</option>
                    <option>Chicago</option>
                    <option>Los Angeles</option>
                    <option>Phoenix</option>
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="zip">Zip Code</label>
                  <input
                    type="text"
                    class="form-control"
                    id="zip"
                    placeholder=""
                    required
                  />

                  <div class="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <hr class="mb-4" />
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="same-address"
                />
                <label class="custom-control-label" for="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="save-info"
                />
                <label class="custom-control-label" for="save-info">
                  Save this information for next time
                </label>
              </div>
              <hr class="mb-4" />
            </form>
          </section>
        )}
        {/* Billing Address section ends here */}

        {/* Shipping Address section begins here */}
        {appear ? (
          ""
        ) : (
          <section class="col-md-8 order-md-1">
            <h4 class="mb-3">Shipping address</h4>

            <form class="needs-validation" onSubmit={handleSubmit}>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">
                    First Name{<span style={{ color: "red" }}>*</span>}
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    class="form-control requiredd"
                    id="firstName"
                    placeholder=""
                    minLength="2"
                    maxLength="20"
                    value={formValues.firstname}
                    onChange={firstHandleChange}
                    required
                  />
                  {firstErr ? (
                    <span class="validation-error">
                      Please enter a valid value
                    </span>
                  ) : (
                    ""
                  )}
                  <p>{formErrors.firstname}</p>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">
                    Last Name{<span style={{ color: "red" }}>*</span>}
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    class="form-control"
                    id="lastName"
                    placeholder=""
                    minLength="2"
                    maxLength="20"
                    value={formValues.lastname}
                    onChange={lastHandleChange}
                    required
                  />
                  {lastErr ? (
                    <span class="validation-error">
                      Please enter a valid value
                    </span>
                  ) : (
                    ""
                  )}
                  <label>{formErrors.lastname}</label>
                </div>
              </div>

              <div class="mb-3">
                <label for="username">
                  Username{<span style={{ color: "red" }}>*</span>}
                </label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                  </div>
                  <input
                    type="text"
                    name="username"
                    class="form-control"
                    id="username"
                    placeholder="Username"
                    onChange={unameHandleChange}
                    required
                  />
                  {unameErr ? (
                    <span class="validation-error">
                      Please enter a valid value
                    </span>
                  ) : (
                    ""
                  )}
                  <label>{formErrors.username}</label>
                </div>
              </div>

              <div class="mb-3">
                <label for="email">
                  Email{<span style={{ color: "red" }}>*</span>}{" "}
                  <span class="text-muted"></span>
                </label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="email"
                  placeholder="you@example.com"
                  onChange={emailHandleChange}
                />
                {emailErr ? (
                  <span class="validation-error">
                    Please enter a valid value
                  </span>
                ) : (
                  ""
                )}
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div class="mb-3">
                <label for="address">
                  Address{<span style={{ color: "red" }}>*</span>}
                </label>
                <input
                  type="text"
                  name="address"
                  class="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  value={formValues.address}
                  onChange={addressHandleChange}
                  required
                />
                {addressErr ? (
                  <span class="validation-error">
                    Please enter a valid value
                  </span>
                ) : (
                  ""
                )}
                <label>{formErrors.address}</label>
              </div>

              <div class="mb-3">
                <label for="address2">
                  Address 2 <span class="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>

              <div class="row">
                <div class="col-md-5 mb-3">
                  <label for="country">Country</label>
                  <select
                    class="custom-select d-block w-100"
                    id="country"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="state">State</label>
                  <select
                    class="custom-select d-block w-100"
                    id="state"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>California</option>
                    <option>New York</option>
                    <option>Chicago</option>
                    <option>Los Angeles</option>
                    <option>Phoenix</option>
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="zip">Zip Code</label>
                  <input
                    type="text"
                    class="form-control"
                    id="zip"
                    placeholder=""
                    required
                  />

                  <div class="invalid-feedback">Zip code required.</div>
                </div>
              </div>

              <hr class="mb-4" />
            </form>
          </section>
        )}
        {/* Shipping Address section ends here */}
        {/* Payment section begins here */}
        {appear ? (
          ""
        ) : (
          <section>
            <h4 class="mb-3">Payment</h4>

            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  checked
                  required
                />
                <label class="custom-control-label" for="credit">
                  Credit card
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  required
                />
                <label class="custom-control-label" for="debit">
                  Debit card
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  class="custom-control-input"
                  required
                />
                <label class="custom-control-label" for="paypal">
                  Paypal
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="cc-name">Name on card</label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-name"
                  placeholder=""
                  required
                />
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">Name on card is required</div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-number"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">
                  Credit Card number is required
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">Expiration Date</label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">Expiration date required</div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">Security Code</label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">Security code required</div>
              </div>
            </div>

            <button
              class="btn btn-primary btn-lg btn-block"
              type="submit"
              onClick={(e) => setAppear(true)}
            >
              Continue to Checkout
            </button>
          </section>
        )}
        {appear ? (
          <>
            <label class="custom-control-label" for="same-address">
              Kindly review your filled details as below :
              <div>
                <table border="2">
                  <tr>
                    <td class="my-0">
                      First Name:{" "}
                      {
                        <span class="form-submission">
                          {formValues.firstname}
                        </span>
                      }
                    </td>
                  </tr>
                  <tr>
                    <td class="my-0">
                      Last Name:{" "}
                      {
                        <span class="form-submission">
                          {formValues.lastname}
                        </span>
                      }
                    </td>
                  </tr>
                  <tr>
                    <td class="my-0">
                      User Name:{" "}
                      {
                        <span class="form-submission">
                          {formValues.username}
                        </span>
                      }
                    </td>
                  </tr>
                  <tr>
                    <td class="my-0">
                      Email:{" "}
                      {<span class="form-submission">{formValues.email}</span>}
                    </td>
                  </tr>
                  <tr>
                    <td class="my-0">
                      Address:{" "}
                      {
                        <span class="form-submission">
                          {formValues.address}
                        </span>
                      }
                    </td>
                  </tr>
                </table>
                <button
                  onClick={(e) => setDetails(true)}
                  class="btn btn-primary btn-lg btn-block"
                >
                  Confirm Details
                </button>
              </div>
            </label>
          </>
        ) : (
          ""
        )}

        {details ? (
          <p class="form-submission">&#9989; Form submitted successfully</p>
        ) : (
          ""
        )}

        <hr class="mb-4" />
        {/* Your Cart - Order Summary section begins here */}
        <section class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="mb-3">Your Cart - Order Summary</span>
            <span class="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Educational Product</h6>
                <small class="text-muted">
                  EDPlan is a suite of tools and services from PCG
                </small>
              </div>
              <span class="text-muted">$12</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Health Product</h6>
                <small class="text-muted">
                  PCG’s proprietary web-based cost allocation tool
                </small>
              </div>
              <span class="text-muted">$8</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Human Services Product</h6>
                <small class="text-muted">
                  PCG’s proprietary web-based cost allocation tool, AlloCAP™
                </small>
              </div>
              <span class="text-muted">$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Promo code</h6>
                <small>AB13-RFVI-E7OD-L2QZ</small>
              </div>
              <span class="text-success">-$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>

          <form class="card p-2">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Promo code"
              />
              <div class="input-group-append">
                <button type="button" class="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; 2023 publicconsultinggroup.com</p>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">Privacy</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Support</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default App;

// function mapStateToProps =(state)=>{
//   return{input: state}
// }

// function mapDispatchToProps =(dispatch)=>{
//   return {inputChangedFx  :(dispatch(inputAction(name,text)))}
// }
// export connect(mapStateToProps,mapDispatchToProps)(FormComponent);
