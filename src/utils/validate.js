export const validateLoginFields = (email, password, fullName) => {
    if(fullName && fullName == null) {
        return "Enter a valid name";
    }
    /* to test email */
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    /* to test password with eight characters, one number, one uppercase, one special character */
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isValidEmail)
        return "Email is not valid"
    if(!isValidPassword)
        return "Password must be at least 8 characters long"

    return null;
}