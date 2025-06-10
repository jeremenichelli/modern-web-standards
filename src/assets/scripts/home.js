const panes = document.getElementsByClassName('pane');

async function animatePane(pane) {
  await pane.animate(
    [
      { opacity: '0', transform: 'translateY(10dvh)' },
      { opacity: '1', transform: 'none' },
    ],
    {
      duration: 300,
      delay: 100,
      easing: 'ease-in-out',
      fill: 'forwards',
    },
  ).finished;

  const paneTitle = pane.querySelector('.pane-title');
  const paneArrow = pane.querySelector('.arrow');

  await paneTitle.animate(
    [
      { opacity: '0', transform: 'translateY(3dvh)' },
      { opacity: '1', transform: 'none' },
    ],
    {
      duration: 250,
      easing: 'ease-in-out',
      fill: 'forwards',
    },
  ).finished;

  paneArrow.animate(
    [
      {
        opacity: '0',
        transform:
          pane.id === 'intro' ? 'translateY(-10px)' : 'translateX(-2dvh)',
      },
      { opacity: '1', transform: 'none' },
    ],
    {
      duration: 150,
      easing: 'ease-out',
      fill: 'forwards',
    },
  );
}

const observer = new IntersectionObserver(
  (entries) => {
    for (let entry of entries) {
      if (entry.isIntersecting) {
        animatePane(entry.target);
        observer.unobserve(entry.target);
      }
    }
  },
  {
    threshold: [0.25],
  },
);

for (let pane of panes) {
  observer.observe(pane);
}

document.querySelector('.scroll-cta').addEventListener('click', () => {
  self.units.scrollIntoView();
});
