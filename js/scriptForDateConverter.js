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

var map = [
    "&\#1632;", "&\#1633;", "&\#1634;", "&\#1635;", "&\#1636;",
    "&\#1637;", "&\#1638;", "&\#1639;", "&\#1640;", "&\#1641;"
]

var replaceDigits = function (str) {
    return str.replace(/\d(?=[^<>]*(<|$))/g, function ($0) {return map[$0]});
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
    printDate(date.format('x'), result, ".mainBox > div:nth-child(2)");
});

$("#gpicker").on('dp.change', function (arg) {
    if (!arg.date) {
        $("#hShortDate").html('');
        return;
    };
    let date = arg.date;
    let result = "<b>التاريخ الهجري : </b>" + date.format("dddd, iD / iMMMM (iM) / iYYYY") + " هـ"
    printDate(date.format('x'), result, ".mainBox > div:first-child");
});


// function intPart(floatNum) {
//     if (floatNum < -0.0000001) {
//         return Math.ceil(floatNum - 0.0000001)
//     }
//     return Math.floor(floatNum + 0.0000001)
// }

// function weekDay(wdn) {
//     if (wdn == 0) {
//         return "الأثنين"
//     }
//     if (wdn == 1) {
//         return "الثلاثاء"
//     }
//     if (wdn == 2) {
//         return "الأربعاء"
//     }
//     if (wdn == 3) {
//         return "الخميس"
//     }
//     if (wdn == 4) {
//         return "الجمعة"
//     }
//     if (wdn == 5) {
//         return "السبت"
//     }
//     if (wdn == 6) {
//         return "الأحد"
//     }
//     return ""

// }

// function chrToIsl(arg) {
//     d = parseInt(arg.CDay.value)
//     m = parseInt(arg.CMonth.value)
//     y = parseInt(arg.CYear.value)
//     if ((y > 1582) || ((y == 1582) && (m > 10)) || ((y == 1582) && (m == 10) && (d > 14))) {
//         jd = intPart((1461 * (y + 4800 + intPart((m - 14) / 12))) / 4) + intPart((367 * (m - 2 - 12 * (intPart((m - 14) / 12)))) / 12) -
//             intPart((3 * (intPart((y + 4900 + intPart((m - 14) / 12)) / 100))) / 4) + d - 32075
//     } else {
//         jd = 367 * y - intPart((7 * (y + 5001 + intPart((m - 9) / 7))) / 4) + intPart((275 * m) / 9) + d + 1729777
//     }
//     arg.JD.value = jd
//     arg.wd.value = weekDay(jd % 7)
//     l = jd - 1948440 + 10632
//     n = intPart((l - 1) / 10631)
//     l = l - 10631 * n + 354
//     j = (intPart((10985 - l) / 5316)) * (intPart((50 * l) / 17719)) + (intPart(l / 5670)) * (intPart((43 * l) / 15238))
//     l = l - (intPart((30 - j) / 15)) * (intPart((17719 * j) / 50)) - (intPart(j / 16)) * (intPart((15238 * j) / 43)) + 29
//     m = intPart((24 * l) / 709)
//     d = l - intPart((709 * m) / 24)
//     y = 30 * n + j - 30

//     arg.HDay.value = d
//     arg.HMonth.value = m
//     arg.HYear.value = y
// }

// function islToChr(arg) {
//     d = parseInt(arg.HDay.value)
//     m = parseInt(arg.HMonth.value)
//     y = parseInt(arg.HYear.value)
//     jd = intPart((11 * y + 3) / 30) + 354 * y + 30 * m - intPart((m - 1) / 2) + d + 1948440 - 385
//     arg.JD.value = jd
//     arg.wd.value = weekDay(jd % 7)
//     if (jd > 2299160) {
//         l = jd + 68569
//         n = intPart((4 * l) / 146097)
//         l = l - intPart((146097 * n + 3) / 4)
//         i = intPart((4000 * (l + 1)) / 1461001)
//         l = l - intPart((1461 * i) / 4) + 31
//         j = intPart((80 * l) / 2447)
//         d = l - intPart((2447 * j) / 80)
//         l = intPart(j / 11)
//         m = j + 2 - 12 * l
//         y = 100 * (n - 49) + i + l
//     } else {
//         j = jd + 1402
//         k = intPart((j - 1) / 1461)
//         l = j - 1461 * k
//         n = intPart((l - 1) / 365) - intPart(l / 1461)
//         i = l - 365 * n + 30
//         j = intPart((80 * i) / 2447)
//         d = i - intPart((2447 * j) / 80)
//         i = intPart(j / 11)
//         m = j + 2 - 12 * i
//         y = 4 * k + n + i - 4716
//     }

//     arg.CDay.value = d
//     arg.CMonth.value = m
//     arg.CYear.value = y

// }