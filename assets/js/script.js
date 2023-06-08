const calculate = (event) => {
    event.preventDefault();
    let error = document.getElementsByClassName("error")[0]
    let currentLevel = parseInt(document.getElementById("current_level").value);
    let desiredlevel = parseInt(document.getElementById("desired_level").value);
    let article = document.getElementsByTagName("article")[1];
    let detail = document.getElementsByTagName("details");
    if (article.getElementsByTagName("table").length > 0) {
        // Clear contents of article
        article.innerHTML = '<div class="xp_wrapper">XP to Desired Level: <span id="xp_to_desired_level"></span></div>';
    }
    if (error.classList.contains("hide") == false) {
        error.classList.add("hide");
    }
    if (article.classList.contains("hide") == false) {
        article.classList.add("hide");
    }
    switch (true) {
        case (isNaN(currentLevel) || isNaN(desiredlevel)):
            raise_error("Current level or desired level is not a number"); 
            return;
        case (currentLevel > desiredlevel):
            raise_error("Current level cannot be greater than desired level");
            return;
        case (currentLevel < 1 || desiredlevel < 1):
            raise_error("Current level or desired level cannot be less than 1");
            return;
        case (currentLevel > 20):
            raise_error("Current level cannot be greater than 20");
            return;
        case (desiredlevel > 200):
            raise_error("Desired level cannot be greater than 21");
            return;
        case (currentLevel == desiredlevel):
            raise_error("Current level cannot be equal to desired level");
            return;
        default:
            let difference = current[desiredlevel - 1].running_total - current[currentLevel - 1].running_total;
            document.getElementById("xp_to_desired_level").innerHTML = difference;
            let headers = ["Dungeon Tier", "XP per Run", "Number of Runs to Reach Desired Level"];
            let table = document.createElement("table");
            
            let headerRow = table.insertRow();
            for (let i = 0; i < headers.length; i++) {
                let headerCell = document.createElement("th");
                headerCell.innerHTML = headers[i];
                headerRow.appendChild(headerCell);
            }
            
            let rowIndex = 0;
            
            for (let i = 0; i < dungeon.length; i++) {
                let row = table.insertRow();
                row.insertCell(0).innerHTML = dungeon[i].tier;
                row.insertCell(1).innerHTML = dungeon[i].reward;
                row.insertCell(2).innerHTML = Math.ceil(difference / dungeon[i].reward);
            
                if ((i + 1) % 10 === 0 ) {
                    let details = document.createElement("details");
                    let summary = document.createElement("summary");
                    summary.innerHTML = "Tier " + (i - 8) + "-" + (i + 1);
                    details.appendChild(summary);
                    details.appendChild(table.cloneNode(true));
                    article.append(details);
                    table = document.createElement("table");
                    rowIndex = 0;
                    headerRow = table.insertRow();
                    for (let j = 0; j < headers.length; j++) {
                        let headerCell = document.createElement("th");
                        headerCell.innerHTML = headers[j];
                        headerRow.appendChild(headerCell);
                    }
                } else {
                    rowIndex++;
                }
            }
            let summaryTab = document.createElement("details");
            summaryTab.innerHTML = "Summary";
            summaryTab.appendChild(table);
            article.append(summaryTab);
            document.getElementsByTagName("details")[10].remove();
            article.classList.remove("hide");
    }
}

const raise_error = (message) => {
    let error = document.getElementsByClassName("error")[0]

    error.classList.remove("hide");
    error.innerHTML = '<i class="fa-sharp fa-solid fa-circle-exclamation fa-fade fa-lg" style="color: #ff0000;"></i>  ' + message;
}


const current = 
    [
        {
        "current_level": 1,
        "previous": 0,
        "running_total": 0
        },
        {
        "current_level": 2,
        "previous": 8,
        "running_total": 8
        },
        {
        "current_level": 3,
        "previous": 15,
        "running_total": 23
        },
        {
        "current_level": 4,
        "previous": 24,
        "running_total": 47
        },
        {
        "current_level": 5,
        "previous": 35,
        "running_total": 82
        },
        {
        "current_level": 6,
        "previous": 46,
        "running_total": 128
        },
        {
        "current_level": 7,
        "previous": 59,
        "running_total": 187
        },
        {
        "current_level": 8,
        "previous": 72,
        "running_total": 259
        },
        {
        "current_level": 9,
        "previous": 87,
        "running_total": 346
        },
        {
        "current_level": 10,
        "previous": 104,
        "running_total": 450
        },
        {
        "current_level": 11,
        "previous": 121,
        "running_total": 571
        },
        {
        "current_level": 12,
        "previous": 140,
        "running_total": 711
        },
        {
        "current_level": 13,
        "previous": 159,
        "running_total": 870
        },
        {
        "current_level": 14,
        "previous": 180,
        "running_total": 1050
        },
        {
        "current_level": 15,
        "previous": 203,
        "running_total": 1253
        },
        {
        "current_level": 16,
        "previous": 226,
        "running_total": 1479
        },
        {
        "current_level": 17,
        "previous": 251,
        "running_total": 1730
        },
        {
        "current_level": 18,
        "previous": 276,
        "running_total": 2006
        },
        {
        "current_level": 19,
        "previous": 303,
        "running_total": 2309
        },
        {
        "current_level": 20,
        "previous": 332,
        "running_total": 2641
        },
        {
        "current_level": 21,
        "previous": 361,
        "running_total": 3002
        }
    ]

const dungeon = 
        [
            {
             "tier": 1,
             "reward": 4
            },
            {
             "tier": 2,
             "reward": 6
            },
            {
             "tier": 3,
             "reward": 8
            },
            {
             "tier": 4,
             "reward": 10
            },
            {
             "tier": 5,
             "reward": 12
            },
            {
             "tier": 6,
             "reward": 14
            },
            {
             "tier": 7,
             "reward": 16
            },
            {
             "tier": 8,
             "reward": 18
            },
            {
             "tier": 9,
             "reward": 20
            },
            {
             "tier": 10,
             "reward": 22
            },
            {
             "tier": 11,
             "reward": 24
            },
            {
             "tier": 12,
             "reward": 26
            },
            {
             "tier": 13,
             "reward": 28
            },
            {
             "tier": 14,
             "reward": 30
            },
            {
             "tier": 15,
             "reward": 32
            },
            {
             "tier": 16,
             "reward": 34
            },
            {
             "tier": 17,
             "reward": 36
            },
            {
             "tier": 18,
             "reward": 38
            },
            {
             "tier": 19,
             "reward": 40
            },
            {
             "tier": 20,
             "reward": 42
            },
            {
             "tier": 21,
             "reward": 44
            },
            {
             "tier": 22,
             "reward": 46
            },
            {
             "tier": 23,
             "reward": 48
            },
            {
             "tier": 24,
             "reward": 50
            },
            {
             "tier": 25,
             "reward": 52
            },
            {
             "tier": 26,
             "reward": 54
            },
            {
             "tier": 27,
             "reward": 56
            },
            {
             "tier": 28,
             "reward": 58
            },
            {
             "tier": 29,
             "reward": 60
            },
            {
             "tier": 30,
             "reward": 62
            },
            {
             "tier": 31,
             "reward": 64
            },
            {
             "tier": 32,
             "reward": 66
            },
            {
             "tier": 33,
             "reward": 68
            },
            {
             "tier": 34,
             "reward": 70
            },
            {
             "tier": 35,
             "reward": 72
            },
            {
             "tier": 36,
             "reward": 74
            },
            {
             "tier": 37,
             "reward": 76
            },
            {
             "tier": 38,
             "reward": 78
            },
            {
             "tier": 39,
             "reward": 80
            },
            {
             "tier": 40,
             "reward": 82
            },
            {
             "tier": 41,
             "reward": 84
            },
            {
             "tier": 42,
             "reward": 86
            },
            {
             "tier": 43,
             "reward": 88
            },
            {
             "tier": 44,
             "reward": 90
            },
            {
             "tier": 45,
             "reward": 92
            },
            {
             "tier": 46,
             "reward": 94
            },
            {
             "tier": 47,
             "reward": 96
            },
            {
             "tier": 48,
             "reward": 98
            },
            {
             "tier": 49,
             "reward": 100
            },
            {
             "tier": 50,
             "reward": 102
            },
            {
             "tier": 51,
             "reward": 104
            },
            {
             "tier": 52,
             "reward": 106
            },
            {
             "tier": 53,
             "reward": 108
            },
            {
             "tier": 54,
             "reward": 110
            },
            {
             "tier": 55,
             "reward": 112
            },
            {
             "tier": 56,
             "reward": 114
            },
            {
             "tier": 57,
             "reward": 116
            },
            {
             "tier": 58,
             "reward": 118
            },
            {
             "tier": 59,
             "reward": 120
            },
            {
             "tier": 60,
             "reward": 122
            },
            {
             "tier": 61,
             "reward": 124
            },
            {
             "tier": 62,
             "reward": 126
            },
            {
             "tier": 63,
             "reward": 128
            },
            {
             "tier": 64,
             "reward": 130
            },
            {
             "tier": 65,
             "reward": 132
            },
            {
             "tier": 66,
             "reward": 134
            },
            {
             "tier": 67,
             "reward": 136
            },
            {
             "tier": 68,
             "reward": 138
            },
            {
             "tier": 69,
             "reward": 140
            },
            {
             "tier": 70,
             "reward": 142
            },
            {
             "tier": 71,
             "reward": 144
            },
            {
             "tier": 72,
             "reward": 146
            },
            {
             "tier": 73,
             "reward": 148
            },
            {
             "tier": 74,
             "reward": 150
            },
            {
             "tier": 75,
             "reward": 152
            },
            {
             "tier": 76,
             "reward": 154
            },
            {
             "tier": 77,
             "reward": 156
            },
            {
             "tier": 78,
             "reward": 158
            },
            {
             "tier": 79,
             "reward": 160
            },
            {
             "tier": 80,
             "reward": 162
            },
            {
             "tier": 81,
             "reward": 164
            },
            {
             "tier": 82,
             "reward": 166
            },
            {
             "tier": 83,
             "reward": 168
            },
            {
             "tier": 84,
             "reward": 170
            },
            {
             "tier": 85,
             "reward": 172
            },
            {
             "tier": 86,
             "reward": 174
            },
            {
             "tier": 87,
             "reward": 176
            },
            {
             "tier": 88,
             "reward": 178
            },
            {
             "tier": 89,
             "reward": 180
            },
            {
             "tier": 90,
             "reward": 182
            },
            {
             "tier": 91,
             "reward": 184
            },
            {
             "tier": 92,
             "reward": 186
            },
            {
             "tier": 93,
             "reward": 188
            },
            {
             "tier": 94,
             "reward": 190
            },
            {
             "tier": 95,
             "reward": 192
            },
            {
             "tier": 96,
             "reward": 194
            },
            {
             "tier": 97,
             "reward": 196
            },
            {
             "tier": 98,
             "reward": 198
            },
            {
             "tier": 99,
             "reward": 200
            },
            {
             "tier": 100,
             "reward": 202
            }
        ]