export default function animateMessage(message, setState) {
    let index = 0;

    const writeInterval = setInterval(() => {
      setState((prev) => message.slice(0, index + 1));
      index++;
      
      if (index >= message.length) {
        clearInterval(writeInterval);
      }
    }, 70);
}
