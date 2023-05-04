import React from "react";
import { useState } from "react";
import {getNotesPagination} from "./client/notes_client"
import Note from "./Note";
import InfiniteScroll from "react-infinite-scroller";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [nextPage, setNextPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);


  const onLoadMore = async () => {
    const res = await getNotesPagination(nextPage, 10);

    if (!res.has_more) {
      setHasMore(false)
    }
    setNextPage((prev) => {
      return prev + 1;
    });
    const newNotes = [...notes, ...res.data];
    setNotes(newNotes);
  }

  return (
    <>      
      <InfiniteScroll
        loadMore={onLoadMore}
        hasMore={hasMore}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {notes &&
          notes.map((n) => {
            return <Note key={n.id} note={n} />;
          })}
      </InfiniteScroll>
    </>
  );
}

export default Notes;
