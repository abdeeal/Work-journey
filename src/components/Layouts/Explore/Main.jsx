import React, { useEffect, useState } from "react";
import { explorePage } from "../../../utils/data";
import Bookmark from "../../../assets/svgs/Bookmark";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Main = () => {
  const [bookmark, setBookmark] = useState([]);
  const [randomIdx, setRandomIdx] = useState(null);

  const location = useLocation();
  const project = location.pathname == "/project";
  const projectLength = explorePage.length;

  useEffect(() => {
    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    setRandomIdx(getRandom(0, projectLength - 6));
  }, [location]);

  const handleBookmark = (id) => {
    if (bookmark.includes(id)) {
      setBookmark(bookmark.filter((item) => item != id));
    } else {
      setBookmark([...bookmark, id]);
    }
  };

  return (
    <div
      className={` ${
        project ? "pt-[1.5rem]" : "pt-[5rem]"
      }  pb-[24px] relative w-full flex flex-wrap gap-[20px] justify-center `}
    >
      {!project &&
        explorePage.map((item, index) => (
          <div
            key={index}
            className="lg:w-[350px] md:w-[310px] lgi:w-[285px] w-[350px] h-[420px] md:h-[375px] lg:h-[425px] flex flex-col gap-[16px] group"
          >
            <Link
              to={`/project?design=${item.id + 2912}`}
              className="w-full aspect-square overflow-hidden relative rounded-xl"
            >
              <div className="absolute w-full h-full bg-gradient-to-t from-black/50 z-[1] hidden group-hover:inline" />
              <img
                key={index}
                src={item.src}
                alt="portfolio"
                className="w-full aspect-square object-center rounded-[12px] object-cover group-hover:scale-[1.1] transition-all ease-in-out duration-300"
                loading="lazy"
              />
            </Link>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <h2 className="text-[16px] leading-none font-bold">
                  {item.judul}
                </h2>
                <h6 className="text-[12px] leading-none font-semibold text-gray-400">
                  {item.creator}
                </h6>
              </div>
              <motion.div
                animate={{
                  backgroundColor: `${
                    bookmark.includes(index)
                      ? ["#3b82f6", "#ffffff"]
                      : ["#ffffff", "#3b82f6"]
                  }`,
                  transition: { duration: 0.45 },
                }}
                onClick={() => handleBookmark(index)}
                className={`py-[0.5rem] px-[0.75rem] shadow-sm rounded-full group text-white`}
              >
                <Bookmark active={bookmark.includes(index)} />
              </motion.div>
            </div>
          </div>
        ))}
      {project &&
        explorePage.slice(randomIdx, randomIdx + 6).map((item, index) => (
          <div
            key={index}
            className="lg:w-[350px] md:w-[310px] lgi:w-[285px] w-[350px] h-[420px] md:h-[375px] lg:h-[425px] flex flex-col gap-[16px] group"
          >
            <Link
              to={`/project?design=${item.id + 2912}`}
              className="w-full aspect-square overflow-hidden relative rounded-xl"
            >
              <div className="absolute w-full h-full bg-gradient-to-t from-black/50 z-[1] hidden group-hover:inline" />
              <img
                key={index}
                src={item.src}
                alt="portfolio"
                className="w-full aspect-square object-center rounded-[12px] object-cover group-hover:scale-[1.1] transition-all ease-in-out duration-300"
                loading="lazy"
              />
            </Link>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <h2 className="text-[16px] leading-none font-bold">
                  {item.judul}
                </h2>
                <h6 className="text-[12px] leading-none font-semibold text-gray-400">
                  {item.creator}
                </h6>
              </div>
              <motion.div
                animate={{
                  backgroundColor: `${
                    bookmark.includes(index)
                      ? ["#3b82f6", "#ffffff"]
                      : ["#ffffff", "#3b82f6"]
                  }`,
                  transition: { duration: 0.45 },
                }}
                onClick={() => handleBookmark(index)}
                className={`py-[0.5rem] px-[0.75rem] shadow-sm rounded-full group text-white`}
              >
                <Bookmark active={bookmark.includes(index)} />
              </motion.div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Main;
