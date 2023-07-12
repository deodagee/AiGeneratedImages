import React from "react";
import { motion } from "framer-motion";
import { IoMdSearch, IoMdPerson } from "react-icons/io";
import Head from "next/head";
import styles from "../styles/header.module.css";


function Header() {
  const menus = [
    { label: "Home", link: "/" },
    { label: "Research", link: "https://openai.com/research" },
    { label: "The New Bing", link: "https://www.bing.com/new?form=MY028Z&OCID=MY028Z" },
    { label: "Developers", link: "https://github.com/deodagee/Image-Slider" },
    { label: "DALL-E2", link: "https://openai.com/dall-e-2" },
    { label: "My Contact", link: "https://astrumstellar.com/" },
  ];

  const [active, setActive] = React.useState(0);
  const [showSearch, setShowSearch] = React.useState(false);

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch);
  };



  return (
    <div className="solute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10">
      <Head>
        <title>Ai Generated Art - Dashboard</title>
      </Head>
      <div className="flex items-center gap-2 font-medium tracking-[4px]">
        <img className={styles.astrumlogo} alt="white_logo" src="astrumlogowhite.png" />
        <span className={styles.made}>Made By</span>{" "}
        <span className={styles.madeby}>Astrum Stellar</span>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-[11px] md:gap-10">
        {menus.map((menu, index) => {
          return (
            <motion.li
              layout
              key={index}
              className={`${
                active === index && "border-b-2 border-b-yellow-500"
              } inline-block cursor-pointer border-b-yellow-500 transition duration-300 ease-in-out hover:border-b-2 hover:text-white`}
            >
              <a href={menu.link}>{menu.label}</a>
            </motion.li>
          );
        })}
        <div className="flex items-center gap-6">
          <IoMdPerson className="text-lg" />
   
          {showSearch && (
        <form>
          <input
            type="text"
            placeholder="Search"
            className="text-lg border rounded-md px-2 py-1"
          />
        </form>
      )}

          <motion.div
            className="text-lg"
            onClick={handleSearchIconClick}
            style={{ cursor: "pointer" }}
          >
            <IoMdSearch />
          </motion.div>
        </div>
      </div>

    </div>
  );
}

export default Header;
