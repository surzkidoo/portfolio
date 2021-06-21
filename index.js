data =[
    {
        project_title:"my portfolio",
        project_des:"This is actually my first design in portfolio",
       project_pic:["logol.png","ff.png"],
       link:"https//www.fodld.com"

    },
    {
        project_title:"header",
        project_des:"portfolio",
        project_pic:["CaptureA.PNG","logol.png"],
        link:"https//www.comldkm"
    },
    {
        project_title:"header",
        project_des:"portfolio",
        project_pic:["img1.png","img2.png"],
        link:"https//www.comss"
        
    },
    {
        project_title:"header",
        project_des:"portfolio",
        project_pic:["img1.png","img2.png"],
        link:"https//www.com"
        
    }
]
i=0;

j=0
function crl(name){
   
    if(j<name.length){
        $(".proimg").attr("src",name[j]);
        j++;
    }
    else{
        j=0;
    }
}

    obj=data[0];
    $(".prot").text(obj.project_title);
    $(".prod").text(obj.project_des);
    $(".protime").text(obj.skill_set);
    setTimeout(crl(obj.project_pic),5000);
    $(".pro_link").attr("href",obj.link);

$(".play").on("click",function(){
    
    if(i<data.length){
    obj=data[i];
    $(".prot").text(obj.project_title);
    $(".prod").text(obj.project_des);
    $(".protime").text(obj.skill_set);
    setTimeout(crl(obj.project_pic),10000);
    $(".pro_link").attr("href",obj.link);
    i++;
}
else{
    i=0;
}

});



  
$("#rad").on("click",function(){
    $(".container-toggler").toggleClass("fa-bars fa-times");
});