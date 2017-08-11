/** arrayform.com **/
$(function(){
    var sys_show_popup_login = $(".sys_show_popup_login"),
        sys_popup_common = $("#sys_popup_common");
	/* Open popup when click to: Register, Login
	---------------------------------------------------------- */
    sys_show_popup_login.on("click",function(){
        sys_popup_common.fadeIn();
        $("body").on("keydown.closePopup",function(e){
            var getCode = e.keyCode ? e.keyCode : e.which;
            if(getCode == 27) {
                sys_popup_common.find(".closePopup").trigger("click");
            }
        });
        return false;
    });
    sys_popup_common.on("click.closePopup",".closePopup,.overlay-bl-bg",function(){
        sys_popup_common.fadeOut(function(){
            $("body").off("keydown.closePopup");
        });
    });
    sys_popup_common.on("click",".main-content",function(e){
        e.stopPropagation();
    });
});

let user = [{ //array of objects !!!!
        

    }];

        function createUser(){

            let name = document.querySelector('#txt_name').value;
            let email = document.querySelector('#txt_email').value;
            let password = document.querySelector('#txt_password').value;
            let newAccount = {
                name: name,
                email: email,
                password: password
            };
    user.push(newAccount);

    console.log(user);
    let jns = JSON.stringify(user);
    localStorage.setItem('user',jns);

    let jns_retrieve = localStorage.getItem('user');
    console.log(jns_retrieve);

    let jns_parse = JSON.parse(localStorage.getItem('user'));
    console.log(jns_parse);

    //Display in console inside of json array
    console.log("Name is " + jns_parse[0].name);
    console.log("Email is " + jns_parse[0].email)
    console.log("password is " + jns_parse[0].password)
    
        };
            function readuser(){
                    
                
                console.log(user);
                let jns = JSON.stringify(user);
                localStorage.setItem('user',jns);

                let jns_retrieve = localStorage.getItem('user');
                console.log(jns_retrieve);

                let jns_parse = JSON.parse(localStorage.getItem('user'));
                console.log(jns_parse);
                console.log(user.length);
                    var initialLength = user.length;
                    for(var i=0; i<initialLength; ++i) {
                        
                console.log("Name: " + jns_parse[i].name);
                console.log("Email: " + jns_parse[i].email);
                    }
            };

