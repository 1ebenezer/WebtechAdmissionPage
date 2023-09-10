function valid(event) {
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const DOB = document.getElementById('DOB');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const highschool = document.getElementById('highschool');
    const gpa = document.getElementById('gpa');
    const guardian = document.getElementById('guardian');
    const Address = document.getElementById('Address');
    const Nationality = document.getElementById('Nationality');
    const essay = document.getElementById('essay');
    
    const errorElement = document.getElementById('error');

    let messages = [];
    if (
        firstname.value === '' ||
        lastname.value === '' ||
        email.value === '' ||
        phone.value === '' ||
        highschool.value === '' ||
        gpa.value === '' ||
        guardian.value === '' ||
        Address.value === '' ||
        Nationality.value === '' ||
        essay.value === '' ||
        DOB.value === ''
    ) {
        messages.push("Please fill out every field.");
    }

    if (essay.value.length < 300) {
        messages.push("Essay must be at least 300 characters.");
    }

    if (!email.value.includes('@')) {
        messages.push("Email is not in the correct format.");
    }
    
    const dobValue = new Date(DOB.value);
    const limit = new Date('2005-01-01'); 

    if (dobValue > limit) {
        messages.push("Invalid age. Date of birth must be on or before January 1, 2005.");
    }

    if (messages.length > 0) {
        event.preventDefault();
        alert(messages.join('\n')); 
        errorElement.innerText = "";
    }
}
