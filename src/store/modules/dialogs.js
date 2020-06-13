const state = {
  dialogs: [
    {
      id: 1,
      subject: 'Простой запрос',
      created: '2019-08-01 23:59',
      parts: [
        {
          id: 1,
          author: 'vasya',
          text: 'Привет, как дела?',
          created: '2019-08-01 23:59'
        },
        {
          id: 2,
          author: 'petya',
          created: '2019-08-02 01:20',
          text: 'Привет, все хорошо, спасибо!'
        },
        {
          id: 3,
          author: 'petya',
          created: '2019-08-02 05:20',
          text: 'А у тебя?'
        }
      ]
    },
    {
      id: 2,
      subject: 'Вопрос по домену',
      created: '2016-03-02 14:19',
      parts: [
        {
          id: 1,
          author: 'petr',
          created: '2019-08-06 12:20',
          text: 'Здравствуйте, тут есть кто-нибудь?'
        },
        {
          id: 2,
          author: 'vasiliy',
          created: '2019-08-06 12:34',
          text: 'Да, я вас слушаю!'
        },
        {
          id: 3,
          author: 'petr',
          created: '2019-08-06 12:38',
          text: 'Помогите мне настроить домен!'
        },
        {
          id: 4,
          author: 'vasiliy',
          created: '2019-08-06 12:34',
          text: 'Какой домен?'
        },
        {
          id: 5,
          author: 'petr',
          created: '2019-08-06 12:38',
          text: 'example.com'
        },
        {
          id: 6,
          author: 'vasiliy',
          created: '2019-08-06 12:34',
          text: 'Нам нужен доступ к хостингу'
        },
        {
          id: 7,
          author: 'petr',
          created: '2019-08-06 12:38',
          text: 'Конечно. Адрес 0.0.0.0. Логин Fake, пароль password'
        },
        {
          id: 8,
          author: 'vasiliy',
          created: '2019-08-06 12:34',
          text: 'Все готово'
        },
        {
          id: 9,
          author: 'vasiliy',
          created: '2019-08-06 12:34',
          text: 'Проверьте, все ли верно'
        },
        {
          id: 10,
          author: 'petr',
          created: '2019-08-06 12:38',
          text: 'Спасибо'
        }
      ]
    }
  ]
}
const mutations = {
  PUSH_MESSAGE (state, dts) {
    const index = state.dialogs.findIndex(e => e.id === dts.chatId)
    state.dialogs[index].parts.push(dts.message)
  }
}
const actions = {
  pushMessage ({ commit, getters }, text) {
    const current = getters.getCurrentDialog
    const currentDialog = getters.getDialogById(current)
    const dts = {
      chatId: currentDialog.id,
      message: {
        id: currentDialog.parts.length + 1,
        author: currentDialog.parts[0].author,
        created: new Date().toLocaleString(),
        text
      }
    }
    commit('PUSH_MESSAGE', dts)
  }
}
const getters = {
  getDialogs: state => state.dialogs,
  getDialogById: state => id => {
    return state.dialogs.find(e => {
      return e.id === +id
    })
  }
}

export default {
  state, getters, mutations, actions
}
