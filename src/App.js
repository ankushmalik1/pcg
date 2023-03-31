import React, { useState } from "react";
import "./App.css";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.length == 0 || lastName.length == 0) {
      setError(true);
    }
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
        <div class="py-5 text-center">
          <h2>Checkout form</h2>
          <p class="lead">
            To serve the public effectively and make a positive difference, it’s
            essential to have the right technology solutions and support. At
            PCG, we provide the full spectrum of technology consulting services
            to help you meet your operational and program needs both today and
            in the future.
          </p>
        </div>

        <div class="row">
          {/* Billing Address section begins here */}
          <form>
            <section class="col-md-8 order-md-1">
              <h4 class="mb-3">Billing address</h4>
              <form class="needs-validation" onSubmit={handleSubmit}>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder=""
                      minLength="2"
                      maxLength="20"
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    {error ? <label>Valid First Name is required.</label> : ""}
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder=""
                      minLength="2"
                      maxLength="20"
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="username">Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">@</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      placeholder="Username"
                      required
                    />
                    <div class="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="email">
                    Email <span class="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div class="mb-3">
                  <label for="address">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
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
                    <small class="text-muted">
                      Full name as displayed on card
                    </small>
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
                      Credit card number is required
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
                <hr class="mb-4" />
                <button class="btn btn-primary btn-lg btn-block" type="button">
                  Continue to checkout
                </button>
              </form>
            </section>
          </form>
          {/* Your Cart - Order Summary section begins here */}
          <section class="col-md-4 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="mb-3">Your Cart - Order Summary</span>
              <span class="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Product name</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$12</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Second product</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$8</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Third item</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$5</span>
              </li>
              <li class="list-group-item d-flex justify-content-between bg-light">
                <div class="text-success">
                  <h6 class="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
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
