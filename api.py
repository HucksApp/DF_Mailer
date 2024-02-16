#!/usr/bin/env pipenv run python3
from flask import Flask, render_template,request
from scripts.smtp import send_email, formatter





app = Flask(__name__)

@app.route("/",methods=["GET","POST"])
def smtp_exl():
    if request.method == 'POST':
        print(request.form)
        FROM = formatter(request.form.get('frm_name'),request.form.get('frm_email'))
        res = send_email(
                     request.form.get('smtp_svr'),
                     request.form.get('smtp_svr_usrn'),
                      request.form.get('smtp_svr_password'),
                      FROM,
                       request.form.get('to'),
                       request.form.get('reply_to'),
                       {
                        "html":bool(int(request.form.get('html'))),
                        "subject":request.form.get("subject"),
                        "txt":request.form.get("txt"),
                         },
                         request.form.get('port'),
                         )
        return res

    
    return render_template('index.html')


if __name__ == '__main__':
    app.run()