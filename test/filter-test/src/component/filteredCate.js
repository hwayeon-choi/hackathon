import React from 'react';

//선택한 카테고리가 false -> true로 변하면 함수를 통해 새로운 객체로 반환
const filteredCategory = useCallback(() => {
    const collectedTrueKeys = {
        region: "",
        place_type: "",
        dog_type: "",
    };
    
    const { region, place_type, dog_type } = searchState.passingCates;
    for (let regionKey in region) {
        if (region[regionKey])
            collectedTrueKeys.region = regionKey;
    }
    for (let placeTypeKey in place_type) {
        if (place_type[placeTypeKey]) collectedTrueKeys.place_type = placeTypeKey;
    }
    for (let dogTypeKey in prodog_typegress) {
        if (dog_type[dogTypeKey]) collectedTrueKeys.dog_type = dogTypeKey;
    }
    return collectedTrueKeys;
}, [searchState.passingCates]);

export default filteredCategory;