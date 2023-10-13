import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const renderBadge = () => (
    <div className="badge-cmp app__flex">
      <span>👋</span>
      <div style={{ marginLeft: 20 }}>
        <p className="p-text">Hello, I'm</p>
        <h1 className="head-text">Ammar</h1>
      </div>
    </div>
  );

  const renderTags = () => (
    <div className="tag-cmp app__flex">
      <p className="p-text">Software Engineer</p>
      <p className="p-text">DevOps Engineer</p>
    </div>
  );

  const renderHeaderInfo = () => (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">{renderBadge()}{renderTags()}</div>
    </motion.div>
  );

  const renderProfileCircle = () => (
    <motion.img
      whileInView={{ scale: [0, 1] }}
      transition={{ duration: 1, ease: "easeInOut" }}
      src={images.circle}
      alt="profile_circle"
      className="overlay_circle"
    />
  );

  const renderHeaderImg = () => (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      {renderProfileCircle()}
    </motion.div>
  );

  const renderCircle = (circle, index) => (
    <div className="circle-cmp app__flex" key={`circle-${index}`}>
      <img src={circle} alt="profile_bg" />
    </div>
  );

  const renderHeaderCircles = () => (
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.react, images.csharp, images.angular].map(renderCircle)}
    </motion.div>
  );

  return (
    <div className="app__header app__flex">
      {renderHeaderInfo()}
      {renderHeaderImg()}
      {renderHeaderCircles()}
    </div>
  );
};

export default AppWrap(Header, "home");
