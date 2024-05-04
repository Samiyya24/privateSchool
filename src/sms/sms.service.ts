import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { IsMobilePhone } from 'class-validator';

import FormData = require('form-data');

@Injectable()
export class SmsService {
  async sendSms(phone: string, otp: string) {
    const formdata = new FormData();
    formdata.append('mobile-phone', phone);
    // formdata.append('message', `Private School code ${otp}`);
    formdata.append('message', `Your verification code is 1234`);
    formdata.append('from', `4546`);

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: process.env.SMS_SERVICE_URL,
      headers: {
        Authorization: `Bearer ${process.env.SMS_TOKEN}`,
      },
      data: formdata,
    };
    try {
      const resp = await axios(config);
    } catch (error) {
      console.log(error);
      return { status: 500 };
    }
  }
  async refreshToken() {}
  async getToken() {}
}
