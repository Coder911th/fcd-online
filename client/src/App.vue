<template>
  <div id="app">
    <Layout>
      <Header v-if="!page.hideHeader">
        <div class="app__menu">
          <div class="layout-logo" @click="goTo('/')"></div>
          <Menu
              v-if="!page.hideActions"
              mode="horizontal"
              theme="dark"
              @on-select="goTo($event)">
            <MenuItem
                v-if="role == 'admin'"
                name="/admin">
              <Icon type="md-build"/>Администратирование
            </MenuItem>
            <MenuItem name="/auth">
              <Icon type="md-exit"/>Выйти
            </MenuItem>
          </Menu>
        </div>
      </Header>
      <Content>
        <component
            :style="{
              'min-height': page.hideHeader ? '100vh' : 'calc(100vh - 64px)'
            }"
            :is="page"
            @changePage="goTo($event)"/>
      </Content>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      page: null,
      role: 'admin'
    }
  },
  methods: {
    updatePageTitle() {
      document.title = this.page.title || 'Free Cash Desk'
    },
    // Клиентский роутинг
    // Преобразуем путь в название компонента
    // Vue-компоненты именуются с заглавной буквы
    goTo(target, newState = true) {
      let pageName = target.slice(1).toLowerCase() || 'index'
      let paths = pageName.split('/')
      let lastPath = paths.pop()
      if (!lastPath) {
        pageName = require('./pages/NotFound.vue').default
      } else {
        pageName = [...paths, lastPath[0].toUpperCase() + lastPath.slice(1)].join('/')
      }

      // Если страница не найдена, показываем шаблон страницы 404
      let Page
      try {
        Page = require(`./pages/${pageName}.vue`).default
      } catch (err) {
        Page = require('./pages/NotFound.vue').default
      }

      if (newState) {
        history.pushState(null, null, target)
      }
      this.page = Page
      this.updatePageTitle()
    }
  },
  beforeMount() {
    // Навешиваем обработчик на переходы вперед/назад по истории
    window.onpopstate = () => {
      this.goTo(window.location.pathname, false)
      document.body.scrollIntoView()
      this.updatePageTitle()
    }
    // Загружаем информацию о странице при первой загрузке
    this.goTo(window.location.pathname)
  }
}
</script>

<style>
.app__menu {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 920px;
  height: 60px;
  margin: 0 auto;
}

.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-logo {
    width: 50px;
    height: 50px;
    background: url(../public/logo.svg) no-repeat center center / auto 100%;
    cursor: pointer;
}

.asd {
  display: flex;
  justify-content: space-between;
}

/* .layout-nav {
  width: 420px;
  margin: 0 auto;
} */
</style>
