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
    sum:'',
    premium:null,
    productDetail:{},
    choice:[],
    unique:'',
    logbook:{},
    premben:{},
    picked:{},
    pdf:{},
    stk:"",
    underwriter:"",
    gross:null
  },
  reducers: {
   
    setName:(state,action)=>{
        state.fullName=action.payload ;
    },
    setGross:(state,action)=>{
        state.gross=action.payload ;
    },

    setUnderwriter:(state,action)=>{
        state.underwriter=action.payload ;
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
    setUnique:(state,action)=>{
        state.unique=action.payload ;
    },
    setlogbook:(state,action)=>{
        state.logbook=action.payload ;
    },
    setPremben:(state,action)=>{
        state.premben=action.payload ;
    },
    setSum:(state,action)=>{
        state.sum=action.payload ;
    },
    setPremium:(state,action)=>{
        state.sum=action.payload ;
    },
    setpicked:(state,action)=>{
        state.picked =action.payload
    },
    setPdf:(state,action)=>{
        state.mpesa =action.payload
    },
    setStk:(state,action)=>{
        state.stk =action.payload
    },
   
   
    setProductDetail:(state,action)=>{state.productDetail = action.payload}
  },
  setChoice:(state,action)=>{state.choice.push(action.payload)}
});

export const {setGross,setUnderwriter,setStk,setPdf,setPremben,setChoice,setName,setPremium,setNumber,setSum,setReferall,setRegistration,setEmail,setVehicleclass,setCoverage,setPeriod,setProductDetail,setUnique,setlogbook } = counterSlice.actions;

export const selectName = state => state.counter.fullName;
export const selectGross = state => state.counter.gross;
export const selectUnderwriter = state => state.counter.underwriter;
export const selectStk = state => state.counter.stk;
export const selectPdf = state => state.counter.pdf;
export const selectProduct =state=>state.counter.productDetail;
export const selectLogbook = state=>state.counter.logbook;
export const selectPremBen = state=>state.counter.premben;
export const selectNumber = state => state.counter.phoneNumber;
export const selectReferall = state => state.counter.referall;
export const selectRegistration = state => state.counter.registration;
export const selectVehicle = state => state.counter.vehicleclass;
export const selectEmail = state => state.counter.email;
export const selectCoverage = state => state.counter.coverage;
export const selectPeriod = state => state.counter.period;
export const selectSum = state => state.counter.sum;
export const selectChoice = state => state.counter.choice;
export const selectUnique = state => state.counter.unique;
export const selectPremium = state => state.counter.unique;



export default counterSlice.reducer;
