import { useState } from "react";
import useValidateUser from "../../sevices/useValidateUser";

const useForm = (validate) => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        branch: "",
        college: "",
        year: "",
        phone: "",
        email: "",
        gender: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const [is_Email, Error] = useValidateUser(values.email);

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validate(values, is_Email));

        if (
            !validate(values).firstName &&
            !validate(values).lastName &&
            !validate(values).branch &&
            !validate(values).college &&
            !validate(values).year &&
            !validate(values).phone &&
            !validate(values).email &&
            !validate(values).gender
        ) {
            // if (is_Email) {
            //     alert("Already Registered");
            //     console.log("Already Registered");
            // } else {
            console.log(values);
            // }
        }
    };

    return { handleChange, values, handleSubmit, errors };
};

export default useForm;
