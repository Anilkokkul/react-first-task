import Card from "../Card/Card";
import './Plans.css'
const Plans= () =>{

   const Plans =[
      {
      name: "FREE",
      price: "$0",
      // available: ["Single User","5GB Storage", "Unlimited public Projects","Community Access"],
      available: [{
         highlighted:"",
         normal:"Single User"
      },
      {
         highlighted:"",
         normal:"5GB Storage"
      },
      {
         highlighted:"",
         normal:"Unlimited public Projects"
      },
      {
         highlighted:"",
         normal:"Community Access"
      }
   ],
      // notavailable:["Unlimited Private Projects","Decdicated Phone Support","Free Subdomain","Monthly Status Report"]
      notavailable:[
      {
         highlighted:"",
         normal:"Unlimited Private Projects"
      },
      {
         highlighted:"",
         normal:"Decdicated Phone Support"
      },
      {
         highlighted:"",
         normal:"Free Subdomain"
      },
      {
         highlighted:"",
         normal:"Monthly Status Report"
      }
   ]
      },
      {
      name: "PLUS",
      price: "$9",
      // available: ["5 Users","50GB Storage", "Unlimited public Projects","Community Access","Unlimited Private Projects","Decdicated Phone Support","Free Subdomain",],
      available: [{
         highlighted:"5 Users",
         normal:""
      },
      {
         highlighted:"",
         normal:"50GB Storage"
      },
      {
         highlighted:"",
         normal:"Unlimited public Projects"
      },
      {
         highlighted:"",
         normal:"Community Access"
      },
      {
         highlighted:"",
         normal:"Unlimited Private Projects"
      },
      {
         highlighted:"",
         normal:"Decdicated Phone Support"
      },
      {
         highlighted:"",
         normal:"Free Subdomain"
      },

   ],
      notavailable:[{
         highlighted:"",
         normal:"Monthly Status Report"
      }]
      },
      {
      name: "PRO",
      price: "$49",
      // available: ["Unlimited Users","150GB Storage", "Unlimited public Projects","Community Access","Unlimited Private Projects","Decdicated Phone Support","Unlimited Free Subdomains","Monthly Status Report"],
      available: [{
         highlighted:"Unlimited Users",
         normal:""
      },
      {
         highlighted:"",
         normal:"150GB Storage"
      },
      {
         highlighted:"",
         normal:"Unlimited public Projects"
      },
      {
         highlighted:"",
         normal:"Community Access"
      },
      {
         highlighted:"",
         normal:"Unlimited Private Projects"
      },
      {
         highlighted:"",
         normal:"Decdicated Phone Support"
      },
      {
         highlighted:"Unlimited",
         normal:" Free Subdomains"
      },
      {
         highlighted:"",
         normal:"Monthly Status Report"
      },

   ],
      notavailable:[]
      }
   ]

 return(
    <div>
      <div className="Plans-list">
      {
      Plans.map((plan,index)=>
         {return <Card plan={plan} key={index}/>    
})
      }
      </div>
      </div>
 );

}

export default Plans;