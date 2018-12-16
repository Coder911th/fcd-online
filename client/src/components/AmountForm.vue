<template>
  <Form ref="form" :model="item" :rules="validators">
    <FormItem label="Название" prop="name">
      <Input v-model="item.name"/>
    </FormItem>
    <FormItem label="Сокращение" prop="short">
      <Input v-model="item.short"/>
    </FormItem>
  </Form>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {
      validators: {
        name: [{required: true, message: 'Заполните обязательное поле', trigger: 'blur'}],
        short: [{required: true, message: 'Заполните обязательное поле', trigger: 'blur'}]
      }
    }
  },
  methods: {
    getEmptyRecord() {
      return 
    },
    validate() {
      return this.$refs.form.validate()
    }
  }
}
</script>
