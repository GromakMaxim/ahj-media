import InputHandler from "../InputHandler";

test('given correct coords. expect true', () => {
    let actual = InputHandler.checkGeoData('[51.50851, −0.12572]');
    let expected = true;
    expect(actual).toBe(expected);
});
