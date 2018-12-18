<template>
  <div class="auth">
    <Card class="auth__window" dis-hover>
      <div class="auth__logoBlock">
        <img class="auth__logo" src="../../public/logo_grey.svg" alt="404">
        <p slot="title" class="auth__title">Аутентификация</p>
      </div>
      <Form
          ref="authForm"
          :model="authData"
          :rules="validationRules">
        <FormItem label="Логин" prop="login">
          <Input
              :disabled="waiting"
              v-model="authData.login"
              placeholder="Введите логин"
              @on-enter="auth"/>
        </FormItem>
        <FormItem label="Пароль" prop="password">
          <Input
              :disabled="waiting"
              v-model="authData.password"
              :type="pass"
              placeholder="Введите пароль"
              @on-enter="auth"/>
        </FormItem>
        <FormItem>
          <Button
              long
              type="primary"
              shape="circle"
              :loading="waiting"
              @click="auth">
            <span v-if="waiting">Loading...</span>
            <span v-else>Войти</span>
          </Button>
        </FormItem>
		<FormItem>
          <Button
              long
              type="primary"
              shape="circle"
              :loading="waiting"
              @click="showPass">
            <span v-if="waiting">Loading...</span>
            <span v-else>{{buttShow}}</span>
          </Button>
		</FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
import query from '../libs/query'
import {required} from '../libs/validators'

export default {
  title: 'Аутентификация',
  hideHeader: true,
  data() {
    return {
	  
      waiting: false,
	  pass: "password",
	  buttShow: "Показать пароль",
      authData: {
        login: '',
        password: '',
      },
	  
      validationRules: {
        login: [{ validator: required }],
        password: [{ validator: required }],
      }
    }
  },

  methods: {
    async auth() {
      if (await this.$refs.authForm.validate()) {
        this.waiting = true
        if (await query('Authenticate', this.authData.login, this.authData.password)) {
          this.$emit('pageChanged', '/')
        } else {
          this.waiting = false
        }
      }
    },
	async showPass() {
		if (this.pass == "password"){
		this.pass = "text"
		this.buttShow = "Скрыть пароль"
		
		}
		else {
		this.pass = "password"
		this.buttShow = "Показать пароль"
		}
	}
  }
}
</script>
<style>
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #515a6e;
}

.auth__window {
  width: 330px;
  margin: 10px;
  position: relative;
}

.auth__logoBlock {
  display: flex;
  align-items: center;
}

.auth__logo {
  width: 20%;
}

.auth__title{
  margin: 0 0 0 18px;
  font-size: 28px;
}

</style>

