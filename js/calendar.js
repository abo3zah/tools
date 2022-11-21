const generateYearStructure = (selected) => {

    const year = [];

    for (let i = 0; i < 12; i++) {
        let current = moment(selected + '-' + twoDigit(String(i + 1)) + '-01');
        let daysInMonth = current.daysInMonth();
        let month = [];
        let date = 1;
        while (daysInMonth > 0) {

            let week = [];

            for (let j = 0; j < 7; j++) {

                if (daysInMonth == 0) {
                    break;
                }

                let m = moment(selected + '-' + twoDigit(String(i + 1)) + '-' + twoDigit(String(date)));

                if (m.day() > 0 && m.date() == 1) {
                    for (let z = 0; z < m.day(); z++) {
                        week.push('');
                        j++;
                    }
                }

                week.push(m);
                date++;
                daysInMonth--;

            }
            month.push(week);
        }
        year.push(month)
    }

    return year;
}

const twoDigit = (str) => {
    return str.length == 1 ? "0" + str : str;
}

var replaceDigits = function (str) {
    return str.replace(/\d(?=[^<>]*(<|$))/g, function ($0) {
        return map[$0]
    });
}

const weekday = ["أ", "ث", "ث", "ر", "خ", "ج", "س"];
const MonthName = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أوكتوبر", "نوفمبر", "ديسمبر"];
const hColors = ['#32CD32', '#06b6d4', '#FFA500'];
const map = [
    "&#1632;", "&#1633;", "&#1634;", "&#1635;", "&#1636;",
    "&#1637;", "&#1638;", "&#1639;", "&#1640;", "&#1641;"
]

function mainScript(){

    if (document.getElementById("selectedYear").value < 1938 || document.getElementById("selectedYear").value > 2076){return null} 
    selectedYear = document.getElementById("selectedYear").value;
    var dates = generateYearStructure(selectedYear);
    var hYear = [];

    const vacationDetails = Array.from(d3.group(vacationData, d => d.name), ([key, value]) => ({key,value}));

    d3.selectAll('tbody *').remove()

    for (let i = 0; i <= 11; i++) {

        d3.select('[data-month="' + (i + 1) + '"] .headerforDayName')
            .selectAll('th')
            .data(weekday)
            .enter()
            .append('th')
            .attr('class', 'text-center text-white bg-sky-600')
            .text(d => d)
            

        let hMonths = [];

        let rows = d3.select('[data-month="' + (i + 1) + '"] tbody')
            .selectAll('tr')
            .data(dates[i])
            .enter()
            .append('tr')

        let cells = rows.selectAll("td")
            .data((d) => d)
            .enter()
            .append('td')
            .attr('class', (d) => {
                if (typeof d !== 'object') {
                    return ' '
                };

                classes = 'relative text-sm pr-1 border border-black ';

                
                d.day() > 4 ? classes += "bg-gray-600 text-white " : classes += 'bg-slate-50 ';
                d.day() == 0 ? classes += "sundays " : null;
                d.date() == 1 ? classes += "startOfMonth " : null;
                
                d.format('iMM') == 9 ? classes += "bg-green-200 text-black font-bold " : null;

                return classes;
            })
            .attr('style', (d) => {
                if (typeof d !== 'object') {
                    return ' '
                };

                let styleString = "";

                for (let z = 0; z < vacationData.length; z++) {

                    if (d.isBetween(vacationData[z].start, moment(vacationData[z].end), undefined, '[]')) {
                        styleString = vacationData[z].style;
                    }
                }

                d.isSame(moment(), 'day') ? styleString = "color:white; background-color:lightslategrey " : null;

                return styleString;
            })
            .html((d) => {
                if (typeof d !== 'object') {
                    return ''
                };

                let text = '';
                text = d.date();
                hMonths.includes(d.format('iMMM')) ? null : hMonths.push(d.format('iMMM'));
                hYear.includes(d.format('iYYYY')) ? null : hYear.push(d.format('iYYYY'));
                return text;
            })
            .append('span')
            .html((d) => {
                if (typeof d !== 'object') {
                    return ''
                };
                let text = '';

                text = '<span style="color:' + hColors[hMonths.indexOf(d.format('iMMM'))] + '" class=" absolute text-sm left-1 font-bold">' + replaceDigits(String(d.iDate())) + '</span>';

                return text;
            })

        d3.selectAll('[data-month="' + (i + 1) + '"] [colspan="4"]')
            .html((d) => {
                let text = '';
                for (let j = 0; j < hMonths.length; j++) {
                    text += '<span style="color:' + hColors[j] + '">' + hMonths[j] + '</span>';
                    j == (hMonths.length - 1) ? null : text += ' - ';
                }
                return text;
            })
            
    }

    let str = '(' + replaceDigits(hYear.reduce((p, c) => p + " - " + c)) + ")";
    d3.select('#hijriYear').html(str);

    vacationDetails.push({
        'key': 'رمضان',
        'value': [{
            style: 'background-color:rgb(187 247 208);font-weight: 700;',
        }]
    })

    legend = d3.select('#legend')
        .selectAll('div')
        .data(vacationDetails)
        .enter()
        .append('div')
        .html((d) => d.key)
        .attr('style', (d) => d.value[0].style + ';border:1px solid black')
        .attr('class', " flex-grow")

}

mainScript();
