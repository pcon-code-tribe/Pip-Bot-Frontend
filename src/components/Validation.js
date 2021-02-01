const yup = require('yup');

export const UserSchemaLogin =  yup.object().shape({
     Login_Email : yup.string().email("Invalid Email").required(),
     Login_Password : yup.string().required(),
 });
 export const UserSchemaRegistration = yup.object().shape({
    Registration_Email : yup.string().email("Invalid Email").required(),
    Registration_Password : yup.string().min(3,"too Short").required(),
});



