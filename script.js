// Комплименты для девушки
const compliments = [
    "Твои глаза сияют ярче звезд! ✨",
    "Твоя улыбка освещает весь мир! 🌟",
    "Ты прекрасна как весенний цветок! 🌸",
    "Твоя доброта делает мир лучше! 💖",
    "Ты умнее и красивее с каждым днем! 🌺",
    "Твои волосы блестят как шелк! 💫",
    "Твой смех - самая лучшая музыка! 🎵",
    "Ты королева моей вселенной! 👑",
    "Твоя нежность лечит любую боль! 🦋",
    "Ты идеальна во всем! 💝",
    "Твоя красота завораживает! 🌹",
    "Ты самый дорогой человек на свете! ❤️",
    "Твоя душа так же прекрасна как и внешность! 🌷",
    "Ты делаешь меня счастливым! 😊",
    "Ты - настоящее сокровище! 💎"
];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initializeSplashScreen();
    initializeSecondButton();
    initializeThirdButton();
    initializeFourthButton();
    initializeInteractiveElements();
    initializeParallax();
    addVibrationFeedback();
});

// Инициализация экрана-заставки
function initializeSplashScreen() {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const nextBtn = document.getElementById('next-btn');
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            console.log('Кнопка нажата');
            
            // Простое переключение
            splashScreen.style.display = 'none';
            mainContent.style.display = 'block';
            
            // Запускаем анимации
            setTimeout(() => {
                initializeAnimations();
            }, 100);
        });
    }
}

// Инициализация второй кнопки "Далее"
function initializeSecondButton() {
    const nextBtn2 = document.getElementById('next-btn-2');
    
    if (nextBtn2) {
        nextBtn2.addEventListener('click', function() {
            console.log('Вторая кнопка нажата');
            
            // Переход на третий слайд
            const mainContent = document.getElementById('main-content');
            const thirdSlide = document.getElementById('third-slide');
            
            // Скрываем второй слайд
            mainContent.style.display = 'none';
            
            // Показываем третий слайд
            thirdSlide.style.display = 'block';
            
            // Запускаем анимации третьего слайда
            setTimeout(() => {
                initializeThirdSlide();
            }, 100);
            
            // Вибрация на мобильных устройствах
            if ('vibrate' in navigator) {
                navigator.vibrate(50);
            }
        });
    }
}

// Инициализация третьего слайда
function initializeThirdSlide() {
    const messageContainer = document.querySelector('#third-slide .message-container');
    const finalTitle = document.querySelector('#third-slide .final-title');
    const typingText = document.getElementById('typing-text');
    const signature = document.querySelector('#third-slide .signature');
    const nextBtn3 = document.getElementById('next-btn-3');
    const sideImage = document.querySelector('#third-slide .side-image');
    const sideImage2 = document.querySelector('#third-slide .side-image-2');
    const sideImage3 = document.querySelector('#third-slide .side-image-3');
    const sideImage4 = document.querySelector('#third-slide .side-image-4');
    
    // Текст для печатания
    const text = "Анютаа анюточка я тебя очень люблю ты самая лучшая,и этот день сегодня твой надеюсь у тебя всё будет хорошо и тебя будут окружать только хорошие надёжные люди и друзья";
    
    // Постепенное появление текста
    setTimeout(() => {
        messageContainer.style.transition = 'all 1s ease';
        messageContainer.style.opacity = '1';
        messageContainer.style.transform = 'translateY(0)';
    }, 200);
    
    setTimeout(() => {
        finalTitle.style.transition = 'all 0.8s ease';
        finalTitle.style.opacity = '1';
        finalTitle.style.transform = 'translateY(0)';
    }, 600);
    
    // Эффект печатания для основного текста с callback для появления кнопки
    setTimeout(() => {
        typingText.style.opacity = '1';
        typingText.style.transform = 'translateY(0)';
        typeText(typingText, text, 50, function() {
            // Показываем подпись после окончания печатания
            setTimeout(() => {
                signature.style.transition = 'all 0.8s ease';
                signature.style.opacity = '1';
                signature.style.transform = 'translateY(0)';
            }, 500);
            
            // Показываем кнопку после подписи
            setTimeout(() => {
                nextBtn3.classList.add('show');
            }, 1300);
        });
    }, 1000);
    
    // Появление картинок с задержками
    setTimeout(() => {
        sideImage.classList.add('show');
    }, 1500);
    
    setTimeout(() => {
        sideImage2.classList.add('show');
    }, 2000);
    
    setTimeout(() => {
        sideImage3.classList.add('show');
    }, 2500);
    
    setTimeout(() => {
        sideImage4.classList.add('show');
    }, 3000);
}

// Функция эффекта печатания
function typeText(element, text, speed, callback) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    
    type();
}

// Инициализация третьей кнопки "Далее"
function initializeThirdButton() {
    const nextBtn3 = document.getElementById('next-btn-3');
    
    if (nextBtn3) {
        nextBtn3.addEventListener('click', function() {
            console.log('Третья кнопка нажата');
            
            // Переход на четвертый слайд
            const thirdSlide = document.getElementById('third-slide');
            const fourthSlide = document.getElementById('fourth-slide');
            
            // Скрываем третий слайд
            thirdSlide.style.display = 'none';
            
            // Показываем четвертый слайд
            fourthSlide.style.display = 'block';
            
            // Запускаем анимации четвертого слайда
            setTimeout(() => {
                initializeFourthSlide();
            }, 100);
            
            // Вибрация на мобильных устройствах
            if ('vibrate' in navigator) {
                navigator.vibrate(50);
            }
        });
    }
}

// Инициализация четвертого слайда
function initializeFourthSlide() {
    const messageContainer = document.querySelector('#fourth-slide .message-container');
    const finalTitle = document.querySelector('#fourth-slide .final-title');
    const typingText2 = document.getElementById('typing-text-2');
    const signature = document.querySelector('#fourth-slide .signature');
    const nextBtn4 = document.getElementById('next-btn-4');
    const sideImage = document.querySelector('#fourth-slide .side-image');
    const sideImage2 = document.querySelector('#fourth-slide .side-image-2');
    const sideImage3 = document.querySelector('#fourth-slide .side-image-3');
    const sideImage4 = document.querySelector('#fourth-slide .side-image-4');
    
    // Текст для печатания
    const text = "однажды я написал тебе и тогда я сделал правильный выбор ведь теперь не представляю свою жихнь без тебя,даже когда мы ссоримся я всегда очень скучаю думаю о тебе,теперь мне кажется что ты стала очень важным человек для меня и я не смогу никогда забыть тебя\n\n-ты для меня как сестра только от другой мамы\n-я не представляю свою жизнь без тебяяя";
    
    // Постепенное появление текста
    setTimeout(() => {
        messageContainer.style.transition = 'all 1s ease';
        messageContainer.style.opacity = '1';
        messageContainer.style.transform = 'translateY(0)';
    }, 200);
    
    setTimeout(() => {
        finalTitle.style.transition = 'all 0.8s ease';
        finalTitle.style.opacity = '1';
        finalTitle.style.transform = 'translateY(0)';
    }, 600);
    
    // Эффект печатания для основного текста с callback для появления кнопки
    setTimeout(() => {
        typingText2.style.opacity = '1';
        typingText2.style.transform = 'translateY(0)';
        typeText(typingText2, text, 50, function() {
            // Показываем подпись после окончания печатания
            setTimeout(() => {
                signature.style.transition = 'all 0.8s ease';
                signature.style.opacity = '1';
                signature.style.transform = 'translateY(0)';
            }, 500);
            
            // Показываем кнопку после подписи
            setTimeout(() => {
                nextBtn4.classList.add('show');
            }, 1300);
        });
    }, 1000);
    
    // Появление картинок с задержками
    setTimeout(() => {
        sideImage.classList.add('show');
    }, 1500);
    
    setTimeout(() => {
        sideImage2.classList.add('show');
    }, 2000);
    
    setTimeout(() => {
        sideImage3.classList.add('show');
    }, 2500);
    
    setTimeout(() => {
        sideImage4.classList.add('show');
    }, 3000);
}

// Инициализация четвертой кнопки "Далее"
function initializeFourthButton() {
    const nextBtn4 = document.getElementById('next-btn-4');
    
    if (nextBtn4) {
        nextBtn4.addEventListener('click', function() {
            console.log('Четвертая кнопка нажата');
            
            // Переход на пятый слайд
            const fourthSlide = document.getElementById('fourth-slide');
            const fifthSlide = document.getElementById('fifth-slide');
            
            // Скрываем четвертый слайд
            fourthSlide.style.display = 'none';
            
            // Показываем пятый слайд
            fifthSlide.style.display = 'block';
            
            // Запускаем видео через 2 секунды
            setTimeout(() => {
                initializeFifthSlide();
            }, 2000);
            
            // Вибрация на мобильных устройствах
            if ('vibrate' in navigator) {
                navigator.vibrate(50);
            }
        });
    }
}

// Инициализация пятого слайда
function initializeFifthSlide() {
    const video = document.getElementById('main-video');
    
    if (video) {
        video.play().catch(error => {
            console.log('Автовоспроизведение заблокировано:', error);
        });
    }
}

// Инициализация анимаций
function initializeAnimations() {
    // Анимация появления элементов
    const elements = document.querySelectorAll('.wish-item, .photo-placeholder, .heart-card');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 200 + index * 100);
    });
}

// Инициализация кнопки комплиментов
function initializeComplimentButton() {
    const button = document.getElementById('new-compliment');
    const complimentText = document.getElementById('compliment-text');
    
    if (button && complimentText) {
        button.addEventListener('click', function() {
            // Анимация кнопки
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Получаем новый комплимент
            const currentCompliment = complimentText.textContent;
            let newCompliment;
            
            do {
                newCompliment = compliments[Math.floor(Math.random() * compliments.length)];
            } while (newCompliment === currentCompliment);
            
            // Анимация изменения текста
            complimentText.style.opacity = '0';
            complimentText.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                complimentText.textContent = newCompliment;
                complimentText.style.opacity = '1';
                complimentText.style.transform = 'scale(1)';
            }, 300);
        });
    }
}

// Инициализация интерактивных элементов
function initializeInteractiveElements() {
    // Инициализация карточек-сердечек
    initializeHeartCards();
    
    // Добавляем интерактивность карточкам пожеланий
    const wishItems = document.querySelectorAll('.wish-item');
    wishItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });
    
    // Добавляем интерактивность фотографиям
    const photoPlaceholders = document.querySelectorAll('.photo-placeholder');
    photoPlaceholders.forEach(photo => {
        photo.addEventListener('click', function() {
            this.style.animation = 'pulse 0.6s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
        });
    });
    
    // Добавляем интерактивность заголовку
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        mainTitle.addEventListener('click', function() {
            this.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    }
}

// Инициализация карточек-сердечек
function initializeHeartCards() {
    const heartCards = document.querySelectorAll('.heart-card');
    
    heartCards.forEach(card => {
        card.addEventListener('click', function() {
            // Переворачиваем карточку
            this.classList.toggle('flipped');
            
            // Вибрация на мобильных устройствах
            if ('vibrate' in navigator) {
                navigator.vibrate(50);
            }
        });
    });
}


// Эффекты при прокрутке
function initializeScrollEffects() {
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
    
    // Наблюдаем за секциями
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });
}


// Добавляем виброотклик на мобильных устройствах
function addVibrationFeedback() {
    if ('vibrate' in navigator) {
        const interactiveElements = document.querySelectorAll('.wish-item, .photo-placeholder, .btn, .next-button');
        interactiveElements.forEach(element => {
            element.addEventListener('click', () => {
                navigator.vibrate(50);
            });
        });
    }
}

// Инициализация виброотклика
addVibrationFeedback();

// Добавляем эффект параллакса для фона (отключено для мобильных)
function initializeParallax() {
    // Отключаем параллакс на мобильных устройствах для экономии ресурсов
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            document.body.style.background = `
                linear-gradient(${135 + x * 10}deg, 
                #ff9a9e 0%, 
                #fecfef 50%, 
                #fad0c4 100%)
            `;
        });
    }
}

// Инициализация параллакса (только на десктопе)
initializeParallax();

// Добавляем эффект печатания для заголовка
function typeWriter() {
    const title = document.querySelector('.main-title');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        }
        
        setTimeout(type, 500);
    }
}

// Запускаем эффект печатания
typeWriter();

