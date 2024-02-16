import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.utils import formataddr




def formatter(name:str,email:str)->str:
    return formataddr((name,email))
    #return f'"{name}"<{email}>'





def send_email(smtp_server:str,
                smtp_svr_usrn:str,
                smtp_svr_password:str,
                FROM:str,
                TO:str,
                REPLY_TO:str,
                msg:dict[str ,str],
                PORT:int=587 
                )->dict[str,str]:

    message = MIMEMultipart("alternative")
    message["Subject"] = msg['subject'] 
    message["From"] = FROM
    message["To"] = TO
    message.add_header('reply-to', REPLY_TO)

    if msg["html"]:
       html_msg = MIMEText(msg["txt"], "html")
       message.attach(html_msg)
    elif not msg["html"]:
        plain_msg = MIMEText(msg["txt"], "plain")
        message.attach(plain_msg)

    context = ssl.create_default_context()
    with smtplib.SMTP(host=smtp_server,port=PORT,timeout=20) as server:
        server.starttls(context=context)
        server.login(smtp_svr_usrn, smtp_svr_password)
        try:
            server.sendmail(FROM,TO,message.as_string())
            return { "sent":True, "info":{ "to":TO, "from":FROM,"reply-to":REPLY_TO }}
        except Exception as e:
            print(e)
            return { "sent":False, "info":{ "to":TO, "from":FROM,"reply-to":REPLY_TO }}
        


