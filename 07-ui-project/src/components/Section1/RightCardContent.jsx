import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col     justify-between">
        <h2 className="bg-white text-2xl font-semibold h-12 w-12 flex justify-center items-center rounded-full ">{props.id+1}</h2>
        <div>
          <p className="text-lg leading-relaxed text-white mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            exercitationem officiis, nemo non rerum modi.
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full">
              {props.tag}
            </button>
            <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
    </div>
  )
}

export default RightCardContent