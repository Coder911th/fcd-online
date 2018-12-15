<template>
  <div class="auth">
    <Card class="auth__window" dis-hover>
      <p slot="title">Авторизация</p>
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
              type="password"
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
      authData: {
        login: '',
        password: ''
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
          this.$emit('changePage', '/')
        } else {
          this.waiting = false
        }
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
}

.auth__window {
  width: 300px;
  margin: 10px;
  position: relative;
}
</style>

