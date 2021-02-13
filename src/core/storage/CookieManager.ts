import Cookies from "universal-cookie";
import { CookieKeys, CookieResponse, ICookieManager } from "./Types";

export class CookieManager implements ICookieManager{
  private cookies: Cookies;

  public constructor(cookies: Cookies) {
    this.cookies = cookies;
  }

  public getAll() {
    return this.cookies.getAll();
  }

  public getByKey<T>(key: CookieKeys): T {
    return this.cookies.get(key) as T;
  }

  public set<T>(key: CookieKeys, value: T): CookieResponse {
    try {
      this.cookies.set(key, value);
      return CookieResponse.SUCCESS;
    } catch (error) {
      return CookieResponse.FAILURE;
    }
  }

  public remove(key: CookieKeys): CookieResponse {
    try {
      this.cookies.remove(key);
      return CookieResponse.SUCCESS;
    } catch (error) {
      return CookieResponse.FAILURE;
    }
  }
}