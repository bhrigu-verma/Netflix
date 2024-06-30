import React from "react";
import background from "../assets/images/WelcomePageBanner.jpg";

export default function BackgroundImage() {
  return (
    <div className="h-screen w-screen">
      <img className="h-full w-full" src={background} alt="background" />
    </div>
  );
}
