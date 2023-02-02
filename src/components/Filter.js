import React,{useEffect, useState,useCallback} from "react";
import MenuItem from '@mui/material/MenuItem'; 
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './queryBuilder.css'
import { Typography } from "@mui/material";
import ListSubheader from '@mui/material/ListSubheader';
import { AiOutlineDelete } from 'react-icons/ai';


const Filter=({filterNo,setFilterList,setBuilderQueryList})=>{

       const [queryField,setQueryField]=useState("Theme")
       const [condition,setCondition]=useState("==")
       const [criteria,setCriteria]=useState("Offers")

       const [filterData,setFilterData]=useState({});


     const handleDeleteFilter=()=>{
         setFilterList((pre)=>{ 
             const result=pre.filter((data,index)=> data!==filterNo);
             return result;
          }) 
          setBuilderQueryList((pre)=>{
            const result=pre.filter((data,index)=> index!==filterNo-1);
             return result;
          })
       }


       const handelChangeField=(event)=>{
        setQueryField(event.target.value)
            
            setFilterData((pre)=>{
                return{...pre,"field":queryField}
            })
 
       }
       const handelChangeCondition=(event)=>{
        setCondition(event.target.value)
        
        setFilterData((pre)=>{
            return{...pre,"condition":condition}
        })

        }

        const handelChangeCriteria=(event)=>{
            setCriteria(event.target.value)
            
            setFilterData((pre)=>{
                return{...pre,"criteria":criteria}
            })
    
       }

        const startFilter=useCallback(
            ()=>{
                
                setBuilderQueryList((pre)=>{
                        let data=[...pre]; 
                        data[filterNo-1]=filterData;
                     return data;
                })
            },[filterData]
            
        )

        const changeFilter=useCallback(
            ()=>{
                setFilterData((pre)=>{
                    return{...pre,"criteria":criteria,"condition":condition,"field":queryField}
                })
                
            },[criteria,condition,queryField]
            
        )

       useEffect(()=>{
        changeFilter();
       },[criteria,condition,queryField])

       useEffect(()=>{ 
        startFilter();
      },[filterData])

       useEffect(()=>{  
        
       },[startFilter, changeFilter])

       
       


    return (<>

      <div className="flex mb-3 mx-2" >
        {/* first part */}
         <FormControl sx={{ m: 1, minWidth: 170 }}>
            <Typography sx={{px:1,py:1}}>Field</Typography>
            <Select  className="select_inputs" defaultValue={"Theme"} onChange={handelChangeField}>
             
             
                <ListSubheader>PREDICTION</ListSubheader>
                <MenuItem value={"Theme"}>Theme</MenuItem>
                <MenuItem value={"Sub-theme"}>Sub-theme</MenuItem>
                <MenuItem value={"Reason"}>Reason</MenuItem>
                <MenuItem value={"Language"}>Language</MenuItem>
                <MenuItem value={"Source"}>Source</MenuItem>
                <MenuItem value={"Rating"}>Rating</MenuItem>
                <MenuItem value={"Time Period"}>Time Period</MenuItem> 
                <ListSubheader>COMMON</ListSubheader> 
                <MenuItem value={"Customer ID"}>Customer ID</MenuItem> 

            </Select> 
        </FormControl>

        {/* 2nd part */}
        <FormControl sx={{ m: 1, minWidth: 170,backgroundColor:'#282B30' }}>
            <Typography sx={{px:1,py:1}}>Condition</Typography>
            <Select  className="select_inputs" defaultValue={"=="} onChange={handelChangeCondition}>
             
            <MenuItem value={"=="}>Equals</MenuItem>
            <MenuItem value={"!=="}>Does not equal</MenuItem>
            <MenuItem value={"Like"}>Like</MenuItem>
            <MenuItem value={"Not like"}>Not like</MenuItem>
            <MenuItem value={"Is Empty"}>Is Empty</MenuItem>
            <MenuItem value={"Is"}>Is</MenuItem>
            <MenuItem value={"Is not"}>Is not</MenuItem>

            </Select> 
        </FormControl>

        {/* 3rd part */}
        <FormControl sx={{ m: 1, minWidth: 170 }}>
            <Typography sx={{px:1,py:1}}>Criteria</Typography>
            <Select  className="select_inputs" defaultValue={"Offers"} onChange={handelChangeCriteria}>
             
            <MenuItem value={"Offers"}>Offers</MenuItem>
            <MenuItem value={"Performance"}>Performance</MenuItem>
            <MenuItem value={"Platform"}>Platform</MenuItem>
            <MenuItem value={"Product Feedback"}>Product Feedback</MenuItem>

            </Select> 
        </FormControl>
        <FormControl sx={{ m: 1, Width: 20 }}>
        {(filterNo!==1)?<p className="m-auto mx-2 mt-[50px] hover:cursor-pointer button_delete" 
        onClick={ handleDeleteFilter  }
        >  <AiOutlineDelete /></p> :''} 
        </FormControl>
         </div>
         

    </>)
}

export default Filter;