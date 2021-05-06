$("form #check-tenant").attr('checked', true)

$(function () {
    $("#check-tenant").click(function () {
        if ($(this).is(":checked")) {
            $("#owner-code").show();
        } else {
            $("#owner-code").hide();
        }
    });
});
