
const githubfinderReducer=(state,action)=>{
     switch(action.type){
         case "SEARCH_USER":
             return{
                 ...state,
                 users:action.payload,
                 loading:false
             };
          case "SET_LOADING":
              return {
                  ...state,
                  loading:true
              };   
          case "SET_USER":
              return {
                  ...state,
                  user:action.payload,
                  loading:false
              };
          case "SET_REPOS":
              return {
                  ...state,
                  repos:action.payload,
                  loading:false
              };
          case "CLEAR_USER":
              return {
                  ...state,
                  users:[]
              };
              case "ALERT":
              return {
                  ...state,
                  alert:{
                      msg:action.payload.msg,
                      type:action.payload.type
                  }
              };

              
           default:
               return state;
     }
}

export default githubfinderReducer;