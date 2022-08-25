const switchTheme = () => {
  document.body.classList.toggle('dark-theme')
  document.body.classList.toggle('light-theme')

  const theme = document.body.classList[0];
  localStorage.setItem('theme', theme);
  const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg';

  const audio = document.getElementById('music');

  audio.src = `/assets/musics/${music}`;
  audio.play();
  audio.volume = 0.2;
}


document.addEventListener('click', () => {
  const audio = document.getElementById('music')
  audio.volume = 0.2;
  audio.play();
})