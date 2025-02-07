function showRainbowCakePage() {
    const defaultQuantity = 1; // Set default quantity

    //set HTML structure for Rainbow cake page
    document.getElementById("content").innerHTML = `
        <div class="calculate-page">
            <h3>
            <img src="ass IMG/rainbow.png" style="width: 50px; height: 50px; vertical-align: middle; margin-right: 10px;">
            Calculate Ingredients for Rainbow Cake
            </h3>
            <label for="quantity">Enter the desired quantity:</label>
            <input type="number" id="quantity" placeholder="Enter quantity" min="1" value="${defaultQuantity}">
            <button style="width: 150px;" onclick="calculateRainbowCake()">Calculate</button>

            <h3>Cake Ingredients</h3>
            <table id="cakeIngredients">
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Amount</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody id="cakeIngredientsTable"></tbody>
            </table>

            <h3>Icing Ingredients</h3>
            <table id="icingIngredients">
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Amount</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody id="icingIngredientsTable"></tbody>
            </table>

            <h3 style = "color:rgb(65, 48, 53)">How to Make Rainbow Cake</h3>
             <ol>
                <li style = "color: #800500">Preheat oven to 350°F (175°C). Grease six 8-inch pans.</li>
                <li style = "color: #B35512">Make Cake Batter:
                    <ul  style = "color: #C79322">
                        <li>Mix dry ingredients.</li>
                        <li>Cream butter and sugar, then add eggs and vanilla.</li>
                        <li>Alternate adding dry ingredients and milk/oil.</li>
                        <li>Divide batter into 6 portions and color each with food coloring.</li>
                    </ul>
                </li>
                <li style = "color: #005427">Bake: Pour batter into pans and bake for 20-25 minutes. Cool completely.</li>
                <li style = "color: #052CA3">Make Frosting: 
                    <ul>
                        <li>Beat butter, powdered sugar, vanilla, milk, and salt until smooth.</li>
                    </ul>
                </li>
                <li style = "color: #580599">Assemble:
                    <ul>
                        <li>Layer cakes with frosting in between.</li>
                        <li>Cover with a crumb coat, chill, then frost completely.</li>
                    </ul>
                </li>
                <li style = "color: #4b0082">Serve and enjoy your colorful cake!</li>
            </ol>
            <button style="margin-top: 20px; width:200px; padding: 10px 20px;" onclick="showRecipesPage()">Back to Recipes</button>
            <button style="margin-top: 20px; width:80px; padding: 10px 20px;" onclick="showHomePage()">Home</button>
        </div>
    `;

    // Call the calculate function with the default quantity
    calculateRainbowCake(defaultQuantity);
}

// Calculate the ingredients for Rainbow Cake based on the quantity entered by the user
function calculateRainbowCake() {
    //define cake and icing ingredients
    const ingredients = 
    {
        cake: 
        {
            BAKINGPOWDER: { amount: 2, unit: "teaspoons" },
            BAKINGSODA: { amount: 1, unit: "teaspoon" },
            BUTTER: { amount: 150, unit: "grams" },
            EGGS: { amount: 3, unit: "eggs" },
            FLOUR: { amount: 300, unit: "grams" },
            MILK: { amount: 200, unit: "ml" },
            SALT: { amount: 1, unit: "teaspoon" },
            SUGAR: { amount: 250, unit: "grams" },
            VANILLAEXTRACT: { amount: 3, unit: "teaspoons" },
            FOODCOLORING: { amount: 3, unit: "drops each color" }
        },
        icing: 
        {
            POWDERSUGAR: { amount: 200, unit: "grams" },
            BUTTER: { amount: 100, unit: "grams" },
            MILK: { amount: 50, unit: "ml" }
        }
    };
    
    //get user input
    const quantity = document.getElementById("quantity").value || 1; // Use user input or default to 1
    const cakeTable = document.getElementById("cakeIngredientsTable");
    const icingTable = document.getElementById("icingIngredientsTable");

    //clear previous values
    cakeTable.innerHTML = "";
    icingTable.innerHTML = "";

    if (quantity > 0) {
        // calculate and display new ingredient amounts for cake ingredient cake ingredients
        for (const ingredient in ingredients.cake) {
            const calculatedAmount = ingredients.cake[ingredient].amount * quantity; // Calculate the amount based on the quantity
            const row = `<tr>
                <td>${ingredient}</td>
                <td>${calculatedAmount}</td>
                <td>${ingredients.cake[ingredient].unit}</td>
            </tr>`;
            cakeTable.innerHTML += row; // Add the row to the cake ingredients table
        }

        // calculate and display new ingredient amounts for cake ingredient icing ingredients
        for (const ingredient in ingredients.icing) {
            const calculatedAmount = ingredients.icing[ingredient].amount * quantity; // Calculate the amount based on the quantity
            const row = `<tr>
                <td>${ingredient}</td>
                <td>${calculatedAmount}</td>
                <td>${ingredients.icing[ingredient].unit}</td>
            </tr>`;
            icingTable.innerHTML += row; // Add the row to the icing ingredients table
        }
    } else {
        alert("Please enter a valid quantity!");// Alert the user if the quantity is invalid
    }
}
