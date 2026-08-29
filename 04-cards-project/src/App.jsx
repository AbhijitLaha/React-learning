import React from "react";

import Card from "./components/Card";

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://banner2.cleanpng.com/20180823/af/kisspng-google-logo-portable-network-graphics-image-google-g-1713950449474.webp",
    name: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    name: "Microsoft",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/40/2/amazon-icon-logo-png_seeklogo-405254.png",
    name: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnYlTHzIzf76dQP44xDtvT3fRI3c9C7B5DFVs8TgKXafimXRbehr-5pmE&s=10",
    name: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://icon2.cleanpng.com/20180630/pbj/kisspng-apple-electric-car-project-logo-business-5b37ac7e82e964.9223502915303752945362.jpg",
    name: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    name: "Netflix",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Nvidia_Logo.svg/3840px-Nvidia_Logo.svg.png",
    name: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HpwNmXWFlzj9jc93MKv78jSOvRtxfe8vKTRdsumXxQ&s=10",
    name: "Adobe",
    datePosted: "3 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://images.vexels.com/media/users/3/140583/isolated/preview/905dd25934b7a05516389863f7cb9417-ibm-logo.png",
    name: "IBM",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$44/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzrTjqz8D5TaDsOdcZvhyKYIMmoCy4mexm-Y94w5yWA&s=10",
    name: "Oracle",
    datePosted: "10 weeks ago",
    post: "Database Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$52/hour",
    location: "Hyderabad, India"
  }
];

console.log(jobOpenings);

  return (
    <div className="parent">

      {jobOpenings.map(function(elem, idx){

        return <div key = {idx}>
          <Card company= {elem.name} datePosted= {elem.datePosted} post= {elem.post} pay= {elem.pay} brandLogo = {elem.brandLogo} tag1 = {elem.tag1} tag2 = {elem.tag2}/>
        </div>
      })}
    </div>
  );
};

export default App;
