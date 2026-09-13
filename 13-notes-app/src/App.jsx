import React from "react";

const App = () => {

  const submitHandler = (e) =>{
    e.preventDefault()

  }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form onSubmit={(e) =>{
        submitHandler(e)
      }} className="flex lg:w-1/2 gap-5 flex-col items-start p-10">    
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

      <div className=" lg:w-1/2 bg-gray-900 p-10">
        <h1 className="text-2xl font-bold">Your Notes</h1>
        
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          <div className="h-50 w-40 rounded-2xl bg-white"></div>
          <div className="h-50 w-40 rounded-2xl bg-white"></div>
          <div className="h-50 w-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
