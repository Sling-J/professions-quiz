const res = [
  {
    "sectionName": "FIRST",
    "questions": [
      {
        "id": 1,
        "question": "Я могу закрыть глаза на то, что мне нравится или не нравится, если это логично и имеет смысл. Например, купить обувь которая мне не нравится только из соображений практичности.",
        "options": [
          {
            "option": "1",
          },
          {
            "option": "2",
          },
          {
            "option": "3",
          },
          {
            "option": "4",
          },
          {
            "option": "5",
          }
        ]
      },
      {
        "id": 2,
        "question": "Я человек сердичный и тактичный, я не буду говорить что-то, если это обидит человека",
        "options": [
          {
            "option": "1",
          },
          {
            "option": "2",
          },
          {
            "option": "3",
          },
          {
            "option": "4",
          },
          {
            "option": "5",
          }
        ]
      },
    ]
  },
  {
    "sectionName": "SECOND",
    "questions": [
      {
        "id": 1,
        "question": "Вы все время думаете о других людях и о том, что они подумают?",
        "options": [
          {
            "option": "1",
          },
          {
            "option": "2",
          },
          {
            "option": "3",
          },
          {
            "option": "4",
          },
          {
            "option": "5",
          }
        ]
      },
      {
        "id": 2,
        "question": "Во время ссоры друзей, будете ли вы защищать слабого, но виноватого друга?",
        "options": [
          {
            "option": "1",
          },
          {
            "option": "2",
          },
          {
            "option": "3",
          },
          {
            "option": "4",
          },
          {
            "option": "5",
          }
        ]
      },
      {
        "id": 3,
        "question": "Стоит ли гармония с собой, семьей, друзьями и окружающими миром для вас на первом месте?",
        "options": [
          {
            "option": "1",
          },
          {
            "option": "2",
          },
          {
            "option": "3",
          },
          {
            "option": "4",
          },
          {
            "option": "5",
          }
        ]
      },
      {
        "id": 4,
        "question": "Важно ли для вас в конфликте или в сорре докопаться до правды и справедливости, во что бы то ни стало?",
        "options": [
          {
            "option": "1",
          },
          {
            "option": "2",
          },
          {
            "option": "3",
          },
          {
            "option": "4",
          },
          {
            "option": "5",
          }
        ]
      },
    ]
  }
];

export const getTests = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        result: res
      });
    }, 200)
  })
}

export const checkResult = answers => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answers) {
        resolve({
          result: 'IE'
        })
      } else {
        reject({
          error: 'Something got wrong!'
        })
      }
    }, 300)
  })
}