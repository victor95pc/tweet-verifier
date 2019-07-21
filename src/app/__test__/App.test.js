import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

jest.mock('../test.wasm', () => {
  const path = require('path');
  const fs = require('fs');
  const buf = fs.readFileSync(path.resolve('src', 'app', 'test.wasm'));
  return new Uint8Array(buf).buffer
})

describe('App.App', () => {
  const setup = (props = {}) => shallow(<App {...props} />);
  
  it('should render without error', () => {
    setup()
  });
});