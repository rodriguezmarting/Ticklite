const faker = require("faker");

const trendingHashtags = [
  {
    id: 1,
    title: "#sports",
    interactions: 7130000000,
    topQuestionsIds: [1, 2, 3],
  },
  {
    id: 2,
    title: "Brands",
    interactions: 2840000,
    topQuestionsIds: [1, 4, 5],
  },
];

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
    title: "Favorit fast food restaurant ?",
    options: ["Burger King", "McDonalds"],
    caption:
      "This question make me hungry 🍔🍟. #McDonalds #BurgerKing #Brands #restaurants",
  },
];
// index.js
module.exports = () => {
  const data = { questions: [], trendingHashtags };

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

  return data;
};
