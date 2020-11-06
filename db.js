const faker = require("faker");

const questions = [
  {
    id: 1,
    title: "Favorite sports brand ?",
    options: ["Nike", "Adidas"],
    caption: "Curious about this one 🤔 #Brands #Nike #Adidas #sports",
  },
  {
    id: 2,
    title: "Best workout method ?",
    options: ["Crossfit", "Calisthenics"],
    caption:
      "Are you working out daily? #workout #sports #Crossfit #Calisthenics",
  },
  {
    id: 3,
    title: "Greatest of all time ?",
    options: ["Messi", "Cristiano"],
    caption: "Which one is the 🐐 ? #Messi #Cristiano #sports #football",
  },
  {
    id: 4,
    title: "Best innovation company ?",
    options: ["Apple", "Tesla"],
    caption:
      "Is Elon Musk the next Steve Jobs ? #Brands #innovation #Tesla #Apple",
  },
  {
    id: 5,
    title: "Favorite fast food restaurant ?",
    options: ["Burger King", "McDonalds"],
    caption:
      "This question make me hungry 🍔🍟. #McDonalds #BurgerKing #Brands #restaurants",
  },
];

const trending = [
  {
    id: 1,
    title: "#sports",
    interactions: 7130000000,
    topQuestions: [],
  },
  {
    id: 2,
    title: "#Brands",
    interactions: 28450000,
    topQuestions: [],
  },
];

// index.js
module.exports = () => {
  const data = { questions: [], trending };

  for (let i = 0; i < questions.length; i++) {
    const id = questions[i].id;
    const title = questions[i].title;
    const options = questions[i].options;
    const caption = questions[i].caption;
    const authorId = faker.random.number(100);
    const authorName = faker.name.findName();
    const pins = faker.random.number(100);
    const isPinned = faker.random.boolean();
    const isAnswered = isPinned ? true : faker.random.boolean();
    const createdAt = faker.date
      .between("2019-01-01", "2021-01-01")
      .toISOString()
      .split("T")[0];
    const answeredAt = !isAnswered
      ? ""
      : faker.date
          .between("2019-01-01", "2021-01-01")
          .toISOString()
          .split("T")[0];
    data.questions.push({
      id,
      title,
      options,
      caption,
      authorId,
      authorName,
      pins,
      isPinned,
      isAnswered,
      createdAt,
      answeredAt,
    });
  }

  data.trending[0].topQuestions = [
    data.questions[0],
    data.questions[1],
    data.questions[2],
  ];

  data.trending[1].topQuestions = [
    data.questions[0],
    data.questions[3],
    data.questions[4],
  ];

  return data;
};
