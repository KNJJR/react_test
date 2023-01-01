import {PersonalInformationCategory} from "./PersonalInformationCategory"

export const InputPersonalInformations = (props) => {

    return (
        <form>
            <PersonalInformationCategory category = {"name"} userInformations = {props.userInformations}/>
            <PersonalInformationCategory category = {"nameWithKatakana"} userInformations = {props.userInformations}/>
            <PersonalInformationCategory category = {"sex"} userInformations = {props.userInformations}/>
            <PersonalInformationCategory category = {"country"} userInformations = {props.userInformations}/>
            <PersonalInformationCategory category = {"birthDay"} userInformations = {props.userInformations}/>
        </form>
      );

}