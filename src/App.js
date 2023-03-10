import React from "react"

export default function App() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    const [userData, userDataFunc] = React.useState(
      {email: "", password: "", confirm: "", newsletter: false}
    )

    function handleChange(event) {
        console.log(userData)
        userDataFunc(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.type==="checkbox" ? event.target.checked : event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        userData.password===userData.confirm ?
            userData.newsletter ? 
                console.log("Thanks for signing up for our newsletter!") :
                console.log("Successfully signed up")
            :
            console.log("passwords to not match")
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit} action="#">
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name="email"
                    value={userData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    name="password"
                    value={userData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    name="confirm"
                    value={userData.confirm}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        name="newsletter"
                        checked={userData.newsletter}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
