import RealEstateDetail from "./RealEstateDetail"
import InputPersonalInformations from "./InputPersonalInformations"
import { useState } from "react";


export const RealEstateContract = () => {}

    const numberOfStep = 6;

    [step, changeStep] = useState(0);
    [permission, permitNextStep] = useState(false);
    [next, goToNextStep] = useState(false);
    [previous, goBackToPreviousStep] = useState(false);
    [save, saveInformations] = useState(false);
    [updated, finishUpdatingInformations] = useState(true);
    [contractInformations, updateInformations] = useState({agreement:false,personalInformations:{name:{last:"",firsr:""}, KatakanaName:{last:"",firsr:""}, sex:"male", country:"", date:new Date}});










    
    changeStep = () => {
        if (tupdated && next && step < numberOfStep) {
            this.setState({step}++,{next:false});
        }else if(this.state.privious && this.state.step > 0){
            this.setState({step}--,{previous:false});
        }
    }





class RealEstateContract extends React.Component {
    constructor(props) {
        super(props);
        this.permitNextStep = this.permitNextStep.bind(this);
        this.toNextStep = this.toNextStep.bind(this);
        this.saveInformation = this.saveInformation.bind(this);
        this.toPreviousStep = this.toPreviousStep.bind(this);
        this.renderWithCondition = this.renderWithCondition.bind(this);
        this.updateInformations = this.updateInformations.bind(this);
        this.numberOfStep = 6;
        this.state = {
            step: 0,
            permission:false,
            next:false,
            previous:false,
            save:false,
            updated:true,
            contractInformations:{agreement:false,personalInformations:{name:{last:"",firsr:""}, KatakanaName:{last:"",firsr:""}, sex:"male", country:"", date:new Date}}    
        };
    }

    permitNextStep() {
            this.setState({permission:true});
    }

    toNextStep() {
        if (this.state.permission){
            this.setState({next:true});
            this.setState({permission:false});
        }
    }

    saveInformation() {
        this.setState({save:true});
    }

    toPreviousStep() {
        this.setState({previous:true});
    }

    updateInformations(newInformations){
        if (this.state.updated === false && (this.state.save || this.state.next)){
            switch (this.state.step) {
                case 0:
                    Informations = contractInformations.agreement;
                    this.setState({Informations}={newInformations});
                    break;
                case 1:
                    Informations = contractInformations.personalInformations;
                    this.setState({Informations}={newInformations});
                    break;
                case 2:
                    Informations = contractInformations.agreement;
                    this.setState({Informations}={newInformations});
                    break;
                case 3:
                    Informations = contractInformations.personalInformations;
                    this.setState({Informations}={newInformations});
                    break;
                case 4:
                    Informations = contractInformations.agreement;
                    this.setState({Informations}={newInformations});
                    break;
                case this.numberOfStep-1 :
                    Informations = contractInformations.personalInformations;
                    this.setState({Informations}={newInformations});
                    break;
                default :
                    Informations = contractInformations.agreement;
                    this.setState({Informations}={newInformations});
                    break;
                }
            this.setState({updated:true});
            this.setState({save:false});
        }
    }

    renderWithCondition() {
        if (this.state.updated && this.state.next && this.state.step < this.numberOfStep) {
            this.setState({step}++,{next:false});
        }else if(this.state.privious && this.state.step > 0){
            this.setState({step}--,{previous:false});
        }
        switch (this.state.step) {
            case 0:
                return <RealEstateDetail permitNextStep = {this.permitNextStep} updateInformations = {this.updateInformations}/>
            case 1:
                return <InputPersonalInformations permitNextStep = {this.permitNextStep} updateInformations = {this.updateInformations}/>
            case 2:
                return <RealEstateDetail permitNextStep = {this.permitNextStep}  updateInformations = {this.updateInformations}/>
            case 3:
                return <InputPersonalInformations permitNextStep = {this.permitNextStep} updateInformations = {this.updateInformations}/>
            case 4:
                return <RealEstateDetail permitNextStep = {this.permitNextStep}  updateInformations = {this.updateInformations}/>
            case this.numberOfStep-1 :
                return <InputPersonalInformations permitNextStep = {this.permitNextStep} updateInformations = {this.updateInformations}/>
            default :
                return <RealEstateDetail permitNextStep = {this.permitNextStep}  updateInformations = {this.updateInformations}/>
      }
    }


    render() {
        const step = this.state.step;
        const scale = this.props.scale;
        return (
            <div>
                {this.renderWithCondition}
                <ActionToPage toNextStep = {this.toNextStep} saveInformation = {this.saveInformation} toPreviousStep = {this.toPreviousStep}/>
            </div>
            );
      }
  
}






export default RealEstateContract;