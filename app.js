// ========== 数据层 ==========
const restaurants = [
  {
    id: 1, name: '老王麻辣烫', category: '中餐', rating: 4.8, monthlySales: 3856,
    deliveryTime: '30分钟', deliveryFee: '免配送费', minPrice: 20,
    cover: 'bg-gradient-to-br from-red-500 to-orange-400', emoji: '🍲',
    tags: ['品牌连锁', '评分最高'],
    menu: [
      { cat: '招牌推荐', items: [
        { id: 101, name: '经典麻辣烫', price: 28, sales: 2134, desc: '自选6荤6素，骨汤熬制', img: '🍜' },
        { id: 102, name: '肥牛麻辣烫', price: 38, sales: 1876, desc: '澳洲肥牛卷，配上秘制麻辣汤底', img: '🥩' },
        { id: 103, name: '海鲜麻辣烫', price: 45, sales: 1567, desc: '大虾、鱿鱼、花蛤，鲜香四溢', img: '🦐' },
      ]},
      { cat: '主食小食', items: [
        { id: 104, name: '蛋炒饭', price: 12, sales: 987, desc: '粒粒分明，蛋香浓郁', img: '🍚' },
        { id: 105, name: '炸鸡翅 (5只)', price: 18, sales: 2341, desc: '外酥里嫩，吮指回味', img: '🍗' },
        { id: 106, name: '酸梅汤', price: 8, sales: 3210, desc: '冰镇解辣，酸甜可口', img: '🥤' },
      ]},
    ]
  },
  {
    id: 2, name: '张三汉堡', category: '快餐', rating: 4.6, monthlySales: 5678,
    deliveryTime: '20分钟', deliveryFee: '¥3', minPrice: 15,
    cover: 'bg-gradient-to-br from-amber-500 to-yellow-400', emoji: '🍔',
    tags: ['销量冠军'],
    menu: [
      { cat: '超值套餐', items: [
        { id: 201, name: '经典牛肉堡套餐', price: 32, sales: 4321, desc: '牛肉堡+薯条+可乐', img: '🍔' },
        { id: 202, name: '双层鸡腿堡套餐', price: 38, sales: 3890, desc: '双倍鸡肉，双倍满足', img: '🍗' },
        { id: 203, name: '鳕鱼堡套餐', price: 35, sales: 2109, desc: '深海鳕鱼，外酥里嫩', img: '🐟' },
      ]},
      { cat: '小食饮品', items: [
        { id: 204, name: '大薯条', price: 10, sales: 6543, desc: '金黄酥脆，现炸现送', img: '🍟' },
        { id: 205, name: '圣代冰淇淋', price: 12, sales: 3456, desc: '香草巧克力双拼', img: '🍦' },
        { id: 206, name: '冰可乐(大)', price: 8, sales: 5432, desc: '加冰爽口', img: '🥤' },
      ]},
    ]
  },
  {
    id: 3, name: '一点点奶茶', category: '奶茶', rating: 4.9, monthlySales: 8934,
    deliveryTime: '25分钟', deliveryFee: '免配送费', minPrice: 15,
    cover: 'bg-gradient-to-br from-pink-500 to-purple-400', emoji: '🧋',
    tags: ['人气爆棚', '新店特惠'],
    menu: [
      { cat: '人气推荐', items: [
        { id: 301, name: '波霸奶茶', price: 16, sales: 7654, desc: '大颗珍珠Q弹有嚼劲', img: '🧋' },
        { id: 302, name: '四季奶青', price: 15, sales: 6543, desc: '清爽茶底搭配鲜奶', img: '🍵' },
        { id: 303, name: '冰淇淋红茶', price: 18, sales: 5432, desc: '红茶+香草冰淇淋', img: '🍦' },
      ]},
      { cat: '鲜果系列', items: [
        { id: 304, name: '葡萄柚绿', price: 20, sales: 4321, desc: '鲜榨葡萄柚+绿茶', img: '🍊' },
        { id: 305, name: '柠檬养乐多', price: 17, sales: 3456, desc: '清爽解腻', img: '🍋' },
        { id: 306, name: '芒果冰沙', price: 22, sales: 2987, desc: '新鲜芒果打成冰沙', img: '🥭' },
      ]},
    ]
  },
  {
    id: 4, name: '海底捞火锅', category: '中餐', rating: 4.7, monthlySales: 2100,
    deliveryTime: '45分钟', deliveryFee: '¥5', minPrice: 50,
    cover: 'bg-gradient-to-br from-red-600 to-red-400', emoji: '🥘',
    tags: ['品质保证'],
    menu: [
      { cat: '火锅套餐', items: [
        { id: 401, name: '双人火锅套餐', price: 128, sales: 1567, desc: '肥牛+羊肉+蔬菜拼盘+锅底', img: '🍲' },
        { id: 402, name: '毛肚火锅套餐', price: 158, sales: 1234, desc: '鲜毛肚+黄喉+鹅肠+锅底', img: '🥘' },
        { id: 403, name: '海鲜火锅套餐', price: 198, sales: 987, desc: '大虾+鲍鱼+扇贝+锅底', img: '🦞' },
      ]},
      { cat: '单点菜品', items: [
        { id: 404, name: '手切肥牛', price: 48, sales: 2345, desc: '澳洲M5和牛', img: '🥩' },
        { id: 405, name: '虾滑', price: 38, sales: 1876, desc: '手打虾滑，Q弹爽滑', img: '🦐' },
        { id: 406, name: '菌菇拼盘', price: 28, sales: 1654, desc: '多种鲜菌', img: '🍄' },
      ]},
    ]
  },
  {
    id: 5, name: '樱花日料', category: '日料', rating: 4.8, monthlySales: 1230,
    deliveryTime: '35分钟', deliveryFee: '免配送费', minPrice: 30,
    cover: 'bg-gradient-to-br from-pink-400 to-rose-300', emoji: '🍣',
    tags: ['精致日料'],
    menu: [
      { cat: '刺身寿司', items: [
        { id: 501, name: '三文鱼刺身', price: 68, sales: 876, desc: '挪威空运三文鱼，厚切8片', img: '🍣' },
        { id: 502, name: '综合寿司拼盘', price: 88, sales: 654, desc: '12贯不同口味', img: '🍱' },
        { id: 503, name: '金枪鱼手卷', price: 28, sales: 432, desc: '蓝鳍金枪鱼+醋饭', img: '🌯' },
      ]},
      { cat: '热食', items: [
        { id: 504, name: '日式拉面', price: 38, sales: 1234, desc: '豚骨汤底，溏心蛋+叉烧', img: '🍜' },
        { id: 505, name: '天妇罗拼盘', price: 42, sales: 987, desc: '虾+蔬菜天妇罗', img: '🍤' },
        { id: 506, name: '照烧鸡腿饭', price: 35, sales: 1567, desc: '去骨鸡腿，照烧酱汁', img: '🍗' },
      ]},
    ]
  },
  {
    id: 6, name: '东北烧烤王', category: '烧烤', rating: 4.5, monthlySales: 3400,
    deliveryTime: '40分钟', deliveryFee: '¥3', minPrice: 25,
    cover: 'bg-gradient-to-br from-orange-700 to-amber-500', emoji: '🍖',
    tags: ['深夜食堂'],
    menu: [
      { cat: '烤串必点', items: [
        { id: 601, name: '羊肉串 (10串)', price: 35, sales: 3456, desc: '呼伦贝尔羊肉，秘制调料', img: '🍢' },
        { id: 602, name: '牛肉串 (10串)', price: 38, sales: 2987, desc: '精选牛里脊，鲜嫩多汁', img: '🥩' },
        { id: 603, name: '烤鸡翅 (5只)', price: 22, sales: 2345, desc: '蜜汁口味', img: '🍗' },
        { id: 604, name: '烤茄子', price: 12, sales: 1890, desc: '蒜蓉粉丝烤茄子', img: '🍆' },
      ]},
    ]
  },
  {
    id: 7, name: '甜蜜时光蛋糕', category: '甜品', rating: 4.9, monthlySales: 4567,
    deliveryTime: '30分钟', deliveryFee: '免配送费', minPrice: 20,
    cover: 'bg-gradient-to-br from-pink-300 to-purple-300', emoji: '🍰',
    tags: ['网红店'],
    menu: [
      { cat: '招牌蛋糕', items: [
        { id: 701, name: '提拉米苏', price: 32, sales: 2345, desc: '意大利经典，咖啡酒香浓郁', img: '🍰' },
        { id: 702, name: '芒果千层', price: 28, sales: 1987, desc: '薄如蝉翼的千层皮+鲜芒果', img: '🥞' },
        { id: 703, name: '黑森林蛋糕', price: 35, sales: 1678, desc: '三层巧克力海绵蛋糕', img: '🎂' },
      ]},
      { cat: '面包', items: [
        { id: 704, name: '可颂 (3个)', price: 18, sales: 3456, desc: '法式黄油可颂', img: '🥐' },
        { id: 705, name: '北海道吐司', price: 22, sales: 2890, desc: '手工揉制，奶香柔软', img: '🍞' },
      ]},
    ]
  },
  {
    id: 8, name: '兰州拉面馆', category: '中餐', rating: 4.6, monthlySales: 6700,
    deliveryTime: '25分钟', deliveryFee: '¥2', minPrice: 15,
    cover: 'bg-gradient-to-br from-green-600 to-emerald-400', emoji: '🍜',
    tags: ['老字号'],
    menu: [
      { cat: '面食', items: [
        { id: 801, name: '兰州牛肉面', price: 18, sales: 4567, desc: '一清二白三红四绿五黄', img: '🍜' },
        { id: 802, name: '大盘鸡拌面', price: 32, sales: 3456, desc: '新疆大盘鸡配宽面', img: '🍝' },
        { id: 803, name: '油泼面', price: 15, sales: 2987, desc: '陕西风味，辣椒香气扑鼻', img: '🌶️' },
      ]},
      { cat: '小菜', items: [
        { id: 804, name: '凉皮', price: 10, sales: 3456, desc: '酸辣爽口', img: '🥗' },
        { id: 805, name: '肉夹馍', price: 12, sales: 4321, desc: '老潼关肉夹馍', img: '🥙' },
      ]},
    ]
  },
];

// 构建全局物品索引，方便按ID查找
const allItems = {};
restaurants.forEach(r => {
  r.menu.forEach(cat => {
    cat.items.forEach(item => {
      allItems[item.id] = { ...item, restaurantId: r.id, restaurantName: r.name };
    });
  });
});

// ========== 状态 ==========
const state = {
  currentPage: 'home',
  currentRestaurantId: null,
  currentOrderId: null,
  currentSort: 'rating',
  currentCat: 'all',
  cart: [],
  orders: JSON.parse(localStorage.getItem('mt_orders') || '[]'),
  menuCat: null,
};

function saveOrders() {
  localStorage.setItem('mt_orders', JSON.stringify(state.orders));
}

// ========== 购物车 ==========
function getCartCount() {
  return state.cart.reduce((sum, i) => sum + i.qty, 0);
}

function getCartTotal() {
  return state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function getCartItem(itemId) {
  return state.cart.find(i => i.id === itemId);
}

function addToCart(itemId) {
  const item = allItems[itemId];
  if (!item) return;

  const existing = getCartItem(itemId);
  if (existing) {
    existing.qty++;
  } else {
    state.cart.push({ id: item.id, name: item.name, price: item.price, img: item.img, qty: 1, restaurantId: item.restaurantId });
  }
  refreshUI();
}

function removeFromCart(itemId) {
  const existing = getCartItem(itemId);
  if (!existing) return;
  if (existing.qty > 1) {
    existing.qty--;
  } else {
    state.cart = state.cart.filter(i => i.id !== itemId);
  }
  refreshUI();
}

function clearCart() {
  state.cart = [];
  refreshUI();
  closeCartDrawer();
}

// ========== UI 刷新 ==========
function refreshUI() {
  updateCartBar();
  updateCartBadge();
  if (state.currentPage === 'restaurant') renderMenuItems();
  renderCartItems();
  renderCheckoutItems();
}

function updateCartBar() {
  const count = getCartCount();
  const total = getCartTotal();
  const totalEl = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (totalEl) totalEl.textContent = `¥${total.toFixed(2)}`;
  if (checkoutBtn) {
    checkoutBtn.disabled = count === 0;
    if (count === 0) {
      checkoutBtn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
      checkoutBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
  }
}

function updateCartBadge() {
  const count = getCartCount();
  const badge = document.getElementById('cartCountBadge');
  const countEl = document.getElementById('cartItemCount');
  if (badge) {
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
  }
  if (countEl) {
    countEl.textContent = count;
    countEl.classList.toggle('hidden', count === 0);
  }
}

// ========== 购物车抽屉 ==========
function toggleCart() {
  const overlay = document.getElementById('cartOverlay');
  const drawer = document.getElementById('cartDrawer');
  if (!overlay || !drawer) return;

  const isOpen = !drawer.classList.contains('translate-y-full');
  if (isOpen) {
    closeCartDrawer();
  } else {
    if (state.cart.length === 0) return;
    renderCartItems();
    overlay.classList.remove('hidden');
    drawer.classList.remove('translate-y-full');
  }
}

function closeCartDrawer() {
  const overlay = document.getElementById('cartOverlay');
  const drawer = document.getElementById('cartDrawer');
  if (overlay) overlay.classList.add('hidden');
  if (drawer) drawer.classList.add('translate-y-full');
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const subtotal = document.getElementById('cartSubtotal');
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = '<div class="text-center text-gray-400 py-6">购物车是空的</div>';
  } else {
    container.innerHTML = state.cart.map(item => `
      <div class="flex items-center gap-3 py-3 border-b border-gray-50 dark:border-gray-800">
        <span class="text-2xl">${item.img}</span>
        <div class="flex-1 min-w-0">
          <div class="text-sm font-medium dark:text-white truncate">${item.name}</div>
          <div class="text-xs text-mt font-bold">¥${item.price}</div>
        </div>
        <div class="flex items-center gap-2">
          <button data-action="remove" data-item-id="${item.id}" class="cart-btn w-7 h-7 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm font-bold">−</button>
          <span class="w-5 text-center text-sm font-bold dark:text-white">${item.qty}</span>
          <button data-action="add" data-item-id="${item.id}" class="cart-btn w-7 h-7 rounded-full bg-mt flex items-center justify-center text-black font-bold text-sm">+</button>
        </div>
      </div>
    `).join('');
  }
  if (subtotal) subtotal.textContent = `¥${getCartTotal().toFixed(2)}`;
}

// 购物车事件委托
document.getElementById('cartItems').addEventListener('click', (e) => {
  const btn = e.target.closest('.cart-btn');
  if (!btn) return;
  const itemId = parseInt(btn.dataset.itemId);
  const action = btn.dataset.action;
  if (action === 'add') addToCart(itemId);
  if (action === 'remove') removeFromCart(itemId);
});

// ========== 路由 ==========
function navigate(page, data) {
  if (data !== undefined && page === 'restaurant') state.currentRestaurantId = data;
  if (data !== undefined && page === 'tracking') state.currentOrderId = data;

  state.currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  switch (page) {
    case 'home':
      document.getElementById('page-home').classList.add('active');
      renderRestaurantList();
      break;
    case 'restaurant':
      document.getElementById('page-restaurant').classList.add('active');
      renderRestaurantDetail();
      break;
    case 'checkout':
      if (state.cart.length === 0) { navigate('restaurant'); return; }
      document.getElementById('page-checkout').classList.add('active');
      renderCheckoutItems();
      break;
    case 'tracking':
      document.getElementById('page-tracking').classList.add('active');
      renderTracking();
      break;
    case 'orders':
      document.getElementById('page-orders').classList.add('active');
      renderOrders();
      break;
  }
  updateNavHighlight();
  window.scrollTo(0, 0);
}

function updateNavHighlight() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    const page = btn.dataset.page;
    const active = page === state.currentPage ||
      (['restaurant', 'checkout'].includes(state.currentPage) && page === 'home') ||
      (state.currentPage === 'tracking' && page === 'orders');
    if (active) {
      btn.classList.add('text-mt');
      btn.classList.remove('text-gray-400', 'dark:text-gray-500');
    } else {
      btn.classList.remove('text-mt');
      btn.classList.add('text-gray-400', 'dark:text-gray-500');
    }
  });
}

// ========== 首页 ==========
function renderRestaurantList() {
  const container = document.getElementById('restaurantList');
  if (!container) return;

  let filtered = restaurants.slice();
  if (state.currentCat !== 'all') {
    filtered = filtered.filter(r => r.category === state.currentCat);
  }
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(r => r.name.toLowerCase().includes(q) || r.category.toLowerCase().includes(q));
  }
  filtered.sort((a, b) => {
    if (state.currentSort === 'rating') return b.rating - a.rating;
    if (state.currentSort === 'sales') return b.monthlySales - a.monthlySales;
    if (state.currentSort === 'time') return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
    return 0;
  });

  container.innerHTML = filtered.length ? filtered.map(r => `
    <div data-restaurant-id="${r.id}" class="restaurant-card bg-white dark:bg-mt-card rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 cursor-pointer hover:shadow-md transition-shadow active:scale-[0.98]">
      <div class="${r.cover} h-32 relative flex items-center justify-center text-5xl">
        <span>${r.emoji}</span>
        <div class="absolute top-2 left-2 flex gap-1">
          ${r.tags.map(t => `<span class="bg-black/30 backdrop-blur text-white text-xs px-2 py-0.5 rounded-full">${t}</span>`).join('')}
        </div>
        <div class="absolute bottom-2 right-2 bg-black/40 backdrop-blur text-white text-xs px-2 py-0.5 rounded-full">${r.deliveryTime}</div>
      </div>
      <div class="p-3">
        <div class="flex items-center justify-between">
          <h3 class="font-bold dark:text-white truncate">${r.name}</h3>
          <span class="text-xs text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400 px-1.5 py-0.5 rounded whitespace-nowrap">${r.deliveryFee}</span>
        </div>
        <div class="flex items-center gap-2 mt-1">
          <span class="text-yellow-500 text-xs">★ ${r.rating}</span>
          <span class="text-gray-400 text-xs">月售${r.monthlySales}</span>
        </div>
        <div class="text-xs text-gray-400 mt-1">起送¥${r.minPrice}</div>
      </div>
    </div>
  `).join('') : '<div class="text-center text-gray-400 py-16">没有找到商家</div>';
}

// 商家卡片点击委托
document.getElementById('restaurantList').addEventListener('click', (e) => {
  const card = e.target.closest('.restaurant-card');
  if (!card) return;
  const id = parseInt(card.dataset.restaurantId);
  if (id) navigate('restaurant', id);
});

// ========== 商家详情 ==========
function renderRestaurantDetail() {
  const r = restaurants.find(r => r.id === state.currentRestaurantId);
  if (!r) return navigate('home');

  document.getElementById('restoName').textContent = r.name;
  document.getElementById('restoHeader').className = `${r.cover} h-44 relative flex items-center justify-center text-7xl`;
  document.getElementById('restoHeader').innerHTML = `<span>${r.emoji}</span>`;
  document.getElementById('restoTitle').textContent = r.name;
  document.getElementById('restoRating').textContent = `${r.rating} 分`;
  document.getElementById('restoSales').textContent = r.monthlySales;
  document.getElementById('restoTime').textContent = r.deliveryTime;
  document.getElementById('restoFee').textContent = r.deliveryFee;
  document.getElementById('restoMin').textContent = r.minPrice;

  // 菜单分类tabs
  const tabs = document.getElementById('menuTabs');
  state.menuCat = r.menu[0].cat;
  tabs.innerHTML = r.menu.map((cat, i) =>
    `<button data-cat="${cat.cat}" class="menu-tab flex-1 text-center py-2.5 text-xs font-medium border-b-2 whitespace-nowrap px-3 transition-colors ${i === 0 ? 'border-mt text-mt' : 'border-transparent text-gray-500 dark:text-gray-400'}">${cat.cat}</button>`
  ).join('');

  renderMenuItems();
  updateCartBar();
}

// 菜单tab点击委托
document.getElementById('menuTabs').addEventListener('click', (e) => {
  const tab = e.target.closest('.menu-tab');
  if (!tab) return;
  const cat = tab.dataset.cat;
  state.menuCat = cat;
  document.querySelectorAll('.menu-tab').forEach(t => {
    t.classList.remove('border-mt', 'text-mt');
    t.classList.add('border-transparent', 'text-gray-500', 'dark:text-gray-400');
  });
  tab.classList.add('border-mt', 'text-mt');
  tab.classList.remove('border-transparent', 'text-gray-500', 'dark:text-gray-400');
  renderMenuItems();
});

function renderMenuItems() {
  const r = restaurants.find(r => r.id === state.currentRestaurantId);
  if (!r) return;
  const category = r.menu.find(c => c.cat === state.menuCat);
  if (!category) { state.menuCat = r.menu[0].cat; return renderMenuItems(); }

  const container = document.getElementById('menuList');
  container.innerHTML = `
    <div class="text-sm font-bold text-gray-400 dark:text-gray-500 mb-2">${state.menuCat}</div>
    ${category.items.map(item => {
      const cartItem = getCartItem(item.id);
      const qty = cartItem ? cartItem.qty : 0;
      return `
      <div class="flex gap-3 py-3 border-b border-gray-50 dark:border-gray-800">
        <div class="w-20 h-20 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-4xl flex-shrink-0">${item.img}</div>
        <div class="flex-1 min-w-0">
          <div class="text-sm font-bold dark:text-white">${item.name}</div>
          <div class="text-xs text-gray-400 mt-0.5 line-clamp-2">${item.desc}</div>
          <div class="text-xs text-gray-400 mt-1">月售${item.sales}</div>
          <div class="flex items-center justify-between mt-1.5">
            <span class="text-mt font-bold text-base">¥${item.price}</span>
            <div class="flex items-center gap-2">
              ${qty > 0 ? `
                <button data-action="remove" data-item-id="${item.id}" class="menu-btn w-7 h-7 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm font-bold">−</button>
                <span class="text-sm font-bold dark:text-white w-4 text-center">${qty}</span>
              ` : ''}
              <button data-action="add" data-item-id="${item.id}" class="menu-btn w-7 h-7 rounded-full bg-mt flex items-center justify-center text-black font-bold text-lg">+</button>
            </div>
          </div>
        </div>
      </div>
    `}).join('')}
  `;
}

// 菜单加减按钮委托
document.getElementById('menuList').addEventListener('click', (e) => {
  const btn = e.target.closest('.menu-btn');
  if (!btn) return;
  e.stopPropagation();
  const itemId = parseInt(btn.dataset.itemId);
  const action = btn.dataset.action;
  if (action === 'add') addToCart(itemId);
  if (action === 'remove') removeFromCart(itemId);
});

// ========== 结算 ==========
function renderCheckoutItems() {
  const container = document.getElementById('checkoutItems');
  const subtotal = document.getElementById('checkoutSubtotal');
  const total = document.getElementById('checkoutTotal');
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = '<div class="text-gray-400 text-sm">暂无商品</div>';
  } else {
    container.innerHTML = state.cart.map(item => `
      <div class="flex items-center gap-2">
        <span>${item.img}</span>
        <span class="flex-1 truncate dark:text-gray-300">${item.name} ×${item.qty}</span>
        <span class="text-gray-600 dark:text-gray-400">¥${(item.price * item.qty).toFixed(2)}</span>
      </div>
    `).join('');
  }

  const s = getCartTotal();
  if (subtotal) subtotal.textContent = `¥${s.toFixed(2)}`;
  if (total) total.textContent = `¥${(s + 5).toFixed(2)}`;
}

function placeOrder() {
  if (state.cart.length === 0) return;

  const order = {
    id: Date.now(),
    items: state.cart.map(i => ({ ...i })),
    total: getCartTotal() + 5,
    status: 0,
    time: new Date().toLocaleString('zh-CN'),
    restaurantId: state.currentRestaurantId,
    restaurantName: restaurants.find(r => r.id === state.currentRestaurantId)?.name || '',
  };

  state.orders.unshift(order);
  saveOrders();
  state.cart = [];
  refreshUI();
  navigate('tracking', order.id);
}

// ========== 订单列表 ==========
function renderOrders() {
  const container = document.getElementById('orderList');
  if (!container) return;

  if (state.orders.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16">
        <div class="text-6xl mb-4">📋</div>
        <div class="text-gray-400 dark:text-gray-500">还没有订单</div>
        <button onclick="navigate('home')" class="mt-4 bg-mt text-black font-bold px-6 py-2 rounded-full text-sm btn-press">去点餐</button>
      </div>`;
    return;
  }

  const statusLabels = ['已下单', '商家已接单', '骑手已取餐', '配送中', '已送达'];
  const statusColors = ['text-blue-600 bg-blue-50 dark:bg-blue-900/30', 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/30', 'text-orange-600 bg-orange-50 dark:bg-orange-900/30', 'text-purple-600 bg-purple-50 dark:bg-purple-900/30', 'text-green-600 bg-green-50 dark:bg-green-900/30'];

  container.innerHTML = state.orders.map(o => `
    <div data-order-id="${o.id}" class="order-card bg-white dark:bg-mt-card p-4 rounded-xl border border-gray-100 dark:border-gray-800 cursor-pointer hover:shadow-md transition-shadow active:scale-[0.98]">
      <div class="flex items-center justify-between mb-2">
        <span class="font-bold dark:text-white">${o.restaurantName}</span>
        <span class="text-xs px-2 py-0.5 rounded ${statusColors[o.status] || statusColors[0]}">${statusLabels[o.status] || statusLabels[0]}</span>
      </div>
      <div class="text-sm text-gray-500 dark:text-gray-400">
        ${o.items.map(i => `${i.name} ×${i.qty}`).join('、')}
      </div>
      <div class="flex items-center justify-between mt-2">
        <span class="text-xs text-gray-400">${o.time}</span>
        <span class="font-bold dark:text-white">¥${o.total.toFixed(2)}</span>
      </div>
    </div>
  `).join('');
}

// 订单卡片点击委托
document.getElementById('orderList').addEventListener('click', (e) => {
  const card = e.target.closest('.order-card');
  if (!card) return;
  const id = parseInt(card.dataset.orderId);
  if (id) navigate('tracking', id);
});

// ========== 订单追踪 ==========
function renderTracking() {
  const order = state.orders.find(o => o.id === state.currentOrderId);
  if (!order) return navigate('orders');

  const eta = new Date(Date.now() + 20 * 60000);
  document.getElementById('trackingETA').textContent = eta.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });

  const steps = [
    { label: '已下单', desc: order.time, icon: '📝' },
    { label: '商家接单', desc: '商家正在准备您的餐品', icon: '👨‍🍳' },
    { label: '骑手取餐', desc: '骑手正在前往商家', icon: '🛵' },
    { label: '配送中', desc: '骑手正在赶往您的地址', icon: '📍' },
    { label: '已送达', desc: '祝您用餐愉快！', icon: '✅' },
  ];

  document.getElementById('trackingSteps').innerHTML = steps.map((s, i) => `
    <div class="status-line relative pl-7 pb-6 ${i <= order.status ? 'active' : ''}">
      <div class="absolute left-0 top-0 w-5 h-5 rounded-full flex items-center justify-center text-xs ${i <= order.status ? 'bg-mt' : 'bg-gray-200 dark:bg-gray-700'}">${i < order.status ? '✓' : s.icon}</div>
      <div class="font-bold text-sm ${i <= order.status ? 'dark:text-white' : 'text-gray-400 dark:text-gray-600'}">${s.label}</div>
      <div class="text-xs ${i <= order.status ? 'text-gray-500 dark:text-gray-400' : 'text-gray-300 dark:text-gray-600'}">${s.desc}</div>
    </div>
  `).join('');

  if (order.status < 4) {
    setTimeout(() => {
      order.status = Math.min(4, order.status + 1);
      saveOrders();
      if (state.currentPage === 'tracking') renderTracking();
    }, 10000);
  }
}

// ========== 搜索 ==========
document.getElementById('searchInput').addEventListener('input', (e) => {
  state.searchQuery = e.target.value;
  renderRestaurantList();
});

// ========== 分类 ==========
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.cat-btn').forEach(b => {
      b.classList.remove('bg-mt', 'text-black');
      b.classList.add('bg-gray-100', 'dark:bg-gray-800', 'text-gray-600', 'dark:text-gray-300');
    });
    this.classList.add('bg-mt', 'text-black');
    this.classList.remove('bg-gray-100', 'dark:bg-gray-800', 'text-gray-600', 'dark:text-gray-300');
    state.currentCat = this.dataset.cat;
    renderRestaurantList();
  });
});

// ========== 排序 ==========
document.querySelectorAll('.sort-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.sort-btn').forEach(b => {
      b.classList.remove('bg-mt', 'text-black');
      b.classList.add('bg-gray-100', 'dark:bg-gray-800', 'text-gray-500', 'dark:text-gray-400');
    });
    this.classList.add('bg-mt', 'text-black');
    this.classList.remove('bg-gray-100', 'dark:bg-gray-800', 'text-gray-500', 'dark:text-gray-400');
    state.currentSort = this.dataset.sort;
    renderRestaurantList();
  });
});

// ========== 返回按钮 ==========
document.querySelectorAll('[data-back]').forEach(btn => {
  btn.addEventListener('click', () => {
    const page = btn.dataset.back;
    if (page === 'home') navigate('home');
    if (page === 'restaurant') navigate('restaurant');
    if (page === 'orders') navigate('orders');
  });
});

// ========== 深色模式 ==========
function toggleDark() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('mt_dark', document.documentElement.classList.contains('dark'));
}
if (localStorage.getItem('mt_dark') === 'true') {
  document.documentElement.classList.add('dark');
}

// ========== 启动 ==========
function init() {
  renderRestaurantList();
  updateNavHighlight();
  updateCartBadge();
}
init();
