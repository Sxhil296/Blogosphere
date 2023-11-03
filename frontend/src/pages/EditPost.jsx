import React from 'react'
import { useState } from "react";
import { ImCross } from "react-icons/im";

const EditPost = () => {
    const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);

  const addCategory = () => {
    let updatedCats = [...cats];
    updatedCats.push(cat);
    setCat("");
    setCats(updatedCats);
  };

  const deleteCategory = (i) => {
    let updatedCats = [...cats];
    updatedCats.splice(i);
    setCats(updatedCats);
  };
  return (
    <div className="px-6 md:px-[200px] mt-8">
    <h1 className="font-bold md:text-2xl text-xl">Update the post</h1>
    <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
      <input
        type="text"
        placeholder="Enter post title"
        className="px-4 py-2 outline-none"
      />
      <input type="file" className="px-4" />
      <div className="flex flex-col">
        <div className="flex items-center space-x-4 md:space-x-8">
          <input
            type="text"
            className="px-4 py-2 outline-none"
            placeholder="Enter post category"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
          />
          <div
            className="bg-black text-white px-4 py-2 cursor-pointer font-semibold"
            onClick={addCategory}
          >
            Add
          </div>
        </div>
        {/* categories */}
        <div className="flex px-4 mt-3">
          {cats?.map((c, i) => (
            <div
              key={i}
              className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md"
            >
              <p>{c}</p>
              <p
                className="text-white bg-black rounded-full cursor-pointer p-1 text-sm"
                onClick={() => deleteCategory(i)}
              >
                <ImCross />
              </p>
            </div>
          ))}
        </div>
      </div>
      <textarea
        cols="30"
        rows="15"
        placeholder="Enter post description"
        className="px-4 py-2 outline-none"
      />
      <button className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg">
        Update
      </button>
    </form>
  </div>
  )
}

export default EditPost