import Image from "next/image";
import React from "react";
import Hero_2 from "../components/hero";
import Meta from "../components/meta";

import Top_collection from  '../components/collectrions/top_collection';
import Feature_collections from '../components/collectrions/feature_collections';
//import Auctions_categories from '../components/categories/auctions_categories'


export default function Home() {
  return (
 
      <>
        <Meta title="Home 2" />
        <Hero_2 />
        <Top_collection />
        {/* <Auctions_categories /> */}
        {/* <Feature_collections /> */}
        {/* <Partners /> */}
      </>
  );
}
