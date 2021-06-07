import Axios, { AxiosInstance, Method } from 'axios';
import { IncomingMessage } from 'http';

const axiosClient: AxiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export default class HttpService {
  public static client = axiosClient;

  static async proxyRequest(req: IncomingMessage | undefined, url: string) {
    if (!req) {
      return null;
    }

    const res = await Axios({
      method: req.method as Method,
      url: `${process.env.SERVER_ADDRESS}${url}`,
      headers: req.headers,
    });

    return res.data;
  }
}
