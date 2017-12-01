/** Action creators */

export const updatePlateFormData = plateFormData => {
    return({
        type: 'UPDATED_DATA',
        plateFormData
    })
}

export const resetPlateForm = () => {
    return{
    type: 'RESET_PLATE_FORM'
    }
}