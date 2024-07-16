import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';

// NOTE: depreacted되어서 @Injectable()를 사용해야된다??
@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {}
