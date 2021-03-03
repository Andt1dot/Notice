import createNotice from '../api/createNote'
export const CREATE_NOTE = 'CREATE_NOTE'

export const actionCreateNotice=(notice)=>async(dispatch)=>{
    
       const newNotice =  await createNotice(notice);
       dispatch({
           type:CREATE_NOTE,
           payload:newNotice
       });

}

