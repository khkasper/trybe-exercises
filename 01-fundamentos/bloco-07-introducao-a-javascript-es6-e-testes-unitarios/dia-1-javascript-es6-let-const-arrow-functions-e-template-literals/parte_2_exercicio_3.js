let clickCount = 0;

submitButton.addEventListener('click', () => {
  document.getElementById("counter").innerHTML = clickCount += 1;
});
