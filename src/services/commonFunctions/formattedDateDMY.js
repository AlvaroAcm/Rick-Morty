

export const formattedDateDMY = (dateString ) =>{
    const options = {day:"numeric", month:"numeric" , year:"numeric"}
    const formattedDate = new Date(dateString).toLocaleDateString("es-Es", options)
    
    return formattedDate
}