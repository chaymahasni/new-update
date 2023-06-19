import { Type } from "./type.model";

export class Tutorial {
    id?: any;
    title?: string;
    description?: string;
    published?: boolean;
    types?: Type | null;
  }