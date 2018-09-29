const categories = {
  money: [
    {
      value: 20000,
      weight: 8
    },
    {
      value: 30000,
      weight: 7
    },
    {
      value: 40000,
      weight: 6
    },
    {
      value: 50000,
      weight: 5
    },
    {
      value: 75000,
      weight: 4
    },
    {
      value: 100000,
      weight: 3
    },
    {
      value: 125000,
      weight: 2
    },
    {
      value: 150000,
      weight: 1
    }
  ],
  ethnicity: [
    {
      value: "Chinese",
      weight: 1
    },
    {
      value: "Korean",
      weight: 1
    },
    {
      value: "Japanese",
      weight: 1
    },
    {
      value: "Vietnamese",
      weight: 1
    },
    {
      value: "Filipino",
      weight: 1
    },
    {
      value: "Greek",
      weight: 1
    },
    {
      value: "British",
      weight: 1
    },
    {
      value: "Cuban",
      weight: 1
    },
    {
      value: "Indian",
      weight: 1
    },
    {
      value: "Middle Eastern",
      weight: 1
    },
    {
      value: "White",
      weight: 1
    },
    {
      value: "Arican American",
      weight: 1
    },
    {
      value: "Native American",
      weight: 1
    },
    {
      value: "Hispanic",
      weight: 1
    },
    {
      value: "Arab",
      weight: 1
    },
    {
      value: "Pacific Islander",
      weight: 1
    },
    {
      value: "African",
      weight: 1
    },
    {
      value: "Jewish",
      weight: 1
    },
    {
      value: "Irish",
      weight: 1
    },
    {
      value: "Multiracial",
      weight: 1
    },
    {
      value: "Russian",
      weight: 1
    },
    {
      value: "Brazilian",
      weight: 1
    }
  ],
  style: [
    {
      value: "Family of 3",
      weight: 6
    },
    {
      value: "Family of 4",
      weight: 5
    },
    {
      value: "Family of 5",
      weight: 4
    },
    {
      value: "Family of 6",
      weight: 3
    },
    {
      value: "Family of 7",
      weight: 2
    },
    {
      value: "Family of 8",
      weight: 1
    },
    {
      value: "Couple (Just Dating)",
      weight: 4.5
    },
    {
      value: "Couple (Newlyweds)",
      weight: 4.5
    },
    {
      value: "Couple (Middle Aged)",
      weight: 4.5
    },
    {
      value: "Couple (Elderly)",
      weight: 4.5
    },
    {
      value: "Brother/Sister",
      weight: 4.5
    },
    {
      value: "Sister/Sister",
      weight: 4.5
    },
    {
      value: "Your Choice (1 Sim)",
      weight: 8
    },
    {
      value: "Your Choice (2 Sims)",
      weight: 7
    },
    {
      value: "Your Choice (3 Sims)",
      weight: 6
    },
    {
      value: "Your Choice (4 Sims)",
      weight: 5
    },
    {
      value: "Your Choice (5 Sims)",
      weight: 4
    },
    {
      value: "Your Choice (6 Sims)",
      weight: 3
    },
    {
      value: "Your Choice (7 Sims)",
      weight: 2
    },
    {
      value: "Your Choice (8 Sims)",
      weight: 1
    }
  ]
};

window.generateHousehold = function() {
  let result = {};
  for (let name in categories) {
    const total = categories[name].reduce(
      (acc, curr) => (acc += curr.weight),
      0
    );
    let randomWeight = Number.parseInt(Math.random() * total);
    for (let i = 0; randomWeight > 0; i++) {
      randomWeight = randomWeight - categories[name][i].weight;
      if (randomWeight <= 0) {
        result[name] = categories[name][i].value;
      }
    }
  }
  return result;
};
