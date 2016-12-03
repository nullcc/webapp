// web app的一些配置放在这里

// tabbar图标
import IconMain from '../app/components/common/tab/images/tabbar-icon-main.png';
import IconMainHl from '../app/components/common/tab/images/tabbar-icon-main-hl.png';
import IconShoppingCart from '../app/components/common/tab/images/tabbar-icon-shoppingcart.png';
import IconShoppingCartHl from '../app/components/common/tab/images/tabbar-icon-shoppingcart-hl.png';
import IconOrder from '../app/components/common/tab/images/tabbar-icon-orders.png';
import IconOrderHl from '../app/components/common/tab/images/tabbar-icon-orders-hl.png';
import IconMe from '../app/components/common/tab/images/tabbar-icon-me.png';
import IconMeHl from '../app/components/common/tab/images/tabbar-icon-me-hl.png';

module.exports = {
    "title": "web app demo",
    "tabs": [
        {
            "index": 0,
            "name": "首页",
            "icon": IconMain,
            "iconhl": IconMainHl,
            "path": ""
        },
        {
            "index": 1,
            "name": "购物车",
            "icon": IconShoppingCart,
            "iconhl": IconShoppingCartHl,
            "path": "shoppingcart"
        },
        {
            "index": 2,
            "name": "订单",
            "icon": IconOrder,
            "iconhl": IconOrderHl,
            "path": "orders"
        },
        {
            "index": 3,
            "name": "我",
            "icon": IconMe,
            "iconhl": IconMeHl,
            "path": "me"
        }
    ]
}
