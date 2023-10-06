"use client";

import Link from "next/link";
import Image from "next/image";
import GithubIcon from "public/github-icon.svg";
import LinkedinIcon from "public/linkedin-icon.svg";
import { FormEvent, useRef, useState } from "react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const subjectInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInputRef.current!.value,
        subject: subjectInputRef.current!.value,
        message: messageInputRef.current!.value,
      }),
    });
    const resData = await response.json();

    if (response.status === 200) {
      emailInputRef.current!.value = "";
      subjectInputRef.current!.value = "";
      messageInputRef.current!.value = "";
      setEmailSubmitted(true);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div
        className="
      bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
      from-purple-900 to-transparent blur-lg
      rounded-full h-80 w-80 z-0 absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to your!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/MustafaGuer" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mustafa-guer/"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium mb-2"
            >
              Your email
            </label>
            <input
              name={"email"}
              type="email"
              id="email"
              ref={emailInputRef}
              required
              className="bg-[#18191E] border border-[#33343F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="john@google.com"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="text-white block text-sm font-medium mb-2"
            >
              Subject
            </label>
            <input
              name={"subject"}
              type="text"
              id="subject"
              ref={subjectInputRef}
              required
              className="bg-[#18191E] border border-[#33343F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-white block text-sm font-medium mb-2"
            >
              Your message
            </label>
            <textarea
              name={"message"}
              id="message"
              ref={messageInputRef}
              required
              className="bg-[#18191E] border border-[#33343F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium
          py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
