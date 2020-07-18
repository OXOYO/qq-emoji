/**
 * Created by OXOYO on 2020/7/18
 *
 * qq表情
 */

export default function () {
  const list = [
    { text: '微笑', code: '/::)', img: '1' },
    { text: '撇嘴', code: '/::~', img: '2' },
    { text: '色', code: '/::B', img: '3' },
    { text: '发呆', code: '/::|', img: '4' },
    { text: '得意', code: '/:8-)', img: '5' },
    { text: '流泪', code: '/::<', img: '6' },
    { text: '害羞', code: '/::$', img: '7' },
    { text: '闭嘴', code: '/::X', img: '8' },
    { text: '睡', code: '/::Z', img: '9' },
    { text: '大哭', code: "/::'(", img: '10' },
    { text: '尴尬', code: '/::-|', img: '11' },
    { text: '发怒', code: '/::@', img: '12' },
    { text: '调皮', code: '/::P', img: '13' },
    { text: '呲牙', code: '/::D', img: '14' },
    { text: '惊讶', code: '/::O', img: '15' },
    { text: '难过', code: '/::(', img: '16' },
    { text: '酷', code: '/::+', img: '17' },
    { text: '冷汗', code: '/:--b', img: '18' },
    { text: '抓狂', code: '/::Q', img: '19' },
    { text: '吐', code: '/::T', img: '20' },
    { text: '偷笑', code: '/:,@P', img: '21' },
    // { text: '可爱', code: '/:,@-D', img: '22' },
    { text: '白眼', code: '/::d', img: '23' },
    { text: '傲慢', code: '/:,@o', img: '24' },
    { text: '饥饿', code: '/::g', img: '25' },
    { text: '困', code: '/:|-)', img: '26' },
    { text: '惊恐', code: '/::!', img: '27' },
    { text: '流汗', code: '/::L', img: '28' },
    { text: '憨笑', code: '/::>', img: '29' },
    // { text: '装逼', code: '/::,@', img: '30' },
    { text: '奋斗', code: '/:,@f', img: '31' },
    { text: '咒骂', code: '/::-S', img: '32' },
    { text: '疑问', code: '/:?', img: '33' },
    { text: '嘘', code: '/:,@x', img: '34' },
    { text: '晕', code: '/:,@@', img: '35' },
    // { text: '折磨', code: '/::8', img: '36' },
    { text: '衰', code: '/:,@!', img: '37' },
    { text: '骷髅', code: '/:!!!', img: '38' },
    { text: '敲打', code: '/:xx', img: '39' },
    { text: '再见', code: '/:bye', img: '40' },
    { text: '擦汗', code: '/:wipe', img: '41' },
    { text: '抠鼻', code: '/:dig', img: '42' },
    { text: '鼓掌', code: '/:handclap', img: '43' },
    { text: '糗大了', code: '/:&-(', img: '44' },
    { text: '坏笑', code: '/:B-)', img: '45' },
    { text: '左哼哼', code: '/:<@', img: '46' },
    { text: '右哼哼', code: '/:@>', img: '47' },
    { text: '哈欠', code: '/::-O', img: '48' },
    { text: '鄙视', code: '/:>-|', img: '49' },
    { text: '委屈', code: '/:P-(', img: '50' },
    { text: '快哭了', code: "/::'|", img: '51' },
    { text: '阴险', code: '/:X-)', img: '52' },
    { text: '亲亲', code: '/::*', img: '53' },
    { text: '吓', code: '/:@x', img: '54' },
    { text: '可怜', code: '/:8*', img: '55' },
    { text: '菜刀', code: '/:pd', img: '56' },
    { text: '西瓜', code: '/:<W>', img: '57' },
    { text: '啤酒', code: '/:beer', img: '58' },
    { text: '篮球', code: '/:basketb', img: '59' },
    { text: '乒乓', code: '/:oo', img: '60' },
    { text: '咖啡', code: '/:coffee', img: '61' },
    { text: '饭', code: '/:eat', img: '62' },
    { text: '猪头', code: '/:pig', img: '63' },
    { text: '玫瑰', code: '/:rose', img: '64' },
    { text: '凋谢', code: '/:fade', img: '65' },
    // { text: '示爱', code: '/:showlove', img: '66' },
    { text: '爱心', code: '/:heart', img: '67' },
    { text: '心碎', code: '/:break', img: '68' },
    { text: '蛋糕', code: '/:cake', img: '69' },
    { text: '闪电', code: '/:li', img: '70' },
    { text: '炸弹', code: '/:bome', img: '71' },
    { text: '刀', code: '/:kn', img: '72' },
    { text: '足球', code: '/:footb', img: '73' },
    { text: '瓢虫', code: '/:ladybug', img: '74' },
    { text: '便便', code: '/:shit', img: '75' },
    { text: '月亮', code: '/:moon', img: '76' },
    { text: '太阳', code: '/:sun', img: '77' },
    { text: '礼物', code: '/:gift', img: '78' },
    { text: '拥抱', code: '/:hug', img: '79' },
    // { text: '赞', code: '/:strong', img: '80' },
    // { text: '踩', code: '/:weak', img: '81' },
    { text: '握手', code: '/:share', img: '82' },
    { text: '胜利', code: '/:v', img: '83' },
    { text: '抱拳', code: '/:@)', img: '84' },
    { text: '勾引', code: '/:jj', img: '85' },
    { text: '拳头', code: '/:@@', img: '86' },
    { text: '差劲', code: '/:bad', img: '87' },
    { text: '爱你', code: '/:lvu', img: '88' },
    { text: 'NO', code: '/:no', img: '89' },
    { text: 'OK', code: '/:ok', img: '90' },
    { text: '爱情', code: '/:love', img: '91' },
    { text: '飞吻', code: '/:<L>', img: '92' },
    { text: '跳跳', code: '/:jump', img: '93' },
    { text: '发抖', code: '/:shake', img: '94' },
    { text: '怄火', code: '/:<O>', img: '95' },
    { text: '转圈', code: '/:circle', img: '96' },
    { text: '磕头', code: '/:kotow', img: '97' },
    { text: '回头', code: '/:turn', img: '98' },
    { text: '跳绳', code: '/:skip', img: '99' },
    // { text: '挥手', code: '/:oY', img: '100' },
    { text: '激动', code: '/:#-0', img: '101' },
    // { text: '街舞', code: '/:hiphot', img: '102' },
    { text: '献吻', code: '/:kiss', img: '103' },
    { text: '左太极', code: '/:<&', img: '104' },
    { text: '右太极', code: '/:&>', img: '105' }
  ]
  // 处理图片
  this.list = list.map(item => {
    let png
    let gif
    try {
      png = require('./emoji/png/' + item.img + '.png')
    } catch (e) {
      console.log(e)
    }
    try {
      gif = require('./emoji/gif/' + item.img + '.gif')
    } catch (e) {
      console.log(e)
    }
    return {
      ...item,
      png,
      gif
    }
  })

  this.emoji2Img = (str, key = 'code') => {
    this.list.forEach(item => {
      if (str && str.indexOf(item[key]) > -1) {
        // 转义字符串中的元字符
        const effectCode = item[key].replace(/[.\\[\]{}()|^$?*+]/g, '\\$&')
        const pattern = new RegExp(`\\[${effectCode}\\]`, 'g')
        const imgSrc = item.gif || item.png
        const img = `<img src='${imgSrc}' class="emoji">`
        str = str.replace(pattern, img)
      }
    })
    return str
  }

  this.img2Emoji = (str, key = 'code') => {
    this.list.forEach(item => {
      const imgSrc = item.gif || item.png
      if (str && str.indexOf(imgSrc) > -1) {
        const img = `<img src="${imgSrc}" class="emoji">`
        const pattern = new RegExp(img, 'g')
        str = str.replace(pattern, `[${item[key]}]`)
      }
    })
    return str
  }
}
