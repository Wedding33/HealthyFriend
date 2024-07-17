const express = require('express');
const router = express.Router();

const foodData = {
  apple: { calories: 52 },
  banana: { calories: 89 },
  orange: { calories: 47 },
  // Add more food data as needed
};

router.get('/:name', (req, res) => {
  const foodName = req.params.name.toLowerCase();
  const foodInfo = foodData[foodName];

  if (foodInfo) {
    res.json(foodInfo);
  } else {
    res.status(404).json({ message: 'Food not found' });
  }
});

module.exports = router;

// const express = require('express');
// const axios = require('axios');
// const router = express.Router();

// const OPENAI_API_KEY = 'sk-proj-CHPujSBCqVeLJ9473Ib2T3BlbkFJX734zlhOjfAuEb0hn0yE'; // 替换为你的 OpenAI API 密钥
// const API_URL = 'https://api.openai.com/v1/engines/gpt3.5-turbo/completions';

// router.get('/:name', async (req, res) => {
//   const foodName = req.params.name.toLowerCase();
//   const prompt = `What is the calorie content of ${foodName}?`;

//   try {
//     const response = await axios.post(
//       API_URL,
//       {
//         prompt: prompt,
//         max_tokens: 60,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${OPENAI_API_KEY}`
//         }
//       }
//     );

//     const result = response.data.choices[0].text.trim();
//     res.json({ calories: result });
//   } catch (error) {
//     console.error('Error fetching calorie information:', error.message);
//     if (error.response) {
//       console.error('Response data:', error.response.data);
//       console.error('Response status:', error.response.status);
//       console.error('Response headers:', error.response.headers);
//     }
//     res.status(500).json({ message: 'Error fetching calorie information' });
//   }
// });

// module.exports = router;

//curl https://api.openai.com/v1/engines/davinci-codex/completions -H "Content-Type: application/json" -H "Authorization: Bearer sk-proj-CHPujSBCqVeLJ9473Ib2T3BlbkFJX734zlhOjfAuEb0hn0yE" -d '{"prompt": "What is the calorie content of an apple?","max_tokens": 60}'
