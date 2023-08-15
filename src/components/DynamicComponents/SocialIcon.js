import React from "react";

export default function SocialIcon({
  socialm,
  IconColor = "",
  IconSize = "",
  component = "",
}) {
  let { title, link, icon } = socialm;
  return (
    <>
      {component !== "footer" ? (
        <span>
          <a
            href={link}
            rel="noreferrer"
            target="_blank"
            title={title}
            className={`${IconColor ? "IconColor" : "text-yellow-400"} text-[${
              IconSize ? IconSize : "22px"
            }] text-[28px]  md:text-[34px] hover:text-primaryColor font-[600]
        `}
          >
            <i className={icon}></i>
          </a>
        </span>
      ) : (
        <span>
          <a
            href={link}
            rel="noreferrer"
            target="_blank"
            title={title}
            className="text-primaryColor hover:text-white text-[28px]  md:text-[34px] font[600]"
          >
            <i className={icon}></i>
          </a>
        </span>
      )}
    </>
  );
}
