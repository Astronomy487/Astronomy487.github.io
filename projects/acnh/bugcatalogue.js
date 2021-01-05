//0 name, 1 location (/ swimming pattern), 2 bells
//3 annual availability, 4 daily availability
//5 size (bug = 0, fish = 1 through 6)
//6 submission (0,1,2)

let bug = [];

bug.push(["Common Butterfly","Flying",160,[t,t,t,t,t,t,f,f,t,t,t,t],[f,f,f,f,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,f,f,f,f,f],"bug"]);
bug.push(["Yellow Butterfly","Flying",160,[f,f,t,t,t,t,f,f,t,t,f,f],[f,f,f,f,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,f,f,f,f,f],"bug"]);
bug.push(["Tiger Butterfly","Flying",240,[f,f,t,t,t,t,t,t,t,f,f,f],[f,f,f,f,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,f,f,f,f,f],"bug"]);
bug.push(["Peacock Butterfly","Flying by hybrid flowers",2500,[f,f,t,t,t,t,f,f,f,f,f,f],[f,f,f,f,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,f,f,f,f,f],"bug"]);
bug.push(["Common Bluebottle","Flying",300,[f,f,f,t,t,t,t,t,f,f,f,f],[f,f,f,f,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,f,f,f,f,f],"bug"]);
bug.push(["Paper Kite Butterfly","Flying",1000,[t,t,t,t,t,t,t,t,t,t,t,t],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,t,t,f,f,f,f,f],"bug"]);
bug.push(["Great Purple Emperor","Flying",3000,[f,f,f,f,t,t,t,t,f,f,f,f],[f,f,f,f,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,f,f,f,f,f],"bug"]);
bug.push(["Monach Butterfly","Flying",140,[f,f,f,f,f,f,f,f,t,t,t,f],[f,f,f,f,t,t,t,t,t,t,t,t,t,t,t,t,t,f,f,f,f,f,f,f],"bug"]);
bug.push(["Emperor Butterfly","Flying",4000,[t,t,t,f,f,t,t,t,t,f,f,t],[t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f,f,t,t,t,t,t,t,t],"bug"]);
bug.push(["Agrias Butterfly","Flying",3000,[f,f,f,t,t,t,t,t,t,f,f,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,f,f,f,f,f,f,f],"bug"]);
bug.push(["Raja Brooke's Birdwing","Flying by purple flowers",2500,[t,t,f,t,t,t,t,t,t,f,f,t],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,f,f,f,f,f,f,f],"bug"]);
bug.push(["Queen Alexandra's Birdwing","Flying",4000,[f,f,f,f,t,t,t,t,t,f,f,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f],"bug"]);
bug.push(["Moth","Flying by light",130,[t,t,t,t,t,t,t,t,t,t,t,t],[t,t,t,t,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,t,t,t,t,t],"bug"]);
bug.push(["Atlas Moth","On trees",3000,[f,f,f,t,t,t,t,t,t,f,f,f],[t,t,t,t,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,t,t,t,t,t],"bug"]);
bug.push(["Madagascan Sunset Moth","Flying",2500,[f,f,f,t,t,t,t,t,t,f,f,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f],"bug"]);
bug.push(["Long Locust","On ground",200,[f,f,f,t,t,t,t,t,t,t,t,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,t,t,f,f,f,f,f],"bug"]);
bug.push(["Migratory Locust","On ground",600,[f,f,f,f,f,f,f,t,t,t,t,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,t,t,f,f,f,f,f],"bug"]);
bug.push(["Rice Grasshopper","On ground",160,[f,f,f,f,f,f,f,t,t,t,t,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,t,t,f,f,f,f,f],"bug"]);
bug.push(["Grasshopper","On ground",160,[f,f,f,f,f,f,t,t,t,f,f,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,f,f,f,f,f,f,f],"bug"]);
bug.push(["Cricket","Dig at cricket noise",130,[f,f,f,f,f,f,f,f,t,t,t,f],[t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f,f,t,t,t,t,t,t,t],"bug"]);
bug.push(["Bell Cricket","On ground",430,[f,f,f,f,f,f,f,f,t,t,f,f],[t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f,f,t,t,t,t,t,t,t],"bug"]);
bug.push(["Mantis","On flowers",430,[f,f,t,t,t,t,t,t,t,t,t,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,f,f,f,f,f,f,f],"bug"]);
bug.push(["Orchid Mantis","On white flowers",2400,[f,f,t,t,t,t,t,t,t,t,t,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,f,f,f,f,f,f,f],"bug"]);
bug.push(["Honeybee","Flying",200,[f,f,t,t,t,t,t,f,f,f,f,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,f,f,f,f,f,f,f],"bug"]);
bug.push(["Wasp","Falls from shaking trees",2500,[t,t,t,t,t,t,t,t,t,t,t,t],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Brown Cicada","On trees",250,[f,f,f,f,f,f,t,t,f,f,f,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,f,f,f,f,f,f,f],"bug"]);
bug.push(["Robust Cicada","On trees",300,[f,f,f,f,f,f,t,t,f,f,f,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,f,f,f,f,f,f,f],"bug"]);
bug.push(["Giant Cicada","On trees",600,[f,f,f,f,f,f,t,t,f,f,f,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,f,f,f,f,f,f,f],"bug"]);
bug.push(["Walker Cicada","On trees",400,[f,f,f,f,f,f,f,t,t,f,f,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,f,f,f,f,f,f,f],"bug"]);
bug.push(["Evening Cicada","On trees",660,[f,f,f,f,f,f,t,t,f,f,f,f],[f,f,f,f,t,t,t,t,f,f,f,f,f,f,f,f,t,t,t,f,f,f,f,f],"bug"]);
bug.push(["Cicada Shell","On trees",10,[f,f,f,f,f,f,t,t,f,f,f,f],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Red Dragonfly","Flying",180,[f,f,f,f,f,f,f,f,t,t,f,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,t,t,f,f,f,f,f],"bug"]);
bug.push(["Darner Dragonfly","Flying",230,[f,f,f,t,t,t,t,t,t,t,f,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,f,f,f,f,f,f,f],"bug"]);
bug.push(["Banded Dragonfly","Flying",4500,[f,f,f,f,t,t,t,t,t,t,f,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,f,f,f,f,f,f,f],"bug"]);
bug.push(["Damselfly","Flying",500,[t,t,f,f,f,f,f,f,f,f,t,t],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Firefly","Flying",300,[f,f,f,f,f,t,f,f,f,f,f,f],[t,t,t,t,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,t,t,t,t,t],"bug"]);
bug.push(["Mole Cricket","Underground",500,[t,t,t,t,t,f,f,f,f,f,t,t],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Pondskater","Ponds",130,[f,f,f,f,t,t,t,t,t,f,f,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,t,t,f,f,f,f,f],"bug"]);
bug.push(["Diving Beetle","Ponds and rivers",800,[f,f,f,f,t,t,t,t,t,f,f,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,t,t,f,f,f,f,f],"bug"]);
bug.push(["Giant Water Bug","Ponds and rivers",2000,[f,f,f,t,t,t,t,t,t,f,f,f],[t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f,f,f,f,t,t,t,t,t],"bug"]);
bug.push(["Stinkbug","On flowers",120,[f,f,t,t,t,t,t,t,t,t,t,f],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Man-faced Stink Bug","On flowers",1000,[f,f,t,t,t,t,t,t,t,t,t,f],[t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f,f,f,f,t,t,t,t,t],"bug"]);
bug.push(["Ladybug","On flowers",200,[f,f,t,t,f,f,f,f,f,t,f,f],[f,f,f,f,f,f,f,f,t,t,t,t,t,t,t,t,t,f,f,f,f,f,f,f],"bug"]);
bug.push(["Tiger Beetle","On ground",1500,[f,t,t,t,t,t,t,t,t,t,t,f],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Jewel Beetle","On tree stumps",2400,[f,f,f,t,t,t,t,t,f,f,f,f],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Violin Beetle","On tree stumps",450,[f,f,f,f,t,t,f,f,t,t,t,f],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Citrus Long-horned Beetle","On tree stumps",350,[t,t,t,t,t,t,t,t,t,t,t,t],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Rosalia Batesi Beetle","On tree stumps",3000,[f,f,f,f,t,t,t,t,t,f,f,f],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Blue Weevil Beetle","On palm trees",800,[f,f,f,f,f,f,t,t,f,f,f,f],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Dung Beetle","Pushing snowballs",3000,[t,t,f,f,f,f,f,f,f,f,f,t],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Earth-boring Dung Beetle","On ground",300,[f,f,f,f,f,f,t,t,t,f,f,f],[t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,t],"bug"]);
bug.push(["Scarab Beetle","On trees",10000,[f,f,f,f,f,f,t,t,f,f,f,f],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Drone Beetle","On trees",200,[f,f,f,f,f,t,t,t,f,f,f,f],[t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f,f,t,t,t,t,t,t,t],"bug"]);
bug.push(["Goliath Beetle","On coconut trees",8000,[f,f,f,f,f,t,t,t,t,f,f,f],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Saw Stag","On trees",2000,[f,f,f,f,f,f,t,t,f,f,f,f],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Miyama Stag","On trees",1000,[f,f,f,f,f,f,t,t,f,f,f,f],[t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,t],"bug"]);
bug.push(["Giant Stag","On trees",10000,[f,f,f,f,f,f,t,t,f,f,f,f],[t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f,f,f,f,t,t,t,t,t],"bug"]);
bug.push(["Rainbow Stag","On trees",6000,[f,f,f,f,f,t,t,t,t,f,f,f],[t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f,f,t,t,t,t,t,t,t],"bug"]);
bug.push(["Cyclommatus Stag","On trees",8000,[f,f,f,f,f,f,t,t,f,f,f,f],[t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f,f,t,t,t,t,t,t,t],"bug"]);
bug.push(["Golden Stag","On trees",12000,[f,f,f,f,f,f,t,t,f,f,f,f],[t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f,f,t,t,t,t,t,t,t],"bug"]);
bug.push(["Giraffe Stag","On trees",12000,[f,f,f,f,f,f,t,t,f,f,f,f],[t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f,f,t,t,t,t,t,t,t],"bug"]);
bug.push(["Horned Dynastid","On trees",1350,[f,f,f,f,f,f,t,t,f,f,f,f],[t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f,f,t,t,t,t,t,t,t],"bug"]);
bug.push(["Horned Atlas","On trees",8000,[f,f,f,f,f,f,t,t,f,f,f,f],[t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f,f,t,t,t,t,t,t,t],"bug"]);
bug.push(["Horned Elephant","On trees",8000,[f,f,f,f,f,f,t,t,f,f,f,f],[t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f,f,t,t,t,t,t,t,t],"bug"]);
bug.push(["Horned Herucles","On trees",12000,[f,f,f,f,f,f,t,t,f,f,f,f],[f,f,f,f,t,t,t,t,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f],"bug"]);
bug.push(["Walking Stick","On trees",600,[f,f,f,f,f,f,t,t,t,t,t,f],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Walking Leaf","Near trees, looks like leaf",600,[f,f,f,f,f,f,t,t,f,f,f,f],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Bagworm","Falls from shaking trees",600,[t,t,t,t,t,t,t,t,t,t,t,t],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Ant","On rotten food",80,[t,t,t,t,t,t,t,t,t,t,t,t],[t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f,f,f,f,t,t,t,t,t],"bug"]);
bug.push(["Hermit Crab","Beach",1000,[t,t,t,t,t,t,t,t,t,t,t,t],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Wharf Roach","On rocks at beach",200,[t,t,t,t,t,t,t,t,t,t,t,t],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Fly","On trash items",60,[t,t,t,t,t,t,t,t,t,t,t,t],[t,t,t,t,f,f,f,f,f,f,f,f,f,f,f,f,f,t,t,t,t,t,t,t],"bug"]);
bug.push(["Mosquito","Flying",130,[f,f,f,f,f,t,t,t,t,f,f,f],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Flea","On villagers",70,[f,f,f,t,t,t,t,t,t,t,t,f],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t],"bug"]);
bug.push(["Snail","On rocks with rain",250,[t,t,t,t,t,t,t,t,t,t,t,t],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,t],"bug"]);
bug.push(["Pill Bug","Hit rocks",250,[t,t,t,t,t,t,f,f,t,t,t,t],[t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,t],"bug"]);
bug.push(["Centipede","Hit rocks",300,[t,t,t,t,t,t,f,f,t,t,t,t],[t,t,t,t,t,t,t,t,f,f,f,f,f,f,f,f,f,f,f,t,t,t,t,t],"bug"]);
bug.push(["Spider","Falls from shaking trees",480,[t,t,t,t,t,t,t,t,t,t,t,t],[t,t,t,t,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,t,t,t,t,t],"bug"]);
bug.push(["Tarantula","On ground",8000,[t,t,t,t,f,f,f,f,f,f,t,t],[t,t,t,t,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,t,t,t,t,t],"bug"]);
bug.push(["Scorpion","On ground",8000,[f,f,f,f,t,t,t,t,t,t,f,f],[t,t,t,t,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,t,t,t,t,t],"bug"]);