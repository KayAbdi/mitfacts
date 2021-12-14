var utils  = require('course-utilities');
var greet = utils.load('./greet.js', 'greet');

test('Outputs the correct greetings', () => {
    expect(greet('Elizabeth')).toBe('Hello, Elizabeth');
  });
test('should handle null value', () => {
    expect(greet()).toBe('Hello there!');
  });
test('should handle shouting', () => {
    expect(greet('JOSE')).toBe('HELLO JOSE!');
  });
test('should handle 2 names', () => {
    expect(greet(['Jose', 'Pep'])).toBe('Hello, Jose, Pep');
  });
test('should handle multiple names', () => {
    expect(greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).toBe(
      'Hello, Alex, Arsene, Jose, Zidane'
    );
  });
