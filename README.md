# Smtp  Local Host Html email sender 📮

## Description
This sofware uses a local host served web page to receive needed information about the ***smtp login credentials, info of sender and receivers info*
**This was for a simple tutorial on sending emails with python and flask [https://www.codementor.io/@hucksapp/2354vbued4]


# Usage🛠
You must have python3 installed
```
$ ./install.sh
```
```
$./api.py
```


Data Fields              |        Description
-------------------------|---------------------------
smtp server              | smtp server host e.g smtp.outlook.com
port                     | server smtp port e.g 587
smtp username or email   | smtp client username e.g johndoe@outlook.com
smtp server password     | smtp clent password
from name                | name you want to appear as sender
from email               | email address you want to appear as sender 🚯 most free smtp provider do not allow you to change that from default [ smtp username or email  ]
to                       | receiver email address
repy_to                  | email address to set as the default recieving email for the receiver to reply to
subject                  | subject of the email
text                     | accepts text message or html ecapsuled messages (html messages, html page)

## Author 🖌
Abiodun Aremu ~[hucksapp@gmail.com]:



