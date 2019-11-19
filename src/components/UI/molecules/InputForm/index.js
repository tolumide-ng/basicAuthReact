import React from "react";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";

const InputForm = ({
	classes,
	labelname,
	name,
	removeBreak,
	inputType,
	inputClass,
	labelClass,
	errorLabel,
	value,
	label = true,
	...rest
}) => (
	<div className={classes}>
		{label && (
			<Label labelname={labelname} name={name} classes={labelClass} />
		)}
		{removeBreak !== "remove" && <br />}
		<Input
			inputType={inputType}
			name={name}
			errorLabel={errorLabel}
			classes={inputClass}
			value={value}
			{...rest}
		/>
		{errorLabel && (
			<p className="mb-3 text-red-300 text-xs">{errorLabel}</p>
		)}
	</div>
);

export default InputForm;
