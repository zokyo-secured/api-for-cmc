import { Injectable } from '@nestjs/common';
import { Payload } from '../interfaces/payload';
import { sign } from 'jsonwebtoken';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

  constructor(private userService: UserService) {}
  
  async signPayload(payload: Payload) {
    return sign(payload, 'zokyolabs', { expiresIn: '7d' });
  }
 
  async validateUser(payload: Payload) {
    return await this.userService.findByPayload(payload);
  }
  
}