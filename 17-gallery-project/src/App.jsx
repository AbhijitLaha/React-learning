import React, { useEffect } from "react";
import Card from "./components/Card";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`);
    setUserData(response.data);
  };

  useEffect(function () {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-300 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">Loading...</h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      <div className="flex h-[80%] flex-wrap gap-5  p-3">
        {printUserData}
      </div>

      <div className="flex justify-center items-center gap-4 p-4">
        <button 
          className="bg-amber-500 text-black cursor-pointer active:scale-95 rounded px-5 py-2 "
          onClick={() =>{
            if(index>1)
            setIndex(index-1)
            
            setUserData([])
          }}
        >
          Prev
        </button>
        <button 
          className="bg-amber-500 text-black cursor-pointer active:scale-95 rounded px-5 py-2 "
          onClick={()=>{
            setUserData([])
            setIndex(index+1)            
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
