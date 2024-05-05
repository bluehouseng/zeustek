// Contact.js
"use client";
import https from "@/services/https";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import Head from "next/head";
import { FormEvent, useState } from "react";

export interface IContact {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  subject: string;
  message: string;
}
const Contact = () => {
  const [contactData, setContactData] = useState<IContact>({
    country: "",
    email: "",
    firstName: "",
    lastName: "",
    message: "",
    subject: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = https.httpContactPage(contactData);
      console.log(response);
    } catch (error) {
      console.log('error',error)
    }
  };
  return (
    <section className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Have a Question about Tare Foundation? Contact Us Directly
            </h1>
          </div>

          {/* Contact form */}
          <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="block text-gray-800 text-sm font-medium mb-1"
                  htmlFor="first-name"
                >
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="first-name"
                  type="text"
                  className="form-input w-full text-gray-800"
                  placeholder="Enter your first name"
                  required
                  onChange={(e) =>
                    setContactData({
                      ...contactData,
                      firstName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-gray-800 text-sm font-medium mb-1"
                  htmlFor="last-name"
                >
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="last-name"
                  type="text"
                  className="form-input w-full text-gray-800"
                  placeholder="Enter your last name"
                  required
                  onChange={(e) =>
                    setContactData({ ...contactData, lastName: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-800 text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full text-gray-800"
                  placeholder="Enter your email address"
                  required
                  onChange={(e) =>
                    setContactData({ ...contactData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-800 text-sm font-medium mb-1"
                  htmlFor="subject"
                >
                  Subject <span className="text-red-600">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  className="form-input w-full text-gray-800"
                  placeholder="How can we help you?"
                  required
                  onChange={(e) =>
                    setContactData({ ...contactData, subject: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-800 text-sm font-medium mb-1"
                  htmlFor="country"
                >
                  Country
                </label>
                <select
                  id="country"
                  className="form-select w-full text-gray-500"
                  onChange={(e) =>
                    setContactData({ ...contactData, country: e.target.value })
                  }
                >
                  <option>Nigeria</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label
                  className="block text-gray-800 text-sm font-medium mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-textarea w-full text-gray-800"
                  placeholder="Write your message"
                  onChange={(e) =>
                    setContactData({ ...contactData, message: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-4">
              <div className="w-full px-3">
                <button
                  className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-4">
              By clicking "send" you consent to allow Tare Foundation to store
              and process the personal information submitted above and agree to
              our{" "}
              <a className="underline" href="#0">
                terms and conditions
              </a>{" "}
              as well as our{" "}
              <a className="underline" href="#0">
                Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
