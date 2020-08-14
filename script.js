// Navigation
var dropbtn = $(`.dropbtn`);
dropbtn.on('click', dropDown);

function dropDown() {
  console.log("clicked!");
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

var quotes = ['\"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.\"', '\"Get busy living or get busy dying.\"', '\"The goal isn’t to live forever, the goal is to create something that will.\"', '\"None of us really changes over time. We only become more fully what we are.\"', '\"All endings are also beginnings. We just don’t know it at the time.\"', '\"If we wait until we’re ready, we’ll be waiting for the rest of our lives.\"', '\"Not all those who wander are lost.\"', '\"If you’re making mistakes it means you’re out there doing something.\"', '\"If my life is going to mean anything, I have to live it myself.\"', '\"We are all in the gutter, but some of us are looking at the stars.\"', '\"Anything worth dying for is certainly worth living for.\"', '\"You could rattle the stars. You could do anything if only you dared.\"', '\"Regret is such a pointless emotion.\"', '\"It always seems impossible until it’s done.\"', '\"All our dreams can come true, if we have the courage to pursue them.\"', '\"Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.\"', '\"If people are doubting how far you can go, go so far that you can’t hear them anymore.\"', '\"We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.\"', '\"You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.\"', '\"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.\"', '\"Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.\"', '\"Magic is believing in yourself. If you can make that happen, you can make anything happen.\"', '\"If something is important enough, even if the odds are stacked against you, you should still do it.\"', '\"Things may come to those who wait, but only the things left by those who hustle.\"', '\"How wonderful it is that nobody need wait a single moment before starting to improve the world.\"', '\"Very often, a change of self is needed more than a change of scene.\"', '\"It’s not the load that breaks you down, it’s the way you carry it.\"', '\"Keep your eyes on the stars, and your feet on the ground.\"', '\"You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.\"', '\"If opportunity doesn’t knock, build a door.\"', '\"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.\"', '\"Opportunity is missed by most people because it is dressed in overalls and looks like work.\"', '\"Work hard for what you want because it won’t come to you without a fight. You have to be strong and courageous and know that you can do anything you put your mind to. If somebody puts you down or criticizes you, just keep on believing in yourself and turn it into something positive.\"', '\"Work hard, be kind, and amazing things will happen.\"', '\"Never flinch. Never fear. Never forget.\"', '\"Weakness is a guise. Wear it when they need to know you’re human but never when you feel it\"', '\"In the middle of every difficulty lies opportunity.\"', '\"Start where you are. Use what you have. Do what you can.\"'];

var authors = ['-H. Jackson Brown Jr.', '-Stephen King', '-Chuck Palahniuk', '-Anne Rice', '-Mitch Albom', '-Lemony Snicket', '-J. R. R. Tolkien', '-Neil Gaiman', '-Rick Riordan', '-Oscar Wilde', '-Joseph Heller', '-Sarah J. Maas', '-Cassandra Clare', '-Nelson Mandela', '-Walt Disney', '-Mary Kay Ash', '-Michelle Ruiz', '-Arianna Huffington', '-Willian W. Purkey', '-Hellen Keller', '-Socrates', '-Johann Wolfgang Von Goethe', '-Elon Musk', '-Abraham Lincoln', '-Anne Frank', '-A.C. Benson', '-Lou Holtz', '-Theodore Roosevelt', '-George Lorimer', '-Kurt Cobain', '-Roy T. Bennet', '-Thomas Edison', '-Leah LaBelle', '-Conan O’Brien', '-Jay Kristoff', '-Leigh Bardugo', '-Albert Einstein', '-Arthur Ashe'];

var motivationButton = $('.motivationButton');
var motivationContainer = $('.motivationContainer');
var motivationAuthor = $('.motivationAuthor');

motivationButton.on('click', giveMotivation);
function giveMotivation(){
  var randomNumber = Math.floor(Math.random() * quotes.length);
  motivationContainer.text(quotes[randomNumber]);
  motivationAuthor.text(authors[randomNumber]);
}

var fitness = ['90 Minute Full-Body Aerobic Workout', '60 Minute 1000 Calories Workout', '55 Minute HIIT and Cardio Workout', '50 Minute Full Body Workout', '45 Minute Tabata Workout', '40 Minute Fat Burning HIIT Workout', '35 Minute Bootcamp Workout', '30 Minute Cardio and HIIT Workout', '25 Minute Cardio Workout', '20 Minutes Full Body Workout', '15 Minute TikTok Dance Workout', '10 Minute Morning Workout', '5 Minute Full Body Workout', '30 Minute Full Body Power Yoga Workout', '10 Minute Abs Workout', 'Yoga for Weight Loss & Belly Fat', 'Burn 600 Calories in 60 Minute Workout', '40 Minute Dance Workout', '15 Minute Burn Thigh Workout', '20 Minute Best Full Body Workout to Lose Fat', '15 Minute Yoga Workout for Full Body', '30 Minute Hip-Hop Workout', '15 Minute Fat Burning HIIT Workout', "15 Minute Upper Body Burn", '15 Minute Workout with Jeanette Jenkins', '20 Minute Yoga Practice', '30 Minute Cardio Latin Dance Workout', '45 Minute Full Body Fat Burn Workout', '20 Minute Fat Burning Yoga Workout', '20 Minute At Home Leg Workout', '30 Minute Full Body Fat Burn HIIT', '10 Minute Upper Body'];

var fitnessLinks = ['https://www.youtube.com/watch?v=fCY6SzJTZPk', 'https://www.youtube.com/watch?v=ubT6qNnUmQw', 'https://www.youtube.com/watch?v=dY5_Qih6vUY', 'https://www.youtube.com/watch?v=9Nb_Z0ZRmuw', 'https://www.youtube.com/watch?v=bgdb5QgI9aU', 'https://www.youtube.com/watch?v=MaJKfBb0j6w', 'https://www.youtube.com/watch?v=--8kNCLlALE', 'https://www.youtube.com/watch?v=CBWQGb4LyAM', 'https://www.youtube.com/watch?v=8JpKOczCPHU', 'https://www.youtube.com/watch?v=UBMk30rjy0o', 'https://www.youtube.com/watch?v=SoRmqE7A_IE', 'https://www.youtube.com/watch?v=3sEeVJEXTfY', 'https://www.youtube.com/watch?v=Tz9d7By2ytQ', 'https://www.youtube.com/watch?v=5h-9pqWIkzg', 'https://www.youtube.com/watch?v=UBnfm4s7CRA', 'https://www.youtube.com/watch?v=WmSIMpIDa_A', 'https://www.youtube.com/watch?v=s3F6R92s6_o',  'https://www.youtube.com/watch?v=Srd6TwU6UoI', 'https://www.youtube.com/watch?v=zLBFQ_mFl2E','https://www.youtube.com/watch?v=CGmr02bfHUo', 'https://www.youtube.com/watch?v=HYGCLCnj7NM', 'https://www.youtube.com/watch?v=ZWk19OVon2k', 'https://www.youtube.com/watch?v=TkaYafQ-XC4', 'https://www.youtube.com/watch?v=puLJaNv9m18', 'https://www.youtube.com/watch?v=_Zem0_qsDg0', 'https://www.youtube.com/watch?v=b1H3xO3x_Js', 'https://www.youtube.com/watch?v=LDvAuqTZxMw', 'https://www.youtube.com/watch?v=t7RhG0CEbVw', 'https://www.youtube.com/watch?v=G_26U5DIaRg', 'https://www.youtube.com/watch?v=ie7nbEybL6k', 'https://www.youtube.com/watch?v=DHOPWvO3ZcI'
];

var fitnessButton = $('.fitnessButton');
var fitnessContainer = $('.fitnessContainer');
var fitnessLinksContainer = $('.fitnessLinksContainer');

fitnessButton.on('click', giveFitness);
function giveFitness(){
  var randomNumber = Math.floor(Math.random() * fitness.length);
  fitnessContainer.text(fitness[randomNumber]);
  fitnessLinksContainer.text(fitnessLinks[randomNumber]);
}

var activities = ['Go To the Lake', 'Go To the Park', 'Go Camping', 'Gardening', 'Arts and Crafts', 'Read', 'Write and Email to Your Future Self', 'Painting', 'Coloring', 'Bullet Journaling', 'Write a Hand-Written Letter and Mail It to Them', 'Write a Story', 'Redecorate Your Room', 'Organize Your Closet', 'Volunteer', 'Self-care/Spa Day', 'Watch a Movie', 'Learn a New Skill Through YouTube', 'Get In Touch With Someone You Havent Talked To In a While', 'Watch a Movie', 'Watch the Sunset', 'Go On a Hike', 'Make Playlists for DIfferent Moods', 'Make Playlists for Your Friends', 'Go Bike RIding', 'Play a Sport', 'Go Shopping with Someone', 'Cook', 'Binge Watch a Show', 'Go On a Walk', 'Have a Game-Night', 'Have a Picnic', 'Learn Origami', 'Learn how to Juggle'];

var activitiesButton = $('.activitiesButton');
var activitiesContainer = $('.activitiesContainer');

activitiesButton.on('click', giveActivities);
function giveActivities(){
  var randomNumber = Math.floor(Math.random() * activities.length);
  activitiesContainer.text(activities[randomNumber]);
}

var games = ['Badminton', 'Basketball', 'Tennis', 'Ping Pong', 'Frisbee', 'Hide and Seek', 'UNO', 'Apples to Apples', 'Online Card Games', 'Board Games', 'Skribbl.io', 'Spyfall', 'Baseball', 'Google Snake', 'Google Games', 'Kahoot', 'Quizlet Live'];

var gamesButton = $('.gamesButton');
var gamesContainer = $('.gamesContainer');

gamesButton.on('click', giveGames);
function giveGames(){
  var randomNumber = Math.floor(Math.random() * games.length);
  gamesContainer.text(games[randomNumber]);
}

var breakfast = ['Omelet', 'French Toast', 'Crepes', 'Breakfast Enchiladas', 'Waffles', 'Pancakes', 'Oatmeal', 'Croissants', 'Donuts', 'Dosa', 'Idli'];

var breakfastLinks = ['https://www.delish.com/cooking/recipe-ideas/a24892843/how-to-make-omelet',
'https://www.foodnetwork.com/recipes/robert-irvine/french-toast-recipe-1951408', 
'https://www.allrecipes.com/recipe/16383/basic-crepes/', 
'https://www.julieseatsandtreats.com/breakfast-enchiladas/', 
'https://www.allrecipes.com/recipe/22180/waffles-i/', 
'https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/', 
'https://feelgoodfoodie.net/recipe/how-to-make-oatmeal/',  
'https://sallysbakingaddiction.com/homemade-croissants/', 
'https://sallysbakingaddiction.com/how-to-make-homemade-glazed-doughnuts/', 
'https://www.thespruceeats.com/how-to-make-dosa-1957716', 
'https://www.indianhealthyrecipes.com/soft-idli-recipe-using-idli-rava/',
]; 

var breakfastButton = $('.breakfastButton');
var breakfastContainer = $('.breakfastContainer');
var breakfastLinksContainer = $('.breakfastLinksContainer');

breakfastButton.on('click', giveBreakfast);
function giveBreakfast(){
  var randomNumber = Math.floor(Math.random() * breakfast.length);
  breakfastContainer.text(breakfast[randomNumber]);
  breakfastLinksContainer.text(breakfastLinks[randomNumber]);
}

var appetizers = ['Stuffed Mushrooms', 'Bruschetta', 'Garlic Bread', 'Pasta Chips', 'Chips and Dip', "French Fries", "Egg Rolls" , 'Mozzarella Sticks', 'Pull-Apart Bread' , "Nachos" , "Cucumber Rolls", "Shrimp Tempura", "Calamari", "Soft Pretzels", "Spring Rolls"];

var appetizersLinks = ['https://www.delish.com/cooking/recipe-ideas/a20089643/easy-stuffed-mushroom-recipe/', 'https://enrilemoine.com/en/2010/08/04/tomato-basil-bruschette-recipe/', 'https://www.simplyrecipes.com/recipes/garlic_bread/', 'https://www.delish.com/cooking/recipe-ideas/recipes/a51657/pasta-chips-recipe/', 'https://simply-delicious-food.com/chips-and-dip-platter/', 'https://www.foodnetwork.com/recipes/ree-drummond/perfect-french-fries-recipe2-2120420', 'https://www.dinneratthezoo.com/homemade-egg-rolls/', 'https://www.food.com/recipe/mozzarella-sticks-30977', 'https://sallysbakingaddiction.com/everything-bagel-pull-apart-bread/', 'https://www.simplyrecipes.com/recipes/nachos/', 'https://tasty.co/recipe/cucumber-rolls', 'https://www.justonecookbook.com/shrimp-tempura/', 'https://www.fifteenspatulas.com/crispy-fried-calamari/', 'https://tasty.co/recipe/homemade-soft-pretzels', 'https://www.allrecipes.com/recipe/24239/vietnamese-fresh-spring-rolls/'];

var appetizersButton = $('.appetizersButton');
var appetizersContainer = $('.appetizersContainer');
var appetizersLinksContainer = $('.appetizersLinksContainer');

appetizersButton.on('click', giveAppetizers);
function giveAppetizers(){
  var randomNumber = Math.floor(Math.random() * appetizers.length);
  appetizersContainer.text(appetizers[randomNumber]);
  appetizersLinksContainer.text(appetizersLinks[randomNumber]);
}

var entrees = ['Alfredo Pasta', 'Fried Rice', 'Pizza', 'Lasagna', 'Mac & Cheese', 'Lime Chicken Rice', 'Burrito', 'Shrimp Scampi', 'Mushroom Wellington', 'Beef Stroganoff', 'Burrito Bowl', 'Falafel', 'Roast Lamb', 'Poke Bowl', 'Sushi', 'Chicken Teriyaki', 'Chow Mein', 'Salad', 'Tacos', 'Risotto', 'Popeyes chicken burger'];

var entreesLinks = ['https://cravinghomecooked.com/easy-pasta-alfredo/', 'https://www.gimmesomeoven.com/fried-rice-recipe/', 'https://www.simplyrecipes.com/recipes/homemade_pizza/', 'https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/', 'https://www.thechunkychef.com/family-favorite-baked-mac-and-cheese/', 'https://gimmedelicious.com/one-pan-cilantro-lime-chicken-and-rice/', 'https://www.theseasonedmom.com/easiest-burrito-recipe/', 'https://www.foodnetwork.com/recipes/tyler-florence/shrimp-scampi-with-linguini-recipe-1942429', 'https://www.feastingathome.com/mushroom-wellington-rosemary-pecans/', 'https://www.bettycrocker.com/recipes/classic-beef-stroganoff/c17a904f-a8f6-48ae-bedb-5b301a8ea317', 'https://damndelicious.net/2014/09/10/easy-burrito-bowls/', 'https://www.themediterraneandish.com/how-to-make-falafel/', 'https://www.delish.com/cooking/recipe-ideas/recipes/a56354/best-roast-lamb-recipe/', 'https://therecipecritic.com/poke-bowl-recipe/', 'https://www.fifteenspatulas.com/homemade-sushi/', 'https://cafedelites.com/teriyaki-chicken-recipe/', 'https://www.cookingclassy.com/chicken-chow-mein/', 'https://www.acouplecooks.com/best-salad-recipes/', 'https://www.thewholesomedish.com/the-best-homemade-tacos/', 'https://www.allrecipes.com/recipe/85389/gourmet-mushroom-risotto/', 'https://gimmedelicious.com/popeyes-chicken-sandwich/'];

var entreesButton = $('.entreesButton');
var entreesContainer = $('.entreesContainer');
var entreesLinksContainer = $('.entreesLinksContainer');

entreesButton.on('click', giveEntrees);
function giveEntrees(){
  var randomNumber = Math.floor(Math.random() * entrees.length);
  entreesContainer.text(entrees[randomNumber]);
  entreesLinksContainer.text(entreesLinks[randomNumber]);
}

var desserts = ['Vanilla Cake', 'Chocolate Cake', 'Red Velvet Cake', 'Chocolate Chip Cookies', 'Sugar Cookies', 'Oatmeal Raisin Cookies', 'Banana Bread', 'Brownies', 'Poppy Seed Muffins', 'Blueberry Muffins', 'Chocolate Chip Muffins', 'Cheesecake', 'Strawberry Yogurt Cake', 'Chocolate Mug Cake', 'Cinnamon Rolls', 'Macarons', 'Mango Mousse', 'Homemade Ice Cream', 'Choux Pastry'];

var dessertsLinks = ['https://sallysbakingaddiction.com/vanilla-cake/', 'https://addapinch.com/the-best-chocolate-cake-recipe-ever/', 'https://sallysbakingaddiction.com/red-velvet-layer-cake-with-cream-cheese-frosting/', 'https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/', 'https://sallysbakingaddiction.com/best-sugar-cookies/', 'https://sallysbakingaddiction.com/soft-chewy-oatmeal-raisin-cookies/', 'https://sallysbakingaddiction.com/best-banana-bread-recipe/', 'https://www.loveandlemons.com/brownies-recipe/', 'https://www.tasteofhome.com/recipes/poppy-seed-muffins/', 'https://www.allrecipes.com/recipe/6865/to-die-for-blueberry-muffins/', 'https://www.onceuponachef.com/recipes/chocolate-chip-muffins.html', 'https://sugarspunrun.com/best-cheesecake-recipe/', 'https://www.aspicyperspective.com/farmstand-fresh/', 'https://www.allrecipes.com/recipe/241038/microwave-chocolate-mug-cake/', 'https://sallysbakingaddiction.com/easy-cinnamon-rolls-from-scratch/', 'https://tasty.co/recipe/macarons', 'https://www.vegrecipesofindia.com/quick-mango-mousse/', 'https://barefeetinthekitchen.com/homemade-ice-cream-recipe/', 'https://sallysbakingaddiction.com/choux-pastry/'];

var dessertsButton = $('.dessertsButton');
var dessertsContainer = $('.dessertsContainer');
var dessertsLinksContainer = $('.dessertsLinksContainer');

dessertsButton.on('click', giveDesserts);
function giveDesserts(){
  var randomNumber = Math.floor(Math.random() * desserts.length);
  dessertsContainer.text(desserts[randomNumber]);
  dessertsLinksContainer.text(dessertsLinks[randomNumber]);
}

var drinks = ['Bubble Tea', 'Dalgona Coffee', 'Hot Chocolate', 'Lemonade', 'Strawberry Lemonade', 'Mango Lassi', 'Smoothies', 'Slushies'];

var drinksLinks = ['https://healthynibblesandbits.com/how-to-make-bubble-tea/', 'https://www.delish.com/cooking/recipe-ideas/a32072159/dalgona-coffee-recipe/', 'https://celebratingsweets.com/homemade-hot-chocolate/', 'https://www.allrecipes.com/recipe/32385/best-lemonade-ever/', 'https://www.allrecipes.com/recipe/233276/all-natural-strawberry-lemonade/', 'https://www.simplyrecipes.com/recipes/mango_lassi/', 'https://wholefully.com/8-staple-smoothies-know-make/', 'https://www.thekitchn.com/how-to-make-fruit-slushies-cooking-lessons-from-the-kitchn-206361'];

var drinksButton = $('.drinksButton');
var drinksContainer = $('.drinksContainer');
var drinksLinksContainer = $('.drinksLinksContainer');

drinksButton.on('click', giveDrinks);
function giveDrinks(){
  var randomNumber = Math.floor(Math.random() * drinks.length);
  drinksContainer.text(drinks[randomNumber]);
  drinksLinksContainer.text(drinksLinks[randomNumber]);
}

var music = ['Podcast', 'Top Charts', 'New Releases', 'Covid-19 Guide', 'Summer', 'Country', 'Workout', 'Latin', 'Mood Booster', 'R&B', 'BLM', 'Gaming', 'Focus', 'Dance/Electronic', 'Chill', 'Indie', 'Throwback', 'Alternative', 'Pride', 'Party', 'Sleep', 'Classical', 'Jazz', 'Folk Acoustic', 'Soul', 'Romance', 'K-Pop', 'Punk', 'Desi', 'Afro', 'Comedy', 'TV & Movies', 'Metal', 'Reggae', 'Blues', 'Funk', 'Student', 'Kids & Family'];

var musicLinks = ['https://open.spotify.com/show/71mvGXupfKcmO6jlmOJQTP', 'https://open.spotify.com/playlist/37i9dQZEVXbMDoHDwVN2tF', 'https://open.spotify.com/playlist/37i9dQZF1DX4JAvHpjipBk', 'https://open.spotify.com/show/0qCYTqE3DQ1THZ24UfdjUd', 'https://open.spotify.com/show/0qCYTqE3DQ1THZ24UfdjUd', 'https://open.spotify.com/playlist/37i9dQZF1DX1gRalH1mWrP', 'https://open.spotify.com/playlist/37i9dQZF1DX1lVhptIYRda', 'https://open.spotify.com/playlist/37i9dQZF1DWUVpAXiEPK8P', 'https://open.spotify.com/playlist/37i9dQZF1DX10zKzsJ2jva', 'https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0', 'https://open.spotify.com/playlist/37i9dQZF1DX4SBhb3fqCJd', 'https://open.spotify.com/playlist/37i9dQZF1DWWAqc46ZJdZf', 'https://open.spotify.com/playlist/37i9dQZF1DWTyiBJ6yEqeu', 'https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ', 'https://open.spotify.com/playlist/37i9dQZF1DX4dyzvuaRJ0n', 'https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6', 'https://open.spotify.com/playlist/37i9dQZF1DX2Nc3B70tvx0', 'https://open.spotify.com/playlist/37i9dQZF1DWWwaxRea1LWS', 'https://open.spotify.com/playlist/37i9dQZF1DX82GYcclJ3Ug', 'https://open.spotify.com/playlist/37i9dQZF1DXbmCTvLQy5AO', 'https://open.spotify.com/playlist/37i9dQZF1DWY4xHQp97fN6', 'https://open.spotify.com/playlist/37i9dQZF1DWZd79rJ6a7lp', 'https://open.spotify.com/playlist/37i9dQZF1DWWEJlAGA9gs0', 'https://open.spotify.com/playlist/37i9dQZF1DWTR4ZOXTfd9K', 'https://open.spotify.com/playlist/37i9dQZF1DWTR4ZOXTfd9K', 'https://open.spotify.com/playlist/37i9dQZF1DXbcgQ8d7s0A0', 'https://open.spotify.com/playlist/37i9dQZF1DX4FcAKI5Nhzq', 'https://open.spotify.com/playlist/37i9dQZF1DXa9wYJr1oMFq', 'https://open.spotify.com/playlist/37i9dQZF1DWTwzVdyRpXm1', 'https://open.spotify.com/playlist/37i9dQZF1DWYkaDif7Ztbp', 'https://open.spotify.com/playlist/37i9dQZF1DX1ywXghfWcTX', 'https://open.spotify.com/playlist/37i9dQZF1DWZC2yew0xGiz', 'https://open.spotify.com/playlist/37i9dQZF1DX5J7FIl4q56G', 'https://open.spotify.com/playlist/37i9dQZF1DXbSbnqxMTGx9', 'https://open.spotify.com/playlist/37i9dQZF1DXcnkReojaCnV', 'https://open.spotify.com/playlist/37i9dQZF1DX1MUPbVKMgJE', 'https://open.spotify.com/playlist/37i9dQZF1DX1dvMSwf27JO', 'https://open.spotify.com/playlist/37i9dQZF1DWWHW9jMSvcWf'];

var musicButton = $('.musicButton');
var musicContainer = $('.musicContainer');
var musicLinksContainer = $('.musicLinksContainer');

musicButton.on('click', giveMusic);
function giveMusic(){
  var randomNumber = Math.floor(Math.random() * music.length);
  musicContainer.text(music[randomNumber]);
  musicLinksContainer.text(musicLinks[randomNumber]);
}

var languages = ['Spanish', 'French', 'Hindi', 'German', 'Italian', 'Portugese', 'Dutch', 'Japanese', 'Greek', 'Irish',  'Hebrew', 'Korean', 'Latin', 'Russian', 'Swahili', 'High Valyrian', 'Klingon', 'Chinese', 'Welsh', 'Scottish Gaelic', 'Swedish', 'Arabic', 'Czech', 'Danish', 'Finnish', 'Hungarian', 'Romanian', 'Hawaiian', 'Indonesian', 'Norwegian', 'Navajo', 'Polish', 'Turkish', 'Ukrainian', 'Vietnamese', 'Thai'];

var languagesButton = $('.languagesButton');
var languagesContainer = $('.languagesContainer');

languagesButton.on('click', giveLanguages);
function giveLanguages(){
  var randomNumber = Math.floor(Math.random() * languages.length);
  languagesContainer.text(languages[randomNumber]);
}

var compLanguages = ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'C++', 'Ruby', 'Perl', 'C', 'C#', 'Delphi', 'Swift'];

var compLanguagesButton = $('.compLanguagesButton');
var compLanguagesContainer = $('.compLanguagesContainer');

compLanguagesButton.on('click', giveCompLanguages);
function giveCompLanguages(){
  var randomNumber = Math.floor(Math.random() * compLanguages.length);
  compLanguagesContainer.text(compLanguages[randomNumber]);
}

var hungerButton = $('.hunger-button');
var hungerContainer = $('.hunger-container');

var plasmaButton = $(`.plasma-button`);
var plasmaContainer = $(`.plasma-container`);

var bloodButton = $(`.blood-button`);
var bloodContainer = $(`.blood-container`);

var homelessButton = $(`.homeless-button`);
var homelessContainer = $(`.homeless-container`);

var debtButton = $(`.debt-button`);
var debtContainer = $(`.debt-container`);

var dwbButton = $(`.dwb-button`);
var dwbContainer = $(`.dwb-container`);

var maskClipButton = $(`.maskclip-button`);
var maskClipContainer = $(`.maskclip-container`);

var maskButton = $(`.mask-button`);
var maskContainer = $(`.mask-container`);

var drButton = $(`.dr-button`);
var drContainer = $(`.dr-container`);

var rwcfButton = $(`.rwcf-button`);
var rwcfContainer = $(`.rwcf-container`);

hungerButton.on('click', hungerInfo);
function hungerInfo() {
  hungerContainer.toggleClass('clicked-hunger-container');
};

plasmaButton.on('click', plasmaInfo);
function plasmaInfo(){
  plasmaContainer.toggleClass('clicked-plasma-container');
}

bloodButton.on('click', bloodInfo);
function bloodInfo(){
  bloodContainer.toggleClass('clicked-blood-container');
}

homelessButton.on('click', homelessInfo);
function homelessInfo(){
  homelessContainer.toggleClass('clicked-homeless-container');
}

debtButton.on('click', debtInfo);
function debtInfo(){
  debtContainer.toggleClass('clicked-debt-container');
}

dwbButton.on('click', dwbInfo);
function dwbInfo(){
  dwbContainer.toggleClass('clicked-dwb-container');
}

maskClipButton.on('click', maskClipInfo);
function maskClipInfo(){
  maskClipContainer.toggleClass('clicked-maskclip-container');
}

maskButton.on('click', maskInfo);
function maskInfo(){
  maskContainer.toggleClass('clicked-mask-container');
}

drButton.on('click', drInfo);
function drInfo(){
  drContainer.toggleClass('clicked-dr-container');
}

rwcfButton.on('click', rwcfInfo);
function rwcfInfo(){
  rwcfContainer.toggleClass('clicked-rwcf-container');
}
