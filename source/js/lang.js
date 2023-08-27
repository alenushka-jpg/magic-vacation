const commonTranslations = {
  contestDurationLabel: {
    en: `Contest Duration:`,
    ru: `Даты проведения конкурса:`
  },
  contestDate: {
    en: `October 1st - 31st, 2023`,
    ru: `1 - 31.10 / 2023`
  }
};

const langPage = {
  nav: {
    home: {
      en: `Home`,
      ru: `Главная`
    },
    history: {
      en: `History`,
      ru: `История`
    },
    prizes: {
      en: `Prizes`,
      ru: `Призы`
    },
    rules: {
      en: `Rules`,
      ru: `Правила`
    },
    game: {
      en: `Game`,
      ru: `Игра`
    },
    change: {
      en: `EN`,
      ru: `RU`
    },
    inst: {
      en: `Link to the Instagram social network`,
      ru: `Ссылка на социальную сеть инстаграм`
    },
    fb: {
      en: `Link to the Facebook social network`,
      ru: `Ссылка на социальную сеть фейсбук`
    },
    vk: {
      en: `Link to the VKontakte social network`,
      ru: `Ссылка на социальную сеть вконтакте`
    },
  },
};

const langPromo = {
  promo: {
    h1: {
      en: `Contest "Mysterious Vacation": Win a trip to any country!`,
      ru: `Конкурс "Таинственный отпуск": выиграйте путешествие в любую страну!`
    },
    h2: {
      en: `Mysterious Vacation`,
      ru: `Таинственный отпуск`
    },
    label: commonTranslations.contestDurationLabel,
    date: commonTranslations.contestDate,
    message: {
      en:
      `Be the first to decipher the destination and set off on an adventure
      at your convenience, or seize one of the many available prizes.`,
      ru:
      `Отгадай первым место назначения и отправься в путешествие в любое время
      или получи один из многочисленных призов.`
    },
  },
};

const langFooter = {
  footer: {
    showmess: {
      en: `Show message`,
      ru: `Показать сообщение`
    },
    hidemess: {
      en: `Hide message`,
      ru: `Скрыть сообщение`
    },
    label: commonTranslations.contestDurationLabel,
    date: commonTranslations.contestDate,
  },
};

const langSwiper = {
  swiper: {
    history: {
      en: `History`,
      ru: `История`
    }
  },
  desc: {
    1: {
      en: `James Target was the founder of "Fjord Inc". Since 1965,
      "Fjord Inc" has been renowned for its reliable and convenient
      suitcases and tourist accessories.`,
      ru: `Джеймс Таргет был основателем компании "Fjord Inc".
      С 1965 года "Fjord Inc" славилась своими надежными и
      удобными чемоданами и аксессуарами для туристов.`
    },
    2: {
      en: `When James was 7 years old, an uncle visited their home and
      entertained the children with stories of his trip to a place
      that seemed incredible to young Target. Then James decided
      that he would visit it one day, but would not talk about the dream
      until it came true.`,
      ru: `Когда Джеймсу было 7 лет, дядя приезжал к ним домой и
      рассказывал детям истории о своем путешествии в место,
      которое казалось маленькому Таргету удивительным.
      Тогда Джеймс решил, что однажды посетит это место,
      но не будет рассказывать о своей мечте, пока она не сбудется.`
    },
    3: {
      en: `James Target became an avid traveler.
      He visited 5 continents and 126 countries.`,
      ru: `Джеймс Таргет стал страстным путешественником.
      Он посетил 5 континентов и 126 стран.`
    },
    4: {
      en: `He rafted the Amazon and dived into the caves of France,
      meditated in the mountains of Tibet and shook hands with the leader of the Akugaua tribe.`,
      ru: `Он сплавлялся по Амазонке и нырял в пещеры Франции,
      медитировал в горах Тибета и пожимал руку вождю племени Акугауа.`
    },
    5: {
      en: `From his trips, James Target brought ideas on how to make his "Fjord Inc"
      suitcases convenient and adapted to different travel conditions.`,
      ru: `Из своих путешествий Джеймс Таргет привозил идеи о том,
      как сделать свои чемоданы "Fjord Inc" удобными и приспособленными
      для различных условий путешествия.`
    },
    6: {
      en: `All this time, James never abandoned the idea of his dream trip. However,
      as soon as he started planning, obstacles arose that prevented him from going there.`,
      ru: `Все это время Джеймс не оставлял идею своего мечтаемого путешествия.
      Однако, как только он начинал планировать, возникали препятствия,
      которые мешали ему отправиться туда.`
    },
    7: {
      en: `At the age of 67, James Target was caught in an avalanche and died.
      In his will, he entrusted the adventurous journey to three brave souls,
      who shared his spirit.`,
      ru: `В возрасте 67 лет Джеймс Таргет попал под лавину и погиб.
      В своем завещании он поручил отправиться в авантюрное путешествие
      троим смелым душам, которые разделяли его дух.`
    },
    8: {
      en: `Those who can identify the mysterious place by asking questions to the specially trained
      AI "Sone", will embark on a fantastic journey.`,
      ru: `Те, кто сможет узнать загадочное место, задавая вопросы специально
      обученному ИИ "Соне", отправятся в фантастическое путешествие.`
    },
  }
};

const langPrizes = {
  prizes: {
    h3: {
      en: `Prizes`,
      ru: `Призы`
    },
    desc: {
      en: `Find the answer and receive one of the prizes:`,
      ru: `Найди ответ и получи один из призов:`
    },
    text: {
      1: {
        en: `mysterious trips`,
        ru: `загадочных путешествия`
      },
      2: {
        en: `reliable suitcases`,
        ru: `надежных чемоданов`
      },
      3: {
        en: `discount codes of 15%`,
        ru: `промокодов на скидку 15%`
      },
    },
  }
};

// eslint-disable-next-line no-console
console.log(langPage, langPromo, langFooter, langSwiper, langPrizes);
