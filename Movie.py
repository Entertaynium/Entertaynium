from random import randint

movies = {
  'action': ['Charlies Angels', 'The Old Guard', 'Birds of Prey', 'Hobbs & Shaw', 'John Wick', 'Venom', 'Mission Impossible', 'James Bond', 'Logan', 'Suicide Squad', 'John Wick', 'Divergent', 'Now You See Me', 'Oceans Eleven', 'Star Wars', 'Kingsman', 'Night of the Museum'],
  
  'adventure': ['The Hobbit', 'Lord of the Rings', 'Dora and the Lost City of Gold', 'The Call of the Wild', 'Onward', 'Artemis Fowl', 'Intersteller', 'Journey to the Center of the Earth'],
  
  'comedy': ['My Spy', 'Knives Out', 'Good Boys', 'Oceans Eight', 'Jumanji', 'Jojo Rabbit', 'Murder Mystery', 'Shazam', 'Despicable Me', 'Minions', 'The Wolf of Wall Street'],

  'fantasy': ['Harry Potter', 'The Lightning Theif', 'Enders Game', 'The Hobbit', 'Lord of the Rings', 'Fantastic Beasts', 'Justice League', 'Avengers', 'Batman', 'Pirates of the Caribbean', 'Men In Black', 'Ready Player One', 'Captain Marvel', 'Thor', 'Jurassic Park', 'Intersteller', 'Star Wars'],
  
  'romance': ['Pride and Prejudice', 'Crazy Rich Asians', 'The Kissing Booth', 'Five Feet Apart', 'Love, Simon', 'The Fault in Our Stars', 'La La Land', 'Last Christmas', 'Mamma Mia', 'Pitch Perfect', 'Trainwreck', 'The Big Sick'],
 
  'children': ['Frozen', 'Brave', 'The Incredibles', 'Mulan', 'The Princess and the Frog', 'Rise of the Guardians', 'Tangled', 'The Lion King', 'Trolls', 'Onward', 'Moana', 'Dumbo', 'How to Train Your Dragon', 'SING', 'The Good Dinosaur', 'Wonderpark', 'Alice in Wonderland', 'Sleeping Beauty', '101 Dalmations', 'Pocohantos'],
  
  'family': ['Avengers', 'Pan', 'Dr. Dolittle', 'Mary Poppins', 'Jungle Book', 'A Wrinkle in Time', 'Maleficent', 'BFG', 'The Little Mermaid', 'Harry Potter', 'The Lightning Thief', 'Transformers', 'the Avatar', 'A Series of Unfortunate Events', 'Shazam', 'Despicable Me', 'Minions'],

  'adult': ['Deadpool', 'Joker', 'Logan', 'Birds of Prey', 'The Revenant', 'The Matrix', 'IT', 'Saving Private Ryan', 'The Terminator', 'American Sniper', 'Gone Girl', 'Lady Bird'],

  'documentary': ['Crip Camp', 'The Great Hack', 'Tomorrow', 'For Sama', 'Becoming', 'Heal', 'The Fight', 'The Iron Lady', 'Miss Americana', '13th', 'Voyeur', 'The Cave'],
}

def recomendation():
  specific = input("Do you want a recomendation from a particular genre? \n");
  if(specific.lower() == "no"):
    bi=list(movies);
    randgenren = randint(0, len(movies)-1);
    #print(randgenren);
    randgenre = bi[randgenren];
    #print(books[randgenre]);
    randbookn = randint(0, len(movies[randgenre])-1);
    #print(randbookn);
    print("You should try watching "+ movies[randgenre][randbookn] + ".");
  elif(specific.lower() == "yes"):
    genre = input("What genre would you like a recomendation from?(Action, Adventure, Comedy, Fantasy, Romance, Documentary, Children, Family, or Adult) \n");
    while(not(genre.lower() == "action" or genre.lower() == "adventure" or genre.lower() == "comedy" or genre.lower() == "fantasy" or genre.lower() == "romance" or genre.lower() == "children" or genre.lower() == "family" or genre.lower() == "adult" or genre.lower() == "documentary" or genre.lower() == "historical")):
     genre = input("Sorry, your answer wasn't understood. Please answer with \"Action\", \"Adventure\", \"Comedy\", \"Fantasy\", \"Romance\", \"Documentary\", \"Children\", \"Family\", or \"Adult\".");
    randbookn = randint(0, len(movies[genre.lower()])-1);
    print("You should try watching " + movies[genre.lower()][randbookn] + ".");
  else:
   print("Sorry, your answer wasn't understood. Please answer \"yes\" or \"no\".");
  repeat = "idk";
  while(not(repeat.lower() == "no" or repeat.lower() == "yes")):
    repeat = input("Would you like another movie recomendation? \n");
    if(repeat.lower() == "no" or repeat.lower() == "yes"):
      return repeat;
    else:
      print("Sorry, your answer wasn't understood. Please answer \"yes\" or \"no\".");

print("Hello, my name is Moovy, your personal movie recommendations bot!");
name = input("What is your name? \n");
print("Hello " + name + ", I can't wait to talk to you!");

like = "maybe"
while(not(like.lower() == "no" or like.lower() == "yes")):
  like = input("Do you like to watch movies? \n");
  if(like.lower() == "no"):
    print("That's a shame! You should try watching one.");
  elif(like.lower() == "yes"):
    print("Yay!! I also enjoy watching movies!");
  else:
    print("Sorry, your answer wasn't understood. Please answer \"yes\" or \"no\".");

reading = "maybe"
while(not(reading.lower() == "no" or reading.lower() == "yes")):
  reading = input("Are you watching a movie right now? \n");
  if(reading.lower() == "no"):
    input("Why not? \n");
  elif(reading.lower() == "yes"):
    input("What movie are you watching? \n");
    print("Oh cool, I love that movie!");
  else:
    print("Sorry, your answer wasn't understood. Please answer \"yes\" or \"no\".");

rec = "duh";
while(not(rec.lower() == "no" or rec.lower() == "yes")):
  rec = input("Would you like a movie recomendation? \n");
  if(rec.lower() == "no"):
    print("Oh well.");
  elif(rec.lower() == "yes"):
    print("Coming right up!");
    while(rec.lower() == "yes"):
      rec = recomendation();
  else:
    print("Sorry, your answer wasn't understood. Please answer \"yes\" or \"no\".");

print("It was nice talking to you. Bye!");
