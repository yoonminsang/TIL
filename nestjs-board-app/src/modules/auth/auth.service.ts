import { Injectable } from '@nestjs/common';

import { BoardRepository } from '../boards/board.repository';

@Injectable()
export class AuthService {
  constructor(private boardRepository: BoardRepository) {}
}
