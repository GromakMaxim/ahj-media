import InputHandler from "../InputHandler";

test('given correct coords. expect true', async () => {
    await expect(InputHandler.checkGeoData('[51.50851, −0.12572]')).resolves.toBe(true);
});

test('given correct coords. expect true', async () => {
    await expect(InputHandler.checkGeoData('[51.0, −0.12]')).resolves.toBe(true);
});

test('given correct coords. expect true', async () => {
    await expect(InputHandler.checkGeoData('[51, −12]')).resolves.toBe(true);
});

test('given correct coords. expect true', async () => {
    await expect(InputHandler.checkGeoData('[0, 0]')).resolves.toBe(true);
});
