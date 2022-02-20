import InputHandler from "../InputHandler";


test('given: wrong input. expected: error', () => {
    expect(()=>InputHandler.checkGeoData('123')).toThrow('wrong input geodata. missed symbol.');
});

test('given: wrong input. expected: error', () => {
    expect(()=>InputHandler.checkGeoData('_230-59_)$89')).toThrow('wrong input geodata. missed symbol.');
});

test('given: wrong input. expected: error', () => {
    expect(()=>InputHandler.checkGeoData('_230-59_)$89')).toThrow('wrong input geodata. missed symbol.');
});

test('given: wrong input. expected: error', () => {
    expect(()=>InputHandler.checkGeoData('[51.50851,−0.12572]')).toThrow('wrong input geodata. missed symbol.');
});


