import React from "react";

const ModList = [
  {
    img: "./img/enig.png",
    name: "enigmalea",
    twitter: "http://twitter.com/enigmaleaDA",
    tumblr: "http://enigmalea.tumblr.com",
  },
  {
    img: "./img/fox.png",
    name: "FoxInBoots",
    twitter: "http://twitter.com/TheFoxInBoots",
    tumblr: "http://thefoxinboots.tumblr.com",
  },
];

function Mods({ img, name, twitter, tumblr }) {
  return (
    <div className="avatar">
      <img className="avatar__photo avatar__photo-sm" src={img} />
      <div className="avatar__intro">
        <div className="avatar__name">{name}</div>
        <small class="avatar__subtitle">
          <a href={twitter} class="footer__link-item">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href={tumblr} class="footer__link-item">
            <i class="fa-brands fa-tumblr"></i>
          </a>
        </small>
      </div>
    </div>
  );
}

export default function ModComponent() {
  return (
    <div>
      {ModList.map((props, idx) => (
        <Mods key={idx} {...props} />
      ))}
    </div>
  );
}
