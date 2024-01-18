import Vue from 'vue';
import {
  Button,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Step,
  Steps,
  Table,
  TableColumn,
  Form,
  FormItem,
  Input,
  Pagination,
  Select,
  Option,
  Switch,
  Avatar,
  Dropdown,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui';


Vue.use(Dropdown)
Vue.use(Select)
Vue.use(Step)
Vue.use(Steps)
Vue.use(Option)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(Avatar)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;