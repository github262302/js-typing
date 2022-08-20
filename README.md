# js ts 开发 常用类型声明
已有声明
- ESlint 配置
- WebComponents
  
安装
```
npm install @iced/js-typing 
```

使用方式
ts
```ts
import { WebComponents } from "@iced/js-typing";
class Shadow extends HTMLElement implements WebComponents {}
```
js
```js
import {ESlintConfig} from "@iced/js-typing"
/** @type {ESlintConfig}*/
const rules= {}
```
部分代码
```ts
/**Eslint 配置文件 @see https://cn.eslint.org/ */
interface ESlintConfig  {
    /** 一个环境定义了一组预定义的全局变量
     * @see https://cn.eslint.org/docs/user-guide/configuring#specifying-environments
     * */
    env: Eslint.Env;

    /** 规则
     * @see https://cn.eslint.org/docs/rules/
     * */
    rules: Eslint.Rules;

    /** 插件 */
    plugins: Eslint.Plugins;

    /** ESLint 允许你指定你想要支持的 JavaScript 语言选项 */
    parserOptions: Eslint.ParserOptions;
}
export default ESlintConfig
```
