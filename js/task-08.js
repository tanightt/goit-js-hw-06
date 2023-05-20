// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const refs = {
    form: document.querySelector('.login-form'),
    inputEmail: document.querySelector('[type="email"]'),
    inputPass: document.querySelector('[type="password"]'),
    btn: document.querySelector('[type="submit"]'),
}

const onSubmit = (event) => {
    event.preventDefault();
    if (refs.inputEmail.value === '' || refs.inputPass.value === '') {
        return alert('Всі поля повинні бути заповнені!');
    }

    const { email, password } = event.target.elements;
    console.log({
    email: refs.inputEmail.value,
    password: refs.inputPass.value,
    });
    
    event.target.reset();
}

refs.form.addEventListener('submit', onSubmit);


