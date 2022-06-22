import React from "react";

class SecondTask extends React.Component{
    constructor(props){
        
        super(props)
        this.state=[{
            student:"Raghad",
            msg:"The best student in Aqaba cohort",
            like:"Number of likes"
    },
    {
        student:"Obada",
        msg:"The best student in Aqaba cohort",
        like:"Number of likes"
    },
    {
        student:"Teaba",
        msg:"The best student in Aqaba cohort",
        like:"Number of likes"
    },
    {
        student:"Roa",
        msg:"The best student in Aqaba cohort",
        like:"Number of likes"
    }];
  
    }
    render(){
        return(

            <div className="container">
            
            {this.state.map(({student,msg,like}) =>(
                <div className="card">
                <h1>{student}</h1>
                <p>{msg}</p>
                <h4>{like}</h4>
                </div>
            ))}
            </div>
        );
    }
}
export default SecondTask;