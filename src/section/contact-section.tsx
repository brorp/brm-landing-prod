"use client";

import ArrowRightIcon from "@/assets/icons/arrow-right";
import SectionPrimary from "@/components/section/section-primary";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Contact from "@/assets/images/section-bg-ten.png";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.brm-agro.com/v1/w/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // const response = { ok: true };
      if (response.ok) {
        // Handle successful response
        console.log("Message sent successfully");
        setFormData({ name: "", email: "", subject: "", body: "" });
        toast("Message sent successfully!");
      } else {
        // Handle error response
        console.error("Failed to send message");
        toast("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast("An error occurred. Please try again later.");
    }
  };

  return (
    <SectionPrimary
      classNameChild="!p-0 flex flex-col md:flex-row md:h-[790px] !w-full"
      className=""
    >
      <div className="relative h-full w-full lg:w-5/12">
        <Image alt="" src={Contact} className="h-full w-full object-cover" />
      </div>
      <div className="h-full w-full bg-brand-blue_four px-6 py-20 lg:w-7/12 lg:px-12 xl:!pr-[7.5rem]">
        <h1 className="abaya-48 mb-12 text-brand-blue">Get in Touch</h1>
        <form className="space-y-6 font-noto" onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="h-16 w-full border-b border-brand-blue bg-transparent px-4 placeholder:text-brand-blue focus:outline-none"
            placeholder="Name*"
            required
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="h-16 w-full border-b border-brand-blue bg-transparent px-4 placeholder:text-brand-blue focus:outline-none"
            placeholder="Your E-mail*"
            required
          />
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="h-16 w-full border-b border-brand-blue bg-transparent px-4 placeholder:text-brand-blue focus:outline-none"
            placeholder="Subject*"
            required
          />
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            rows={5}
            className="w-full border-b border-brand-blue bg-transparent px-4 placeholder:text-brand-blue focus:outline-none"
            placeholder="Your message here..."
            required
          ></textarea>
          <Button
            type="submit"
            className="mt-12 space-x-4 bg-brand-blue text-white"
          >
            <ArrowRightIcon /> <span className="noto-16">SEND MESSAGE</span>
          </Button>
        </form>
      </div>
    </SectionPrimary>
  );
}
