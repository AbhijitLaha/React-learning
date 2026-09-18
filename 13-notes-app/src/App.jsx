import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, details);

    setTitle("");
    setDetails('');
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 gap-5 flex-col items-start p-10">

        <h1 className="text-4xl font-bold">Add Notes</h1>

        {/*First Input For Heading*/}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 font-medium w-full border-2 rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/*Detailed input*/}
        <textarea
          type="text"
          className="px-5 py-2 h-40 font-medium flex items-start flex-row w-full border-2 rounded"
          placeholder="Write details"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />

        <button className="px-5 py-2 w-full font-medium bg-white text-black  rounded">
          Add Note
        </button>
      </form>

      <div className=" lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Your Notes</h1>

        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          <div className="h-50 w-40 rounded-2xl bg-white"></div>
          <div className="h-50 w-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
