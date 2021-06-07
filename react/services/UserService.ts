import { IncomingMessage } from 'http';
import HttpService from './HttpService';

export default class UserService {
  static async getMe(req?: IncomingMessage) {
    return HttpService.proxyRequest(req, '/user/me').catch(() => null);
  }
}
