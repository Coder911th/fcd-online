<template>
  <div>
    <Spin
        fix
        v-if="loading"
        size="large"/>
    <div v-if="!loading">
      <component
          ref="form"
          :is="form"
          :item="item"
          v-model="loading"/>
      <div class="RecordDrawer__save">
        <Button
            type="primary"
            shape="circle"
            @click="onSave">Сохранить</Button>
      </div>
    </div>
  </div>
</template>

<script>
import query  from '../libs/query'

export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    table: {
      type: String,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    format: Object
  },
  data() {
    return {
      item: null,
      loading: true
    }
  },
  methods: {
    async onSave() {
      if (!await this.$refs.form.validate()) {
        return this.$Modal.error({
          title: 'Ошибка валидации',
          content: 'Заполните все поля правильно'
        })
      }

      this.loading = true
      try {
        await query('SaveRecord', this.table, this.item)
        this.$emit('close')
      } catch (errorMessage) {
        this.$Modal.error({
          title: 'При сохранении данных произошла ошибка',
          content: errorMessage
        })
      }
      this.loading = false
    }
  },
  beforeMount() {
    if (this.id) {
      query('ReadTable', this.table, this.id).then(item => {
        this.item = item
        this.loading = false
      })
    } else {
      this.item = Object.assign({}, this.format)
      this.loading = false
    }
  }
}
</script>

<style>
.RecordDrawer__save {
  display: flex;
  justify-content: flex-end;
}
</style>
