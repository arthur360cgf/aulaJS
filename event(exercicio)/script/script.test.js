const { callback } = require('./script.js');

describe('callback function', () => {


it('should log "clickou" to the console in different browser environments', () => {
  const originalConsoleLog = console.log;
  const mockConsoleLog = jest.fn();
  console.log = mockConsoleLog;

  const environments = ['Chrome', 'Firefox', 'Safari', 'Edge'];
  environments.forEach(env => {
    global.navigator = { userAgent: env };
    callback();
    expect(mockConsoleLog).toHaveBeenCalledWith('clickou');
  });

  console.log = originalConsoleLog;
});

it('should log "clickou" to the console when the callback function is called', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  callback();
  expect(consoleSpy).toHaveBeenCalledWith('clickou');
  consoleSpy.mockRestore();
});
});
