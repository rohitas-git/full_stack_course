const rewardsDB = {
    slime: { gold: 5, xp: 3 },
    goblin: { gold: 12, xp: 8 },
    dragon: { gold: 100, xp: 50 },
    rat: { gold: 1, xp: 1 },
};


function fetchReward(id) {
    return new Promise((resolve) => {
        const reward = rewardsDB[id] || { gold: 0, xp: 0 };
        const delay = 5 + Math.floor(Math.random() * 10);
        setTimeout(() => {
            resolve(reward);
        }, delay);
    });
}

async function totalGold(rewardIds) {
    let gold = 0;
    let promises = [];
    for (const id of rewardIds) {
        const promise = await fetchReward(id);
        promises.push(promise);
    }
    let rewards = await Promise.all(promises);
    for (const reward of rewards) {
        gold += reward.gold;
    }
    return gold;
}

export { fetchReward, totalGold };
