
document.querySelectorAll('.border').forEach(border => {
  border.style.borderColor =
    `hsl(${Math.random() * 360}, 80%, 60%)`;
});
