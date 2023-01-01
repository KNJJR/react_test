export const PersonalInformationCategory = (props) => {

    switch (props.category){
        case "name":
            return (<label>氏名<span>必須</span></label>)
        case "nameWithKatakana":
            return (<label>氏名<span>必須</span></label>)
        case "sex":
            return (<label>氏名<span>必須</span></label>)
        case "country":
            return (<label>氏名<span>必須</span></label>)
        case "birthDay":
            return (<label>氏名<span>必須</span></label>)
        default:
            return (<label>氏名<span>必須</span></label>)
    }
}