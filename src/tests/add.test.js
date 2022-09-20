

const add = (a, b) => a + b;
const generateGreeting = (name = 'Anon') => `Hello ${name}!`;

test('should add a plus b', () => {
    const result = add(3, 4);

    expect(result).toEqual(7)
});

test('should generate greeting with ! at end', () => {
    const result = generateGreeting('chachi');

    expect(result).toBe('Hello chachi!')
})

test('should generate greeting with ! at end', () => {
    const result = generateGreeting();

    expect(result).toBe('Hello Anon!')
})