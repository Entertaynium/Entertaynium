import requests
import json

# SETTINGS 
endpoint_url = "https://api.spotify.com/v1/recommendations?"
token = "BQBUHGFVnD_b971wXRAcAEbyQRYEEaVF4BAA6FF-uDkvbrC6qzgRfk6YzVQxqSpcCWeO2-Zb5tmzlFOkg0xzPDqAlruE9Kibnq6utWFn3TbsALXyN-tfOtHoiRoxBu9oe5anrqMcuuqIXRar3f1EpxuYfIogEDWACoQ6iVjENAgc9pUw5DSlQ89nn45q26Zt8w"
user_id = "2n0kmrh6wf1maecevkn7o5wdv"
market="US"
uris = [] 


def createPlaylists(limit, genre, targPop, targEner, targAco, targDan):
# PERFORM THE QUERY
  query = f'{endpoint_url}limit={limit}&market={market}&seed_genres={genre}&target_popularity={targPop}&target_energy={targEner}&target_acousticness={targAco}&target_danceability={targDan}'

  response = requests.get(query, 
               headers={"Content-Type":"application/json", 
                        "Authorization":f"Bearer {token}"})
  json_response = response.json()

  print('Recommended Songs:')
  for i,j in enumerate(json_response['tracks']):
            uris.append(j['uri'])
            print(f"{i+1}) \"{j['name']}\" by {j['artists'][0]['name']}")
request_body = json.dumps({
          "name": "VibeCheck Personalized playlist",
          "description": "Bot-generated playlist",
          "public": False
        })


limit = 0;
genre="pop"
target_danceability=0.5
def creator():
  limit = input("How many songs do you want on the playlist? \n");
  if(limit.isdigit()):
    genre=input("What genre music would you like? Select from the following:acoustic, alt-rock, alternative, ambient, anime, bluegrass, british, cantopop, children, chill, classical, club, comedy, country, dance, dancehall, death-metal, deep-house, disco, disney, drum-and-bass, dub, dubstep, edm, electro, electronic, emo, folk, forro, french, funk, garage, german, gospel, goth, grindcore, groove, grunge, guitar, happy, hard-rock, hardcore, hardstyle, heavy-metal, hip-hop, holidays, house, idm, indian, indie, indie-pop, industrial, iranian, j-dance, j-idol, j-pop, j-rock, jazz, k-pop, kids, latin, latino, malay, mandopop, metal, metal-misc, metalcore, minimal-techno, movies, mpb, new-age, new-release, opera, party, piano, pop, pop-film, power-pop, punk, punk-rock, r-n-b, rainy-day, reggae, reggaeton, road-trip, rock, rock-n-roll, rockabilly, romance, sad, salsa, show-tunes, singer-songwriter, ska, sleep, songwriter, soul, soundtracks, spanish, study, summer, swedish, synth-pop, tango, techno, trance, trip-hop, turkish, work-out world-music \n")

    popularity=input("How popular do you want the songs? Answer low, medium, or high. \n")
    targPop = 50;
    if(popularity.lower() == "more"):
      targPop = 70;
    elif(popularity.lower() == "less"):
      targPop = 20;
  
    energy=input("How energetic do you want the songs? Answer low, medium, or high. \n") 
    targEner = .5
    if(energy.lower() == "more"):
      targEner = .75
    elif(energy.lower() == "less"):
      targEner = .25;
    
    acoustic=input("How acoustic do you want the songs? Answer low, medium, or high. \n") 
    targAco = .5
    if(acoustic.lower() == "more"):
      targAco = .75
    elif(acoustic.lower() == "less"):
      targAco = .25;
    
    danceable=input("How danceable do you want the songs? Answer more, less, or medium. \n") 
    targDan = .5
    if(danceable.lower() == "more"):
      targDan = .75
    elif(acoustic.lower() == "less"):
      targDan = .25;
    
    createPlaylists(limit, genre, targPop, targEner, targAco, targDan);
  else:
   print("Sorry, your answer wasn't understood. Please answer \"yes\" or \"no\" next time.");
   
  repeat = "idk";
  while(not(repeat.lower() == "no" or repeat.lower() == "yes")):
    repeat = input("Would you like another custom playlist? \n");
    if(repeat.lower() == "no" or repeat.lower() == "yes"):
      return repeat;
    else:
      print("Sorry, your answer wasn't understood. Please answer \"yes\" or \"no\".");

print("Hello, my name is VibeCheck, your personal music recommendations bot!");
name = input("What is your name? \n");
print("Hello " + name + ", I can't wait to talk to you!");

like = "maybe"
while(not(like.lower() == "no" or like.lower() == "yes")):
  like = input("Do you like to listen to music? \n");
  if(like.lower() == "no"):
    print("That's a shame! You should try listening to some songs.");
  elif(like.lower() == "yes"):
    print("Yay!! I also enjoy listening to music!");
  else:
    print("Sorry, your answer wasn't understood. Please answer \"yes\" or \"no\".");

music = "maybe"
while(not(music.lower() == "no" or music.lower() == "yes")):
  music = input("Are you listening to music right now? \n");
  if(music.lower() == "no"):
    input("Why not? \n");
  elif(music.lower() == "yes"):
    input("What music are you listening to? \n");
    print("Oh cool, I love that song!");
  else:
    print("Sorry, your answer wasn't understood. Please answer \"yes\" or \"no\".");

playlist = "duh";
while(not(playlist.lower() == "no" or playlist.lower() == "yes")):
  playlist = input("Would you like a custom playlist? \n");
  if(playlist.lower() == "no"):
    print("That's okay, head over to the Instant Entertainment tab for a surprise playlist and come back here when you do!");
  elif(playlist.lower() == "yes"):
    print("Coming right up!");
    while(playlist.lower() == "yes"):
      playlist = creator();
  else:
    print("Sorry, your answer wasn't understood. Please answer \"yes\" or \"no\".");

print("It was nice talking to you. Bye!");
