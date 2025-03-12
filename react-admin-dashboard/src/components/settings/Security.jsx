import { Lock } from "lucide-react";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";

const Security = () => {
	const [twoFactor, setTwoFactor] = useState(false);

	return (
		<SettingSection icon={Lock} title={"Security"}>
			<ToggleSwitch
				label={"Two-Factor Authentication"}
				isOn={twoFactor}
				onToggle={() => setTwoFactor(!twoFactor)}
			/>
			<div className='mt-4'>
				<button
					className='bg-cyan-300 hover:bg-cyan-400 text-black font-semibold py-2 px-4 rounded 
        transition duration-200
        '
				>
					Change Password
				</button>
			</div>
		</SettingSection>
	);
};
export default Security;
