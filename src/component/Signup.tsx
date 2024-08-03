import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import facebook from "../images/facebook.png";
import google from "../images/google.png";
import apple from "../images/apple.png";
import mail from "../images/mail.png";
import mobile from "../images/mobile.png";
import close from "../images/close.png";
import { auth, googleProvider } from "../firebase/Setup";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";

interface signProps {
  setSign?: any;
}
const Signup = (props: signProps) => {
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState("");
  const [user, setuser] = useState<any>(null);
  const [otp, setOtp] = useState("");

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const sendOtp = async () => {
    try {
    } catch (err) {
      console.error(err);
    }
    const repcaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
    const confirmation = await signInWithPhoneNumber(auth, phone, repcaptcha);
    setuser(confirmation);
  };

  const verifyOtp = () => {
    try {
      user.confirm(otp);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-stone-800 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="p-2 pd-8 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="p-4 mt-2 text-center sm:ml-4 sm:mt-0 sm:text-left flex">
                <img src={close} className="w-6 h-6 ml-3" />
                <h1
                  onClick={() => props.setSign(false)}
                  className="cursor-pointer"
                >
                  Close
                </h1>
                <h3
                  className="ml-36 text-center font-bold leading-6 text-gray-900"
                  id="modal-title"
                >
                  Log in or Sign up
                </h3>
              </div>
              <hr className="mt-4" />
              <h1 className="mt-5 mb-1 font-semibold text-2xl ml-5">
                {" "}
                Welcome to Airbnb{" "}
              </h1>
              {email ? (
                <input
                  type="text"
                  className=" ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-12 mt-4 block w-11/12 p-2.5 outline-none"
                  placeholder="Email"
                  required
                />
              ) : (
                <PhoneInput
                  value={phone}
                  onChange={(phone) => setPhone("+" + phone)}
                  placeholder="Phone Number"
                  inputStyle={{
                    width: "453px",
                    height: "50px",
                    fontSize: "17px",
                  }}
                  containerStyle={{ marginTop: "10px", marginLeft: "20px" }}
                />
              )}
              {email && (
                <input
                  type="password"
                  className=" ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-12 mt-4 block w-11/12 p-2.5 outline-none"
                  placeholder="Password"
                  required
                />
              )}
              <div id="recaptcha" className="mt-3 ml-5"></div>
              {phone && (
                <button
                  onClick={sendOtp}
                  className="cursor-pointer ml-5 bg-rose-400 hover:bg-rose-800 text-white font-bold py-2 px-4 mt-3 rounded w-11/12"
                >
                  Send OTP
                </button>
              )}
              {user && (
                <input
                  type="text"
                  onChange={(e) => setOtp(e.target.value)}
                  className=" ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-12 mt-4 block w-11/12 p-2.5 outline-none"
                  placeholder="Email"
                  required
                />
              )}
              {otp && (
                <button
                  onClick={verifyOtp}
                  className="cursor-pointer ml-5 bg-rose-400 hover:bg-rose-800 text-white font-bold py-2 px-4 mt-3 rounded w-11/12"
                >
                  Verify OTP
                </button>
              )}
              <h1 className="text-xs ml-5 mt-1">
                We’ll call or text you to confirm your number. Standard message
                and data rates apply. Privacy Policy
              </h1>
              <button className="cursor-pointer ml-5 bg-rose-400 hover:bg-rose-800 text-white font-bold py-2 px-4 mt-3 rounded w-11/12">
                {email ? "Agree & Continue" : "Continue"}
              </button>
              <h1 className="text-center mt-2 mb-1">or</h1>
              <div className="cursor-pointer ml-5 w-11/12 p-3 hover:bg-slate-200 flex items-center border border-spacing-1 rounded-xl border-black">
                <img src={facebook} className="w-6 h-6 ml-3" />
                <h1 className="ml-24">Continue with Facebook</h1>
              </div>
              <div
                onClick={googleSignIn}
                className="cursor-pointer ml-5 w-11/12 p-3 mt-4 hover:bg-slate-200 flex items-center border border-spacing-1 rounded-xl border-black"
              >
                <img src={google} className="w-6 h-6 ml-3" />
                <h1 className="ml-28">Continue with Google</h1>
              </div>
              <div className="cursor-pointer ml-5 w-11/12 p-3 mt-4 hover:bg-slate-200 flex items-center border border-spacing-1 rounded-xl border-black">
                <img src={apple} className="w-6 h-6 ml-3" />
                <h1 className="ml-28">Continue with Apple</h1>
              </div>
              {!email ? (
                <div
                  onClick={() => setEmail(true)}
                  className="cursor-pointer ml-5 w-11/12 p-3 mt-4 mb-4 hover:bg-slate-200 flex items-center border border-spacing-1 rounded-xl border-black"
                >
                  <img src={mail} className="w-6 h-6 ml-3" />
                  <h1 className="ml-28">Continue with Email</h1>
                </div>
              ) : (
                <div
                  onClick={() => setEmail(false)}
                  className="cursor-pointer ml-5 w-11/12 p-3 mt-4 mb-4 hover:bg-slate-200 flex items-center border border-spacing-1 rounded-xl border-black"
                >
                  <img src={mobile} className="w-6 h-6 ml-3" />
                  <h1 className="ml-28">Continue with mobile</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
