let random_image = ["https://img.freepik.com/premium-vector/people-profile-icon_24877-40756.jpg?size=626&ext=jpg&ga=GA1.2.576068589.1681313773&semt=ais", "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.2.576068589.1681313773&semt=ais", "https://img.freepik.com/premium-vector/avatar-user-icon-vector_97886-15021.jpg?size=626&ext=jpg&ga=GA1.2.576068589.1681313773&semt=ais"];
let add = document.getElementById("add_button");
let name_user = document.getElementById("name");
let user_name = document.getElementById("username");
let gmail_user = document.getElementById("emailAddress");
let mobileno_user = document.getElementById("mobilenumber");
let user_not = document.getElementById("nouser");
let password_user = document.getElementById("passwordinput");
let user_count = 0;

add.onclick = function() {
    user_count += 1;
    let name_value = name_user.value;
    let username_value = user_name.value;
    let gmail_value = gmail_user.value;
    let mobile_value = mobileno_user.value;
    let gender_value = "";
    let pass_value = password_user.value;
    let gender_user = document.getElementsByName("sex");
    for (let i = 0; i < gender_user.length; i++) {
        if (gender_user[i].checked) {
            gender_value = gender_user[i].value;
        }
    }
    if (name_value === "") {
        alert("Please Enter Your Details First....")
        return
    } else if (username_value === "") {
        alert("Please Enter Your Details First....")
        return
    } else if (gmail_value === "") {
        alert("Please Enter Your Details First....")
        return
    } else if (mobile_value === "") {
        alert("Please Enter Your Details First....")
        return
    } else if (pass_value === "") {
        alert("Please Enter Your Details First....")
        return
    }

    let imageelement = "";
    if (gender_value === "Female") {
        imageelement = random_image[0]
    } else if (gender_value === "Male") {
        imageelement = random_image[1]
    } else {
        imageelement = random_image[2]
    }

    let detail_container = document.getElementById("details_container");
    if (user_count === 1) {
        detail_container.removeChild(user_not)
    }
    let user_container = document.createElement("div");
    user_container.classList.add("user_container", "d-flex", "flex-row");
    detail_container.appendChild(user_container);

    let image_user = document.createElement("img");
    image_user.setAttribute("src", imageelement);
    image_user.classList.add("user_image");
    user_container.appendChild(image_user)

    let containertwo = document.createElement("div");
    containertwo.classList.add("pl-2");
    user_container.appendChild(containertwo);

    let for_name = document.createElement("h1");
    for_name.classList.add("name_details_user");
    for_name.textContent = "Name :";
    let name_span = document.createElement("span");
    name_span.classList.add("name_span");
    name_span.textContent = name_value;
    for_name.appendChild(name_span);
    containertwo.appendChild(for_name);

    let for_username = document.createElement("h1");
    for_username.classList.add("name_details_user");
    for_username.textContent = "User_Name :";
    let username_span = document.createElement("span");
    username_span.classList.add("name_span");
    username_span.textContent = username_value;
    for_username.appendChild(username_span);
    containertwo.appendChild(for_username);

    let for_email = document.createElement("h1");
    for_email.classList.add("name_details_user");
    for_email.textContent = "Email :";
    let email_span = document.createElement("span");
    email_span.classList.add("name_span");
    email_span.textContent = gmail_value;
    for_email.appendChild(email_span);
    containertwo.appendChild(for_email);

    let for_mobile = document.createElement("h1");
    for_mobile.classList.add("name_details_user");
    for_mobile.textContent = "Mobile_No :";
    let mobile_span = document.createElement("span");
    mobile_span.classList.add("name_span");
    mobile_span.textContent = mobile_value;
    for_mobile.appendChild(mobile_span);
    containertwo.appendChild(for_mobile);

    let containerthree = document.createElement("div");
    containerthree.classList.add("container_sub_details_prof");

    let for_gender = document.createElement("h1");
    for_gender.classList.add("name_details_user");
    for_gender.textContent = "Your_Gender :";
    let gender_span = document.createElement("span");
    gender_span.classList.add("name_span");
    gender_span.textContent = gender_value;
    for_gender.appendChild(gender_span);
    containerthree.appendChild(for_gender);

    let sucess_message = document.createElement("h1");
    sucess_message.classList.add("password_success");
    sucess_message.textContent = "Your password has successfully set ";

    let icon_message = document.createElement("i");
    icon_message.classList.add("fas", "fa-check-circle", "tick_pass_sucess");
    sucess_message.appendChild(icon_message);
    containerthree.appendChild(sucess_message);
    containertwo.appendChild(containerthree)
};