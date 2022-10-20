import React, {createContext, useEffect, useState} from 'react';
import {footInchesToMeter, poundToKg, kgToPound, meterToFootInches} from "../utils/converters";
import {saveToDisk, readData} from '../utils';
const ConverterContext = createContext({});


function ConverterContextProvider({children}) {
	const {Provider} = ConverterContext;
	const [menu, setMenu] = useState('imperial');
	const [lbs, changeLbs] = useState('');
	const [ft, changeFt] = useState('');
	const [mm, changeM] = useState('');
	const [kg, changeKg] = useState('');
	const [ins, changeIn] = useState('');

	const resetPress = () => {
		changeLbs('')
		changeFt('')
		changeM('')
		changeKg('')
		changeIn('')
	}

	const convertToMetric = () => {
		changeKg(poundToKg(lbs));
		changeM(footInchesToMeter(ft, ins));
	}

	const convertToImperial = () => {
		changeLbs(kgToPound(kg));
		const vals = meterToFootInches(mm)
		changeFt(vals.f);
		changeIn(vals.i);
	}

	const saveDataToDisk =  () => {
		const data = {
			lbs,
			ft,
			mm,
			kg,
			ins,
		}
		saveToDisk('hooks',data);
	}

	const readDataFromDisk = () => {
		const setData = (data) => {
			if(data?.lbs){
				changeLbs(data?.lbs)
			}
			if(data?.ft){
				changeFt(data?.ft)
			}
			if(data?.mm){
				changeM(data?.mm)
			}
			if(data?.kg){
				changeKg(data?.kg)
			}
			if(data?.ins){
				changeIn(data?.ins)
			}
		}
		readData('hooks', setData);
	}

	useEffect(()=>{
		if(menu === 'metric'){
			convertToMetric();
		}else{
			convertToImperial();
		}
	},[menu])

	useEffect(() => {
		readDataFromDisk()
	},[])

	return <Provider value={{
		menu,
		lbs,
		ft,
		ins,
		kg,
		mm,
		changeM,
		changeKg,
		changeLbs,
		changeFt,
		changeIn,
		setMenu,
		resetPress,
		saveDataToDisk
	}}>{children}</Provider>;
}

export {ConverterContextProvider, ConverterContext};
