import {RealEstateDetail} from "./RealEstateDetail"
import {InputPersonalInformations} from "./InputPersonalInformations"
import {CheckInformations} from "./CheckInformations"
import { useState } from "react";


export const RealEstateContract = () => {

    // 契約ステップ数
    const numberOfStep = 3; 
     // 情報の初期値
    const initialInformation = {
        agreement:false,
        personalInformations:{name:{last:"",firsr:""}, nameWithKatakana:{last:"",firsr:""}, sex:"male", country:"", birthDay:new Date}
    }

    // 現在のステップ数
    const [currentStep, setCurrentStep] = useState(0);
    // バリデーション
    const [nextStepIsPermitted, setNextStepIsPermitted] = useState(false);
    // 次へボタン押下
    const [toNextStep, setToNextStep] = useState(false);
    // 戻るボタン押下
    const [toPreviousStep, setToPreviousStep] = useState(false);
    // 
    const [informationsArePermitted, setInformationsArePermitted] = useState(true);
    const [contractInformations, setContractInformations] = useState(initialInformation);


    const changeStep = () => {
        if (informationsArePermitted && toNextStep && currentStep < numberOfStep) {
            const newStep = currentStep + 1;
            const newToNextStep = false;
            setCurrentStep(newStep);
            setToNextStep(newToNextStep);
        }else if(toPreviousStep && currentStep > 0){
            const newStep = currentStep - 1;
            const newToPreviousStep = false;
            setCurrentStep(newStep);
            setToPreviousStep(newToPreviousStep)
        }
    }

    
    const goToNextStep = () => {
        if (nextStepIsPermitted){
            const newToNextStep = true;
            const newNextStepIsPermitted = false;
            //updateInformations(informations);
            const newInformationsArePermitted = true;
            setInformationsArePermitted(newInformationsArePermitted)
            setToNextStep(newToNextStep);
            setNextStepIsPermitted(newNextStepIsPermitted);
        }

    }

    const goBackToPreviousStep = () => {
        const newToPreviousStep = true;
        setToPreviousStep(newToPreviousStep);
    }


    const saveInformations = () => {
        const newInformationsArePermitted = true;
        setInformationsArePermitted(newInformationsArePermitted)
    }


    const changeInformations = () => {
        const newInformationsArePermitted = false;
        setInformationsArePermitted(newInformationsArePermitted);
    }


    const permitNextStep = () => {
        const newNextStepIsPermitted = true;
        setNextStepIsPermitted(newNextStepIsPermitted)
    }


    const mainContents = () => {

        const destination = 1
        switch (destination) {
            case 0:
                return <RealEstateDetail permitNextStep = {permitNextStep} changeInformations = {changeInformations}/>
            case 1:
                return <InputPersonalInformations userInformations = {contractInformations.personalInformations} permitNextStep = {permitNextStep} changeInformations = {changeInformations}/>
            case numberOfStep-1 :
                return <CheckInformations/>
            default :
                return <RealEstateDetail permitNextStep = {permitNextStep} changeInformations = {changeInformations}/>
      }

    }


    return (
        <div>
            {mainContents()}
            {/* <ActionToPage onClickNextButton = {goToNextStep} onClickSaveButton = {saveInformations} onClickGoBackButton = {goBackToPreviousStep}/> */}
        </div>
        );

}