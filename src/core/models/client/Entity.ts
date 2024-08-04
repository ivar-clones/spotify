import { Image } from "../shared/Image.interface";

export interface Entity {
  readonly id: string;
  readonly images: Image[];
  readonly name: string;
}
