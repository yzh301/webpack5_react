/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2024-01-09 15:14:45
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2024-01-09 15:15:00
 * @FilePath: \webpack5_vue\src\components\Class.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from "react";

// 装饰器为,组件添加age属性
function addAge(Target: Function) {
  Target.prototype.age = 111;
}
// 使用装饰圈
@addAge
class Class extends PureComponent {
  age?: number;

  render() {
    return <h2>我是类组件---{this.age}</h2>;
  }
}

export default Class;
