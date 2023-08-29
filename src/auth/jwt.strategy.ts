/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
// import { UserRepository } from './users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtPayLoad } from './jwt-payload.interface';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(    
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {
    super({
      secretOrKey: 'topSecret51',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayLoad): Promise<User> {
    const { username } = payload;

    const user: User = await this.userRepository.findOne({ 
        where: { username },
     });

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
