import deleteNote from '../api/deleteNote'
export const DELETE_NOTICE  = 'DELETE_NOTICE'

export const deleteNotice=(noticeId)=> async(dispatch)=>{

console.log('A VENIT',noticeId);

const deleteN = await deleteNote(noticeId);
 console.log('S-a returnat',deleteN);
    
    dispatch({
        type:DELETE_NOTICE,
        payload: deleteN 
    });
}