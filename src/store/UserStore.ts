import { Module, VuexModule, getModule, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store/Store';

import User from '@/models/User';
import UserService from '@/services/UsersService';


@Module({ namespaced: true, name: 'UserStore', store, dynamic: true })
class UserStore extends VuexModule {

    @Action
    public async GetAllUsers(): Promise<User[]> {
        const users = await UserService.GetAllUsers();        
        return users;
    }

    @Action
    public async GetUser(userId: string): Promise<User> {
        const user = await UserService.GetUser(userId);        
        return user;
    }

}

export default getModule(UserStore);