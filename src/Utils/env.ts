var envSource = process.env

if ((<any>window)._env != null) {
  // window.env is set only from env-override.js which is generated inside docker startup.
  // local run won't have this property initialized.
  envSource = (<any>window)._env
}
const {NODE_ENV} = envSource
export default {
  NODE_ENV,
}
