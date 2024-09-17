import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RootStoreProvider } from './context/RootStoreContext.tsx'
import { RootStore } from './dataLayer/stores/RootStore.ts'
import { demoLandingData } from './dataLayer/demoData/demoDataSections.ts'

const useContext = RootStore.create(
  {
    contentStore: {
      sections: demoLandingData.sections.map(section => ({
        ...section,
        cards: section.cards.map(card => ({
          ...card,
          type: "TeaserCard"
        }))
      }))
    }
  }
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootStoreProvider value={useContext}>
    <App />
    </RootStoreProvider>
  </StrictMode>
)
