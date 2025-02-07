// show home page
function showHomePage() {
    document.getElementById("content").innerHTML = `
        <div class="home-page">
            <img alt="little pinky" class="image-center" width="200px" src="ass IMG/littlegirl.png"/>
            <p>Welcome! Explore our delicious cake recipes and calculate ingredients based on your needs.</p>
            <button style="margin-top: 30px;" onclick="showRecipesPage()">Explore Recipes</button>
        </div>
    `;
}

// show recipes selection page
function showRecipesPage() {
    document.getElementById("content").innerHTML = `
        <div class="recipes-page">
            <h1>Select a Recipe</h1>
            <div class="recipe-card">
                <img src="ass IMG/lemoncake.jpg">
                <button onclick="showLemonCakePage()">Lemon Cake</button>
            </div>
            <div class="recipe-card">
                <img src="ass IMG/rainbow cake 2.0.jpg" alt="Rainbow Cake">
                <button onclick="showRainbowCakePage()">Rainbow Cake</button>
            </div>
            <div class="recipe-card">
                <img src="ass IMG/strawberry cake 2.0.jpg" alt="Strawberry Cake">
                <button onclick="showStrawberryCakePage()">Strawberry Cake</button>
            </div>
            <button style="margin-top: 20px; width: 80px; padding: 10px 20px;" onclick="showHomePage()">Home</button>
        </div>
    `;
}

// Load the home page when the page starts
showHomePage();
