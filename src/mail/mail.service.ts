import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Admin } from '../admin/entities/admin.entity';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}
  async sendMail(admin: Admin) {
    const url = `${process.env.API_HOST}:${process.env.PORT}/api/admin/activate/${admin.activation_link}`;
    console.log(url);
    await this.mailerService.sendMail({
      to: admin.email,
      subject: "Welcome to Private School App! Comformation your email",
      template: "./confirmation",
      context: {
        name: admin.first_name,
        url,
      },
    });
  }

}
