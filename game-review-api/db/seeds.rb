# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

last_of_us = Game.create(title: "The Last of Us", released_date: "06/14/2013")
zelda = Game.create(title: "The Legend of Zelda: Breath of the Wild", released_date: "03/03/2017")

last_of_us.reviews.build(
    game_title: "The Last of Us",
    website: "IGN",
    score: "10/10",
    snippet: "PlayStation 3 isn’t only well-known for its number of exclusive games,
     but for the sheer number of quality exclusives. That’s what makes The Last of Us 
     even more impressive, because not only does it join the ranks of Uncharted, 
     Killzone, God of War, Infamous and more, but it bests them all. In short, 
     Naughty Dog has crafted a game that impresses in virtually every way. 
     The Last of Us is a true feat. Its unrivaled presentation in particular sets 
     the bar even higher than the Uncharted trilogy already did, and its writing, 
     voice acting and layered gameplay combine to create what is very easily the 
     game to beat for Game of the Year 2013."
)

last_of_us.save
zelda.save

