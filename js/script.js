
// ===================================
// 1. Перемикання вкладок
// ===================================

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {

    btn.addEventListener('click', () => {

        // Видаляємо active у всіх кнопок
        tabBtns.forEach(item => {
            item.classList.remove('active');
        });

        // Приховуємо всі блоки контенту
        tabContents.forEach(item => {
            item.classList.remove('active');
        });

        // Активуємо натиснуту кнопку
        btn.classList.add('active');

        // Отримуємо ID потрібного блоку
        const tabId = btn.getAttribute('data-tab');

        // Показуємо відповідний контент
        document.getElementById(tabId).classList.add('active');

    });

});


// ===================================
// 2. Робота з модальним вікном
// ===================================

const modal = document.getElementById('my-modal');

const openButtons = document.querySelectorAll(
    '#open-modal-btn, #hero-contact-btn, #bottom-contact-btn'
);

const closeBtn = document.querySelector('.close-modal');


// Функція відкриття
function openModal() {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}


// Функція закриття
function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
}


// Відкриття через кнопки
openButtons.forEach(btn => {
    btn.addEventListener('click', openModal);
});


// Закриття через хрестик
closeBtn.addEventListener('click', closeModal);


// Закриття при натисканні на затемнений фон
modal.addEventListener('click', (event) => {

    if (event.target === modal) {
        closeModal();
    }

});


// Закриття клавішею Escape
document.addEventListener('keydown', (event) => {

    if (event.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
    }

});


// ===================================
// 3. Обробка форми
// ===================================

const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('form-success');

contactForm.addEventListener('submit', (event) => {

    // Забороняємо перезавантаження сторінки
    event.preventDefault();

    // Показуємо повідомлення
    successMessage.classList.add('visible');

    // Очищаємо форму
    contactForm.reset();

});
