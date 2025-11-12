import { useState } from 'react';

function TextCounter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setCount((c) => c + 1);
    setText(event.target.value);
  };

  return (
    <div align="left">
      <h1 style={{ textDecoration: 'underline', color: 'yellow', fontFamily: 'monospace' }}>
        # Use State
      </h1>
      Text: <input type="text" onChange={handleChange} />
      <br />
      Total key presses: {count}
      <br />
      Content: {text}
    </div>
  );
}

export default TextCounter;
