new Vue({
    el:".cf",
    data:{
        mailAccount:"",
        isChange:false,
        isDis:true
    },
    methods:{
        accountSub:function(){
            if(mailAccount.search("@")!=-1){
                this.isChange = true;
                this.isDis = false;
            };
        },
    }
});