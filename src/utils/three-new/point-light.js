/*
 * @Description: PointLight 点光源
 * @Author: shenxh
 * @Date: 2022-08-03 16:28:59
 * @LastEditors: shenxh
 * @LastEditTime: 2022-08-03 16:49:00
 */

import * as THREE from 'three'

export default {
  /**
   * @description: 点光源初始化
   * @param {*} color  十六进制光照颜色。 缺省值 0xffffff (白色)
   * @param {*} intensity 光照强度。 缺省值 1
   * @param {*} distance 这个距离表示从光源到光照强度为0的位置。 当设置为0时，光永远不会消失(距离无穷大)。缺省值 0
   * @param {*} decay 沿着光照距离的衰退量。缺省值 1
   * @return {*}
   */
  initPointLight(color, intensity, distance, decay) {
    this.pointLight = new THREE.PointLight(color, intensity, distance, decay)
  },

  /**
   * @description: 点光源位置
   * @param {number} x x 坐标
   * @param {number} y y 坐标
   * @param {number} z z 坐标
   * @return {*}
   */
  setPointLightPosition(x, y, z) {
    this.pointLight.position.set(x, y, z) // 点光源位置
  },
}
