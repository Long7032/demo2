userInfoGenerator = () => {
  let userName
  let userObj;
  let vitri;

  if (sessionStorage.getItem("userObj") != null) {
    userName = sessionStorage.getItem("userObj")
    userName = userName.replaceAll('"', '')
  } else {
    userName = "";
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i].accountName == userName) {
      vitri = i;
    }
  }
  document.querySelector("body > .container-fluid > .container > .row > .col-md-6 > table > tbody > tr:nth-child(1) > td:nth-child(2)").innerHTML = users[vitri].name;
  document.querySelector("body > .container-fluid > .container > .row > .col-md-6 > table > tbody > tr:nth-child(2) > td:nth-child(2)").innerHTML = users[vitri].birthday;
  document.querySelector("body > .container-fluid > .container > .row > .col-md-6 > table > tbody > tr:nth-child(3) > td:nth-child(2)").innerHTML = users[vitri].phoneNumber;
  document.querySelector("body > .container-fluid > .container > .row > .col-md-6 > table > tbody > tr:nth-child(4) > td:nth-child(2)").innerHTML = users[vitri].email;
  document.querySelector("body > .container-fluid > .container > .row > .col-md-6 > table > tbody > tr:nth-child(5) > td:nth-child(2)").innerHTML = users[vitri].accountName;
  document.querySelector("body > .container-fluid > .container > .row > .col-md-6 > table > tbody > tr:nth-child(6) > td:nth-child(2)").innerHTML = users[vitri].password;
}
