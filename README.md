# pitstop
**API for Pitstops**

Clone Repository - 

`https://github.com/marediasafan/pitstop.git`

Install npm required packages by running `npm install` from the root directory of the project.


Start local server by running 

`npm run start:dev` 

Change local port to custom port inside `bin/www` if needed.

<br/>

**DB Migration**

All database migration script are stored inside **server** directory.

``cd pitstop/server`` <br/>
``sequelize db:migrate``

This will create 2 tables - cars and appointments

`NOTE: please change postgres config inside server/config/config.json to match your 
local env DB settings`


**_Available API methods for Pitstop_**

<p>Cars:</p>
<p>1. GET /api/cars  -  List all cars</p>
<p>2. POST /api/cars/create  -  Create a new car</p>
<p>3. POST /api/cars/:carid/delete  -  Delete a car</p>

<br/>
<p>Appointments:</p>
<p>1. GET /api/appointments  -  List all appointments</p>
<p>2. POST /api/appointments/create  -  Add new appointment</p>
<p>3. POST /api/appointments/:app_id/delete  -  Delete appointment</p>
<p>4. POST /api/appointments/:app_id/update  -  Update appointment</p>


