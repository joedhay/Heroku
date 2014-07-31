function whenJQueryIsReadyInitUsersView(){
    if(typeof $ === 'undefined'){
        setTimeout("whenJQueryIsReadyInitUsersView()", 250);
    } else {
        $(document).ready(function() {
            close_error_alert();
        });

    }
}

whenJQueryIsReadyInitUsersView();
