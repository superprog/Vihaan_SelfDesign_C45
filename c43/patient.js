class Patient{
constructor(){
    this.name=null;
    this.age=null;
    this.email=null;
    this.disease=null;
this.index=0;

}
getPatientCount(){
database.ref("patientCount").on("value",(data)=>{
patientCount=data.val();

})
console.log("get"+patientCount)
}
updatePatientCount(count){
    database.ref("/").update({
        patientCount:count
    })
    console.log("up"+count)
}
updateInfo(){
    console.log("in");
  
    var patientIndex = "patients/" + patientCount;
    
    database.ref(patientIndex).set({
        name:this.name,
        age:this.age,
        email:this.email,
        disease:this.disease
    })
}
}