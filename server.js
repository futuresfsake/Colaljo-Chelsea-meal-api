const express = require('express');
const app = express();
const PORT = 3000;

const meals = [
    { id: 1, meal: "Chicken Adobo", price: 85 },
    { id: 2, meal: "Pork Sinigang", price: 95 },
    { id: 3, meal: "Beef Caldereta", price: 120 },
    { id: 4, meal: "Tapsilog", price: 70 },
    { id: 5, meal: "Pancit Canton", price: 60 }
];

// retrieve all meals
app.get("/api/meals", (req, res) => {
    res.json(meals);
});

// retrieve a specific meal by id
app.get("/api/meals/:id", (req, res) => {
    const mealId = Number(req.params.id);
    const meal = meals.find(m => m.id === mealId);

    if (!meal) {
        return res.status(404).json({ message: "Meal not found" });
    }

    res.json(meal);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
