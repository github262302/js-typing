# js ts 开发 常用类型声明
已有声明
- ESlint 配置
- WebComponents
  
安装
```
npm install @iced/js-typing 
```

使用方式
```ts
import { WebComponents } from "@iced/js-typing";
class Shadow extends HTMLElement implements WebComponents {}
```
```js
import {ESlintConfig} from "@iced/js-typing"
/** @type {ESlintConfig}*/
const rules= {}
```
