const changeTime = () => {
  let seconds = 0;
  document.body.textContent = `${seconds} sekund`;
  return () => {
    seconds++;
    document.body.textContent = `${seconds} sekund`;
  };
};

const timer = changeTime();
setInterval(timer, 1000);
