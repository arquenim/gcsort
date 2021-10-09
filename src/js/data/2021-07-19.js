dataSetVersion = "2021-07-19"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
    img: "taKmQDU.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Amy",
    img: "vnfPqQg.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Arme",
    img: "CSboYnf.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Jin",
    img: "VlcH8wZ.png",
    opts: {
          species: ["human", "deity"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Edel",
    img: "3sorRvh.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Kanavan",
    img: "mg5gjaL.png",
    opts: {
          species: ["human"],
          status: ["dead"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Europa",
    img: "hDL90u6.png",
    opts: {
          species: ["celestial"],
          status: ["alive"],
          region: ["celestia"],
          gender: ["girl"],
    }
  },
  {
    name: "Harpe",
    img: "2vsPWBH.png",
    opts: {
          species: ["human"],
          status: ["dead"],
          region: ["aernas", "underworld"],
          gender: ["boy"],
    }
  },
  {
    name: "Hwarin",
    img: "sLD8Yx6.png",
    opts: {
          species: ["haros"],
          status: ["alive"],
          region: ["underworld"],
          gender: ["girl"],
    }
  },
  {
    name: "Lass",
    img: "QGO4OGU.png",
    opts: {
          species: ["human", "haros"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Ley",
    img: "aSEXE6j.png",
    opts: {
          species: ["demon"],
          status: ["alive"],
          region: ["elyos"],
          gender: ["girl"],
    }
  },
  {
    name: "Lire",
    img: "QwkOrHZ.png",
    opts: {
          species: ["elf"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Mari",
    img: "5LhwxzQ.png",
    opts: {
          species: ["human", "celestial"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Rin",
    img: "lPNBlJ6.png",
    opts: {
          species: ["human", "deity"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Ronan",
    img: "qfVvTSu.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Serdin",
    img: "vy2JSkx.png",
    opts: {
          species: ["human"],
          status: ["dead"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Sieghart",
    img: "kAhxRMC.png",
    opts: {
          species: ["human", "deity"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Veigas",
    img: "QoAQOGo.png",
    opts: {
          species: ["demon"],
          status: ["alive"],
          region: ["elyos"],
          gender: ["boy"],
    }
  },
  {
    name: "Dio",
    img: "PtX1YH7.png",
    opts: {
          species: ["demon"],
          status: ["alive"],
          region: ["elyos"],
          gender: ["boy"],
    }
  },
  {
    name: "Asin",
    img: "PrjarIj.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Grandiel",
    img: "FGxuqR5.png",
    opts: {
          species: ["elf"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Io",
    img: "PJTE54w.png",
    opts: {
          species: ["celestial"],
          status: ["alive"],
          region: ["celestia"],
          gender: ["girl"],
    }
  },
  {
    name: "Lapis",
    img: "Avz5QDZ.png",
    opts: {
          species: ["celestial", "demon", "abaddon"],
          status: ["alive"],
          region: ["elyos"],
          gender: ["girl"],
    }
  },
  {
    name: "Lime",
    img: "zhA35nK.png",
    opts: {
          species: ["human"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["girl"],
    }
  },
  {
    name: "Nelia",
    img: "yCxcjBc.png",
    opts: {
          species: ["demon"],
          status: ["alive"],
          region: ["elyos", "underworld"],
          gender: ["girl"],
    }
  },
  {
    name: "Rufus",
    img: "gg8L8lt.png",
    opts: {
          species: ["haros"],
          status: ["alive"],
          region: ["underworld", "elyos"],
          gender: ["boy"],
    }
  },
  {
    name: "Ryan",
    img: "y5JS6Ep.png",
    opts: {
          species: ["elf"],
          status: ["alive"],
          region: ["aernas"],
          gender: ["boy"],
    }
  },
  {
    name: "Tia",
    img: "EB4DPXP.png",
    opts: {
          species: ["spirit"],
          status: ["alive"],
          region: ["spworld"],
          gender: ["girl"],
    }
  },
  {
    name: "Werner",
    img: "C6dHCOA.png",
    opts: {
          species: ["demon"],
          status: ["dead"],
          region: ["elyos"],
          gender: ["boy"],
    }
  },
  {
    name: "Zero",
    img: "dincOoJ.png",
    opts: {
          species: ["demon"],
          status: ["alive"],
          region: ["elyos"],
          gender: ["boy"],
    }
  }
];
