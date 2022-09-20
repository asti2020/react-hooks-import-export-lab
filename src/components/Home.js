import React from "react";

function Home({username="Astika", city ="Nepal"}) {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}
export default Home;