function showLemonCakePage() {
    const defaultQuantity = 1; // Set default quantity

    // set HTML structure for Lemon cake page
    document.getElementById("content").innerHTML = `

    <div class="video-container">
                <video controls width="400">
                    <source src="ass IMG/lemon cake.mp4" type="video/mp4">
                </video>
            </div>
        </div>
        <div class="calculate-page">
            <h3>
            <img src="ass IMG/lemon.png" style="width: 70px; height: 70px; vertical-align: middle; margin-right: 10px;">
            Calculate Ingredients for Lemon Cake
            </h3>

            <label for="quantity">Enter the desired quantity:</label> 
            <input type="number" id="quantity" placeholder="Enter quantity" min="1" value="${defaultQuantity}">
            <button style="width: 150px;" onclick="calculateLemonCake()">Calculate</button>

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

            <h3 style = "color: #5F75B3">How to Make Lemon Cake</h3>
            <ol>
                <li><b style = "color: hotpink;">Preheat Oven:</b> Heat to 350°F (177°C). Grease a 9x5-inch loaf pan.</li>
                <li><b style = "color: rgb(210, 141, 176);">Mix Dry Ingredients:</b>
                    <ul>
                        <li>Combine flour, baking powder, lemon zest, and salt.</li>
                    </ul>
                </li>
                <li><b style = "color: rgb(218, 127, 173);">Cream Butter & Sugar:</b>
                    <ul>
                        <li>Beat butter and sugar until fluffy (4-6 mins).</li>
                        <li>Add eggs, vanilla, and lemon juice, mixing well.</li>
                    </ul>
                </li>
                <li><b style = "color: rgb(222, 95, 158);">Combine Ingredients:</b> Gradually alternate adding dry ingredients and buttermilk, starting and ending with dry mix.</li>
                <li><b style = "color: rgb(239, 88, 163);">Bake:</b> Pour batter into the pan. Bake 45-55 mins until golden and a toothpick comes out with a few crumbs.</li>
                <li><b style = "color: rgb(211, 105, 158);">Cool & Syrup:</b> Cool 15 mins, then brush a syrup of lemon juice and sugar over the warm cake.</li>
                <li><b style = "color: rgb(248, 58, 153);">Icing:</b>>
                    <ul>
                        <li>Mix lemon juice, milk, and icing sugar into thick icing.</li>
                        <li>Pour over cooled cake.</li>
                    </ul>
                </li>
            </ol>
            <h3 style = "color: #CD001A">Tips!!!</h3>
            <ul>
                <li>For extra lemon flavor, brush the cake with a lemon syrup (equal parts sugar and lemon juice, boiled until dissolved) before adding the glaze.</li>
                <li>Garnish with lemon slices or zest for a decorative touch.</li>
            </ul>
            <button style="margin-top: 20px; width:250px; padding: 10px 20px;" onclick="showRecipesPage()">Back to Recipes</button>
            <button style="margin-top: 20px; width:80px; padding: 10px 20px;" onclick="showHomePage()">Home</button>
        </div>

    `;

    // Call the calculate function with default quantity
    calculateLemonCake();
}

// Calculate the ingredients for Lemon Cake based on the quantity entered by the user
function calculateLemonCake() {
    //define cake and ising ingredients
    const ingredients = {
        cake: {
            BAKINGPOWDER: { amount: 2, unit: "teaspoons" }, 
            BAKINGSODA: { amount: 1, unit: "teaspoon" }, 
            BUTTER: { amount: 120, unit: "grams" }, 
            EGGS: { amount: 2, unit: "eggs" }, 
            FLOUR: { amount: 250, unit: "grams" }, 
            LEMONJUICE: { amount: 60, unit: "ml" }, 
            LEMONZEST: { amount: 2, unit: "lemons" }, 
            MILK: { amount: 180, unit: "ml" }, 
            SALT: { amount: 1, unit: "teaspoon" }, 
            SUGAR: { amount: 200, unit: "grams" }, 
            VANILLAEXTRACT: { amount: 2, unit: "teaspoons" } 
        },
        icing: {
            LEMONJUICE: { amount: 30, unit: "ml" }, 
            POWDERSUGAR: { amount: 120, unit: "grams" } 
        }
    };
    
    //get user input
    const quantity = document.getElementById("quantity").value; // Get the quantity input value
    const cakeTable = document.getElementById("cakeIngredientsTable");
    const icingTable = document.getElementById("icingIngredientsTable");

    //clear previous values
    cakeTable.innerHTML = "";
    icingTable.innerHTML = "";

    if (quantity > 0) {
        // calculate and display new ingredient amounts for cake ingredient
        for (const ingredient in ingredients.cake) {
            const calculatedAmount = ingredients.cake[ingredient].amount * quantity;// Calculate the amount based on the quantity
            const row = `<tr>
                <td>${ingredient}</td>
                <td>${calculatedAmount}</td>
                <td>${ingredients.cake[ingredient].unit}</td>
            </tr>`;
            cakeTable.innerHTML += row;// Add the row to the cake ingredients table
        }

        // calculate and display new ingredient amounts for cake ingredient icing ingredients
        for (const ingredient in ingredients.icing) {
            const calculatedAmount = ingredients.icing[ingredient].amount * quantity;// Calculate the amount based on the quantity
            const row = `<tr>
                <td>${ingredient}</td>
                <td>${calculatedAmount}</td>
                <td>${ingredients.icing[ingredient].unit}</td>
            </tr>`;
            icingTable.innerHTML += row; // Add the row to the icing ingredients table
        }
    } else {
        // Show an alert if the quantity is not valid
        alert("Please enter a valid quantity!");
    }
}
