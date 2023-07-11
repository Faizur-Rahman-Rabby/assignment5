import React from "react";

function App() {
  const [text, setText] = React.useState("");

  function handleClick() {
    setText("This is the text that was typed in the text area.");
  }

  return (
    <div>
      <Header title="My React App" />
      <Content>
        <h2>Content Section</h2>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button onClick={handleClick}>Click me!</button>
      </Content>
      <Footer>
        This is my footer.
      </Footer>
    </div>
  );
}

export default App;
