import React, {useState, useEffect} from 'react';

import Navigation from "../../components/navigation/Navigation";

import {Button} from "antd";

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

const Test = () => {
  const [currentSection, setCurrentSection] = useState('FIRST');
  const [data, setData] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (res.length !== 0) {
      setData(res.map(item => ({
        ...item,
        questions: item.questions.map(question => ({
          ...question,
          answer: null
        }))
      })))
    }
  }, []);

  const onChangeSection = () => {
    const currentSectionIndex = data.findIndex(item => item.sectionName === currentSection);

    if (currentSectionIndex !== data.length - 1) {
      setCurrentSection(data[currentSectionIndex + 1].sectionName)
    } else {
      const mapResult = question => ({
        questionId: question.id,
        option: question.answer
      });

      setResult({
        FIRST: data.find(item => item.sectionName === 'FIRST')?.questions.map(mapResult),
        SECOND: data.find(item => item.sectionName === 'SECOND')?.questions.map(mapResult),
        THIRD: data.find(item => item.sectionName === 'THIRD')?.questions.map(mapResult),
        FOURTH: data.find(item => item.sectionName === 'FOURTH')?.questions.map(mapResult),
      });
    }
  };

  return (
    <main className='details'>
      <header className='details-header'>
        <div className="wrapper">
          <Navigation/>

          <div className="details-header-content">
            <h1 className="details-header-content__title">
              Профориентационный тест
            </h1>
          </div>
        </div>
      </header>

      <section className='test'>
        <div className="wrapper">
          <h3 className="test-title">
            Наш тест состоит из 4 секций, в каждой по 11 вопросов. Прохождение теста не займет у вас более 10 минут, так
            что отвечайте внимательно и честно!
          </h3>

          <div className="test-content">
            <h1 className='test-content__title'>
              Секция {data.findIndex(item => item.sectionName === currentSection) + 1}
            </h1>

            {data.find(item =>
              item.sectionName === currentSection
            )?.questions.map((question, idx) => (
              <div className="test-content__item" key={question.id}>
                <p className="test-content-item__title">
                  {idx + 1}) {question.question}
                </p>

                <div className="test-content-item__options">
                  {question.options.map((option, questionsIdx) => (
                    <div
                      key={questionsIdx}
                      onClick={() => {
                        const currentSectionIdx = data.findIndex(item => item.sectionName === currentSection);
                        const arr = [...data];

                        arr[currentSectionIdx].questions[idx].answer = option.option
                        setData(arr)
                      }}
                      className={
                        `test-content-item-options__item 
                        ${option.option === question.answer && 'test-content-item-options__item-active'}`
                      }
                    />
                  ))}
                </div>
              </div>
            ))}

            <div className="test-content__button">
              <Button
                type='primary'
                size='large'
                disabled={!data.find(item =>
                  item.sectionName === currentSection
                )?.questions.every(question => question.answer)}
                onClick={onChangeSection}
              >
                {data.findIndex(item => item.sectionName === currentSection) === data.length - 1
                  ? 'Завершить тест'
                  : 'Следующая секция'
                }
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Test;