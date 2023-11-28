import Image from "next/image";
import angular from "../images/stack/angular.svg";
import bootstrap from "../images/stack/bootstrap.svg";
import cssIcon from "../images/stack/css.svg";
import express from "../images/stack/express.svg";
import firebase from "../images/stack/firebase.svg";
import gsapIcon from "../images/stack/gsap.svg";
import html from "../images/stack/html.svg";
import javascript from "../images/stack/javascript.svg";
import mongodbIcon from "../images/stack/mongodb.svg";
import next from "../images/stack/next.svg";
import node from "../images/stack/node.svg";
import react from "../images/stack/react.svg";
import redux from "../images/stack/redux.svg";
import sass from "../images/stack/sass.svg";
import shopify from "../images/stack/shopify.svg";
import socket from "../images/stack/socket.svg";
import squarespace from "../images/stack/squarespace.svg";
import tailwindIcon from "../images/stack/tailwind.svg";
import typescriptIcon from "../images/stack/typescript.svg";
import webflow from "../images/stack/webflow.svg";
import wordpress from "../images/stack/wordpress.svg";

import Container from "./Container";
import { FadeIn } from "./FadeIn";

const TechStacksFront = [
  ["Javascript", javascript],
  ["Typescript", typescriptIcon],
  ["React", react],
  ["Next", next],
  ["Redux", redux],
  ["Angular", angular],
  ["Socket", socket],
  ["gsap", gsapIcon],
  ["HTML", html],
  ["CSS", cssIcon],
  ["tailwind", tailwindIcon],
  ["Sass", sass],
  ["Bootstrap", bootstrap],
];

const TechStacksBack = [
  ["Node", node],
  ["ExpressJS", express],
  ["MongoDB", mongodbIcon],
  ["Firebase", firebase],
];

const WebBuilders = [
  ["Wordpress", wordpress],
  ["Shopify", shopify],
  ["WebFlow", webflow],
  ["Squarespace", squarespace],
];

function StackTechnology() {
  return (
    <div className="mt-24 bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-bold tracking-wider text-white sm:text-left">
            Some technology stack who I know and I used in FrontEnd
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <fadeInStagger>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-9"
          >
            {TechStacksFront.map(([TechStackFront, logo]) => (
              <li key={TechStackFront}>
                <FadeIn>
                  <Image src={logo} alt={TechStackFront} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </fadeInStagger>
        <br />
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-bold tracking-wider text-white sm:text-left">
            Some technology stack who I know and I used in BackEnd
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <fadeInStagger>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-9"
          >
            {TechStacksBack.map(([TechStackBack, logo]) => (
              <li key={TechStackBack}>
                <FadeIn>
                  <Image src={logo} alt={TechStackBack} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </fadeInStagger>
        <br />
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-bold tracking-wider text-white sm:text-left">
            WebBuilder
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <fadeInStagger>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-9"
          >
            {WebBuilders.map(([WebBuilder, logo]) => (
              <li key={WebBuilder}>
                <FadeIn>
                  <Image src={logo} alt={WebBuilder} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </fadeInStagger>
      </Container>
    </div>
  );
}

export default StackTechnology;
