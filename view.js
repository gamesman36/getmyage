view();
function view(){
    html = /*html*/`
    <h1>Get My Age!</h1>
    First name:<br /><input type="text" oninput="firstName = this.value"><br /><br />
    Year of birth:<br /><input type="text" oninput="yearOfBirth = this.value"><br /><br />
    <button onclick="calc(firstName, yearOfBirth)">Calculate!</button><br /><br />
    ${nameAgeString}
    `;

    app.innerHTML = html;
}