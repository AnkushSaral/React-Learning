import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // This method is good but there is better way using loader and useloaderdata
  // const [name, setName] = useState(null)
  // const [imageURL, setImageURL] = useState("")

  // useEffect( () => {
  //     fetch("https://api.github.com/users/AnkushSaral")
  //     .then((res) => res.json())
  //     .then((data) =>  {
  //         setName(data.name);
  //         setImageURL(data.avatar_url)

  //     } )
  //  })

  const data = useLoaderData();

  return (
    <div className="bg-gray-600 text-white text-3xl text-center p-4">
      <h3>Github of : {data.name}</h3>
      <h3>Followers : {data.followers}</h3>
      <div className="flex justify-center p-4 mt-2">
        <img
          className="w-50 border border-gray-800"
          src={data.avatar_url}
          alt="Profile Pic"
          srcset=""
        />
      </div>
    </div>
  );
}

export default Github;

export const gitDataFetch = async () => {
  const res = await fetch("https://api.github.com/users/AnkushSaral");
  return await res.json();
};
