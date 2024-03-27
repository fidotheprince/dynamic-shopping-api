const express = require('express')
const cors = require('cors')
const app = express()
const OpenAI = require('openai');
require('dotenv').config();
const openai = new OpenAI(process.env.OPENAI_API_KEY);
const PORT = process.env.PORT || 3000;

app.use(express.json());

const prompt = (groceryItems) =>`
  Given a list of grocery items, categorize each item into categories like, but not limited to: Dairy, Fruits & Vegetables, 
  Household Items, Meat & Poultry, and Frozen Foods. Ensure that each item is accurately categorized based on its nature and characteristics. 
  Once categorized, organize the categories in alphabetical order.
  Within each category, also organize the items in alphabetical order. 
  Return the categorized list as a JSON array. For example, if the input list includes items like, 
  "eggs, tomatoes, avocados, carrots, milk, toilet paper, ground beef, ice cream," 
  your task is to analyze and categorize these items accordingly. 
  The output should be a JSON stringified array formatted as follows:
  [
    {"Dairy": ["eggs", "milk"]},
    {"Frozen Foods": ["ice cream"]},
    {"Fruits & Vegetables": ["avocados", "carrots", "tomatoes"]},
    {"Household Items": ["toilet paper"]},
    {"Meat & Poultry": ["ground beef"]}
  ]
  This structured categorization allows users to quickly identify where items are located in the store, 
  thereby minimizing shopping time and enhancing the overall shopping experience. Your role is crucial in ensuring the list is intuitive and well-organized, 
  reflecting the smart capabilities of our shopping list application.

  Here is the list of grocery items: ${groceryItems} let's categorize them. Just return the JSON string with no formatting please and remove special characters.
`

app.use(cors())
app.post('/', function (req, res) {
  const groceryItems = req.body.join(", ")
  const content = prompt(groceryItems);
  const encapsulatedResponse = async () => {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content }],
      model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0]) 
    res.send({ status: 'success', data: completion.choices[0]})
  }
  encapsulatedResponse();
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
