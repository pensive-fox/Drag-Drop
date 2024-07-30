import React, { useState } from "react";
import "./App.css"; // Подключите ваши стили

const DraggableItem = ({ id, onDragStart, onDragEnd }) => {
  return (
    <div
      id={id}
      className="item"
      draggable="true"
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      Перетащи меня
    </div>
  );
};

const ColHeader = () => {
  return (
    <div class="row">
      <div class="col-header start">Начать</div>
      <div class="col-header progress">В процессе</div>
      <div class="col-header done">Готовы</div>
    </div>
  );
};

const PlaceholderText = [" Начать", "В процессе", "Готовы"];

const Placeholder = ({
  onDragOver,
  onDragEnter,
  onDragLeave,
  onDrop,
  //   PlaceholderText,
}) => {
  return (
    <div className="row">
      <div
        className="placeholder"
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {/* ${PlaceholderText} */}
      </div>
    </div>
  );
};

{
}

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

      <div class="row">
        <Placeholder
          class="col-header start"
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
         
        </Placeholder>
        <DraggableItem
          id="draggable-item"
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        />
        <Placeholder
          class="col-header progress"
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
        
        </Placeholder>
        <Placeholder
          class="col-header done"
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
        
        </Placeholder>
      </div>
    </>
  );
};

export default App;
