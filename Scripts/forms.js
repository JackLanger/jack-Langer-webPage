function submitForm (){
    $.ajax({
        url: '/Person/Edit/@Model.Id/',
        type: 'post',
        data: $('#myForm').serialize(),
        success: function(){
            alert("Thank you, your message has been delivered by dwarfes.");
        }
    });
}