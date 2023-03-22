interface TFAQ {
  questionText: string;
  answerText: string;
  isOpened?: boolean;
}

const FAQ_ITEMS: TFAQ[] = [
  {
    questionText:
      'Если мне нужен простой сайт, я могу сделаю его с помощью шаблона. Зачем мне сложное' +
      ' веб-приложение?',
    answerText:
      'Если мне нужен простой сайт, я сделаю его на конструкторе. Зачем мне все эти сложности' +
      ' с веб-приложением?',
    isOpened: true
  },
  {
    questionText:
      'Мне предлагают сделать сайт на Bitrix и Wordpress. Эти решения хуже и не будут' +
      ' работать?',
    answerText: '%ДОБАВИТЬ_ТЕКСТ%'
  },
  {
    questionText: 'Можно ли разбить процесс на этапы и реализовывать их последовательно?',
    answerText: '%ДОБАВИТЬ_ТЕКСТ%'
  },
  {
    questionText: 'У меня уже есть сайт, он прекрасно работает. Мне все придется делать заново?',
    answerText: '%ДОБАВИТЬ_ТЕКСТ%'
  }
];

export default FAQ_ITEMS;
