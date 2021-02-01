const yup = require('yup');

export const UserSchemaLogin =  yup.object().shape({
     email : yup.string().email("Invalid Email").required(),
     password : yup.string().required(),
 });
 export const UserSchemaRegistration = yup.object().shape({
    email : yup.string().email("Invalid Email").required(),
    password : yup.string().min(3,"too Short").required(),
});



