import React from "react";

const ContactForm = () => {
  return (
    <aside className="  w-full shadow-xl rounded-xl">
      <div className=" sticky flex flex-col gap-y-4 p-4 top-5">
        <p className=" text-center font-semibold text-xl">Contact the seller</p>
        <textarea
          name=""
          id=""
          rows={4}
          placeholder="I'm interested..."
          className="py-2 px-4 border-2 rounded-md"
        ></textarea>
        <input
          type="text"
          placeholder="Name"
          className="py-2 px-4 border-2 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          className="py-2 px-4 border-2 rounded-md"
        />
        <input
          type="tel"
          placeholder="Phone number"
          className="py-2 px-4 border-2 rounded-md"
        />
        <button className=" bg-black text-white px-4 py-2 rounded-md">
          Send message
        </button>
      </div>
    </aside>
  );
};

export default ContactForm;
