$(document).ready( () => {
    const names = [];

    const $todaysDate = $("h4");
    const $input = $('input');
    const $list = $("ul.list");
    const $shuffledList = $("ul.shuffled-list");

    const date = new Date();
    const day = getDayInString(date.getDay());
    const month = getMonthInString(date.getMonth())
    $todaysDate.html(`${day}, ${month} ${date.getDate()}`);

    $("#add-button").click(() => {
        addNameToList();
    })

    $input.keypress(() => {
        if (event.key === 'Enter') {
            addNameToList();
        }
    })

    $('button.shuffle-button').click(() => {
        $shuffledList.show();
        const shuffledNames = shuffleArray(names);
        for (let i = 0; i < shuffledNames.length; i++) {
            $shuffledList.append(`<li>${shuffledNames[i]}</li>`);
        }
    })

    function getDayInString(dayInNum) {
        switch (dayInNum) {
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
        }
    }

    function getMonthInString(monthInNum) {
        switch (monthInNum) {
            case 0:
                return 'Jan';
            case 1:
                return 'Feb';
            case 2:
                return 'Mar';
            case 3:
                return 'Apr';
            case 4:
                return 'May';
            case 5:
                return 'June';
            case 6:
                return 'July';
            case 7:
                return 'Aug';
            case 8:
                return 'Sep';
            case 9:
                return 'Oct';
            case 10:
                return 'Nov';
            case 11:
                return 'Dec';
        }
    }

    function addNameToList() {
        names.push($input.val());
        $list.append(`<li>${$input.val()}</li>`)
        $input.val('');
        if ($list.is(":hidden")) {
            $list.show();
        }
    }

    function shuffleArray(array) {
        const tempArray = [];
        for (let i = 0; i < array.length; i++) {
            tempArray.push(array[i]);
        }
        let currentIndex = tempArray.length, temporaryValue, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = tempArray[currentIndex];
            tempArray[currentIndex] = tempArray[randomIndex];
            tempArray[randomIndex] = temporaryValue;
        }
        return tempArray;
    }

})
