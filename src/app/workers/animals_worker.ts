declare function postMessage(message: any): void;

console.log('animals worker loaded');

onmessage = (event) => {
  console.log('onmessage from animals worker', event);
  postMessage('onmessage from animals worker');
};
