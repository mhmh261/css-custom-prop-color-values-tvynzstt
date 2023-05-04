import './style.css';

document.querySelector('.inputs').addEventListener('input', (event) => {
  const target = event.target as HTMLInputElement;

  const { type } = target.dataset;
  const unit = {
    hue: '',
    saturation: '%',
    lightness: '%',
  }[type];

  document.body.style.setProperty(`--${type}`, `${target.value}${unit}`);
});
