dataSetVersion = "2021-07-22"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
    name: "Filter by Species",
    key: "species",
    tooltip: "Check this to filter by character species.",
    checked: false,
    sub: [
         { name: "Humans", key: "human" },
         { name: "Celestials", key: "celestial" },
         { name: "Elvens", key: "elf" },
         { name: "Demons", key: "demon" },
         { name: "Haros", key: "haros" },
         { name: "Spirits", key: "spirit" },
         { name: "Abaddon", key: "abaddon" },
         { name: "Deities", key: "deity" }
         ]
  },
  {
    name: "Filter by Status",
    key: "status",
    tooltip: "Check this to filter by alive or deceased status.",
    checked: false,
    sub: [
         { name: "Alive", key: "alive" },
         { name: "Deceased", key: "dead" }
         ]
  },
  {
    name: "Filter by Region",
    key: "region",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [
         { name: "Aernas", key: "aernas" },
         { name: "Elyos", key: "elyos" },
         { name: "Kricktria", key: "kricktria" },
         { name: "Underworld", key: "underworld" },
         { name: "Celestia", key: "celestia" },
         { name: "Spirit World", key: "spworld" },
         ]
  },
  {
    name: "Filter by Gender",
    key: "gender",
    tooltip: "Check this to filter all characters by gender.",
    checked: false,
    sub: [
         { name: "Male", key: "boy" },
         { name: "Female", key: "girl" }
         ]
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Elesis",
    img: "RMzlgCY.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Amy",
    img: "S0BOgym.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Arme",
    img: "vjATSyX.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Jin",
    img: "rbCQXzD.png",
    opts: {
          species: ["human", "deity"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Edel",
    img: "mY3UZB8.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Kanavan",
    img: "OsAWqLf.png",
    opts: {
          species: ["human"],
          status: ["dead"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Europa",
    img: "FqqB5D6.png",
    opts: {
          species: ["celestial"],
          status: ["alive"],
          region: ["celestia"],
          gender: ["girl"],
    }
  },
  {
    name: "Harpe",
    img: "1SwXKKz.png",
    opts: {
          species: ["human"],
          status: ["dead"],
          region: ["aernas", "underworld"],
          gender: ["boy"],
    }
  },
  {
    name: "Hwarin",
    img: "GYzei63.png",
    opts: {
          species: ["haros"],
          status: ["alive"],
          region: ["underworld"],
          gender: ["girl"],
    }
  },
  {
    name: "Lass",
    img: "egPBJ2m.png",
    opts: {
          species: ["human", "haros"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Ley",
    img: "KcQxB5m.png",
    opts: {
          species: ["demon"],
          status: ["alive"],
          region: ["elyos"],
          gender: ["girl"],
    }
  },
  {
    name: "Lire",
    img: "2u2ju55.png",
    opts: {
          species: ["elf"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Mari",
    img: "SzDgzhT.png",
    opts: {
          species: ["human", "celestial"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Rin",
    img: "ljIaNv0.png",
    opts: {
          species: ["human", "deity"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Ronan",
    img: "ND19yx3.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Serdin",
    img: "cFiAC0l.png",
    opts: {
          species: ["human"],
          status: ["dead"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Sieghart",
    img: "25Jxfpp.png",
    opts: {
          species: ["human", "deity"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Veigas",
    img: "CZZxPAF.png",
    opts: {
          species: ["demon"],
          status: ["alive"],
          region: ["elyos"],
          gender: ["boy"],
    }
  },
  {
    name: "Dio",
    img: "gDFcL40.png",
    opts: {
          species: ["demon"],
          status: ["alive"],
          region: ["elyos"],
          gender: ["boy"],
    }
  },
  {
    name: "Asin",
    img: "JfoFsnv.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Grandiel",
    img: "DQQ1wuL.png",
    opts: {
          species: ["elf"],
          status: ["alive"],
          region: ["aernas", "kricktria"],
          gender: ["boy"],
    }
  },
  {
    name: "Io",
    img: "dBQBZ7a.png",
    opts: {
          species: ["celestial"],
          status: ["alive"],
          region: ["celestia"],
          gender: ["girl"],
    }
  },
  {
    name: "Lapis",
    img: "gQO2B1b.png",
    opts: {
          species: ["celestial", "demon", "abaddon"],
          status: ["alive"],
          region: ["elyos"],
          gender: ["girl"],
    }
  },
  {
    name: "Lime",
    img: "QROzZMD.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Nelia",
    img: "GZEbi1K.png",
    opts: {
          species: ["demon"],
          status: ["alive"],
          region: ["elyos", "underworld"],
          gender: ["girl"],
    }
  },
  {
    name: "Rufus",
    img: "TAdbSG2.png",
    opts: {
          species: ["haros"],
          status: ["alive"],
          region: ["underworld", "elyos"],
          gender: ["boy"],
    }
  },
  {
    name: "Ryan",
    img: "0qOR2et.png",
    opts: {
          species: ["elf"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Tia",
    img: "LAJik9L.png",
    opts: {
          species: ["spirit"],
          status: ["alive"],
          region: ["spworld"],
          gender: ["girl"],
    }
  },
  {
    name: "Werner",
    img: "ngE1C1O.png",
    opts: {
          species: ["demon"],
          status: ["dead"],
          region: ["elyos"],
          gender: ["boy"],
    }
  },
  {
    name: "Zero",
    img: "lzjhnf8.png",
    opts: {
          species: ["demon"],
          status: ["alive"],
          region: ["elyos"],
          gender: ["boy"],
    }
  },
  {
    name: "Calisto",
    img: "aBWhdzs.png",
    opts: {
          species: ["celestial"],
          status: ["alive"],
          region: ["celestia"],
          gender: ["girl"],
    }
  },
  {
    name: "Cindy",
    img: "cReyXSZ.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["kricktria", "aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Ragna",
    img: "4WhFsmv.png",
    opts: {
          species: ["spirit"],
          status: ["alive"],
          region: ["spworld"],
          gender: ["girl"],
    }
  },
  {
    name: "Myst",
    img: "2xWwKeL.png",
    opts: {
          species: ["celestial", "demon", "abaddon"],
          status: ["alive"],
          region: ["elyos"],
          gender: ["boy"],
    }
  } 
];
