import Card from "../Card/Card";
import './Plans.css'
const Plans= () =>{

   const Plans =[
      {
      name: "FREE",
      price: "$0",
      available: ["Single User","5GB Storage", "Unlimited public Projects","Community Access"],
      notavailable:["Unlimited Private Projects","Decdicated Phone Support","Free Subdomain","Monthly Status Report"]
      },
      {
      name: "PLUS",
      price: "$9",
      available: ["5 Users","50GB Storage", "Unlimited public Projects","Community Access","Unlimited Private Projects","Decdicated Phone Support","Free Subdomain",],
      notavailable:["Monthly Status Report"]
      },
      {
      name: "PRO",
      price: "$49",
      available: ["Unlimited Users","150GB Storage", "Unlimited public Projects","Community Access","Unlimited Private Projects","Decdicated Phone Support","Unlimited Free Subdomains","Monthly Status Report"],
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