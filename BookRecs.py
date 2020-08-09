from random import randint

books = {
  'ya': ['City of Bones by Cassandra Clare', 'Clockwork Angel by Cassandra Clare', 'Lady Midnight by Cassandra Clare', 'Chain of Gold by Cassandra Clare', 'Cinder by Marissa Meyer', 'Six of Crows by Leigh Bardugo', 'Shadow and Bone by Leigh Bardugo', 'The Wrath and the Dawn by Renee Adieh', 'The Beautiful by Renee Adieh', 'Flame in the Mist by Renee Adieh', 'Nevernight by Jay Kristoff', 'A Darker Shade of Magic by V. E Schwab', 'Throne of Glass by Sarah J. Maas', 'A Court of Thorns of Roses by Sarah J. Maas', 'The Cruel Prince by Holly Black', 'The Darkest Part of the Forest by Holly Black', 'The Coldest Girl in Coldtown by Holly Black', 'Carry On by Rainbow Rowell'],
  
  'fiction': ['City of Bones by Cassandra Clare', 'Cinder by Marissa Meyer', 'Carry On by Rainbow Rowell', 'Ash Princess by Laura Sebastian', 'We Hunt the Flame by Hafsah Faizal', 'Six of Crows by Leigh Bardugo', 'Shadow and Bone by Leigh Bardugo', 'The Wrath and the Dawn by Renee Adieh', 'The Beautiful by Renee Adieh', 'Flame in the Mist by Renee Adieh', 'Nevernight by Jay Kristoff', 'A Darker Shade of Magic by V. E Schwab', 'Throne of Glass by Sarah J. Maas', 'A Court of Thorns of Roses by Sarah J. Maas', 'The Cruel Prince by Holly Black', 'The Darkest Part of the Forest by Holly Black', 'The Coldest Girl in Coldtown by Holly Black'],
  
  'scifi': ['Warcross by Marie Lu', 'Ready Player One by Ernest Cline', 'Aurora Rising by Jay Kristoff', 'A Thousand Pieces of You by Christina Perri', 'Dune by Frank Herbert', 'Enders Game by Orson Scott Card'],
  
  'fantasy': ['City of Bones by Cassandra Clare', 'Throne of Glass by Sarah J. Maas', 'Six of Crows by Leigh Bardugo', 'Shadow and Bone by Leigh Bardugo', 'A Darker Shade of Magic by V. E Schwab', 'A Court of Thorns of Roses by Sarah J. Maas', 'The Cruel Prince by Holly Black'],
 
  'nonfiction': ['Becoming by Michelle Obama', 'Astrophysics for People in a Hurry by Neil deGrasse Tyson', 'Educated by Tara Westover', 'Hit Refresh by Satya Nadella', 'Hyperbole and a Half by ALlie Brosh'],
  
  'mystery': ['Stalking Jack the Ripper by Kerri Maniscalco', 'Da Vinci Code by Dan Brown', 'Inferno by Dan Brown', 'Angels and Demons by Dan Brown', 'One of Us is Lying by Karen M. McManus', 'Two Can Keep A Secret by Karen M. McManus'],

  'middlegrade': ['The Lighting Thief by Rick Riordan', 'Harry Potter by J. K. Rowling', 'Kane Chronicles by Rick Riordan', 'A Wrinkle in Time by  Madeleine L Engle', 'The Lion, the Witch and the Wardrobe by C.S. Lewis', 'The Trials of Morrigan Crow by Jessica Townsend'],

  'adult': ['House of Earth and Blood by Sarah J. Maas', 'Ninth House by Leigh Bardugo', 'Vengeful by V.E. Schwab', 'The Seven Husbands of Evelyn Hugo by Taylor Jenkins Reid'],
  
  'contemporary': ['Her Royal Highness by Rachel Hawkins', 'When Dimple Met Rishi by Sandhya Menon', 'Because Youll Never Meet Me by Leah Thomas', 'Running with Lions by Julian Winters'],

  'historical': ['Bringing Down the Duke by Evie Dunmore', 'Stalking Jack the Ripper by Kerri Maniscalco', 'Code Name Verity by Elizabeth Wein', 'Out of the Easy by Ruta Septys' , 'The Book Thief by Markus Zusack' , 'Climbing the Stairs by Padma Venkatraman', 'Red Scarf Girl by Ji-Li Jiang'],

  'comics': ['Avatar The Last Airbender by Gene Luen Wang', 'The Legend of Korra by Gene Luen Wang', 'Punpkinheads by Rainbow Rowell', 'Umbrella Academy by Gerard Way and Gabriel Ba', 'Sisters by Raina Telgemeier', 'Drama by Raina Telgemeier', 'El Deafo by Cece Bell']
}

def recomendation():
  specific = input("Do you want a recomendation from a particular genre? \n");
  if(specific.lower() == "no"):
    bi=list(books);
    randgenren = randint(0, len(books)-1);
    #print(randgenren);
    randgenre = bi[randgenren];
    #print(books[randgenre]);
    randbookn = randint(0, len(books[randgenre])-1);
    #print(randbookn);
    print("You should try reading "+ books[randgenre][randbookn] + ".");
  elif(specific.lower() == "yes"):
    genre = input("What genre would you like a recomendation from?(Fiction, Fantasy, Scifi, Mystery, Contemporary, Comics, Nonfiction, Historical, Middlegrade, YA, Adult) \n");
    while(not(genre.lower() == "ya" or genre.lower() == "fiction" or genre.lower() == "scifi" or genre.lower() == "fantasy" or genre.lower() == "nonfiction" or genre.lower() == "middlegrade" or genre.lower() == "adult" or genre.lower() == "mystery" or genre.lower() == "contemporary" or genre.lower() == "historical")):
     genre = input("Sorry, your answer wasn't understood. Please answer with \"Fiction\", \"Fantasy\", \"Scifi\", \"Mystery\", \"Contemporary\", \"Comics\", \"Nonfiction\", \"Historical\", \"Middlegrade\", \"YA\", or \"Adult\"." );
    randbookn = randint(0, len(books[genre.lower()])-1);
    print("You should try reading " + books[genre.lower()][randbookn] + ".");
  else:
   print("Sorry, your answer wasn't understood. Please answer \"yes\" or \"no\".");
  repeat = "idk";
  while(not(repeat.lower() == "no" or repeat.lower() == "yes")):
    repeat = input("Would you like another book recomendation? \n");
    if(repeat.lower() == "no" or repeat.lower() == "yes"):
      return repeat;
    else:
      print("Sorry, your answer wasn't understood. Please answer \"yes\" or \"no\".");

print("Hello, my name is BookWyrm, your personal book recommendations bot!");
name = input("What is your name? \n");
print("Hello " + name + ", I can't wait to talk to you!");

like = "maybe"
while(not(like.lower() == "no" or like.lower() == "yes")):
  like = input("Do you like to read books? \n");
  if(like.lower() == "no"):
    print("That's a shame! You should try reading again.");
  elif(like.lower() == "yes"):
    print("Yay!! I also enjoy reading!");
  else:
    print("Sorry, your answer wasn't understood. Please answer \"yes\" or \"no\".");

reading = "maybe"
while(not(reading.lower() == "no" or reading.lower() == "yes")):
  reading = input("Are you reading a book right now? \n");
  if(reading.lower() == "no"):
    input("Why not? \n");
  elif(reading.lower() == "yes"):
    input("What book are you reading? \n");
    print("Oh cool, I love that book!");
  else:
    print("Sorry, your answer wasn't understood. Please answer \"yes\" or \"no\".");

rec = "duh";
while(not(rec.lower() == "no" or rec.lower() == "yes")):
  rec = input("Would you like a book recomendation? \n");
  if(rec.lower() == "no"):
    print("Oh well.");
  elif(rec.lower() == "yes"):
    print("Coming right up!");
    while(rec.lower() == "yes"):
      rec = recomendation();
  else:
    print("Sorry, your answer wasn't understood. Please answer \"yes\" or \"no\".");

print("It was nice talking to you. Bye!");
