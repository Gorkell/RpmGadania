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

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
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
    showNotification('Заказ оформлён! Ожидайте связи в Telegram');
    cart = [];
    updateCartCount();
    saveCart();
    closeModal('checkout-modal');
    closeModal('cart-modal');
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
