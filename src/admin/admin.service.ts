import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { v4 } from 'uuid';

console.log(v4);


@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private adminRepo: Repository<Admin>,
    private readonly jwtService: JwtService,
  ) {}

  // =========== GET TOKEN ===============================
  // async getTokens(admin: Admin) {
  //   const payload = {
  //     id: admin.id,
  //     is_active: admin.is_active,
  //   };
  //   const [accsessToken, refreshToken] = await Promise.all([
  //     this.jwtService.signAsync(payload, {
  //       secret: process.env.ACCESS_TOKEN_KEY,
  //       expiresIn: process.env.ACCESS_TOKEN_TIME,
  //     }),
  //     this.jwtService.signAsync(payload, {
  //       secret: process.env.REFRESH_TOKEN_KEY,
  //       expiresIn: process.env.REFRESH_TOKEN_TIME,
  //     }),
  //   ]);
  //   return {
  //     access_token: accsessToken,
  //     refreshToken: refreshToken,
  //   };
  // }

  // =========== REGISTRATION ===============================

  // async registration(createAdminDto: CreateAdminDto, res: Response) {
  //   const admin = await this.adminRepo.findOne({
  //     where: { email: createAdminDto.email },
  //   });
  //   if (admin) {
  //     throw new BadRequestException('Bunday foydalanuvchi mavjud');
  //   }
  //   if (createAdminDto.password !== createAdminDto.confirm_password) {
  //     throw new BadRequestException('Parollar mos emas');
  //   }
  //   const hashed_password = await bcrypt.hash(createAdminDto.password, 7);
  //   const newAdmin = await this.adminRepo.create({
  //     ...createAdminDto,
  //     hashed_password,
  //   });
  //   const tokens = await this.getTokens(newAdmin);
  //   const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
  //   const activation_link = v4();
    
  //   const updatedAdmin = await this.adminRepo.update(
  //     { hashed_refresh_token, activation_link },
  //     {
  //       where: { id: newAdmin.id },
  //       returning: true,
  //     },
  //   );
  //   res.cookie('refresh_token', tokens.refreshToken, {
  //     maxAge: 15 * 24 * 60 * 60 * 1000,
  //     httpOnly: true,
  //   });

  //   const updateAdmin = updatedAdmin[1][0];

  //   try {
  //     await this.mailService.sendMail(updateAdmin);
  //   } catch (error) {
  //     throw new BadRequestException('Xatni yuborishda xatolik');
  //   }
  //   const response = {
  //     message: 'Admin registered',
  //     admin: updateAdmin,
  //     tokens,
  //   };
  //   return response;
  // }

  create(createAdminDto: CreateAdminDto) {
    return this.adminRepo.save(createAdminDto);
  }

  findAll() {
    return this.adminRepo.find();
  }

  findOne(id: number) {
    return this.adminRepo.findOneBy({ id });
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    await this.adminRepo.update({ id }, updateAdminDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.adminRepo.delete({ id });
    return id;
  }
}
