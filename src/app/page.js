'use client';

import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import Intor from "./components/intor";
import Services from "./components/services";
import Video from "./components/video";
import Customers from './components/customers';
import Contact from './components/contact';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

export default function Home() {

	const theme = createTheme({
		direction: 'rtl',
	});

	return (
		<RTL>
			<ThemeProvider theme={theme}>
				<Intor />
				<Services />
				<Video />
				<Customers />
				<Contact />
			</ThemeProvider>
		</RTL>
	)
}
