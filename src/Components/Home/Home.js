import React from "react";
import Banner from "./Banner/Banner";
import ExtraPart from "./ExtraPart/ExtraPart";
import Items from "./Items/Items";
import ExtraSecondPart from "./ExtraSecondPart/ExtraSecondPart";
import Counter from './Counter/Counter';

const Home = () => {
  return (
    <div>
      <Banner />
      <Items />
      <ExtraPart />
      <ExtraSecondPart />
      <Counter />
    </div>
  );
};

export default Home;
