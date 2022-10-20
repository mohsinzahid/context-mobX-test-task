import {observable, action, makeAutoObservable} from "mobx";
import {footInchesToMeter, poundToKg, kgToPound, meterToFootInches} from "../utils/converters";
import {saveToDisk, readData} from '../utils';

class Store {
	@observable
	menu;

	@observable
	lbs;

	@observable
	ft;

	@observable
	mm;

	@observable
	kg;

	@observable
	ins;

	constructor() {
		makeAutoObservable(this);
		this.resetPress()
		this.readDataFromDisk();
	}

	@action
	setMenu = (val) => {
		this.menu = val;
		this.convertValues();
	}

	@action
	changeLbs = (val) => {
		this.lbs = val;
	}

	@action
	changeFt = (val) => {
		this.ft = val;
	}

	@action
	changeIn = (val) => {
		this.ins = val;
	}

	@action
	changeKg = (val) => {
		this.kg = val;
	}

	@action
	changeM = (val) => {
		this.mm = val
	}

	@action
	resetPress = () => {
		this.lbs = '';
		this.ft = '';
		this.mm = '';
		this.kg = '';
		this.ins = '';
		this.menu = 'imperial';
	}

	@action
	convertToMetric = () => {
		this.kg = poundToKg(this.lbs);
		this.mm = footInchesToMeter(this.ft, this.ins)
	}

	@action
	convertToImperial = () => {
		this.lbs = kgToPound(this.kg);
		const vals = meterToFootInches(this.mm);
		this.ft = vals.f;
		this.ins = vals.i;
	}

	@action
	saveDataToDisk =  () => {
		const data = {
			lbs: this.lbs,
			ft: this.ft,
			mm: this.mm,
			kg: this.kg,
			ins: this.ins,
		}
		saveToDisk('mobx',data);
	}

	@action
	readDataFromDisk = () => {
		const setData = (data) => {
			if(data?.lbs){
				this.changeLbs(data?.lbs);
			}
			if(data?.ft){
				this.changeFt(data?.ft);
			}
			if(data?.mm){
				this.changeM(data?.mm);
			}
			if(data?.kg){
				this.changeKg(data?.kg);
			}
			if(data?.ins){
				this.changeIn(data?.ins);
			}
		}
		readData('mobx', setData);
	}

	@action
	convertValues = ()=>{
		if(this.menu === 'metric'){
			this.convertToMetric();
		}else{
			this.convertToImperial();
		}
	}
}

export default new Store();
