import './version-footer.scss'

import React, { ReactNode } from 'react'

export function VersionFooter({ children }: { children: ReactNode }) {
	return <aside id="current-version">v{children}</aside>
}
