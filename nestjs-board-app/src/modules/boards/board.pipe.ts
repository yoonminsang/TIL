import type { PipeTransform } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';

import { BoardStatus } from '@/api-interfaces';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    return this.StatusOptions.includes(status);
  }
}
