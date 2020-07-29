/*
 * @Author: your name
 * @Date: 2020-04-13 09:26:22
 * @LastEditTime: 2020-07-29 10:21:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vuenextdemo/src/settings.js
 */

module.exports = {
  title: "next-demo",

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: false,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: false,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: true,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: "production"
};
