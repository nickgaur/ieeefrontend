export default function validateInfo(values, x) {
    let errors = {};

    if (!values.firstName.trim()) {
        errors.firstName = "First name required";
    }
    if (!values.lastName.trim()) {
        errors.lastName = "Last name required";
    }
    if (!values.branch.trim()) {
        errors.branch = "Required";
    }
    if (!values.college.trim()) {
        errors.college = "Required";
    }
    if (!values.year) {
        errors.year = "Required";
    } else if (values.year > 7) {
        errors.year = "Invalid Year";
    }
    if (!values.phone) {
        errors.phone = "Required";
        console.log(values.phone);
    } else if (values.phone.length !== 10) {
        errors.phone = "Invalid Phone number";
    }
    if (!values.gender) {
        errors.gender = "Required";
    }

    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }

    if (!values.email) {
        errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    } else if (x === 1) {
        errors.email = "Already Registered ";
    }

    return errors;
}
