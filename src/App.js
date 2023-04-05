import React, { useEffect, useState } from "react";
import "./App.css";
import { Listing, Header, Form } from "./components";
import { ModalProvider, useModal } from "./ModalContext";

const App = () => {
  const [images, setImages] = useState();
  const { openModal } = useModal();

  const fetchImages = async () => {
    const start = performance.now();
    try {
      const response = await fetch("images?limit=10");
      const data = await response.json();
      console.log("Success:", data);
      setImages(data);
    } catch (error) {
      console.error("Error:", error);
    }

    const end = performance.now();

    // Testing load times
    console.log("Time taken to fetch image", end - start);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="app">
      <Header openForm={() => {openModal(<Form />)}} />
      <div className="grid-container">
        {images &&
          images.map((img) => (
            <Listing key={img.id} img={img} />
          ))}
      </div>
    </div>
  );
};

const AppWithContext = () => (
  <ModalProvider>
    <App />
  </ModalProvider>
);

export default AppWithContext;
