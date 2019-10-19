import Axios from 'axios'
const qs = require('qs');

class UserService{

    _getRootURL=()=>{
        return 'Application'
    }
    LoginUser=(data)=>{
        //let rootURL=this._getRootURL()
        let rootURL=window.App.url
        let url=`${rootURL}/Users/Login`
        return Axios.post(url,qs.stringify(data),{
            //method:'post',
            //url:url,
            headers: {
                'Accept': 'application/json',
                //'content-type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin':'*'
              },
            //data: qs.stringify(data),
            crossDomain: 'true',
            responseType:'json'
        })
    }
    SignOutUser=()=>{
        
    }
}


export default UserService