// import background from '../background';

describe('chrome.background', () => {
  describe('when NODE_ENV is development', () => {
    it('should call click event with reload', () => {
      const addListener   = jest.fn();
      const executeScript = jest.fn();
      const reload        = jest.fn();
  
      global.process = { env: { NODE_ENV: 'development' } };
  
      global.chrome = {
        runtime: { reload },
        tabs: { executeScript },
        browserAction: { onClicked: { addListener } }
      };
  
      require('../background');
  
      expect(addListener).toBeCalled();

      addListener.mock.calls[0][0]({ id: '123' })
    });
  });
});