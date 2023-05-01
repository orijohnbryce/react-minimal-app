import React from "react";
import { useState } from "react";
import {getNotesPagination} from "./client/notes_client"
import Note from "./Note";
import InfiniteScroll from "react-infinite-scroller";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [nextPage, setNextPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  return (
    <>
      {console.log(notes)}
      {console.log(nextPage)}

      <InfiniteScroll
        loadMore={async () => {
          if (hasMore) {
            const res = await getNotesPagination(nextPage, 10, setHasMore);
            setNextPage((prev) => {
              return prev + 1;
            });
            const newNotes = [...notes, ...res.data];
            setNotes(newNotes);
          }
        }}
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
