import React, { useState } from "react";
import "../index.css";

import useData from "../hooks/useData";

import Header from "./Header";
import LeafletMap from "./Map";
import InfoBox from "./InfoBox";

function App() {
  const [query, setQuery] = useState();
  const [loading, setLoading] = useState(false);

  const data = useData(query, setLoading);
  console.log(data);
  return (
    <>
      {loading ? <p className="info-alert">Loading...</p> : null}
      <Header query={setQuery} setLoading={setLoading}>
        <InfoBox data={data} loading={loading} />
      </Header>
      <LeafletMap data={data} />
    </>
  );
}
export default App;
