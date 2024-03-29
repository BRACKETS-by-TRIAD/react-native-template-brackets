import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'urql'
import { client } from './config/api'
import { Navigation } from './config/Navigation'

i18n.load('en', require('./locales/en/messages'))
i18n.activate('en')

const App = () => {
  return (
    <Provider value={client}>
      <I18nProvider i18n={i18n}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <Navigation />
      </I18nProvider>
    </Provider>
  )
}

export default App
