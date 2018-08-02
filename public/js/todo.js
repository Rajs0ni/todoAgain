$('document').ready(function(){
    
  $('.row').mouseover(function(){
    $(this).find(".outersubmenu").css({'display':'block'});  
  });
  $('.row').mouseout(function(){
    $(this).find(".outersubmenu").css({'display':'none'});
});


$(".collab").hide();
$(".addcollab").click(function(){
// $("html,body").addClass("disabled");
// $(".collab").addClass("enabled");
$(".collab").show();
});
    $("body").on('click','#pin',function(){
        todo = $(this).parent().text();
        
            window.location.replace("/todo/pin/"+todo);
        
    })
    $("body").on('click','#trash',function(){
        todo = $(this).parent().text();
        if(confirm("Are you sure you want to trash the task?"))
            window.location.replace("/todo/trash/"+todo);
        else
            window.reload(true);
    })

    $("body").on('click','#archive',function(){
        todo = $(this).parent().text();
            window.location.replace("/todo/archive/"+todo);

    })

    $("body").on('click','#unarchive',function(){
        todo = $(this).parent().text();

            window.location.replace("/todo/unarchive/"+todo);
       
    })

    $("body").on('click','#restore',function(){
        todo = $(this).parent().text();

            window.location.replace("/todo/restore/"+todo);
       
    })

    $("body").on('click','#delete',function(){
        todo = $(this).parent().text();
        if(confirm("Are you sure you want to delete the task permanently?"))
            window.location.replace("/todo/"+todo+"/deleteTask");
        else
            window.reload(true);
    })

    $("#clearall").click(function(){
        val="";
        while(1){
            val=prompt(" Enter\n 1 : simply trash all the tasks \n 2 : permanently delete all the tasks ");
                if(val==1||val==2||val==null)
                    break;
        }
        if (val!=null)
           window.location.assign('/todo/clearall?val='+val);

    });
    $('#colorpicker').click(function()
    {
         $color = $(this).val();
         $(this).parent().parent().parent().parent().parent().css('background',$color);
         //alert('hey');
    });
// $('.outersubmenu').mouseover(function(){
//     $(this).css({'display':'block'});  
//   });
//   $('.outersubmenu').mouseout(function(){
//     $(this).css({'display':'none'});
// });

    
});
// function change()
// {
//     var color = document.getElementById('colorpicker').value;
//     document.getElementById('panel').style.color = 'pink';
// }