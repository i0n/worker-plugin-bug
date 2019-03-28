declare function postMessage(message: any): void;

console.log('fruit worker loaded');

onmessage = (event) => {
  console.log('onmessage from fruit worker', event);
  postMessage('onmessage from fruit worker');
};
