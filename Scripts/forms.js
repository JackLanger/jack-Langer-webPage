var form = document.querySelector('#mail');

form.addEventListener('submit',submitForm);


function submitForm (){
    $.ajax({
        url: '/Person/Edit/jacek.langer@outlook.de/',
        type: 'post',
        data: $('#myForm').serialize(),
        success: function(){
            alert("Thank you, your message has been delivered by dwarfes.");
        }
    });
}

