import React from 'react';
import { StatusBar } from 'react-native';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

i18n.load('en', require('./locales/en/messages'))
i18n.activate('en')

const App = () => {
  return (
	<I18nProvider i18n={i18n}>
		<StatusBar
			barStyle="dark-content"
			translucent
			backgroundColor="transparent"
		/>
		<Navigation />
	</I18nProvider>
  );
};

export default App;
