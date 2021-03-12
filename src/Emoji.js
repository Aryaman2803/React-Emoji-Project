import React from "react";
export const Emoji = ({ list }) => {
  return (
    <>
      {list ? (
        <section className="emoji-container">
          {list.map((emoji, index) => {
            return (
              <div className="emoji" key={index}>
                <span id="character">{emoji.character}</span>
                <span>{emoji.unicodeName}</span>
              </div>
            );
          })}
        </section>
      ) : (
        <h1 id="search-again">No Results... </h1>
      )}
    </>
  );
};
