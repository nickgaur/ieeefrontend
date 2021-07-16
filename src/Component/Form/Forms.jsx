import React, { useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useValidateUser from "../../sevices/useValidateUser";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

export default function Forms() {
  const [input, setInput] = useState("");
  // const history = useHistory();
  const notify = (text) =>
    toast.dark(`${text} `, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const Err = (err) => {
    toast.error(`${err} `, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const notify2 = (err) => {
    toast.info(`${err} `, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  var [msg, setMsg] = useState("");
  var [inp, setInp] = useState(null);
  const [is_Email, Error] = useValidateUser(input);

  const Search = (e) => {
    e.preventDefault();
    if (!validator.isEmail(input)) {
      setMsg("Please enter valid Email !! ");
      setInp(input);
      Err("Please enter valid Email !! ");
    }
    else if (validator.isEmail(input) && is_Email) {
      setMsg("Already Registered !! ");
      notify("Already Registered !! ");
    }
    else {
      if (Error !== null) {
        Err(Error);
      } else {
        setMsg("You are not registered !! ");
        notify2("You are not registered !! ");
        setInp(input);
      }
    }
  };

  return (
    <div className="validate_form" style={{ paddingTop: "55px" }}>
      <ScrollToTopOnMount />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Link to="/">
        <button type="button" className="close" aria-label="close">
          <ArrowBackIcon style={{ height: "30px", width: "40px" }} />
        </button>
      </Link>
      <h1
        align="center"
        style={{
          color: "grey",
          paddingTop: "50px",
          fontWeight: 300,
        }}
      >
        Entrant Form
      </h1>

      <form className="validate_form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onChangeCapture={(e) => setInp(null)}
          className="input"
          inp="email"
          placeholder="Enter Your Email"
          required
          autoComplete="true"
          style={{
            outlineColor: validator.isEmail(input) ? "rgb(47, 255, 47)" : "red",
          }}
        />
        <br />
        {input ? (
          <div className="not_register">
            <button className="search_btn" type="submit" onClick={Search}>
              Validate
            </button>
          </div>
        ) : (
          <div></div>
        )}

        <center>
          {msg === "Already Registered !! " ? (
            <div className="not_register">{msg} </div>
          ) : (
            <div></div>
          )}
        </center>
        <center>
          {msg && inp && msg !== "Already Registered !! " ? (
            <div className="not_register">
              {msg} <br />
              or <br />
              <Link to="/rform" className="Register_btn">
                Register here...
              </Link>
            </div>
          ) : (
            <div></div>
          )}
        </center>
      </form>
    </div>
  );
}
