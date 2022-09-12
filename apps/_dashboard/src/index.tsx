import './index.scss'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { entryPoint } from ':common/entry-point'

import { DashboardApp } from './dashboard-app'

entryPoint(
	<BrowserRouter>
		<DashboardApp />
	</BrowserRouter>,
)
