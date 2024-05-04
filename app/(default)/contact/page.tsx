// Contact.js

import Head from 'next/head';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us for any inquiries or questions." />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-8">Have a question or need assistance? Reach out to us!</p>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold">Name</label>
            <input type="text" id="name" name="name" className="border border-gray-300 px-4 py-2 w-full rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">Email</label>
            <input type="email" id="email" name="email" className="border border-gray-300 px-4 py-2 w-full rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold">Message</label>
            <textarea id="message" name="message"rows={4} className="border border-gray-300 px-4 py-2 w-full rounded-md"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
