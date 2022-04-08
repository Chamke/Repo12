var contacts = [
    {
    "firstName": "John",
    "lastName": "Doe",
    "number": "12365495208",
    "likes": ["C", "C++", "C#"]
    },
    {
    "firstName": "Jane",
    "lastName": "Doe",
    "number": "4568295761",
    "likes": ["Python", "Swift", "R"]
    },
    {
    "firstName": "Richard ",
    "lastName": "Roe",
    "number": "6938257149",
    "likes": ["React", "Angular", "Vue"]
    },
    {
    "firstName": "Jane",
    "lastName": "Roe",
    "number": "unknown",
    "likes": ["JavaScript", "Node", "HTML & CSS"]
    }
    ];
    function lookUpProfile(name, prop){
    var name1 = '' ;
    var test = '';
    var nameCount = 0;
       for (var i = 0; i < contacts.length; i++){
           if(contacts[i].firstName == name && prop in contacts[i]){
                name1 =  contacts[i][prop];
           }
           if (contacts[i].firstName != name){
               nameCount++;
           }
           
}
if(nameCount == 4){
    return 'no name';
}
else
       { return name1;}
    }
    // Only change code above this line
    
//console.log(contacts[1].likes);
    console.log(lookUpProfile("John", "likes"));

    //console.log(lookUpProfile(name, prop)); // Change this line
    module.exports = lookUpProfile;