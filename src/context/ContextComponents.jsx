import { createContext, useEffect, useState } from "react";
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile as updateProfileFirebase
} from "firebase/auth";
import PropTypes from 'prop-types';
import auth from "../firebase.config";

export const OwnContext = createContext();

const ContextComponents = ({ children }) => {
    const [users, setUsers] = useState(null);
    const [see, setSee] = useState(true);
    const [loading, setLoading] = useState(true)
    const [theme, setTheme] = useState(() => {
        // Retrieve theme from local storage or default to 'synthwave'
        return localStorage.getItem('theme') || 'synthwave';
    });
    const [countries, setCountries] = useState([])
    const [addedSpot, setAddedSpot] = useState([])
    const [triggerRender, setTriggerRender] = useState(false);
    const [details, setDetails] = useState([])
    const [singleCountry, setSingleCountry] = useState([])
    const [reviews, setReviews] = useState([])
    const themeControl = (e) => {
        const selectedTheme = e.target.checked ? 'light' : 'synthwave';
        setTheme(selectedTheme);
        localStorage.setItem('theme', selectedTheme); // Save theme to local storage
    }

    const signUpWithNewUser = async (e, navigate, location) => {
        e.preventDefault();

        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photo.value;
        const password = e.target.password.value;
        const isValid = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);

        if (!isValid) {
            return toast.error('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long');
        }

        try {
            setLoading(true)
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const currentUser = userCredential.user;
            await updateProfileFirebase(currentUser, {
                displayName: displayName,
                photoURL: photoURL
            });

            setUsers({
                ...currentUser,
                displayName: displayName,
                photoURL: photoURL
            });
            navigate(location?.state ? location.state : '/');
            toast.success('Successfully registered');

        } catch (error) {
            const errorMessage = error.message;
            toast.error(errorMessage);
        }
    };

    const logInWithUser = async (e, navigate, location) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            setLoading(true)
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setUsers(user);
            navigate(location?.state ? location.state : '/');
            toast.success('Successfully Login');

        } catch (error) {
            const errorMessage = error.message;
            toast.error("Invalid. Please check your email and password.");
            console.log(errorMessage);
        }
    };

    const googleSignin = (e, navigate, location) => {
        e.preventDefault()
        const provider = new GoogleAuthProvider();
        setLoading(true)
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUsers(user)
                navigate(location?.state ? location.state : '/');
                toast.success("Successfully Google Login")
            }).catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
    }


    const githubSignin = (e, navigate, location) => {
        e.preventDefault()
        const provider = new GithubAuthProvider()
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(result);
                setUsers(user)
                navigate(location?.state ? location.state : '/');
                toast.success("Successfully Github Login")
            }).catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
    }


    const logoutUser = () => {
        setLoading(true)
        signOut(auth).then(() => {
            setUsers(null);
            toast.success('signout success');
        }).catch((error) => {
            toast.error(error.message);
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUsers(currentUser);
                setLoading(false)
            } else {
                setUsers(null);
                setLoading(false)
            }
        });
        return () => { unsubscribe(); };
    }, []);

    const seeOrNot = () => {
        setSee(!see);
    };

    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    console.log(countries);

    const handleAddSpot = (e) => {
        e.preventDefault();
        const formData = {
            image: e.target.image.value,
            tourists_spot_name: e.target.tourists_spot_name.value,
            country_Name: e.target.country_Name.value,
            location: e.target.location.value,
            description: e.target.description.value,
            average_cost: e.target.average_cost.value,
            seasonality: e.target.seasonality.value,
            travel_time: e.target.travel_time.value,
            totalVisitorsPerYear: e.target.totalVisitorsPerYear.value,
            user_email: e.target.user_email.value,
            user_name: e.target.user_name.value
        };

        fetch('http://localhost:5000/added_spot', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Spot added successfully');
                    // Update the trigger to force re-render
                    setTriggerRender(prev => !prev);
                }
            });
    };

    useEffect(() => {
        fetch('http://localhost:5000/added_spot')
            .then(res => res.json())
            .then(data => setAddedSpot(data));
    }, [triggerRender]);

    const deleteSpot = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#120A2E",
            cancelButtonColor: "#1C1145",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    confirmButtonColor: "#120A2E",
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                fetch(`http://localhost:5000/added_spot/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = addedSpot.filter(spot => spot._id !== _id)
                            setAddedSpot(remaining)
                        }
                    })
            }
        });
    }

    const seeDetails = (_id) => {
        fetch(`http://localhost:5000/added_spot/${_id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data);
            })
            .catch(error => {
                console.error('Error fetching details:', error);
            });
    };

    const showCountrySub = (name) => {
        const findCountry = addedSpot.filter(coun => coun.country_Name === name)
        setSingleCountry(findCountry)
    }


    return (
        <OwnContext.Provider value={{
            signUpWithNewUser,
            users,
            logInWithUser,
            loading,
            logoutUser,
            seeOrNot,
            see,
            googleSignin,
            githubSignin,
            themeControl,
            theme,
            countries,
            handleAddSpot,
            addedSpot,
            deleteSpot,
            seeDetails,
            details,
            showCountrySub,
            singleCountry,
            reviews
        }}>
            {children}
        </OwnContext.Provider>
    );
};

ContextComponents.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContextComponents;