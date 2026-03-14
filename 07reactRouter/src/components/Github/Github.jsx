import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetch("https://api.github.com/users/SMhassan-code")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

  return (
    <div className="bg-gray-700 text-3xl text-white m-4 p-4 text-center">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Github picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/SMhassan-code")
    return response.json()
}