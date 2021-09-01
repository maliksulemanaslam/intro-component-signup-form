$(".bottom-button").click(function() {
  var mail = $("#email-address").val();
  var fname = $("#first-name").val();
  var lname = $("#last-name").val();
  var psswd = $("#password").val();
  validateForm(fname, lname, psswd);
  IsEmail(mail);
});

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!regex.test(email)) {
    $("#email-address").addClass("is-invalid");
    $("#email-address").addClass("email-invalid-color");
    $(".invalid-email").removeClass("hide");
    $(".invalid-email").addClass("show");
    setTimeout(function() {
      $("#email-address").removeClass("is-invalid");
      $("#email-address").removeClass("email-invalid-color");
      $(".invalid-email").removeClass("show");
      $(".invalid-email").addClass("hide");
    }, 3000);
  } 
}

function validateForm(fname, lname, psswd) {
  if (fname == "") {
    $("#first-name").addClass("is-invalid");
    $(".fname-empty-field").removeClass("hide");
    $(".fname-empty-field").addClass("show");
    setTimeout(function() {
      $("#first-name").removeClass("is-invalid");
      $(".fname-empty-field").removeClass("show");
      $(".fname-empty-field").addClass("hide");
    }, 3000);
  }
  if (lname == "") {
    $("#last-name").addClass("is-invalid");
    $(".lname-empty-field").removeClass("hide");
    $(".lname-empty-field").addClass("show");
    setTimeout(function() {
      $("#last-name").removeClass("is-invalid");
      $(".lname-empty-field").removeClass("show");
      $(".lname-empty-field").addClass("hide");
    }, 3000);
  }
  if (psswd == "") {
    $("#password").addClass("is-invalid");
    $(".psswd-field").removeClass("hide");
    $(".psswd-field").addClass("show");
    setTimeout(function() {
      $("#password").removeClass("is-invalid");
      $(".psswd-field").removeClass("show");
      $(".psswd-field").addClass("hide");
    }, 3000);
  }

}
