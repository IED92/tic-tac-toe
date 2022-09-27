import React from "react";
import { GameGrid } from "../../GameGrid";
import { GameGridItem } from "../../GameGridItem";

export const GameBoard = () => {
  const playsquares = [
    { id: 1, value: null },
    { id: 2, value: null },
    { id: 3, value: null },
    { id: 4, value: null },
    { id: 5, value: null },
    { id: 6, value: null },
    { id: 7, value: null },
    { id: 8, value: null },
    { id: 9, value: null },
  ];

  return (
    <div className="w-96 h-96 border-2 border-black rounded-lg">
      <GameGrid>
        {playsquares.map((square) => (
          <GameGridItem id={square.id} value={square.value} />
        ))}
      </GameGrid>
    </div>
  );
};
