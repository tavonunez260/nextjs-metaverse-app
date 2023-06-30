import '../styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<html lang="en">
			<head>
				<link href="https://stijndv.com" rel="preconnect" />
				<link href="https://stijndv.com/fonts/Eudoxus-Sans.css" rel="stylesheet" />
			</head>
			<body>{children}</body>
		</html>
	)
}
