import axios from "axios";
import { useEffect, useState } from "react";

export default function useValidateUser(email_) {
    const url = `https://reqres.in/api/users?page=2`;

    const [Data, setData] = useState([]);
    const [Error, setError] = useState(null);

    let isEmail = 0;
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data.data);
            })
            .catch((err) => {
                setError(err);
            });
    }, [url]);

    for (let index = 0; index in Data; index++) {
        if (email_ === Data[index].email) {
            isEmail = 1;
        }
    }

    return [isEmail, Error];
}
