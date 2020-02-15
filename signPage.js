new Vue({
    el:".box",
    data:{
        signAccount:"",
        isAble:"disabled",
        isHave: false,
        isDis:"block",
        signUserName:""
    },
    watch:{
        signAccount:function(value){
            this.isDis = "none";
            if(this._vaild(value)){
                // console.log("error");
                this.isAble = "disabled";
                this.isHave = false;
            } else {
                this.isAble = false;
                this.isHave = true;
            }
            
        }
    },
    methods:{
        _vaild:function(account){
            return (this.signAccount.indexOf("@")==-1);
        },
        signSub:function(){
            if((this.signAccount.indexOf("@") > this.signAccount.indexOf("gmail")) || 
            (this.signAccount.indexOf("@") > this.signAccount.indexOf(".com")) || 
            (this.signAccount.indexOf("gmail") > this.signAccount.indexOf(".com"))){
                alert("mail error");

            }else{
                document.location.href="signPageNext.html";
                var atlocation = this.signAccount.indexOf("@");
                this.signUserName = this.signAccount(0,atlocation);
            }   
        }
    }
});