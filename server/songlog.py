import json

def addSong(name:str,artist:str,url:str,year:int) -> None:
	song = {
		"name":name,
		"artist":artist,
		"url":url,
		"year":year
	}
	with open("server/songs.json","r") as rob:
		data = json.load(rob)
		data.append(song)
		with open("server/songs.json","w") as wob:
			json.dump(data,wob,indent=4)
	
name = input("Enter song name : ")
artist = input("Enter song's artist : ")
url = input("Enter song's youtube link : ")
year = input("Enter song's year : ")

addSong(name,artist,url,year)