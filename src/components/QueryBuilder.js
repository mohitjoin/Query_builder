import React,{useEffect, useState} from "react";
import UserQuery from "./UserQuery";
import Builder from "./Builder";
import Button from '@mui/material/Button';
import './queryBuilder.css'

const QueryBuilder=()=>{
    const [userQuery,setUserQuery]=useState([""])
    const [showUserQuery,setShowUserQuery]=useState(true)
    const [builderList,setBuilderList]=useState([1])
    const [finalUserQuery,setFinalUserQuery]=useState("")

    const handleAddNewGroup=()=>{
        setBuilderList((pre)=>{
            return [...pre,pre.length+1]
        })
        setUserQuery((pre)=>{
            return [...pre,""];
        })
    }
    const updateFinalQuery=()=>{

            let test="";
            userQuery.forEach((str)=>{
                test=test+" "+str+" &&";
            })
            setFinalUserQuery((pre)=>{
                return test.slice(0, test.length - 2);
            })

    }
    useEffect(()=>{ 
     },[userQuery,builderList])
     useEffect(()=>{ 
      },[ finalUserQuery])
     useEffect(()=>{
         
      },[  ])
      

    return (<div className="w-[80%] mx-auto main_container_queryBuilder mt-5 mb-5">
    
        {(showUserQuery===true)?(<>

                               <UserQuery userQuery={userQuery} setShowUserQuery={setShowUserQuery}/>
                               <div className="mt-5">
                               {
                                (builderList.map((index)=>{
                                    return <Builder key={index+100} builderNo={index} userQuery={userQuery} setUserQuery={setUserQuery}/>
                                }))
                               }</div>
                               <div className="w-[90%] mx-auto" >
                                  <Button variant="contained" sx={{  background:'#5C61F0'}} onClick={handleAddNewGroup}>+ Add new Group Filter </Button>
                               </div>
                               <div className="mt-5 mb-5 h-[70px] flex">
                                        <Button variant=" " sx={{m:2, border:'1px solid #404348'}} onClick={(()=>{setShowUserQuery(false)})}>Cancel </Button>
                                        <Button variant="contained" sx={{m:'auto',background:'#5C61F0',mr:2}}  >  Query </Button>
                               </div>
                                </>

                        ):
                        <Button variant="contained" sx={{m:2,background:'#5C61F0'}} onClick={(()=>{setShowUserQuery(true)})}>Build Query </Button>


                        
                        
        } 
        
         </div>
    )
}

export default QueryBuilder;



 