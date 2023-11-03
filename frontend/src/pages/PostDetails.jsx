import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comment from "../components/Comment";

const PostDetails = () => {
  return (
    <div className="px-8 md:px-[200px] mt-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black md:text-3xl">
          Title of the post
        </h1>
        <div className="flex items-center justify-center space-x-2">
          <p className="cursor-pointer">
            <BiEdit />
          </p>
          <p className="cursor-pointer">
            <MdDelete />
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2 md:mt-4">
        <p className="">@sahil</p>
        <div className="flex space-x-2">
          <p>02/11/2023</p>
          <p>21:44</p>
        </div>
      </div>
      <img
        src="https://i0.wp.com/laidbackgardener.blog/wp-content/uploads/2017/05/20170508a.jpg?resize=950%2C588&ssl=1"
        alt=""
        className="w-full h-[700px] object-cover mx-auto mt-8"
      />
      <p className="mx-auto mt-8 ">
        Sunflowers, with their vibrant yellow petals and towering stalks, are
        more than just a beautiful addition to the natural world; they hold a
        special place in the hearts of many and have come to symbolize various
        qualities, including optimism, resilience, and the power of the sun.
        These stunning flowers are celebrated for their ability to brighten up
        any landscape and bring a smile to our faces. Sunflowers, scientifically
        known as Helianthus annuus, are native to North and Central America and
        have been cultivated for thousands of years. They were domesticated by
        indigenous peoples long before the arrival of Europeans, with some of
        the earliest known domesticated sunflower seeds dating back over 3,000
        years. These golden blooms have been cherished not only for their
        aesthetic appeal but also for their practical uses, including a source
        of food and oil. One of the most captivating features of sunflowers is
        their remarkable ability to follow the sun's path across the sky. This
        behavior, known as heliotropism, is particularly evident in young
        sunflowers, which actively track the sun from east to west throughout
        the day. This adaptation is thought to maximize the amount of sunlight
        the plant receives for photosynthesis. As the sunflower matures and its
        seeds develop, the flower head usually faces east, which helps protect
        the seeds from the scorching afternoon sun. Beyond their ecological
        significance, sunflowers hold a special place in human culture and art.
        They have been featured in countless paintings, poems, and literature,
        often symbolizing positivity and the power of the sun to illuminate our
        lives. Vincent van Gogh's iconic "Sunflowers" series is a testament to
        the emotional and artistic impact of these flowers. Sunflowers have also
        played a role in various rituals and customs. In many cultures, they
        symbolize adoration, loyalty, and longevity. In some Native American
        traditions, sunflowers are associated with harvest celebrations and
        spiritual significance. Today, sunflowers continue to bring joy and
        optimism to people worldwide. They are popular choices for gardens, both
        as ornamental plants and for their edible seeds, which are enjoyed as
        snacks and used in cooking and baking. Sunflower oil, extracted from
        their seeds, is used for culinary purposes and in various industrial
        applications. In recent years, sunflowers have also become a symbol of
        hope and positivity. They are often used as an emblem for various
        awareness campaigns and organizations, bringing attention to issues such
        as mental health, childhood cancer, and environmental conservation. The
        sunflower's vibrant and uplifting presence serves as a reminder that
        even in challenging times, there is always room for growth, resilience,
        and optimism. In conclusion, sunflowers are not just beautiful flowers;
        they are a symbol of the enduring power of nature and the human spirit.
        Their radiant beauty and the way they follow the sun make them a source
        of inspiration and a reminder of the bright side of life. Whether they
        stand tall in a field or grace a vase on a table, sunflowers continue to
        bring joy and hope to all who encounter them.
      </p>
      <div className="flex items-center mt-8 space-x-4 font-semibold">
        <p>Categories: </p>
        <div className="flex justify-center items-center space-x-2">
          <div className="bg-gray-300 rounded-lg px-3 py-1">Nature</div>
          <div className="bg-gray-300 rounded-lg px-3 py-1">Flower</div>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h3 className="mt-6 mb-4 font-semibold">Comments</h3>
        {/* comment */}
        <Comment />
        <Comment />
      </div>
      {/* write a comment */}
      <div className="flex flex-col mt-4 md:flex-row">
        <input
          type="text"
          className="md:w-[90%] outline-none px-4 mt-4 md:mt-0"
          placeholder="Write a comment"
        />
        <button className="bg-black text-md text-white px-4 py-2 md:w-[15%] mt-4 md:mt-0">
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
