class Symptoms{
    constructor(disease){
        this.disease=disease;
        this.title=createElement("H1");
        database.ref("/").on("value",(data)=>{
            ailmentSymps=data.val();
            
            })
       
    }
    display(){
        pd.hide();
        this.title.html("SYMPTOMS FOR "+this.disease)
        this.title.position(windowWidth/2-200,windowHeight/5);
        var ailment="Ailment"
        console.log(ailment)
       // var ailmentRef=database.ref("Ailment");
        //console.log(ailmentRef)
        
        console.log(ailmentSymps)
    }
}