import { Component } from "react";
import "./index.css";

class RegistrationForm extends Component {
  state = {
    nameInput: "",
    emailInput: "",
    serialNoInput: "",
    phoneNoInput: "",
    showError: false,
    isFormSubmitted: false,
    userCreated: false,
    result: "",
  };

  onChangeName = (event) => {
    const { target } = event;
    const { value } = target;
    this.setState({
      nameInput: value,
      isFormSubmitted: false,
    });
  };

  validateName = () => {
    const { nameInput } = this.state;
    return nameInput !== "";
  };

  renderNameField = () => {
    const { nameInput, showError } = this.state;
    const className = showError
      ? "name-input-field error-field"
      : "name-input-field";

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className={className}
          value={nameInput}
          placeholder="Enter Your Name"
          onChange={this.onChangeName}
        />
      </div>
    );
  };

  onChangeEmail = (event) => {
    const { target } = event;
    const { value } = target;
    this.setState({
      emailInput: value,
    });
  };

  validateEmail = () => {
    const { emailInput } = this.state;
    return emailInput !== "";
  };

  renderEmailField = () => {
    const { emailInput, showError } = this.state;
    const className = showError
      ? "name-input-field error-field"
      : "name-input-field";

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          id="email"
          className={className}
          value={emailInput}
          placeholder="Enter Your Email"
          onChange={this.onChangeEmail}
        />
      </div>
    );
  };

  onChangeSerial = (event) => {
    const { target } = event;
    const { value } = target;
    this.setState({
      serialNoInput: value,
    });
  };

  validateSerial = () => {
    const { serialNoInput } = this.state;
    return serialNoInput !== "";
  };

  renderSerialField = () => {
    const { serialNoInput, showError } = this.state;
    const className = showError
      ? "name-input-field error-field"
      : "name-input-field";

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="serial">
          Serial No.
        </label>
        <input
          type="text"
          id="serial"
          className={className}
          value={serialNoInput}
          placeholder="Enter Your Serial Number"
          onChange={this.onChangeSerial}
        />
      </div>
    );
  };

  onChangePhone = (event) => {
    const { target } = event;
    const { value } = target;
    this.setState({
      phoneNoInput: value,
    });
  };

  validatePhone = () => {
    const { phoneNoInput } = this.state;
    return phoneNoInput !== "";
  };

  renderPhoneField = () => {
    const { phoneNoInput, showError } = this.state;
    const className = showError
      ? "name-input-field error-field"
      : "name-input-field";

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="phone">
          Phone No.
        </label>
        <input
          type="text"
          id="phone"
          className={className}
          value={phoneNoInput}
          placeholder="Enter Your Phone Number"
          onChange={this.onChangePhone}
        />
      </div>
    );
  };

  onSubmitForm = async (event) => {
    event.preventDefault();

    const { nameInput, serialNoInput, phoneNoInput, emailInput } = this.state;
    const userDetails = {
      name: nameInput,
      email: emailInput,
      serial: serialNoInput,
      phone: phoneNoInput,
    };

    const url = "https://t-back3.onrender.com/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const data = await response.text();
    if (response.status === 400) {
      this.setState({ userCreated: false });
    } else {
      this.setState({ userCreated: true });
    }
    this.setState({
      isFormSubmitted: true,
      result: data,
      nameInput: "",
      emailInput: "",
      serialNoInput: "",
      phoneNoInput: "",
    });
  };

  renderRegistrationForm = () => {
    const { isFormSubmitted, result, userCreated } = this.state;
    const classnames = userCreated ? "succ" : "failure";
    return (
      <div>
        {isFormSubmitted ? <h1 className={classnames}>{result}</h1> : ""}

        <form className="form-container" onSubmit={this.onSubmitForm}>
          {this.renderNameField()}
          {this.renderEmailField()}
          {this.renderSerialField()}
          {this.renderPhoneField()}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    );
  };

  render() {
    return (
      <div className="registration-form-container">
        <h1 className="form-title">Form</h1>
        <div className="view-container">{this.renderRegistrationForm()}</div>
      </div>
    );
  }
}

export default RegistrationForm;
