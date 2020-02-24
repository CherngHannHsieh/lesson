//import {signAccount,signUserName} from "C:/Users/My/Desktop/lesson/signPage.js";

new Vue({
    el:".box",
    data:{
        account:'sp.signAccount',
        username:'sp.signUserName',
        passwordIndex:"",
        passwordLevel:'0',
        passwordStrong:'',

        inc0:'',
        inc1:'',
        inc2:'',
        inc3:'',
        inc4:'',

        iserror:"",
        iserror1:"",
        iserror2:""
    },
    watch:{
        passwordIndex:function(value){
            if(this._vaild(value)){
                this.passwordLevel = -1;
            }else{
                if(0 < value.length && value.length <= 8){
                    this.passwordLevel = 0;
                }
                else if(8 < value.length && value.length <= 12){   //  /[a-z]/.test(this.passwordIndex)
                    this.passwordLevel = 1;
                }
                else if(12 < value.length && value.length <= 16){
                    this.passwordLevel = 2;
                }
                else if(16 < value.length && value.length <= 20){
                    this.passwordLevel = 3;
                }
                else if(20 < value.length){
                    this.passwordLevel = 4;
                }
            }

            switch(this.passwordLevel){
                case 0:
                    this.inc0 = "red";
                    this.inc1 = "";
                    this.inc2 = "";
                    this.inc3 = "";
                    this.inc4 = "";
                    this.passwordStrong = "弱";
                    break;
                case 1:
                    this.inc0 = "orange";
                    this.inc1 = "orange";
                    this.inc2 = "";
                    this.inc3 = "";
                    this.inc4 = "";
                    this.passwordStrong = "中等";
                    break;
                case 2:
                    this.inc0 = "yellow";
                    this.inc1 = "yellow";
                    this.inc2 = "yellow";
                    this.inc3 = "";
                    this.inc4 = "";
                    this.passwordStrong = "佳";
                    break;
                case 3:
                    this.inc0 = "springgreen";
                    this.inc1 = "springgreen";
                    this.inc2 = "springgreen";
                    this.inc3 = "springgreen";
                    this.inc4 = "";
                    this.passwordStrong = "強";
                    break;
                case 4:
                    this.inc0 = "darkgreen";
                    this.inc1 = "darkgreen";
                    this.inc2 = "darkgreen";
                    this.inc3 = "darkgreen";
                    this.inc4 = "darkgreen";
                    this.passwordStrong = "非常強";
                    break;
                case -1:
                    this.inc0 = "";
                    this.inc1 = "";
                    this.inc2 = "";
                    this.inc3 = "";
                    this.inc4 = "";
                    this.passwordStrong = "";
                    break;
            }
        }
    },
    methods:{
        _vaild:function(password){
            return (this.passwordIndex=="");
        },

        assign:function(){
            if(this.account ==""){
                this.iserror = " 2px solid red";
                // alert("no account");
            }
            if(this.username ==""){
                this.iserror1 = " 2px solid red";
                // alert("no username");
            }
            if(this.passwordIndex ==""){
                this.iserror2 = " 2px solid red";
                // alert("no password");
            }
            if(this.account !=""){
                this.iserror = "";
                // alert("no account");
            }
            if(this.username !=""){
                this.iserror1 = "";
                // alert("no username");
            }
            if(this.passwordIndex !=""){
                this.iserror2 = "";
                // alert("no password");
            }
            
            if(this.account != "" && this.username != "" && this.passwordIndex != ""){
                alert('account: '+ this.account +"\nusername: "+ this.username +"\npassword: "+this.passwordIndex);
                this.account=" ";
                this.username=" ";
                this.passwordIndex="";
            }
            
        }
    }
});


