import {ValueTransformer} from 'typeorm';

export class BoolBitTransformer implements ValueTransformer {
  // To db from typeorm
  to(value: boolean | null): number | null {
    if (value === null) {
      return null;
    }
    return value ? 1 : 0;
  }

  // From db to typeorm
  from(value: number): boolean | null {
    if (value === null) {
      return false;
    }
    return value === 1;
  }
}

export class StringTransformer implements ValueTransformer {
    // To db from typeorm
    to(value: string | null): string | null {
      return value ;
    }
  
    // From db to typeorm
    from(value: string): string | null {
      if (value === null) {
        return '';
      }
      return value;
    }
  }

  export class NumberTransformer implements ValueTransformer {
    // To db from typeorm
    to(value: number | null): number | null {
      return value ;
    }
  
    // From db to typeorm
    from(value: number): number | null {
      if (value === null) {
        return 0;
      }
      return value;
    }
  }