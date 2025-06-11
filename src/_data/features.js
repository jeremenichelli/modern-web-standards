export default [
  {
    id: 'units',
    name: 'Dynamic viewport units',
    description:
      'New CSS units that account for mobile viewports with dynamic toolbars.',
    link: 'https://web.dev/blog/viewport-units',
    linkLabel: 'Viewport Units on web.dev',
  },
  {
    id: 'scroll-behavior',
    name: 'Scroll behavior',
    description:
      'The scroll-behavior CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior',
    linkLabel: 'Scroll behavior on MDN',
  },
  {
    id: 'scroll-snap',
    name: 'CSS scroll snap',
    description:
      'The CSS scroll snap module provides properties that let you control the panning and scrolling behavior by defining snap positions. Content can be snapped into position as the user scrolls overflowing content within a scroll container, providing paging and scroll positioning.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap',
    linkLabel: 'CSS scroll snap on MDN',
  },
  {
    id: 'intersection-observer',
    name: 'Intersection Observer',
    description:
      'The new Intersection Observer interface is here as a response of developers trying to figure out the best way to detect when an element enters the viewport. Doing this is useful in a lot of cases like infinite scrolling, lazy loading images or animating content.',
    link: 'https://jeremias.codes/2016/04/quick-introduction-to-the-intersection-observer-api/',
    linkLabel: 'Quick introduction to the Intersection Observer API on jeremias.codes',
  },
  {
    id: 'web-animation',
    name: 'Web Animation API',
    description:
      'The Web Animations API allows for synchronizing and timing changes to the presentation of a Web page, i.e., animation of DOM elements. It does so by combining two models: the Timing Model and the Animation Model.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API',
    linkLabel: 'Using the Web Animations API on MDN',
  },
  {
    id: 'view-transitions',
    name: 'View Transitions',
    description:
      'The View Transition API provides a mechanism for easily creating animated transitions between different website views. This includes animating between DOM states in a single-page app (SPA), and animating the navigation between documents in a multi-page app (MPA).',
    link: 'https://developer.chrome.com/docs/web-platform/view-transitions',
    linkLabel:
      'Smooth transitions with the View Transition API on chrome for developers',
  },
].map((feature, index) => {
  const hue = index * 40;
  const variables = {
    '--background--one': `hsl(${hue}deg 100% 90%)`,
    '--background--two': `hsl(${hue}deg 100% 97.5%)`,
    '--text': `hsl(${hue}deg 65% 35%)`,
    '--link': `hsl(${hue}deg 80% 30%)`,
  };

  return { ...feature, ...variables };
});
