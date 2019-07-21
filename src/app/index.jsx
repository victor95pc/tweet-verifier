import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import OnPageReady from 'document-ready';

const ID = "tweet-verifier-react-app";

const addDivContainerIfNeeded = () => {
  let container = document.getElementById(ID);

  if (container) {
    container.parentNode.removeChild(container);
  }

  container = document.createElement("div");

  container.id = ID;

  document.body.appendChild(container);

  return container;
}

OnPageReady(() => {
  const container = addDivContainerIfNeeded();

  ReactDOM.render(<App />, container);
});
