// pages/plaza/japan.js

const { preventDoubleClick, onShare } = require('../../utils/functions.js');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        colors: [
            { name: '萌葱色', hex: '#006e54', color: 'white' },
            { name: '花绿青', hex: '#00a381', color: 'white' },
            { name: '翡翠色', hex: '#38b48b', color: 'white' },
            { name: '青绿', hex: '#00a497', color: 'white' },
            { name: '水浅葱', hex: '#80aba9', color: 'white' },
            { name: '錆浅葱', hex: '#5c9291', color: 'white' },
            { name: '青碧', hex: '#478384', color: 'white' },
            { name: '御召茶', hex: '#43676b', color: 'white' },
            { name: '湊鼠', hex: '#80989b', color: 'white' },
            { name: '高丽纳戸', hex: '#2c4f54', color: 'white' },
            { name: '百入茶', hex: '#1f3134', color: 'white' },
            { name: '錆鼠', hex: '#47585c', color: 'white' },
            { name: '錆铁御纳戸', hex: '#485859', color: 'white' },
            { name: '蓝鼠', hex: '#6c848d', color: 'white' },
            { name: '錆御纳戸', hex: '#53727d', color: 'white' },
            { name: '舛花色', hex: '#5b7e91', color: 'white' },
            { name: '熨斗目花色', hex: '#426579', color: 'white' },
            { name: '御召御纳戸', hex: '#4c6473', color: 'white' },
            { name: '铁御纳戸', hex: '#455765', color: 'white' },
            { name: '绀鼠', hex: '#44617b', color: 'white' },
            { name: '蓝铁', hex: '#393f4c', color: 'white' },
            { name: '青褐', hex: '#393e4f', color: 'white' },
            { name: '褐返', hex: '#203744', color: 'white' },
            { name: '褐色', hex: '#4d4c61', color: 'white' },
            { name: '月白', hex: '#eaf4fc', color: 'black' },
            { name: '白菫色', hex: '#eaedf7', color: 'black' },
            { name: '白花色', hex: '#e8ecef', color: 'black' },
            { name: '蓝白', hex: '#ebf6f7', color: 'black' },
            { name: '白蓝', hex: '#c1e4e9', color: 'black' },
            { name: '水色', hex: '#bce2e8', color: 'black' },
            { name: '瓶覗', hex: '#a2d7dd', color: 'white' },
            { name: '秘色色', hex: '#abced8', color: 'white' },
            { name: '空色', hex: '#a0d8ef', color: 'white' },
            { name: '勿忘草色', hex: '#89c3eb', color: 'white' },
            { name: '青藤色', hex: '#84a2d4', color: 'white' },
            { name: '白群', hex: '#83ccd2', color: 'white' },
            { name: '浅縹', hex: '#84b9cb', color: 'white' },
            { name: '薄花色', hex: '#698aab', color: 'white' },
            { name: '纳戸色', hex: '#008899', color: 'white' },
            { name: '浅葱色', hex: '#00a3af', color: 'white' },
            { name: '花浅葱', hex: '#2a83a2', color: 'white' },
            { name: '新桥色', hex: '#59b9c6', color: 'white' },
            { name: '天色', hex: '#2ca9e1', color: 'white' },
            { name: '露草色', hex: '#38a1db', color: 'white' },
            { name: '青', hex: '#0095d9', color: 'white' },
            { name: '薄蓝', hex: '#0094c8', color: 'white' },
            { name: '縹色', hex: '#2792c3', color: 'white' },
            { name: '绀碧', hex: '#007bbb', color: 'white' },
            { name: '薄群青', hex: '#5383c3', color: 'white' },
            { name: '薄花桜', hex: '#5a79ba', color: 'white' },
            { name: '群青色', hex: '#4c6cb3', color: 'white' },
            { name: '杜若色', hex: '#3e62ad', color: 'white' },
            { name: '瑠璃色', hex: '#1e50a2', color: 'white' },
            { name: '薄縹', hex: '#507ea4', color: 'white' },
            { name: '琉璃绀', hex: '#19448e', color: 'white' },
            { name: '绀琉璃', hex: '#164a84', color: 'white' },
            { name: '蓝色', hex: '#165e83', color: 'white' },
            { name: '青蓝', hex: '#274a78', color: 'white' },
            { name: '深縹', hex: '#2a4073', color: 'white' },
            { name: '绀色', hex: '#223a70', color: 'white' },
            { name: '绀青', hex: '#192f60', color: 'white' },
            { name: '留绀', hex: '#1c305c', color: 'white' },
            { name: '濃蓝', hex: '#0f2350', color: 'white' },
            { name: '铁绀', hex: '#17184b', color: 'white' },
            { name: '漆黑', hex: '#0d0015', color: 'white' },
            { name: '淡藤色', hex: '#bbc8e6', color: 'white' },
            { name: '藤色', hex: '#bbbcde', color: 'white' },
            { name: '红掛空色', hex: '#8491c3', color: 'white' },
            { name: '红碧', hex: '#8491c3', color: 'white' },
            { name: '绀桔梗', hex: '#4d5aaf', color: 'white' },
            { name: '花色', hex: '#4d5aaf', color: 'white' },
            { name: '绀蓝', hex: '#4a488e', color: 'white' },
            { name: '红桔梗', hex: '#4d4398', color: 'white' },
            { name: '桔梗色', hex: '#5654a2', color: 'white' },
            { name: '藤纳戸', hex: '#706caa', color: 'white' },
            { name: '红掛花色', hex: '#68699b', color: 'white' },
            { name: '紫苑色', hex: '#867ba9', color: 'white' },
            { name: '白藤色', hex: '#dbd0e6', color: 'white' },
            { name: '藤紫', hex: '#a59aca', color: 'white' },
            { name: '菫色', hex: '#7058a3', color: 'white' },
            { name: '青紫', hex: '#674598', color: 'white' },
            { name: '菖蒲色', hex: '#674196', color: 'white' },
            { name: '竜胆色', hex: '#9079ad', color: 'white' },
            { name: '江戸紫', hex: '#745399', color: 'white' },
            { name: '本紫', hex: '#65318e', color: 'white' },
            { name: '葡萄色', hex: '#522f60', color: 'white' },
            { name: '深紫', hex: '#493759', color: 'white' },
            { name: '紫黑', hex: '#2e2930', color: 'white' },
            { name: '紫', hex: '#884898', color: 'white' },
            { name: '薄葡萄', hex: '#c0a2c7', color: 'white' },
            { name: '紫绀', hex: '#460e44', color: 'white' },
            { name: '暗红色', hex: '#74325c', color: 'white' },
            { name: '桑の実色', hex: '#55295b', color: 'white' },
            { name: '黄金', hex: '#e6b422', color: 'white' },
            { name: '櫨染', hex: '#d9a62e', color: 'white' },
            { name: '黄朽叶色', hex: '#d3a243', color: 'white' },
            { name: '山吹茶', hex: '#c89932', color: 'white' },
            { name: '芥子色', hex: '#d0af4c', color: 'white' },
            { name: '豆がら茶', hex: '#8b968d', color: 'white' },
            { name: '麹塵', hex: '#6e7955', color: 'white' },
            { name: '山鳩色', hex: '#767c6b', color: 'white' },
            { name: '利休鼠', hex: '#888e7e', color: 'white' },
            { name: '海松茶', hex: '#5a544b', color: 'white' },
            { name: '蓝海松茶', hex: '#56564b', color: 'white' },
            { name: '蓝媚茶', hex: '#56564b', color: 'white' },
            { name: '千歳茶', hex: '#494a41', color: 'white' },
            { name: '岩井茶', hex: '#6b6f59', color: 'white' },
            { name: '仙斎茶', hex: '#474b42', color: 'white' },
            { name: '黑绿', hex: '#333631', color: 'white' },
            { name: '柳煤竹', hex: '#5b6356', color: 'white' },
            { name: '樺茶色', hex: '#726250', color: 'white' },
            { name: '空五倍子色', hex: '#9d896c', color: 'white' },
            { name: '生壁色', hex: '#94846a', color: 'white' },
            { name: '肥後煤竹', hex: '#897858', color: 'white' },
            { name: '媚茶', hex: '#716246', color: 'white' },
            { name: '白橡', hex: '#cbb994', color: 'white' },
            { name: '亜麻色', hex: '#d6c6af', color: 'white' },
            { name: '榛色', hex: '#bfa46f', color: 'white' },
            { name: '灰汁色', hex: '#9e9478', color: 'white' },
            { name: '利休茶', hex: '#a59564', color: 'white' },
            { name: '鶯茶', hex: '#715c1f', color: 'white' },
            { name: '木蘭色', hex: '#c7b370', color: 'white' },
            { name: '砂色', hex: '#dcd3b2', color: 'white' },
            { name: '油色', hex: '#a19361', color: 'white' },
            { name: '利休色', hex: '#8f8667', color: 'white' },
            { name: '梅幸茶', hex: '#887938', color: 'white' },
            { name: '璃寛茶', hex: '#6a5d21', color: 'white' },
            { name: '黄海松茶', hex: '#918754', color: 'white' },
            { name: '菜種油色', hex: '#a69425', color: 'white' },
            { name: '青朽叶', hex: '#ada250', color: 'white' },
            { name: '根岸色', hex: '#938b4b', color: 'white' },
            { name: '鶸茶', hex: '#8c8861', color: 'white' },
            { name: '柳茶', hex: '#a1a46d', color: 'white' },
            { name: '海松色', hex: '#726d40', color: 'white' },
            { name: '鶯色', hex: '#928c36', color: 'white' },
            { name: '绿黄色', hex: '#dccb18', color: 'white' },
            { name: '鶸色', hex: '#d7cf3a', color: 'white' },
            { name: '抹茶色', hex: '#c5c56a', color: 'white' },
            { name: '若草色', hex: '#c3d825', color: 'white' },
            { name: '黄绿', hex: '#b8d200', color: 'black' },
            { name: '若芽色', hex: '#e0ebaf', color: 'black' },
            { name: '若菜色', hex: '#d8e698', color: 'black' },
            { name: '若苗色', hex: '#c7dc68', color: 'white' },
            { name: '青丹', hex: '#99ab4e', color: 'white' },
            { name: '草色', hex: '#7b8d42', color: 'white' },
            { name: '苔色', hex: '#69821b', color: 'white' },
            { name: '萌黄', hex: '#aacf53', color: 'white' },
            { name: '苗色', hex: '#b0ca71', color: 'white' },
            { name: '若叶色', hex: '#b9d08b', color: 'white' },
            { name: '松叶色', hex: '#839b5c', color: 'white' },
            { name: '夏虫色', hex: '#cee4ae', color: 'black' },
            { name: '鶸萌黄', hex: '#82ae46', color: 'white' },
            { name: '柳色', hex: '#a8c97f', color: 'white' },
            { name: '青白橡', hex: '#9ba88d', color: 'white' },
            { name: '柳鼠', hex: '#c8d5bb', color: 'black' },
            { name: '裏叶柳', hex: '#c1d8ac', color: 'black' },
            { name: '山葵色', hex: '#a8bf93', color: 'white' },
            { name: '老竹色', hex: '#769164', color: 'white' },
            { name: '白绿', hex: '#d6e9ca', color: 'black' },
            { name: '淡萌黄', hex: '#93ca76', color: 'white' },
            { name: '柳染', hex: '#93b881', color: 'white' },
            { name: '薄萌葱', hex: '#badcad', color: 'white' },
            { name: '深川鼠', hex: '#97a791', color: 'white' },
            { name: '若绿', hex: '#98d98e', color: 'white' },
            { name: '浅绿', hex: '#88cb7f', color: 'white' },
            { name: '薄绿', hex: '#69b076', color: 'white' },
            { name: '青鈍', hex: '#6b7b6e', color: 'white' },
            { name: '青磁鼠', hex: '#bed2c3', color: 'white' },
            { name: '薄青', hex: '#93b69c', color: 'white' },
            { name: '錆青磁', hex: '#a6c8b2', color: 'white' },
            { name: '绿青色', hex: '#47885e', color: 'white' },
            { name: '千歳绿', hex: '#316745', color: 'white' },
            { name: '若竹色', hex: '#68be8d', color: 'white' },
            { name: '绿', hex: '#3eb370', color: 'white' },
            { name: '常磐色', hex: '#007b43', color: 'white' },
            { name: '千草鼠', hex: '#bed3ca', color: 'white' },
            { name: '千草色', hex: '#92b5a9', color: 'white' },
            { name: '青磁色', hex: '#7ebea5', color: 'white' },
            { name: '青竹色', hex: '#7ebeab', color: 'white' },
            { name: '常磐绿', hex: '#028760', color: 'white' },
            { name: '木賊色', hex: '#3b7960', color: 'white' },
            { name: '天鵞絨', hex: '#2f5d50', color: 'white' },
            { name: '虫襖', hex: '#3a5b52', color: 'white' },
            { name: '革色', hex: '#475950', color: 'white' },
            { name: '深绿', hex: '#00552e', color: 'white' },
            { name: '铁色', hex: '#005243', color: 'white' },
            { name: '小豆色', hex: '#96514d', color: 'white' },
            { name: '枯茶', hex: '#8d6449', color: 'white' },
            { name: '饴色', hex: '#deb068', color: 'white' },
            { name: '骆驼色', hex: '#bf794e', color: 'white' },
            { name: '土色', hex: '#bc763c', color: 'white' },
            { name: '黄唐色', hex: '#b98c46', color: 'white' },
            { name: '桑染', hex: '#b79b5b', color: 'white' },
            { name: '栌色', hex: '#b77b57', color: 'white' },
            { name: '黄橡', hex: '#b68d4c', color: 'white' },
            { name: '丁字染', hex: '#ad7d4c', color: 'white' },
            { name: '香染', hex: '#ad7d4c', color: 'white' },
            { name: '枇杷茶', hex: '#ae7c4f', color: 'white' },
            { name: '芝翫茶', hex: '#ad7e4e', color: 'white' },
            { name: '焦香', hex: '#ae7c58', color: 'white' },
            { name: '胡桃色', hex: '#a86f4c', color: 'white' },
            { name: '渋纸色', hex: '#946243', color: 'white' },
            { name: '朽叶色', hex: '#917347', color: 'white' },
            { name: '桑茶', hex: '#956f29', color: 'white' },
            { name: '路考茶', hex: '#8c7042', color: 'white' },
            { name: '国防色', hex: '#7b6c3e', color: 'white' },
            { name: '伽羅色', hex: '#d8a373', color: 'white' },
            { name: '江戸茶', hex: '#cd8c5c', color: 'white' },
            { name: '樺色', hex: '#cd5e3c', color: 'white' },
            { name: '红鬱金', hex: '#cb8347', color: 'white' },
            { name: '土器色', hex: '#c37854', color: 'white' },
            { name: '狐色', hex: '#c38743', color: 'white' },
            { name: '黄土色', hex: '#c39143', color: 'white' },
            { name: '琥珀色', hex: '#bf783a', color: 'white' },
            { name: '赤茶', hex: '#bb5535', color: 'white' },
            { name: '代赭', hex: '#bb5520', color: 'white' },
            { name: '煉瓦色', hex: '#b55233', color: 'white' },
            { name: '雀茶', hex: '#aa4f37', color: 'white' },
            { name: '団十郎茶', hex: '#9f563a', color: 'white' },
            { name: '柿渋色', hex: '#9f563a', color: 'white' },
            { name: '红鳶', hex: '#9a493f', color: 'white' },
            { name: '灰茶', hex: '#98623c', color: 'white' },
            { name: '茶色', hex: '#965042', color: 'white' },
            { name: '檜皮色', hex: '#965036', color: 'white' },
            { name: '鳶色', hex: '#95483f', color: 'white' },
            { name: '柿茶', hex: '#954e2a', color: 'white' },
            { name: '弁柄色', hex: '#8f2e14', color: 'white' },
            { name: '赤錆色', hex: '#8a3319', color: 'white' },
            { name: '褐色', hex: '#8a3b00', color: 'white' },
            { name: '栗梅', hex: '#852e19', color: 'white' },
            { name: '红檜皮', hex: '#7b4741', color: 'white' },
            { name: '海老茶', hex: '#773c30', color: 'white' },
            { name: '唐茶', hex: '#783c1d', color: 'white' },
            { name: '栗色', hex: '#762f07', color: 'white' },
            { name: '赤銅色', hex: '#752100', color: 'white' },
            { name: '錆色', hex: '#6c3524', color: 'white' },
            { name: '赤褐色', hex: '#683f36', color: 'white' },
            { name: '茶褐色', hex: '#664032', color: 'white' },
            { name: '栗皮茶', hex: '#6d3c32', color: 'white' },
            { name: '黑茶', hex: '#583822', color: 'white' },
            { name: '葡萄茶', hex: '#6c2c2f', color: 'white' },
            { name: '葡萄色', hex: '#640125', color: 'white' },
            { name: '萱草色', hex: '#f8b862', color: 'white' },
            { name: '柑子色', hex: '#f6ad49', color: 'white' },
            { name: '金茶', hex: '#f39800', color: 'white' },
            { name: '蜜柑色', hex: '#f08300', color: 'white' },
            { name: '鉛丹色', hex: '#ec6d51', color: 'white' },
            { name: '黄丹', hex: '#ee7948', color: 'white' },
            { name: '柿色', hex: '#ed6d3d', color: 'white' },
            { name: '黄赤', hex: '#ec6800', color: 'white' },
            { name: '人参色', hex: '#ec6800', color: 'white' },
            { name: '橙色', hex: '#ee7800', color: 'white' },
            { name: '照柿', hex: '#eb6238', color: 'white' },
            { name: '赤橙', hex: '#ea5506', color: 'white' },
            { name: '金赤', hex: '#ea5506', color: 'white' },
            { name: '朱色', hex: '#eb6101', color: 'white' },
            { name: '小麦色', hex: '#e49e61', color: 'white' },
            { name: '丹色', hex: '#e45e32', color: 'white' },
            { name: '黄茶', hex: '#e17b34', color: 'white' },
            { name: '肉桂色', hex: '#dd7a56', color: 'white' },
            { name: '赤朽叶色', hex: '#db8449', color: 'white' },
            { name: '黄櫨染', hex: '#d66a35', color: 'white' },
            { name: '蒲公英色', hex: '#ffd900', color: 'black' },
            { name: '黄色', hex: '#ffd900', color: 'black' },
            { name: '中黄', hex: '#ffea00', color: 'black' },
            { name: '菜の花色', hex: '#ffec47', color: 'black' },
            { name: '黄檗色', hex: '#fef263', color: 'black' },
            { name: '卵色', hex: '#fcd575', color: 'black' },
            { name: '花叶色', hex: '#fbd26b', color: 'black' },
            { name: '刈安色', hex: '#f5e56b', color: 'black' },
            { name: '玉蜀黍色', hex: '#eec362', color: 'black' },
            { name: '金糸雀色', hex: '#ebd842', color: 'black' },
            { name: '黄支子色', hex: '#ffdb4f', color: 'black' },
            { name: '支子色', hex: '#fbca4d', color: 'white' },
            { name: '向日葵色', hex: '#fcc800', color: 'white' },
            { name: '山吹色', hex: '#f8b500', color: 'white' },
            { name: '鬱金色', hex: '#fabf14', color: 'white' },
            { name: '藤黄', hex: '#f7c114', color: 'white' },
            { name: '金色', hex: '#e6b422', color: 'white' },
            { name: '桜色', hex: '#bf242a', color: 'white' },
            { name: '薄桜', hex: '#fdeff2', color: 'black' },
            { name: '桜鼠', hex: '#e9dfe5', color: 'black' },
            { name: '鸨鼠', hex: '#e4d2d8', color: 'black' },
            { name: '虹色', hex: '#f6bfbc', color: 'black' },
            { name: '珊瑚色', hex: '#f5b1aa', color: 'white' },
            { name: '一斤染', hex: '#f5b199', color: 'white' },
            { name: '宍色', hex: '#efab93', color: 'white' },
            { name: '红梅色', hex: '#f2a0a1', color: 'white' },
            { name: '薄红', hex: '#f0908d', color: 'white' },
            { name: '甚三红', hex: '#ee827c', color: 'white' },
            { name: '桃色', hex: '#f09199', color: 'white' },
            { name: '鸨色', hex: '#f4b3c2', color: 'white' },
            { name: '撫子色', hex: '#eebbcb', color: 'white' },
            { name: '灰梅', hex: '#e8d3c7', color: 'black' },
            { name: '灰桜', hex: '#e8d3d1', color: 'black' },
            { name: '淡红藤', hex: '#e6cde3', color: 'black' },
            { name: '石竹色', hex: '#e5abbe', color: 'white' },
            { name: '薄红梅', hex: '#e597b2', color: 'white' },
            { name: '桃花色', hex: '#e198b4', color: 'white' },
            { name: '水柿', hex: '#e4ab9b', color: 'white' },
            { name: 'ときがら茶', hex: '#e09e87', color: 'white' },
            { name: '退红', hex: '#d69090', color: 'white' },
            { name: '薄柿', hex: '#d4acad', color: 'white' },
            { name: '长春色', hex: '#c97586', color: 'white' },
            { name: '梅鼠', hex: '#c099a0', color: 'white' },
            { name: '鸨浅葱', hex: '#b88884', color: 'white' },
            { name: '梅染', hex: '#b48a76', color: 'white' },
            { name: '苏芳香', hex: '#a86965', color: 'white' },
            { name: '浅苏芳', hex: '#a25768', color: 'white' },
            { name: '真朱', hex: '#ec6d71', color: 'white' },
            { name: '赤紫', hex: '#eb6ea5', color: 'white' },
            { name: '躑躅色', hex: '#e95295', color: 'white' },
            { name: '牡丹色', hex: '#e7609e', color: 'white' },
            { name: '今样色', hex: '#d0576b', color: 'white' },
            { name: '中红', hex: '#c85179', color: 'white' },
            { name: '蔷薇色', hex: '#e9546b', color: 'white' },
            { name: '韩红', hex: '#e95464', color: 'white' },
            { name: '银朱', hex: '#c85554', color: 'white' },
            { name: '赤红', hex: '#c53d43', color: 'white' },
            { name: '红緋', hex: '#e83929', color: 'white' },
            { name: '赤', hex: '#e60033', color: 'white' },
            { name: '猩緋', hex: '#e2041b', color: 'white' },
            { name: '红', hex: '#d7003a', color: 'white' },
            { name: '深緋', hex: '#c9171e', color: 'white' },
            { name: '绯色', hex: '#d3381c', color: 'white' },
            { name: '赤丹', hex: '#ce5242', color: 'white' },
            { name: '红赤', hex: '#d9333f', color: 'white' },
            { name: '胭脂', hex: '#b94047', color: 'white' },
            { name: '朱緋', hex: '#ba2636', color: 'white' },
            { name: '茜色', hex: '#b7282e', color: 'white' },
            { name: '深海老茶', hex: '#a73836', color: 'white' },
            { name: '苏芳', hex: '#9e3d3f', color: 'white' },
            { name: '真红', hex: '#a22041', color: 'white' },
            { name: '浓红', hex: '#a22041', color: 'white' },
            { name: '象牙色', hex: '#f8f4e6', color: 'black' },
            { name: '练色', hex: '#ede4cd', color: 'black' },
            { name: '灰白色', hex: '#e9e4d4', color: 'black' },
            { name: '蒸栗色', hex: '#ede1a9', color: 'black' },
            { name: '女郎花', hex: '#f2f2b0', color: 'black' },
            { name: '枯草色', hex: '#e4dc8a', color: 'black' },
            { name: '淡黄', hex: '#f8e58c', color: 'black' },
            { name: '白茶', hex: '#ddbb99', color: 'white' },
            { name: '赤白橡', hex: '#d7a98c', color: 'white' },
            { name: '洗柿', hex: '#f2c9ac', color: 'white' },
            { name: '鸟の子色', hex: '#fff1cf', color: 'black' },
            { name: '蜂蜜色', hex: '#fddea5', color: 'black' },
            { name: '肌色', hex: '#fce2c4', color: 'black' },
            { name: '薄卵色', hex: '#fde8d0', color: 'black' },
            { name: '雄黄', hex: '#f9c89b', color: 'black' },
            { name: '洒落柿', hex: '#f7bd8f', color: 'white' },
            { name: '赤香', hex: '#f6b894', color: 'white' },
            { name: '砥粉色', hex: '#f4dda5', color: 'black' },
            { name: '肉色', hex: '#f1bf99', color: 'white' },
            { name: '人色', hex: '#f1bf99', color: 'white' },
            { name: '丁子色', hex: '#efcd9a', color: 'white' },
            { name: '香色', hex: '#efcd9a', color: 'white' },
            { name: '薄香', hex: '#f0cfa0', color: 'white' },
            { name: '浅黄', hex: '#edd3a1', color: 'white' },
            { name: '枯色', hex: '#e0c38c', color: 'white' },
            { name: '淡香', hex: '#f3bf88', color: 'white' },
            { name: '杏色', hex: '#f7b977', color: 'white' },
            { name: '东云色', hex: '#f19072', color: 'white' },
            { name: '曙色', hex: '#f19072', color: 'white' },
            { name: '珊瑚朱色', hex: '#ee836f', color: 'white' },
            { name: '深支子', hex: '#eb9b6f', color: 'white' },
            { name: '纁', hex: '#e0815e', color: 'white' },
            { name: '浅绯', hex: '#df7163', color: 'white' },
            { name: '真赭', hex: '#d57c6b', color: 'white' },
            { name: '洗朱', hex: '#d0826c', color: 'white' },
            { name: '遠州茶', hex: '#ca8269', color: 'white' },
            { name: '红桦色', hex: '#bb5548', color: 'white' },
            { name: '赭', hex: '#ab6953', color: 'white' },
            { name: '古代紫', hex: '#895b8a', color: 'white' },
            { name: '茄子绀', hex: '#824880', color: 'white' },
            { name: '二蓝', hex: '#915c8b', color: 'white' },
            { name: '京紫', hex: '#9d5b8b', color: 'white' },
            { name: '蒲葡', hex: '#7a4171', color: 'white' },
            { name: '若紫', hex: '#bc64a4', color: 'white' },
            { name: '红紫', hex: '#b44c97', color: 'white' },
            { name: '梅紫', hex: '#aa4c8f', color: 'white' },
            { name: '菖蒲色', hex: '#cc7eb1', color: 'white' },
            { name: '红藤色', hex: '#cca6bf', color: 'white' },
            { name: '浅紫', hex: '#c4a3bf', color: 'white' },
            { name: '紫水晶', hex: '#e7e7eb', color: 'black' },
            { name: '薄梅鼠', hex: '#dcd6d9', color: 'black' },
            { name: '晓鼠', hex: '#d3cfd9', color: 'black' },
            { name: '牡丹鼠', hex: '#d3ccd6', color: 'white' },
            { name: '霞色', hex: '#c8c2c6', color: 'white' },
            { name: '藤鼠', hex: '#a6a5c4', color: 'white' },
            { name: '半色', hex: '#a69abd', color: 'white' },
            { name: '薄色', hex: '#a89dac', color: 'white' },
            { name: '薄鼠', hex: '#9790a4', color: 'white' },
            { name: '鳩羽鼠', hex: '#9e8b8e', color: 'white' },
            { name: '鳩羽色', hex: '#95859c', color: 'white' },
            { name: '桔梗鼠', hex: '#95949a', color: 'white' },
            { name: '紫鼠', hex: '#71686c', color: 'white' },
            { name: '葡萄鼠', hex: '#705b67', color: 'white' },
            { name: '濃色', hex: '#634950', color: 'white' },
            { name: '紫鳶', hex: '#5f414b', color: 'white' },
            { name: '濃鼠', hex: '#4f455c', color: 'white' },
            { name: '藤煤竹', hex: '#5a5359', color: 'white' },
            { name: '滅紫', hex: '#594255', color: 'white' },
            { name: '红消鼠', hex: '#524748', color: 'white' },
            { name: '似せ紫', hex: '#513743', color: 'white' },
            { name: '灰黄绿', hex: '#e6eae3', color: 'black' },
            { name: '蕎麦切色', hex: '#d4dcd6', color: 'black' },
            { name: '薄雲鼠', hex: '#d4dcda', color: 'black' },
            { name: '枯野色', hex: '#d3cbc6', color: 'white' },
            { name: '潤色', hex: '#c8c2be', color: 'white' },
            { name: '利休白茶', hex: '#b3ada0', color: 'white' },
            { name: '茶鼠', hex: '#a99e93', color: 'white' },
            { name: '胡桃染', hex: '#a58f86', color: 'white' },
            { name: '江戸鼠', hex: '#928178', color: 'white' },
            { name: '煤色', hex: '#887f7a', color: 'white' },
            { name: '丁子茶', hex: '#b4866b', color: 'white' },
            { name: '柴染', hex: '#b28c6e', color: 'white' },
            { name: '宗伝唐茶', hex: '#a16d5d', color: 'white' },
            { name: '砺茶', hex: '#9f6f55', color: 'white' },
            { name: '煎茶色', hex: '#8c6450', color: 'white' },
            { name: '銀煤竹', hex: '#856859', color: 'white' },
            { name: '黄枯茶', hex: '#765c47', color: 'white' },
            { name: '煤竹色', hex: '#6f514c', color: 'white' },
            { name: '焦茶', hex: '#6f4b3e', color: 'white' },
            { name: '黑橡', hex: '#544a47', color: 'white' },
            { name: '憲法色', hex: '#543f32', color: 'white' },
            { name: '涅色', hex: '#554738', color: 'white' },
            { name: '檳榔子染', hex: '#433d3c', color: 'white' },
            { name: '黑鳶', hex: '#432f2f', color: 'white' },
            { name: '赤墨', hex: '#3f312b', color: 'white' },
            { name: '黑红', hex: '#302833', color: 'white' },
            { name: '白', hex: '#ffffff', color: 'black' },
            { name: '胡粉色', hex: '#fffffc', color: 'black' },
            { name: '卯の花色', hex: '#f7fcfe', color: 'black' },
            { name: '白磁', hex: '#f8fbf8', color: 'black' },
            { name: '生成り色', hex: '#fbfaf5', color: 'black' },
            { name: '乳白色', hex: '#f3f3f3', color: 'black' },
            { name: '白練', hex: '#f3f3f2', color: 'black' },
            { name: '素色', hex: '#eae5e3', color: 'black' },
            { name: '白梅鼠', hex: '#e5e4e6', color: 'black' },
            { name: '白鼠', hex: '#dcdddd', color: 'black' },
            { name: '絹鼠', hex: '#dddcd6', color: 'black' },
            { name: '灰青', hex: '#c0c6c9', color: 'black' },
            { name: '銀鼠', hex: '#afafb0', color: 'white' },
            { name: '薄鈍', hex: '#adadad', color: 'white' },
            { name: '薄墨色', hex: '#a3a3a2', color: 'white' },
            { name: '錫色', hex: '#9ea1a3', color: 'white' },
            { name: '素鼠', hex: '#9fa0a0', color: 'white' },
            { name: '鼠色', hex: '#949495', color: 'white' },
            { name: '源氏鼠', hex: '#888084', color: 'white' },
            { name: '灰色', hex: '#7d7d7d', color: 'white' },
            { name: '鉛色', hex: '#7b7c7d', color: 'white' },
            { name: '鈍色', hex: '#727171', color: 'white' },
            { name: '墨', hex: '#595857', color: 'white' },
            { name: '丼鼠', hex: '#595455', color: 'white' },
            { name: '消炭色', hex: '#524e4d', color: 'white' },
            { name: '蓝墨茶', hex: '#474a4d', color: 'white' },
            { name: '羊羹色', hex: '#383c3c', color: 'white' },
            { name: '蝋色', hex: '#2b2b2b', color: 'white' },
            { name: '黑', hex: '#2b2b2b', color: 'white' },
            { name: '烏羽色', hex: '#180614', color: 'white' },
            { name: '铁黑', hex: '#281a14', color: 'white' },
            { name: '濡羽色', hex: '#000b00', color: 'white' },
            { name: '黑壇', hex: '#250d00', color: 'white' },
            { name: '憲法黑茶', hex: '#241a08', color: 'white' },
            { name: '暗黑色', hex: '#16160e', color: 'white' }
        ]
    },

    jump: function (event) {
        if (!this.data.buttonClicked) {
            preventDoubleClick(this);
            const name = event.currentTarget.dataset.name;
            const color = event.currentTarget.dataset.color;
            wx.navigateTo({
                url: '/pages/web/colordetail?color=' + color + '&name=' + name
            });
        }
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        return onShare('日本传统色彩');
    }
})