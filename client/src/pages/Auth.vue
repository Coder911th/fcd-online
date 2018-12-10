<template>
  <Row class="auth">
    <Col>
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
    </Col>
  </Row>
</template>

<script>
import query from '../libs/query'
import {required} from '../libs/validators'

export default {
  title: 'Аутентификация',
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
        this.$emit('changePage', '/')
      }
    }
  }
}
</script>
<style>
.auth {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.auth__window {
  width: 300px;
  margin: 10px;
}
</style>

