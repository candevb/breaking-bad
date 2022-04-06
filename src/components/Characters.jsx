import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../redux/Actions";

export default function Characters() {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.allCharacters);

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  return (
    <div>
      <h1>BREAKING BAD</h1>

      <h2>Characters:</h2>

      <div>
        {allCharacters.length &&
          allCharacters.map((c) => {
            return (
              <div>
                <h3>{c.name}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}
