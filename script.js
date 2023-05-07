var fullName ;
var dob ;
var maritalStatus ;
fullName = prompt("Enter your full name");
dob = parseInt(prompt("Enter your Date of Birth in numerical format  DDMMYY Eg: 310199"));
maritalStatus = confirm("Press OK If you are married. Cancel if Unmarried?");
function dataChecker()
    {
        
        if (typeof(dob) != 'number' ) 
            {
                document.write("Invalid entry for date of birth");
            }   
       else if (typeof(maritalStatus) != 'boolean') 
            {
                document.write("Invalid entry for marital status");
            }
        else
        {
            alert("Data Verified.Added Succesfully");
        }
    }
dataChecker();