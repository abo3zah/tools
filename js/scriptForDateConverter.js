var map = [
    "&\#1632;", "&\#1633;", "&\#1634;", "&\#1635;", "&\#1636;",
    "&\#1637;", "&\#1638;", "&\#1639;", "&\#1640;", "&\#1641;"
]

var replaceDigits = function (str) {
    return str.replace(/\d(?=[^<>]*(<|$))/g, function ($0) {return map[$0]});
}

function printDate(x, result, target) {
    let end = new Date()
    let diffInDays = parseInt((end.getTime() - x) / 86400000);

    $(target + ' p').remove('p')

    // طباعة التاريخ المحول له
    $(target).append('<p>' + replaceDigits(result) + '</P>');

    // طباعة الفرق في الأيام
    $(target).append(replaceDigits("<p><b>عدد الأيام إلى هذه اللحظة:</b> " + diffInDays.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " يوم</p>"));

    //الحساب بالميلادي
    let years = parseInt(diffInDays / 365);
    let months = parseInt(((diffInDays / 365) - years) * 12);
    let days = diffInDays - (years * 365) - (months * 31);
    $(target).append(replaceDigits("<p><b>الفرق بالميلادي إلى هذه اللحظة: </b>" + years + " سنة و  " + months + " شهر و  " + days + " يوم</p>"));

    // الحساب بالهجري
    years = parseInt(diffInDays / 354);
    months = parseInt(((diffInDays / 354) - years) * 12);
    days = diffInDays - (years * 354) - (months * 30);
    $(target).append(replaceDigits("<p><b>الفرق بالهجري إلى هذه اللحظة:</b> " + years + " سنة و  " + months + " شهر و  " + days + " يوم</p>"));
}

$(function () {
    $('#hpicker').hijriDatePicker({
        hijri: true,
        viewMode: 'years',
        showSwitcher: false,
        useCurrent: false,
        showTodayButton: true
    });
});

$(function () {
    $('#gpicker').hijriDatePicker({
        hijri: false,
        viewMode: 'years',
        showSwitcher: false,
        useCurrent: false,
        showTodayButton: true
    });
});

$("#hpicker").on('dp.change', function (arg) {
    if (!arg.date) {
        $("#gShortDate").html('');
        return;
    };
    let date = arg.date;
    let result = "<b>التاريخ الميلادي : </b>" + date.format("dddd,     D / MMMM (M) / YYYY") + " م"
    printDate(date.format('x'), result, "#hDiv");
});

$("#gpicker").on('dp.change', function (arg) {
    if (!arg.date) {
        $("#hShortDate").html('');
        return;
    };
    let date = arg.date;
    let result = "<b>التاريخ الهجري : </b>" + date.format("dddd, iD / iMMMM (iM) / iYYYY") + " هـ"
    printDate(date.format('x'), result, "#gDiv");
});

// function setup(){
//     noCanvas();
//     noLoop();

//     luxon.Settings.defaultOutputCalendar = 'islamic'

//     updateInputWithDate(luxon.DateTime.local(1989,3,7));
// }

// function showYearDateGeorgian(selectedYear = new Date().getFullYear()){
//     select('#gDateSelectionDiv').html('').removeClass('hidden').addClass('grid')

//     createDiv(`
//         <span class='font-bold cursor-pointer hover:text-white hover:bg-gray-800 px-1 rounded hover:underline' onclick="showYearDateGeorgian(${selectedYear-13})"><</span>
//         <span class='font-bold flex-grow text-center'>${selectedYear-6} - ${selectedYear+6}</span>
//         <span class='font-bold cursor-pointer hover:text-white hover:bg-gray-800 px-1 rounded hover:underline' onclick="showYearDateGeorgian(${selectedYear+13})">></span>
//     `).parent('gDateSelectionDiv').class('flex gap-3')

//     createDiv(`
//         <div class='flex-grow grid grid-cols-4 gap-3'>

//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-3 rounded' onclick="showMonthDateGeorgian(${selectedYear-6})">${selectedYear-6}</span>
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-3 rounded' onclick="showMonthDateGeorgian(${selectedYear-5})">${selectedYear-5}</span>
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-3 rounded' onclick="showMonthDateGeorgian(${selectedYear-4})">${selectedYear-4}</span>
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-3 rounded' onclick="showMonthDateGeorgian(${selectedYear-3})">${selectedYear-3}</span>

//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-3 rounded' onclick="showMonthDateGeorgian(${selectedYear-2})">${selectedYear-2}</span>
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-3 rounded' onclick="showMonthDateGeorgian(${selectedYear-1})">${selectedYear-1}</span>
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-3 rounded' onclick="showMonthDateGeorgian(${selectedYear})">${selectedYear}</span>
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-3 rounded' onclick="showMonthDateGeorgian(${selectedYear+1})">${selectedYear+1}</span>

//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-3 rounded' onclick="showMonthDateGeorgian(${selectedYear+2})">${selectedYear+2}</span>
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-3 rounded' onclick="showMonthDateGeorgian(${selectedYear+3})">${selectedYear+3}</span>
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-3 rounded' onclick="showMonthDateGeorgian(${selectedYear+5})">${selectedYear+5}</span>
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-3 rounded' onclick="showMonthDateGeorgian(${selectedYear+6})">${selectedYear+6}</span>
            
//             <span class='text-center cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-3 rounded col-span-full' onclick="updateInputWithDate(luxon.DateTime.now())">اليوم</span>
//         </div>
//     `).parent('gDateSelectionDiv').class('grid gap-2')
// }

// function showMonthDateGeorgian(selectedYear){
//     select('#gDateSelectionDiv').html('').removeClass('hidden').addClass('grid')

//     createDiv(`
//         <span class='font-bold'><</span>
//         <span class='font-bold flex-grow text-center cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white rounded' onclick='showYearDateGeorgian(${selectedYear})'>${selectedYear}</span>
//         <span class='font-bold'>></span>
//     `).parent('gDateSelectionDiv').class('flex gap-3')

//     createDiv(`
//         <div class='flex-grow grid grid-cols-4 gap-3'>
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-1 rounded text-center' onclick="showDayDateGeorgian(${selectedYear}, 1)">January</span>
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-1 rounded text-center' onclick="showDayDateGeorgian(${selectedYear}, 2)">February</span>
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-1 rounded text-center' onclick="showDayDateGeorgian(${selectedYear}, 3)">March</span>
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-1 rounded text-center' onclick="showDayDateGeorgian(${selectedYear}, 4)">April</span>
        
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-1 rounded text-center' onclick="showDayDateGeorgian(${selectedYear}, 5)">May</span>
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-1 rounded text-center' onclick="showDayDateGeorgian(${selectedYear}, 6)">June</span>
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-1 rounded text-center' onclick="showDayDateGeorgian(${selectedYear}, 7)">July</span>
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-1 rounded text-center' onclick="showDayDateGeorgian(${selectedYear}, 8)">August</span>
        
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-1 rounded text-center' onclick="showDayDateGeorgian(${selectedYear}, 9)">September</span>
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-1 rounded text-center' onclick="showDayDateGeorgian(${selectedYear}, 10)">October</span>
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-1 rounded text-center' onclick="showDayDateGeorgian(${selectedYear}, 11)">November</span>
//             <span class='cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-1 rounded text-center' onclick="showDayDateGeorgian(${selectedYear}, 12)">December</span>

//             <span class='text-center cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-1 rounded col-span-full' onclick="updateInputWithDate(luxon.DateTime.now())">اليوم</span>
//         </div>
//     `).parent('gDateSelectionDiv').class('grid gap-2')
// }

// function showDayDateGeorgian(selectedYear, selectedMonth){
//     select('#gDateSelectionDiv').html('').removeClass('hidden').addClass('grid')

//     createDiv(`
//         <span class='font-bold'><</span>
//         <span class='font-bold flex-grow text-center cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white rounded' onclick='showMonthDateGeorgian(${selectedYear})'>${selectedYear} - ${selectedMonth}</span>
//         <span class='font-bold'>></span>
//     `).parent('gDateSelectionDiv').class('flex gap-3')

//     date = luxon.DateTime.fromObject({year:selectedYear, month:selectedMonth})
//     daysText = ''
//     for(let i = 1-date.weekday; i<= date.daysInMonth; i++){
//         if(i < 1){
//             daysText += `<span></span>`;
//         } else {
//             daysText += `<span class='text-center cursor-pointer hover:underline select-none hover:bg-gray-600 p-1 hover:text-white rounded' onclick="updateInputWithDate(luxon.DateTime.fromObject({year:${selectedYear},month:${selectedMonth},day:${date.day}}))">${date.day}</span>`;
//             date = date.plus({ days:1})
//         }
//     }

//     createDiv(`
//         <div dir="rtl" class='flex-grow grid grid-cols-7 gap-3'>
//             <span class='select-none text-center'>ح</span>
//             <span class='select-none text-center'>ث</span>
//             <span class='select-none text-center'>ث</span>
//             <span class='select-none text-center'>ر</span>
//             <span class='select-none text-center'>خ</span>
//             <span class='select-none text-center'>ج</span>
//             <span class='select-none text-center'>س</span>

//             ${daysText}

//             <span class='text-center cursor-pointer hover:underline select-none hover:bg-gray-600 hover:text-white p-1 rounded col-span-full' onclick="updateInputWithDate(luxon.DateTime.now())">اليوم</span>
//         </div>
//     `).parent('gDateSelectionDiv').class('grid gap-2')
// }

// function updateInputWithDate(date){

//     select('#gDateSelectionDiv').html('').removeClass('grid').addClass('hidden');

//     if (selectAll('#gDiv p').length > 0){
//         selectAll('#gDiv p')[0].remove();
//     }

//     select('#gpicker').value(`${date.toISODate()}`);
//     createP(`<b>التاريخ الهجري:</b>  ${date.setLocale("ar").reconfigure({numberingSystem:'arab'}).toLocaleString(luxon.DateTime.DATE_FULL)}
//             <b>عدد الأيام إلى هذه اللحظة:</b> ${nfc(luxon.DateTime.local().startOf('day').diff(date, 'days').toObject()['days'],0)} يوم
//             <b>عدد السنوات إلى هذه اللحظة:</b> ${nfc(luxon.DateTime.local().startOf('day').diff(date, 'years').toObject()['years'],0)} سنة`).parent('#gDiv').class('whitespace-pre-line')

// }


