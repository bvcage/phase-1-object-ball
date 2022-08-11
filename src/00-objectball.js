function gameObject () {
    const gameObj = {
        "home" : {
            "team name" : "Brooklyn Nets",
            "colors" : ["black", "white"],
            "players" : {
                "Alan Anderson" : {
                    "number": 0,
                    "shoe" : 16,
                    "points" : 22,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 3,
                    "blocks" : 1,
                    "slamDunks" : 1
                },
                "Reggie Evans" : {
                    "number": 30,
                    "shoe" : 14,
                    "points" : 12,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 12,
                    "blocks" : 12,
                    "slamDunks" : 7
                },
                "Brook Lopez" : {
                    "number": 11,
                    "shoe" : 17,
                    "points" : 17,
                    "rebounds" : 19,
                    "assists" : 10,
                    "steals" : 3,
                    "blocks" : 1,
                    "slamDunks" : 15
                },
                "Mason Plumlee" : {
                    "number": 1,
                    "shoe" : 19,
                    "points" : 26,
                    "rebounds" : 12,
                    "assists" : 6,
                    "steals" : 3,
                    "blocks" : 8,
                    "slamDunks" : 5
                },
                "Jason Terry" : {
                    "number": 31,
                    "shoe" : 15,
                    "points" : 19,
                    "rebounds" : 2,
                    "assists" : 2,
                    "steals" : 4,
                    "blocks" : 11,
                    "slamDunks" : 1
                }
            },
        },
        "away" : {
            "team name" : "Charlotte Hornets",
            "colors" : ["turquoise", "purple"],
            "players" : {
                "Jeff Adrien" : {
                    "number": 4,
                    "shoe" : 18,
                    "points" : 10,
                    "rebounds" : 1,
                    "assists" : 1,
                    "steals" : 2,
                    "blocks" : 7,
                    "slamDunks" : 2
                },
                "Bismak Biyombo" : {
                    "number": 0,
                    "shoe" : 16,
                    "points" : 12,
                    "rebounds" : 4,
                    "assists" : 7,
                    "steals" : 7,
                    "blocks" : 15,
                    "slamDunks" : 10
                },
                "DeSagna Diop" : {
                    "number": 2,
                    "shoe" : 14,
                    "points" : 24,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 4,
                    "blocks" : 5,
                    "slamDunks" : 5
                },
                "Ben Gordon" : {
                    "number": 8,
                    "shoe" : 15,
                    "points" : 33,
                    "rebounds" : 3,
                    "assists" : 2,
                    "steals" : 1,
                    "blocks" : 1,
                    "slamDunks" : 0
                },
                "Brendan Haywood" : {
                    "number": 33,
                    "shoe" : 15,
                    "points" : 6,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 22,
                    "blocks" : 5,
                    "slamDunks" : 12
                }
            }
        }
        // EMPTY OBJECT FOR COPY/PASTE
        // {
        //     "home" : {
        //         "team name" : "name",
        //         "colors" : ["color 1", "color 2"],
        //         "players" : {
        //             "player 1 name" : {
        //                 "number": ,
        //                 "shoe" : ,
        //                 "points" : ,
        //                 "rebounds" : ,
        //                 "assists" : ,
        //                 "steals" : ,
        //                 "blocks" : ,
        //                 "slamDunks" :
        //             }
        //         }
        //     }
        // }
    }
    return gameObj;
}

const gameObj = gameObject();

function numPointsScored(forPlayerName) {
    let pointsScored;
    Object.values(gameObj).forEach((team) => {
        Object.entries(team.players).forEach(([player, playerInfo]) => {
            if (player === forPlayerName) {
                pointsScored = playerInfo.points;
                return pointsScored;
            }
        });
    })
    // for (const [key, value] of Object.entries(gameObj)) {
    //     for (const [key2, value2] of Object.entries(value.players)) {
    //         if (key2 === forPlayerName) {
    //             pointsScored = value2.points;
    //             return pointsScored;
    //         }
    //     }
    // }
    return pointsScored;
}

function shoeSize(forPlayerName) {
    let shoeSize;
    Object.values(gameObj).forEach((team) => {
        Object.entries(team.players).forEach(([player, playerInfo]) => {
            if (player === forPlayerName) {
                shoeSize = playerInfo.shoe;
                return shoeSize;
            }
        })
    });
    // for (const [teamSide, teamInfo] of Object.entries(gameObj)) {
    //     for (const [playerName, playerInfo] of Object.entries(teamInfo.players)) {
    //         if (playerName === forPlayerName) {
    //             shoeSize = playerInfo.shoe;
    //             return shoeSize;
    //         }
    //     }
    // }
    return shoeSize;
}

function teamColors(forTeamName) {
    let teamColors;
    Object.values(gameObj).forEach((team) => {
        if (team["team name"] === forTeamName) {
            teamColors = team.colors;
            return teamColors;
        }
    });
    // for (const [teamSide, teamInfo] of Object.entries(gameObj)) {
    //     if (teamInfo["team name"] === forTeamName) {
    //         teamColors = teamInfo.colors;
    //         return teamColors;
    //     }
    // }
    return teamColors;
}

function teamNames() {
    let teamNames = [];
    Object.values(gameObj).forEach((team) => {
        teamNames.push(team["team name"]);
    });
    return teamNames;
}

function playerNumbers(forTeamName) {
    let roster = [];
    Object.values(gameObj).forEach((team) => {
        if (team["team name"] === forTeamName) {
            Object.values(team.players).forEach((teamPlayer) => {
                roster.push(teamPlayer.number);
            })
        }
    });
    // for (const [teamSide, teamInfo] of Object.entries(gameObj)) {
    //     if (teamInfo["team name"] === team) {
    //         for (const [playerName, playerInfo] of Object.entries(teamInfo.players)) {
    //             roster.push(playerInfo.number);
    //         }
    //     }
    // }
    return roster;
}

function playerStats(forPlayerName) {
    let playerStats;
    Object.values(gameObj).forEach((team) => {
        Object.entries(team.players).forEach(([player, playerInfo]) => {
            if (player === forPlayerName) {
                playerStats = playerInfo;
                return playerStats;
            }
        });
    })
    return playerStats;
}

function bigShoeRebounds() {
    let bigShoe = -1;
    let bigShoeRebounds;
    Object.values(gameObj).forEach((team) => {
        Object.entries(team.players).forEach(([player, playerInfo]) => {
            if (playerInfo.shoe > bigShoe) {
                bigShoe = playerInfo.shoe;
                bigShoeRebounds = playerInfo.rebounds;
            }
        });
    });
    return bigShoeRebounds;
}

function mostPointsScored() {
    let mostPoints = -1;
    let mostPointsPlayer;
    Object.values(gameObj).forEach((team) => {
        Object.entries(team.players).forEach(([player, playerInfo]) => {
            if (playerInfo.points > mostPoints) {
                mostPoints = playerInfo.points;
                mostPointsPlayer = player;
            }
        });
    });
    return mostPointsPlayer;
}

function winningTeam() {
    let maxPoints = 0;
    let winner;
    let teamPoints;
    Object.values(gameObj).forEach((team) => {
        teamPoints = 0;
        Object.values(team.players).forEach((player) => {
            teamPoints += player.points;
        });
        if (teamPoints > maxPoints) {
            maxPoints = teamPoints;
            winner = team["team name"];
        }
    });
    return winner;
}

function playerWithLongestName() {
    let longestNameLength = 0;
    let longestName;
    Object.values(gameObj).forEach((team) => {
        Object.entries(team.players).forEach(([player, playerInfo]) => {
            if (player.length > longestNameLength) {
                longestNameLength = player.length;
                longestName = player;
            }
        });
    })
    return longestName;
}

function doesLongNameStealATon() {
    let playerLongestName = playerWithLongestName();
    let mostSteals = 0;
    let playerMostSteals;
    Object.values(gameObj).forEach((team) => {
        Object.entries(team.players).forEach(([player, playerInfo]) => {
            if (playerInfo.steals > mostSteals) {
                mostSteals = playerInfo.steals;
                playerMostSteals = player;
            }
        })
    });
    return (playerLongestName === playerMostSteals);
}