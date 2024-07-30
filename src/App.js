import React, { useState } from "react";
import "./App.css"; // Подключите ваши стили
import {
  PlaceholderContentColHeaderStyled,
  PlaceholderContentStyled,
} from "./components/PlaceholderContentStyled";
import { DraggableItemContentStyled } from "./components/DraggableItemContentStyled";
import { RowContentStyled } from "./components/DraggableItemContentStyled";

const DraggableItem = ({ id, onDragStart, onDragEnd }) => {
  return (
    <DraggableItemContentStyled
      id={id}
      draggable="true"
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      Перетащи меня
    </DraggableItemContentStyled>
  );
};
const PlaceholderText = [" Начать", "В процессе", "Готовы"];

const ColHeader = () => {
  return (
    <RowContentStyled>
      <PlaceholderContentColHeaderStyled variant="start">
        {PlaceholderText[0]}
      </PlaceholderContentColHeaderStyled>
      <PlaceholderContentColHeaderStyled variant="progress">
        {PlaceholderText[1]}
      </PlaceholderContentColHeaderStyled>
      <PlaceholderContentColHeaderStyled variant="done">
        {PlaceholderText[2]}
      </PlaceholderContentColHeaderStyled>
    </RowContentStyled>
  );
};

const Placeholder = ({ onDragOver, onDragEnter, onDragLeave, onDrop }) => {
  return (
    <RowContentStyled>
      <PlaceholderContentStyled
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      ></PlaceholderContentStyled>
    </RowContentStyled>
  );
};
const App = () => {
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (event) => {
    setDraggingItem(event.target.id);
    event.target.classList.add("hold");
    setTimeout(() => {
      event.target.classList.add("hide");
    }, 0);
  };

  const handleDragEnd = (event) => {
    event.target.classList.remove("hold", "hide");
    setDraggingItem(null);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragEnter = (event) => {
    event.target.classList.add("hovered");
  };

  const handleDragLeave = (event) => {
    event.target.classList.remove("hovered");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.target.classList.remove("hovered");

    if (draggingItem) {
      const item = document.getElementById(draggingItem);
      if (item) {
        event.target.appendChild(item);
      }
    }
  };

  return (
    <>
      <ColHeader />

      <RowContentStyled>
        <PlaceholderContentStyled
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <DraggableItem
            id="draggable-item"
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        </PlaceholderContentStyled>

        <PlaceholderContentStyled
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        ></PlaceholderContentStyled>
        <PlaceholderContentStyled
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        ></PlaceholderContentStyled>
      </RowContentStyled>
    </>
  );
};

export default App;
