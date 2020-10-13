let scrollWidth;

export default function() {
  if (scrollWidth) return scrollWidth;

  const outer = document.createElement('div');
  outer.style.position = 'absolute';
  outer.style.visibility = 'hidden';
  outer.style.zIndex = '-9999';
  outer.style.paddingBottom = '20px';
  outer.style.overflow = 'scroll';

  document.body.appendChild(outer);
  const widthNoScroll = outer.offsetWidth;

  const inner = document.createElement('div');
  inner.style.width = '100%';

  const widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);

  scrollWidth = widthNoScroll - widthWithScroll;

  return scrollWidth;
}
