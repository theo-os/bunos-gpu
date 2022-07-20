import { describe, expect, it } from 'bun:test';
import namesPlugin from 'colord/plugins/names';
import { extend } from 'colord';
import { Framebuffer } from '../src/framebuffer';

extend([namesPlugin]);

describe('canvas api', () => {
  it('fill rect', async () => {
    const canvas = new Framebuffer(1920, 1080);
    canvas.fillStyle = 'red';
    canvas.fillRect(0, 0, 1920, 1080);

    expect(canvas.buffer.length).toBe(1920 * 1080 * 4);
    expect(canvas.buffer[0]).toBe(0);
    expect(canvas.buffer[1]).toBe(0);
    expect(canvas.buffer[2]).toBe(255);
    expect(canvas.buffer[3]).toBe(255);

    //await Bun.write("test.bgra", canvas.encode());
  });
});
