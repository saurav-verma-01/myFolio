import React, { useState } from "react";
import Toggle from "./components/Toggle/Toggle";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const handleThemeToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <main className="app" data-theme={isDark ? "dark" : ""}>
      <Toggle isDark={isDark} onToggle={handleThemeToggle} />
      <div className="container">
        <h1>Saurav Kumar verma</h1>
        <h2>Hello I'm making My portfolio.</h2>
        <h3>This site is to showcase my skills to potential employers.</h3>

        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            eaque mollitia vitae amet dolorem optio quibusdam error aperiam
            accusantium fuga, dolores quas et necessitatibus perferendis!
            Perferendis iusto debitis ipsum cupiditate.
          </p>
        </div>

        <div className="box-container">
          {" "}
          <div className="box box-1"></div>
          <div className="box box-2"></div>
          <div className="box box-3"></div>
        </div>
      </div>
    </main>
  );
};

export default App;
