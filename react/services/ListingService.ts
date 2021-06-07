import { IncomingMessage } from 'http';
import HttpService from './HttpService';

export default class ListingService {
  static async toggle(id: number) {
    return HttpService.client.post(`/listing/toggle/${id}`).then((r) => r.data);
  }

  static async getSaved(req: IncomingMessage) {
    const res = await HttpService.proxyRequest(req, '/listing/saved').catch(() => {});
    return res || [];
  }

  static async getSummary() {
    const res = await HttpService.client.get('/listing/summary');
    let places = null;

    if (res.data) {
      places = Object.entries(res.data).map((i) => ({ place: i[0], listings: i[1] }));
    }

    return places;
  }

  static getSingle(id: number | string) {
    return HttpService.client
      .get(`/listing/${id}`)
      .then((r) => r.data)
      .catch();
  }
}
