export const createDeafaultValue = (cardContent, id) =>{
    const storedUser = JSON.parse(localStorage.getItem(`user_${id}`));
    if (storedUser) {
        return (
            {
                name: storedUser.name,
                email: storedUser.email,
                phone: storedUser.phone,
                website: storedUser.website,
            }
        )
    } else {
        return (
            {
                name: cardContent.name,
                email: cardContent.email,
                phone: cardContent.phone,
                website: cardContent.website,
            }
        )
    }
}
