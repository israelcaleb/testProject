<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <q-btn label="Get All User" @click="getAllUsers()">
    </q-btn>

    <q-btn label="Get User" @click="getUser()">
    </q-btn>

    {{allUsers}}

    {{user}}

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UserStore from '@/store/UserStore';
import User from '@/models/User';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private allUsers: User[] = [];
  private user: User = {UserId: '', Name: '', Email: ''}

  private async getAllUsers() {
    this.allUsers = await UserStore.GetAllUsers();    
  }

  private async getUser() {
    this.user = await UserStore.GetUser('1');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
