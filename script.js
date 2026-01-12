const tarotCards = [
    { name: "Шут", meaning: "Начало нового пути, спонтанность, чистота помыслов", reversed: false },
    { name: "Маг", meaning: "Воля, мастерство, способность проявлять намерение", reversed: false },
    { name: "Жрица", meaning: "Интуиция, тайны, подсознание", reversed: false },
    { name: "Императрица", meaning: "Изобилие, плодородие, женская энергия", reversed: false },
    { name: "Император", meaning: "Власть, структура, контроль", reversed: false },
    { name: "Иерофант", meaning: "Традиции, духовные учения, conformism", reversed: false },
    { name: "Влюбленные", meaning: "Любовь, гармония, выбор", reversed: false },
    { name: "Колесница", meaning: "Победа, контроль, движение вперед", reversed: false },
    { name: "Сила", meaning: "Внутренняя сила, мужество, сострадание", reversed: false },
    { name: "Отшельник", meaning: "Самопознание, внутренняя мудрость, одиночество", reversed: false },
    { name: "Колесо Фортуны", meaning: "Судьба, перемены, циклы", reversed: false },
    { name: "Правосудие", meaning: "Справедливость, истина, закон кармы", reversed: false },
    { name: "Повешенный", meaning: "Жертва, новый взгляд, ожидание", reversed: false },
    { name: "Смерть", meaning: "Трансформация, завершение, новое начало", reversed: false },
    { name: "Умеренность", meaning: "Баланс, терпение, умеренность", reversed: false },
    { name: "Дьявол", meaning: "Привязанности, материализм, искушение", reversed: false },
    { name: "Башня", meaning: "Внезапные перемены, разрушение, пробуждение", reversed: false },
    { name: "Звезда", meaning: "Надежда, вдохновение, исцеление", reversed: false },
    { name: "Луна", meaning: "Иллюзии, интуиция, подсознание", reversed: false },
    { name: "Солнце", meaning: "Радость, успех, ясность", reversed: false },
    { name: "Суд", meaning: "Возрождение, прощение, внутренний голос", reversed: false }
];

const runes = [
    { symbol: "ᚠ", name: "Феху", meaning: "Богатство, имущество, материальный достаток. Новые начинания в финансовой сфере." },
    { symbol: "ᚢ", name: "Уруз", meaning: "Сила, мощь, энергия. Физическая и духовная сила для преодоления препятствий." },
    { symbol: "ᚦ", name: "Турисаз", meaning: "Врата, шипы, защита. Порог между мирами, необходимость защиты." },
    { symbol: "ᚨ", name: "Ансуз", meaning: "Бог, общение, мудрость. Божественное послание, интуитивное знание." },
    { symbol: "ᚱ", name: "Райдо", meaning: "Путешествие, движение, путь. Духовный или физический путь развития." },
    { symbol: "ᚲ", name: "Кеназ", meaning: "Факел, знание, творчество. Просветление, вдохновение, новые идеи." },
    { symbol: "ᚷ", name: "Гебо", meaning: "Дар, партнерство, единение. Гармония в отношениях, взаимность." },
    { symbol: "ᚹ", name: "Вуньо", meaning: "Радость, счастье, гармония. Период благополучия и удовлетворения." },
    { symbol: "ᚺ", name: "Хагалаз", meaning: "Град, разрушение, перемены. Необходимость разрушения старого для нового." },
    { symbol: "ᚾ", name: "Наутиз", meaning: "Нужда, constraint, терпение. Период ограничений, требующий выдержки." },
    { symbol: "ᛁ", name: "Иса", meaning: "Лед, остановка, ясность. Период затишья, время для размышлений." },
    { symbol: "ᛃ", name: "Йера", meaning: "Урожай, цикл, результат. Получение заслуженных плодов труда." },
    { symbol: "ᛇ", name: "Эйваз", meaning: "Защита, оборона, прогресс. Движение вперед с защитой высших сил." },
    { symbol: "ᛈ", name: "Пертро", meaning: "Тайна, судьба, перерождение. Скрытые возможности, судьбоносные события." },
    { symbol: "ᛉ", name: "Альгиз", meaning: "Защита, связь с богами, интуиция. Высшая защита, духовная связь." },
    { symbol: "ᛊ", name: "Совило", meaning: "Солнце, успех, победа. Период успеха, ясности и благополучия." },
    { symbol: "ᛏ", name: "Тейваз", meaning: "Воин, честь, справедливость. Борьба за правое дело, мужество." },
    { symbol: "ᛒ", name: "Беркана", meaning: "Рост, рождение, плодородие. Новый рост, женская энергия, забота." },
    { symbol: "ᛖ", name: "Эваз", meaning: "Лошадь, движение, перемены. Быстрое движение вперед, позитивные изменения." },
    { symbol: "ᛗ", name: "Манназ", meaning: "Человек, само, общность. Самопознание, отношения с окружающими." },
    { symbol: "ᛚ", name: "Лагуз", meaning: "Вода, интуиция, поток. Интуитивное понимание, эмоциональный поток." },
    { symbol: "ᛜ", name: "Ингуз", meaning: "Фертильность, внутренний рост, завершение. Период созревания и завершения." },
    { symbol: "ᛟ", name: "Одал", meaning: "Наследие, дом, собственность. Связь с корнями, семейные ценности." },
    { symbol: "ᛞ", name: "Дагаз", meaning: "День, прорыв, трансформация. Прорыв в сознании, новый день." }
];

const crystals = {
    'amethyst': {
        title: 'Аметист - Камень Духовности',
        description: 'Аметист помогает развить интуицию и духовное прозрение. Этот камень способствует медитации, очищает ауру и защищает от негативной энергии. Аметист помогает найти внутренний покой и гармонию, открывает доступ к высшим знаниям и мудрости предков.'
    },
    'rose-quartz': {
        title: 'Розовый Кварц - Камень Любви',
        description: 'Розовый кварц является мощным кристаллом любви и сострадания. Он помогает исцелить эмоциональные раны, привлечь в жизнь настоящую любовь и укрепить существующие отношения. Этот камень учит безусловной любви к себе и другим, открывает сердечную чакру.'
    },
    'citrine': {
        title: 'Цитрин - Камень Процветания',
        description: 'Цитрин привлекает богатство, успех и процветание. Этот камень повышает уверенность в себе, стимулирует творческое мышление и помогает принимать правильные финансовые решения. Цитрин заряжает позитивной энергией и помогает достичь поставленных целей.'
    },
    'obsidian': {
        title: 'Обсидиан - Камень Защиты',
        description: 'Обсидиан - мощный защитный кристалл, который поглощает негативную энергию и защищает от психических атак. Он помогает выявить скрытые правды, освободиться от эмоциональных блоков и прошлых травм. Обсидиан способствует глубокому самопознанию и трансформации.'
    }
};

let selectedTarotCards = [];
let currentRune = null;

let currentUser = null;
let cart = [];

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const icon = menuToggle.querySelector('i');
    
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        
        // Закрываем мобильное меню после клика
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
    }
}

function showInfo() {
    document.getElementById('info-modal').style.display = 'block';
}

function showLogin() {
    if (currentUser) {
        showNotification(`Вы вошли как ${currentUser.username}`);
        return;
    }
    document.getElementById('login-modal').style.display = 'block';
}

function showCart() {
    updateCartDisplay();
    document.getElementById('cart-modal').style.display = 'block';
}

function closeModal(modalId = 'info-modal') {
    document.getElementById(modalId).style.display = 'none';
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    
    currentUser = { username, email };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    showNotification(`Добро пожаловать, ${username}!`);
    closeModal('login-modal');
    
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
}

function addToCart(id, name, price) {
    if (!currentUser) {
        showNotification('Пожалуйста, войдите в систему для добавления товаров в корзину');
        showLogin();
        return;
    }
    
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        showNotification('Этот товар уже в корзине');
        return;
    }
    
    cart.push({ id, name, price });
    updateCartCount();
    saveCart();
    showNotification(`${name} добавлен в корзину`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartCount();
    updateCartDisplay();
    saveCart();
    showNotification('Товар удалён из корзины');
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-cart"></i><p>Корзина пуста</p></div>';
        cartTotal.textContent = '0';
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price;
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price} РПМ</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
                    <i class="fas fa-trash"></i> Удалить
                </button>
            </div>
        `;
    });
    
    cartItems.innerHTML = html;
    cartTotal.textContent = total;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
    
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
    }
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Корзина пуста');
        return;
    }
    
    if (!currentUser) {
        showNotification('Пожалуйста, войдите в систему');
        showLogin();
        return;
    }
    
    closeModal('cart-modal');
    document.getElementById('checkout-modal').style.display = 'block';
}

function confirmOrder() {
    closeModal('checkout-modal');
    showOrderDetails();
}

function showOrderDetails() {
    const orderItems = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');
    
    // Очищаем предыдущие товары
    orderItems.innerHTML = '';
    
    // Добавляем товары заказа
    let total = 0;
    cart.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <span class="order-item-name">${item.name}</span>
            <span class="order-item-price">${item.price} РПМ</span>
        `;
        orderItems.appendChild(orderItem);
        total += item.price;
    });
    
    orderTotal.textContent = total;
    
    // Показываем модальное окно
    document.getElementById('order-details-modal').style.display = 'block';
}

function submitOrder(event) {
    event.preventDefault();
    
    const rpName = document.getElementById('rp-name').value;
    const nickname = document.getElementById('nickname').value;
    const comment = document.getElementById('comment').value;
    const rulesAccepted = document.getElementById('rules-accept').checked;
    
    if (!rulesAccepted) {
        showNotification('Необходимо принять правила поведения', 'error');
        return;
    }
    
    // Формируем сообщение для отправки
    let orderMessage = `🔮 НОВЫЙ ЗАКАЗ 🔮\n\n`;
    orderMessage += `👤 РП имя: ${rpName}\n`;
    orderMessage += `🏷️ Ник: ${nickname}\n`;
    if (comment) {
        orderMessage += `📝 Комментарий: ${comment}\n`;
    }
    orderMessage += `\n🛍️ ТОВАРЫ:\n`;
    
    let total = 0;
    cart.forEach(item => {
        orderMessage += `• ${item.name} - ${item.price} РПМ\n`;
        total += item.price;
    });
    
    orderMessage += `\n💰 ИТОГО: ${total} РПМ\n`;
    orderMessage += `⏰ Время: ${new Date().toLocaleString()}\n`;
    orderMessage += `✅ Правила приняты`;
    
    // Копируем сообщение в буфер обмена
    navigator.clipboard.writeText(orderMessage).then(() => {
        showNotification('Заказ скопирован в буфер обмена! Отправьте в @Gorkell', 'success');
        
        // Очищаем корзину
        cart = [];
        saveCart();
        updateCartUI();
        
        // Закрываем модальное окно
        closeModal('order-details-modal');
        
        // Показываем финальное сообщение
        setTimeout(() => {
            showNotification('Спасибо за заказ! Ожидайте исполнения в течение 24 часов.', 'success');
        }, 1000);
    }).catch(() => {
        showNotification('Не удалось скопировать заказ. Пожалуйста, скопируйте вручную.', 'error');
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--mystical-purple), var(--secondary-color));
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(124, 58, 237, 0.3);
        z-index: 3000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

window.onclick = function(event) {
    const modal = document.getElementById('info-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function drawTarotCards() {
    selectedTarotCards = [];
    const cardSlots = document.querySelectorAll('.card-slot');
    const question = document.getElementById('tarot-question').value;
    
    if (!question) {
        showNotification('Пожалуйста, задайте ваш вопрос перед гаданием');
        return;
    }
    
    cardSlots.forEach(slot => {
        slot.classList.remove('flipped', 'revealed');
        slot.innerHTML = '<div class="card-back"><i class="fas fa-question"></i></div>';
    });
    
    document.getElementById('tarot-interpretation').style.display = 'none';
    
    setTimeout(() => {
        const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
        selectedTarotCards = shuffled.slice(0, 3);
        
        cardSlots.forEach((slot, index) => {
            setTimeout(() => {
                slot.classList.add('flipped');
                setTimeout(() => {
                    slot.classList.add('revealed');
                    slot.innerHTML = `
                        <div class="card-back">
                            <div style="text-align: center; padding: 1rem;">
                                <div style="font-size: 1.2rem; font-weight: bold; margin-bottom: 0.5rem;">
                                    ${selectedTarotCards[index].name}
                                </div>
                                <div style="font-size: 0.8rem; opacity: 0.9;">
                                    ${selectedTarotCards[index].meaning.substring(0, 50)}...
                                </div>
                            </div>
                        </div>
                    `;
                }, 300);
            }, index * 200);
        });
        
        setTimeout(() => {
            showTarotInterpretation();
        }, 1000);
    }, 500);
}

function selectCard(index) {
    if (selectedTarotCards.length === 0) {
        showNotification('Сначала перемешайте карты');
        return;
    }
    
    const card = selectedTarotCards[index];
    showCardDetails(card);
}

function showTarotInterpretation() {
    const interpretation = document.getElementById('tarot-interpretation');
    const result = document.getElementById('tarot-result');
    
    let html = '<div class="tarot-reading">';
    selectedTarotCards.forEach((card, index) => {
        const position = index === 0 ? 'Прошлое' : index === 1 ? 'Настоящее' : 'Будущее';
        html += `
            <div class="card-interpretation" style="margin-bottom: 1.5rem; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 10px;">
                <h4 style="color: var(--accent-color); margin-bottom: 0.5rem;">${position}: ${card.name}</h4>
                <p style="line-height: 1.6;">${card.meaning}</p>
            </div>
        `;
    });
    
    html += `
        <div class="overall-interpretation" style="margin-top: 1.5rem; padding: 1rem; background: rgba(245, 158, 11, 0.1); border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.3);">
            <h4 style="color: var(--accent-color); margin-bottom: 0.5rem;">Общее толкование</h4>
            <p style="line-height: 1.6;">${generateOverallInterpretation()}</p>
        </div>
    </div>`;
    
    result.innerHTML = html;
    interpretation.style.display = 'block';
}

function generateOverallInterpretation() {
    const interpretations = [
        "Карты указывают на период трансформации и духовного роста. Доверьтесь своей интуиции.",
        "Ваш путь ведет к гармонии и балансу. Прошлый опыт подготовил вас к текущим вызовам.",
        "Новые возможности скоро появятся в вашей жизни. Будьте открыты к переменам.",
        "Период introspection и самопознания. Погрузитесь в свои истинные желания.",
        "Успех близок, но требует терпения и настойчивости. Продолжайте свой путь."
    ];
    
    return interpretations[Math.floor(Math.random() * interpretations.length)];
}

function showCardDetails(card) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2 style="color: var(--accent-color); margin-bottom: 1rem;">${card.name}</h2>
            <p style="line-height: 1.6; font-size: 1.1rem;">${card.meaning}</p>
        </div>
    `;
    document.body.appendChild(modal);
}

function drawRune() {
    const pouch = document.getElementById('rune-pouch');
    pouch.style.animation = 'none';
    setTimeout(() => {
        pouch.style.animation = 'bounce 2s ease-in-out infinite';
    }, 10);
    
    setTimeout(() => {
        const randomRune = runes[Math.floor(Math.random() * runes.length)];
        currentRune = randomRune;
        
        document.getElementById('rune-symbol').textContent = randomRune.symbol;
        document.getElementById('rune-name').textContent = randomRune.name;
        document.getElementById('rune-meaning').textContent = randomRune.meaning;
        document.getElementById('rune-result').style.display = 'block';
        
        document.getElementById('rune-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1000);
}

function calculateLifePath() {
    const birthDate = document.getElementById('birth-date').value;
    if (!birthDate) {
        document.getElementById('numerology-result').style.display = 'none';
        return;
    }
    
    const date = new Date(birthDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    let sum = day + month + year;
    
    while (sum > 9 && sum !== 11 && sum !== 22) {
        sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    
    const lifePathNumber = sum;
    showLifePathResult(lifePathNumber);
}

function showLifePathResult(number) {
    const lifePathData = {
        1: {
            title: "Лидер и Новатор",
            description: "Вы призваны быть лидером, пионером и новатором. Ваш путь требует независимости, смелости и уверенности в себе.",
            traits: ["Лидерские качества", "Независимость", "Оригинальность", "Целеустремленность", "Смелость"]
        },
        2: {
            title: "Миротворец и Дипломат",
            description: "Ваша миссия - приносить гармонию и баланс в мир. Вы обладаете развитой интуицией и способностью к сотрудничеству.",
            traits: ["Дипломатичность", "Интуиция", "Чувствительность", "Сотрудничество", "Гармония"]
        },
        3: {
            title: "Творец и Коммуникатор",
            description: "Вы призваны выражать себя через творчество и общение. Ваша энергия вдохновляет и радует окружающих.",
            traits: ["Творческие способности", "Оптимизм", "Общительность", "Харизма", "Воображение"]
        },
        4: {
            title: "Строитель и Организатор",
            description: "Ваша задача - создавать прочные основы и системы. Вы надежны, практичны и трудолюбивы.",
            traits: ["Надежность", "Практичность", "Трудолюбие", "Организованность", "Терпение"]
        },
        5: {
            title: "Искатель Свободы",
            description: "Вы жаждете приключений, перемен и новых опытов. Ваш путь - это исследование и расширение горизонтов.",
            traits: ["Любопытство", "Адаптивность", "Свобода", "Приключенчество", "Универсальность"]
        },
        6: {
            title: "Опекун и Целитель",
            description: "Ваша миссия - заботиться о других и служить человечеству. Вы обладаете глубокой сострадательностью.",
            traits: ["Забота", "Ответственность", "Сострадание", "Любовь", "Жертвенность"]
        },
        7: {
            title: "Мудрец и Искатель Истины",
            description: "Вы призваны искать глубинные знания и духовную истину. Ваш путь - это анализ, исследования и интуиция.",
            traits: ["Мудрость", "Аналитический ум", "Духовность", "Интуиция", "Интеллект"]
        },
        8: {
            title: "Власть и Материальный Успех",
            description: "Ваша задача - достичь успеха в материальном мире и использовать власть мудро. Вы призваны к лидерству в бизнесе.",
            traits: ["Амбициозность", "Деловые качества", "Власть", "Успех", "Щедрость"]
        },
        9: {
            title: "Гуманист и Идеалист",
            description: "Ваша миссия - служить человечеству и делать мир лучше. Вы обладаете широким взглядом и состраданием.",
            traits: ["Гуманизм", "Идеализм", "Щедрость", "Творчество", "Сострадание"]
        },
        11: {
            title: "Духовный Учитель и Просветленный",
            description: "Вы - мастер-число с духовной миссией. Ваша задача - вдохновлять и просвещать других.",
            traits: ["Духовная мудрость", "Интуиция", "Вдохновение", "Эмпатия", "Просветление"]
        },
        22: {
            title: "Мастер-Строитель",
            description: "Вы - самое мощное мастер-число. Ваша миссия - воплощать большие мечты в реальность для блага человечества.",
            traits: ["Видение", "Мастерство", "Практичность", "Лидерство", "Вдохновение"]
        }
    };
    
    const data = lifePathData[number] || lifePathData[1];
    
    document.getElementById('life-path-number').textContent = number;
    document.getElementById('life-path-title').textContent = data.title;
    document.getElementById('life-path-description').textContent = data.description;
    
    const traitsList = document.getElementById('life-path-traits');
    traitsList.innerHTML = '';
    data.traits.forEach(trait => {
        const li = document.createElement('li');
        li.textContent = `• ${trait}`;
        traitsList.appendChild(li);
    });
    
    document.getElementById('numerology-result').style.display = 'block';
    document.getElementById('numerology-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function selectCrystal(crystalType) {
    const crystal = crystals[crystalType];
    if (!crystal) return;
    
    document.getElementById('crystal-title').textContent = crystal.title;
    document.getElementById('crystal-description').textContent = crystal.description;
    document.getElementById('crystal-message').style.display = 'block';
    
    document.getElementById('crystal-message').scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    const cards = document.querySelectorAll('.crystal-card');
    cards.forEach(card => card.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--mystical-purple), var(--secondary-color));
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(124, 58, 237, 0.3);
        z-index: 3000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .crystal-card.selected {
        border-color: var(--accent-color) !important;
        box-shadow: 0 0 20px rgba(245, 158, 11, 0.4) !important;
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    
    // Создание частиц и огоньков
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        const firefliesContainer = document.getElementById('fireflies');
        
        // Создаём частицы
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            particlesContainer.appendChild(particle);
        }
        
        // Создаём огоньки
        for (let i = 0; i < 8; i++) {
            const firefly = document.createElement('div');
            firefly.className = 'firefly';
            firefly.style.left = Math.random() * 100 + '%';
            firefly.style.top = Math.random() * 100 + '%';
            firefly.style.animationDelay = Math.random() * 25 + 's';
            firefly.style.animationDuration = (20 + Math.random() * 10) + 's';
            firefliesContainer.appendChild(firefly);
        }
    }
    
    createParticles();
    
    // Создание летающих элементов для секций
    function createFlyingElements() {
        let taroInterval = null;
        let astrologyInterval = null;
        let smileyInterval = null;
        let isTaroVisible = false;
        let isAstrologyVisible = false;
        
        // Летающие карты для Таро
        function createFlyingCard() {
            const taroCards = document.getElementById('taro-cards');
            if (!taroCards) return;
            
            const card = document.createElement('div');
            card.className = 'flying-card';
            
            // Случайный символ карты
            const symbols = ['☉', '☽', '♃', '♄', '♀', '♂', '☊', '☋', '⚸', '⚳'];
            const symbol = document.createElement('div');
            symbol.className = 'card-symbol';
            symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            card.appendChild(symbol);
            
            // Случайный выбор направления полёта
            const isReverse = Math.random() < 0.5;
            if (isReverse) {
                card.classList.add('reverse');
            }
            
            // Случайная задержка
            card.style.animationDelay = Math.random() * 2 + 's';
            
            taroCards.appendChild(card);
            
            // Запускаем анимацию
            setTimeout(() => {
                card.classList.add('active');
            }, 100);
            
            // Добавляем событие окончания анимации
            card.addEventListener('animationend', (event) => {
                if (event.animationName === 'fly-card' || event.animationName === 'fly-card-reverse') {
                    // Удаляем карту только после завершения анимации
                    card.remove();
                }
            });
            
            // Резервное удаление на случай, если событие не сработает
            setTimeout(() => {
                if (card.parentNode) {
                    card.remove();
                }
            }, 17000); // 15с + 2с задержка + 2с запас
        }
        
        // Летающие звёзды для Астрологии
        function createFlyingStar() {
            const astrologyStars = document.getElementById('astrology-stars');
            if (!astrologyStars) return;
            
            const star = document.createElement('div');
            star.className = 'flying-star';
            
            // Случайная задержка
            star.style.animationDelay = Math.random() * 3 + 's';
            
            astrologyStars.appendChild(star);
            
            // Запускаем анимацию
            setTimeout(() => {
                star.classList.add('active');
            }, 100);
            
            // Удаляем после анимации
            setTimeout(() => {
                star.remove();
            }, 8000);
        }
        
        // Рисование смайлика из звёзд
        function drawSmiley() {
            const astrologyStars = document.getElementById('astrology-stars');
            if (!astrologyStars) return;
            
            // Координаты для смайлика (относительно центра секции)
            const smileyPoints = [
                // Голова (круг)
                {x: 50, y: 30}, {x: 55, y: 28}, {x: 60, y: 27}, {x: 65, y: 27}, {x: 70, y: 28}, {x: 75, y: 30},
                {x: 78, y: 33}, {x: 80, y: 37}, {x: 80, y: 42}, {x: 78, y: 47}, {x: 75, y: 52}, {x: 70, y: 55},
                {x: 65, y: 57}, {x: 60, y: 58}, {x: 55, y: 58}, {x: 50, y: 57}, {x: 45, y: 55}, {x: 40, y: 52},
                {x: 37, y: 47}, {x: 35, y: 42}, {x: 35, y: 37}, {x: 37, y: 33}, {x: 40, y: 30}, {x: 45, y: 28},
                
                // Глаза
                {x: 45, y: 40}, {x: 55, y: 40},
                
                // Улыбка
                {x: 42, y: 48}, {x: 44, y: 50}, {x: 46, y: 51}, {x: 48, y: 52}, {x: 50, y: 52},
                {x: 52, y: 52}, {x: 54, y: 51}, {x: 56, y: 50}, {x: 58, y: 48}
            ];
            
            const stars = [];
            
            // Создаём звёзды для смайлика
            smileyPoints.forEach((point, index) => {
                setTimeout(() => {
                    const star = document.createElement('div');
                    star.className = 'smiley-star';
                    star.style.left = point.x + '%';
                    star.style.top = point.y + '%';
                    
                    astrologyStars.appendChild(star);
                    stars.push(star);
                    
                    // Запускаем анимацию рисования
                    setTimeout(() => {
                        star.classList.add('drawing');
                    }, 50);
                }, index * 100); // Каждая звезда появляется с задержкой 100мс
            });
            
            // Запускаем затухание через 5 секунд
            setTimeout(() => {
                stars.forEach((star, index) => {
                    setTimeout(() => {
                        star.classList.remove('drawing');
                        star.classList.add('fading');
                        
                        // Удаляем звезду после затухания
                        setTimeout(() => {
                            star.remove();
                        }, 2000);
                    }, index * 50);
                });
            }, 5000);
        }
        
        // Создание фоновых созвездий
        function createBackgroundConstellations() {
            const bgConstellations = document.getElementById('bg-constellations');
            if (!bgConstellations) return;
            
            // Определения созвездий для фона
            const constellations = [
                {
                    name: 'orion',
                    className: 'bg-constellation-orion',
                    stars: [
                        {x: 0, y: 0}, {x: 15, y: -10}, {x: 30, y: 0},
                        {x: 7, y: 15}, {x: 22, y: 15}, {x: 15, y: 30},
                        {x: 0, y: 40}, {x: 30, y: 40}
                    ],
                    lines: [[0,1], [1,2], [0,3], [2,5], [3,4], [4,5], [3,6], [5,7]]
                },
                {
                    name: 'cassiopeia',
                    className: 'bg-constellation-cassiopeia',
                    stars: [
                        {x: 0, y: 15}, {x: 10, y: 0}, {x: 20, y: 10},
                        {x: 30, y: 0}, {x: 40, y: 15}
                    ],
                    lines: [[0,1], [1,2], [2,3], [3,4]]
                },
                {
                    name: 'scorpius',
                    className: 'bg-constellation-scorpius',
                    stars: [
                        {x: 0, y: 0}, {x: 8, y: 5}, {x: 15, y: 3},
                        {x: 22, y: 8}, {x: 30, y: 12}, {x: 37, y: 10},
                        {x: 42, y: 18}, {x: 40, y: 25}, {x: 32, y: 22}
                    ],
                    lines: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [6,7], [7,8]]
                },
                {
                    name: 'leo',
                    className: 'bg-constellation-leo',
                    stars: [
                        {x: 0, y: 20}, {x: 10, y: 10}, {x: 20, y: 5},
                        {x: 30, y: 10}, {x: 35, y: 20}, {x: 30, y: 30},
                        {x: 20, y: 35}, {x: 10, y: 30}, {x: 5, y: 25}
                    ],
                    lines: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [6,7], [7,8], [8,0]]
                },
                {
                    name: 'gemini',
                    className: 'bg-constellation-gemini',
                    stars: [
                        {x: 0, y: 0}, {x: 5, y: 10}, {x: 10, y: 20},
                        {x: 15, y: 25}, {x: 20, y: 20}, {x: 25, y: 10},
                        {x: 30, y: 0}, {x: 25, y: -10}, {x: 20, y: -20},
                        {x: 15, y: -25}, {x: 10, y: -20}, {x: 5, y: -10}
                    ],
                    lines: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [6,7], [7,8], [8,9], [9,10], [10,11], [11,0]]
                },
                {
                    name: 'virgo',
                    className: 'bg-constellation-virgo',
                    stars: [
                        {x: 0, y: 0}, {x: 8, y: -5}, {x: 15, y: -8},
                        {x: 22, y: -5}, {x: 25, y: 5}, {x: 20, y: 15},
                        {x: 12, y: 20}, {x: 5, y: 15}, {x: 0, y: 8}
                    ],
                    lines: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [6,7], [7,8], [8,0]]
                },
                {
                    name: 'libra',
                    className: 'bg-constellation-libra',
                    stars: [
                        {x: 0, y: 10}, {x: 10, y: 5}, {x: 20, y: 0},
                        {x: 30, y: 5}, {x: 40, y: 10}, {x: 30, y: 15},
                        {x: 20, y: 20}, {x: 10, y: 15}
                    ],
                    lines: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [6,7], [7,0]]
                },
                {
                    name: 'sagittarius',
                    className: 'bg-constellation-sagittarius',
                    stars: [
                        {x: 0, y: 0}, {x: 10, y: -8}, {x: 20, y: -5},
                        {x: 30, y: 0}, {x: 35, y: 10}, {x: 25, y: 15},
                        {x: 15, y: 12}, {x: 5, y: 8}
                    ],
                    lines: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [6,7], [7,0]]
                }
            ];
            
            // Создаём каждое созвездие
            constellations.forEach(constellation => {
                const constellationElement = document.createElement('div');
                constellationElement.className = `bg-constellation ${constellation.className}`;
                constellationElement.id = `bg-constellation-${constellation.name}`;
                
                // Создаём звёзды
                constellation.stars.forEach((star, index) => {
                    const starElement = document.createElement('div');
                    starElement.className = 'bg-constellation-star';
                    starElement.style.left = star.x + 'px';
                    starElement.style.top = star.y + 'px';
                    constellationElement.appendChild(starElement);
                });
                
                // Создаём линии
                constellation.lines.forEach((line, index) => {
                    const lineElement = document.createElement('div');
                    lineElement.className = 'bg-constellation-line';
                    
                    const star1 = constellation.stars[line[0]];
                    const star2 = constellation.stars[line[1]];
                    
                    const dx = star2.x - star1.x;
                    const dy = star2.y - star1.y;
                    const length = Math.sqrt(dx * dx + dy * dy);
                    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                    
                    lineElement.style.width = length + 'px';
                    lineElement.style.left = star1.x + 'px';
                    lineElement.style.top = star1.y + 'px';
                    lineElement.style.transform = `rotate(${angle}deg)`;
                    
                    constellationElement.appendChild(lineElement);
                });
                
                bgConstellations.appendChild(constellationElement);
            });
            
            // Анимация появления созвездий
            function animateBackgroundConstellations() {
                const bgConstellationElements = document.querySelectorAll('.bg-constellation');
                let currentIndex = 0;
                
                function showNextConstellation() {
                    // Скрываем все созвездия
                    bgConstellationElements.forEach(c => c.classList.remove('visible'));
                    
                    // Показываем случайное созвездие
                    const randomIndex = Math.floor(Math.random() * bgConstellationElements.length);
                    bgConstellationElements[randomIndex].classList.add('visible');
                }
                
                // Показываем первое созвездие сразу
                showNextConstellation();
                
                // Меняем созвездия каждые 15 секунд
                setInterval(showNextConstellation, 15000);
            }
            
            // Запускаем анимацию
            setTimeout(animateBackgroundConstellations, 2000);
        }
        
        // Наблюдаем за прокруткой для запуска анимаций
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id === 'taro-info' && !isTaroVisible) {
                        isTaroVisible = true;
                        // Запускаем карты для Таро сразу
                        createFlyingCard();
                        setTimeout(() => createFlyingCard(), 4000);
                        setTimeout(() => createFlyingCard(), 8000);
                        
                        // Устанавливаем интервал 25 секунд
                        taroInterval = setInterval(() => {
                            createFlyingCard();
                            setTimeout(() => createFlyingCard(), 4000);
                            setTimeout(() => createFlyingCard(), 8000);
                        }, 25000);
                        
                    } else if (entry.target.id === 'astrology' && !isAstrologyVisible) {
                        isAstrologyVisible = true;
                        // Создаём фоновые созвездия
                        createBackgroundConstellations();
                        
                        // Запускаем звёзды для Астрологии сразу
                        createFlyingStar();
                        setTimeout(() => createFlyingStar(), 1500);
                        setTimeout(() => createFlyingStar(), 3000);
                        setTimeout(() => createFlyingStar(), 4500);
                        
                        // Устанавливаем интервал 20 секунд для обычных звёзд
                        astrologyInterval = setInterval(() => {
                            createFlyingStar();
                            setTimeout(() => createFlyingStar(), 1500);
                            setTimeout(() => createFlyingStar(), 3000);
                            setTimeout(() => createFlyingStar(), 4500);
                        }, 20000);
                        
                        // Устанавливаем интервал 1 минута для смайлика
                        smileyInterval = setInterval(() => {
                            drawSmiley();
                        }, 60000);
                        
                        // Запускаем первый смайлик через 10 секунд
                        setTimeout(() => {
                            drawSmiley();
                        }, 10000);
                    }
                } else {
                    // Если секция скрыта, останавливаем интервалы
                    if (entry.target.id === 'taro-info') {
                        isTaroVisible = false;
                        if (taroInterval) {
                            clearInterval(taroInterval);
                            taroInterval = null;
                        }
                    } else if (entry.target.id === 'astrology') {
                        isAstrologyVisible = false;
                        if (astrologyInterval) {
                            clearInterval(astrologyInterval);
                            astrologyInterval = null;
                        }
                        if (smileyInterval) {
                            clearInterval(smileyInterval);
                            smileyInterval = null;
                        }
                    }
                }
            });
        }, observerOptions);
        
        // Наблюдаем за секциями
        const taroSection = document.getElementById('taro-info');
        const astrologySection = document.getElementById('astrology');
        
        if (taroSection) observer.observe(taroSection);
        if (astrologySection) observer.observe(astrologySection);
    }
    
    createFlyingElements();
    
    // Закрываем мобильное меню при клике вне его
    document.addEventListener('click', function(event) {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (!navbar.contains(event.target) && navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
    
    // Включаем/выключаем кнопку скриншота в зависимости от чекбокса
    const rulesCheckbox = document.getElementById('rules-accept');
    const screenshotBtn = document.getElementById('screenshot-btn');
    
    if (rulesCheckbox && screenshotBtn) {
        rulesCheckbox.addEventListener('change', function() {
            screenshotBtn.disabled = !this.checked;
        });
    }
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.divination-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Функции для рейтинга комментариев
function setRating(rating) {
    console.log('setRating вызвана с rating:', rating);
    
    // Ищем поле для ввода комментария Giscus
    const findCommentTextarea = () => {
        // Пробуем разные селекторы для поиска textarea
        const selectors = [
            'textarea[placeholder*="Напишите комментарий"]',
            'textarea[placeholder*="Leave a comment"]',
            'textarea[aria-label*="comment"]',
            'textarea[placeholder*="comment"]',
            'textarea',
            'input[type="text"]',
            '.giscus-input'
        ];
        
        for (let selector of selectors) {
            const element = document.querySelector(selector);
            if (element) {
                console.log('Найден элемент:', selector, element);
                return element;
            }
        }
        return null;
    };
    
    // Пробуем найти поле сразу
    let commentTextarea = findCommentTextarea();
    
    if (commentTextarea) {
        const ratingText = `Оценка: ${rating}/5`;
        
        // Если в поле уже есть текст, добавляем оценку в начало
        if (commentTextarea.value.trim()) {
            commentTextarea.value = `${ratingText}\n\n${commentTextarea.value}`;
        } else {
            commentTextarea.value = ratingText;
        }
        
        // Фокус на поле комментария
        commentTextarea.focus();
        
        // Добавляем визуальную обратную связь
        showNotification(`Оценка ${rating}/5 добавлена в комментарий`);
        
        // Подсвечиваем выбранный рейтинг
        highlightRatingButton(rating);
    } else {
        // Если поле не найдено, ждём загрузки Giscus
        console.log('Поле комментария не найдено, ждём загрузки Giscus...');
        let attempts = 0;
        const maxAttempts = 10;
        
        const waitForGiscus = () => {
            attempts++;
            commentTextarea = findCommentTextarea();
            
            if (commentTextarea) {
                console.log('Поле найдено после', attempts, 'попыток');
                const ratingText = `Оценка: ${rating}/5`;
                
                if (commentTextarea.value.trim()) {
                    commentTextarea.value = `${ratingText}\n\n${commentTextarea.value}`;
                } else {
                    commentTextarea.value = ratingText;
                }
                
                commentTextarea.focus();
                showNotification(`Оценка ${rating}/5 добавлена в комментарий`);
                highlightRatingButton(rating);
            } else if (attempts < maxAttempts) {
                console.log('Попытка', attempts, 'из', maxAttempts);
                setTimeout(waitForGiscus, 1000);
            } else {
                console.error('Не удалось найти поле для комментария Giscus');
                showNotification('Не удалось найти поле для комментария. Попробуйте обновить страницу.');
            }
        };
        
        setTimeout(waitForGiscus, 1000);
    }
}

function highlightRatingButton(rating) {
    // Убираем подсветку со всех кнопок
    document.querySelectorAll('.rating-btn').forEach(btn => {
        btn.style.background = '';
        btn.style.color = '';
    });
    
    // Подсвечиваем выбранную кнопку
    const selectedBtn = document.querySelector(`.rating-btn:nth-child(${rating})`);
    if (selectedBtn) {
        selectedBtn.style.background = 'var(--accent-color)';
        selectedBtn.style.color = 'var(--darker-bg)';
    }
}

// Автоматическая подсветка при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Следим за появлением Giscus
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1 && node.querySelector) {
                        const giscusFrame = node.querySelector('iframe[src*="giscus"]');
                        if (giscusFrame) {
                            console.log('Giscus загружен');
                            observer.disconnect();
                        }
                    }
                });
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
