import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    
    fullName:'',
    phoneNumber:'',
    referall:'',
    registration:'',
    email:'',
    vehicleclass:'',
    coverage:'',
    period:'',
    sumInsured:'',
    productDetail:{},
    choice:[]
  },
  reducers: {
   
    setName:(state,action)=>{
        state.fullName=action.payload ;
    },
    setPeriod:(state,action)=>{
        state.period=action.payload ;
    },
    setNumber:(state,action)=>{
        state.phoneNumber=action.payload ;
    },
    setReferall:(state,action)=>{
        state.referall=action.payload ;
    },
    setRegistration:(state,action)=>{
        state.registration=action.payload ;
    },
    setEmail:(state,action)=>{
        state.email=action.payload ;
    },
    setVehicleclass:(state,action)=>{
        state.vehicleclass=action.payload ;
    },
    setCoverage:(state,action)=>{
        state.coverage=action.payload ;
    },
   
    setSum:(state,action)=>{
        state.coverPeriod=action.payload ;
    },
    setProductDetail:(state,action)=>{state.productDetail = action.payload}
  },
  setChoice:(state,action)=>{state.choice.push(action.payload)}
});

export const {setChoice,setName,setNumber,setReferall,setRegistration,setEmail,setVehicleclass,setCoverage,setPeriod,setProductDetail,setSum } = counterSlice.actions;

export const selectName = state => state.counter.fullName;
export const selectProduct =state=>state.counter.productDetail;

export const selectNumber = state => state.counter.phoneNumber;
export const selectReferall = state => state.counter.referall;
export const selectRegistration = state => state.counter.registration;
export const selectVehicle = state => state.counter.vehicleclass;
export const selectEmail = state => state.counter.email;
export const selectCoverage = state => state.counter.coverage;
export const selectPeriod = state => state.counter.period;
export const selectSum = state => state.counter.sumInsured;
export const selectChoice = state => state.counter.choice;



export default counterSlice.reducer;
