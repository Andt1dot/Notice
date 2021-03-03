import editNote from '../api/editNote'
export const EDIT_NOTICE = 'EDIT_NOTICE'

const  actionEditNotice = (noticeId,notice) => async (dispatch)  => {
  
        console.log('Aici a venit ID ==',noticeId);
        console.log('Aici a venit Notice ==',notice);

        const editNotice =  await editNote(noticeId,notice);
        console.log('Modificarea notitiei',editNotice);

    dispatch({
        type:EDIT_NOTICE,
        payload:editNotice,
    });

}


export default actionEditNotice;