import React from "react";
export const Emoji = ({ list }) => {
  console.log("hello from EMOJI COMPONENT", list);

  return (
    <>
      {list ? (
        <div className="emoji-container">
          <ul>
            {list.map((emoji) => {
              return (
                <section className="emoji">
                  <div className="emoji-details">
                    <span>{emoji.character}</span>
                    <span>{emoji.unicodeName}</span>
                  </div>
                </section>
              );
            })}
          </ul>
        </div>
      ) : (
        <h1>Search Again</h1>
      )}
    </>
  );
};
