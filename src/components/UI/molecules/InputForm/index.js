import React from "react";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";

const InputForm = ({
	classes,
	labelname,
	name,
	removeBreak,
	type,
	inputClass,
	labelClass,
	childRef,
	errorLabel,
	value,
	label = true,
	...rest
}) => (
	<div className={classes}>
		{label && (
			<Label
				labelname={labelname}
				name={name[0].toUpperCase() + name.slice(1)}
				classes={`${labelClass}`}
			/>
		)}
		{removeBreak !== "remove" && <br />}
		<Input
			props={{
				type,
				name,
				errorLabel,
				classes: { inputClass },
				value,
				...rest,
			}}
			ref={childRef}
		/>
		{errorLabel && <p className="text-red-600 text-xs ">{errorLabel}</p>}
	</div>
);

export default InputForm;
