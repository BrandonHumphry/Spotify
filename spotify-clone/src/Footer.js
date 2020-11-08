import React from "react";
import "./Footer.css";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left"></div>
      <p>Album name + song details </p>

      <div className="footer__center"></div>
      <ShuffleIcon className="footer_green" />
      <SkipPreviousIcon className="footer_green" />
      <PlayCircleOutlineIcon className="footer_green" fontSize="large" />
      <SkipNextIcon className="footer_green" />
      <RepeatIcon className="footer_green" />

      <div className="footer__right"></div>
      <p>Volume controls</p>
    </div>
  );
}

export default Footer;
