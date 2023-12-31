// /* eslint-disable prettier/prettier */
// import { EntityRepository, Repository } from 'typeorm';
// import { User } from './user.entity';
// import { AuthCredentialsDto } from './dto/auth-credentials.dto';
// import {
//   ConflictException,
//   InternalServerErrorException,
// } from '@nestjs/common';
// import * as bcrypt from 'bcrypt';

// // @EntityRepository(User)
// export class UserRepository extends Repository<User> {
//   async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
//     const { username, password } = authCredentialsDto;

//     // hash for password
//     const salt = await bcrypt.genSalt();
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // console.log('salt', salt);
//     // console.log('hashedPassword', hashedPassword);

//     const user = this.create({
//       username,
//       password: hashedPassword,
//     } as Partial<User>);

//     try {
//       await this.save(user);
//     } catch (error) {
//       if (error.code === '23505') {
//         // duplicate username
//         throw new ConflictException('Username already exists');
//       } else {
//         throw new InternalServerErrorException();
//       }
//     }
//   }
// }
