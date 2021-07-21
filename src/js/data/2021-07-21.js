dataSetVersion = "2021-07-21"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
    img: "XUUZIvE.png",
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
    img: "S3xf2m9.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Jin",
    img: "b76FtTF.png",
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
    img: "cNnIub2.png",
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
    img: "Sf2hl3s.png",
    opts: {
          species: ["human"],
          status: ["dead"],
          region: ["aernas", "underworld"],
          gender: ["boy"],
    }
  },
  {
    name: "Hwarin",
    img: "gelsXaP.png",
    opts: {
          species: ["haros"],
          status: ["alive"],
          region: ["underworld"],
          gender: ["girl"],
    }
  },
  {
    name: "Lass",
    img: "rfuMVLF.png",
    opts: {
          species: ["human", "haros"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Ley",
    img: "Zj6N2Ti.png",
    opts: {
          species: ["demon"],
          status: ["alive"],
          region: ["elyos"],
          gender: ["girl"],
    }
  },
  {
    name: "Lire",
    img: "PPUKwHc.png",
    opts: {
          species: ["elf"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Mari",
    img: "PJ4qxyI.png",
    opts: {
          species: ["human", "celestial"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Rin",
    img: "kukmlsg.png",
    opts: {
          species: ["human", "deity"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Ronan",
    img: "OXXeYRW.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Serdin",
    img: "x83xqIV.png",
    opts: {
          species: ["human"],
          status: ["dead"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Sieghart",
    img: "pCLwscQ.png",
    opts: {
          species: ["human", "deity"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Veigas",
    img: "Qv4k31X.png",
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
    img: "NG5XObh.png",
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
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Io",
    img: "CLGAFeu.png",
    opts: {
          species: ["celestial"],
          status: ["alive"],
          region: ["celestia"],
          gender: ["girl"],
    }
  },
  {
    name: "Lapis",
    img: "0u5VyOK.png",
    opts: {
          species: ["celestial", "demon", "abaddon"],
          status: ["alive"],
          region: ["elyos"],
          gender: ["girl"],
    }
  },
  {
    name: "Lime",
    img: "pCZYk2F.png",
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
    img: "qcvtIjM.png",
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
    img: "W8ab3bm.png",
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
    img: "F1A9OhL.png",
    opts: {
          species: ["demon"],
          status: ["alive"],
          region: ["elyos"],
          gender: ["boy"],
    }
  },
  {
    name: "Calisto",
    img: "zfmK6L4.png",
    opts: {
          species: ["celestial"],
          status: ["alive"],
          region: ["celestia"],
          gender: ["girl"],
    }
  }
];
