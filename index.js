const PromptAsync = require("prompt-sync");
const prompt = PromptAsync();

function space() {
    console.log("/n");
};
//Every login information and portal//
let Enterwindow = () => {
    console.log("/n------Welcome to our Hospital-----/n")
    console.log("Enter 1 to register as a patient");
    console.log("Enter 2 to log in as a patient");
    console.log("Enter 3 to Exit");

    let rkey = prompt("Enter:");
    return rkey ;
};

let Reg =() => {
    console.log("-----------Please Register as a patient----------");

    let username = prompt("Enter your name :");
    let gender = prompt("Gender :");
    let age = prompt("age :");
    let contact = prompt("contact number:");
    let password = prompt ("Please Select Your pass :");

    space();

    info[portal] = {
        username,
        gender,
        age,
        contact,
        password,
    };
    console.log("-----Thank you for Registering--------");

    console.log("-----your Information-----");
    console.log( "your ID",username.length);
    console.log(`username : ${username}`); 
    console.log(`Contact : ${contact}`);
    portal++;
};

let portal = 0;
let info =[];

let logininfo= () => {
    console.log("----Enter your login Information");
    enteredname = prompt("Enter your username :");
    pass = prompt("Enter your password :");
    space();
};
 let profile = (username,age,gender,contact) => {
    console.log(`username : ${username}`);
    console.log(`Gender : ${gender}`);
    console.log(`age : ${age}`);
    console.log(`contact : ${contact}`);
 };
 let mainmenu =() => {
    console.log("----MainMenu-----");
    console.log("enter 1 to edit your info");
    console.log("enter 2 to view Docter's ID");
    console.log("Enter 3 to book an appoint ");
    console.log("enter 4 to exit");

    let mkey = prompt("Enter:");
    space();
    return mkey;
 };
let editcontact =() => {
    profile();
    let newcontact = prompt("Enter a new contact number");
    profile.splice(newcontact,null,info[1].contact);
};

let changepassword = () => {
    
    profile(info[1].username,info[1].gender,info[1].contact,info[1].age);
    let newpass = prompt("Enter a new password");
    profile.splice(newpass,null,info[1].password);
};

//edit information //
let editmenu =() => {
    profile();
    console.log("Your current contact number",profile(info[1].contact));
    console.log("your Current Password",profile(info[1].password));
    console.log("Enter 1 to edit contact number");
    console.log("Enter 2 to change password");

    let ekey = prompt("Enter:")
    switch(ekey){
        case"1" :
        editcontact ();
        break;

        case "2" :
        changepassword();
        break;

        default: console.log("Sorry, you entered a wrong key try again");
        break;
        
    }
}

 
// main work //


mainloop : while(true) {
    let rkey = Enterwindow();

    switch(rkey){
        case"1":
            Reg();
            break;
            
        case"2":
            if(portal=== 0){
                console.log("Please complete your registration first /n");
                continue mainloop;
            }
            while(true){
                logininfo();
                kuchbhi = -1;
                for(i = 0; i<portal; i++) {
                    if( enteredname===info[i].username && pass===info[i].password){
                        kuchbhi = i;
                        profile(info[kuchbhi].username,info[kuchbhi].contact,info[kuchbhi].age);
                        break ;
                        
                    
                }
            };
            if(kuchbhi!== -1){
                secondloop();
                break;
            }else{
                console.log("Try again");
            };
            }
            case"3":

            console.log( "Thank you visit again" );
            break mainloop ;

            default:
                console.log("please Enter a valid key");
    };
};
let book = console.log("Booking Succesfully");
function secondloop()  {
 while(true){
    let mkey = mainmenu()

    switch(mkey){
        case"1":
        editmenu()
        break;

        case"2":
        console.log(" 1 .Dr. Rachit Sinha : cardiologiest  :ID  A");
        console.log("2. Dr. Ajay : radiologiest  :ID B ");
        console.log("3. Dr. mathur : audiologiest  :ID C ");
        console.log("4. Dr. dhritiraj : infection specialist  :ID D");
        console.log("5.Dr. Deep singh : latent disease specialist  :ID  E");
        console.log("5. Dr. Sharma : allrounder :ID F");
        break;

        case"3":
         doctorloop : for(j=0;j<5;j++){
            profile();
            console.log(profile(info[j].username,info[j].age,info[j].contact));
            console.log("Please check Doctor's ID by visiting their schedule option");
             inid =prompt("Enter Doctor's ID");
            switch(inid) {
                case"A":
                console.log("Doctor's name : Dr. Rachit Sinha");
                console.log("your Time : 12pm");
                console.log("your PatientID :",profile(info[j].username));
                book();
                break;
                case"B" :
                console.log("Doctor's name : Dr. ajay");
                console.log("your Time : 2pm");
                console.log("your PatientID :",info[j].username);
                book();
                break;
                case"C" :
                console.log("Doctor's name : Dr. Mathur")
                console.log("your Time : 10pm");
                console.log("your PatientID :",info[j].username);
                book();break;
                case"D":
                console.log("Doctor's name : Dr. Dhritiraj");
                console.log("your Time : 9pm");
                console.log("your PatientID :",info[j].username);
                book();
                break;
                case"E":
                console.log("Doctor's name : Dr. Deep singh");
                console.log("your Time : 3pm");
                console.log("your PatientID :",info[j].username);
                book();
                break;
                case"F":
                console.log("Doctor's name : Dr. sharmaa");
                console.log("your Time : 5pm");
                console.log("your PatientID :",info[j].username);
                book();
                break;
                default: 
                console.log("You Entered a wrong ID Please Try again");
                break;
            }
           
        }
        case"4": 
        console.log("visit again---");
        mainloop();
        break;

        default:
            console.log("Please Enter a valid key")
            break;
        };
        
    };
};