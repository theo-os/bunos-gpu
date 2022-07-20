import { colord } from 'colord';

export const toHex = (color: number[]): number =>
  (color[0] & 0xff) |
  ((color[1] & 0xff) << 8) |
  ((color[2] & 0xff) << 16) |
  ((color[3] & 0xff) << 24);

export class Framebuffer {
  buffer: number[];

  fillStyle = 'black';
  globalAlpha = 1.0;

  fillRect(x: number, y: number, w: number, h: number) {
    for (let i = x; i < w; i++)
      for (let j = y; j < h; j++) {
        // TODO: validate coordinates
        const color = colord(this.fillStyle).toRgb();

        switch (this.format) {
          default:
            this.buffer.push(color.b, color.g, color.r, this.globalAlpha * 255);
        }
      }
  }

  constructor(
    public readonly width: number,
    public readonly height: number,
    public readonly format: string = 'bgra'
  ) {
    //this.buffer = new Array(width * height * 4);
    this.buffer = [];
  }

  encode(): Uint8Array {
    return new Uint8Array(this.buffer);
  }

  async save(path: string) {
    await Bun.write(path, this.encode());
  }
}
