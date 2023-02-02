import React, {  useEffect, useState } from "react";
import Filter from "./Filter";
import { Button } from "@mui/material";


const Builder=({setUserQuery,builderNo,userQuery})=>{
       const [isAnd,setIsEnd]=useState(true)
       const [filterList,setFilterList]= useState([1])

       
       const [builderQueryList,setBuilderQueryList]=useState([])


       const updateOneBuilderQuery=  ()=>{
            let test="";
            const data=builderQueryList.map((data)=>{
                return (`   ${data.field}   ${data.condition}   ${data.criteria}  `)
            })

            data.forEach((str)=>{
                test=test+" "+str+((isAnd)?" &&":" ||");
            })
            
            setUserQuery((pre)=>{
                var newData=pre;
                pre[builderNo-1]=test.slice(0, test.length - 2);
                return [...newData];
            })
            
       }  
       useEffect(()=>{
        //    console.log(builderQueryList)
        },[userQuery,setUserQuery])
       useEffect(()=>{
        updateOneBuilderQuery();
       },[builderQueryList,setBuilderQueryList])
       useEffect(()=>{
        updateOneBuilderQuery();
       },[isAnd,setIsEnd])
       useEffect(()=>{
        updateOneBuilderQuery();
        
       },[ ])

         
       

       const handleAddNewFilter=()=>{
            setFilterList((pre)=>{ 
                return [...pre,pre[pre.length-1]+1] 
            })
            setBuilderQueryList((pre)=>{
                return [...pre, {'field':{}}] 
            })
       }
      
 return (
     <div className="w-[90%] builder_container bg-[#282B30] mx-auto mt-2 mb-5">

        <div className="flex p-2">
        {/* {(JSON.stringify(query))} */}
                <button onClick={(()=>{setIsEnd(true)})} className={"px-3 py-1 button_builder "+((isAnd===true)?'active_button':'')}>And</button>
                <button onClick={(()=>{setIsEnd(false)})} className={"px-3 py-1 button_builder "+((isAnd===false)?'active_button':'')}>Or</button>
                <div className=" m-auto mx-[14px] px-[8px] text-[0.8rem] rounded-lg h-[50%] bg-[white] text-[#282B30] hover:cursor-pointer">i</div>
         </div>
         {(
            filterList.map((val,index)=>{
                return <Filter key={index+1000} 
                            filterNo={val} 
                            setFilterList={setFilterList}  
                            setBuilderQueryList={setBuilderQueryList}
                />
            })
         )}
         <div className=" m-auto mt-5 mb-5 h-[70px]  w-[90%]">
               <Button variant="contained" sx={{background:'#5C61F0' }}  onClick={handleAddNewFilter} >  + Add filter </Button>
           </div>
            
     </div>
 )
}
export default Builder;