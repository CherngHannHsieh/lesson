// new Vue({
//     el:".error-catch",
//     data:{
//         errorType:""
//     },
//     methods:{
//         errorDis(msg){     //msg = errorCatch   
//             this.errorType = msg;
//             alert("error catch");
//         }
//     }
// });

new Vue({
    // el:".login-form",
    el:".box",
    data:{
        user:{
            account:"",
            password:""
        },
        set:{
            account:"1234@gmail.com",
            password:"1234"
        },
        // errorCatch:"" ,  //外部error判斷
        isDis:"none",
        errMsg:""
    },
    methods:{
        infoSub:function(){
            var error = 0;  //內部error判斷

            if(this.user.account==""){
                // alert("缺少電子郵件");
                error = 1;
                // this.errorCatch = 1;
                this.errMsg = "缺少電子郵件";
                this.isDis = "block";
            }
            
            if(this.user.account != this.set.account && error == 0){
                // alert("這個電子郵件沒有任何帳號");
                // this.errorCatch = 2;
                this.errMsg = "這個電子郵件沒有任何帳號";
                this.user.account="";
                this.isDis = "block";
            }else if(this.user.password=="" && error == 0){
                // alert("密碼無效");
                // this.errorCatch = 3;
                this.errMsg = "密碼無效";
                this.isDis = "block";
            }

            if(this.user.account==this.set.account && this.user.password == this.set.password){
                alert("登入成功 \n帳號:1234@gmail.com \n密碼:1234");
                this.user.account="";
                this.user.password="";
            }

        }
    }
});