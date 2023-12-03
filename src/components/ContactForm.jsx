"use client";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Button from "./Button";
import { FadeIn } from "./FadeIn";
import TextInput from "./TextInput";

function ContactForm() {
  const formContactMe = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID2,
        formContactMe.current,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then((result) => console.log(result.text))
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
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
      </form>
    </FadeIn>
  );
}

export default ContactForm;
