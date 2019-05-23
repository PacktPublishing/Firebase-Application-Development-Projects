const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.makeAdmin = functions.https.onCall((data, context)=>{

    //message = '';
    return admin.auth().getUserByEmail(data.email).then(user =>{
        if(data.email === 'vic@packt.com' || data.email === 'wooding@packt.com'){
            message = `${data.email} has admin priviledges`
            return admin.auth().setCustomUserClaims(user.uid, {admin: true});
            
        }else{
            message = `${data.email} doesn't have admin priviledges`
            return admin.auth().setCustomUserClaims(user.uid, {admin: false});
        }
    }).then(()=>{
            return {
                message
            }
       
    }).catch(error => {
        return error;
    })
})
