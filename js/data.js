const getData = () => {
  // Массив случайных имен для авторов комментариев
  const NAMES = [
    'Артём',
    'Алексей',
    'Семён',
    'Светлана',
    'Петр',
    'Катерина',
    'Валера',
    'Таня',
    'Илья',
    'Толя',
  ];

  // Массив сообщений для комментариев
  const MESSAGES = [
    'Вау!!! Какая красота',
    'Что-то как-то не ОК =/',
    'Удаляй страницу!',
    'Когда деньги вернешь, фотки он постит....',
    'Почему игноришь?',
    'Друг называется, мы когда встретимся?????',
    'Ну и фигня конечно, но ладно ЛАЙК)',
  ];

  // Массив описаний для фото
  const DESCRIPTIONS = [
    'Зима',
    'Весна',
    'Лето',
    'Осень',
    'Пейзаж',
    'Рассвет',
  ];

  // Функция должна что-то возвращать
  return { NAMES, MESSAGES, DESCRIPTIONS };
};

// Экспорт функции
export {getData};
