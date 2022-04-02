import Main from "..//Main-session/Main";
import Banner from "../Main-session/Banner";
import Navebar from "../Main-session/Navebar";

import React from "react";

function HomePage() {
  return (
    <div>
      <Navebar />
      <Banner />
      <Main />
    </div>
  );
}

export default HomePage;
