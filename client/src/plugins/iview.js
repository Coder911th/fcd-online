import Vue from 'vue'
import {
  Row,
  Col,
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Table,
  Tabs,
  TabPane
} from 'iview'
import lang from 'iview/dist/locale/ru-RU'
import { locale } from 'iview'

locale(lang)

Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Button', Button)
Vue.component('Card', Card)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Input', Input)
Vue.component('Table', Table)
Vue.component('Tabs', Tabs)
Vue.component('TabPane', TabPane)

import 'iview/dist/styles/iview.css'
