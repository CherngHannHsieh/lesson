new Vue({
    el:".box",
    data:{
        signAccount:"",
        isAble:"disabled",
        isHave: false,
        isError:"none",
        errorMsg:"",
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
                this.isError = "none";
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
            
            var atlocation = this.signAccount.indexOf("@");

            if((this.signAccount.substring(0,atlocation)=="") ||
            (this.signAccount.indexOf("@") > this.signAccount.indexOf("gmail")) || 
            (this.signAccount.indexOf("@") > this.signAccount.indexOf(".com")) || 
            (this.signAccount.indexOf("gmail") > this.signAccount.indexOf(".com"))){
                // alert("mail error");
                this.isError = "block";
                // var atlocation = this.signAccount.indexOf("@");
                var salength = this.signAccount.length;
                this.errorMsg = this.signAccount.substr(atlocation,salength);
            }else{
                document.location.href="signPageNext.html";
                
                this.signUserName = this.signAccount.substring(0,atlocation);
            }
        }
    }
});