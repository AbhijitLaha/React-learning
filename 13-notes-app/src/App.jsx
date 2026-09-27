import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task]

    copyTask.push({title, details})

    setTask(copyTask)
    console.log(task);
    
    
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
          placeholder="Write details here"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />

        <button className="px-5 py-2 active:scale-94 w-full font-medium bg-white text-black  rounded">
          Add Note
        </button>
      </form>

      <div className=" lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Your Notes</h1>

        <div className="flex flex-wrap items-start content-start justify-start gap-5 mt-5 h-full overflow-auto">
          {task.map(function(elem,idx){
            
            return <div  key={idx} className=" relative h-50 w-40 bg-cover rounded-2xl text-black py-8 px-6 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]">
              <h2><X /></h2>
              <h3 className="leading-tight text-xl font-bold"> {elem.title}</h3>
              <p className="mt-4 leading-tight font-medium text-gray-500">{elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
