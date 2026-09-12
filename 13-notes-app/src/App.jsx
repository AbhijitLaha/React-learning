import React from "react";

const App = () => {

  const submitHandler = (e) =>{
    e.preventDefault()

  }

  return (
    <div className="h-screen bg-black text-white">
      <form onSubmit={(e) =>{
        submitHandler(e)
      }} className="flex justify-between gap-5 flex-col items-start p-10">    
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5 py-2 font-medium w-full border-2 rounded"
          />
          <textarea
            type="text"
            className="px-5 py-2 h-40 font-medium flex items-start flex-row w-full border-2 rounded"
            placeholder="Write details"
          />
          <button className="px-5 py-2 w-full font-medium bg-white text-black  rounded">
            Add Note
          </button>
      </form>
    </div>
  );
};

export default App;
