function buat_login() {
  var elem = document.getElementById("x");
  elem.parentElement.removeChild(elem);

  var p = document.createElement("p");
  p.className = "tulisan_login";
  p.innerHTML = "silahkan_mendaftar"

  var element = document.getElementsByTagName("div")[0];
  element.appendChild(p);

  var form = document.createElement("FORM");
  element.appendChild(form);

  var label = document.createElement("label");
  label.innerHTML ="NameUser";
  form.appendChild(label);

  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "NamaUser";
  input_username.placeholder = "NamaUser.."
  input_username.className = "form_login";
  form.appendChild(input_username);

  var label2 = document.createElement("label");
  label2.innerHTML ="Nomor Handphone";
  form.appendChild(label2);

  var input_nomor = document.createElement("input");
  input_nomor.type = "text";
  input_nomor.name = "Nomor Handphone";
  input_nomor.placeholder = "Nomor Handphone."
  input_nomor.className = "form_login";
  form.appendChild(input_nomor);

  var label3 = document.createElement("label");
  label3.innerHTML ="UserName";
  form.appendChild(label3);

  var input_email = document.createElement("input");
  input_email.type = "text";
  input_email.name = "UserName";
  input_email.placeholder = "UserName atau email."
  input_email.className = "form_login";
  form.appendChild(input_email);

  var label4 = document.createElement("label");
  label4.innerHTML ="password";
  form.appendChild(label4);

  var input_pasword = document.createElement("input");
  input_pasword.type = "pasword";
  input_pasword.name = "pasword";
  input_pasword.placeholder = "pasword."
  input_pasword.className = "form_login";
  form.appendChild(input_pasword);


  var tombol = document.createElement("button");
  tombol.type = "submit";
  tombol.innerHTML = "DAFTAR_SEKARANG"
  tombol.className = "tombol_login";
  form.appendChild(tombol);
}
