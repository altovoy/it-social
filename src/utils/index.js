
import isEmpty from 'is-empty'

export const signUpIntegrityTest  = formData => {
    let errors = {}
    if(!formData){
        errors['all'] = 'Form data empty'
        return
    }
    formData.entries().foreach(entry =>{ if(isEmpty(entry[1])){errors = {...errors, [entry[0]]:'Empty field'}}})
    const {firstName, lastName, email, phone, city, country, password1, password2} = formData
    if(password1 !== password2){
        errors['password1'] = 'password does not match'
    }

    return errors
    
}