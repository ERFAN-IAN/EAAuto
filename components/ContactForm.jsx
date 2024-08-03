const ContactForm = () => {
  return (
    <aside className="  w-full shadow-xl rounded-xl dark:bg-transparent relative">
      <div className="absolute inset-0 opacity-50 bg-white rounded-xl flex justify-center items-center z-[10]"></div>
      <div className="absolute inset-0 rounded-xl flex justify-center items-center z-[20] text-white text-2xl font-semibold">
        <p className=" bg-red-400 rounded-lg p-4">Under development</p>
      </div>
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
