# assign_zigyprints
To check the assign<br>
Install mongo Compass on local machine and Postman<br>
Following Steps should be followed:<br>
Start server<br>
1.npm i<br>
2.npm start<br><br>
In postman <br>
1.To add user<br>
Set request type = post <br>
url = http://localhost:8000/addUser<br>
and in body select raw and object of type JSON(application/json) should be selected<br>
<br>
{<br>
    "fname":"Zigy",<br>
    "lname":"Prints",<br>
    "email": "zigyprints@gmail.com",<br>
    "phone":7903165083<br>
}

2.To delete user<br>
Set request type = delete <br>
url = http://localhost:8000/deleteUser<br>
and in body select raw and object of type JSON(application/json) should <br>be selected<br>

{<br>
    "email": "zigyprints@gmail.com"<br>
}<br>
<br>
In mongoDb Compass:<br>
following data is reflected in database with db name 'zigy' collection name 'users'<br>
</p >