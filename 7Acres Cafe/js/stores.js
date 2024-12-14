const stores = [
    {
        "name": "Green Hedge",
        "address": "Green Hedge",
        "owner": "Green Hedge",
        "province": "ON"
    },
    {
        "name": "CGC",
        "address": "Hershey Drive",
        "owner": "CGC",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "Namao",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Mt. Pearl",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Loblaw",
        "address": "Cornerbrook",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Loblaw",
        "address": "Stephenville",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Tokyo Smoke",
        "address": "CBS",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Value Buds",
        "address": "Namao",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Tokyo Smoke",
        "address": "HVGB",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Miawpukek Mi?kamawey Mawi?omi",
        "address": "",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Value Buds",
        "address": "Off Whyte",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Amherst",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Newfoundland Cannabis Company",
        "address": "",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "NUMO Cannabis",
        "address": "Alberta Avenue",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Dartmouth",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "The Herbal Centre",
        "address": "",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Value Buds",
        "address": "Fort Sask",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Clyde St.",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "High North Ltd.",
        "address": "",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Waldo's 420 Store",
        "address": "16 Street",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Joseph Howe Dr.",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Wiid Boutique",
        "address": "Albert Street",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Sackville Dr.",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Westside Weed",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Willowpark",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "New Glasgow",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Value Buds",
        "address": "Grove Landing",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Sydney River",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Small Town Buds",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "Inglewood Square",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Daily Blaze",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Cannabis House",
        "address": "McConachie West",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Decibel",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Nova Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "HighTide",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Star Buds",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "CO-OP Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Cannabis Cowboy",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "PlantLife",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "PEI Liquor Control Commission",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "PE"
    },
    {
        "name": "Tweed",
        "address": "East Quance",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Lucid Cannabis",
        "address": "Regina",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Canna Cabana",
        "address": "Swift Current",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Fire & Flower",
        "address": "Estevan",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Fire & Flower",
        "address": "Moosomin",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Ridge Cannabis Products",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "The Potterie",
        "address": "Grimshaw",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Foothills",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Oakridge",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Celestial Buds",
        "address": "Memorial Drive",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Harvest Country Cannabis Store",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Grasshopper Retail Inc.",
        "address": "George Street",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "The Pineapple Group",
        "address": "Green Pineapple",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Tweed",
        "address": "Meadow Lake",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "PlantLife",
        "address": "Grande Prairie",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Whyte Ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Jasper",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "High Arrow Cannabis",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Downtown Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Fire & Flower",
        "address": "Strathmore",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "PlantLife",
        "address": "Stoney Creek",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "High Mountain Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Salmon Arm Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Canna Cabana",
        "address": "Airdrie Main",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Rundlehorn",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "WestCanna",
        "address": "Broadway",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Giving and Receiving",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Tweed",
        "address": "Fort Qu'Appelle",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Fire & Flower",
        "address": "Vegreville",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Vernon",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Canna Cabana",
        "address": "100 Street",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Prairie Records",
        "address": "Stonebridge",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "PlantLife",
        "address": "Airdrie",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Tweed",
        "address": "Humboldt",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "The Joint Cannabis",
        "address": "Assiniboia",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Tweed",
        "address": "Melville",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Tweed",
        "address": "8 street",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Canna Cabana",
        "address": "Beaumont",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "City Cannabis Co.",
        "address": "Cambie",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Canmore",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Centre Street",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Lacombe",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Canmore Cannabis Co.",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Lloydminster",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "10 Street",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Peace Pipe Cannabis Company",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Cannabis Boutique",
        "address": "Wetaskiwin",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "CannaCAD",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "CO-OP Cannabis",
        "address": "Forest Lawn",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "King Street Cannabis",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Crestview",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Creston Valley Cannabis",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Clarity Cannabis",
        "address": "Johnson St",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Courtenay",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Canna Cabana",
        "address": "Camrose",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Firestone Cannabis",
        "address": "Edmonton",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "St Albert Trail",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Port Alberni",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Cloud 420",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Oceanside C Weed",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Fire & Flower",
        "address": "Rice Howard Way",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Nirvana Canna",
        "address": "Crestwood Road",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "PlantLife",
        "address": "Fort Sask",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "PlantLife",
        "address": "Wainwright",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "Swan River",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Northern Cannabis",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "Burb",
        "address": "Broadway Street",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Coastal Bay Cannabis",
        "address": "Marine Drive",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Crown Cannabis",
        "address": "Ritchie",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "The Little Smoky Enterprises",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Glenmore Landing",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Drumheller",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Plantlife",
        "address": "Terra Losa",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Plantlife",
        "address": "Sunwapta",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "The Green Box Cannabis",
        "address": "Unity",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "SQDC",
        "address": "77043",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77042",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77041",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77018",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC -77033",
        "address": "Mont-Tremblant",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Value Buds",
        "address": "Shepard",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "10 Ave",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Dragons Peak Cannabis",
        "address": "Quesnel",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Uncle Sam's Cannabis",
        "address": "Fort Road",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Quantum 1 Cannabis",
        "address": "Vernon",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Terrace",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Canyon Creek Cannabis",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Kootenay Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Joint Venture Cannabis",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Yellowhead Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "High 5 Cannabis",
        "address": "Victoria",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Black Crow Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Dutch Love Cannabis",
        "address": "Kitsilano",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Cainan Cannabis Store",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Deviant Fibres",
        "address": "Kitimat",
        "owner": "Jean-Pascal Fortier",
        "province": "bc"
    },
    {
        "name": "Sicamous Trading Company",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Baggy's Cannabis Store",
        "address": "Greenwood",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Fiore Fresco",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Clarity Cannabis",
        "address": "Kamloops",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Tony's Head Shop and Cannabis Retail",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "642 Cannabis",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Value Buds",
        "address": "Strachan Corner",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Greenspot Shop",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "One Plant",
        "address": "Stouffville",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Parksville",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Tumblweedz",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Loft Cannabis Market",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Pender Island Naturals",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "BudaBoom",
        "address": "87 ave",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Peter Pond",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Cold Lake",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "The Original Farm",
        "address": "Duncan",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Lux Leaf",
        "address": "Blackfalds",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Sunrise Cannabis Retail Ltd.",
        "address": "Gibbons",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Beaumont",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Bud Bar",
        "address": "10th St",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Signal Hill",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "The Green Box Cannabis- Killam",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Bud Supply",
        "address": "Range Bud",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Hashed Gardens",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Solar Cannabis",
        "address": "Mayerthorpe",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Lethbridge Towne Centre",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Plantlife",
        "address": "Lethbridge",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Red Deer",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Fairway Street",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "The Park Canna Club Inc.",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Garden Variety",
        "address": "Brandon",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Plantlife",
        "address": "Jenson Lakes",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Plantlife",
        "address": "Olds",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Kiaro",
        "address": "Victoria Gorge",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Canadian Greens",
        "address": "Grande Prairie",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Ogden Cannabis",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Hunny Pot Cannabis Co.",
        "address": "Burlington",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Friendly Stranger",
        "address": "Burlington",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Waterloo",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Kitchener (Fairway Road)",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Kiaro",
        "address": "Port Moody",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Canna Cabana",
        "address": "14 Street",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Cloud 620",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Saskabuds Cannabis Melfort",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "SQDC",
        "address": "77072",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77034",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77031",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77044",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "FN Cannabis Co.",
        "address": "Nipawin",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "One Plant",
        "address": "Kensington",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "5 Buds Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "BC Cannabis Store",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Best Buds Outlet",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Bongs and Such Plus",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Mountain Standard Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Muse Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Green Gaia Cannabis Co",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Nirvana Canna",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "NUMO Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Equilibrium Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "One Plant",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "ARCannabis Store",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Pacificanna",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Spiritleaf",
        "address": "Kensington",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Peaceleaf",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis Factory",
        "address": "44st",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Prime Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis Factory",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Quantum 1 Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Port Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Sessions Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Bean Cannabis Shop",
        "address": "Port Alberni",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "The Daily Bud",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Imagine Cannabis Co",
        "address": "Cliffe Ave",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Bluewater Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "Raft Peak Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Weeds",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Green House Cannabis Boutique",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Quilchena Cannabis Company",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Calyx & Trichomes- Kingston",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Cheerful Charlies Cannabis Co.",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Mary J's Cannabis",
        "address": "Kingston",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Hi Class",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Hunny Pot Cannabis Co.",
        "address": "2103 Yonge",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Lux Smoke Vape/Cafe Inc",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Eco Green Leaf Bar",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Modern",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Growers Retail",
        "address": "Parliament",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Cambridge",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Hamilton Mohawk Rd",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Enlightened Herb Cannabis",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Plantlife",
        "address": "Eagle Ridge",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Firestone Cannabis",
        "address": "Ponoka",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Prairie Records",
        "address": "8 Ave",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "SQDC",
        "address": "77065",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77049",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77036",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77051",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Meta Cannabis Co.",
        "address": "Pembina South",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Nexus Cannabis Co",
        "address": "North York",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Ottawa Valley Cannabis Store",
        "address": "Pembroke",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Farmer Janes Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Farmer Janes Cannabis Co.",
        "address": "Grant Park",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Bragg Creek",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Lolly",
        "address": "Caledonia",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "The 420 Store",
        "address": "Lindsay",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Flight Deck Cannabis Co.",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "The Greenery Cannabis Boutique",
        "address": "Kelowna",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Sticky Leaf",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis House",
        "address": "Parkwest",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "13th Floor Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "13th Floor Cannabis",
        "address": "Airdrie",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Chinook Cannabis Inc.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Green Merchant Cannabis Boutique",
        "address": "Danforth",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Sweet Seven Cannabis Co.",
        "address": "Waterloo",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Country Hills",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "The Peace Pipe",
        "address": "Peterborough",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Squamish Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Green Solution Cannabis",
        "address": "St. Paul",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Flora Cannabis",
        "address": "Lakeshore",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Muse Cannabis",
        "address": "Deep Cove",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Vernon Cannabis Store",
        "address": "48 Ave",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Spiritleaf",
        "address": "Gateway",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "The Rural Leaf Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis Discounter",
        "address": "Oxford",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "The Rural Leaf Co.",
        "address": "Houston",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Cannabis House",
        "address": "Fort Sask",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Green Solutions Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Truth & Alibi",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "The Bend Cannabis Co.",
        "address": "Grand Bend",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Higher Limits Cannabis Company",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Firestone Cannabis",
        "address": "Sylvan Lake",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "The Cannabis Retail Store",
        "address": "Leamington",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Up In Smoke",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Spiritleaf",
        "address": "Hog's Back",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "The Gym Cannabis",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Up in Smoke",
        "address": "Leila Ave",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Cannabis At The Green Brier Inn",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Bluebird Cannabis Co.",
        "address": "Kanata",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Woodlawn",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Central Plains Cannabis",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "One Plant",
        "address": "Stoney Creek",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Windsor (Lakeshore)",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Glace Bay",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "One Plant",
        "address": "Orleans",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "ERBN Cannabis Co. ",
        "address": "Picton",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Co-op Cannabis",
        "address": "Shawnessy",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "ERBN Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "WOW World of Weed",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Orillia",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Plantlife",
        "address": "Mahogany Plaza",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "The Good Cannabis Company",
        "address": "Ottawa Bank St",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Lakeview Cannabis",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "SPARQ Retail",
        "address": "Peterborough",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Puffin's THC & CBD Dispensary",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Fogtown Flower Shop (The Local Buzz Cannabis Company Corp.)",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis (Formerly Craft Cannabis Co)",
        "address": "Binbrook",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "North Bay",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "House of Bud",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Green Grove",
        "address": "Alliston",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "The We Store",
        "address": "Walker Road",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Sweet Releafs Inc.",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "Orangeville",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "The We Store",
        "address": "Wyandotte St",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "The We Store",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis Supply Co.",
        "address": "St. Catherines",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "Guelph",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Neku Cannabis",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "Wilson Ave",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Day ? N? Nite Cannabis",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Kitchener",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Bud-ees Dispensary",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Rural Buds Cannabis Shop ? Morris",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Lakewood Cannabis",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Four20 Premium Market",
        "address": "Ottewell",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Smokey Trails",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Weighburn Weed and Supply Co.",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "POG Dispensary",
        "address": "Cornwall",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Albion Road",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "One Plant",
        "address": "Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Marlee's Den",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Weed Pool",
        "address": "Rosetown",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Living Skies Cannabis",
        "address": "Fairlight Drive",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "The Pot Shack",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Pot Shack",
        "address": "51 Street",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "5 Buds Cannabis",
        "address": "Prince Albert",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Prairie Trichomes",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Canora Cannabis Ltd",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Preeceville Cannabis",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "Kirkfield",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Cannabis Link",
        "address": "Wonderland Road",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Burlington (Upper Middle Rd)",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Beltline",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Hunny Pot Cannabis Co.",
        "address": "Milton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "TreeTop",
        "address": "Milton (Nipissing Rd.)",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Phoenix Cannabis (Previously Canadian Cannabis Bouteek)",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Jupiter Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Matchbox Cannabis",
        "address": "SSM",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Country Cannabis Store",
        "address": "Calmar",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Matchbox Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "URBN Leaf Cannabis Company",
        "address": "Clairmont",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Chamba Cannabis Co.",
        "address": "Waterloo",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Green Solutions Cannabis",
        "address": "Rimbey",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "High Bar Cannabis",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Leaf Life",
        "address": "Hidden Valley",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "CannaB3",
        "address": "Elk Point",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Bud Supply",
        "address": "North Bridge Bud",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Big Buds",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Alliston",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Best Budz",
        "address": "Brantford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Neat Cannabis Company",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Songhees Cannabis Store",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "SQDC",
        "address": "77068",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77062",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Little Green Nuggets Ltd.",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Trees Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "SQDC",
        "address": "77069",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Urban Earth Medical (UEM)",
        "address": "Langley",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "SQDC",
        "address": "77070",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Sativa Bliss Cannabis",
        "address": "Belleville",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77074",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77077",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Sativa Bliss Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "SQDC",
        "address": "77079",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77061",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Canna Cabana [formerly Meta Cannabis Co.]",
        "address": "Ottawa (Rideau St)",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77008",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Yield Cannabis Co.- Belleville",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Yield Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "SQDC",
        "address": "77007",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77023",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Borderland Cannabis",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "Chatham",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Lindsay Cannabis Store",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "The Kensary",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Unplug Cannabis Co.",
        "address": "Ottawa (Richmond Rd)",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Alpine Smoke",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Kemptville, County Rd 43",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Unplug Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "SunFish Cannabis",
        "address": "Lakefield",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "Stockyards Clair Ave",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "The Kensary",
        "address": "Toronto",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "One Plant",
        "address": "Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Rose Gold Cannabis",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Tonik Cannabis",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Sweet Releafs Inc.",
        "address": "Burlington",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "SPARQ Retail",
        "address": "Peterborough (Lansdowne St W)",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "One Plant",
        "address": "St Catharines",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "10 Seventeen Cannabis",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Ashario",
        "address": "North York",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Labyrinth Cannabis",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Casa Bliss",
        "address": "Timmins",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Golden Tree Cannabis",
        "address": "Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Phoenix Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Redden's",
        "address": "Longbow",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Sativa Bliss Cannabis",
        "address": "St Catharines",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Cauldron Cannabis",
        "address": "Watford",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Hidden Leaf Cannabis Co.",
        "address": "Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Soma Leaf Company",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Superette",
        "address": "Glebe",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Cannabis Jack's",
        "address": "Timmins",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Temagami Cannabis Company",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Altona Motor Hotel",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Little House Cannabis",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Rural Buds Cannabis Shop",
        "address": "Carman",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Belleville",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "High Leaf Cannabis",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Potty Mouth Cannabis Co.",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Fire & Flower",
        "address": "Sterling Lyon Parkway",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Paradise Cannabis",
        "address": "Niagara Falls",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Wasaga Beach",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "One Plant",
        "address": "Tecumseh Road",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Flamingo Cannabis",
        "address": "Portage Ave",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Kiosk Cannabis",
        "address": "Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "VIP Cannabis Co.",
        "address": "Woodstock",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Barrie Park Place",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "The Joint Cannabis",
        "address": "Corydon Ave",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "The Woods Cannabis- Brampton",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Kiosk Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Northern Helm [formerly MCannabis]",
        "address": "Danforth",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Cannabis Jack's",
        "address": "Val Caron",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Arnprior",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Elmvale",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Zephyr Cannabis",
        "address": "Kanata",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Capturing Eden",
        "address": "Hagersville",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Cabbage Brothers",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Above the Clouds Cannabis",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Portage Ave",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Cabbage Brothers",
        "address": "Locke St.",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Belleville (Dundas St E)",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Chamba Cannabis Co.",
        "address": "Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "The Farmhouse Cannabis Co.",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Pluto Plants",
        "address": "Queen St",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "The Canadian Cannabis Store",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "The Neighbourhood Joint",
        "address": "Coxwell Ave",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Cannabis Bazaar",
        "address": "Kingston",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "St Catharines",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Casa Bliss",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Garden of Eden Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Wake N' Bake Cannabis",
        "address": "Ellerslie Road",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Davenport Leaf",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Dope Cannabis (Formerly Casa Bliss",
        "address": "North York)",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Plantlife",
        "address": "Leduc",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Oh Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Cannabis Xpress",
        "address": "Uxbridge",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Bud Supply",
        "address": "Bridge West",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "J. Supply Co.",
        "address": "Arthur Street",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Wasaga Beach",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Hive Cannabis",
        "address": "Abbotsford",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Club Canapa Cannabis",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Cannaco The Cannabis Company",
        "address": "Trenton",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Elk Valley Cannabis",
        "address": "Sparwood",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Lolly",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Simcoe",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Chamba Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Listowel",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Cannabis Link",
        "address": "London (Commissioners Rd)",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Canna Buzz Inc.",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Weedy Point",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Value Buds",
        "address": "Hamilton [Previously Nova]",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Saanich",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Nature's Canopy House",
        "address": "East York",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "The Neighbourhood Joint",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Nature's Canopy House",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Farmer Jane Cannabis Co.",
        "address": "Normanview",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "4K Cannabis",
        "address": "Ajax",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Cannabis Bazaar",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Himalaya Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Nuclear Lettuce",
        "address": "Kincardine",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Galaxie Greens and Edibles Inc.",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "The House of Cannabis",
        "address": "Kitchener",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "The Leaf Collection Inc.",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Moksha Cannabis",
        "address": "North York (Jane St)",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Canna Cabana ? Muskoka Road (Formerly Bud Heaven",
        "address": "Muskoka Road)",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Reds Cannabis Limited",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Spiritleaf",
        "address": "Ottawa (South Keys)",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Harvest Cannabis Co",
        "address": "Southey",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Canna Cabana",
        "address": "Thunder Bay (Fort William Rd)",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Star Buds",
        "address": "Rothesay",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Norquay Corner Gas Cannabis",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "NSLC Cannabis",
        "address": "New Waterford",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Moonlit Cannabis",
        "address": "Estevan",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Cannabis Cannabis",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Moonlit Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Tony's Joint",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Kanab",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Tony's Joint",
        "address": "Kingsville",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Flowertown Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Inspired Cannabis Co",
        "address": "Regina",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Flowertown Cannabis",
        "address": "Beaverton",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Spruceland",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Mary J's Cannabis",
        "address": "Ottawa",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "WE?D",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Greentown",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Harvest Cannabis Co",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Greentown",
        "address": "LaSalle",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Rural Buds Cannabis Shop",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Character Co",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Northern Helm Cannabis",
        "address": "Bowmanville",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "Weyburn",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Hemisphere Cannabis Co.",
        "address": "Toronto (Front St E)",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Cannabis Xpress",
        "address": "Hillsdale",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Kapuskasing",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Runway Pot",
        "address": "Etobicoke",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Circa 1818",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Princess Street",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "645 Commissioners Rd (London)",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Oz Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Stash & Co",
        "address": "Toronto",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Flamingo Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Oz Cannabis",
        "address": "Rimbey",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Taste Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Malibu Munchies",
        "address": "Penetanguishene",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Greenstar Cannabis Company",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Honeycomb Cannabis",
        "address": "St. Paul",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Cannabis Cove",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Greenstar Cannabis Company",
        "address": "Courtenay",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "London Haze Cannabis",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Rocky Mountain Roots",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Kingsway Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Dab Glass",
        "address": "Fischer-Hallman Kitchener",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Rocky Mountain Roots",
        "address": "Barrhead",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Varsity",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "The Hempire",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Muse Cannabis",
        "address": "Maple Ridge",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Value Buds",
        "address": "Village Landing",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Cannabis Cupboard",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Coast Range Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Discounted Cannabis",
        "address": "82 Street",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Pacificanna",
        "address": "Fort Street",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Cannabis Cupboard",
        "address": "Stoney Creek",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Cannabis Stop Inc.",
        "address": "Arthur",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Coast Range Cannabis",
        "address": "Courtenay",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Garden City Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Cannabis Guys",
        "address": "Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Garden City Cannabis Co.",
        "address": "Welland",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "RC Bud Shop",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Tokyo Smoke",
        "address": "Stratford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "The Cannabis Retail Store",
        "address": "Windsor",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Groove Cannabis Co. Inc.",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Greenlight District",
        "address": "Barrie",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Rightpuff Cannabis",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Stirling Cannabis",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Olympia Cannabis",
        "address": "Tweed",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Olympia Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis Hut Ltd.",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Star Buds",
        "address": "127 St",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Canadian Greens",
        "address": "Beaverlodge",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "Cold Lake",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Tree Hill Cannabis",
        "address": "Lloydminister",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Plantlife",
        "address": "Sherwood Park",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "CANACity Cannabis Store",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "Pembina Hwy",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Star Buds",
        "address": "Pembina Hwy",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Fika Herbal Goods",
        "address": "Golden Mile",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Northern Helm Cannabis",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Sprucebuds Cannabis",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "The Community Store",
        "address": "Belleville",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Cannabis Supply Co.",
        "address": "Brantford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Innisfil",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Kanata",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "710 Kingston",
        "address": "Midland Ave.",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Purple Tree Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "The Bohemian Cannabis Co.",
        "address": "New Westminster",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "High Society Cannabis Co.",
        "address": "Marathon",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "The Bohemian Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "High Society Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Canada Pure Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Buds 4 Less",
        "address": "Barrie Mapleview",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Levicann",
        "address": "Toronto",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "On the Ridge Co. Cannabis",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Canna Havana",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Embrun",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Canada Pure Cannabis",
        "address": "Kitchener",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Wavy Buds Recreational Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Royal Leafs Waterdown",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Purple Meadow Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Cambridge (King Street)",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Natural Mystic Cannabis & Cbd",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Purple Meadow Cannabis",
        "address": "Rideau St.",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Happy Valley Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Hi Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "100 Percent Cannabis Ltd.",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Canna Cabana",
        "address": "Victoria Ave",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Cow Bay Cannabis",
        "address": "Cow Bay",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "KushKlub",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Unity Cannabis Ltd",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "J. Supply Co.",
        "address": "Guelph",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Unity Cannabis Ltd",
        "address": "Merritt",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Your Highness",
        "address": "Sarnia",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Eighth Cannabis",
        "address": "Minden",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "WEEDS Glass & Gifts",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Save on Grass Cannabis Company",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Straight Loud",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Highway Cannabis Co.",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Buds Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Honeycomb Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Goderich",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Brockville",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Trenton",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Cornwall",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Gloucester",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Guelph",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Angus",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Consumers Cannabis",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Fika Herbal Goods",
        "address": "Canary",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Fika Herbal Goods",
        "address": "Barrie",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Atlas Cannabis Inc.",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Smiley's Cannabis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Glow Cannabis",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Peel Centre",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Elevated Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Cafe Mary Jane",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Canntina",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Vancity Weeds",
        "address": "Commercial Drive",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "123 Cannabis",
        "address": "Calgary",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Fika Herbal Goods",
        "address": "Aurora",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "A Little Bud Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Rathwell Stores",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "The Hunny Pot Cannabis Co",
        "address": "Pickering",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Midtown",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Canna Cabana",
        "address": "East Hills Square",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Inglewood",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "7Th Heaven Cannabis",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Haze",
        "address": "High Level",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Marda Loop",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Eighth Cannabis",
        "address": "Bowmanville",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Big Sky Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Greener Grass Cannabis",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Spot420",
        "address": "Orangeville",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Dank Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Plug Canna6is",
        "address": "Dundas St. East",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Dank Cannabis",
        "address": "26 ave",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "The Cannabist Shop",
        "address": "Guelph",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Enroute Cannabis",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Haze Inc.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Big River Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Oz Store",
        "address": "Morrisburg",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Botanica",
        "address": "Valleyview",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Kozmic Kush",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Kingston",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Milton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Port Perry",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Sunfish Cannabis",
        "address": "Havelock",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Nuleef Cannabis",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Sunfish Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Gram'S Smokey Dreams",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Imagine Cannabis Co- Davie Street",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Sudbury (Formerly Clover Cannabis)",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Trenton Cannabis",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Endless Heights Cannabis Shop",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Your Local Cannabis",
        "address": "Trenton",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Fika Local",
        "address": "Dufferin Mall",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Pakalolo",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "The Weed Store",
        "address": "Regina",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Taste Buds Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Pakalolo",
        "address": "Findlay Creek",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Buzzed Buds",
        "address": "Woodview",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Forest City Marijuana",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Taste Buds Cannabis",
        "address": "Milton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Cannabis Cupboard",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Miss Jones",
        "address": "North Bay (Lakeshore Dr)",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Ponoka",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Fire & Flower Cannabis Co.",
        "address": "659 Danforth Ave. Toronto",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Nickle City",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Dominion",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Cannabis Leaf",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Dab Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Sherway",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Eastern Passage",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Happy Dayz",
        "address": "Estevan",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Porter's Lake",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Gosal Cannabis",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Chronicles Cannabis",
        "address": "Woodstock",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Groove Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis 4 Less",
        "address": "Clairmont",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Imagine Cannabis Co",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Napanee",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Groove Cannabis Co.",
        "address": "South Lancaster",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Unity Cannabis Ltd",
        "address": "Penticton",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Vertie",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Mountain Standard Cannabis",
        "address": "127 Ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Pacific Coastal Cannabis",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Mistik Cannabis Co.",
        "address": "Red Earth",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Waldo's 420 Store",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Harvest Moon Cannabis",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "The Community Store",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Waldo's 420 Store",
        "address": "Northlands Way",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Holy Cannabis",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "K.J.'s Best Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Spiritleaf",
        "address": "Polo Park",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "La Salle Cannabis and Vape",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Babettes Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "The Cannabis Vault",
        "address": "Ashern",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "K.J.'s Best Cannabis",
        "address": "Mission",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "The Joint Cannabis",
        "address": "Kenaston",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Warmland Cannabis Centre",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Bud Mart",
        "address": "Chestermere",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Dutch Love Cannabis",
        "address": "Hamilton Street",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Rocky Bay Cannabis",
        "address": "Victoria",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "BudaBoom",
        "address": "106 street",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "The Rural Leaf Co.",
        "address": "Fort St. James",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "Canna Savanna",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Fire & Flower Cannabis Co.",
        "address": "Kingston Rd. Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Double Dutch Cannabis",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "The Pot Spot",
        "address": "Dovercourt",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Chinook Cannabis Inc.",
        "address": "16 street",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Rideau Cannabis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Cowbuds Cannabis",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "VIP Cannabis Co.",
        "address": "Cambridge",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Crown Cannabis",
        "address": "15 Ave",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Tyme Cannabis Co.",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Lux Leaf",
        "address": "Country Hills",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "The Curious Cannabis Company",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Stouffville (Main St)",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Salmo Cannabis Corporation",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Soul Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Eden Cannabis Empire",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Kryptonite Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Fallen Giants",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Lush Cannabis Company",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Wychwood Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Local Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Local Cannabis Co.",
        "address": "Victoria Drive",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Plantlife",
        "address": "Hollick Kenyon",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "All The Smoke Premium Cannabis Market",
        "address": "Centre st",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Spot 420",
        "address": "Bowmanville",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77075",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77095",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77096",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77099",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Pacific Sea Weed Cannabis Co",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "SQDC",
        "address": "77100",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Ideal Buds (Sioux Lookout)",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Stok'D Cannabis",
        "address": "Niagara Falls",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "C Shop",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Rockwood Cannabis",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Dutchman House of Cannabis",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Goodvibes Cannabis",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Pot Life Inc",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Rocky Mountain Collective",
        "address": "Jasper",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Convenient Cannabis Inc.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Mexicannabis",
        "address": "Coxwell Ave",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Local Cannabis Co.",
        "address": "Vancouver",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Wowkpow Retail Donald Inc",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Mystic'S Cannabis",
        "address": "2141 King St. E Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Portage Mountain Cannabis Inc.",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "Mystic'S Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Lux Leaf Cannabis",
        "address": "North Town Road",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Petawawa Cannabis Store",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "North Bay",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "Selkirk",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Growcery Cannabis",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Kana Leaf Cannabis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Tyme Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "One Plant",
        "address": "Georgetown",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "VIP Cannabis Co.",
        "address": "Harriston",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Tyme Cannabis Co.",
        "address": "North York",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Hunny Pot Cannabis Co.",
        "address": "Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Budtimez",
        "address": "Midhurst",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Cannabis Masters",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Hempire House",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Mission Cannabis",
        "address": "Cedar St",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Tack'd Cannabis",
        "address": "Yorkton",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Corner Joint",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Canna Cabana",
        "address": "Hillhurst",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Burb",
        "address": "East 10th Ave",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Green Gear Cannabis",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Downtown 420",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Hamilton (Fennell Ave.)",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "High Score",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Bonnefire",
        "address": "Brighton",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Equilibrium Cannabis",
        "address": "Redwater",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Bonnefire",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Canadian Cannabis Connoisseurs Club",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Farmer Jane",
        "address": "Acre 21",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Hey Bud Retail Cannabis",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Canadian Cannabis Connoisseur Club",
        "address": "Dufferin Boulevard",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Levicann",
        "address": "Keswick",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Tatva Cannabis Ltd",
        "address": "Portage Ave",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Growers Retail",
        "address": "Danforth",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "3321 Portage Ave",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Dab Cannabis",
        "address": "Garson",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Levicann",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Lucid Cannabis",
        "address": "Vic Ave",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Budville Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Northern Tokes",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Morden VapeSuperStore & Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Planet Hollyweed",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Happy Valleys Cannabis \u00cele-des-Ch\u00eanes",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Northern Tokes",
        "address": "Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Collective Growers",
        "address": "Ottawa (Sparks St)",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Tango Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Sativa Bliss Cannabis",
        "address": "Etobicoke",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Plantlife",
        "address": "Jasper",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Campbellford",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Pluto Cannabis",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Giggles Cannabis",
        "address": "Kingston",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Lux Leaf Cannabis",
        "address": "Gateway Boulevard",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Four20 Premium Market",
        "address": "Avenue NE",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "RARE Cannabis Co.",
        "address": "Calgary",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Blackfalds",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Club Cannabis",
        "address": "Cache Creek",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Cariboo Buds Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "Cariboo Buds Cannabis",
        "address": "Lone Butte",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Unity Cannabis Store Ltd",
        "address": "Lac La Hache",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "The Green Pineapple",
        "address": "Kelowna",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Studio Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "ARCannabis Store",
        "address": "West 4th Avenue",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Happy Isle Cannabis",
        "address": "West Vancouver",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Value Buds",
        "address": "Toronto (Danforth Ave)",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Flowershop Cannabis",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "Value Buds",
        "address": "King St. West",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "North York",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Peel Centre Dr",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "The Coughy Shop",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Value Buds",
        "address": "500 Bloor St",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Budssmoke",
        "address": "Rutherglen",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "CJ's Cannabis and Wellness",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Canada Buds",
        "address": "St Catharines",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Country Cannabis Store",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Canada Buds",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis Plus Store",
        "address": "Cumberland St",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Cannabis Plus Store",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Country Cannabis Store",
        "address": "Thorsby",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "1904 Cannabis Company",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "1904 Cannabis Company",
        "address": "Shawnigan Lake",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Baggy's Cannabis Store",
        "address": "Christina Lake",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Burb Cannabis",
        "address": "Saanich",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Frontier Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Warmland Cannabis Centre",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "Warmland Cannabis Centre",
        "address": "Cobble Hill",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Trees Cannabis",
        "address": "Alpha St",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Southside Marijuana",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "The 420 Place",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "The 420 Store",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Spot 420",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Because You Cann Cannabis",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "F&L Cannabis Inc.",
        "address": "Rimbey",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Marlee's Den",
        "address": "Cache Creek",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Stok'd Cannabis",
        "address": "Eglinton East",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "The Cannabis Shop",
        "address": "Perth",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "The Hunny Pot Cannabis Co.",
        "address": "Niagara Falls Oakwood",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "True North Cannabis",
        "address": "Timmins (Craig St.)",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "VIP Cannabis Co.",
        "address": "Elmira",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Purple Pineapple Cannabis Co.",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Discounted Cannabis",
        "address": "Kingsville",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Bongbaba Cannabis Culture",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Olympia Cannabis",
        "address": "Perth",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "London North",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Seed and Stone",
        "address": "Fort St",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Burnaby Lougheed",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Jerry's Cannabis Co.",
        "address": "Nanaimo",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Brentwood",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Lit Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "VIP Cannabis Co.",
        "address": "Perth East",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "VIP Cannabis Co.",
        "address": "Chesley",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "NSLC",
        "address": "North Sydney",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "SQDC",
        "address": "77103",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77105",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77030",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77106",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Flamingo + Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "SQDC",
        "address": "77104",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Lambton Mall",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "One Plant",
        "address": "Cornwall",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "MC Cannabis",
        "address": "Guelph",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Cannabis Cupboard",
        "address": "Beamsville",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Pops Cannabis",
        "address": "Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Big River Cannabis",
        "address": "Bourget",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Value Buds- Brampton",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Mary Jane Muskoka",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Cannabis Cupboard",
        "address": "Brantford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "TreeTop",
        "address": "Corporate Office",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Hypnotic Cannabis",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "TreeTop",
        "address": "Burlington",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Budssmoke",
        "address": "Callander",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Green Timber Cannabis",
        "address": "",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "L.A. Cannabis Store",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Le Marchand Du Cannabis",
        "address": "",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Crown Cannabis",
        "address": "95th St",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "True North Cannabis Co",
        "address": "Gordon St Guelph",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "McCannabis",
        "address": "",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Copper Stop Ultramar",
        "address": "",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Cannabis Hut",
        "address": "Mississauga",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Crown Leaf",
        "address": "Mississauga",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Highlands Bud",
        "address": "Calgary",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Runway Pot",
        "address": "Mississauga",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Mississauga",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Crown Cannabis",
        "address": "95st",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Rideouts Western Petroleum",
        "address": "",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Canna Cabana",
        "address": "St Thomas",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Dabs On Davie",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Potherb Cannabis",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Soma Leaf Co.",
        "address": "Mississauga",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Plane Jane Cannabis Co.",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Canna Cabana",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Langley",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Canna Cabana",
        "address": "Mavis Rd",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Shucanna Grower Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "High LIte Cannabis Store Corporate",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Queens Cannabis Co.",
        "address": "Delta",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "High Lite Cannabis Store",
        "address": "Kanata",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Five Point Cannabis",
        "address": "1st st",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "20th St Saskatoon",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Cannabis City",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Krave Cannabis",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Castle Cannabis",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Five Point Cannabis Corporate",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Crescent Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Budlife",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "River Ave",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Pineview Grass Station",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "St. Anne?s Stop & Shop",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "South Shore Sales",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "SUKH Supermarket",
        "address": "Provencher",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Fratelli and Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Micro Gold Retail Cannabis",
        "address": "Macleod",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Buffalo Run",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Moonfire Cannabis",
        "address": "Owen Sound",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Moonfire Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Penetanguishene",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "High Ties",
        "address": "Plantagenet",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Taste Buds Cannabis",
        "address": "Rockwood",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Due North Cannabis",
        "address": "Second Line",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Cannabis Place",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "The Hunny Pot Cannabis Co",
        "address": "St. Catharines",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Budssmoke",
        "address": "Sundridge",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Bonnefire",
        "address": "Munro",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Happy Hippy Cannabis Store",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Atlantic Cannabis",
        "address": "Torbay",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Grand Falls",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "WEEDJAR",
        "address": "Yonge",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "50 Granite Dr.",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "The Smoke and Leaf Ltd.- Dundas W",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Sativa Bliss Cannabis",
        "address": "Cambridge",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Famous Flower Cannabis Co. ",
        "address": "Dundas St. London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Forty3Eighty Cannabis Co.",
        "address": "Cayuga",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Ingram & Sons Cannabis Co.",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Deerfoot City",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Brighton",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Rabbit Hill Road",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Spark Cannabis",
        "address": "Cookstown",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Riverbend Square",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Take Me Home Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Summerside",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Highlife Cannabis",
        "address": "Hanmer Express",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "T Cannabis NW",
        "address": "Wawa",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Discounted Cannabis",
        "address": "Wyandotte",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Stellar Bud",
        "address": "Parkhill",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Wharncliffe",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Consumers Cannabis",
        "address": "Erin",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Discounted Cannabis",
        "address": "Chatham St. Clair",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Cannabis Jack's",
        "address": "Callander",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Lanigan Cannabis Ltd.",
        "address": "Lanigan",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Lush Leaf Cannabis Ltd.- Esterhazy",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "St. Anthony Irving",
        "address": "",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "The Joint Grant",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "VIP Cannabis Co,",
        "address": "London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Cannaverse",
        "address": "Sault Ste. Marie",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Loft Cannabis",
        "address": "19 Street",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "Grand Prairie",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "ARcannabis Store",
        "address": "Richards st",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Fire & Flower",
        "address": "Spruce grove (Mcleod AVE)",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Kootenay Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Lux Leaf Cannabis",
        "address": "Savanna",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Rise Cannabis",
        "address": "Tillicum Road",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Valley Ridge Cannabis",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Grand Prairies",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Eighth Cannabis",
        "address": "Algonquin Highlands",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Etobicoke Albion",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Aurora",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Levicann",
        "address": "Gilford",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Discounted Cannabis",
        "address": "Amherstberg",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Flowertown Cannabis",
        "address": "Geogina",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Green Valley Cannabis Company",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Speakeasy Cannabis",
        "address": "Ayr",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Guelph",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Groovy's Baysville",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "MC Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "MC Cannabis",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Buds 4 Less",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Friendly Stranger",
        "address": "Barrie Dunlop",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Mystic's Cannabis",
        "address": "KENILWORTH AVE",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Beaverton cannabis",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Forest Plant",
        "address": "Harrowsmith",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Mont Kailash Cannabis",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "MC Cannabis",
        "address": "Kingston",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Cost Cannabis",
        "address": "Bouctouche",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Cost Cannabis",
        "address": "Blackville",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Rise Cannabis",
        "address": "Mill Bay",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Dutch Brothers Buds",
        "address": "Rosedale",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Pearl Cannabis",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Marine Dr (N VAN)",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "T's Cannabis",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Cannabis Run",
        "address": "Cochrane",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Burgeo Building Supplies",
        "address": "",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Green Bay South Liquor Express",
        "address": "",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Bassano Cannabis Store",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Crown Cannabis",
        "address": "82 ST NW",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Purple Meadow Cannabis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Canna Club LTD",
        "address": "Drayton Valley",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Highties Cannabis Store",
        "address": "McCarthy Rd",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Cannabis Jacks",
        "address": "SSM Trunk Rd",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Ganjika House Cannabis Store",
        "address": "Mississauga",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Cantopia Cannabis Co",
        "address": "Mississauga",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Yolo Cannabis",
        "address": "Dutton",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Pinnacle",
        "address": "",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Uncle's Cannabis",
        "address": "Shell Lake",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "A Little Bud  Cannabis- Whistler",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "AFFX Cannabis",
        "address": "263 Upper",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Wow World of Weed Inc Corporate",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Hunny Pot Cannabis co",
        "address": "Huron St",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "AFFX Corporate",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Wow World of Weed Inc",
        "address": "Dundas St",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Happy Rock Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Tower Cannabis",
        "address": "Okotoks",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "The Woods Cannabis",
        "address": "Dundas St",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Carlton Food Mart",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "House's Service Station (esso)",
        "address": "",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Lake Trail Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Four Winds Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Reserved Cannabis Guelph",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Thunder Bay",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Pop's Cannabis",
        "address": "Derry Rd",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Fika Local Cannabis",
        "address": "Mississauga",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Truro",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Yarmouth",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Wyse Street",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "165 Main St.",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Dieppe",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Shediac",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Sackville",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Tracadie",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Richibucto",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Miramichi",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Canna Cabana",
        "address": "Westmount",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Farmer Jane Cannabis Co.",
        "address": "Rochdale",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Rocky Mountain Collective",
        "address": "Gregg Ave",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Bud Runners",
        "address": "Downtown",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Rocky Mountain Collective",
        "address": "Drinnan Way",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Living Skies Cannabis",
        "address": "3rd Ave",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Canna Cabana",
        "address": "Westgate",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Happy Dayz",
        "address": "Orillia",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Mayor Magrath",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Herbert Road",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Twenty Four Karats",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "The Peace Pipe",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "House of Hybrids",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Kamloops",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Earth's Own Naturals",
        "address": "Kimberley",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "PlantLife",
        "address": "Lloydminster",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Willy's 420 Supplies",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Weed Mart",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "Value Buds",
        "address": "Red Deer",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Tweed",
        "address": "Regent",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "5 Buds Cannabis",
        "address": "Warman",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Fire & Flower",
        "address": "Millenium Ridge",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Tweed",
        "address": "Osborne",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "The Pot Shack",
        "address": "Grosvenor Ave",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Fire & Flower",
        "address": "Stettler",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Brandon",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Spiritleaf",
        "address": "Moose Jaw",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Sundial Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Elevate",
        "address": "118 Ave",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Tamarack Cannabis Boutique",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "North Island Cannabis",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Wonderland Road",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Purple Moose Canabis (Formerly Tokyo Smoke)",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Ganjika House",
        "address": "Main St",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Superette",
        "address": "Ottawa",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Kingston",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Queen Street West (Formerly Nova Cannabis)",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "The Shore Cannabiz Shop",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Atlantic Consolidated",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "NS"
    },
    {
        "name": "Quebec Consolidated",
        "address": "",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Bud Mart",
        "address": "Didsbury Cannabis Mart",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "AGLC",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Ontario Consolidated",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "URBN Leaf Cannabis Company",
        "address": "Valleyview",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Manitoba Liquor & Lotteries",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Prairies Consolidated",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "MB"
    },
    {
        "name": "The Leaf",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "SLGA",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Green House Cannabis",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Nunavut Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Alberta Consolidated",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Equilibrium Cannabis",
        "address": "Lac La Biche",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Summerwood",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "BC Consolidated",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "The Kure Cannabis Society",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "THC Canada",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Green Light",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "One Plant",
        "address": "Ajax",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Yukon Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "YT"
    },
    {
        "name": "Clarity Cannabis",
        "address": "Gorge Road",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Value Buds",
        "address": "Whitecourt",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "RELM Cannabis Co.",
        "address": "Burlington",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Hat Cannabis Inc.",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Muse Cannabis",
        "address": "3039 Granville Street",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "The Original Farm",
        "address": "Hillside",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Mind-Full Cannabis",
        "address": "Yellowhead Trail",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Morden",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Cannabis 4 Less",
        "address": "Resources Road",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Triple J's Canna Space",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "YK"
    },
    {
        "name": "Canna Cabana",
        "address": "Varsity",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Portage Ave",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Pacificanna",
        "address": "Port Hardy",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "The Greenery Cannabis Boutique",
        "address": "Salmon Arm",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "River Ave",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Tweed",
        "address": "London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "K.J.'s Best Cannabis",
        "address": "Terrace",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Wilson's Esso- Corporate Office",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "NL"
    },
    {
        "name": "The Original Farm",
        "address": "Downtown",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Meta Cannabis Co.",
        "address": "Brandon",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Dutch Love Cannabis",
        "address": "Main Street",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Cloud Nine Cannabis",
        "address": "Fort Street",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Fire & Flower",
        "address": "Ottawa",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Dutch Love Cannabis",
        "address": "Airport",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Happy Isle Cannabis Company",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Fire & Flower",
        "address": "Kingston",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Tisdale",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "NWT Liquor and Cannabis Commission",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "NT"
    },
    {
        "name": "Bluebird Cannabis Co.",
        "address": "Bank St",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Tweed",
        "address": "2 Avenue North",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Green Canoe Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Prairie Records",
        "address": "Broadway",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Tweed",
        "address": "Portage la Prairie",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Dawson Creek Cannabis Company",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "Micro Gold Cannabis",
        "address": "Okotoks",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Slave Lake",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Garden Variety",
        "address": "Ellice Ave",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Garden Variety",
        "address": "Sterling Lyon",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Lux Leaf",
        "address": "Penhold",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Westlock",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Ganja Hut",
        "address": "50 Street",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Firestone Cannabis",
        "address": "Wetaskawin",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Merry Guanas",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "FivePoint Cannabis Bridgeland",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Grande Prairie",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "URBN Leaf Cannabis Company",
        "address": "Grande Prairie",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Lucid Cannabis",
        "address": "King Street",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Stony Plain",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Falconridge",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Lloydminster",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "PlantLife",
        "address": "Chestermere",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Vegreville",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "PlantLife",
        "address": "Cochrane",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Vermilion",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "PlantLife",
        "address": "Okotoks",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Woodbine",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Potporium",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Clarity Cannabis",
        "address": "Dawson Creek",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "Rocky Mountain Cannabis",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Lac La Biche",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Plantlife",
        "address": "Erin Ridge",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Mission",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "City Cannabis Co.",
        "address": "Comox",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Spiritleaf",
        "address": "Parsons Place",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Earth to Sky",
        "address": "Sooke",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Spiritleaf",
        "address": "Brentwood",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Urban Earth Medical (UEM)",
        "address": "Vancouver",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "The Local Cannabist",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Campbell River",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Cottage Cannabis",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Stick & Stone Cannabis Co.",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Cranbrook",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Elevated Cannabis",
        "address": "Penticton",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Rock Island Cannabis",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Price George",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Canna Cabana",
        "address": "Elbow Drive",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Prairie Records",
        "address": "Calgary",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "Whitehorse",
        "owner": "Jean-Pascal Fortier",
        "province": "YK"
    },
    {
        "name": "Kiaro",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Fire & Flower",
        "address": "Banff Caribou",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "50 Avenue",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Green Peace Hempire",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Aurora",
        "address": "West Edmonton Mall",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "SQDC",
        "address": "77035",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Alternative Greens",
        "address": "Whitecourt",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "SQDC",
        "address": "77025",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Quantum 1 Cannabis",
        "address": "Keremeos",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "SQDC",
        "address": "77037",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Blended Buds Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Lucid Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Grand Forks Cannabis",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Canna Cabana",
        "address": "Airdrie",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Coastal Green",
        "address": "Vancouver",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Quantum 1 Cannabis",
        "address": "Cambie Street",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "La Canapa Boutique Inc",
        "address": "Dunbar St",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Spiritleaf",
        "address": "West Kelowna",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Maple Leaf Greenery Ltd",
        "address": "Osoyoos",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Shades of Green Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Mood Cannabis",
        "address": "Metral Dr.",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Blossoming Buds",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Port Pot Shop",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "La Pachi Premium Cannabis",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Kaya Connection",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Earth's Own Naturals",
        "address": "Fernie",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "My Buddies",
        "address": "Merritt",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Powell River",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Eggs Canna",
        "address": "Hastings",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Quartz Creek Cannabis",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Cannabliss",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "City Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Costa Canna",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "MB"
    },
    {
        "name": "Earth to Sky",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Eggs Canna",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Elevate",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Firestone Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Plenty of time",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Flora Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Maple Leaf Greenery Ltd",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Prairie Records",
        "address": "Edmonton",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Jasper Ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Garden Variety",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Maple Leaf Greenery Ltd",
        "address": "New Westminster",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Uncle Sam's Cannabis",
        "address": "68 Ave",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "The Greenery Cannabis Boutique",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Rocky Mountain Roots",
        "address": "St. Albert",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "The Green Room",
        "address": "Nelson",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Halo Kushbar",
        "address": "Medicine Hat",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Grower's Retail",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Rocky Mountain Collective",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Spiritleaf",
        "address": "Harvey Avenue",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Palace Green Shop",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "High 5 Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Joint Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "MB"
    },
    {
        "name": "The Pineapple Group",
        "address": "Headibles",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Hive Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cheeba Cheebas",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Sunshine Cannabis",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Dream Lounge Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Hunny Pot Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Vernon Cannabis Store",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Jimmy's Cannabis Shop",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Kushi Cannabis",
        "address": "Edmonton",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Highway 2 Cannabis Sales Inc.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Highlander Cannabis",
        "address": "Vernon",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Modernleaf",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Earth's Own Naturals",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Clarity Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Mood Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Summit Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "BC Cannabis Store",
        "address": "Prince George",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Dutch Brothers Bud",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Flora Cannabis",
        "address": "25 Ave",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Oliver",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "BC Cannabis Store",
        "address": "South Ridge Avenue",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Hive Cannabis",
        "address": "Vernon",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Shinybud Cannabis Co.",
        "address": "Cornwall",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "1922",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Bayview",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Magic Buds",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Nirvana Canna",
        "address": "16 Ave",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Cannabis House",
        "address": "Silverberry",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "137 ave",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Griesbach",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "NUMO Cannabis",
        "address": "124 Street",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Plantlife",
        "address": "101 Street",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Alternative Aromatics",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Windsor",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "J. Supply Co.",
        "address": "Thunder Bay",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Bloor Street",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Highlife Cannabis Co.",
        "address": "Brantford (Formerly Seven Point Cannabis",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Queensborough Cannabis Co.",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Atomic Cannabis",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Quantum 1 Cannabis",
        "address": "North Vancouver",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Leaf Life",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Leaf Life",
        "address": "Memorial",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Flight Cannabis Co",
        "address": "Victoria",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Lucid Cannabis",
        "address": "Schonsee",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "EK Cannabis",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Plantlife",
        "address": "Currents Drive",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Wellington West",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Northern Zen Cannabis",
        "address": "North Bay",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Hunny Pot Cannabis Co.",
        "address": "Dundas Street",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Little Italy",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Greentown",
        "address": "Windsor",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Eighth Cannabis",
        "address": "North York",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Uncle Sam's Cannabis",
        "address": "St. Albert",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Royal Oak",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Welcome Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Bud Barn Society",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Offside Cannabis",
        "address": "Lundy's Lane",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Cannabis Supply Co",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Herb and Smoke",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Superette",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "710 Kingston",
        "address": "Princess St.",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Misty Mountain Cannabis",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "SPDR Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Sessions Cannabis",
        "address": "Hamilton Red Hill",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Seaside Cannabis",
        "address": "Brentwood Bay",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "1022 17 Ave",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Blunt and Cherry",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "T Cannabis",
        "address": "Beamsville",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": " Aviation Road",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Stittsville",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Pufftastic Cannabis Company",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "16 Ave",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Highlife Cannabis",
        "address": "Guelph",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "The Joint Cannabis",
        "address": "St. Mary's",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Bud Supply",
        "address": "Vulcan Bud",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Star Buds",
        "address": "Barrie Street",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Oz Cannabis",
        "address": "Sylvan Lake",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "One Plant",
        "address": "Masonville",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Roll N Rock (formerly Dutch Love Cannabis)",
        "address": "Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "SpeakEasy Cannabis Company",
        "address": "Cambridge",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Village Mall",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Shortgrass Cannabis",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "PH Cannabis Co.",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Tree Tops Cannabis Co.",
        "address": "Wellington Road",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Grass Hut Cannabis Co",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "The Amherstburg Cannabis Company",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Star Buds",
        "address": "Innisfil",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Gormley Cannabis",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "BC Cannabis Store",
        "address": "New Westminster",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Farmer Jane Cannabis Co.",
        "address": "8 Street",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Living Skies Cannabis",
        "address": "Millar Ave",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Living Skies Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Bakery- Rosemont",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "The Local Leaf Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Local Leaf Cannabis",
        "address": "Squamish",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Eggs Canna",
        "address": "Hollywood Rd",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Sunrise Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Inspired Cannabis Co",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Inspired Cannabis Co",
        "address": "Vancouver",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Island Cannabis",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Farmer Janes Cannabis Co.",
        "address": "Southdale",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "Regent Ave",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "The Den Cannabis Store",
        "address": "Barrie",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Deep River Cannabis",
        "address": "Deep River",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Giggles Cannabis",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "RELM Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Holy Cannabis",
        "address": "Oxford st",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "North York",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Miss Jones",
        "address": "Orillia",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Eglinton Town Centre",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Garden City Cannabis Co.",
        "address": "St Catharines",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Green Merchant Cannabis Boutique",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Forever Buds",
        "address": "722 College St",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Green Merchant Cannabis Boutique",
        "address": "Yonge",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "T Cannabis",
        "address": "Acton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Miss Jones",
        "address": "Brantford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "The Den Cannabis Store",
        "address": "Orillia",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "The Den Cannabis Store",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Tokyo Smoke",
        "address": "545 Queen St W",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "MJAYZ Cannabis Corp.",
        "address": "Red Deer",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Stok'd Cannabis",
        "address": "Pharmacy Ave",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Highlife Cannabis",
        "address": "Simcoe",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "RC Bud Shop",
        "address": "Harrow",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Roll'd Cannabis Company",
        "address": "Kanata",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": " Grantham Plaza",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "CanaCulture Cannabis Store",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Trees Cannabis [formerly MCannabis]",
        "address": "St Clair",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "AFFX Cannabis",
        "address": "919 Upper",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "TOKE Cannabis",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "North 80",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Windsor",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Mary J's Cannabis",
        "address": "Cobourg",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "High Ties Cannabis Store",
        "address": "Vanier",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "The Den Cannabis Store",
        "address": "Angus",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "Northgate",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Ganjika House",
        "address": "Queen Street East",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Ganjika House",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "Bunns Creek",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "CAN-NA-BIS",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Essential Cannabis Company",
        "address": "Selkirk",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Rainbow on Bay",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Prince of Wales Dr.",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "T Cannabis",
        "address": "Fort Frances",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Our Cabin",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "MaryJane's Cannabis",
        "address": "North York",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "4Twenty Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "MaryJane's Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Kiosk Cannabis",
        "address": "Toronto/East York",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Buds Cannabis",
        "address": "Sidney",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Blooming World Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Spiritleaf",
        "address": "Owen Sound",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Perth",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Huntsville",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Blooming World Cannabis",
        "address": "Radium",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Barrie",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Kemptville",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Edition X",
        "address": "Toronto (St. Clair West)",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Adoreweed",
        "address": "Kitchener",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "MTT Service",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Yerba Buena Cannabis",
        "address": "Sheppard Ave W",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Edition X",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Yerba Buena Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Trees Cannabis [formerly MCannabis}",
        "address": "Kipling",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Moonfire Cannabis",
        "address": "Sauble Beach",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "The Joint Cannabis",
        "address": "Regent",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Sweet Seven Cannabis Co.",
        "address": "Sudbury",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Erb Steet",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Cannaco The Cannabis Company",
        "address": "Georgetown",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Prairie And Luna Cannabis Co.",
        "address": "Petawawa",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Dank Cannabis",
        "address": "62 Ave",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Micro Gold Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Village Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Prairie And Luna",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Micro Gold Cannabis",
        "address": "Calgary",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Cottontail Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Spiritleaf",
        "address": "MacEwan",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "The Cannabist Shop",
        "address": "Victoria St",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Edson",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Treetz",
        "address": "Collingwood",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Medicine Hat",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Em Jay's",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Take Off Cannabis",
        "address": "Thorold",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Mountain Air Cannabis",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "The House of Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Tokyo Smoke",
        "address": "Etobicoke",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Violet Wild Cannabis Co.",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Budders",
        "address": "Acton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "VIP Cannabis Co.",
        "address": "New Hamburg",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Budders",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Trees Cannabis",
        "address": "Fort Street",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "VIP Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Crossroads Cannabis",
        "address": "Woodstock",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Crossroads Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Take Me Home Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "The We Store",
        "address": "Lakeshore / Belle River",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Cloud 420",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cloud 520",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Costa Canna",
        "address": "Wilkinson Rd",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Brantford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Dutch Love",
        "address": "Parry Sound",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Reserved Cannabis",
        "address": "Etobicoke",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Hunny Pot Cannabis Co.",
        "address": "Thorold Stone Rd",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Buzzed Buds",
        "address": "Uxbridge",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Good Cookie",
        "address": "Ellesmere Rd",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Cabin Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "SESSIONS CANNABIS",
        "address": "AURORA",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "216 Group",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Wavy",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Wiid Boutique",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Wiid Boutique",
        "address": "Regina Beach",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Select Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis Discounter",
        "address": "Ewing Trail",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Select Cannabis",
        "address": "97 St",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "East Lake",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Bonnyville",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Cannabis Discounter",
        "address": "Jasper Ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "NW Landing",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Green Solution Cannabis",
        "address": "Redwater",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Milton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Budget Buds",
        "address": "Orleans",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Orleans",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Kryptonite Cannabis",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Stash & Co",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Lolly",
        "address": "Pickering",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Highlife",
        "address": "Sault Ste. Marie",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Nature's Canopy House",
        "address": "Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Jolly Green Cannabis",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Sturgeon Falls",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Northern Helm Cannabis",
        "address": "Courtice",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Royal Cannabis Supply Company",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Fat Panda",
        "address": "Selkirk",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Fika Herbal Goods",
        "address": "Distillery",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Fat Panda",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Northern Lights Cannabis",
        "address": "Peterborough",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77085",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Value Buds",
        "address": "Burlington (Appleby Line) [Previously Nova]",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77086",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Ouid",
        "address": "Nepean",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Hemisphere Cannabis Co.",
        "address": "Ajax",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Shinybud",
        "address": "Smiths Falls",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Highlife",
        "address": "Chelmsford (Formerly Bananas- Chelmsford)",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Plateau",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Plateau",
        "address": "Preston Street",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "The Bridgeport Cannabis Co.",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Grand Cannabis",
        "address": "Tillsonburg",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Inspired Cannabis Co",
        "address": "Kingston",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Hot Buds",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Ajax",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Hair Do or Dye",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Kootenay Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Canna Cabana",
        "address": "Ottawa",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Devonshire",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Dundurn Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Centre Town Ottawa",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Toke House",
        "address": "Dryden",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Cantopia Cannabis Co.",
        "address": "Brampton (Mountainash Rd.)",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Cannabacee The Hemp House",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Cannabis Cellar",
        "address": "Callingwood",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "One Plant",
        "address": "Pickering",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Plantlife",
        "address": "Ellerslie Road",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Cantopia Cannabis Co.",
        "address": "Brampton (Queen St E)",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Lux Leaf",
        "address": "Red Deer",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Cantopia Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Giggles Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Peace of Mind Cannabis",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Giggles Cannabis",
        "address": "Toronto",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Rural Buds Cannabis Shop",
        "address": "St. Pierre",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Fire & Flower",
        "address": "Moose Jaw",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Civilian House of Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Shelter Market",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Budget Bud ",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Martinsville",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Civilian House of Cannabis",
        "address": "71 Front St E",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Humberlea",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "The Rockshop Cannabis",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "The Joint Cannabis",
        "address": "Circle St",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Uptown Herb",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Port Colborne",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Unwind",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Inspired Cannabis Co",
        "address": "Gloucester",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "TOKE Cannabis",
        "address": "Welland",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Brickyard",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Sky Cannabis",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "High Supply Cannabis Co.",
        "address": "Fenlon Falls",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Village Cannabis Co.",
        "address": "Hamilton (King St W)",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "T Cannabis",
        "address": "Cochrane",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Superette",
        "address": "Toronto (Dundas St.)",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Pickering (whites rd)",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Windsor West (Formerly Boondom)",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Mellow Leaf",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "The Herbary",
        "address": "Kingston (Bath Rd)",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Stratford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Fiddler's Green",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "The Herbary",
        "address": "London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77081",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "The Herbary",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "SQDC",
        "address": "77080",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Calyx & Trichomes",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "SQDC",
        "address": "77083",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Calyx & Trichomes",
        "address": "Kingston (Hwy 15)",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77084",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "King of Queens Cannabis Company",
        "address": "West Nipissing",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77082",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Spiritleaf",
        "address": "Georgetown",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77078",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Boondom",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "BC Cannabis Store",
        "address": "Kelowna",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Flower Junction",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Meyokumin",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Ciao Canna Apothecary Inc.",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Leaf Life",
        "address": "Sunridge",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Fika Herbal Goods",
        "address": "Milton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "URBN Leaf Cannabis Company",
        "address": "Wembley",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Discounted Cannabis",
        "address": "127 st",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "T Cannabis NW",
        "address": "Kenora",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Dab Cannabis",
        "address": "Aurora",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Plain Jane Cannabis",
        "address": "Spirit River",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Zen Cannabis",
        "address": "Kitchener",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Railtown",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Discounted Cannabis",
        "address": "Stony Plain",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Pot Palace Cannabis Company",
        "address": "York",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Inspired Cannabis Co",
        "address": "Komoka",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Bradford",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "One Plant",
        "address": "Wonderland / London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Abbotsford",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Copper Island Cannabis Company",
        "address": "Blind Bay",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Plain Jane Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Kush Korner Cannabis",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Hidden Leaf Cannabis Co.",
        "address": "Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Star Buds",
        "address": "Wasaga Beach",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "The Bake Shoppe",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Burlington Cannabis Co.",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "The Bake Shoppe",
        "address": "Shaunavon",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Bluebird Cannabis Co.",
        "address": "Centretown",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Fika Herbal Goods",
        "address": "Scarborough East",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Jackson's General Store",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Toka Cannabis",
        "address": "Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Selkirk",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Oki Cannabis",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Fusion Bud",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Fire & Flower",
        "address": "Plessis",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Northern Tokes",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Haight",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Bright's Grove",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Canna Cabana ",
        "address": "Fort Erie",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Haight",
        "address": "Windsor",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "Stonebridge",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Ottawa (Alta Vista Dr)",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Miss Jones",
        "address": "Peterborough",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Moksha Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Green Vibe Cannabis",
        "address": "461 Bloor",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Muskoka Cannabis Store",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Miss Jones",
        "address": "Elliot Lake",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Lagoo",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Purple Moose Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Miss Jones",
        "address": "Goderich",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Tree'S In The Six",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Bud Bar",
        "address": "Crowfoot",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Cannabis Xpress",
        "address": "Port Hope",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Pop'S Cannabis Co.",
        "address": "Almonte",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Cannabis Xpress",
        "address": "Ridgetown",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Euphoria Bud",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "One Plant",
        "address": "North Bay",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "The Queensway Etobicoke",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "In N Out Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Belleville",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "In N Out Cannabis",
        "address": "Cochrane",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Red Star Cannabis Co.",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Secret Gardens Cannabis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Wake N' Bake Cannabis",
        "address": "99 St.",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Budssmoke",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Stony Plain West",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Owen Sound",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Budssmoke",
        "address": "St. Catharines",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Urbnbud",
        "address": "Lesperance Road",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Wavy Buds Recreational Cannabis",
        "address": "Danforth Ave",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Green Merchant Cannabis Boutique",
        "address": "Lapsley Rd. Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Olympia Cannabis",
        "address": "Chesterville",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Speakeasy Cannabis Colborne",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Morrisburg Cannabis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Ideal Buds",
        "address": "Atikokan",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Evergreen Leaf",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Ideal Buds",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Cannabis & Co.",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Chillin' Buds",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Planet Earth Cannabis",
        "address": "Bank St",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Nature's Canopy House",
        "address": "Weston North",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Top Finest Cannabis",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Fika Herbal Goods",
        "address": "London Argyle",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Canvas Retail Cannabis Store",
        "address": "Toronto (Harbord St)",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "The Happy Spliff",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Cannaco The Cannabis Store",
        "address": "Alliston",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Shops At Don Mills",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Piffingtons Cannabis Co.",
        "address": "Kitchener",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Famous Flower Cannabis Co.",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Famous Flower Cannabis Co.",
        "address": "Hamilton Rd. London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Famous Flower Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Edmonton Cannabis & Edibles",
        "address": "34 Ave NW",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Tokyo Smoke",
        "address": "St Thomas",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "The Big Bamboo Cannabis Company",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Tottenham",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Discounted Cannabis",
        "address": "Windsor",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Collective Growers",
        "address": "Ottawa (Somerset)",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Munchies Cannabis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Dab Glass",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Dab Glass",
        "address": "Kitchener",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Power Plant Smoke",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Purple Meadow Cannabis",
        "address": "Bank St.",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Nimbus Cannabis",
        "address": "Winnipeg",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Ganja Hut",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Wake N' Bake Cannabis",
        "address": "Knottwood Road",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Lucky Leaf Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Fire & Flower Cannabis Co.",
        "address": "The Queensway Etobicoke",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "WEEDJAR",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Urbnbud",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Toka Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Stok'd Cannabis",
        "address": "Kingston Rd",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Essential Cannabis Company",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Essential Cannabis Company",
        "address": "Pine Falls",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Haze Buds Cannabis",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Spark Cannabis",
        "address": "Aurora",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Canad Cannabis Corner",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Bean Cannabis Shop",
        "address": "Thunder Bay",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Hemp Haven",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Happy Leaf Cannabis",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Shinybud Cannabis Co.",
        "address": "Walker Road Windsor",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Atlantic Cannabis",
        "address": "Water Street",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Naturally Bongins",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Chill Blue Mountain",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77063",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "THC Hub",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Bud Town",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77093",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Uncle Sam's Cannabis",
        "address": "90 Ave",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Cookies",
        "address": "Toronto Core",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Emerald Greens Cannabis Company",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "SQDC",
        "address": "77090",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Green King Cannabis",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Richer Husky",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "SQDC",
        "address": "77057",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Kanata",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Big Town Buds Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Moonrock Cannabis",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Green Gold Cannabis",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Fireweed Cannabis Corp.",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Green Market Cannabis",
        "address": "North York",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Midnight Show",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Green Market Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Spot420",
        "address": "Erin",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Cannabis Link Express",
        "address": "London (1149 Western Road)",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Highland Road",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "The Haze Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Lost Lake",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Sudbury",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Chronicles Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Mary J's Cannabis",
        "address": "Russell",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Breaking Bud Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Happy Life",
        "address": "Thunder Bay",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Breaking Bud Cannabis",
        "address": "Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Tree Hill Cannabis Ltd.",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Rideau Centre",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "GreenSpace Co.",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "100 Ave",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Insalata",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "The Nug Co.",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Weed Kings Inc.",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Insalata",
        "address": "Welland",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Grasshopper Cannabis",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Gramsterdam",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Rustic Cannabis",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Waterloo (King Street)",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Crown Leaf",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Leaf Life",
        "address": "MacLeod Trail",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Crown Leaf",
        "address": "Brampton (Clarence)",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Whyte Ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Cannabis Discounter",
        "address": "34 Street",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Bible Hill",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Value Buds",
        "address": "Barton St. Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Pluto Plants",
        "address": "Marine Parade Dr",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Pluto Plants",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Olympia Cannabis",
        "address": "Westport",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Guelph",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "High River Cannabis",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Cornwall",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Sparkle Cannabis Company",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Sparkle Cannabis Company",
        "address": "Burlington",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "3421 Portage Ave",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "HERBCAN",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "High Supply",
        "address": "Kelvington",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Ottawa",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Superette",
        "address": "Toronto (Dupont St)",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Caliwood",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Cannabis Stop Inc.",
        "address": "Grand Valley",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Coconut Cannabis",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "London (595 Fanshawe Park East)",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Atomik Flower",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "High Lite Cannabis Store",
        "address": "Bank St",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Fogtown Flower",
        "address": "Yonge",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Cheech & Chung Cannabis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Roll N Rock",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Canatime",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "One Plant",
        "address": "The Glebe",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Cannabis 4 Less",
        "address": "Lacombe",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Plantlife",
        "address": "Grande Prairie (Cobblestone)",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "112th Street",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Seaside Cannabis -Corporate Office",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Capturing Eden",
        "address": "Cayuga",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Fika Local",
        "address": "Etobicoke",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Fika Herbal Goods",
        "address": "Sudbury",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Queen George Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Fogtown Flower",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Fogtown Flower",
        "address": "Steeles",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Queen George Cannabis",
        "address": "Caroline St",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "The Hunny Pot Cannabis Co.",
        "address": "Cambridge",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Runway Pot",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Hunny Pot Cannabis Co.",
        "address": "600 Fleet",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Runway Pot",
        "address": "Toronto",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Stash & Co.",
        "address": "Kitchener",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "The Hunny Pot Cannabis Co.",
        "address": "Hamilton (Upper James)",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Sweet Seven Cannabis Co.",
        "address": "Espanola",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Laurier",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Plug Canna6is",
        "address": "Bloor St",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Reserved Cannabis",
        "address": "Waterloo",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "North 40 Cannabis",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Reserved Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis Grey Bruce",
        "address": "Wiarton",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Cannabis Station",
        "address": "Toronto",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Piffingtons Cannabis Co",
        "address": "Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "MH4 Cannabis",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Sea to Sky Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Magic Buds Madigan",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Up in Sky McPhillips",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Sunrise Cannabis Retail Ltd.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "TLC Cannabis",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Sunrise Cannabis Retail Ltd.",
        "address": "Bonnyville",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Smokey Daze",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Cannabis by Nature",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Planet Earth Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Planet Earth Cannabis",
        "address": "Riverside",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Benkz Budz",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Pot Palace Cannabis Company",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Belleville",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Just 4U Cannabis",
        "address": "Kamloops",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Pot Palace Cannabis Company",
        "address": "Toronto",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Your Highness",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Edmonton Cannabis & Edibles",
        "address": "82 Ave NW",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Your Highness",
        "address": "London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Edmonton Cannabis & Edibles",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Station House Cannabis Co.",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Cannabis Discounter",
        "address": "Sherwood Park",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Drumheller",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Budget Buds",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Hello Cannabis",
        "address": "73 York St. London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Da Canna",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Da Canna",
        "address": "London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Wake N' Bake Cannabis",
        "address": "182 St SW",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Budssmoke",
        "address": "North Bay",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Bonnefire",
        "address": "Orillia",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Buzzed Buds",
        "address": "Toronto Yonge",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Buzzed Buds",
        "address": "Toronto Beaches",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Cannabis Xpress",
        "address": "Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "FIKA Herbal Goods",
        "address": "Union Station",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Four20 Premium Market",
        "address": "Pioneer Park",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Ganja Garden",
        "address": "Kitchener",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Ganja Garden",
        "address": "Brantford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Growers Retail",
        "address": "Waterloo",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "The Premier Cannabis Shop of Kensington Market Canna",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "IN & OUT Cannabis",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Herbs Cannabis Inc",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Adelaide",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Puffs Haven",
        "address": "North York",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Uncle Louie's Cannabis Shop",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Urban Leaf",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Edmonton Cannabis & Edibles",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Heritage Valley",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Cannabis Xpress",
        "address": "North Grower",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Grandma's Cannabis",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Shoppers World Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "The Underground",
        "address": "Etobicoke",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "Eglinton Ave",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Spot420",
        "address": "Victoria Park",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Timberlea",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Cambridge Cannabis",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Windsor",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Budssmoke",
        "address": "York",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Eskasoni",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Level Up",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Global Leaf",
        "address": "Northmount dr",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Cannaverse",
        "address": "Ancaster",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "The Happy Cannasseur",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Stittsville",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Forest Glade",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Hawkesbury 1500 Main",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "FIKA Cannabis",
        "address": "London Hyde Park",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77101 -Saint Denis Rachel",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Fire & Flower",
        "address": "Brampton McLaughlin",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "Dauphin",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Parrot Pot Shop",
        "address": "Corporate Office",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Paramount Cannabis Co.",
        "address": "Guelph",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Parrot Pot Shop",
        "address": "Carlton",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Green King Cannabis",
        "address": "Corporate office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Green King Cannabis",
        "address": "Port Colbourne",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Rustic Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Rustic Cannabis",
        "address": "Fenelon Falls",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Silverleaf Cannabis",
        "address": "Queenston",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Discounted Cannabis",
        "address": "2007 Wyandotte",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Kitchener",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Greentown Cannabis Discount Hut",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Docks",
        "address": "Lindsay",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Discounted Cannabis",
        "address": "Sandwich",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Budssmoke",
        "address": "Mattawa",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Toke House",
        "address": "Ignace",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Sparq Retail",
        "address": "Millbrook",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Cannabis Xpress",
        "address": "Grand Bay",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Moonwlkr Cannabis",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Cost Cannabis",
        "address": "Richmond Rd",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Bathhurst Steeles",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Bud N' Buddies Cannabis",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Mexicannabis",
        "address": "Lawrence Ave",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Select Cannabis",
        "address": "118 Ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Puffs Haven",
        "address": "Northtown Way",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Toke and Tell Cannabis",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Cost Cannabis",
        "address": "Fairmont Dr",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "MEXICANNABIS",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cost Cannabis",
        "address": "Corporate Office",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Tony's Joint",
        "address": "Leamington",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "UpHi Cannabis Emporium",
        "address": "Glenridge",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Princess Buds",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Stratford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Cannaverse",
        "address": "Thunder Bay",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "North Queen St",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Hi Class Cannabis Store",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "11500 Tecumseh",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Insalata",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Hanna Ave",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Spark Cannabis",
        "address": "Uxbridge",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Farmer Jane Cannabis Co.",
        "address": "Gordon Rd",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Delta",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Modern Day Cannabis Corporate Office",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Village Buds",
        "address": "Athens",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Payson's Joint",
        "address": "Dauphin",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Green Mantle Cannabis",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "The Haze Company",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "The Cannabis Vault Corporate Office",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": NaN
    },
    {
        "name": "Village Bud ? Corporate Office",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Royal Cannabis Haus",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Modern Day Cannabis",
        "address": "Kensington",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "The Daily Bud",
        "address": "Island Highway",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Vibes Cannabis",
        "address": "Fairview",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Portage Mountain Inc Corporate Office",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "Vibes Cannabis Corporate Office",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Vault Cannabis",
        "address": "Ste. Rose du Lac",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Frontier Cannabis",
        "address": "Masset",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Clarenville Orangestore",
        "address": "",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Kannabis King",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Portage Mountain Cannabis Inc",
        "address": "Fort St John",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Area 420",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "The Higher Cannabis Company",
        "address": "Wheatley",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Lift Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Marlee's Den",
        "address": "Hope",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Botany Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "One Plant",
        "address": "Cambridge",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "The Joint Cannabis",
        "address": "Saskatoon Meadows Pkwy",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Copper Island Cannabis Company",
        "address": "Sorrento",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Pacific Coastal Cannabis",
        "address": "Nanaimo",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Sam's Food Fare",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "SQDC",
        "address": "77014",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Edmundston",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Bathurst",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Lansdowne",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Saint John",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "SQDC",
        "address": "77002",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Campbellton",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Rothesay",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "SQDC",
        "address": "77003",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Cannabis PEI",
        "address": "Charlottetown",
        "owner": "Christopher Harris",
        "province": "PE"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Sussex",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Cannabis PEI",
        "address": "Summerside",
        "owner": "Christopher Harris",
        "province": "PE"
    },
    {
        "name": "SQDC",
        "address": "77004",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "St. Stephen",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Cannabis PEI",
        "address": "Montague",
        "owner": "Christopher Harris",
        "province": "PE"
    },
    {
        "name": "SQDC",
        "address": "77005",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Brookside",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Cannabis PEI",
        "address": "O'Leary",
        "owner": "Christopher Harris",
        "province": "PE"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Woodside Lane",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Canna Cold Lake",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "SQDC",
        "address": "77010",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Oromocto",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "SQDC",
        "address": "77013",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Fire & Flower",
        "address": "Fort Saskatchewan",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Perth Andover",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "SQDC",
        "address": "77012",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Canna Cabana",
        "address": "Macleod Trail",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "SQDC",
        "address": "77011",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Canna Cabana",
        "address": "Southland",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Green Stop MC",
        "address": "Paradise",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "SQDC",
        "address": "77021",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77022",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77009",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Fire & Flower",
        "address": "North Battleford",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "The Pot Shack",
        "address": "Esterhazy",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Vatic Cannabis Co.",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "Dakota",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Fire & Flower",
        "address": "Yorkton",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Meta Cannabis Co.",
        "address": "Moose Jaw",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Tweed",
        "address": "Dauphin",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "SQDC",
        "address": "77020",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Grassroots",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Cabbage Brothers",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Urban Leaf",
        "address": "High Prairie",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Montrose Road",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "The Meadows",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "SQDC",
        "address": "77015",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77027",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Highlife",
        "address": "Sudbury",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Sudbury",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Brooks",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Bow Cannabis",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Tokyo Smoke",
        "address": " Yonge & Dundas",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Cannabis Discounter",
        "address": "Fort Saskatchewan",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Cannabis House",
        "address": "McConachie East",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Cannabis House",
        "address": "Argyll",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "Clareview",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Canna Cabana ? Yonge St",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "Bower Center",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "Brandon",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "RARE Cannabis Co.",
        "address": "Airdrie",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Uncle Sam's Cannabis",
        "address": "Sherwood Park",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "High River",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Bud Runners",
        "address": "Westhill",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "The Wanted Leaf",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "CannaLand Cannabis Ltd.",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Valhalla Cannabis",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Sunridge",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Sherwood Park",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Lake City Cannabis",
        "address": "Chestermere",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "111 Ave",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Beyond The Leaf",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Fort Sask",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Okotoks",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Cannabliss",
        "address": "Wabasca Desmarais",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Jasper Park",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Varsity Village",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "CO-OP Cannabis",
        "address": "Brentwood",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Good Roots Cannabis",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "Westlock",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "26 Ave",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Wetaskiwin Cannabis",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "NWT Cannabis Store",
        "address": "Hay River",
        "owner": "Gord Hopkins",
        "province": "NT"
    },
    {
        "name": "NWT Cannabis Store",
        "address": "Norman Wells",
        "owner": "Gord Hopkins",
        "province": "NT"
    },
    {
        "name": "NWT Cannabis Store",
        "address": "Fort Smith",
        "owner": "Gord Hopkins",
        "province": "NT"
    },
    {
        "name": "NWT Cannabis Store",
        "address": "Fort Simpson",
        "owner": "Gord Hopkins",
        "province": "NT"
    },
    {
        "name": "Dutch Love Cannabis",
        "address": "Springfield",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Summit Cannabis",
        "address": "Revelstoke",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Riverside Cannabis",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Summit Cannabis",
        "address": "Fernie",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Spiritleaf",
        "address": "McDougall",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "BudaBoom",
        "address": "Gateway Blvd.",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Revive Cannabis",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "The Kootenay's Cannabis Tree",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Canna Cabana",
        "address": "Parsons Road",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Orange Bridge Cannabis",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Sky High Cannabis Ltd",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "The Rural Leaf Co.",
        "address": "Tiell",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "Lloydminster",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Spiritleaf",
        "address": "Drayton Valley",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "Orchards Gate",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "A Little Bud Cannabis",
        "address": "Summerland",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Buddha Barn",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Glenora Cannabis",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Frosted Acres",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Jeffrey's Cannabis Shop",
        "address": "Rossland",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "SQDC",
        "address": "77019",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Haze Inc.",
        "address": "100st",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Coast Range Cannabis",
        "address": "Comox",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "SQDC",
        "address": "77029",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "Grande Prairie",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Bluewater Cannabis",
        "address": "Oliver",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "SQDC",
        "address": "77024",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Daima Cannabis",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "The Green Box Cannabis",
        "address": "Innisfail",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "SQDC",
        "address": "77006",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Flora Cannabis",
        "address": "Prince George",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "The Green Box Cannabis",
        "address": "Lacombe",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "The Source Cannabis",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Leva Avenue",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Vernon Cannabis Store",
        "address": "27 Street",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Value Buds ",
        "address": "Thickwood Mall",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Rosebud Cannabis Ltd.",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Buds Cannabis",
        "address": "Saanichton",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "WestCan Cannabis",
        "address": "23 st",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Cariboo Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Spiritleaf",
        "address": "Sexsmith",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Mood Cannabis",
        "address": "Victoria Rd",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Fire & Flower",
        "address": "Shoppes at Giroux",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Trugreen Solutions",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "123 Cannabis",
        "address": "Crossfield",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Tumbleweed",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Shire Green Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "Thompson",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Canna Cabana",
        "address": "Edmonton Trail",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Buddy's Place",
        "address": "Trail",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Crowsnest's Classy Joint",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Sweet Tree Cannabis Co.",
        "address": "Swift Current",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "GP Cannabis Store",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "7 Points Cannabis",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "Regina",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Borealis Buds",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Corral Center",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Cannabis Connection",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Daylight Cannabis Company",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Clarity Cannabis",
        "address": "Langford",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Cheeba Cheebas",
        "address": "Rutland Rd",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Costa Canna",
        "address": "Central Rd",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Dutch Love Cannabis ",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "FSJ Cannabis Corner",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "Greenstar Cannabis Company",
        "address": "Campbell River",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Earth to Sky",
        "address": "Trail",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Mountain View Cannabis",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Hive Cannabis",
        "address": "Port Alberni",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Value Buds",
        "address": "Deerfoot Meadows",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "123 Cannabis",
        "address": "Carstairs",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Jimmy's Cannabis Shop",
        "address": "Castlegar",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Nova Cannabis",
        "address": "Riverbend Square",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Jimmy's Cannabis Shop",
        "address": "Creston",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Spiritleaf",
        "address": "Garneau",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Cranbrook",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Value Buds",
        "address": "Southridge",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Bud Supply",
        "address": "Creek Bud",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Hive Cannabis",
        "address": "Terrace",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Cannabis Corner",
        "address": "Castlegar",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Buddy's Place",
        "address": "Nelson",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Pacificanna",
        "address": "Williams Lake",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Local Cannabis Co.",
        "address": "Parksville",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Budzz & Roses",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "Baseline Rd",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "Spruce Grove (westwind dr)",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Strathcona Square",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "Sylvan Lake",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "SQDC",
        "address": "77047",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Value Buds",
        "address": "Chapelle Commons",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Eastwood",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Clarity Cannabis",
        "address": "Prince Rupert",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Best Buds Outlet",
        "address": "Meadowbrook",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Canvas Retail Cannabis Store",
        "address": "Danforth Ave",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "Terrace Plaza",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Jasper Ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Canopy Corp Retail",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "NUMO Cannabis",
        "address": "China Town",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Jasper Gates",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "4 Ave SW",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Bud Runners",
        "address": "Fairview",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Cannabis 204",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Plantlife",
        "address": "Camrose",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Clarity Cannabis",
        "address": "Cranbrook",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Fire & Flower",
        "address": "Dawson Center",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Mountain Standard Cannabis",
        "address": "107 Ave NW",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Baseline Village",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Invermere Cannabis",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Mountain Standard Cannabis",
        "address": "118 Ave NW",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Banff Cannabis",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Mountain Mellow",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "Wye Road",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Seed and Stone",
        "address": "Chilliwack",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Fire & Flower",
        "address": "Sky Point Landing",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Pineapple Express Dispensary",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Bonnefire",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Mayfield Common",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "17 Avenue",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "One Plant",
        "address": "Barrie",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Franklin Ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Corktown Cannabis Co.",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Satica Cannabis",
        "address": "Collingwood",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "One Eye's Weedery",
        "address": "Outlook",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "The Weed Locker",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "1st Ave Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Value Buds",
        "address": "Sierra Springs",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "THC Hub",
        "address": "Fort Saskatchewan",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Bud Bar",
        "address": "Capitol Hill",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Southbank Centre",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "CO-OP Cannabis",
        "address": "Crowfoot",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Bud Supply ",
        "address": "Harvest Bud",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Canapa Sky",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Northland Plaza",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Jeb's Joint",
        "address": "Provost",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Mixers Cannabis",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Bud Mart",
        "address": "Didsbury",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Edson",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Nobal Buds Inc.",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Tokyo Smoke",
        "address": "1180 Queen St W",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "420 Hemp Shop",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Landsdowne",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Equilibrium Cannabis",
        "address": "Athabasca",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Pacificanna",
        "address": "Fairfield Rd",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Tokyo Smoke",
        "address": "North Bay",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Hive Cannabis",
        "address": "Quesnel",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Father's Nature Gifts",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Upstairs Cannabis",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Hive Cannabis",
        "address": "Fort St. John",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "Costa Canna",
        "address": "Green Rd",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Beaches",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Clair's Cannabis",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Alternative Aromatics",
        "address": "Quadra St",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Soo Cannabis SSM (Formerly Hello Cannabis",
        "address": "SSM)",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Bud Supply",
        "address": "Fort Bud",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "This is Cannabis",
        "address": "Chilliwack",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Trees Cannabis",
        "address": "Burlington",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Cannabis Factory",
        "address": "18st",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Fresh Cannabis Co.",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Bud Mart",
        "address": "Airdrie",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Pembina",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "One Plant",
        "address": "Barrhaven",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Potorium",
        "address": "Nelson",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Tamarack",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Hunny Pot",
        "address": "Nepean",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Weston Road",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Cynders",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Lucid Cannabis",
        "address": "Brintnell",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Marlee?s Den",
        "address": "Williams Lake",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Daily Stash Cannabis Ltd.",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Hemp Phase",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Flora Cannabis",
        "address": "West Kelowna",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Uncle Sam's Cannabis",
        "address": "Morinville",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Northern Rockies Cannabis",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "Dazed Cannabis Kamloops",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Five Corners Cannabis",
        "address": "Prince Rupert",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Fort St. John",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Penticton",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Quesnel",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "The Greenery Cannabis Boutique",
        "address": "Penticton",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Tokyo Smoke",
        "address": "570 Bloor St West",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Trail",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Vanderhoof",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Bud Supply Group",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Bud Bar",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Earth to Sky",
        "address": "Prince George",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Bud Mart",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Soho Cannabis Store",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Green Light Cannabis",
        "address": "Okanagan Falls",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Bud Runners",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "ARCannabis Store",
        "address": "12 Ave",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "BudaBoom",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Atheneum Cannabis Corp.",
        "address": "Vancouver",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Buddy's Place",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Club Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "ARCannabis Store",
        "address": "Marine Drive",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Burb",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Higher Path",
        "address": "Armstrong",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Cannabis Corner",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis House",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis PEI",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Bean Cannabis Shop",
        "address": "Kelowna",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "McLure Station Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Canna Cabana",
        "address": "Parliament St",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Accupure Cannabis",
        "address": "Blackfalds",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Burnside Cannabis",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "1904 Cannabis Company",
        "address": "Ladysmith",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Canvas Retail Cannabis Store",
        "address": "York",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "A Little Bud Cannabis",
        "address": "White Rock",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "High Tide Cannabis",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Oakridge Cannabis",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Toke House",
        "address": "James Street",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "F & L Cannabis Inc.",
        "address": "Entwistle",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Kiaro",
        "address": "Nanaino",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Friendly Stranger",
        "address": "Church Street",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "The Green Closet",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Kiaro",
        "address": "Graveley Street",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Four20 Premium Market",
        "address": "St. Albert",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Hunny Pot Cannabis Co.",
        "address": "2591 Yonge Street",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Budders",
        "address": "Toronto",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Mary Jane Rigs & Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Atlantic Cannabis",
        "address": "Topsail Road",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Star Buds",
        "address": "Livingstone",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "The Higher Path",
        "address": "Lumby",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Earth to Sky",
        "address": "Port Renfrew",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Bluewater Cannabis",
        "address": "Penticton",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Spiritleaf",
        "address": "Don Mills",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Green Light Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Spiritleaf",
        "address": "Guelph",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Lucid Cannabis",
        "address": "Vernon",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Green Light Cannabis",
        "address": "Penticton",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Cannabission",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Welcome Cannabis",
        "address": "Toronto",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Flora Cannabis",
        "address": "Kelowna",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Body and Spirit Cannabis",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Rise Cannabis",
        "address": "Admirals road",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Your Local Cannabis",
        "address": "Kennedy Road",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Hunny Pot Cannabis Co.",
        "address": "Centennial",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "CottonMouth",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Muse Cannabis",
        "address": "460 Granville Street",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "The Green Box Cannabis",
        "address": "Vegreville",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Flint and Embers",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "127 ST Cannabis Queen",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "The Green Den Retail Cannabis LTD.",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Original Goods Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Pineapple Group",
        "address": "Valley Pineapple",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Original Goods Cannabis",
        "address": "Calgary",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Sun Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Canna Cabana",
        "address": "Niagara Falls",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Roll N Rock (Formerly Dutch Love)",
        "address": "Timmins",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Bodega",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Miss Jones",
        "address": "Fort York",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Firesale",
        "address": "Southland",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Cariboo Buds Cannabis",
        "address": "100 Mile House",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Bonfire Cannabis Inc.",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Botanica",
        "address": "Fox Creek",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Good Cookie",
        "address": "Kingston Road",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Canna Cabana ? Manitoba Street (Formerly Bud Heaven",
        "address": "Manitoba Street)",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Budd Hutt",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Budd Hutt",
        "address": "Grande Cache",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Hawkesbury",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "Grande Prairie",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "One Plant",
        "address": "North York (Formerly Hemisphere Cannabis Co",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Budd Hutt",
        "address": "Morinville",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Welcome Cannabis",
        "address": "Burlington",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Mount Kushmore",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Burb",
        "address": "Port Moody",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Affinity Cannabis Store",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Comox Valley Cannabis Co.",
        "address": "England Ave",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Nanaimo",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Spiritleaf",
        "address": "Nepean",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "The Joint Cannabis",
        "address": "Portage Avenue",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Cannabis Way Ltd.",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "The Peace Pipe",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Uncle Sam's Cannabis",
        "address": "50 st",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Pure Leaf Cannabis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Can-Can Club",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Happy Dayz",
        "address": "Barrie",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Leaf Life",
        "address": "Hidden Valley Dr.",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Dutch Love Cannabis",
        "address": "Parkdale",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Marda Loop",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "K's Pot Shop",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Capturing Eden",
        "address": "Haliburton",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Wonderland Cannabis",
        "address": "Queen Street",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "The Green Cloud Cannabis",
        "address": "Listowel",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Banff",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Jane's Cannabis Shop",
        "address": "Aurora",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "13th Floor Cannabis",
        "address": "Silver Springs",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "BayBud Cannabis",
        "address": "Barry's Bay",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "The Underground Ontario",
        "address": "Bancroft",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "Brock Ave",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Smokey's",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Coastal Bay Cannabis",
        "address": "Lower Gibsons",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Friendly Stranger",
        "address": "Danforth Ave",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Smokey's",
        "address": "22 Ave",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Up In Smoke",
        "address": "Henderson Highway",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Growers Retail",
        "address": "Bloor",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Cannabis House",
        "address": "Tamarack",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "St. Jean Grocery",
        "address": "PJS Adventure",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "High Street Cannabis Retail",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Hampton Terrace",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "The Bake Shoppe",
        "address": "Maple Creek",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Canna Cabana",
        "address": "Front St.",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Pegasus",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "NSLC Cannabis",
        "address": "Tacoma",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Moonlit Cannabis",
        "address": "Carlyle",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Coastal Green",
        "address": "Sechelt",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "The Joint Cannabis",
        "address": "Pembina Hwy",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Eggs Canna",
        "address": "Commercial",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Wiid Boutique",
        "address": "Lumsden",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Fridays Cannabis",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Mani's Toke",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Payson's Joint",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Wyandotte (Formerly Boondom)",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Ameri",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Dream Cannabis",
        "address": "Nepean",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Pakalolo",
        "address": "Elgin St",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Two Cats Cannabis Co.",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Stash & Co",
        "address": "Nepean",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Yerba Buena Cannabis",
        "address": "Bayview Ave",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Collective Growers",
        "address": "Pembroke",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Flower Pot",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Waterdown",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "IPOT Cannabis",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "ERBN Cannabis Co.",
        "address": "Yonge St",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Canada Buds",
        "address": "Burlington",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Windsor",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Kushys",
        "address": "Pembroke",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Friendly Stranger",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Valley Cannabis Pembroke",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Grand Cannabis",
        "address": "Dunnville",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Cannabis Bazaar",
        "address": "Gananoque",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Utopia Cannabis",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Brant Cannabis Co.",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "132 ave",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Tantallon",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Wild Bloom Cannabis",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Smokey's",
        "address": "23 Ave",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Cannabis Jack's",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Little Leaf",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Cannabis Jack's",
        "address": "North Bay",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Insalata",
        "address": "Toronto",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Friendly Stranger",
        "address": "Midland",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Superette",
        "address": "Spadina Ave",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Friendly Stranger",
        "address": "Cambridge",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Windsor (Division Road)",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Friendly Stranger",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Wonder Buds Cannabis",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "V&D Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "TOKE Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "One Plant- Kingston",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "TOKE Cannabis",
        "address": "St. Catharines",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Star Buds",
        "address": "Huronia",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Canna Cabana ? Queen St East",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Ridgeburn Cannabis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Mota Toke",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Edition X",
        "address": "Dupont Street",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Grass Station",
        "address": "Waterdown",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Da Canna",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Inspired Cannabis",
        "address": "Kitsilano",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Farmer Jane Cannabis Co.",
        "address": "Aurora",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Brantford Commons",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Lake of the Woods Cannabis",
        "address": "Kenora (River Drive)",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Kasa Kana",
        "address": "Peterborough",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Cannabis Plus Store",
        "address": "Simpson St",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "The Cannabis Connoisseur",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "HiBuzz Inc.",
        "address": "Rivermont Rd",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Grand Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Miss Jones",
        "address": "Cambridge",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Hamilton, Rymal Rd",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Springs Cannabis",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Due North Cannabis",
        "address": "150 Churchill",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "The Grove",
        "address": "Vanier",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Hello Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Hello Cannabis",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Sheet Harbour",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Firestone Cannabis",
        "address": "Leduc",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Yaletown",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Brockville (Parkdale)",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Cannabis Link",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Spiritleaf",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Cornwall Center",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "College Street Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Village Cannabis Co.",
        "address": "Crystal Beach",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Wavy Buds Recreational Cannabis",
        "address": "Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Hamilton, King St",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Budtimez",
        "address": "Barrie",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Flowertown Cannabis",
        "address": "Bridgenorth",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Kelly's Cannabis",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Sarnia",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Cochrane Cannabis Company",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "La Canapa Boutique Inc",
        "address": "Main St",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "The Cannabis Factory Outlet",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis House",
        "address": "Westpoint",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "La Canapa Boutique Inc",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Holland Daze",
        "address": "Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "Rabbit Hill Road",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Open Fields Distribution",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Spiritleaf",
        "address": "Stratford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Uncle Sam's Cannabis",
        "address": "Castle Downs Road",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Luminous Leaf",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Canvas Retail Cannabis Store",
        "address": "East Liberty Street",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Off the Record Cannabis",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "The Weed Pool",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Rosebud Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "MJAYZ Cannabis Corp.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Hamilton Cannabis Co.",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Brockville",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "SilverLeaf Cannabis",
        "address": "Mohawk Road",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Highway 560 Cannabis",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Paradise Cannabis",
        "address": "Fort Erie",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Lyons Roar",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Plantlife",
        "address": "Albany",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Corner Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Hempire House",
        "address": "Orangeville",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Prairie Roots Fine Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "The Potterie",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The We Store",
        "address": "Windsor (Tecumseh Rd.)",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Timmins",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "The Potterie",
        "address": "Fairview",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Desroschers Hotel & Cannabis",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "High-Way Grass Bar",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Rama Cannabis",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "District",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Annapolis Royal",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Welland",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Cannasavvy Cannabis Co.",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Cannabis Spot",
        "address": "Victoria Trail",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Barrington Passage",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Growers Retail",
        "address": "Pape Ave",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "One Plant Barrie",
        "address": "Cundles Rd",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "VIP Cannabis Co.",
        "address": "Hanover",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Growers Retail",
        "address": "Brimley Road",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Milrise",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Grand Cannabis",
        "address": "St Catharines",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Cannabis House",
        "address": "Jasper Ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Port Colborne",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Inspired Cannabis Co",
        "address": "St Catharines",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Haysboro",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "The Green Hex",
        "address": "Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Mind Flower Cannabis Company",
        "address": "Toronto (Bayview)",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Sarnia",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Mind Flower Cannabis Company",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "High Ties Cannabis Store",
        "address": "Embrun",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Jerry's Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Canna Cabana",
        "address": "Bowness Rd",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "High Ties Cannabis Store",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Broadway Cannabis",
        "address": "Orangeville",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Uno Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Sage Cannabis",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "West End Cannabis Co.",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Farmer Jane Cannabis Co.",
        "address": " University Heights",
        "owner": "Kyle Mcmurtry",
        "province": "SK"
    },
    {
        "name": "Kamsack Cannabis",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Yield Cannabis Co.",
        "address": "Sarnia",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Prairie Cannabis",
        "address": "22nd Street",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Canna Cabana",
        "address": "720 King St W",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Farmer Jane Cannabis Co.",
        "address": "Preston Ave",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "The Kensary",
        "address": "North York",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Prairie Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Ambrosia (Previously Apothecarium X)",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Prairie Cannabis",
        "address": "8th Street",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Budside",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Gravenhurst",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Grass Roots",
        "address": "Windsor",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": " Willowgrove",
        "owner": "Kyle Mcmurtry",
        "province": "SK"
    },
    {
        "name": "Stellar Bud",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "Blairmore",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Cloud Nine Cannabis",
        "address": "Brantford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "The Green Room",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "This is Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "This is Cannabis",
        "address": "Abbotsford",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Grasshopper Retail Inc.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Celestial Buds",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Canna Cabana",
        "address": "Sheriff King Street",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "4Hoots",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Canmore",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Cannabis 4 Less",
        "address": "110 Ave",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Celestial Buds",
        "address": "Cochrane",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Toke Cannabis",
        "address": "Midland",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Nova Cannabis",
        "address": "Summerside",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Robson Valley Cannabis Co.",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Stash & Co",
        "address": "Stittsville",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Black Tie Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Inspired Cannabis Co",
        "address": "Salmon Arm",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "The Underground",
        "address": "Tillsonburg",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Bimor Cannabis",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Toke House",
        "address": "Arundel Street",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Sechelt",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Cannabis House",
        "address": "Lessard Road",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Toke House",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Tokyo Smoke",
        "address": "Ballantrae",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Cloud Nine Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cloud Nine Cannabis",
        "address": "Shelbourne St",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Value Buds",
        "address": "Bloor Street West",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "High Society Cannabis Co.",
        "address": "Thunder Bay",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Leisure For Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "The Joint Cannabis",
        "address": "Regina",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "The Higher Cannabis Company",
        "address": "Tilbury",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "High5 Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "SQDC",
        "address": "77076",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Athena Cannabis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "A Bud Above Craft Boutique",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Budzys",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "The Higher Cannabis Company",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "MALIBU ROAD",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Church Street",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Rooted Zen Cannabis Co.",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Cannabis Xpress",
        "address": "Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Living Skies Cannabis",
        "address": "8 Street",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "The Joint Cannabis",
        "address": "Idylwyld Drive",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Sweet Releafs Inc.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Spiritleaf",
        "address": "Township",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Bestbudz",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Discounted Cannabis",
        "address": "50 Street",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Camp Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Cannabis Cellar",
        "address": "Jasper Ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "T Cannabis",
        "address": "New Liskeard",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "The Potterie",
        "address": "Falher",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Paradise AIR",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Ozone Cannabis",
        "address": "Columbia Blvd.",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Canna Cabana [formerly Meta Cannabis Co.]",
        "address": "Byward",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Fire & Flower Cannabis Co.",
        "address": "2570 Granville Street",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Thrive Cannabis",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Glenmore Cannabis Ltd.",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Capturing Eden",
        "address": "Tillsonburg",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Cranberry Cannabis",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Ronin Cannabis",
        "address": "Guelph",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "The 6ix Cannabis",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Session7",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "The Green Cloud Cannabis",
        "address": "Etobicoke",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "The Green Cloud",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Purple Meadow Cannabis",
        "address": "Meadowbrook",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Speakeasy Cannabis",
        "address": "9225 Hwy 93",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Inspired Cannabis Co",
        "address": "Orleans",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Matchbox Cannabis",
        "address": "North York",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "The Green Bouquet Cannabis",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "1 Stop Cannabis",
        "address": "36 Norfolk",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Puffs Haven",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "AAAAA Supercraft Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Superstore C",
        "address": "Stop",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Elmwood Cannabis Store",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Barriere Budz Cannabis Store",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Dragon's Peak Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Dragon's Peak Cannabis",
        "address": "Prince George",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Seed and Stone",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Seed and Stone",
        "address": "Gordon St",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Khatsahlano Kannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Muse Cannabis",
        "address": "Denman Street",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Red Rock Cannabis Co.",
        "address": "Toronto",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "One Plant",
        "address": "Strathroy",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Hunny Pot Cannabis Co",
        "address": "Hampton Park",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Stash & Co",
        "address": "Collingwood",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Happy Hippy Cannabis Store",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Go Hi Ltd",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Bluebird Cannabis Co.",
        "address": "Almonte",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Buzzed Buds",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Haze Co.",
        "address": "Port Dover",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": " Brimley Road",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Kirkland Lake",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Euphoric Pot Corporation",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "CannaMart",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannaco The Cannabis Company",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Spiritleaf",
        "address": "Regent",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Plug Canna6is",
        "address": "Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Smoke N Fish",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Wake N' Bake Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis Street",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Smokey's",
        "address": "107 St",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Cannabis Grey Bruce",
        "address": "Rockford",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Buzzed Buds",
        "address": "Pickering",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Glenora Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Spiritleaf Beaches",
        "address": "Toronto",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Cloudy Daze",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Up In Sky",
        "address": "St Mary's Road",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "North Country Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "MJB Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "MJB Cannabis",
        "address": "Albert Place",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Crossroads Cannabis BC",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "The Peace Pipe",
        "address": "Cobourg",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Canntina",
        "address": "Nelson Street",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Alphabud Cannabis Company, ABCCO.",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Cost Cannabis",
        "address": "Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Bud Brothers Cannabis",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Crown Leaf",
        "address": "Brampton (Steeles)",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Pot Spot",
        "address": "Niagara Falls",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Due North Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Olympus Cannabis",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Due North Cannabis",
        "address": "695 Pine",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "The Cannabist Shop",
        "address": "Manitou Dr",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "UpHi Cannabis Emporium",
        "address": "Geneva St",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Cannabis Grey Bruce",
        "address": "Durham",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Taste Buds Cannabis",
        "address": "North York (Weston Road)",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Cost Cannabis",
        "address": "Armstrong",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Alternative Greens",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Local Leaf",
        "address": "Vancouver",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Wiid Boutique",
        "address": "Quance",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Fire & Flower",
        "address": "St. Annes",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Giggle Leaf",
        "address": "Parry Sound",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Local Products The Cannabis Store",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Belleville (Dundas St)",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Groovy's",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Green World",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "THC Centre Cannabis Inc.",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Canada Pure Cannabis",
        "address": "Guelph (Wyndham St N)",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Buddies Cannabis",
        "address": "Waterloo",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Adoreweed",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Brantford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "The Cannabis Shop",
        "address": "Carleton Place",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Miss Jones",
        "address": "Gravenhurst",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Green Merchant Cannabis Boutique",
        "address": "Jefferson",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Kincardine",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Supergas Cannabis (Previously Gasbar Cannabis)",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Bent Bud",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "The Joint Cannabis",
        "address": "Sage Creek",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "The Green Cloud Cannabis",
        "address": "Orangeville",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Wonder Pot",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Ozone Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Bluebird Cannabis Co.",
        "address": "Pakenham",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Highties Cannabis Store",
        "address": "Tenth Line rd (Orleans)",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Soul Rebel Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Bakery Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "FN Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Soul Rebel Cannabis Co.",
        "address": "Toronto",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Loblaw",
        "address": "Lake Ave.",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Uncle's Cannabis",
        "address": "Watrous",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "The House Of Cannabis",
        "address": "Keswick",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "In N Out Cannabis",
        "address": "Saskatoon",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Plantlife",
        "address": "Dalhousie Drive",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Walkerton",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Cannabis Discounter",
        "address": "111st",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "Selkirk",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Hanmer",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Jeb's Joint",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Underground",
        "address": "Apsley",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Savanna",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Wake N' Bake Cannabis",
        "address": "118 Ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Hanover",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Arcade Cannabis",
        "address": "Kingston Road",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Elevate",
        "address": "105 Ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Bridgeport Road",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Cloud 29",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cloud 29",
        "address": "London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Jeb's Joint",
        "address": "Wainwright",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Fika Herbal Goods",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Fika Herbal Goods",
        "address": "St. Thomas",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Sukh Supermarket",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Fire & Flower",
        "address": "2 Ave",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Lucid Cannabis",
        "address": "Worobetz Place",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "FN Cannabis",
        "address": "Shell Lake",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Fratelli And Co.",
        "address": "Mount Forest",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Royal Blunt Cannabis",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Best Buds Forever",
        "address": "Junction",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Totally Baked Cannabis",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Dream Cannabis",
        "address": "Kemptville",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Brainporium",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Grassroots Co",
        "address": "Sudbury",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Brockville",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Eighth Cannabis",
        "address": "Fenlon Falls",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Green Queen Cannabis",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Lucid Cannabis",
        "address": "177 Street",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Smokey's",
        "address": "Queen St. E",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Flamingo Cannabis",
        "address": "Brandon",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Blunt",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Mirage Cannabis",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "The Bohemian Cannabis Co.",
        "address": "Port Moody",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "KushKlub",
        "address": "Eglinton Ave",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Seed and Stone",
        "address": "Douglas St",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Best Cannabis",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Windsor",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Mount Forest",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Fika Herbal Goods",
        "address": "Windsor",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "The Potery",
        "address": "Guelph",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "The OZ Store",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "The Oz Store",
        "address": "Ottawa",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Bancroft Cannabis",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "The 420 Store",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Discounted Cannabis",
        "address": "Manning Crossing",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Red Rock Cannabis Co.",
        "address": "Ajax",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "710 Kingston",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Bud Heaven",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Cannabis Stop Inc.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis Street",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Cannoe",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Dream Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Eighth Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "HiBuzz Inc.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Hidden Leaf Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Meaford",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Green Solutions Cannabis",
        "address": "Rocky Mountain House",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Wasaga Beach",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Honeycomb Cannabis Co.",
        "address": "Taber",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "SQDC",
        "address": "77089",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Canadian Greens",
        "address": "Valleyview",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "SQDC",
        "address": "77067",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "TOKE Cannabis",
        "address": "Beamsville",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Tumbleweed Cannabis Co.",
        "address": "Saskatoon",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Cannabis House Co.",
        "address": "Barton Street",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Nisku",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "HIGHQ",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "TransCanada",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Crest Cannabis Castle",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Leaf Life",
        "address": "Chinook",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Kurve Cannabis",
        "address": "Edmonton",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Clouded on Locke",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Hespeler Village Cannabis",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "The Flower Pot",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Smiths Falls",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Haze Inc. -115 Ave",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "Beaumont",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Plantlife",
        "address": "Shepard",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Plantlife",
        "address": "Shawnessy",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Omkara Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Omkara Cannabis",
        "address": "Centre Street",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Co-op Cannabis",
        "address": "Beddington",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Botanica",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Bluebird Cannabis Co.",
        "address": "Merivale & Hunt Club",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Arcade Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Shinybud Cannabis Co.",
        "address": "Schomberg",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Fika Herbal Goods",
        "address": "Fairview Mall",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Green Apples Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Green Apple Cannabis",
        "address": "Burk's Falls",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Stonecrop Cannabis",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "King of Queens Cannabis Company",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "On The Cannabis Side",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "The Hunny Pot Cannabis Co.",
        "address": "Sarnia",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "RealCan Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "Georgetown",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Island Highway",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Port Coquitlam",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Greenlight District",
        "address": "London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Brampton Northeast",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Urban Flavours",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "The We Store",
        "address": "Sarnia (Trudeau Dr)",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "My Two Sons",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Parrot Pot Shop",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Star Buds Cannabis Co.",
        "address": "Amherstview",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "The Potery",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Jackpot Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Silverleaf Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "The Herbary",
        "address": "Nepean",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Atlantic Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "NL"
    },
    {
        "name": "Plantlife",
        "address": "Mahogany Market",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "SQDC",
        "address": "77091",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77088",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Olive Jar",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Atlantic Cannabis",
        "address": "Gander",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Breaking Bud Cannabis",
        "address": "Toronto (Eglington)",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Pickering",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Atlantic Cannabis",
        "address": "Galway",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Blackstar Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Atlantic Cannabis",
        "address": "Goulds",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Fire & Flower Cannabis Co.",
        "address": "859 Queen St. E Toronto",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Atlantic Cannabis",
        "address": "Grand Falls",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Spiritleaf",
        "address": "Sunrise",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Atlantic Cannabis",
        "address": "Corner Brook",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Happy Trails Cannabis",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "YT"
    },
    {
        "name": "Five Corners Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Canna North Cannabis Store",
        "address": "Ottawa (Baseline Rd)",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "The Green Room Cannabis",
        "address": "Guelph (Wyndham Rd)",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Canna North Cannabis Store",
        "address": "Toronto (117 Yonge St)",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Markdale ( Formerly Crossroads Cannabis",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "London (Fanshawe)",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Smart Center Burlington North",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Piffingtons Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Piffingtons Cannabis Co",
        "address": "Milton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Four20 Giggles",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Hempire House",
        "address": "Tottenham",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Mistik Cannabis Co.",
        "address": "Winnipeg",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Mistik Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Canna Cabana",
        "address": "Waterloo (Erb Street)",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Log Cabin Cannabis Co.-Northside",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Reds Cannabis",
        "address": "Shellbrook Cannabis Store",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Green Grove",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Greenhouse Cannabis",
        "address": "Saskatoon",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Plantlife",
        "address": "University Avenue",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Green Grove",
        "address": "Erin",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "420 Express",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Matchbox Cannabis",
        "address": "York",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Cannabis Xpress",
        "address": "Beeton",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "River Drift Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "High Miles Incorporated",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Inspired Cannabis Co",
        "address": "Abbotsford",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Ma Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Kawartha Smoke",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Port Elgin",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Seaside Cannabis",
        "address": "Saanichton",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Seed and Stone",
        "address": "Chester Rd",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "The Original Farm",
        "address": "Vancouver",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Rural Buds Cannabis Shop",
        "address": "St Adolphe",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "The Shed Cannabis Store Inc.",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "T8C Local Cannabis",
        "address": "Saskatoon",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Tumbleweed Cannabis",
        "address": "Rosthern",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Black Gold Cannabis & Co",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Land Escape",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Mission Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Your Local Cannabis",
        "address": "Keswick",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "The Pot Shack",
        "address": "Yorkton",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Kushi Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Wiid Boutique",
        "address": "Downtown Regina",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Kushi Cannabis",
        "address": "St Albert",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Crown Cannabis",
        "address": "Heritage Valley",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Jasper",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Firestone Cannabis",
        "address": "Pigeon Lake",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Plantlife",
        "address": "Orchards",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Cloud Nine Cannabis",
        "address": "London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Vibes Cannabis",
        "address": "Elbow Dr",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Woodstock",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "True North Cannabis",
        "address": "SSM",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Saint John (Container Village)",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "True North Cannabis",
        "address": "Timmins (Third Ave.)",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Guysborough",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Bath's Bud N Boutique",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Guelph",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Ashario",
        "address": "Aurora",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Green Dream Cannabis Co",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Canna Cabana",
        "address": "Weber",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "T Cannabis",
        "address": "Hearst",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "The Hunny Pot Cannabis Co",
        "address": "Centennial",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Offside Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Offside Cannabis",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Cabbage Brothers",
        "address": "Stoney Creek",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Bodega Boyz Ltd.",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "King of Queens Cannabis Company",
        "address": "Haileybury",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Happy Life",
        "address": "Chelmsford",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Highlife Cannabis Lively Express",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "Portage La Prairie",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Morrisburg",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Kildare Stop & Shop",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Nspire Cannabis Inc.",
        "address": "76 ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Cannaverse",
        "address": "Port Perry",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Rise Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "Hey Buddy Cannabis",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Rise Cannabis",
        "address": "Colwood Corners",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Gold Leaf",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannaverse",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Cannaverse",
        "address": "Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Wiid Boutique",
        "address": "Indian Head",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Kurve Cannabis",
        "address": "Sherwood Park",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Cannaverse",
        "address": "3090 Carling",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Fairview",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Kurve Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Cannaverse",
        "address": "Nepean (1465 Merivale)",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Meteghan",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Plain Jane Cannabis",
        "address": "Beaverlodge",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "The Budstop St. Mary's",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Spryfield",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Whyte Ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Springhill",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Green Solution Cannabis",
        "address": "Camrose",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Lux Leaf",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "New Germany",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Morden Vape Superstore & Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Cottage Country",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "The Smoke and Leaf Ltd.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Harvest Cannabis Co",
        "address": "Kitchener",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Holland Daze",
        "address": "Orangeville",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Lolly",
        "address": "Brantford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Mary J's Cannabis",
        "address": "Greely",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Maryjane's Cannabis",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Paramount Cannabis Co.",
        "address": "Midland",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Courtice",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Stratford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "SPARQ Retail",
        "address": "Norwood",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Sticky Nuggz Inc.",
        "address": "Steeles West",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Cantopia Cannabis Co.",
        "address": "Brampton (Mississauga Rd.)",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Gram Station",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Bro Cannabis",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Havok Smoke Cannabis & Accessories",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "One Plant",
        "address": "Keswick",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Trees Cannabis (Formerly Corner Cannabis)",
        "address": "St. Catharines",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Lush Cannabis Company",
        "address": "",
        "owner": "Jennifer Fraser",
        "province": "ON"
    },
    {
        "name": "Kawartha Leafs",
        "address": "Peterborough",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "The Cannabis Vault",
        "address": "Arborg",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "My Cannabis",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Blue Haven Cannabis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Highlife Cannabis Peterborough",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Forest Plant",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "King Bud Cannabis",
        "address": "Killarney",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Value Buds",
        "address": "King St East",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "King Bud Cannabis",
        "address": "Onanole",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Cost Cannabis",
        "address": "Peterborough",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "The Villa Cannabis Shop",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Avenue Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Endless Heights Cannabis",
        "address": "West",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Saskatoon",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Green Line",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Ronin Cannabis",
        "address": "London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Bluebird Cannabis",
        "address": "Hawkesbury",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Dunbar St",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Cannaverse",
        "address": "Niagara Falls",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Corner Cannabis",
        "address": "Stouffville",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Vivid Cannabis Co.",
        "address": "Thornbury",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Zen Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Inverness",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "SQDC",
        "address": "77094",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "ARCannabis Store",
        "address": "W4th and Burrard",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Lux Leaf Cannabis",
        "address": "Eckville",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "The Joint Cannabis",
        "address": "22 Street West",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Regulators Cannabis",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "The Joint Cannabis",
        "address": "Baltzan",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Leaflit",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Strathmore",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Baba Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Kushi Cannabis",
        "address": "Saddleback",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Lux Leaf",
        "address": "Portage Avenue",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Corner Grass Cannabis",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Ira Needles",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "My Cannabis Shoppe",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Cannabis Bay",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Green Solution Cannabis",
        "address": "Athabasca",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Earth to Embers",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Lux Leaf Cannabis",
        "address": "Heritage",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Cannabis Corner",
        "address": "Kelowna",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Laurelwood",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77092",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Garden City Cannabis Co",
        "address": "East Main St",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Tottenham",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Barrie",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "On High Inc.",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Cannabis Hut",
        "address": "Coxwell",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Pickering",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Cannaverse",
        "address": "Ajax",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Queen St. Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Cannabis Bay",
        "address": "82 Ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Atomic Cannabis",
        "address": "Coleman",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Goodvibes Cannabis of Vilna",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "All The Smoke Premium Cannabis Market",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Queens Cannabis Co.",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "AB Bud",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Burb",
        "address": "Maple Ridge",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "True North Cannabis",
        "address": "New Liskeard",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Green C.H.E.",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Acton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Calyx Cannabis Ltd",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Doobie Cannabis",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Tower Cannabis",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Cannabis World",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Out West Cannabis",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Affinity Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Ashdown Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Kushi Cannabis Co.",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Fireweed Cannabis",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Father Natures 2",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "ARcannabis Store",
        "address": "Kingsway",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Crown Cannabis",
        "address": "137 Ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Hope Cannabis Co.",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Market Crossing",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Kuush Cannabis Store",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Nuclear Lettuce",
        "address": "Exeter",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Kana Leaf Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Ignite Cannabis inc.",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Divine Flower",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Capital Cannabis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77102",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Village Cannabis Co.",
        "address": "Hamilton (King St E)",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "MC Cannabis",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Nexus Cannabis Co",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Harbourfront Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Aurora",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Hanover",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Lasalle",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Waterloo Boardwalk",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "450 Yonge st",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "West End Cannabis VB",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Budside",
        "address": "Weston rd",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Kroniclez",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "On the Cannabis Side",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Spot420",
        "address": "Weston RD",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Cannasavvy Cannabis",
        "address": "Wyandotte",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Flowertown Cannabis",
        "address": "Mississauga",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Tough Bud Cannabis",
        "address": "Mississauga",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Cannabis Hut",
        "address": "Kingston rd",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Holland Daze",
        "address": "Eglinton",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Sprucebuds Cannabis",
        "address": "Candle Lake",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Galaxie Greens and Edibles Inc.",
        "address": "Ogema",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Fernwood Green",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Paradise Cannabis",
        "address": "Port Colbourne",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Tumbleweed Cannabis",
        "address": "Watrous",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Boss Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "La Ronge Cannabis",
        "address": "La Ronge",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Gitksannabis",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Cost Cannabis Inc.",
        "address": "Lloydminster",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Water Street Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Into the Weeds Cannabis",
        "address": "Spiritwood",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Cannabis Place",
        "address": "Mississauga",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Weed Be Delighted",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Rosebud Weed Store",
        "address": "Meadow Lake",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Lashburn Cannabis",
        "address": "Lashburn",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Weed Pool Cannabis",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Moonlit Cannabis",
        "address": "Wadena",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Into the Weeds Cannabis",
        "address": "Langenburg",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Cannabis Counter",
        "address": "Stoughton",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "The Green Box Cannabis Inc.",
        "address": "Wynyard",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Mary Jane?s Lil Country Cannabis Store",
        "address": "St. Walburg",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Into the Weeds Cannabis -Melfort",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Purple Tree Cannabis",
        "address": "Mississauga",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "The Leaf Boutque",
        "address": "Grenfell",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "The Pot House",
        "address": "Watson",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Prairie Cannabis",
        "address": "Elbow",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Into the Weeds Cannabis",
        "address": "Birch Hills",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "50 Shades of Green Cannabis Co.",
        "address": "Choiceland",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "5 Buds Cannabis",
        "address": "Humboldt",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Canna Cabana",
        "address": "St Marys",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Buds House",
        "address": "Etobicoke",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Buds House",
        "address": "Burlington",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Buds House Corporate Office",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Silverleaf Cannabis",
        "address": "Mississauga",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Tickle Point Mercantile",
        "address": "",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Kahoot Cannabis",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Oceanic Cannabis + Coffee",
        "address": "Portugal Cove",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "City Cannabis Co.",
        "address": "South Cambie",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Clover Farm Supermarket",
        "address": "",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Moonwlkr Cananbis",
        "address": "Corporate",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Glovertown North Atlantic",
        "address": "",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Moonwalkr Cannabis",
        "address": "Mississauga",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "O?Brien?s Value Grocer & Ultramar",
        "address": "",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "J & D Convience",
        "address": "",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Tower Cannabis",
        "address": "Country Hills",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Normore Enterprises",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "NL"
    },
    {
        "name": "Tower Cannabis Corporate Office",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Moon Cannabis",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Sage Valley",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Buds 4 Less",
        "address": "Alliston",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Sahtu Spot",
        "address": "NWT",
        "owner": "Gord Hopkins",
        "province": "NT"
    },
    {
        "name": "Team Cannabis",
        "address": "Vancouver",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Cannabis PEI",
        "address": "Stratford",
        "owner": "Christopher Harris",
        "province": "PE"
    },
    {
        "name": "Chronic HUB Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Eastside Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Above The Clouds Cannabis",
        "address": "Mississauga",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "The Woods Cannabis",
        "address": "Eglinton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "The Woods Cannabis",
        "address": "Corporate Office",
        "owner": "Victoria Jakovljevic",
        "province": NaN
    },
    {
        "name": "Fratelli and Co.",
        "address": "Grand Valley",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Green Stop MC",
        "address": "Deer Lake",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "The Reef Cannabis Shop",
        "address": "",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Loblaw",
        "address": "Blackmarsh",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Loblaw",
        "address": "Stavanger",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Loblaw",
        "address": "Mount Pearl",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Loblaw",
        "address": "CBS",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Loblaw",
        "address": "Bay Roberts",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Loblaw",
        "address": "Carbonear",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Loblaw",
        "address": "Gander",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Loblaw",
        "address": "Grand Falls",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Sage Hill",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Corporate Office",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Bud Runners",
        "address": "Grimshaw",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Antigonish",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Bridgewater",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Bud Supply",
        "address": "Bridge Bud",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "New Minas",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Canna Cabana",
        "address": "Southgate Blvd.",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Beltline Cannabis Calgary",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Wilson Esso",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Canna Cabana",
        "address": "Whitecourt",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Loblaw Companies Limited",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Ellerslie",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Canyon Meadows",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "Canmore Crossing",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Brooks",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "CO-OP Cannabis",
        "address": "Macleod Tr",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Forest Lawn",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Cold Lake 8th Avenue",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Global Leaf",
        "address": "Temple",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Castleridge Dr.",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Kennedale",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Deer Ridge",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Canna Cabana- 32 Ave",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Lucky Leaf Cannabis ",
        "address": "North",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Roxboro",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Midnapore",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Glendale",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Riverbend",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "Hinton Benchlands",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Meta Cannabis Co.",
        "address": "Pembina",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Meta Cannabis Co.",
        "address": "The Pas (Opaskwayak)",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Tokyo Smoke",
        "address": "McDermot",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Meta Cannabis Co.",
        "address": "Thompson",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Spiritleaf",
        "address": "Stonegate",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Osborne",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Canna Cabana",
        "address": "Grant Ave",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Dominion Center",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "PlantLife",
        "address": "Jagare Ridge",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "NB"
    },
    {
        "name": "Prairie Records",
        "address": "Warman",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "The Garden Cannabis Company",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Tweed",
        "address": "Albert Street",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Fire & Flower",
        "address": "Battleford Crossing",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Evergreen Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Northern Lights Supply",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "5 Buds Cannabis",
        "address": "La Ronge",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "City Cannabis Co.",
        "address": "Robson",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "PlantLife",
        "address": "Spruce Grove",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "5 Buds Cannabis",
        "address": "North Battleford",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Camino Cannabis",
        "address": "Fraser",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Cumberland Cannabis (Formerly Ameri",
        "address": "Cumberland St)",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Canaba Cannabis",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "The Higher Path",
        "address": "Trail",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "The Niagara Herbalist",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Prairie Cannabis",
        "address": "Prince Albert",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Tweed",
        "address": "Brandon",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Hunny Pot Cannabis Co.",
        "address": "Queen Street",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Blooming World Cannabis",
        "address": "Invermere",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "The Higher Path",
        "address": "Castlegar",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Village Bloomery",
        "address": "Vancouver",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "The Greenhorn",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Convenient Cannabis Inc.",
        "address": "Irricana",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Lake Country Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Leaf Life",
        "address": "Northmount Drive",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Chinook Cannabis Inc.",
        "address": "High River",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "QualiCanna",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Vincanna Cannabis",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Cold Lake 50th Avenue",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Bonnyville",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Brooks",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Green Nation Naturals",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "F & L Cannabis Inc.",
        "address": "Drayton Valley",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "CO-OP Cannabis",
        "address": "Dalhousie",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "118 ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Grampa's Finest",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Mary Jane on Penny Lane",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "CO-OP Cannabis",
        "address": "Oakridge",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Value Buds",
        "address": "Grande Prairie",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "It's 4:20 Somewhere",
        "address": "High Level",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Cannabis 4 Less",
        "address": "High Prairie",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "CO-OP Cannabis",
        "address": "Richmond Rd.",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Smokey's",
        "address": "101 Ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Jai's Recreational Stuff",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Retail Cannabis Store Ltd.",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "19 St NW",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Bow Trail",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "K-Town Budz",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Medicine Hat",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "River Cannabis",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Chinook",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Old Canmore",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Erin Woods",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Heritage Links",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Northills",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Canna Cabana",
        "address": "Leduc",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Worldwide Cannabis",
        "address": "Kingsway",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Canna Cabana",
        "address": "Olds",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Dawson City Cannabis",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "YT"
    },
    {
        "name": "Level 420",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Lucid Cannabis",
        "address": "Stony Plain",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Lucid Cannabis",
        "address": "Mcleod Avenue",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Camrose Cannabis",
        "address": "Grand Park",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Vegreville",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Crowfoot Crescent",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Value Buds- Banff",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Stephen Avenue",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Maple Ridge",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "The Rural Leaf Co.",
        "address": "Smithers",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Baggy's Cannabis Store",
        "address": "Grand Forks",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "The Original Farm",
        "address": "Langford",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Vernon Cannabis Store",
        "address": "35 Street",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "KushKlub",
        "address": "Vancouver",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Skye Cannabis",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Burb",
        "address": "Lougheed Highway",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Prime Cannabis",
        "address": "Cranbrook",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Highway Cannabis",
        "address": "Port Alberni",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Prime Cannabis",
        "address": "West Kelowna",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "High 5 Cannabis",
        "address": "Duncan",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Cheeba Cheebas",
        "address": "West Kelowna",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Fire & Flower",
        "address": "Slave Lake",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Dutch Love Cannabis",
        "address": "Robson St",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "5 Buds Cannabis",
        "address": "Yorkton",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Vernon Cannabis Store",
        "address": "31 Street",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Alberni Cannabis Store",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "A Little Bud Cannabis",
        "address": "Penticton",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Kensington",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Morinville",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Williams Lake",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "ARcannabis Store",
        "address": "41 ave",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Stash & Co",
        "address": "Ottawa",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Collage",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Moderna Cannabis Society",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Douglasdale Cannabis",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Omkara Cannabis",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Weed Warehouse",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Sexsmith Cannabis",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Fire & Flower",
        "address": "Jackson Heights",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "The Herbary",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "YT"
    },
    {
        "name": "Highlife Cannabis",
        "address": "Ancaster",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Beaches",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "The Greenloops Shop",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Growers Retail",
        "address": "Peterborough",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Stoney Creek",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Wellington Street",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Cambridge",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Bluebird Cannabis Co.",
        "address": "ByWard Market",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Thunder Bay",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Kelo Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Yaletown Cannabis Store",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "SQDC- 77038",
        "address": "Grande Rivi\u00e8re",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77039",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77040",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77052",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77054",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77055",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77059",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "77066",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "SQDC",
        "address": "Corporate Office",
        "owner": "Alison Currier",
        "province": NaN
    },
    {
        "name": "The Green Box Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "BC Cannabis Store",
        "address": "Vernon",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "The Higher Path",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Up In Smoke Cannabis Store",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "The Original Farm",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Uncle Sam's Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Jerry's Cannabis Co.",
        "address": "Lady Smith",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Urban Earth Medical (UEM)",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Canna Cabana",
        "address": "Olympic Village",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "URBN Leaf Cannabis Company",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis Hut",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "West Canna",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Local Leaf Cannabis",
        "address": "Terrace",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "The Pineapple Group",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "WestCan Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "Calgary",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "F & L Cannabis Inc.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Mountain Standard Cannabis",
        "address": "82 St NW",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Select Cannabis",
        "address": "149 Street",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Nimbus Cannabis",
        "address": "Oliver",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Trinity Tree Cannabis Inc.",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Revelsmoke",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Canna Cabana",
        "address": "Burlington (Guelph Line)",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Kana Leaf Cannabis",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Bob's Bud Emporium",
        "address": "Talbot St",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Canyon Cannabis",
        "address": "Queen Street",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Canvas Retail Cannabis Store",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Oz Store",
        "address": "St. Joseph Boulevard",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Canyon Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Underground",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Island Smoke (Smoke Central)",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Canyon Meadows",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Liverpool",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Capturing Eden",
        "address": "Owen Sound",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Gabriola Cannabis",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Delta 9 cannabis",
        "address": "Kenaston",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Capturing Eden",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Uncle Sam's Cannabis",
        "address": "97 St",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Cannabis Jack's",
        "address": "Sault Ste Marie",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "SpeakEasy Cannabis Company",
        "address": "Bowmanville",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Bud's Cannabis Store",
        "address": "Guelph",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "The We Store",
        "address": "Chatham",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "SpeakEasy Cannabis Company",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Joint Cannabis",
        "address": "Henderson Hwy",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "The Underground Ontario",
        "address": "Barrie",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "420 Love",
        "address": "King Street",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Cottage Country Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Marigolds Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Fire & Flower",
        "address": "Jane Street",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Greenstar Cannabis Company",
        "address": "Maple Ridge",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Interior Cannabis Co.",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "One Plant",
        "address": "Bradford",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "41 Cannabis Company",
        "address": "Northbrook",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Green Light Cannabis Shop",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Growers Retail",
        "address": "Lawrence Ave",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Plantlife",
        "address": "Calgary",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Green Culture",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Kalamalka Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Mount Odin Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "99 North Cannabis Store",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Stash & Co",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "NSLC Cannabis",
        "address": "Elmsdale",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Plantlife",
        "address": "Windermere Way",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "ARcannabis Store",
        "address": "Victoria Drive",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Mill Cove",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Spiritleaf",
        "address": "Burlington",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Atheneum Cannabis Corp.",
        "address": "Princeton",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Chilliwack",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "T Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Crown Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "BC Cannabis Store",
        "address": "Coquitlam",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Atheneum Cannabis Corp",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Unplug Cannabis Co.",
        "address": "Trim Road",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Higher Limits Cannabis Company",
        "address": "Blenheim",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Cannabis Grey Bruce",
        "address": "Owen Sound",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Chrontact Cannabis",
        "address": "Ottawa",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Harvest Cannabis Co",
        "address": "Brantford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Dolly's Cannabis",
        "address": "Bathurst St",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "T Cannabis",
        "address": "Smiths Falls",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Crown Cannabis",
        "address": "Casselwood",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Tony's Joint",
        "address": "Essex",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Parkdale",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "High Q Solutions",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Lucid Cannabis",
        "address": "111 Ave",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Original Goods Cannabis",
        "address": "Strathmore",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Mission",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Quantum 1 Cannabis",
        "address": "Creston",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Creekside Cannabis",
        "address": "Blind River",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Four20 Premium Market",
        "address": "Mayor Magrath",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Mind- Full Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis Supply Co",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Orleans",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "GreenPort Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Mind-Full Cannabis",
        "address": "118 ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "WestCan Cannabis",
        "address": "Aquitania Blvd",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "SQDC",
        "address": "77017",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Coastal Bay Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "TOKE Cannabis",
        "address": "Niagara Falls",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77071",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Tatamagouch",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Olina Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Royal Hotel",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Morris Super Variety",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Prairie Trichomes",
        "address": "Neepawa",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Ideal Buds",
        "address": "Dryden",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Purple Circle Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "ELEVATE CANNABIS",
        "address": "Kitchener",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Olympia Cannabis",
        "address": "Carleton Place",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Shinybud Cannabis Co.",
        "address": "Pitt St",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "CO-OP Cannabis",
        "address": "Hamptons",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Solar Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "TOKE Cannabis",
        "address": "Bloor St",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Accupure Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Higher Limits Cannabis Company",
        "address": "Amherstburg",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Lucid Cannabis",
        "address": "Olds",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Cannabis Cupboard",
        "address": "Cambridge",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "FOUR20 Premium Market",
        "address": "Gasoline Alley",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Bud Bank",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "MaryJane's",
        "address": "Etobicoke",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Canja",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Flower Power Cannabis Pharms Inc.",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Mihi Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "NSLC Cannabis",
        "address": "Port Hawkesbury",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Bzam Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Baddeck",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Star Buds",
        "address": "Portage Ave",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "The Joint Cannabis",
        "address": "Leila Avenue",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Cheeky's Cannabis Merchants",
        "address": "Maple Ridge",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Spiritleaf",
        "address": "Collingwood",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Grand Cannabis",
        "address": "Georgetown",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Kanata Centrum",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Sativa Bliss Cannabis",
        "address": "Kitchener",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Highlife",
        "address": "Finch Ave",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Highland Cannabis",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Highlife",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Higher Cannabis Company",
        "address": "Windsor",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "The Cannabist Shop",
        "address": "King Street",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Canna North Cannabis Store",
        "address": "Ottawa Hunt Club",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Rockland",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Cannabis Link",
        "address": "Hyde Park Rd",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "RELM Cannabis Co.",
        "address": "Riverdale 809 Gerrard St E",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Canna North Cannabis Store",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Tokyo Smoke",
        "address": "Avenue Road",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "The Reef Store by the Lake",
        "address": " Wauzhushk Onigum Nation",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Neku Cannabis",
        "address": "Stoney Creek",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Chapman Mills",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Neku Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Budzz Pot Shoppe",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Highlife Cannabis Co.",
        "address": "Steeles",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Cannabis Grey Bruce",
        "address": "Southhampton",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "The Potery",
        "address": "Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Cannabis Emporium",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Cannabis Grey Bruce",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Flora Cannabis",
        "address": "Gelnmore",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Sault Ste Marie",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Welland",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Prince George Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "The Weed Pool",
        "address": "Regina",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Canna Cabana",
        "address": "East Village",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Woodstock Cannabis Co",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "The Pot Spot",
        "address": "York",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Alpha Cannabis",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Stockyards",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Cannabis Supply Co.",
        "address": "Kitchener",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Thermodynamix Cannabis Inc.",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Shinybud Cannabis Co.",
        "address": "Prescott",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Highlife Cannabis",
        "address": "Sarnia",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Urbnbud",
        "address": "Tecumseh Road",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Inspired Cannabis",
        "address": "Nanaimo",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Fat Panda",
        "address": "Winnipeg",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "My Buddies",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Costa Canna",
        "address": "Colwood",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Mission Cannabis",
        "address": "Lougheed Hwy",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Miss Jones",
        "address": "Barrie",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Caribbean Oxygen",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Trees Cannabis",
        "address": "Cook St Village",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Shoppers World",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Orillia",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Nature's Haze",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "YBH Green",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "T Cannabis",
        "address": "Rockland",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Happy Life Pot Shop",
        "address": "Sudbury",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Sherbrooke",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Cabbage Town",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "The 4SSSt",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "One Plant",
        "address": "Walker Road",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "ReLeaf NT",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "NT"
    },
    {
        "name": "The Bend Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Shivaa's Rose",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Trailblazer Cannabis Shop",
        "address": "Yellowknife",
        "owner": "Gord Hopkins",
        "province": "NT"
    },
    {
        "name": "Cloud 29",
        "address": "Windsor (Cabana Rd.)",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Dab Cannabis",
        "address": "Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Unity Cannabis Ltd",
        "address": "Williams Lake",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Nirvana Budz",
        "address": "Stoney Creek",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Honeycomb Cannabis",
        "address": "Victoria",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Fresh Bud Cannabis",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Peterborough",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "979 Bloor St W",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Cannabis House",
        "address": "Ambleside",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Forest City Marijuana",
        "address": "Dundas",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Airpoint",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "T Cannabis",
        "address": "Renfrew",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Dundas Cannabis",
        "address": "Woodstock",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Elliot Lake",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Collective Growers",
        "address": "Montreal Road",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Oh Joy Bliss Cannabis Inc.",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "King St",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Collective Grower's",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Canna Cabana",
        "address": "St. Paul",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Flamingo Cannabis",
        "address": "Main Street",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Blackstar Cannabis",
        "address": "Burnhamthorpe Road",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Jerry's Cannabis Co.",
        "address": "Lake Cowichan",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Mind Flower Cannabis Company",
        "address": "Toronto (King St W)",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Arnprior Cannabis",
        "address": "Arnprior",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Waterloo University",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Kasa Kana",
        "address": "Huntsville",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Kasa Kana",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Inspired Cannabis Co",
        "address": "Welland",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Culture Rising",
        "address": "Milton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Spot420",
        "address": "St Catharines",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Niagara Falls",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Kushys",
        "address": "Petawawa",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Trees Cannabis [formerly Corner Cannabis]",
        "address": "Port Union Rd",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Kushys",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Prairie Trichomes",
        "address": "Gimli",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Alaska Highway Cannabis Distributors",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "Sun Coast Cannabis Shoppe",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Spiritleaf",
        "address": "Canarama",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Mary J's Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Sativa Bliss",
        "address": "Cambridge Hespeler (Formerly Sweet Seven Cannabis Co.",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Sweet Seven Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Trees Cannabis",
        "address": "Etobicoke Bloor",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Grasshopper Retail Inc.",
        "address": "John Hart Hwy",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Flight Cannabis Co",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Flight Cannabis Co",
        "address": "Nanaimo",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "James Street Cannabis Co.",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Soul Rebel Cannabis Co. (Formerly Colours Cannabis)",
        "address": "Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Docks Cannabis (Formerly Trease Inc.)",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Shawville Blvd",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Bluebird Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Tilbury",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Lucid Cannabis",
        "address": "Jasper Ave",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Cambridge (Main Street)",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Flower Haze Cannabis Boutique",
        "address": "Ottawa Bank St",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Paradise Cannabis",
        "address": "Welland",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "HURBN Cannabis Company",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Interlake Reef Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Gather and Grow Recreational Cannabis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Paradise Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Cannabist Shop",
        "address": "London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Trees Cannabis [formerly MCannabis]",
        "address": "Etobicoke",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Bogarts Cannabis Shop",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Paramount Cannabis Co.",
        "address": "Orangeville",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "The Cannabist Shop",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Metro Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "A High Class Joint",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Paramount Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Sticky Nuggz Inc.",
        "address": "Toronto (Fort York Blvd)",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Bluebird Cannabis Co.",
        "address": "Ottawa (Manotick Main)",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Queen St West (Formerly Spiritleaf",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Waterloo",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Haight",
        "address": "Ashbury",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Strathroy",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Oxford",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Scarlet Fire Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "UPTOWN HEMPIRE",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Evanston",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "The Cannabist Shop",
        "address": "Guelph (Woodlawn Rd)",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Off The Stem [formerly Small Town Buds Inc.]",
        "address": "Kapuskasing",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Cannabis Link",
        "address": "Highbury Ave",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Plain Jane Cannabis",
        "address": "Falher",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Four20 Premium Market",
        "address": "Sylvan Lake",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Byron Village",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Equilibrium Cannabis",
        "address": "Smoky Lake",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "420 Love",
        "address": "Main & Gage",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Wellington Rd",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Honeypot Smoke Shop",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Mojo Cannabis",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "One Plant",
        "address": "North York",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "North Shore Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Shinybud Cannabis Co.",
        "address": "Blenheim",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Budding Creations",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "420 Love",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Budding Creations",
        "address": "Peachland",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "The Cabin Cannabis",
        "address": "Fairmont Hot Springs",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "SQDC",
        "address": "77028",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Seven Point Cannabis",
        "address": "Toronto",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Herbiculture (Scarborough North)",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77046",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Northbound Cannabis Co.",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Budssmoke",
        "address": "Burlington",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77045",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "One Plant",
        "address": "Thunder Bay",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Carlisle",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77048",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Barttowa Tree LTD.",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Rainbow on May",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77050",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Miss Jones",
        "address": "London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Miss Jones",
        "address": "King Street West",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77053",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Cannabuds",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Seven Points Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "SQDC",
        "address": "77058",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Your Local Cannabis",
        "address": "Newcastle",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "715 Danforth Ave",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77064",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Spiritleaf",
        "address": "Queen St East",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "HiBuzz Inc.",
        "address": "Financial Dr.",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "SQDC",
        "address": "77056",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "Tack'd Cannabis",
        "address": "Martensville",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "SQDC",
        "address": "77060",
        "owner": "Alison Currier",
        "province": "QC"
    },
    {
        "name": "THISEL",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "High Park Cannabis Co.",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Village Cannabis Co.",
        "address": "Port Dover",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Trees Cannabis [formerly Corner Cannabis]",
        "address": "Airport",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "One Eye's Weedery",
        "address": "Davidson",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Take Off Cannabis",
        "address": "North York",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "The Green Cloud Cannabis",
        "address": "Arthur",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "King Street W",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Old West Cannabis Company",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Lake City Cannabis",
        "address": "Richard Way",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Pape Ave",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Stash & Co",
        "address": "Port Hope",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Celestial Buds",
        "address": "146 Ave",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Toronto Cannabis Authority",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "The Cannabis Guys",
        "address": "Goderich",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Premium Cannabis",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Bluebird Cannabis Co.",
        "address": "Kanata North",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Pleasantrees",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "One Plant",
        "address": "St Thomas",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Green Panda Cannabis",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "North York",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Herb N Bud",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Video Cellar Tobacconist",
        "address": "Main St.",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Spot420",
        "address": "Etobicoke",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "High Ties Cannabis Store",
        "address": "Rideau St",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "59er",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Lake City Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Good Cookie",
        "address": "Malvern",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Spot 420",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Discounted Cannabis",
        "address": "Morinville",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Farmer Janes Cannabis Co.",
        "address": "Charleswood",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Arthur Street",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "The Bakery",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Trees Cannabis",
        "address": "Nanaimo",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "5 Buds",
        "address": "Kindersley",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Cost Cannabis",
        "address": "Etobicoke (Formerly The Cannabis Guys",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Sydney Mines",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Good Cookie",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Hit Pit",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Miss Jones",
        "address": "North Bay",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "One Eye's Weedery",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Cannabis Guys",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis Stop Inc.",
        "address": "Shelburne",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Moksha Cannabis",
        "address": "Toronto (Kenaston Gardens)",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Toronto (Queen St E) [Previously Nova]",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "TOP SHELF CANABIS",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Cannabis Street",
        "address": "Toronto",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Trees Cannabis [formerly Corner Cannabis]",
        "address": "Kennedy Rd",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Unplug Cannabis Co.",
        "address": "Ottawa (Carling Ave)",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "DAMA House",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Burlington (Fairview St) [Previously Nova]",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Growers Retail",
        "address": "Queensway",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "MOOLIGAI",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "The Bakery",
        "address": "Albert Street",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "123 Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "NSLC Cannabis",
        "address": "Novalea",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Discounted Cannabis",
        "address": "Beaumont",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Welton",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Bayers Lake",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Bridlewood Cannabis",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Mahone Bay",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "The Kure Cannabis Society",
        "address": "Deroche",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Berwick",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Trees Cannabis",
        "address": "5th Street",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "The Kure Cannabis Society",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Northern Helm Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis Xpress",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Capturing Eden",
        "address": "Minden",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Alexandria",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Brighton",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Inspired Cannabis Co",
        "address": "Saskatoon",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Spiritleaf",
        "address": "Ancaster",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Creekside Greens",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Cannabis 228",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Beach Corner Cannabis",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Cosmic Charlie's",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Cannabis House",
        "address": "Whitemud",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Sparkle Cannabis Company",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Miss Jones",
        "address": "Welland",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Nirvana Canna",
        "address": "Falconridge Blvd",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Rokeby Cannabis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "The Spot Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Green Leaf Cannabis",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Capturing Eden",
        "address": "Delhi",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Smoke Lab Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Numo Cannabis",
        "address": "137 Ave",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Green Merchant Cannabis Boutique",
        "address": "1077 Bloor",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Ace of Spades Weed Limited",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Lucid Cannabis",
        "address": "Tamarack Way",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "St Mary's",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "GreenHouse",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Lucid Cannabis",
        "address": "Grand Prairie",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Grand Cannabis",
        "address": "Fonthill",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Small Town Buds Cannabis",
        "address": "Carnduff",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "The Treehouse Cannabis Company",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Convenient Cannabis Inc.",
        "address": "Oyen",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Buddy Guy Cannabis Inc.",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "The Budstop Cannabis Inc.",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Village Bud (previously Bud Bank)",
        "address": "Lansdowne",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Highland Buds",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Farmer Jane Cannabis Co.",
        "address": "Henderson Hwy",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "GreenLeaf Cannabis",
        "address": "Lindsay",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Purple Moose Cannabis",
        "address": "North York (Bathurst)",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Epik Products Inc.",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Orleans",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Your Local Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis House",
        "address": "McConachie Blvd.",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Your Local Cannabis",
        "address": "Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Cannabis Station",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Wallaceburg",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Wainwright Cannabis",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Aylmer",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Speakeasy Cannabis Company",
        "address": "Penetanguishene",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co",
        "address": "TIllsonburg",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Grand Bend",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Windswept Cannabis",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Boomtown Bloom Cannabis",
        "address": "Shaunavon",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Northern Helm Cannabis",
        "address": "Kingston",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Capturing Eden",
        "address": "Turkey Point",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "The Old Cannabis Market",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Spiritleaf",
        "address": "McPhillips",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Capturing Eden",
        "address": "Port Burwell",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Nuna Link Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "NU"
    },
    {
        "name": "White Rabbit Cannabis",
        "address": "Mount Pleasant Rd",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Cost Cannabis",
        "address": "Brantford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "The Highway Cannabis Stop",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Farmer Janes Cannabis Co.",
        "address": "Plessis",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "The Cannabis Retail Store",
        "address": "LaSalle",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Tree Tops Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Tree Tops Cannabis Co.",
        "address": "London (Kilally Rd)",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "The Cannabis Retail Store",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Highlife Cannabis",
        "address": "Tillsonburg",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Stash & Co",
        "address": "London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Ozone Cannabis",
        "address": "23 Street",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Capturing Eden",
        "address": "Burford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "The We Store",
        "address": "Sarnia (Exmouth St)",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Canadian Greens",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Canadian Greens",
        "address": "Peace River",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Lunenburg",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Larry Uteck",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Out & About Cannabis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Wonderland Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Ottawa (Robertson Rd)",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Century Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "WEEDJAR",
        "address": "Broadview Ave",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Wonderland Cannabis",
        "address": "Adelaide Street",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Kraft Cannabis Co.",
        "address": "Guelph",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Flamingo Cannabis",
        "address": "Pembina Hwy",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Brampton (Seachart)",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Flowers Cannabis",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Q Bud",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The LaSalle Cannabis Company",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Bud Bar",
        "address": "Beltline",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Comox Valley Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Bean Cannabis Shop",
        "address": "Powell River",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Canna Cabana",
        "address": "36 street",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Cannabis Plus",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Spiritleaf",
        "address": "Ajax",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Greenlife Cannabis",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Cannabis Xpress",
        "address": "Wasaga Beach",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Beacon Hill",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "6 of Spade",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "One Plant.",
        "address": "College Square",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Discounted Cannabis",
        "address": "118 ave",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Lucky Leaf Cannabis",
        "address": "South",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Baker and Blazer Cannabis Co.",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Coastal Green",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Stash & Co",
        "address": "Rockland",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Village Bloomery",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "RC Bud Shop",
        "address": "Windsor",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Bean Cannabis Shop",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Greenlight District",
        "address": "Windsor",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Greenlight District",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis Stop Inc.",
        "address": "Markdale",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "High Ties Cannabis Store",
        "address": "Innes Rd. Ottawa",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Your Local Cannabis",
        "address": "Stouffville",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "CannaEra",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Star Buds",
        "address": "Barrie",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Star Buds- Angus",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Minerva Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Cumberland Street",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Perth Cannabis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Cosmo Canna",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Cannabis Sensation",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Fika Herbal Goods",
        "address": "Oshawa North",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Uplift Cannabis",
        "address": "Angus",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Elevated Minds",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Northern Budzz",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Northern Leaf Cannabis Company",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Eaton Centre",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Village Buds",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "High Ties Cannabis Store",
        "address": "Alexandria",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Jima Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "SPARQ Retail",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "WEEDJAR",
        "address": "York",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "SPARQ Retail",
        "address": "Peterborough (Chemong Rd)",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Red Rock Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Ottawa",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Neat Cannabis Company",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Cannabis Hut Ltd.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Cannabis Hut Ltd.",
        "address": "Victoria Park",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Lux Leaf",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Herb's Cannabis Shoppe",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Big River Cannabis",
        "address": "Calabogie",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Bud Supply",
        "address": "Boxcar",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Lux Leaf",
        "address": "South Edmonton",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "BC Cannabis Store",
        "address": "Burnaby",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Golden Tree Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Golden Tree Cannabis",
        "address": "Shelbourne",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Crossroads",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Spiritleaf",
        "address": "Sandalwood",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Chill Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "The Community Store",
        "address": "Wellington",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Leamington",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Fire & Flower Cannabis Co.",
        "address": "132 Front St. E Toronto",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Plug Canna6Is",
        "address": "St. Clair St.",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Plug Canna6is",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "The We Store",
        "address": "Windsor (Huron Church)",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Burntwood Cannabis Shop",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Offisde Cannabis",
        "address": "Victoria Ave. Niagara Falls",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Terps & Rec Cannabis",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Empress Walk",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Georgetown",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Bud's Cannabis Store",
        "address": "Milton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Toronto (Yonge St)",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Bud's Cannabis Store",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Purple Moose Cannabis",
        "address": "North York",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Northern Helm Cannabis",
        "address": "King St E",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Miss Jones",
        "address": "Val Caron",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Montrose Cannabis",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Civilian House of Cannabis",
        "address": "734 Queen W",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Forest City Marijuana",
        "address": "Belmont",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Best Buds Forever- Collingwood",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "The Herbary",
        "address": "Ottawa",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Happy Life Pot Shop",
        "address": "Lakeshore Dr. North Bay",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Best Buds Forever",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Happy Life Pot Shop",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Ganjika House",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Kindling Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "One Plant",
        "address": "Peterborough Landsdowne",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "CANNABIS & MORE",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Graffiti Cannabis",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "King's Cannabis",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Budssmoke",
        "address": "Pickering",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Baggy's Cannabis Store",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Kryptonite Cannabis",
        "address": "Port Hope",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Jackpot Cannabis",
        "address": "Toronto",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Heat + Herb Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "New Liskeard",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "T Cannabis NW",
        "address": "Kirkland Lake",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Good Nature Cannabis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "The Hippies Next Door",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Stok'd Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Scarborough (Kingston Rd)",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Discounted Cannabis",
        "address": "Walkerton",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Wiid Boutique- Rochdale",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Cannabis 151",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Albert Street North",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "VIP Cannabis Co.",
        "address": "Mitchell",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Cannabis Xpress",
        "address": "Brampton (Hurontario Street)",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Campbellford",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Hey Bud",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Hamilton (Rymal Road)",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Cannabis Boutique",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Discounted Cannabis",
        "address": "Chatham",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Cauldron Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Cannabis Boutique",
        "address": "Sherwood Park",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Cauldron Cannabis",
        "address": "Glencoe",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "The Grass Hut Inc",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Greenstar Cannabis Company",
        "address": "North Vancouver",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Cannabis Forest",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "The Hunny Pot Cannabis Co",
        "address": "Yonge St.",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Criss Cannabis",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "One Plant",
        "address": "Brockville",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Cabbage Brothers",
        "address": "Hamilton (Upper James St)",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Coast Salish Canna",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Kiaro",
        "address": "Kelowna",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Bluebird Cannabis Co",
        "address": "Winchester",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Go Green Cannabis Co",
        "address": "Gloucester",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Matchbox Cannabis",
        "address": "SSM (Queen Street)",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Keswick",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Oceanic Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "NL"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Fort Erie",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Tree Tops Cannabis Co.",
        "address": "Dorchester",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "The Dime on Wortley",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Oceanic Cannabis",
        "address": "St. John's",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Value Buds",
        "address": "Niagara  Falls",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Connoisseur Culture",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Oceanic Cannabis & Coffee",
        "address": "Stephenville",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Hanover",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Buzzed Buds",
        "address": "Ottawa",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Bud Runners",
        "address": "Cannington",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Oceanic Cannabis & Coffee",
        "address": "Channel-Port aux Basques",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Zephyr Cannabis",
        "address": "Merrickville",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Boomtown Bloom Cannabis",
        "address": "Wynyard",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Oceanic Cannabis & Coffee",
        "address": "Burin",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Barrie Essa Road",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Zephyr Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Oceanic Cannabis & Coffee",
        "address": "Whitbourne",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "The Hunny Pot Cannabis Co.",
        "address": "Burlington",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Boomtown Bloom Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "The Hollow Noggin",
        "address": "",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Canna Cabana",
        "address": "Eastgate",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Happy Life",
        "address": "Espanola",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Ashario",
        "address": "North York (Finch Ave)",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Albert St",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Chill Cannabis",
        "address": "Exeter",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Ashario",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Mary J's Cannabis",
        "address": "Orleans",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Taste Buds Cannabis",
        "address": "North York (Lawrence Ave.)",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Hurontario St.  Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Nature's Canopy House",
        "address": "Weston South",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Weedjar",
        "address": "Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "The Pot Spot",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Qunubu Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Stoney Creek",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Wellington Road London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Odyssey Cannabis",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Crafted Nugs Cannabis Company",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Sweet Releaf's Inc.",
        "address": "Brantford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Mystic'S Cannabis",
        "address": "1466 Main St. E Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "High Supply Cannabis Co.",
        "address": "Brantford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Tack'd Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "High Supply Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Neolitic",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Inspired Cannabis Co",
        "address": "Cobourg",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Social Cannabliss Inc",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Cannabis McNeely Ave",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Twist Cannabis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Fire & Flower",
        "address": "Idylwyld",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Indian Head Weed & Supply Co",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Mr. Dizzy Cannabis Store",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Cerenibis Canada",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "The True Dope Cannabis Shop",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "CannaB3",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cosmic Gardens",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "CannaB3",
        "address": "Lamont",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Rise Cannabis Company",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Stouffville (10th Line)",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Tumbleweed Cannabis Co.",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Budssmoke",
        "address": "Brantford",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "In Bloom Cannabis",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Hawkesbury",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Fika Herbal Goods",
        "address": "Kitchener (Fairview Park)",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Tumbleweed Cannabis Co.",
        "address": "Kerrobert",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Modernday Cannabis",
        "address": "Bathhurst",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Greenstone Cannabis Shop",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Tack'd Cannabis",
        "address": "Biggar",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Garden City Cannabis Co",
        "address": "Fort Erie",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Mary Jane's Lil Country Cannabis Store",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Bluebird Cannabis Co.",
        "address": "Ottawa (Hawthorne Rd.)",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Cosmic Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Budssmoke",
        "address": "Brampton (Davenfield)",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Mind Flower Cannabis Co.",
        "address": "Toronto (615 King St. W)",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Infinity Cannabis Chill Out Joint",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Lake Of The Woods Cannabis",
        "address": "Kenora (Main Street)",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Lake of the Woods Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Seoul Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "It's 4:20 Somewhere",
        "address": "Hay River",
        "owner": "Gord Hopkins",
        "province": "NT"
    },
    {
        "name": "La Canapa Boutique Inc",
        "address": "Granville Street",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Olympia Cannabis",
        "address": "Madoc",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "It's 4:20 Somewhere",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Leaf & Embers",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Yerba Buena Cannabis",
        "address": "Toronto (College St)",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Big River Cannabis",
        "address": "Rockland (Laurier Street)",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Delta 9 Cannabis",
        "address": "1719 Portage Ave",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "High Hopes Cannabis",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Flamingo Cannabis",
        "address": "St. James",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Cannabis Xpress",
        "address": "Wingham",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Chronzz Cannabis Shop",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Budtimez",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Go Green Cannabis Co",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Go Green Cannabis Co",
        "address": "Nepean",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Cannabis Xpress",
        "address": "Hampton",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Inspired Cannabis Co",
        "address": "Delta",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Tokyo Smoke",
        "address": " Richmond Road",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Holland Daze",
        "address": "Pickering",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Whatever name",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Cannabis Discounter",
        "address": "Hiller Rd",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Holland Daze",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Holland Daze",
        "address": "Wasaga Beach",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Canadian Greens",
        "address": "Fox Creek",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Spiritleaf",
        "address": "Seton",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Wake N' Bake Cannabis",
        "address": "119 Street",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Highlife",
        "address": "Espanola (Formerly Bananas",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Bean Cannabis Shop",
        "address": "Dallas Drive",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Bananas Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Highlife",
        "address": "Lasalle (Formerly Bananas",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "1923 Cannabis Co.",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Golden Harvest",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "T Cannabis",
        "address": "Tottenham",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Bob's Bud Emporium",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Bob's Bud Emporium",
        "address": "Elgin Centre",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Main Sreet Cannabis Co.",
        "address": "Lambeth",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Abraxas Cannabis Co.",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "WestCanna",
        "address": "Robson Street",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Wake N' Bake Cannabis",
        "address": "109 Ave",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "WestCanna",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Dank Cannabis",
        "address": "3 Ave",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "The Bakedery",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Heavenly Hemp",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Waterdown",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Happy Life",
        "address": "Val Caron",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Leaf Life",
        "address": "Beacon",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "High End Cannabis Co.",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "The Stash Spot Cannabis",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "The Olde Barber Cannabis Co.",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Canna Cabana",
        "address": "Sherwood Park",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "The Potterie Express Rycroft",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Bytown Budzz",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Eighth Cannabis",
        "address": "Coboconk",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Cannabis Discounter",
        "address": "St Albert",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Golden Tree Cannabis",
        "address": "Stirling",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "ERBN Green",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "J's Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Canna Cabana",
        "address": "Ancaster",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Grass Bar Cannabis",
        "address": "Meadow Lake",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Absolute Turner St.",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Pacificanna",
        "address": "Simcoe St",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Cornwall",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "BC Cannabis Store",
        "address": "North Vancouver",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "McNaughton",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Canadian Greens",
        "address": "Slave Lake",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Ronin Cannabis",
        "address": "Cambridge",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Plantlife",
        "address": "Ice District",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Ronin Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Harvest Cannabis Co",
        "address": "Caledonia",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Mary Jane on Penny Lane Onoway",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Pop's Cannabis",
        "address": "Big Bay Point",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Hidden Leaf Cannabis Co.",
        "address": "Lawrence Ave W",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Endo",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Buds 4 Less",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Oceanic Cannabis & Coffee",
        "address": "Clarenville",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Buds 4 Less",
        "address": "Orillia",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Oceanic Cannabis & Coffee",
        "address": "Sweetlands",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Buds 4 Less",
        "address": "Niagara Falls",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Trees",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Uplift Cannabis",
        "address": "Orillia",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Uplift Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Midland",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Parry Sound",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "One Plant",
        "address": "Shelburne",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "One Plant",
        "address": "Burlington",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "One Plant",
        "address": "Elmira",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Jima Cannabis",
        "address": "Vancouver",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Elk Valley Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Elk Valley Cannabis",
        "address": "Elkford",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Imagine Cannabis Co",
        "address": "Tsawwassen",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Imagine Cannabis Co",
        "address": "Delta",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "The Smoke and Leaf Ltd.",
        "address": "Palace Rd",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Seed and Stone",
        "address": "Hope",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "The Joint",
        "address": "Massey Road",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "ShinyBud Cannabis Co.",
        "address": "Kingston",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Hollybud Cannabis",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "G's Cannabis Corp",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Saint John Fairville",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Cannabis NB Corporation",
        "address": "Riverview",
        "owner": "Christopher Harris",
        "province": "NB"
    },
    {
        "name": "Pink Alien",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "The Green Eden",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Numo Cannabis",
        "address": "Central",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Canna Cabana",
        "address": "Fort St. John",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "Phoenix Cannabis",
        "address": "Waterloo",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "4Twenty Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": NaN
    },
    {
        "name": "Above The Clouds Cannabis- Scarlett Road",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Meadowood Cannabis",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Alpenglow Leaf",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "4Twenty Cannabis",
        "address": "Nanaimo St",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Sugar Cane Cannabis",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Imagine Cannabis Co",
        "address": "Coquitlam",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Spot420",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Chill Cannabis",
        "address": "Lucan",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Cannaverse",
        "address": "Picton",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Casa Bliss",
        "address": "Sudbury",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Valley Bud",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Discounted Cannabis",
        "address": "Howard Ave",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Nomade Cannabis",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Greentown Cannabis",
        "address": "Drouillard Rd",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Bud's Cannabis Store",
        "address": "Baldwin",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Bud Xpress",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Lady Leaf",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "We'D",
        "address": "Quigley Rd",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Blazeco Cannabis",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Rozbudz",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Clinton Cannabis",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Blue Sage Cannabis",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Electrical Banana",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Buds House",
        "address": "Barrie",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Cannabis Xpress",
        "address": "Pickering",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Cost Cannabis- Hamilton",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Cannaverse",
        "address": "Kitchener",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Paramount Cannabis Co.",
        "address": "London",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Blackstar Cannabis",
        "address": "Owen Sound",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Offside Cannabis",
        "address": "Port Perry",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Wild Flowerz",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Cantopia Cannabis Co.",
        "address": "Waterloo",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Bodega Boyz",
        "address": "Brampton",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "T Cannabis NW",
        "address": "Sioux Lookout",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Spark Cannabis",
        "address": "Coboconk",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "One Plant",
        "address": "Hamilton",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "6ix Cannabis",
        "address": "",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Insalata",
        "address": "Waterloo",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Gleichen Cannabis Store",
        "address": "",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Cannabis Fields",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Generation Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "The Local Leaf Cannabis",
        "address": "Coquitlam",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Toke Cannabis",
        "address": "Eglinton W",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "All Nations",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Happy Life",
        "address": "Algonquin Ave. North Bay",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Greenheart Flowers",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "T's Cannabis",
        "address": "",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Northern Lights Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Saskabuds Cannabis Humboldt",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Inspired Cannabis Co",
        "address": "1032 Robson St",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Cannabis Link",
        "address": "Springbank Dr",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Cannabis Life",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "AB"
    },
    {
        "name": "Fika Herbal Goods",
        "address": "Leslieville",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Goodvibes Cannabis of Crossfield",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Green Hills Cannabis Ltd",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Dope Cannabis",
        "address": "Calgary",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "cheeky's Cannabis Merchants",
        "address": "Kitsilano",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "The Grass Hut Cannabis Co.",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "Delta 9 Sargent",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "True North Cannabis Co.",
        "address": "Kapuskasing",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Cheekey's Cannabis Merchants",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "BC"
    },
    {
        "name": "Canna Cabana",
        "address": "Kamloops",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Sweet Weedz",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Kingston Cannabis inc",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Dynasty Market & Blooms",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Oil & Grass Cannabis",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Tough Bud Cannabis",
        "address": "Pickering",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "OEG Corporate",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": NaN
    },
    {
        "name": "Harvest Bud",
        "address": "",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Green Hills Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "NSLC Cannabis",
        "address": "Oxford",
        "owner": "Christopher Harris",
        "province": "NS"
    },
    {
        "name": "Hypnos Cannabis",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Hey Bud Retail Cannabis",
        "address": "Edmonton",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Lumen Leaf",
        "address": "",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Tokyo Smoke",
        "address": "Collingwood",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Lux Leaf Cannabis",
        "address": "Taradale",
        "owner": "Gord Hopkins",
        "province": "AB"
    },
    {
        "name": "Lux Leaf",
        "address": "Nolan Hill",
        "owner": "Jennifer Hall",
        "province": "AB"
    },
    {
        "name": "Tofino Seaweed",
        "address": "",
        "owner": "Sarah Douglas",
        "province": "BC"
    },
    {
        "name": "Canna Cabana",
        "address": "144 st",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Fire Sale Cannabis",
        "address": "Clareview",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Miss Jones",
        "address": "St Marys",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Budding Creations Cannabis Corp.",
        "address": "Clements Cres",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Bogarts Cannabis Shop",
        "address": "Lampton Mall rd",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Brunette Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "K.J.'s Best Cannabis",
        "address": "Coquitlam",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "B D Cannabis Store",
        "address": "",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Village Bloomery Quality Cannabis Quality People",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Coastal Green Cannabis",
        "address": "",
        "owner": "Pete Kelly",
        "province": "BC"
    },
    {
        "name": "Lhtako Grass",
        "address": "",
        "owner": "Becky Prete",
        "province": "BC"
    },
    {
        "name": "Delta 9",
        "address": "Marion",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Strictly Cannabis",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Cannabis House",
        "address": "178st",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Oceanic Cannabis & Coffee",
        "address": "St. John's O'Leary",
        "owner": "Lauren Halliday",
        "province": "NL"
    },
    {
        "name": "Budd Hutt",
        "address": "Cold Lake",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "VIP Cannabis Co.",
        "address": "",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Value Buds",
        "address": "Wyandotte",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Modern Day Cannabis",
        "address": "Cambridge",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Discounted Cannabis",
        "address": "Belle River",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Hemisphere Cannabis",
        "address": "East York",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Queen George Cannabis",
        "address": "Fennel",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Cannabis Xpress",
        "address": "Delhi",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Discounted Cannabis",
        "address": "Leamington",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Cost Cannabis",
        "address": "Dryden",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Chronicles Cannabis",
        "address": "Kitchener",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "Cost Cannabis",
        "address": "Corporate Office",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "CK Cananbis",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Bigfoot's Cannabis Inc.",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "Discounted Cannabis",
        "address": "Walker rd",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Pops Cannabis",
        "address": "Southdown Rd",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Highties Cannabis",
        "address": "Embrun",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Pakalolo",
        "address": "",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Pop's Cannabis",
        "address": "Bloor St",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "C Shop",
        "address": "Embrun",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "Sessions Cannabis",
        "address": "Goulais River",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Pure Plant Cannabis",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Buzzed Buds",
        "address": "Mississauga",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Its 4:20 Somewhere",
        "address": "Nimpo Lake",
        "owner": "Jean-Pascal Fortier",
        "province": "BC"
    },
    {
        "name": "Cabane A Joe",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Fat Panda Regent",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Discounted Cannabis",
        "address": "Front rd",
        "owner": "Chelsea Slade",
        "province": "ON"
    },
    {
        "name": "Quick 7",
        "address": "Ten Convenience Store",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Hollander Motor Hotel",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Border Town Buds Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Value Buds",
        "address": "2546 Finch",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Pickering ( Dixie Rd)",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Bud Runners Cannabis",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Longbottom Leaf",
        "address": "",
        "owner": "Mike Couch",
        "province": "ON"
    },
    {
        "name": "T.O. Smokes",
        "address": "",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Cannabis Spot",
        "address": "77th St",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Plantlife",
        "address": "Hiller Rd",
        "owner": "Ashley Newlands",
        "province": "AB"
    },
    {
        "name": "Holland Daze",
        "address": "Scarborough",
        "owner": "Victoria Jakovljevic",
        "province": "ON"
    },
    {
        "name": "Bobo's Budz",
        "address": "",
        "owner": "Jimmy Miles",
        "province": "AB"
    },
    {
        "name": "Moksha Cannabis",
        "address": "Scarborough",
        "owner": "Redmond Stiller",
        "province": "ON"
    },
    {
        "name": "Insalata",
        "address": "Thunder Bay",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Rolling Cannabis",
        "address": "",
        "owner": "Tyler May",
        "province": "ON"
    },
    {
        "name": "Happy Way Cannabis",
        "address": "",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Cantopia Cannabis Co.- Dupont St",
        "address": "",
        "owner": "Kyle Hewitt",
        "province": "ON"
    },
    {
        "name": "Session Cannabis",
        "address": "South Porcupine",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "South River Buds",
        "address": "",
        "owner": "Ricky Allen",
        "province": "ON"
    },
    {
        "name": "Goode Vibes Cannabis",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "VIP Cannabis Co",
        "address": "Petersburg",
        "owner": "Drake Ruttle",
        "province": "ON"
    },
    {
        "name": "One Stop Cannabis",
        "address": "Oshawa",
        "owner": "Jennifer Burton",
        "province": "ON"
    },
    {
        "name": "Pop's Cannabis Co.",
        "address": "Pembroke",
        "owner": "Jeff Mitchell",
        "province": "ON"
    },
    {
        "name": "The Cannabis Vault",
        "address": "Lundar",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Video Cellar Tobacconist",
        "address": "Watt",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Parrot Pot Shop",
        "address": "Corydon Ave",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Second Fiddle Cannabis",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Fire & Flower",
        "address": "330 Portage",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Miss Mary Jane's Cannabis Shop",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "WowKPow Retail",
        "address": "Inkster",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Interlake C Store",
        "address": "",
        "owner": "Cort Werestiuk",
        "province": "MB"
    },
    {
        "name": "Wow World of Weed",
        "address": "",
        "owner": "Kyle Mcmurtry",
        "province": "ON"
    },
    {
        "name": "Hunny Pot Cannabis Co.",
        "address": "Mississauga",
        "owner": "Stephanie Cristini",
        "province": "ON"
    },
    {
        "name": "Wild West Weed Co.",
        "address": "Kindersley",
        "owner": "Atul Kulkarni",
        "province": NaN
    },
    {
        "name": "The Buzz Barn Cannabis Inc.",
        "address": "Langham",
        "owner": "Atul Kulkarni",
        "province": NaN
    },
    {
        "name": "Squirrelly Shirley's Cannabis Store",
        "address": "Leader",
        "owner": "Atul Kulkarni",
        "province": NaN
    },
    {
        "name": "Tumbleweed Cannabis",
        "address": "Macklin",
        "owner": "Atul Kulkarni",
        "province": NaN
    },
    {
        "name": "Tokyo Smoke",
        "address": "Melville",
        "owner": "Atul Kulkarni",
        "province": NaN
    },
    {
        "name": "Tokyo Smoke",
        "address": "Meadow Lake",
        "owner": "Atul Kulkarni",
        "province": NaN
    },
    {
        "name": "Canna Cabana",
        "address": "Moose Jaw",
        "owner": "Atul Kulkarni",
        "province": NaN
    },
    {
        "name": "Reds Cannabis",
        "address": "Nipawin",
        "owner": "Atul Kulkarni",
        "province": NaN
    },
    {
        "name": "Norquay Cannabis",
        "address": "Norquay",
        "owner": "Atul Kulkarni",
        "province": NaN
    },
    {
        "name": "Canna Green Cannabis",
        "address": "Regina",
        "owner": "Atul Kulkarni",
        "province": NaN
    },
    {
        "name": "Dewdney Budz",
        "address": "Regina",
        "owner": "Atul Kulkarni",
        "province": NaN
    },
    {
        "name": "The Green Moon",
        "address": "Curated Cannabis",
        "owner": "Atul Kulkarni",
        "province": NaN
    },
    {
        "name": "Into the Weeds Cannabis",
        "address": "Big River",
        "owner": "Atul Kulkarni",
        "province": "SK"
    },
    {
        "name": "5 Buds",
        "address": "",
        "owner": "Atul Kulkarni",
        "province": NaN
    }
];