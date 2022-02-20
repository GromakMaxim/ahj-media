import InputHandler from "../InputHandler";


test('given: wrong input. expected: error', async () => {
   await expect(InputHandler.checkGeoData('123')).rejects.toThrow('wrong input geodata. missed symbol.');
});

test('given: wrong input. expected: error', async () => {
    await expect(InputHandler.checkGeoData('_230-59_)$89')).rejects.toThrow('wrong input geodata. missed symbol.');
});


test('given: missed space. expected: error', async () => {
    await expect(InputHandler.checkGeoData('[51.50851,−0.12572]')).rejects.toThrow('wrong input geodata. missed symbol.');
});

test('given: letters in coords. expected: error', async () => {
    await expect(InputHandler.checkGeoData('[51.5085q, −0.1257p]')).rejects.toThrow('wrong input geodata. letters not allowed.');
});

test('given: > 2 dots. expected: error', async () => {
    await expect(InputHandler.checkGeoData('[51.50.851, −0.12.571]')).rejects.toThrow('wrong input geodata. more than 2 dots.');
});

test('given: 3 coords. expected: error', async () => {
    await expect(InputHandler.checkGeoData('[51.50851, −0.12571, 25.12345]')).rejects.toThrow('wrong input geodata. more than 2 dots.');
});

test('given: empty coords. expected: error', async () => {
    await expect(InputHandler.checkGeoData('[, ]')).rejects.toThrow('wrong input geodata. digits not found.');
});

test('given: empty coords. expected: error', async () => {
    await expect(InputHandler.checkGeoData('')).rejects.toThrow('illegal geodata:');
});
