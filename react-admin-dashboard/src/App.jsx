import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import UpcomingTaskPage from "./pages/UpcomingTasksPage";
import CompletedTaskPage from "./pages/CompletedTaskPage";
import SettingsPage from "./pages/SettingsPage";
import EarningPage from "./pages/EarningAndPaymentPage";

function App() {
	return (
		<div className='flex h-screen bg-gray-950 text-gray-100 overflow-hidden'>
			{/* BG */}
			<div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>

			<Sidebar />
			<Routes>
				<Route path='/' element={<OverviewPage />} />
				<Route path='/upcomingTasks' element={<UpcomingTaskPage />} />
				<Route path='/completedTask' element={<CompletedTaskPage />} />
				<Route path='/Earnings' element={<EarningPage />} />
				<Route path='/settings' element={<SettingsPage />} />
			</Routes>
		</div>
	);
}

export default App;
