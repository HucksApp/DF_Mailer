




const validator = (obj)=>{
    let error_msg, valid
    for (const [key, value] of Object.entries(obj)) {

        if(!value ){
            error_msg ="All Credential Fields Are Required"
            valid = false
            break    
        }
        if (key =="smtp_svr"){
           let pattern =/^[a-z0-9\._ % \^ @ ! # \$ \^ &]*\.[a-z0-9]{2,6}$/;
            valid = pattern.test(value)
            if(!valid){
                error_msg ="Not a Valid smtp Url Pattern"
                break
            }
        }else if(key =="smtp_svr_usrn"|| key=="frm_email"|| key=="to"){
            let pattern =/^[a-z0-9\._ % \^ ! # \$ \^ &]*@[a-z0-9 % \^ ! # \$ \^ &]{2,18}\.[a-z0-9]{2,6}$/;
            const valid = pattern.test(value)
            if(!valid){
                error_msg ="Not a Valid Email Format"
                break
            }
        }
    }
    return {valid, error_msg}
}
