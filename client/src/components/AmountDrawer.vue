<template>
  <div>
    <Spin
        fix
        v-if="loading"
        size="large"/>
    <Form>
      <FormItem label="Название">
        <Input v-model="item.name"/>
      </FormItem>
      <FormItem label="Сокращение">
        <Input v-model="item.short"/>
      </FormItem>
    </Form>
    <div class="AmountDrawer__save">
      <Button
          type="primary"
          shape="circle"
          @click="onSave">Сохранить</Button>
    </div>
  </div>
</template>

<script>
import query  from '../libs/query'

export default {
  props: {
    item: {
      type: Object,
      default() {
        return {
          id: null,
          name: '',
          short: ''
        }
      }
    },
    table: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: true
    }
  },
  methods: {
    async onSave() {
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
  async beforeMount() {
    this.loading = false
  }
}
</script>

<style>
.AmountDrawer__save {
  display: flex;
  justify-content: flex-end;
}
</style>
