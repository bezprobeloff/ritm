interface TFAQ {
  questionText: string;
  answerText: string;
  isOpened?: boolean;
}

const FAQ_ITEMS: TFAQ[] = [
  {
    questionText: 'Можно ли заказать у вас решение на готовой CMS или конструкторе сайтов?',
    answerText:
      'Нет. Мы специализируемся на индивидуальных решениях, которые в профессиональной ' +
      'среде называются кастомными. Это не обязательно сложные, но всегда уникальные продукты. ' +
      'Уникальность может выражаться в дизайне, особых функциях или способе взаимодействия с ' +
      'пользователями. К сожалению, готовые CMS и конструкторы не обладают достаточной ' +
      'гибкостью и надежностью для реализации таких решений.'
  },
  {
    questionText:
      'У нашей компании есть сайт на Wordpress (Bitrix, Drupal). Мы хотели бы добавить ' +
      'дополнительный функционал. В таком случае вы не сможете нам помочь?',
    answerText:
      'Конечно, сможем! У этой задачи есть как минимум два варианта решения. ' +
      'Первый: мы пишем для вас новый продукт (сайт, магазин, систему управления заказами, ' +
      'систему приема платежей), но оставляем привычный интерфейс для ваших сотрудников. ' +
      'Второй: мы не меняем ваш сайт и интегрируем новые продукты таким образом, чтобы они ' +
      'гармонично работали в единой экосистеме.'
  },
  {
    questionText: 'Какие решения позволяет реализовать технология веб-приложений?',
    answerText:
      'Практически любые. Веб-приложения прекрасно подходят для реализации принципа Интернет ' +
      'Вещей (IoT) во всех его проявлениях. Другими словами, веб-приложения позволяют ' +
      'связать оффлайн мир (товары, оборудование, транспортные средства) с онлайн миром. ' +
      'Самым простым примером является система онлайн мониторинга параметров работы вашего ' +
      'оборудования с возможностью доступа из любой точки мира.'
  },
  {
    questionText: 'Это дорогие технологии?',
    answerText:
      'Все зависит от поставленной задачи. Если компания находится на начальном этапе своего ' +
      'развития и необходимо написать простой сайт с формой обратной связи, то бюджет будет ' +
      'не сильно отличаться от создания такого же продукта на конструкторе. При этом в отличие ' +
      'от конструктора вы получите быстрое современное решение, не подверженное санкциям ' +
      'и ограничениям с уникальным дизайном. Если же речь идет о создании на основе сайта ' +
      'компании системы по администрированию нескольких десятков котельных, расположенных в ' +
      'разных частях страны, с интеграцией аналитической системы, то в таком случае бюджет ' +
      'проекта не может быть низким по определению.'
  },
  {
    questionText: 'На какую поддержку ваших решений можно рассчитывать?',
    answerText:
      'Мы реализуем техническую поддержку на протяжении всего жизненного цикла продукта. ' +
      'Если по каким-то причинам, вы захотите администрировать продукт сами, то все наши ' +
      'решения поставляются с документированным кодом и всеми необходимыми комментариями.'
  },
  {
    questionText: 'Можно ли реализовать проект поэтапно?',
    answerText:
      'Да, конечно. Вы можете выстраивать свою IT-экосистему последовательно в зависимости ' +
      'от приоритетности задач. При разработке мы предусматриваем возможность интеграции ' +
      'дополнительных модулей в существующий продукт.'
  },
  {
    questionText: 'В чем ваше отличие от традиционных веб-студий?',
    answerText:
      'Если ответить кратко, то в следующем: веб-студии разрабатывают сайт, интеграция ' +
      'которого в производственный процесс компании становится задачей самой компании. ' +
      'Мы сначала анализируем производственный процесс и реализуем набор решений, ' +
      'максимально отражающей задачи бизнеса. При этом сайт в этом наборе решений ' +
      'является только одним из элементов и при определенных условиях может даже не затрагиваться.'
  }
];

export default FAQ_ITEMS;
