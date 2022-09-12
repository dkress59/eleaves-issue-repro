import './dashboard-app.scss'

import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import { DemoApp1 } from ':demo-app-1/demo-app-1'
import { DemoApp2 } from ':demo-app-2/demo-app-2'

function Dashboard() {
	return (
		<main id="dashboard-app">
			<h1 className="welcome">
				<span className="blobs-1" />
				<span className="blobs-2" />
				<span className="content">Dashboard</span>
			</h1>
			<article>
				<Link to="app-1" className="app-card">
					Demo App 1
				</Link>
				<Link to="app-2" className="app-card">
					Demo App 2
				</Link>
			</article>
		</main>
	)
}

export function DashboardApp() {
	return (
		<Routes>
			<Route path="" element={<Dashboard />} />
			<Route path="app-1" element={<DemoApp1 />} />
			<Route path="app-2" element={<DemoApp2 />} />
		</Routes>
	)
}
