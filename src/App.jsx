import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Hero, Sales,FlexContent,Stories, Footer, NavBar, Cart } from "./components";
import { heroapi, popularsales, toprateslaes,highlight,sneaker,story, footerAPI } from "./data/data";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <NavBar/>
    <Cart/>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExist/>
        <FlexContent endpoint={highlight} ifExist/>
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker}/>
        <Stories story={story}/>
        <Footer footerAPI={footerAPI}/>
      </main>
    </>
  );
}

export default App;
