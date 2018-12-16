<template>
  <div>
    <Spin
        fix
        v-if="loading"
        size="large"/>
    <Form ref="AmountDrawerForm" :model="item" :rules="validators">
      <FormItem label="Название" prop="name">
        <Input v-model="item.name"/>
      </FormItem>
      <FormItem label="Сокращение" prop="short">
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
    id: {
      type: Number,
      default: 0
    },
    table: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      item: null,
      loading: true,
      validators: {
        name: [{required: true, message: 'Заполните обязательное поле', trigger: 'blur'}],
        short: [{required: true, message: 'Заполните обязательное поле', trigger: 'blur'}]
      }
    }
  },
  methods: {
    async onSave() {
      if (!await this.$refs.AmountDrawerForm.validate()) {
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
  async beforeMount() {
    if (this.id) {
      this.item = await query('ReadTable', this.table, this.id)
    } else {
      this.item = {
        id: null,
        name: '',
        short: ''
      };
    }
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
