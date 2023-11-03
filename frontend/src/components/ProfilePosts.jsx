import React from "react";

const ProfilePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left div */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://i0.wp.com/laidbackgardener.blog/wp-content/uploads/2017/05/20170508a.jpg?resize=950%2C588&ssl=1"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      {/* right div */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          Title of the post
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p className="">@sahil</p>
          <div className="flex space-x-2">
            <p>02/11/2023</p>
            <p>21:44</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          repellat alias placeat amet soluta recusandae eum possimus ullam, vero
          deserunt libero velit animi accusamus similique perferendis
          dignissimos vel earum. Nobis.
        </p>
      </div>
    </div>
  );
};

export default ProfilePosts;
