//Listen for form submit
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAGlfmBuxN2i1NTxep4r9Z7X2C5f0Jsu-I",
    authDomain: "lg-marketing.firebaseapp.com",
    databaseURL: "https://lg-marketing.firebaseio.com",
    projectId: "lg-marketing",
    storageBucket: "lg-marketing.appspot.com",
    messagingSenderId: "291137354874"
};
firebase.initializeApp(config);

//Reference messages collection
var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);


//Submit form
function submitForm(e){
    e.preventDefault();
    
    //get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');
    
    
    //Save message
    saveMessage(name, email, subject, message);
    
    //Show alert
    document.querySelector('.alert').style.display = 'block';
    
    //Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 3000);
    
    
    //Clear form
    document.getElementById('contactForm').reset();
    
}

//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//Save messages to firebase
function saveMessage(name, email, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });
}