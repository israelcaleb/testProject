import User from '@/models/User';
import { HttpRequest } from './HttpRequestService';
import { AxiosResponse } from 'axios';

export default class UserService extends HttpRequest {    
    
    public static GetAllUsers(): Promise<User[]> {
        return this.Instance.GetAllUsers();
    }

    public static GetUser(userId: string): Promise<User> {
        return this.Instance.GetUser(userId);
    }
    
    private static Instance: UserService = new UserService();

    public static apiUrl: string = process.env.VUE_APP_API;
    
    private async GetAllUsers() {
        const url = `${UserService.apiUrl}/GetUsers`;
        const response: AxiosResponse = await this.get(url);
        return response.data as User[];
    }

    private async GetUser(userId: string) {
        const url ='';
        const response: AxiosResponse = await this.get(url);
        return response.data as User
    }
    
    
    protected async getHeaders() {
        return Promise.resolve(null);
    }

}