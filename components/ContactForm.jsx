const ContactForm = () => {
  return (
    <aside className="  w-full shadow-xl rounded-xl dark:bg-transparent">
      <form className=" sticky flex flex-col gap-y-4 p-4 top-5 rounded-xl">
        <p className=" text-center font-semibold text-xl">Contact the seller</p>
        <textarea
          name=""
          id=""
          rows={4}
          placeholder="I'm interested..."
          className="py-2 px-4 border-2 rounded-md border-teal-600 outline-none"
        ></textarea>
        <input
          type="text"
          placeholder="Name"
          className="py-2 px-4 border-2 rounded-md border-teal-600 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="py-2 px-4 border-2 rounded-md border-teal-600 outline-none"
        />
        <input
          type="tel"
          placeholder="Phone number"
          className="py-2 px-4 border-2 rounded-md border-teal-600 outline-none"
        />
        <button className=" bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-md">
          Send message
        </button>
      </form>
    </aside>
  );
};

export default ContactForm;
