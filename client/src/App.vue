<template>
  <div id="app">
    <component
        :is="page"
        @changePage="goTo($event)"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      page: null
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
      pageName = pageName[0].toUpperCase() + pageName.slice(1)

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
</style>
