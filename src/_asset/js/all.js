let iframeList = Array.from(document.querySelectorAll('iframe'));
let handlerFunction = () => {

  iframeList
    .filter(iframe => !iframe.src)
    .map(iframe => {
      iframe.src = iframe.dataset.src;
  });
  document.removeEventListener('scroll', handlerFunction);
};
let scrollListener = document.addEventListener('scroll', handlerFunction);


(() => {
  iframeList.filter.map(iframe => {
    if (iframe.getBoundingClientRect().top < window.innerHeight) {
      iframe.src = iframe.dataset.src;
    }
  })
});
let bookSpeakerList = Array.from(document.querySelectorAll('.book-me'));

bookSpeakerList.map(bookSpeaker => bookSpeaker.addEventListener('click', e => {
  bookSpeaker.href = 'mai' + 'lto:booking' + '@robertoblake.com' + '?Subject=' + 'Bookng%20Speaking' + '%20Session';
}))