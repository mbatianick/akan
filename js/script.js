function akan(){
//creating variables based on the form
    var date=document.getElementById("date").value;
    var dateEnt = date.split("-");
    var dd=parseInt(dateEnt[2]);
    var mm=parseInt(dateEnt[1]);
    var yy=parseInt(dateEnt[0]);

   //formula for birthday calc
    var cc=(yy-1)/100+1; 
    var dayBirth = ( cc/4 -2*cc-1 + 5*yy/4  + 26*(mm+1)/10 + dd ) % 7;
        
    
    var maleNames=["Kwasi"," Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var gender=document.getElementById("gender").value;
    var daysOfWeek=["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Suturday"];
    var dayNumber = Math.round(dayBirth);

    //output 
    if(!isNaN(dayNumber)) {
        if(gender=="Male"){
            
            document.getElementById("output").innerHTML=("You were born on " + daysOfWeek[dayNumber] + " and Your akana name is " + maleNames[Math.round(dayNumber)] );
        }
        else if(gender==="Female"){
            document.getElementById("output").innerHTML=("You were born on " + daysOfWeek[dayNumber] + " and Your akana name is " + femaleNames[Math.round(dayNumber)] );
        }else{
            alert("Enter valid birthday and choose your gender");
            document.getElementById("output").innerHTML="";
        }
    }
    else{
        alert("Enter valid birthday and choose your gender");
        document.getElementById("output").innerHTML="";
    }
    else if(dd<0 || dd>31 || mm<0 || mm>12 || yy>2020) {
        alert("Enter a valid DATE!")
    }
    else if(mm==2 && dd>29) {
        alert("Enter a valid DATE!")
    }
}
