import React, { useEffect } from "react";

const UserQuery=({userQuery,setShowUserQuery})=>{

  useEffect(()=>{
        //  console.log(userQuery)
  },[userQuery])
  useEffect(()=>{
    // console.log(userQuery)
  },[setShowUserQuery])
  useEffect(()=>{
    // console.log(userQuery)
  },[ ])


 return (
     <div className=" w-[100%] bg-[#5C61F0] p-5  ">
        <div className="flex">
            <div className="font-medium">Create tag and query</div>
            <div className="m-auto mr-0 bg-[#4338CA] px-1 hover:cursor-pointer" 
            onClick={(()=>{setShowUserQuery(false)})}> X</div>
        </div>
        <div className="text-[#A5B4FC]">
          <div>
           The query you build will be saved in your active view 
          </div>
          <div>
           Query of Each Group will be anded(&&) by default (We can change accordingly).
          </div>
          <div className="bg-[#4338CA] p-2 text-[white] mt-2">
          Query= {(JSON.stringify(userQuery))}
          </div>
        </div>
     </div>
 )
}
export default UserQuery;