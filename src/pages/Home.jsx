import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import InvoiceCard from "../components/InvoiceCard";
function Home() {

  return (
    <div>
      <Header />
     <InvoiceCard/>
    </div>
  );
}

export default Home;
