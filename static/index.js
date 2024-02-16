
$('document').ready( function(){
        $("form.form").submit(function(event){
            $("#feedback_console").text("")
            event.preventDefault()
            $("#send").attr("disabled", true);
            const msg = {}
            msg.smtp_svr=$("#smtp_svr").val()
            msg.port=$("#port").val()
            msg.smtp_svr_usrn=$("#smtp_svr_usrn").val()
            msg.smtp_svr_password=$("#smtp_svr_password").val()
            msg.frm_name=$("#frm_name").val()
            msg.frm_email=$("#frm_email").val()
            msg.to=$("#to").val()
            msg.reply_to=$("#reply_to").val()
            //msg.to_file=$("#to_file").val()
            msg.subject=$("#subject").val()
            msg.html=$("#html").val()
            msg.txt=$("#txt").val()
            const {valid, error_msg}=validator(msg)
            if(valid){
                $.ajax(
                    {
                        type:"POST",
                        url:"/",
                        data:msg,
                        success:function(data, status, xhttp){
                            console.log(data,status,xhttp)
                           $("#send").removeAttr("disabled");
                           $("#feedback_console").text(`sent from ${data.info.from} to ${data.info.to} =====> sent ${data.sent}`)
                        },
                        error:function(xhr, ajaxOptions, thrownError){
                            $("#send").removeAttr("disabled");
                            console.log(xhr, ajaxOptions, thrownError)
                        }, 
                        async: false
                     }
                    )
            }else{
               alert(error_msg)
                $("#send").removeAttr("disabled");
            }
        })
})