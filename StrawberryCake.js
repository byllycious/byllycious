function showStrawberryCakePage() {
    const defaultQuantity = 1; // Set default quantity

    // set HTML structure for Strawberry cake page
    document.getElementById("content").innerHTML = `
    <div class="video-container">
                <video controls width="400">
                    <source src="ass IMG/strawberry cake.mp4" type="video/mp4">
                </video>
            </div>
        </div>
        <div class="calculate-page">
            <h3>
            <img src="ass IMG/strawberry.png" style="width: 50px; height: 50px; margin-right: 80px;">
            Calculate Ingredients for Strawberry Cake
            </h3>
            <label for="quantity">Enter the desired quantity:</label>
            <input type="number" id="quantity" placeholder="Enter quantity" min="1" value="${defaultQuantity}">
            <button style="width: 150px;" onclick="calculateStrawberryCake()">Calculate</button>

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

            <h3>How to Make Strawberry Cake</h3>
            <ol>
                <li>Preheat oven to 350°F (175°C). Grease and line two 9-inch round cake pans.</li>
                <li>Make the Cake:
                    <ul>
                        <li>Whisk flour, baking powder, baking soda, and salt.</li>
                        <li>Cream butter and sugar until fluffy.</li>
                        <li>Add eggs one at a time, then stir in vanilla.</li>
                        <li>Gradually add dry ingredients and milk, alternating.</li>
                        <li>Fold in strawberry puree.</li>
                    </ul>
                </li>
                <li>Bake: Pour batter into pans and bake for 25-30 minutes until a toothpick comes out clean.</li>
                <li>Make Frosting: 
                    <ul>
                        <li>Beat butter until creamy.</li>
                        <li>Add powdered sugar, strawberry puree (or extract), and milk.</li>
                        <li>Beat until smooth.</li>
                    </ul>
                </li>
                <li>Assemble: Frost one cake layer, top with second layer, and frost the entire cake.</li>
                <li>Serve: Slice and enjoy!</li>
                <li style = "color:  hotpink;">For whipping cream, you can use the instant one at the store or make it yourself by whipping heavy cream with sugar and vanilla extract.</li>
            </ol>
            <button style="margin-top: 20px; width:200px; padding: 10px 20px;" onclick="showRecipesPage()">Back to Recipes</button>
            <button style="margin-top: 20px; width:80px; padding: 10px 20px;" onclick="showHomePage()">Home</button>
        </div>
    `;

    // Call the calculate function with the default quantity
    calculateStrawberryCake(defaultQuantity);
}

// Calculate the ingredients for Strawberry Cake
function calculateStrawberryCake() {
    //define cake and icing ingredients
    const ingredients = {
        cake: {
            BAKINGPOWDER: { amount: 2, unit: "teaspoons" },
            BAKINGSODA: { amount: 1, unit: "teaspoon" },
            BUTTER: { amount: 120, unit: "grams" },
            EGGS: { amount: 2, unit: "eggs" },
            FLOUR: { amount: 250, unit: "grams" },
            STRAWBERRYPUREE: { amount: 100, unit: "ml" },
            MILK: { amount: 180, unit: "ml" },
            SALT: { amount: 1, unit: "teaspoon" },
            SUGAR: { amount: 200, unit: "grams" },
            VANILLAEXTRACT: { amount: 2, unit: "teaspoons" }
        },
        icing: {
            POWDERSUGAR: { amount: 150, unit: "grams" },
            BUTTER: { amount: 100, unit: "grams" },
            STRAWBERRYPUREE: { amount: 50, unit: "ml" }
        }
    };

    //get user input
    const quantity = document.getElementById("quantity").value || 1; // Use user input or default to 1
    const cakeTable = document.getElementById("cakeIngredientsTable");
    const icingTable = document.getElementById("icingIngredientsTable");

    cakeTable.innerHTML = "";
    icingTable.innerHTML = "";

    if (quantity > 0) {
        // calculate and display new ingredient amounts for cake ingredients
        for (const ingredient in ingredients.cake) {
            const calculatedAmount = ingredients.cake[ingredient].amount * quantity;// Calculate the amount based on the quantity
            const row = `<tr>
                <td>${ingredient}</td>
                <td>${calculatedAmount}</td>
                <td>${ingredients.cake[ingredient].unit}</td>
            </tr>`;
            cakeTable.innerHTML += row;
        }

        // calculate and display new ingredient amounts for icing ingredients
        for (const ingredient in ingredients.icing) {
            const calculatedAmount = ingredients.icing[ingredient].amount * quantity;// Calculate the amount based on the quantity
            const row = `<tr>
                <td>${ingredient}</td>
                <td>${calculatedAmount}</td>
                <td>${ingredients.icing[ingredient].unit}</td>
            </tr>`;
            icingTable.innerHTML += row;
        }
    } else {
        // Show an alert if the quantity is not valid
        alert("Please enter a valid quantity!");
    }
}
