function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      const colors = document.querySelectorAll('.color');
      colors.forEach(color => {
        color.style.backgroundColor = getRandomColor();
        color.innerHTML="<h1>"+getRandomColor()+"</h1>";
      });
    }
  });
  