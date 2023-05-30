import React, { useEffect, useState } from "react";
import db from "../db";

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    setLetters(db.letters);
    // fetch('http://localhost:8000/letters')
    //   .then(res => res.json())
    //   .then(json => {
    //     setLetters(json)
    //   })
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((letter) => {
          const color = usedKeys[letter.key];
          return (
            <div key={letter.key} className={color}>
              {letter.key}
            </div>
          );
        })}
    </div>
  );
}
