import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

export default function MyInfinitScroll() {
  const [lorem, setLorem] = useState(1);
  const [lorems, setLorems] = useState([]);

  const addLorem = async () => {
    
    // uncomment the following if you want a delay
    //   await new Promise((x)=>{setTimeout(x, 2000)})

    const newLorems = [...lorems];
    newLorems.push(`${lorem} This is a new lorem`);
    setLorem((prev) => {
      return prev + 1;
    });
    setLorems(newLorems);
  };

  return (
    <InfiniteScroll
      loadMore={addLorem}
      hasMore={true}
      loader={<div className="loader">Loading ...</div>}
    >
      {lorems.map((n) => {
        return <p> {n} </p>;
      })}
    </InfiniteScroll>
  );
}
