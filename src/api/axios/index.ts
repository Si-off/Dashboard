import axios, { AxiosInstance } from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({ baseURL: BASE_URL });

export default class Client {
  private readonly instance: AxiosInstance = axiosInstance;
  private readonly url: string;

  constructor(url: string) {
    this.url = url;
  }

  async get(params: object = {}) {
    try {
      const res = await this.instance.get(this.url, { params });

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
  async post(params: object = {}) {
    try {
      const res = await this.instance.post(this.url, { params });

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
}
