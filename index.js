const [user, setUser] = useState({
        name: '', email: '', message: ''
    });
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const postData = async (e) => {
        try {
            e.preventDefault();
            const { name, email, message } = user;
            const res = await fetch("https://sayantan-chakraborty-default-rtdb.asia-southeast1.firebasedatabase.app/contactdata.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name, email, message,
                }),
            }
            );
            if (!res) {
                window.alert("Unsuccessfull")
            }
            else {
                window.alert("Thank You for contacting. You will get a reply ASAP.")
                window.location.reload();
            }

        } catch (error) {
            window.alert("Some Error Occurred");

        }
    }