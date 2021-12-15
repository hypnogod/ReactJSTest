import React from "react";

function App() {
  const second = 60;

  const [show, setShow] = React.useState(true);
  const [timer, setTimer] = React.useState(second);
  const click = () => {
    var delay = second * 1000;
    setShow(false);
    let timer = setTimeout(() => {
      setShow(true);
    }, delay);
    return () => clearTimeout(timer);
  };

  React.useEffect(() => {
    if (!show) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
    if ((timer <= 0) & show) {
      setTimer(second);
    }
  });
  return (
    <main>
      {show ? (
        <button onClick={click}>Get verification code</button>
      ) : (
        <button disabled>Please Wait {timer} seconds</button>
      )}
    </main>
  );
}

export default App;
