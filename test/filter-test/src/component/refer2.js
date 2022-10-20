const [searchState, setSearchState] = useState({
    passingTags: {
      categoryName: {
        EXERCISE: false,
        NODRINKNOSMOKE: false,
        LIVINGHABITS: false,
      },
      tags: {
        1: false,
        2: false,
        3: false,
        4: false,
      },
      // 1 = 진행 예정 2 = 진행중
      progress: {
        1: false,
        2: false,
      },
    },
  });
  
const allFilterClickListener = (e, filterProp) => {
    let name = e.target.textContent;
    if (name === "금연금주") {
      name = "NODRINKNOSMOKE";
    } else if (name === "운동") {
      name = "EXERCISE";
    } else if (name === "생활챌린지") {
      name = "LIVINGHABITS";
    } else if (name === "1주") {
      name = 1;
    } else if (name === "2주") {
      name = 2;
    } else if (name === "3주") {
      name = 3;
    } else if (name === "4주 이상") {
      name = 4;
    } else if (name === "진행 예정") {
      name = 1;
    } else if (name === "진행중") {
      name = 2;
    } else {
      name = e.target.textContent;
    }

setSearchState({
  passingTags: {
    ...searchState.passingTags,
    [filterProp]: {
      [name]: !searchState.passingTags[filterProp][name],
    },
  },
});

};