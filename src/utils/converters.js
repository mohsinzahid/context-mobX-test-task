export const footInchesToMeter = (f,i) => {
	const ftVal = parseFloat(f);
	const insVal = parseFloat(i);

	if(ftVal > 0 || insVal > 0){
		let value = ftVal*0.3048;
		if(insVal > 0)
		value += insVal * 0.0254;
		return value.toFixed(3).toString();
	}

	return '';
}

export const poundToKg = (lbs) => {
	const lbVal = parseFloat(lbs);
	if(lbs > 0){
		const value = lbVal*0.4536
		return value.toFixed(3).toString();
	}

	return '';
}

export const kgToPound = (k) => {
	const kg = parseFloat(k);
	if(kg > 0){
		const value = kg/0.4536
		return value.toFixed(3).toString();
	}

	return '';
}

export const meterToFootInches = (m) => {
	const mVal = parseFloat(m);

	if(mVal > 0){
		let foot = m * 3.28084;
		foot = parseInt(foot);

		let inches = m * 39.37008
		inches = inches - (foot * 12);

		if(inches > 0.1){
			inches = inches.toFixed(3).toString();
		}else{
			inches = '0';
		}

		return {f:foot.toString(), i:inches.toString()};
	}

	return {f:'', i:''};
}
