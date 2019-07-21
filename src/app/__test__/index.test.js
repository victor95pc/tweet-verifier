import { renderApp, ID } from '../index';

jest.mock('../test.wasm', () => {
  const path = require('path');
  const fs = require('fs');
  const buf = fs.readFileSync(path.resolve('src', 'app', 'test.wasm'));
  return new Uint8Array(buf).buffer
})

describe('App.index', () => {
  describe('when container is not on document.body', () => {
    it('should add div', () => {
      renderApp();

      expect(document.getElementById(ID)).toBeDefined();
    });
  });
  
  describe('when container is already on document.body', () => {
    it('should readd div', () => {
      const container = document.createElement('div');
      container.id = ID
      document.body.appendChild(container);

      renderApp()

      expect(document.getElementById(ID)).toBeDefined();
    });
  });
});