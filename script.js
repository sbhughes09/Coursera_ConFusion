$(document).ready(function(){
     $("#closeButton").click(function(){
         $('#loginModal').modal('hide');       
            });
        $("#cancelButton").click(function(){
         $('#loginModal').modal('hide');       
            });
            $("#resCloseBtn").click(function(){
         $('#resModal').modal('hide');       
            });
            $("#resCancelBtn").click(function(){
         $('#resModal').modal('hide');       
            });
        $("#loginBtn").click(function(){
                $('#loginModal').modal("toggle"); 
        });
        $("#reserveBtn").click(function(){
            $('#resModal').modal("toggle"); 
        });
});
