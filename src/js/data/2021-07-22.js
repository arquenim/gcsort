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
    img: "GT5Vtm0.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Amy",
    img: "jgdc8WX.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Arme",
    img: "m5hY7Vc.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Jin",
    img: "p6DmkgX.png",
    opts: {
          species: ["human", "deity"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Edel",
    img: "E9TXQ2B.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Kanavan",
    img: "datkBuY.png",
    opts: {
          species: ["human"],
          status: ["dead"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Europa",
    img: "Sf2hl3s.png",
    opts: {
          species: ["celestial"],
          status: ["alive"],
          region: ["celestia"],
          gender: ["girl"],
    }
  },
  {
    name: "Harpe",
    img: "udrnGI4.png",
    opts: {
          species: ["human"],
          status: ["dead"],
          region: ["aernas", "underworld"],
          gender: ["boy"],
    }
  },
  {
    name: "Hwarin",
    img: "dMKnGuc.png",
    opts: {
          species: ["haros"],
          status: ["alive"],
          region: ["underworld"],
          gender: ["girl"],
    }
  },
  {
    name: "Lass",
    img: "SYr1j6c.png",
    opts: {
          species: ["human", "haros"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Ley",
    img: "OEfm8gh.png",
    opts: {
          species: ["demon"],
          status: ["alive"],
          region: ["elyos"],
          gender: ["girl"],
    }
  },
  {
    name: "Lire",
    img: "877P6xf.png",
    opts: {
          species: ["elf"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Mari",
    img: "V7Luo14.png",
    opts: {
          species: ["human", "celestial"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Rin",
    img: "zXhec4b.png",
    opts: {
          species: ["human", "deity"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Ronan",
    img: "qE5tpgR.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Serdin",
    img: "X9s3PVB.png",
    opts: {
          species: ["human"],
          status: ["dead"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Sieghart",
    img: "2UpBxpJ.png",
    opts: {
          species: ["human", "deity"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Veigas",
    img: "oPge3Dx.png",
    opts: {
          species: ["demon"],
          status: ["alive"],
          region: ["elyos"],
          gender: ["boy"],
    }
  },
  {
    name: "Dio",
    img: "e4lg7eZ.png",
    opts: {
          species: ["demon"],
          status: ["alive"],
          region: ["elyos"],
          gender: ["boy"],
    }
  },
  {
    name: "Asin",
    img: "tcC6zAu.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Grandiel",
    img: "rpFtYuO.png",
    opts: {
          species: ["elf"],
          status: ["alive"],
          region: ["aernas", "kricktria"],
          gender: ["boy"],
    }
  },
  {
    name: "Io",
    img: "F2PC2Yc.png",
    opts: {
          species: ["celestial"],
          status: ["alive"],
          region: ["celestia"],
          gender: ["girl"],
    }
  },
  {
    name: "Lapis",
    img: "0cgjjad.png",
    opts: {
          species: ["celestial", "demon", "abaddon"],
          status: ["alive"],
          region: ["elyos"],
          gender: ["girl"],
    }
  },
  {
    name: "Lime",
    img: "zNHdrOC.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Nelia",
    img: "QkI3BQZ.png",
    opts: {
          species: ["demon"],
          status: ["alive"],
          region: ["elyos", "underworld"],
          gender: ["girl"],
    }
  },
  {
    name: "Rufus",
    img: "kxveeRQ.png",
    opts: {
          species: ["haros"],
          status: ["alive"],
          region: ["underworld", "elyos"],
          gender: ["boy"],
    }
  },
  {
    name: "Ryan",
    img: "Jh1LYp0.png",
    opts: {
          species: ["elf"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Tia",
    img: "JzbFiA7.png",
    opts: {
          species: ["spirit"],
          status: ["alive"],
          region: ["spworld"],
          gender: ["girl"],
    }
  },
  {
    name: "Werner",
    img: "nICzZvF.png",
    opts: {
          species: ["demon"],
          status: ["dead"],
          region: ["elyos"],
          gender: ["boy"],
    }
  },
  {
    name: "Zero",
    img: "66X2SOa.png",
    opts: {
          species: ["demon"],
          status: ["alive"],
          region: ["elyos"],
          gender: ["boy"],
    }
  },
  {
    name: "Calisto",
    img: "ppbhvDx.png",
    opts: {
          species: ["celestial"],
          status: ["alive"],
          region: ["celestia"],
          gender: ["girl"],
    }
  },
  {
    name: "Cindy",
    img: "Vkbvr4s.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["kricktria", "aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Ragna",
    img: "JzbFiA7.png",
    opts: {
          species: ["spirit"],
          status: ["alive"],
          region: ["spworld"],
          gender: ["girl"],
    }
  }    
];
