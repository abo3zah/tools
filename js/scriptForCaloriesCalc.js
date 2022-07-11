$(document).ready(function () {
    $('button').click(function () {

        let valid = true;
        $("input[required]").each(function () {
            if ($(this).val() > 0) {

            } else {
                valid = false;
                $('#BMR').html("<b>معادلة حساب السعرات الحرارية معدل الأيض الساسي: </b>");
                $('#BMI').html("<b>معادلة مؤشر كتلة الجسم</b>: ");
                $('#BMI').next().html("<b>الوزن الصحي بين</b>: ")
                $("path").attr("visibility","hidden")
            }
        })

        if (valid) {

            $("path").attr("visibility","visible")

            if ($('input[name="sex"]:checked').val() == "male") {

                value = (10 * $("#weight").val()) + (6.25 * $("#height").val()) - (5 * $("#age").val()) + 5;
                $('#BMR').html("<b>معادلة حساب السعرات الحرارية معدل الأيض الساسي: </b>" + value);

            } else {

                value = (10 * $("#weight").val()) + (6.25 * $("#height").val()) - (5 * $("#age").val()) - 161;
                $('#BMR').html("<b>معادلة حساب السعرات الحرارية معدل الأيض الساسي: </b>" + value);

            }

            value = ($("#weight").val() / (($("#height").val() / 100) ** 2)).toFixed(1);

            $("g").attr("transform","translate(" + (($("#indicator")[0].clientWidth*(1-((Math.max(Math.min(value,40),5)-5)/35)))-10) + ",0)")

            maxWeight = (25*(($("#height").val() / 100) ** 2)).toFixed(0)
            minWeight = (18.5*(($("#height").val() / 100) ** 2)).toFixed(0)

            if (value < 18.5) {

                value += " - <span style='background-color:yellow;color:black;padding:.3rem .5rem'>نقص في الوزن</span>";
                
            } else if (value < 25) {

                value += " - <span style='background-color:green;color:white;padding:.3rem .5rem'>وزن صحي</span>";                

            } else if (value < 30) {

                value += " - <span style='background-color:red;color:white;padding:.3rem .5rem'>وزن زائد</span>";

            } else {

                value += " - <span style='background-color:brown;color:white;padding:.3rem .5rem'>سمنة</span>";

            }

            $('#BMI').html("<b>معادلة مؤشر كتلة الجسم</b>: " + value);
            $('#BMI').next().html("<b>الوزن الصحي بين</b>: " + minWeight + " - " + maxWeight + " كجم")
        }

    })
});