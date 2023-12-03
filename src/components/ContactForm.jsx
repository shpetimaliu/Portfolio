"use client";
import emailjs from "@emailjs/browser";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import Button from "./Button";
import { FadeIn } from "./FadeIn";
import TextInput from "./TextInput";

function ContactForm() {
  const notify = () => {
    toast.success(
      "Thank you for reaching out! We've received your message and will be in touch shortly",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
  };

  const formContactMe = useRef();
  const captcha = useRef();
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleCaptchaVerify = () => {
    setIsCaptchaValid(true);
  };

  const handleCaptchaExpire = () => {
    setIsCaptchaValid(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID2,
        formContactMe.current,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(() => {
        notify();
      })
      .catch((err) => console.log("Have an error in:", err.text));
  };

  return (
    <FadeIn>
      <form ref={formContactMe} onSubmit={sendEmail}>
        <h2 className="font-bold text-base font-display text-neutral-950">
          Contact Me
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
        </div>
        <div className="flex font-montserrat justify-start">
          <HCaptcha
            ref={captcha}
            sitekey={process.env.NEXT_PUBLIC_CAPTCHA_ID}
            onVerify={handleCaptchaVerify}
            onExpire={handleCaptchaExpire}
          />
        </div>
        <Button disabled={!isCaptchaValid} type="submit" className="mt-10">
          Let’s work together
        </Button>
        <ToastContainer position="bottom-right" newestOnTop />
      </form>
    </FadeIn>
  );
}

export default ContactForm;
