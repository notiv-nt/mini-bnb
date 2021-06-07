import HttpService from './HttpService';

export default class AuthService {
  static login(data: FormData) {
    const body = Object.fromEntries(data);

    return HttpService.client.post('/auth/login', body);
  }

  static logout() {
    return HttpService.client.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, null);
  }
}
