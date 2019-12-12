import Vue from 'vue'
import { AclInstaller, AclCreate, AclRule } from '../../../vue-acl/source'
import router from './index'

Vue.use(AclInstaller)

export default new AclCreate({
  initial: 'editor',
  notfound: {
    path: '/error',
    forwardQueryParams: true,
  },
  router,
  acceptLocalRules: false,
  globalRules: {
    isAdmin: new AclRule('admin').generate(),
    isEditor: new AclRule('editor').generate()
  },
  // middleware: async acl => {
  //   await timeout(2000) // call your api
  //   acl.change('admin')
  // }
})